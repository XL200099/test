<template>
  <!-- 我的页面 -->
  <div class="mine">
    <!-- 头部 -->
    <div class="header">
      <!-- fiexd 会固定在顶部 -->
      <mt-navbar fixed>
        <mt-tab-item>爱空间装修</mt-tab-item>
      </mt-navbar>
      <!-- 头像 -->
      <div class="tx">
        <router-link to="/">
          <img src="../assets/icon/tx.png" alt="" />
        </router-link>
        <router-link to="/">请点击登录</router-link>
      </div>
      <!-- 登录之后的头部 -->
      <login-header style="display: none" />

      <!-- 会员业务 -->
      <div class="hy">
        <router-link to="/rights">
          <mt-button type="primary">
            <van-icon name="vip-card" style="font-size: 24px" />
            会员权益
          </mt-button>
        </router-link>
        <router-link to="/">
          <mt-button type="primary">
            <van-icon name="gem" style="font-size: 24px" />
            我的积分
          </mt-button>
        </router-link>
      </div>
    </div>

    <!-- 内容 -->
    <!-- 1.会员服务 -->
    <div class="c1">
      <div class="container">
        <a href="/">
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/ZWU3MGJjMWIyNjMwMmJjNDY3ODY0ODMxODM4MDJhNjBfMjAyMi0wNi0yNFQxODo1NzoyNy44MzQ=.jpg"
            alt=""
          />
        </a>
        <h4>会员服务</h4>
        <ul>
          <li>
            <router-link to="/">
              <img src="../assets/icon/hy.jpg" alt="" />
            </router-link>
            <span>邀请好友</span>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/icon/jf.jpg" alt="" />
            </router-link>
            <span>积分商城</span>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/icon/hd.jpg" alt="" />
            </router-link>
            <span>会员活动</span>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/icon/fl.jpg" alt="" />
            </router-link>
            <span>会员福利</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 2.我的服务 -->
    <div class="c2">
      <div class="container">
        <h4>我的服务</h4>
        <ul>
          <li>
            <router-link to="/">
              <img src="../assets/icon/dj.png" alt="" />
            </router-link>
            <span>支付订金</span>
          </li>
          <li>
            <router-view />
            <router-link to="/orderform">
              <img style="margin-top: 3px" src="../assets/icon/dd.png" alt="" />
            </router-link>
            <span>我的订单</span>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/icon/ht.png" alt="" />
            </router-link>
            <span>我的合同</span>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/icon/cl.png" alt="" />
            </router-link>
            <span>材料清单</span>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/">
              <img src="../assets/icon/zx.png" alt="" />
            </router-link>
            <span>装修播报</span>
          </li>
          <li style="margin-left: 12px">
            <router-link to="/">
              <img style="height: 50px" src="../assets/icon/sd.png" alt="" />
            </router-link>
            <span>水电VR</span>
          </li>
          <li style="margin-left: 13px">
            <router-link to="/">
              <img src="../assets/icon/bx.png" alt="" />
            </router-link>
            <span>竣工保修</span>
          </li>
          <li>
            <router-link to="/">
              <img style="height: 50px" src="../assets/icon/sh.png" alt="" />
            </router-link>
            <span>售后服务</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 3.我在现场 -->
    <div class="c3">
      <div class="container">
        <h4>我在现场</h4>
        <ul>
          <li>
            <router-link to="/">
              <img src="../assets/icon/qd.png" alt="" />
            </router-link>
            <span>现场签到</span>
          </li>
          <li>
            <router-link to="/">
              <img
                style="margin-top: 3px"
                src="../assets/icon/yqk.png"
                alt=""
              />
            </router-link>
            <span>邀请卡</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 尾部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o">设计师</van-tabbar-item>
      <van-tabbar-item icon="search">案例</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import LoginHeader from "@/components/LoginHeader.vue";
export default {
  components: { LoginHeader },
  data() {
    return {
      active: 3,
    };
  },
};
</script>

<style>
.mine {
  background-color: rgba(246, 246, 246);
}

/*******头部 *******/
/* 标题样式 */
.header {
  background-color: rgba(255, 236, 224);
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom-width: 0;
  padding-top: 2rem;
  padding-bottom: 1.1rem;
}
.mint-tab-item {
  background-color: rgba(255, 236, 224);
}
.mint-tab-item-label {
  font-weight: 600;
  color: rgba(75, 67, 94);
  font-size: 1.1rem;
}

/* 头像样式 */
.tx {
  position: relative;
  padding-top: 5rem;
}
.tx a img:first-child {
  width: 5rem;
  border-radius: 50%;
  margin-left: 1.5rem;
}
.tx a:last-child {
  font-size: 1.1rem;
  position: absolute;
  top: 7rem;
  left: 8rem;
  color: black;
}

/* 会员按钮样式 */
.hy {
  width: 100%;
  padding-bottom: 1.2rem;
  margin: 1.5rem auto 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
.hy button {
  width: 35vw;
  background-color: rgba(55, 55, 55);
  color: rgba(255, 216, 197);
  font-size: 1.1rem;
  margin: 0 5vw;
}

/*******内容 *******/
/*******1.会员服务*******/
.container {
  width: 90vw;
  margin: 0 auto;
}
.c1 {
  background-color: white;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  padding: 1rem 0;
}
.c1 a img {
  height: 30vw;
  width: 91vw;
  border-radius: 10px;
}
h4 {
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 400;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(240, 238, 238);
}
ul {
  display: flex;
  justify-content: space-between;
}
ul li {
  text-align: center;
}
ul li a {
  display: block;
}
ul li span {
  font-size: 14px;
}
.c1 ul li img {
  width: 13vw;
  height: 7vh;
  padding: 0;
}

/* 2.我的服务 */
/* 3.我在现场 */
.c2,
.c3 {
  background-color: white;
  padding-bottom: 20px;
}
.c2 h4,
.c3 h4 {
  margin-top: 20px;
  padding-top: 15px;
}
.c3 ul {
  display: flex;
  margin-bottom: 50px;
  justify-content: flex-start;
}
.c3 ul li:last-child {
  /* 问题1. */
  /* 设置两个li之间的距离 */
  margin-left: 9vw;
}
</style>