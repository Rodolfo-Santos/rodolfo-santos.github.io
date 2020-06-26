<template>
  <div>
    <main-header :nome-do-site="nomeDoSite"></main-header>
    <secao-sobre></secao-sobre>
    <section class="bg-black padding-1">
      <secao-resumo></secao-resumo>
      <secao-qualificacoes></secao-qualificacoes>
    </section>
    <secao-trajetoria></secao-trajetoria>
    <secao-portifolio></secao-portifolio>
    <secao-contato :nome-do-site="nomeDoSite"></secao-contato>
    <main-footer :nome-do-site="nomeDoSite"></main-footer>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import SecaoSobre from "./components/SecaoSobre";
import SecaoResumo from "./components/SecaoResumo";
import SecaoQualificacoes from "./components/SecaoQualificacoes";
import SecaoTrajetoria from "./components/SecaoTrajetoria";
import SecaoPortifolio from "./components/SecaoPortifolio";
import SecaoContato from "./components/SecaoContato";
import MainFooter from "./components/MainFooter";

export default {
  name: "App",
  components: {
    MainHeader,
    SecaoSobre,
    SecaoResumo,
    SecaoQualificacoes,
    SecaoTrajetoria,
    SecaoPortifolio,
    SecaoContato,
    MainFooter
  },
  data() {
    return {
      nomeDoSite: "Rodolfo Santos"
    };
  }
};
</script>

<style src="./assets/sass/style.scss" lang="scss"></style>
