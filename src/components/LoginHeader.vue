<template>
  <div class="login-header">
    <router-link to="/">
      <img src="../assets/icon/tx.png" alt="" />
    </router-link>
    <router-link to="/">电话号码</router-link>
    <router-link style="color: rgb(229, 197, 157); font-size: 14px" to="/">
      编辑个人资料 >
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login-header {
  position: relative;
  padding-top: 5rem;
}
.login-header a img:first-child {
  width: 5rem;
  border-radius: 50%;
  margin-left: 1.5rem;
}
.login-header a:nth-child(2) {
  font-size: 1.1rem;
  position: absolute;
  top: 7rem;
  left: 8rem;
  color: black;
}
</style>