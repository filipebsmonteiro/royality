<template>
  <b-collapse id="sidebar" class="bg-white" :visible="showSideBar">
    <b-nav vertical class="flex-nowrap">
      <b-nav-item id="sidebar-homepage" :to="{name: 'homepage'}">
        <div class="nav-link-icon"><i class="fas fa-home"/></div>
        Homepage
      </b-nav-item>
      <b-nav-item-dropdown menu-class="bg-transparent border-0 p-0 ml-4 position-relative" no-caret>
        <template v-slot:button-content>
          <div class="nav-link-icon"><i class="fa fa-file-alt"/></div>
          Currículo
          <i class="fa fa-chevron-down ml-auto"/>
        </template>
        <b-dropdown-group class="d-flex flex-column position-relative">
          <b-dropdown-item :to="{ name: 'curriculum.ptBR' }">Português</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'curriculum.en' }">English</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'curriculum.nintendo' }">Nintendo</b-dropdown-item>
        </b-dropdown-group>
      </b-nav-item-dropdown>
    </b-nav>
  </b-collapse>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      showSideBar: true
    }
  },
  mounted() {
    if (window.innerWidth < 992) this.showSideBar = false
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 15rem;
  height: 100vh;
}

::v-deep .nav-link {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  line-height: normal;
  position: relative;
  color: #555555;
  &:hover {
    background-color: #eaecf4;
  }
}

.nav-link-icon {
  font-size: 0.9rem;
  padding-right: 0.5rem;
  display: -webkit-inline-box;
  display: inline-flex;
  color: #a2acba;
  margin-right: 0.5rem;
}

::v-deep .dropdown-item {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

::v-deep .dropdown-menu {
  transform: none !important;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left: #a2acba 1px solid !important;
  box-shadow: 0 0.5rem 1rem transparent;
  width: calc(100% - 1.5rem);

  .dropdown-item{
    box-shadow: transparent !important;
    color: #555555;
    background-color: inherit;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    &:hover{
      background-color: #eaecf4;
    }
  }
}
</style>