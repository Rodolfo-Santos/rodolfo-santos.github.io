<template>
  <section id="trajetoria" class="margin-1 pb-3">
    <h2 class="bold text-center text-upper">Trajetória</h2>
    <article class="container margin-1">
      <div class="timeline">
        <div class="time-icon">
          <i class="fas fa-graduation-cap font-2-5"></i>
        </div>
        <ul>
          <li class v-for="(item, index) in academico" :key="index">
            <div class="time bg-black">
              <h4 class="text-white">{{ item.periodo }}</h4>
            </div>
            <div class="content">
              <h3>{{ item.nome }}</h3>
              <p class="bold text-upper" v-if="item.site">
                <a :href="item.site" target="_blank" class="link-default">{{ item.instituicao }}</a>
              </p>
              <p class="bold text-upper" v-else>{{ item.instituicao }}</p>
              <p>{{ item.descricao }}</p>
            </div>
          </li>
          <div style="clear: both"></div>
        </ul>
      </div>
    </article>
    <article class="container margin-1">
      <div class="timeline">
        <div class="time-icon">
          <i class="fas fa-briefcase font-2-5"></i>
        </div>
        <ul>
          <li class v-for="(item, index) in profissional" :key="index">
            <div class="time bg-black">
              <h4 class="text-white">{{ item.periodo }}</h4>
            </div>
            <div class="content">
              <h3>{{ item.nome }}</h3>
              <p class="bold text-upper" v-if="item.site">
                <a :href="item.site" target="_blank" class="link-default">{{ item.instituicao }}</a>
              </p>
              <p class="bold text-upper" v-else>{{ item.instituicao }}</p>
              <p>{{ item.descricao }}</p>
            </div>
          </li>
          <div style="clear: both"></div>
        </ul>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "SecaoTrajetoria",
  data() {
    return {
      academico: [],
      profissional: []
    };
  },

  methods: {
    fetchTrajetoria() {
      fetch("../api/trajetoria.json")
        .then(r => r.json())
        .then(trajetoria => {
          this.academico = trajetoria.academico;
          this.profissional = trajetoria.profissional;
        });
    }
  },

  created() {
    this.fetchTrajetoria();
  }
};
</script>

<style>
</style>