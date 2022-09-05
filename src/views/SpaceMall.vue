<template>
  <!-- 空间商城 -->
  <div class="space-mall">
    <!-- 头部 -->
    <van-nav-bar title="空间商城" left-text="" left-arrow />

    <!-- 内容 -->
    <!-- 1.城市 -->
    <div class="c1">
      <span>当前城市：不限</span>
      <span>切换城市 ></span>
    </div>

    <!-- 2.卡片 -->
    <div class="c2">
      <ul>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/MV8yMDIyLTA2LTI1VDE3OjAyOjE5LjUwMA==.jpg"
            alt=""
          />
          <span>【成都8周年专属】2000元订金</span>
          <h4>￥ 2000</h4>
          <del>￥ 2000</del>
        </li>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/MV8yMDIyLTA2LTI1VDE3OjAyOjE5LjUwMA==.jpg"
            alt=""
          />
          <span>【成都8周年专属】1000元订金</span>
          <h4>￥ 1000</h4>
          <del>￥ 1000</del>
        </li>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/MV8yMDIyLTA2LTI1VDE3OjAyOjE5LjUwMA==.jpg"
            alt=""
          />
          <span>【成都8周年专属】1000元订金</span>
          <h4>￥ 1000</h4>
          <del>￥ 1000</del>
        </li>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/MV8yMDIyLTA2LTI1VDE3OjAyOjE5LjUwMA==.jpg"
            alt=""
          />
          <span>【成都8周年专属】1000元订金</span>
          <h4>￥ 1000</h4>
          <del>￥ 1000</del>
        </li>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/MV8yMDIyLTA2LTI1VDE3OjAyOjE5LjUwMA==.jpg"
            alt=""
          />
          <span>【成都8周年专属】1000元订金</span>
          <h4>￥ 1000</h4>
          <del>￥ 1000</del>
        </li>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/MV8yMDIyLTA2LTI1VDE3OjAyOjE5LjUwMA==.jpg"
            alt=""
          />
          <span>【成都8周年专属】1000元订金</span>
          <h4>￥ 1000</h4>
          <del>￥ 1000</del>
        </li>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/MV8yMDIyLTA2LTI1VDE3OjAyOjE5LjUwMA==.jpg"
            alt=""
          />
          <span>【成都8周年专属】1000元订金</span>
          <h4>￥ 1000</h4>
          <del>￥ 1000</del>
        </li>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/MV8yMDIyLTA2LTI1VDE3OjAyOjE5LjUwMA==.jpg"
            alt=""
          />
          <span>【成都8周年专属】1000元订金</span>
          <h4>￥ 1000</h4>
          <del>￥ 1000</del>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* 通用 */
body {
  background-color: rgba(249, 249, 249);
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

/******* 内容 *******/
/******* 1.城市 *******/
.c1 {
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
}
.c1 span {
  line-height: 60px;
}

/******* 2.卡片 *******/
.c2 {
  padding: 0 10px;
}
.c2 ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.c2 ul li {
  background-color: white;
  width: 46vw;
  height: 40vh;
  border-radius: 5px;
  margin-bottom: 10px;
}
.c2 ul li img {
  width: 100%;
  height: 22vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 10px;
}
.c2 ul li span {
  font-size: 15px;
  display: block;
  margin: 0 5px;
}
.c2 ul li h4 {
  display: inline-block;
  font-size: 18px;
  color: rgba(255, 120, 14);
  font-weight: 400;
  margin-left: 10px;
}
.c2 ul li del {
  margin-left: 5px;
  display: inline-block;
  font-size: 12px;
  color: #ccc;
}
</style>