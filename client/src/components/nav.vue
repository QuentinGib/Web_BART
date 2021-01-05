<template>
    <navclient v-if="client"></navclient>
    <navressource v-if="ressource"></navressource>
    <naventreprise v-if="entreprise"></naventreprise>
</template>
<script>
import Navclient from './navclient.vue'
import Navressource from './navressource.vue'
import Naventreprise from './naventreprise.vue'
export default {
  name: 'Nav',
  data () {
    return {
      client: false,
      ressource: false,
      entreprise: true
    }
  },
  components: {
    navclient: Navclient,
    navressource: Navressource,
    naventreprise: Naventreprise
  }
  // créer une méthode pour extraire la function de la personne (client/ressource/entreprise)
}
</script>
<style>
nav {
    display: flex;
    background: grey;
}
ul {
    list-style-type: none;
    text-align: center;
}
nav ul {
    list-style-type: none;
    display: flex;
    width: 80%;
    justify-content: space-between;
}

nav ul li {
    background: rgb(51, 50, 50);
    text-align: center;
    padding: 0.8rem;
    border-radius: 10px;
}
nav a {
    margin: 2px;
    padding: 10px;
    text-decoration: none;
    color: rgb(248, 248, 248);
    font-size: 120%;
}
</style>
