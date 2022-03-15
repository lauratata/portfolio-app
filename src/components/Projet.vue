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

    <main class="page-projet">
      <div class="title">
        <h1>Projet - {{ projet.acf.titre }}</h1>
      </div>

      <div class="projet-grille">
        <div class="listes">
          <div class="type">
            <h2>Type de projet : </h2>
            <p>{{ projet.acf.type_projet.post_title }}</p>
          </div>
          <div class="date">
            <h2>Date : </h2>
            <p>{{ projet.acf.annee }}</p>
          </div>
          <div class="techno">
            <h2>Technologies utilisées : </h2>
            <div class="techBx">
              <ion-icon name="logo-figma"></ion-icon>
              <ion-icon name="logo-html5"></ion-icon>
              <ion-icon name="logo-javascript"></ion-icon>
              <ion-icon name="logo-css3"></ion-icon>
              <ion-icon name="logo-vue"></ion-icon>
            </div>
          </div>
          <div class="lien">
            <h2>Lien vers le projet : </h2>
            <a :href="projet.acf.lien">{{ projet.acf.lien }}</a>
          </div>
        </div>
        <div class="description">
          <p>{{
              projet.acf.description
            }}</p>
        </div>
      </div>
      <img :src="projet.acf.image" :alt="projet.acf.titre"
           class="imgProjet">

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

import param from "../param/param.js";

export default {
  name: "Projet",
  data() {
    return {
      projet: {
        id: 0,
        acf: {
          annee: null,
          description: null,
          etape: null,
          image: null,
          lien: null,
          technologies: null,
          titre: null,
          type_projet: [
            ID => 0,
            post_title => null
          ]
        }
      }
    }
  },

  created() {
    //Récupération de l'id du projet
    this.projet.id = this.$route.params.id;
    console.log("ID projet", this.projet);

    //Recherche du projet concerné
    axios.get(param.host + "projet/" + this.projet.id)
        .then(response => {
          console.log("Reponse", response);
          this.projet = response.data;
        })
        .catch(error => console.log(error))
  }
}
</script>

<style scoped>
#app > div > footer > form > section:nth-child(2) > input[type=text] {
  height: 13.5em;
}
</style>