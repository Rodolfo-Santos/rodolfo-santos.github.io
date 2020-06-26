<template>
  <section class="bg-white padding-1 bg-contato">
    <article class="container row m-auto">
      <div class="col-12 col-md-6">
        <h2 id="contato">{{ nomeDoSite }}</h2>
        <hr />
        <div class="pb-2">(12) 98227-9588</div>
        <div class="pb-2">São José dos Campos, São Paulo</div>
        <div class="pb-2">contato@rodolfo-santos.com</div>
      </div>
      <form action method role="form" class="contactForm col-12 col-md-6 d-flex flex-column">
        <div class="pb-2">
          <input
            type="text"
            name="name"
            class="form-control"
            id="name"
            placeholder="Seu Nome"
            data-rule="minlen:4"
            data-msg="Por favor, no mínimo 4 caracteres"
            v-model="nome"
          />
          <div class="validation"></div>
        </div>

        <div class="pb-2">
          <input
            type="email"
            name="name"
            class="form-control"
            id="email"
            placeholder="Seu E-mail"
            data-rule="email"
            data-msg="E-mail incorreto"
            v-model="email"
          />
          <div class="validation"></div>
        </div>

        <div class="pb-2">
          <textarea
            class="form-control"
            name="message"
            rows="4"
            id="msg"
            data-rule="required"
            data-msg="Por favor, escreva algo"
            placeholder="Mensagem"
            v-model="mensagem"
          ></textarea>
          <div class="validation"></div>
        </div>

        <button type="submit" class="p-2 bg-black text-white">
          Enviar por E-mail
          <i class="far fa-envelope"></i>
        </button>
        <div class="text-center d-flex align-items-center">
          <hr />
          <div>ou</div>
          <hr />
        </div>
        <button class="p-2 bg-success text-white btn-send" @click.prevent="sendMsg">
          Enviar por Whatsapp
          <i class="fab fa-whatsapp"></i>
        </button>
      </form>
    </article>
  </section>
</template>

<script>
export default {
  name: "SecaoContato",
  props: ["nomeDoSite"],
  data() {
    return {
      nome: "",
      email: "",
      mensagem: ""
    };
  },

  methods: {
    sendMsg() {
      if (this.nome.trim() != "" || this.mensagem.trim() != "") {
        let sendWhats =
          "https://api.whatsapp.com/send?phone=" +
          "5512982279588" +
          "&text=" +
          "Olá, meu nome é " +
          this.nome +
          " e " +
          this.mensagem;
        window.open(sendWhats);
        this.nome = "";
        this.email = "";
        this.mensagem = "";
      } else {
        return;
      }
    }
  }
};
</script>

<style>
</style>