var portifolio = new Vue({
  el: "#portifolio_article",
  data: {
    portifolio: [],
  },

  methods: {
    fetchPortifolio() {
      fetch("../api/portifolio.json")
        .then(r => r.json())
        .then(portifolio => {
          this.portifolio = portifolio.portifolio
        })
    }
  },

  created() {
    this.fetchPortifolio();
  }
})