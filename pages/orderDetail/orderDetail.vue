<template>
	<view class="container">
		<view class="tui-order-item">
			<tui-list-cell :hover="false" :lineLeft="false">
				<view class="tui-goods-title">
					商品信息
				</view>
			</tui-list-cell>
			<block v-for="(item,index) in order.suborderinfo" :key="index">
				<tui-list-cell padding="0">
					<view class="tui-goods-item">
						<image :src="item.thisproduct__image|formatImage" class="tui-goods-img"></image>
						<view class="tui-goods-center">
							<view class="tui-goods-name">{{item.thisproduct__name}}</view>
							<view class="tui-goods-attr"></view>
						</view>
						<view class="tui-price-right">
							<view>￥{{item.thisproduct__trueprice}}</view>
							<view>x{{item.num}}</view>
						</view>
					</view>
				</tui-list-cell>
			</block>
			<view class="tui-goods-info">
				<view class="tui-price-flex tui-size24">
					<view>商品总额</view>
					<view>￥{{order.suborderinfo|sumOrderResult}}</view>
				</view>
				<view class="tui-price-flex tui-size32 tui-pbtm20">
					<view class="tui-flex-shrink">合计</view>
					<view class="tui-goods-price">
						<view class="tui-size-24">￥</view>
						<view class="tui-price-large">{{order.suborderinfo|sumOrderResult}}</view>
					</view>
				</view>
				<view class="tui-price-flex tui-size32" v-if="!repeatPay">
					<view class="tui-flex-shrink">实付款</view>
					<view class="tui-goods-price tui-primary-color">
						<view class="tui-size-24">￥</view>
						<view class="tui-price-large">{{order.suborderinfo|sumOrderResult}}</view>
					</view>
				</view>
			</view>
		</view>

		<view class="tui-order-info">
			<tui-list-cell :hover="false">
				<view class="tui-order-title">
					订单信息
				</view>
			</tui-list-cell>
			<view class="tui-order-content">
				<view class="tui-order-flex">
					<view class="tui-item-title">订单号:</view>
					<view class="tui-item-content">{{order.ordernum}}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">创建时间:</view>
					<view class="tui-item-content">{{order.date_joined}}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">付款时间:</view>
					<view class="tui-item-content">2019-05-26 10:44</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">订单状态:</view>
					<view class="tui-item-content">{{order.status|formatStatus}}</view>
				</view>
			</view>
		</view>
		<view class="tui-safe-area"></view>
		<view class="tui-tabbar" v-if="repeatPay">
			<view class="tui-flex-end tui-color-red tui-pr-20">
				<view class="tui-black">实付金额:</view>
				<view class="tui-size-26">￥</view>
				<view class="tui-price-large">{{order.suborderinfo|sumOrderResult}}</view>
			</view>
			<view class="tui-pr25">
				<tui-button width="200rpx" height="70rpx" :size="28" type="danger" shape="circle" @click="btnPay">确认支付</tui-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		filters:{
			formatStatus(value){
				const status_arr = ['待支付','已支付','支付失败','订单关闭']
				return status_arr[value]
			},
			formatImage(value){
				return 'https://chinanets.cn/media' + value.split('all_media')[1]
			},
			sumOrderResult(value){
				let result = 0
				for(let item of value){
					result += item.thisproduct__trueprice * item.num
				}
				
				return result
			}
		},
		data() {
			return {
				id:0,
				order:{},
				status: 1
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getOne()
		},
		computed:{
			repeatPay(){
				return this.order.status === 0 || this.order.status == 2
			}
		},
		methods: {
			getOne(){
				let orderlist = uni.getStorageSync('orderlist')
				this.order = orderlist.find(item => item.id == this.id)
				console.log(this.order)
			},
			btnPay() {
				let postData = {
					proid:this.order.suborderinfo[0].thisproduct_id,
					subid:this.order.id,
					ordernum:this.order.ordernum
				}
				this.tui.request('/order/payorder','POST',postData).then((res) => {
					if(res.code === 1) {
						this.wxpay(res.results)
					} else {
						this.tui.toast('该订单已经支付过了')
					}
				}).then((err) => {
					console.log(err)
				})
			},
			wxpay(data){
				data.appId = 'wxab7a67328ad3052d'
				const jweixin = require('jweixin-module');
				jweixin.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
					appId: data.appId, // 必填，公众号的唯一标识
					timestamp: data.timeStamp.toString(), // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，生成签名的随机串
					signature: data.signature, // 必填，签名
					jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
				});
				
				jweixin.ready(() => {
					jweixin.chooseWXPay({
						timestamp: data.timeStamp.toString(), 
						nonceStr:data.nonceStr, // 支付签名随机串，不长于 32 位
						package: 'prepay_id=' + data.prepay_id, // 统一支付接口返回的prepay_id参数值
						signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
						paySign: data.paySign, // 支付签名
						success:(res) => {//支付成功回调
							if(res.errMsg === 'chooseWXPay:ok'){
								this.tui.href('/pages/orderResult/orderResult?id='+this.id);
							} else {
								this.tui.toast('支付失败，请重新发起支付')
							}						
						},
						fail:(err) => {
							this.tui.toast('支付失败，请重新发起支付')
						}
					});
				});
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 118rpx;
	}

	.tui-order-header {
		width: 100%;
		height: 160rpx;
		position: relative;
		background-color: #EB0909;
	}

	.tui-img-bg {
		width: 100%;
		height: 160rpx;
	}

	.tui-header-content {
		width: 100%;
		height: 160rpx;
		position: absolute;
		z-index: 10;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 70rpx;
		box-sizing: border-box;
	}

	.tui-status-text {
		font-size: 34rpx;
		line-height: 34rpx;
		color: #FEFEFE;
	}

	.tui-reason {
		font-size: 24rpx;
		line-height: 24rpx;
		color: rgba(254, 254, 254, 0.75);
		padding-top: 15rpx;
		display: flex;
		align-items: center;
	}

	.tui-reason-text {
		padding-right: 12rpx;
	}

	.tui-status-img {
		width: 80rpx;
		height: 80rpx;
		display: block;
	}

	.tui-flex-box {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.tui-icon-img {
		width: 44rpx;
		height: 44rpx;
		flex-shrink: 0;
	}

	.tui-logistics {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 24rpx 0 20rpx;
		box-sizing: border-box;
	}

	.tui-logistics-text {
		font-size: 26rpx;
		line-height: 32rpx;
	}

	.tui-logistics-time {
		font-size: 24rpx;
		line-height: 24rpx;
		padding-top: 16rpx;
		color: #666
	}

	.tui-addr {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 20rpx;
		box-sizing: border-box;
	}

	.tui-addr-userinfo {
		font-size: 30rpx;
		line-height: 30rpx;
		font-weight: bold;
	}

	.tui-addr-text {
		font-size: 24rpx;
		line-height: 32rpx;
		padding-top: 16rpx;
	}

	.tui-addr-tel {
		padding-left: 40rpx;
	}

	.tui-order-item {
		margin-top: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.tui-goods-title {
		width: 100%;
		font-size: 28rpx;
		line-height: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}


	.tui-goods-item {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}

	.tui-goods-img {
		width: 180rpx;
		height: 180rpx;
		display: block;
		flex-shrink: 0;
	}

	.tui-goods-center {
		flex: 1;
		padding: 20rpx 8rpx;
		box-sizing: border-box;
	}

	.tui-goods-name {
		max-width: 310rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 26rpx;
		line-height: 32rpx;
	}

	.tui-goods-attr {
		font-size: 22rpx;
		color: #888888;
		line-height: 32rpx;
		padding-top: 20rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-price-right {
		text-align: right;
		font-size: 24rpx;
		color: #888888;
		line-height: 30rpx;
		padding-top: 20rpx;
	}

	.tui-color-red {
		color: #E41F19;
		padding-right: 30rpx;
	}

	.tui-goods-price {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		font-size: 24rpx;
	}

	.tui-size-24 {
		font-size: 24rpx;
		line-height: 24rpx;
	}
	
	.tui-price-large {
		font-size: 34rpx;
		line-height: 32rpx;
		font-weight: 600;
	}

	.tui-goods-info {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
	}

	.tui-price-flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-size24 {
		padding-bottom: 20rpx;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #888;
	}

	.tui-size32 {
		font-size: 32rpx;
		line-height: 32rpx;
		font-weight: 500;
	}

	.tui-pbtm20 {
		padding-bottom: 20rpx;
	}

	.tui-flex-shrink {
		flex-shrink: 0;
	}

	.tui-primary-color {
		color: #EB0909;
	}

	.tui-order-info {
		margin-top: 20rpx;
	}

	.tui-order-title {
		position: relative;
		font-size: 28rpx;
		line-height: 28rpx;
		padding-left: 12rpx;
		box-sizing: border-box;
	}

	.tui-order-title::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		border-left: 4rpx solid #EB0909;
		height: 100%;
	}

	.tui-order-content {
		width: 100%;
		padding: 24rpx 30rpx;
		box-sizing: border-box;
		background: #fff;
		font-size: 24rpx;
		line-height: 30rpx;
	}

	.tui-order-flex {
		display: flex;
		padding-top: 18rpx;
	}

	.tui-order-flex:first-child {
		padding-top: 0
	}

	.tui-item-title {
		width: 132rpx;
		flex-shrink: 0;
	}

	.tui-item-content {
		color: #666;
		line-height: 32rpx;
	}

	.tui-safe-area {
		height: 1rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-tabbar {
		width: 100%;
		height: 98rpx;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-size: 26rpx;
		box-shadow: 0 0 1px rgba(0, 0, 0, .3);
		padding-bottom: env(safe-area-inset-bottom);
		z-index: 996;
	}

	.tui-btn-mr {
		margin-right: 30rpx;
	}
	
	.tui-pr-30 {
		padding-right: 30rpx;
	}
	
	.tui-pr-20 {
		padding-right: 20rpx;
	}
	
	.tui-none-addr {
		height: 80rpx;
		padding-left: 5rpx;
		display: flex;
		align-items: center;
	}
	
	.tui-addr-img {
		width: 36rpx;
		height: 46rpx;
		display: block;
		margin-right: 15rpx;
	}
	
	
	.tui-pr25 {
		padding-right: 25rpx;
	}
	.tui-flex-end {
		display: flex;
		align-items: flex-end;
		padding-right: 0;
	}
	.tui-black {
		color: #222;
		line-height: 30rpx;
	}
	.tui-size-26 {
		font-size: 26rpx;
		line-height: 26rpx;
	}
</style>
