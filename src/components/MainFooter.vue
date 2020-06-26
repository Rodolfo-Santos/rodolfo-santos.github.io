<template>
  <footer class="bg-black padding-025 d-flex flex-column" id="rodape">
    <div class="container row m-auto">
      <div
        class="col-12 mt-md-0 mb-3 text-center text-md-left col-md-9 text-white"
      >{{ nomeDoSite }} - 2020</div>
      <div class="col-12 col-md-3 row justify-content-between">
        <redes-sociais></redes-sociais>
      </div>
    </div>
  </footer>
</template>

<script>
import RedesSociais from "./RedesSociais.vue";

export default {
  name: "MainFooter",
  props: ["nomeDoSite"],

  components: {
    RedesSociais
  }
};
</script>

<style>
</style>


