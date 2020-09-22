<template>
  <b-card class="page mt-4 mb-5 ml-auto mr-auto border-0">
    <b-card-title class="d-flex align-items-end">
      <h1>Filipe Eduardo B.S. Monteiro</h1>
    </b-card-title>

    <hr>
    <div class="row">
      <div class="col-sm-9">
        <h3><i class="fas fa-user-alt mr-3 text-primary"/> Resumo</h3>
        <div class="d-flex flex-column ml-5 mb-4">
          <p>Possuo mais de 7 anos de experiência como programador PHP, trabalho atualmente como desenvolvedor PHP Fullstack e uso PHP, Docker, VueJS , Bootstrap, Linux, diversos bancos de dados, utilizo TDD, BDD, SOLID, PSR e tenho aprofundado os meus conhecimentos em arquitetura de softwares e componentização. Também tenho experiência em integrações com API's de marketing da Google e Facebook.</p>
          <p>Algumas tecnologias que tenho experiência:</p>
          <ul>
            <li>PHP</li>
            <ul>
              <li>5 e 7</li>
              <li>Laravel 5 a 7</li>
              <li>Symfony 2 e 4</li>
              <li>Codeigniter</li>
              <li>Slim</li>
            </ul>

            <li>Frontend</li>
            <ul>
              <li>NPM e Yarn (diversos pacotes)</li>
              <li>ECMAScript 2015/2016/2017</li>
              <li>jQuery</li>
              <li>Blade, Twig</li>
              <li>HTML5</li>
              <li>Bootstrap 3 e 4</li>
              <li>CSS, SCSS, Less, Sass</li>
              <li>Vue (VUE-CLI, Nuxt)</li>
              <li>Conhecimento em React</li>
            </ul>
          </ul>
        </div>

        <h3><i class="fa fa-suitcase mr-3 text-primary"/> Histórico de Trabalho</h3>
        <div class="d-flex flex-column ml-5 mb-4">
          <h5>Desenvolvedor na Veus Technology, Rio de Janeiro</h5>
          <p class="text-muted">Janeiro 2020 – Atualmente</p>

          <h5>Desenvolvedor no GranCursos, Brasília</h5>
          <p class="text-muted">Julho 2019 – Janeiro 2020</p>

          <h5>Analista e Desenvolvedor na Bratech, Brasília</h5>
          <p class="text-muted">Janeiro 2017 – Junho 2019</p>

          <h5>Desenvolvedor FullStack na Indra, Brasília</h5>
          <p class="text-muted">Janeiro 2013 – Setembro 2015</p>
        </div>

        <h3><i class="fa fa-graduation-cap mr-3 text-primary"/> Educação</h3>
        <div class="d-flex flex-column ml-5 mb-4">
          <h5>Análise e Desenvolvimento de Sistemas, Centro Universitário e Faculdade Projeção, Brasília</h5>
          <p class="text-muted">Janeiro 2012 – Julho 2014</p>

          <h5>Ensino Regular, Médio, CEMSO, Brasília</h5>
          <p class="text-muted">Janeiro 2008 – Dezembro 2010</p>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="text-center sticky-top bg-white">
          <b-img v-bind="{ blankColor: '#777', width: 75, height: 75}"
                 src="/img/core/perfil.jpeg"
                 rounded="circle"
                 class="mb-3"/>
          <h3>Detalhes</h3>
          <p class="text-muted">
            Senior Web Developer</p>
          <p><i class="fas fa-phone mr-3"/> +55 61 999439193</p>
          <a class="d-block mb-3" href="mailto:filipebsmonteiro@gmail.com">
            <i class="fas fa-envelope mr-3"/> filipebsmonteiro@gmail.com
          </a>
          <a class="mb-3" href="https://linkedin.com/in/filipebsmonteiro/">
            <i class="fab fa-linkedin mr-3"/> Linkedin
          </a>
        </div>

        <hr class="mt-5">
        <h3>Idiomas</h3>
        <b-table striped borderless thead-class="d-none" :items="[
            {icon: 'united-kingdom', origin: 'Inglês', level:'(Fluente)'},
            {icon: 'spain', origin: 'Espanhol', level:'(Avançado)'},
            {icon: 'italy', origin: 'Italiano', level:'(Conversação)'}
        ]">
          <template v-slot:cell(icon)="{ item: { icon } }">
            <img :src="`/img/countries/${icon}.svg`" width="20"/>
          </template>
        </b-table>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "ptBR"
}
</script>

<style scoped>
.page{
  width: 75%;
}
h1, h2, h3{
  font-family: 'Nunito Sans Bold';
}
p, ul {
  font-family: 'Nunito Sans Regular';
}
</style>