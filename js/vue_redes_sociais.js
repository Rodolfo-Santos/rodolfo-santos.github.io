const vueRedesSociais = new Vue({
  el: "#redes-sociais",
  data: {
    social: ""
  },

  mounted() {
    let app = this;
    fetch("../api/redes_sociais.json")
      .then(r => r.json())
      .then(data => {
        app.social = data;
      })
  }
})

const vueRodape = new Vue({
  el: "#rodape",
  data: {
    social: ""
  },

  mounted() {
    let app = this;
    fetch("../api/redes_sociais.json")
      .then(r => r.json())
        .then(data => {
          app.social = data;
        })
  }
})