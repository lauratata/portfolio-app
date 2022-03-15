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

    <main>
      <section class="projets">
        <div class="title">
          <h1>Projets</h1>
        </div>
        <ul>
          <li class="list active">All</li>
          <li class="list">Web design</li>
          <li class="list">Développement Web</li>
          <li class="list">Graphic Design</li>
          <li class="list">Motion Design</li>
        </ul>
        <div class="portfolio">
          <div class="workBx" v-for="projet in liste" :key="projet.id">
            <router-link :to="{ name: 'Projet', params: {id : projet.id } }">
              <div class="imgBx">
                <img :src="projet.acf.image" :alt="projet.acf.titre">
              </div>
              <div class="textBx">
                <h3>Projet : {{ projet.acf.titre }}</h3>
              </div>
            </router-link>
          </div>

        </div>
      </section>
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

//Import du fichier de paramétrage
import param from "../param/param.js";

export default {
  name: "Projets",
  data() {
    return {
      liste: []
    }
  },

  created() {
    //Liste des projets
    axios.get(param.host + "projet")
        .then(response => {
          console.log("Reponse", response);
          this.liste = response.data;
        })
        .catch(error => console.log(error))
  },

  mounted() {
    let list = document.querySelectorAll('.list');
    let itemBox = document.querySelectorAll('.itemBox');

    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener('click', function () {
        for (let j = 0; j < list.length; j++) {
          list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        for (let k = 0; k < itemBox.length; k++) {
          itemBox[k].classList.remove('active');
          itemBox[k].classList.add('hide');

          if (itemBox[k].getAttribute('data-item') === dataFilter || dataFilter === "all") {
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
          }
        }

      })
    }
  }
}
</script>

<style scoped>
#app > div > footer > form > section:nth-child(2) > input[type=text] {
  height: 13.5em;
}
</style>