<template>
  <div>
    <header>
      <router-link to="/" class="logo"><img src="static/img/logo.png" alt="Logo Laura Taormina">
      </router-link>
      <div class="rightSide">
        <div class="btns dayNight">
          <ion-icon name="moon-outline"></ion-icon>
          <ion-icon name="sunny-outline"></ion-icon>
        </div>
        <div class="btns menuToggle">
          <ion-icon name="menu-outline"></ion-icon>
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    </header>
    <!--Sidebar navigation-->
    <ul class="navigation">
      <li>
        <router-link to="/">Accueil</router-link>
      </li>
      <li>
        <router-link to="/A-propos">À propos</router-link>
      </li>
      <li>
        <router-link to="/Projets">Projets</router-link>
      </li>
      <li>
        <router-link to="/Contact">Contact</router-link>
      </li>
    </ul>
    <main class="index">
      <h1>Lorem</h1>
      <div id="scroll-down-animation">
  <span class="mouse">
    <span class="move" onclick="scrollTo('.reseaux')"></span>
  </span>
        <h2>Scroll down</h2>
      </div>
    </main>

    <section class="reseaux">
      <a href="https://dribbble.com/laurataormina/">
        <img src="static/img/dribbble-logo.svg" alt="Dribbble Laura Taormina">
      </a>
      <a href="https://www.linkedin.com/in/laurataormina/">
        <img src="static/img/LinkedIn-logo.svg" alt="LinkedIn Laura Taormina">
      </a>
      <a href="https://www.behance.net/laurataormina">
        <img src="static/img/behance-logo.svg" alt="Behance Laura Taormina">
      </a>
    </section>

    <section class="liens">
      <div class="link">
        <a href="apropos.html">
          <div class="apropos">À propos.</div>
        </a>
        <a href="projets.html">
          <div class="projets">Mes projets.</div>
        </a>
      </div>

    </section>
    <footer>
      <h2>Si vous souhaitez discuter, n'hésitez pas à me contacter</h2>
      <h3><a href="mailto:laura.taormina@gmail.com">laura.taormina@gmail.com</a></h3>
      <form action="">
        <section>
          <input type="text" placeholder="Votre nom">
          <input type="text" placeholder="Sujet">
          <input type="email" placeholder="Entrez votre adresse e-mail">

        </section>
        <section>
          <input type="text" placeholder="Votre message">
          <button class="btnform">
            <ion-icon name="mail-outline"></ion-icon>
            Envoyer
          </button>
        </section>
      </form>
      <div class="reseauxsoc">
        <a href="https://dribbble.com/laurataormina/">
          <img src="static/img/dribbble-fill.svg" alt="Dribbble Laura Taormina">
        </a>
        <a href="https://www.linkedin.com/in/laurataormina/">
          <img src="static/img/linkedin-fill.svg" alt="LinkedIn Laura Taormina">
        </a>
        <a href="https://github.com/lauratata">
          <img src="static/img/github.svg" alt="Github Laura Taormina">
        </a>
        <a href="https://www.behance.net/laurataormina">
          <img src="static/img/behance-fill.svg" alt="Behance Laura Taormina">
        </a>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Accueil',
  data() {

  },
  mounted() {
    const txtAnim = document.querySelector('h1');

    new Typewriter(txtAnim, {
      deleteSpeed: 20
    })
        .changeDelay(50)
        .typeString('Je suis <spam class="jaune">Laura Taormina</spam>')
        .pauseFor(50)
        .deleteChars(15)
        .typeString('<spam class="jaune"> UX/UI Designer Junior</spam>')
        .pauseFor(1000)
        .deleteChars(21)
        .typeString('<spam class="jaune"> Développeuse Front Junior</spam>')
        .pauseFor(1000)
        .deleteChars(26)
        .typeString('<spam class="jaune"> Laura Taormina</spam>')
        .typeString('. Bienvenue dans mon système.')
        .start();
  }
}
</script>

<style scoped>

</style>
