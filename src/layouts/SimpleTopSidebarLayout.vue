<template>
  <div>
    <TopBar/>
    <div class="d-flex">
      <SideBar/>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleTopSidebarLayout"
}
</script>

<style scoped>

</style>