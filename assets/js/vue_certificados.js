var qualificacoes = new Vue({
  el: "#qualificacoes",
  data: {
    desenvolvimento: [],
    ferramentas: []
  },

  methods: {
    fetchQualificacoes() {
      fetch("/api/qualificacoes.json")
        .then(r => r.json())
        .then(qualificacoes => {
          this.desenvolvimento = qualificacoes.desenvolvimento
          this.ferramentas = qualificacoes.ferramentas
        })
    }
  },

  created() {
    this.fetchQualificacoes();
  }
})