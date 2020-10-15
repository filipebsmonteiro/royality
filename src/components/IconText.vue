<template>
  <div class="d-flex align-items-center">
    <i :class="
    'fas fa-' + icon +
    ' border border-'+ iconBorderColor +
    ' bg-'+ iconBgColor +
    ' p-' + iconPadding +
    ' text-'+ iconColor +
    'd-table rounded-pill'"/>
    <h1 v-if="title" :class="'ml-3 mb-0 text-'+ textColor +' align-self-center'">{{ text }}</h1>
    <p v-else :class="'ml-3 mb-0 text-'+ textColor +' align-self-center'">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "IconText",
  props: {
    title: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'atom'
    },
    iconBgColor: {
      type: String,
      default: 'primary'
    },
    iconBorderColor: {
      type: String,
      default: 'white'
    },
    iconColor: {
      type: String,
      default: 'white'
    },
    iconPadding: {
      type: String,
      default: '3'
    },
    text: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style scoped>
  h1{
    font-family: 'Malvie';
    font-size: 20px;
  }
</style>