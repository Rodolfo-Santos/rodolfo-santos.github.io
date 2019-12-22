var trajetoria = new Vue({
  el: "#trajetoria",
  data: {
    academico: [],
    profissional: [],
  },

  methods: {
    fetchTrajetoria() {
      fetch("../api/trajetoria.json")
        .then(r => r.json())
        .then(trajetoria => {
          this.academico = trajetoria.academico
          this.profissional = trajetoria.profissional
        })
    }
  },

  created() {
    this.fetchTrajetoria();
  }
})