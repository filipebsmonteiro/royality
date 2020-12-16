<template>
  <div>
    <h1>Home Page</h1>
    <hr/>
    <div class="d-flex flex-fill justify-content-between">
      <b-badge variant="success rounded-pill bounce" rounded>Bem-vindo (a)!</b-badge>
      <b-badge variant="warning rounded-pill pulsate-warning">Welcome!</b-badge>
      <b-badge variant="primary rounded-pill bounce">Bienvenue!</b-badge>
      <b-badge variant="info rounded-pill bounce pulsate-info">Bienvenidos!</b-badge>
      <b-badge variant="danger rounded-pill bounce">Benvenuto!</b-badge>
    </div>
    <CountDownRounded/>

    <b-input-group class="rounded-20 border w-25 m-5">
      <b-dropdown text="Nome" class="" size="sm" variant="link">
        <b-dropdown-item>Nome</b-dropdown-item>
        <b-dropdown-item>Empresa</b-dropdown-item>
        <b-dropdown-item>Integração Origem</b-dropdown-item>
        <b-dropdown-item>Integração Destino</b-dropdown-item>
      </b-dropdown>
      <b-input size="lg" class="border-0 shadow-none bg-transparent"/>
      <b-button variant="light btn-link" class="align-self-center" pill>
        <i class="fas fa-search"/>
      </b-button>
    </b-input-group>

    <form-group-float-label />
    <br>
    <br>
    <br>
    <br>

    <div class="row">
      <div class="col">
        <img src="/img/guias/Captura de tela de 2020-10-06 14-30-02.png" class="w-100">
      </div>
      <div class="col">
        <img src="/img/guias/Captura de tela de 2020-10-06 14-30-25.png" class="w-100">
      </div>
      <div class="col">
        <img src="/img/guias/Captura de tela de 2020-10-06 14-30-34.png" class="w-100">
      </div>
      <div class="col">
        <img src="/img/guias/Captura de tela de 2020-10-09 09-01-10.png" class="w-100">
      </div>
    </div>
  </div>
</template>

<script>
import CountDownRounded from "@/components/CountDownRounded";
import FormGroupFloatLabel from "@/components/form-group-float-label";
export default {
  name: "HomePage",
  components: {FormGroupFloatLabel, CountDownRounded},
}
</script>

<style lang="scss" scoped>
.bounce {
  animation: bounce 0.5s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
  animation-iteration-count: infinite;
  -webkit-animation-name: bounce;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-direction: alternate;
  -webkit-animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
  -webkit-animation-iteration-count: infinite;
}

@keyframes bounce {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 3px, 0);
  }
}

@-webkit-keyframes bounce {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0, 3px, 0);
    transform: translate3d(0, 3px, 0);
  }
}


.pulsate-warning {
  -webkit-animation: pulsate-warning 1s infinite alternate;
  -moz-animation: pulsate-warning 1s infinite alternate;
  animation: pulsate-warning 1s infinite alternate;
}

.pulsate-info {
   -webkit-animation: pulsate-info 1s infinite alternate;
   -moz-animation: pulsate-info 1s infinite alternate;
   animation: pulsate-info 1s infinite alternate;
 }

@keyframes pulsate-warning {
  0% {
    box-shadow: 0 0 0 0 #ffbc34;
  }
  100% {
    box-shadow: 0 0 4px 4px #ffbc34;
  }
}

@keyframes pulsate-info {
  0% {
    box-shadow: 0 0 0 0 #4fc3f7;
  }
  100% {
    box-shadow: 0 0 4px 4px #4fc3f7;
  }
}

</style>