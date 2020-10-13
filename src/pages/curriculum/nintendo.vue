<template>
  <div class="container-fluid w-75">
    <div class="d-flex pt-5 mb-5">
      <b-input size="lg" class="bg-transparent rounded-20"/>
      <b-button variant="light btn-link" class="align-self-center ml--5" pill><i class="fas fa-search"/></b-button>
    </div>

    <div class="d-flex justify-content-around mb-5">
      <IconText icon="calendar-alt" text="25 de Fev." title/>
      <IconText icon="map-marker-alt" text="Rio de Janeiro - BR" title/>
      <IconText icon="graduation-cap" text="Faculdade Projeção" title/>
    </div>

    <b-card class="bg-warning p-0 rounded-20" no-body>
      <b-card-header>
        <IconText icon-padding="2" icon-border-color="0" icon="file-alt" text="Biografia" text-color="gray" title/>
      </b-card-header>
      <p class="p-3">Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem
        ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum </p>
    </b-card>

    <b-card class="card-avatar text-center rounded-20 w-25" no-body>
      <span class="user-avatar d-flex shadow">
        <img v-if="false" src="/img/guias/Captura%20de%20tela%20de%202020-10-09%2009-01-10.png" width="150"
             height="150">
        <i v-else class="fas fa-user fa-4x m-auto"/>
      </span>
      <h1>Super Mario</h1>
      <p class="mb-0">Encanador - Herói da Princesa</p>
      <p>Matador de Tartarugas</p>
      <b-row class="mt-4 mb-4">
        <b-col>
          <h3>32,455</h3>
          <p>Conexões</p>
        </b-col>
        <b-col class="border-left">
          <h3>2,312</h3>
          <p>Seguidores</p>
        </b-col>
      </b-row>
    </b-card>
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
.container-fluid {
  background: #8dc2f7 url("/img/core/nu_bg_pattern.png");
  min-height: 100vh;

  ::v-deep p {
    font-family: "Nunito Sans Bold";
    color: #858796;
  }
}

::v-deep .bg-primary {
  background-color: #0767eb !important;
  color: #fffdff !important;
}

::v-deep .bg-warning {
  background-color: #eecd1f !important;
  color: #46404a !important;
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

  h1, h2, h3, h4 {
    font-family: Malvie;
    color: #858796;
  }
}
</style>