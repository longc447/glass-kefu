<template>
  <!-- 客服 -->
  <button v-if="emitKf" class="vkefu" @click="handleClickF"><text>客服</text></button>
  <button v-else class="vkefu" open-type="contact" bindcontact="handleContact" session-from="sessionFrom"><text>客服</text></button>
</template>

<script>
export default {
  props: {
    emitKf: {
      type: Boolean,
      default: false,
    },
  },
  name: 'icon-kf',
  data() {
    return {};
  },
  methods: {
    handleClickF() {
      this.$emit('openKf');
    },
  },
};
</script>

<style>
.vkefu {
  z-index: 10;
  position: fixed;
  width: 80rpx;
  height: 80rpx;
  border-radius: 80rpx;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  bottom: 200rpx;
  right: 20rpx;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24rpx;
}
</style>
