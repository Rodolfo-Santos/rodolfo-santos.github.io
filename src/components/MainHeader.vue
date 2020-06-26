<template>
  <header class="cabecalho">
    <b-navbar toggleable="lg" type="dark" class="bg-transparent fixed-top py-4">
      <div class="container">
        <b-navbar-brand class="nav-logo mb-1" href="#banner">
          <img src="../assets/img/logo-whitev2.png" />
        </b-navbar-brand>
        <b-navbar-toggle target="navBar" id="btn-hamb"></b-navbar-toggle>

        <b-collapse class="justify-content-end" id="navBar" is-nav>
          <b-navbar-nav class="font-1">
            <b-nav-item href="#banner" class="local-page nav-item nav-link pr-4">Home</b-nav-item>
            <b-nav-item href="#sobre" class="local-page nav-item nav-link pr-4">Sobre</b-nav-item>
            <b-nav-item
              href="#qualificacoes"
              class="local-page nav-item nav-link pr-4"
            >Qualificações</b-nav-item>
            <b-nav-item href="#trajetoria" class="local-page nav-item nav-link pr-4">Trajetória</b-nav-item>
            <b-nav-item href="#portifolio" class="local-page nav-item nav-link pr-4">Portifólio</b-nav-item>
            <b-nav-item href="#contato" class="local-page nav-item nav-link pr-4">Contato</b-nav-item>
            <b-nav-item>
              <redes-sociais></redes-sociais>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

    <div class="banner parallax-img" id="banner">
      <div
        class="container w-100 h-100 d-flex align-items-start justify-content-center flex-column banner-text pb-4"
      >
        <div class="flex-fill d-flex justify-content-center flex-column">
          <h1 class="text-upper text-white text-center pb-3 bold display-4">{{ nomeDoSite }}</h1>
          <h4
            class="text-upper text-center text-md-left text-white pb-3 kerning-3"
          >Desenvolvedor WEB</h4>
        </div>
        <div class="w-100 d-flex justify-content-center align-items-end">
          <div class="scroll-animation">
            <div class="circle-animation"></div>
          </div>
        </div>
      </div>
    </div>

    <a
      href="https://api.whatsapp.com/send?phone=5512982279588"
      target="_blank"
      class="whatsapp-float-button"
    >
      <i class="fab fa-whatsapp"></i>
    </a>
  </header>
</template>

<script>
import RedesSociais from "./RedesSociais.vue";

export default {
  name: "MainHeader",
  props: ["nomeDoSite"],
  components: {
    RedesSociais
  },

  methods: {
    efeitoMenuTopo() {
      let posPagina;
      window.onscroll = function() {
        posPagina = window.pageYOffset;
        if (!document.querySelector("nav").classList.contains("nav-active")) {
          if (posPagina > 100) {
            document.querySelector("nav").classList.add("bg-black");
            document.querySelector("nav").classList.remove("bg-transparent");
            document.querySelector("nav").classList.remove("py-4");
          } else {
            document.querySelector("nav").classList.add("bg-transparent");
            document.querySelector("nav").classList.add("py-4");
            document.querySelector("nav").classList.remove("bg-black");
          }
        }
        var opacity = 1 - posPagina / 150;
        var posTop = posPagina / 4;
        document.querySelector(".banner-text").style.opacity = opacity;
        document.querySelector(".banner-text").style.top = -posTop;
      };
      document.querySelector("#btn-hamb").click(function() {
        document.querySelector("nav").classList.toggle("nav-active");
        if (document.querySelector("nav").classList.contains("nav-active")) {
          document.querySelector("nav").classList.add("bg-black");
          document.querySelector("nav").classList.remove("bg-transparent");
        }
      });
    },

    efeitoLinksMenu() {
      let links = document.querySelectorAll(".local-page");
      let menuHeight = document.querySelector("nav").innerHeight;
      document.querySelector(".local-page").click(function(e) {
        e.preventDefault();
        let id = document.querySelector(this).attr("href"),
          alvo = document.querySelector(id).offsetTop - menuHeight - 50;
        document.querySelector("html, body").animate(
          {
            scrollTop: alvo
          },
          1000
        );
      });

      window.addEventListener("scroll", scrollPage);

      function scrollPage() {
        let pagePosition = window.pageYOffset;
        let sobre = document.querySelector("#sobre").offsetTop,
          qualificacoes = document.querySelector("#qualificacoes").offsetTop,
          trajetoria = document.querySelector("#trajetoria").offsetTop,
          portifolio = document.querySelector("#portifolio").offsetTop,
          contato = document.querySelector("#contato").offsetTop;

        console.log(document.querySelector("#sobre").offsetTop);
        let calc = menuHeight - 400;
        links.forEach(link => link.classList.remove("active"));
        if (pagePosition <= sobre + calc) links[0].classList.add("active");
        else if (pagePosition <= qualificacoes + calc)
          links[1].classList.add("active");
        else if (pagePosition <= trajetoria + calc)
          links[2].classList.add("active");
        else if (pagePosition <= portifolio + calc)
          links[3].classList.add("active");
        else if (pagePosition <= contato + calc)
          links[4].classList.add("active");
        else links[5].classList.add("active");
      }
    }
  },

  mounted() {
    this.efeitoMenuTopo();
    this.efeitoLinksMenu();
  }
};
</script>

<style>
</style>