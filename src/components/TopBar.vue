<template>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#" v-b-toggle.sidebar>
            <b-button variant="transparent text-white"><i class="fas fa-bars"></i></b-button>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>

                <b-nav-item>
                    <router-link :to="{name:'homepage'}">Home</router-link>
                </b-nav-item>

                <b-nav-item-dropdown text="Currículo" right>
                  <b-dropdown-item :to="{ name: 'curriculum.ptBR' }">Português</b-dropdown-item>
                  <b-dropdown-item :to="{ name: 'curriculum.en' }">English</b-dropdown-item>
                  <b-dropdown-item :to="{ name: 'curriculum.nintendo' }">Nintendo</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style lang="scss" scoped>
.nav-item{
  a, a > span{
    color: #eeeeee !important;
  }
}
</style>