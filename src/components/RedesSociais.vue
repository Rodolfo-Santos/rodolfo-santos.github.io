<template>
  <li class="d-flex justify-content-center py-4 py-md-0" id="redes-sociais">
    <a
      class="nav-item nav-link pr-4"
      v-for="(item, index) in social"
      :key="index"
      :href="item.link"
      target="_blank"
    >
      <i :class="item.icone"></i>
    </a>
  </li>
</template>

<script>
export default {
  name: "RedesSociais",
  data() {
    return {
      social: []
    };
  },
  mounted() {
    let app = this;
    fetch("../api/redes_sociais.json")
      .then(r => r.json())
      .then(data => {
        app.social = data;
      });
  }
};
</script>

<style>
</style>