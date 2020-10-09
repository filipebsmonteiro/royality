<template>
  <div class="container mt-5 bg-primary">
    <div class="d-flex">
      <b-input size="lg" class="bg-transparent rounded-20"/>
      <b-button variant="light btn-link" class="align-self-center ml--5" pill><i class="fas fa-search"/></b-button>
    </div>

    <div class="d-flex justify-content-around">
      <IconText icon="calendar-alt" text="25 de Fev."/>
      <IconText icon="map-marker-alt" text="Rio de Janeiro - BR"/>
      <IconText icon="graduation-cap" text="Faculdade Projeção"/>
    </div>

    <b-card class="bg-warning p-0 rounded-20" no-body>
      <b-card-header>
        <IconText icon-padding="2" icon-border-color="0" icon="file-alt" text="Biografia" text-color="gray" title/>
      </b-card-header>
      <p class="p-3">Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem
        ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum </p>
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

<style scoped>
::v-deep .bg-warning {
  background-color: #f7cc00 !important;
}
::v-deep p {
  font-family: "Nunito Sans Bold";
  color: #858796;
}
</style>