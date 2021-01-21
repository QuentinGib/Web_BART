<template>
<div>
    <navclient v-if="client"></navclient>
    <navressource v-if="ressource"></navressource>
    <naventreprise v-if="entreprise"></naventreprise>
</div>
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
/*#region Header*/
.main-header {
    top: 0;
    margin-left: 2em;
    margin-right: 2em;
}

.main-header,
.main-header-title {
    display: flex;
    align-items: center;
    flex-grow: 2;
    background-color: white;
    box-shadow: none;
}

.main-header-title {
    padding-right: 1em;
    font-size: 1.05em;
    color:#009edc;
    text-decoration: none;
}

.main-nav {
    display: flex;
    justify-content: space-between;
}

.main-tab {
    font-size: 120%;
    font-weight: 300;

    color: #00638a;

    margin-right: 4em;
    margin-left: 4em;

    text-decoration: none;
    text-align: center;
    padding: 0.8rem;
    border: 1.6px solid #00638a;
    border-bottom: 5px solid #00638a;
    border-radius: 30px;
}

#mainnav a.router-link-exact-active {
  color: #0093CD;
  border: 1.6px solid #0093CD;
}
/*#endregion Nav*/
/*#endregion Header*/
</style>
