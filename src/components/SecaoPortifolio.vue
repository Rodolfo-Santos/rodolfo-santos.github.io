<template>
  <section id="portifolio" class="bg-black text-white padding-1">
    <article class="container" id="portifolio_article">
      <h2 class="text-center text-upper">Portifólio</h2>
      <div class="row mt-4 pt-5">
        <a
          :href="item.link"
          target="_blank"
          class="col-12 col-md-4 mb-4"
          v-for="(item, index) in portifolio"
          :key="index"
          data-balloon-length="large"
          :aria-label="item.descricao"
          data-balloon-pos="down"
        >
          <div class="img-port">
            <img :src="item.imagem" :alt="item.nome" class="img-fluid" />
            <div class="glow-wrap">
              <i class="glow"></i>
            </div>
          </div>
        </a>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "SecaoPortifolio",
  data() {
    return {
      portifolio: []
    };
  },

  methods: {
    fetchPortifolio() {
      fetch("../api/portifolio.json")
        .then(r => r.json())
        .then(portifolio => {
          this.portifolio = portifolio.portifolio;
        });
    }
  },

  created() {
    this.fetchPortifolio();
  }
};
</script>

<style>
</style>