<template>
  <div>
    <TopBar/>
    <div class="d-flex">
      <SideBar/>
      <div class="content p-3 w-100">
        <b-card>
          <router-view></router-view>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
export default {
  name: "SimpleTopSidebarLayout",
  components: {TopBar, SideBar}
}
</script>

<style scoped>
</style>