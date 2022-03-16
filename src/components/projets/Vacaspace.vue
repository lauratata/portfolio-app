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
        <h1>Projet - Vacaspace, application de gestion des vacataires</h1>
      </div>

      <div class="projet-grille">
        <div class="listes">
          <div class="type">
            <h2>Type de projet : </h2>
            <p>Web design</p>
          </div>
          <div class="date">
            <h2>Date : </h2>
            <p>2022</p>
          </div>
          <div class="techno">
            <h2>Technologies utilisées : </h2>
            <div class="techBx">
              <img src="static/img/technologies/icons8-figma.png" alt="Figma">
            </div>
          </div>
          <div class="lien">
            <h2>Lien vers le projet : </h2>
            <a href="https://www.figma.com/file/529DCc8LtHA0pVgJR5klqu/projet-ux-laura-taormina?node-id=1%3A4">Lien
              Figma</a>
          </div>
        </div>
        <div class="description">
          <p>Projet dans le cadre d’une spécialisation en Web design. Le projet consistait à repenser l’ergonomie et le
            visuel d’une application existante permettant la gestion des vacataires au département MMI de Montbéliard.
            L’application a pour vocation de s’étendre à l’Université de Franche-Comté, d’où une refonte graphique mais
            aussi dans un but de la rendre plus simple et plus agréable à utiliser. </p>
          <button class="btnProjet" onclick="window.scrollTo(0,900)">En savoir plus</button>
        </div>
      </div>
      <img src="static/img/projets/vacaspace/vacaspace-visuel.jpg"
           class="imgProjet">

      <div id="etape">

        <div class="etapes">
          <h3>Moodboard</h3>
          <span class="img-etapes"><img src="static/img/projets/vacaspace/moodboard.png"
                                        alt="Moodboard Vacaspace"></span>
        </div>

        <div class="etapes">
          <h3>User flow</h3>
          <span class="img-etapes"><img src="static/img/projets/vacaspace/user-flow.png"
                                        alt="User flow Vacaspace"></span>
        </div>

        <div class="etapes">
          <h3>Design System — Iconographie</h3>
          <span class="img-etapes"><img src="static/img/projets/vacaspace/design-system-iconographie.png"
                                        alt="Iconographie Vacaspace"></span>
        </div>

        <div class="etapes">
          <h3>Design System — Boutons</h3>
          <span class="img-etapes"><img src="static/img/projets/vacaspace/design-system-boutons.png"
                                        alt="Design System Boutons Vacaspace"></span>
        </div>

        <div class="etapes">
          <h3>Maquette mobile</h3>
          <span class="img-etapes"><img src="static/img/projets/vacaspace/maquette-mobile.jpg"
                                        alt="Maquette mobile Vacaspace"></span>
        </div>

        <div class="etapes">
          <h3>Maquette Desktop</h3>
          <span class="img-etapes"><img src="static/img/projets/vacaspace/maquette-desktop.jpg"
                                        alt="Maquette Desktop Vacaspace"></span>
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
  name: "Vacaspace"
}
</script>

<style scoped>

</style>