<template>
  <div class="content">
    <div class="container-fluid border w-75 rounded-20 overflow-hidden mt-4 mb-5 shadow">
      <div class="background-main">
        <div class="background-after">

<!--          <b-input-group class="rounded-20 border w-25 m-5">-->
<!--            <b-dropdown text="Nome" class="" size="sm" variant="link">-->
<!--              <b-dropdown-item>Nome</b-dropdown-item>-->
<!--              <b-dropdown-item>Empresa</b-dropdown-item>-->
<!--              <b-dropdown-item>Integração Origem</b-dropdown-item>-->
<!--              <b-dropdown-item>Integração Destino</b-dropdown-item>-->
<!--            </b-dropdown>-->
<!--            <b-input size="lg" class="border-0 shadow-none bg-transparent"/>-->
<!--            <b-button variant="light btn-link" class="align-self-center" pill>-->
<!--              <i class="fas fa-search"/>-->
<!--            </b-button>-->
<!--          </b-input-group>-->

        </div>
      </div>

      <b-row>
        <b-col cols="3">
          <b-card class="card-avatar text-center rounded-20 border-bottom-larger" no-body>
          <span class="user-avatar d-flex shadow">
            <img v-if="true" src="/img/core/perfil.jpeg" width="150"
                 height="150">
            <i v-else class="fas fa-user fa-4x m-auto"/>
          </span>
            <h1>Filipe Monteiro</h1>
            <p class="mb-0">Senior Web Developer</p>
            <p>Fullstack</p>
            <b-row class="mt-4 mb-4">
              <b-col>
                <h5 class="text-primary">+ 7 anos</h5>
                <p>Experiência</p>
              </b-col>
              <b-col class="border-left">
                <h5 class="text-primary mb-0">Fullstack</h5>
                <p>Especialidade</p>
              </b-col>
            </b-row>
          </b-card>
          <div class="bg-secondary mt--3 pt-4 pl-2 pr-2 pb-5">
            <div class="d-flex justify-content-center mt-4">
              <h3 style="text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);font-family:Malvie;">Emprego Atual</h3>
            </div>
            <b-card class="rounded-20 border-bottom-larger pl-3 pr-3 pt-1 pb-1 d-flex flex-row justify-content-around align-items-center"
                    no-body>
              <span class="d-table">
                <i class="fas fa-heartbeat fa-2x text-warning"/>
              </span>
              <div>
                <h4 class="text-secondary mb-0" style="font-family:Malvie;">Veus Techonology</h4>
                <p class="mb-0">2020 - Atual</p>
              </div>
            </b-card>
          </div>
        </b-col>
        <b-col cols="9">
          <div class="d-flex justify-content-around mt-5 mb-3 pt-5 pb-4">
            <IconText icon="calendar-alt" icon-padding="2" text="25 de Fev." title/>
            <IconText icon="map-marker-alt" icon-padding="2" text="Rio de Janeiro - BR" title/>
            <IconText icon="graduation-cap" icon-padding="2" text="Faculdade Projeção" title/>
            <div class="d-flex">
              <a href="https://linkedin.com/in/filipebsmonteiro"
                 class="d-flex p-2 text-white border border-white rounded-pill">
                <i class="fab fa-linkedin"/>
              </a>
            </div>
          </div>
          <b-row>
            <b-col cols="8">
              <b-card class="rounded-20 overflow-hidden" no-body>
                <b-card-header>
                  <IconText icon-padding="2" icon-border-color="0" icon="file-alt" text="Resumo" text-color="gray" title/>
                </b-card-header>
                <p class="p-3">Possuo mais de 7 anos de experiência como programador PHP, trabalho atualmente como desenvolvedor PHP Fullstack e uso PHP, Docker, VueJS , Bootstrap, Linux, diversos bancos de dados, utilizo TDD, BDD, SOLID, PSR e tenho aprofundado os meus conhecimentos em arquitetura de softwares e componentização. Também tenho experiência em integrações com API's de marketing da Google e Facebook.</p>
              </b-card>
            </b-col>
            <b-col cols="4">
              <b-card class="rounded-20 overflow-hidden" no-body>
                <b-card-header>
                  <IconText icon-padding="2" text="Algumas Tecnologias" text-color="gray" title/>
                </b-card-header>
                <div class="d-flex justify-content-around mt-3">
                  <i class="fab fa-2x fa-php" style="color:mediumpurple;" v-b-tooltip title="PHP"/>
                  <i class="fab fa-2x fa-laravel" style="color:orangered;" v-b-tooltip title="Laravel"/>
                  <i class="fab fa-2x fa-symfony" v-b-tooltip title="Symfony"/>
                  <i class="fab fa-2x fa-npm" style="color:darkred;" v-b-tooltip title="NPM"/>
                </div>
                <div class="d-flex justify-content-around mt-3">
                  <i class="fab fa-2x fa-yarn" v-b-tooltip title="Yarn"/>
                  <i class="fab fa-2x fa-node-js" style="color:forestgreen;" v-b-tooltip title="Node"/>
                  <i class="fab fa-2x fa-html5" style="color:orangered;" v-b-tooltip title="HTML5"/>
                  <i class="fab fa-2x fa-bootstrap" style="color:rebeccapurple;" v-b-tooltip title="Bootstrap 3 e 4"/>
                </div>
                <div class="d-flex justify-content-around mt-3 mb-3">
                  <i class="fab fa-2x fa-css3-alt" style="color:dodgerblue;" v-b-tooltip title="CSS e SCSS"/>
                  <i class="fab fa-2x fa-sass" style="color:deeppink;" v-b-tooltip title="SASS"/>
                  <i class="fab fa-2x fa-vuejs" style="color:mediumseagreen;" v-b-tooltip title="Vue JS"/>
                  <i class="fab fa-2x fa-react" style="color:dodgerblue;" v-b-tooltip title="React JS"/>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

    </div>
  </div>
</template>

<script>
import IconText from "@/components/IconText";

export default {
  name: "nintendo",
  components: {IconText}
}
</script>

<style lang="scss" scoped>
.content {
  background: url("/img/core/nu_bg_pattern.png");
}

.border-bottom-larger {
  border-bottom: 5px solid #dee2e6 !important;
}

.container-fluid {
  background: #f0f5f9;
  min-height: 100vh;

  ::v-deep p {
    font-family: "Nunito Sans Bold";
    color: #858796;
  }
}

.background-main {
  width: calc(100% + 30px);
  height: 400px;
  margin-left: -15px;
  margin-right: -15px;
  background: url("/img/core/poster-cartaz-super-mario-galaxy-2-game.jpg") top center no-repeat;
  background-size: cover;
  margin-bottom: -145px;
  display: flex;
  align-items: flex-end;

  .background-after {
    width: 100%;
    height: 75%;
    background-image: linear-gradient(transparent, rgba(10,112,253,0.9), rgba(10,112,253,1));
  }
}

::v-deep .bg-primary {
  background-color: #0a70fd !important;
  color: #fffdff !important;
}

::v-deep .bg-secondary {
  background-color: #8dc2f7 !important;
  color: #fffdff !important;
}

::v-deep .bg-warning {
  background-color: #eecd1f !important;
  color: #3b3742 !important;
}

.card-avatar {
  margin-top: calc(75px + 1em);

  .user-avatar {
    background-color: #eeeeee;
    width: 150px;
    height: 150px;
    border: #fffdff 5px solid;
    border-radius: 50%;
    overflow: hidden;
    margin: -75px auto 1em;
  }

  h1, h2, h3, h4, h5 {
    font-family: Malvie;
    color: #858796;
  }
}
</style>