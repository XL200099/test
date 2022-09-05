<template>
  <div>
    <!-- 保活机制 保持组件原始状态 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>