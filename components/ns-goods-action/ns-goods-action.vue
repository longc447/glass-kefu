<template>
	<view class="ns-goods-action" :class="{ 'bottom-safe-area': safeArea, iphone12:isiPhone }">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'ns-goods-action',
		props: {
			safeArea: {
				type: Boolean,
				default: false
			},
			isiPhone: {
				type: Boolean,
				default: false
			}
		}
	};
</script>

<style>
	.iphone12 {
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.ns-goods-action {
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		background-color: #fff;
		z-index: 9;
	}

	.ns-goods-action.bottom-safe-area {
		padding-bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
