<template>
  <div>
    <header>
      <router-link to="/" class="logo"><img src="../../../static/img/logo.png" alt="Logo Laura Taormina">
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

    <main class="page-projet">
      <div class="title">
        <h1>Projet - Boss</h1>
      </div>

      <div class="projet-grille">
        <div class="listes">
          <div class="type">
            <h2>Type de projet : </h2>
            <p>Web design</p>
            <p>Développement Web</p>
          </div>
          <div class="date">
            <h2>Date : </h2>
            <p>2022</p>
          </div>
          <div class="techno">
            <h2>Technologies utilisées : </h2>
            <div class="techBx">
              <img src="static/img/technologies/icons8-figma.png" alt="Figma">
              <img src="static/img/technologies/icons8-html-5.png" alt="HTML">
              <img src="static/img/technologies/icons8-css3.png" alt="CSS">
              <img src="static/img/technologies/icons8-javascript.png" alt="Javascript">
              <img src="static/img/technologies/logo-vue.png" alt="VueJS">
            </div>
          </div>
          <div class="lien">
            <h2>Lien vers le projet : </h2>
            <a href="https://boss3.laurataormina.fr/#/">boss3.laurataormina.fr</a>
          </div>
        </div>
        <div class="description">
          <p>Le "Boss" est un challenge de fin de semestre où nous devions imaginer et développer un site web dans un
            temps défini. Dans ce cas-ci, nous avions deux jours pour développer une web app avec le framework Vue.js
            autour d’un
            artiste musical de notre choix.</p>
          <button class="btnProjet" onclick="window.scrollTo(0,1000)">En savoir plus</button>
        </div>
      </div>
      <img src="static/img/projets/boss/boss-s3.jpg"
           class="imgProjet">

      <div id="etape">

        <div class="etapes">
          <h3>Maquette mobile</h3>
          <span class="img-etapes"><img src="static/img/projets/boss/maquette-mobile.jpg"
                                        alt="Maquette Boss"></span>
        </div>

      </div>

    </main>

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
          <img src="../../../static/img/dribbble-fill.svg" alt="Dribbble Laura Taormina">
        </a>
        <a href="https://www.linkedin.com/in/laurataormina/">
          <img src="../../../static/img/linkedin-fill.svg" alt="LinkedIn Laura Taormina">
        </a>
        <a href="https://github.com/lauratata">
          <img src="../../../static/img/github.svg" alt="Github Laura Taormina">
        </a>
        <a href="https://www.behance.net/laurataormina">
          <img src="../../../static/img/behance-fill.svg" alt="Behance Laura Taormina">
        </a>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: "Boss"
}
</script>

<style scoped>

</style>