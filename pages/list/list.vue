<template>
	<view class="container">
		<block v-for="(item, index) in cards" :key="index">
			<tui-card :title="item.title" :tag="item.tag" :header="item.header" @click="detail(item.id)">
				<template v-slot:body>
					<view class="tui-article"><image :src="item.banner.url" class="tui-article-img"></image></view>
				</template>
				<template v-slot:footer>
					<view class="tui-default tui-flex">
						<text>￥{{item.price}}元</text>
						<tui-icon name="arrowright" :size="20" color="#ccc" class="tui-right"></tui-icon>
					</view>
				</template>
			</tui-card>
		</block>
	</view>
</template>

<script>
const isWechat = () => {
	return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === 'micromessenger';
};
export default {
	onLoad(e) {
		if(this.getUrlCode('token')){
			uni.setStorageSync('thorui_token','Bearer ' + this.getUrlCode('token'))
		}
		let token = uni.getStorageSync('thorui_token')

		if(!token){
			this.getCode()
		} else {
			this.tui.request('/productlist?url=https://wechat.chinanets.cn','GET').then((res) => {
				if(res.code === 1) {
					uni.setStorageSync('products',res.results)
					this.cards = this.formatProducts(res.results)
				}
			}).then((err) => {
				console.log(err)
			})
		}
	},
	data() {
		return {
			cards: []
		};
	},
	methods: {
		formatProducts(products){
			let products_format = []
			for(let item of products){
				products_format.push({
					id:item.id,
					banner:{
						url: 'https://chinanets.cn/media' + item.image.split('all_media')[1]
					},
					title:{
						text:item.name
					},
					price:item.trueprice,
					header: {
						line: true,
						bgcolor: '#fafafa'
					}
				})
			}
			
			return products_format
		},
		getCode() {
			if (isWechat()) {
				const appid = 'wxab7a67328ad3052d';
				const redirect_uri = 'https://chinanets.cn/productlist?url=abc';
				window.location.href =
					'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
					appid +
					'&redirect_uri=' +
					encodeURIComponent(redirect_uri) +
					'&response_type=code&scope=snsapi_base&state=1#wechat_redirect';
			} else {
				this.tui.toast('请在微信端打开页面');
			}
		},
		getUrlCode(name) {
			return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null;
		},
		detail: function(id) {
			this.tui.href('/pages/product/product?id=' + id);
		}
	}
};
</script>

<style>
page {
	background: #f0f0f0;
}

.container {
	padding-bottom: env(safe-area-inset-bottom);
}

.tui-card {
	margin: 30rpx 30rpx 10rpx 30rpx;
}
.tui-card:last-child {
	margin-bottom: 40rpx;
}
.tui-title {
	width: 100%;
	padding: 70rpx 30rpx 30rpx 30rpx;
	box-sizing: border-box;
	font-size: 30rpx;
	line-height: 30rpx;
	color: #666;
}

.tui-default {
	padding: 20rpx 30rpx;
}

.tui-default text {
	color: #f60;
	font-weight: bold;
}

.tui-article {
	position: relative;
}

.tui-article-img {
	width: 100%;
	height: 300rpx;
	display: block;
}

.tui-flex {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.tui-mr {
	margin-right: 20rpx;
}

.tui-content {
	padding: 0rpx 30rpx 20rpx 120rpx;
	box-sizing: border-box;
	font-size: 34rpx;
	font-weight: 400;
	color: #333;
}
</style>
