<template>
  <div id="container">
      <iframe class="frame" src="https://google.com" style="resize: both;"/>
  </div>
</template>

<script>
export default {
  name: "PositionAndSize",
  data() {
    return {
      align: 'right',
      height:50,
      width: 50
    }
  },
  methods: {
    changeSize(params){
      this.height = params.height
      this.width = params.width
      console.log(params)
    }
  }
}
</script>

<style scoped>
#container {
  min-height: calc(100vh - 140px);
}
.frame{

}
</style>