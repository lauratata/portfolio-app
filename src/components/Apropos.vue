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
    <main class="page-apropos">
      <section class="apropos">
        <div class="title">
          <h1>À propos de moi</h1>
        </div>
        <p>Je m'appelle Laura Taormina. Je suis étudiante en graphic design, développement web et communication à MMI
          Montbéliard à l'IUT de Belfort-Montbéliard (France). Je suis également passionnée par la musique, les
          jeux-vidéos et le dessin. Je suis toujours curieuse d'en apprendre plus dans les nouvelles technologies et
          pour enrichir ma culture générale.
        </p>
      </section>
      <img src="static/img/photo.jpeg" alt="">
    </main>

    <section class="services">
      <div class="title">
        <h1>Mes services</h1>
      </div>
      <div class="content">
        <div class="serviceBox">
          <img src="static/img/icons8-web-design-64.png" alt="Webdesign">
          <h2>Web Design</h2>
          <p>Conception et réalisation de l'identité visuelle d'un site internet, pour lequel je crée tous les
            éléments
            graphiques (illustrations, bannières, animations…) selon vos désirs et en fonction du public
            visé, des impératifs du marketing et des contraintes techniques.</p>
        </div>
        <div class="serviceBox">
          <img src="static/img/icons8-coding-64.png" alt="Développement">
          <h2>Développement Web</h2>
          <p>Réalisation de l'ensemble des fonctionnalités techniques d'un site ou
            d'une application web. Je peux concevoir des sites sur mesure ou adapté des
            solutions techniques existantes en fonction de votre projet et de votre demande.</p>
        </div>
        <div class="serviceBox">
          <img src="static/img/icons8-software-64.png" alt="Graphic Design">
          <h2>Graphic Design</h2>
          <p>Conception d'une identité visuelle, en choisissant la typographie, les couleurs, le papier ; Tout en
            veillant à ce que le résultat soit lisible, harmonieux et captivant.</p>
        </div>
        <div class="serviceBox">
          <img src="static/img/icons8-online-communication-64.png" alt="Communication">
          <h2>Communication</h2>
          <p>Mettre en place une stratégie et les actions de communication à mener sur le web, les médias sociaux, les
            terminaux mobiles et les objets connectés pour faire connaître votre produit et/ou service.</p>
        </div>
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
  name: "Apropos"
}
</script>

<style scoped>

</style>