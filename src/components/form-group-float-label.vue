<template>
<!--  <div class="label-float">-->
<!--    <label>{{ label }}</label>-->
<!--    <slot />-->
<!--  </div>-->
  <div class="label-float">
    <b-input type="text" id="candidateName" name="candidateName" placeholder=" "/>
    <label for="candidateName">Candidate name</label>
  </div>
</template>

<script>
export default {
  name: "form-group-float-label",
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.label-float{
  position: relative;
  margin: 5px 0px;
}
.label-float label{
  position: absolute;
  padding: 0.375rem 0.75rem;
  top:15px;
  cursor: text;
}
.label-float input:focus + label,
.label-float input:not(:placeholder-shown) + label{
  opacity:1;
  transform: scale(.9) translateY(-55%) translateX(-0.375rem);
  background-color: white;
}
.label-float input:focus{
  outline:none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}
.label-float{
  padding: 15px;
  margin:15px 0px;
}
.label-float input{
  width:100%;
  padding-left: 10px;
}
.label-float label,
.label-float input{
  transition: all 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity:0.5;
}
</style>