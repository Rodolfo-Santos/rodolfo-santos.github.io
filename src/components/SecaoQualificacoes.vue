<template>
  <article class="container text-white" id="qualificacoes">
    <h2 class="text-white text-center margin-1 pb-4 pb-md-0 bold">Qualificações</h2>
    <div class="my-4">
      <h3 class="bold pb-3 b-bottom">Desenvolvimento</h3>

      <div class="grafico-area row">
        <div
          class="grafico col-12 col-sm-6 col-md-3 p-4"
          v-for="(qualificacao, index) in desenvolvimento"
          :key="index"
        >
          <h4 class="py-2 font-1-2 text-upper w-100">{{ qualificacao.nome }}</h4>
          <div
            class="grafico-fundo"
            data-balloon-length="large"
            :aria-label="qualificacao.descricao"
            data-balloon-pos="down-right"
          >
            <div class="grafico-preenchimento bg-white" :style="{ width: qualificacao.nivel+'%' }"></div>
          </div>
          <a
            v-if="qualificacao.certificado"
            :href="qualificacao.certificado"
            class="d-flex justify-content-end mt-1 text-muted"
            data-lightbox="certificado"
            :data-title="qualificacao.nome"
          >Ver certificado</a>
        </div>
      </div>
    </div>

    <div class="margin-1">
      <h3 class="bold pb-3 b-bottom">Ferramentas e Softwares</h3>

      <div class="grafico-area row">
        <div
          class="grafico col-12 col-sm-6 col-md-3 p-4"
          v-for="(qualificacao, index) in ferramentas"
          :key="index"
        >
          <h4 class="py-2 font-1-2 text-upper">{{ qualificacao.nome }}</h4>
          <div
            class="grafico-fundo"
            data-balloon-length="large"
            :aria-label="qualificacao.descricao"
            data-balloon-pos="down-right"
          >
            <div
              class="grafico-preenchimento bg-white g-xd"
              :style="{ width: qualificacao.nivel+'%' }"
            ></div>
          </div>
          <a
            v-if="qualificacao.certificado"
            :href="qualificacao.certificado"
            class="d-flex justify-content-end mt-1 text-muted"
            data-lightbox="certificado"
            :data-title="qualificacao.nome"
          >Ver certificado</a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "SecaoQualificacoes",
  data() {
    return {
      desenvolvimento: [],
      ferramentas: []
    };
  },

  methods: {
    fetchQualificacoes() {
      fetch("./api/qualificacoes.json")
        .then(r => r.json())
        .then(qualificacoes => {
          this.desenvolvimento = qualificacoes.desenvolvimento;
          this.ferramentas = qualificacoes.ferramentas;
        });
    }
  },

  created() {
    this.fetchQualificacoes();
  }
};
</script>

<style>
</style>