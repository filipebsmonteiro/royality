<template>
  <div>
    <TopBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
export default {
  name: "SimpleTopBarLayout",
  components: {TopBar}
}
</script>

<style scoped>

</style>