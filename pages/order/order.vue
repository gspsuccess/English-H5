<template>
	<view class="container">
		<!--选项卡逻辑自己实现即可，此处未做处理-->
		<view :class="{'tui-order-list':scrollTop>=0}">
			<view class="tui-order-item" v-for="(item,index) in list" :key="index" @click="detail(item.id)">
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title">
						<view>订单号：{{item.ordernum}}</view>
						<view class="tui-order-status">{{item.status|formatStatus}}</view>
					</view>
				</tui-list-cell>
				<block v-for="(citem,cindex) in item.suborderinfo" :key="cindex">
					<tui-list-cell padding="0">
						<view class="tui-goods-item">
							<image :src="citem.thisproduct__image|formatImage" class="tui-goods-img"></image>
							<view class="tui-goods-center">
								<view class="tui-goods-name">{{citem.thisproduct__name}}</view>
								<view class="tui-goods-attr"></view>
							</view>
							<view class="tui-price-right">
								<view>￥{{citem.thisproduct__trueprice}}</view>
								<view>x{{citem.num}}</view>
							</view>
						</view>
					</tui-list-cell>
				</block>
				<tui-list-cell :hover="false" unlined>
					<view class="tui-goods-price">
						<view>共{{item.suborderinfo.length}}件商品 合计：</view>
						<view class="tui-size-24">￥</view>
						<view class="tui-price-large">{{item.suborderinfo|sumOrderResult}}</view>
					</view>
				</tui-list-cell>
			</view>
		</view>
		<!--加载loadding-->
		<tui-loadmore v-if="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn" backgroundColor="#fafafa"></tui-nomore>
		<!--加载loadding-->
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
				list:[],
				pageIndex: 1,
				count:0,
				loadding: false,
				pullUpOn: true,
				scrollTop: 0
			}
		},
		onLoad() {
			this.getAll()
		},
		methods: {
			getAll(){
				this.tui.request('/order/myorderinfo','GET',{page:this.pageIndex}).then((res) => {
					if(res.code === 1) {
						this.pageIndex += 1
						this.count = res.count
						this.list = this.list.concat(res.results)
						uni.setStorageSync('orderlist',this.list)
					} else {
						this.tui.toast('获取订单失败')
					}
				}).then((err) => {
					console.log(err)
				})
			},
			detail(id) {
				this.tui.href('/pages/orderDetail/orderDetail?id='+id)
			}
		},
		computed:{
			pages(){
				return Math.ceil(this.count/10)
			}
		},
		onReachBottom() {
			if(this.pages >= this.pageIndex){
				this.loadding = true
				this.pullUpOn = true
				this.getAll()
			} else {
				setTimeout(() => {
					this.loadding = false
					this.pullUpOn = false
				}, 1000)
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-order-item {
		margin-top: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.tui-goods-title {
		width: 100%;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-order-status {
		color: #888;
		font-size: 26rpx;
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
		font-size: 32rpx;
		line-height: 30rpx;
		font-weight: 500;
	}

	.tui-order-btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: #fff;
		padding: 10rpx 30rpx 20rpx;
		box-sizing: border-box;
	}

	.tui-btn-ml {
		margin-left: 20rpx;
	}
</style>
