<template>
  <!-- 我的订单 -->
  <div class="order-form">
    <!-- 头部 -->
    <van-nav-bar title="我的订单" left-text="" left-arrow />

    <!-- 导航栏 -->
    <van-tabs v-model="active">
      <van-tab title="已交订"></van-tab>
      <van-tab title="已签约"></van-tab>
      <van-tab title="售后/退款"></van-tab>
    </van-tabs>

    <!-- 内容 -->
    <router-view />
    <div class="mr">
      <img src="@/assets/icon/mr.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
body {
  background-color: rgba(249, 249, 249);
  color: gray;
}
/*******头部 *******/
.van-nav-bar__content {
  padding-top: 4vh;
}
.van-nav-bar .van-icon {
  font-size: 18px;
  color: gray;
}
.van-nav-bar__title {
  font-weight: 600;
  color: rgba(75, 67, 94);
  font-size: 1.05rem;
}
.van-nav-bar__left {
  padding-top: 4vh;
}

/* 导航栏 */
.van-tab {
  font-size: 18px;
  color: #bbb;
}
.van-tab--active {
  color: orange;
  border-bottom: 3px solid orange;
}
.van-tabs__line {
  background-color: orange;
}

/******* 内容 *******/
.mr img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
