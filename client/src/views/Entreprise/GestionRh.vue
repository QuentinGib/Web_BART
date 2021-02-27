<template>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GestionRh</title>
</head>
<body>
  <navbar></navbar>
  <main>
      <h1>Liste de vos Collaborateurs</h1>
      <div class="Tableau">
        <table class="T_Rh" v-bind:key="index" v-for="(Rh,index) in Liste_Rh">
          <tr>
            <td colspan=1 class="T_Rh_Header">{{Rh}}</td>
          </tr>
          <tr v-for="tache in Liste_de_Tache[index]" :key="tache.id">
            <td class="T_Rh_Tache">{{tache}}</td>
          </tr>
        </table>
      </div>
  </main>
  <foot></foot>
</body>
</html>
</template>
<script>
import Nav from '../../components/nav/nav'
import Foot from '../../components/footer/foot.vue'
export default {
  name: 'GestionRh',
  data () {
    return {
      /* Liste de Ressource */
      Liste_Rh: ['ASC', 'AZER', 'gku'],
      /* Liste de Tache effectuer par chaque Ressource */
      Liste_de_Tache: [['MISSION DEBUT FIN NOMBREJOURS', '8NUN 2013-14-57 2014-98-45 267'], [], ['8NUNCZ 2009-34-51 2010-28-35 26', '8NUNziho 01-1-5 20-8-5 26']]
    }
  },
  mouted () {
    /* Fonction qui récupère la liste des ressources dans l'entreprise */
    /* Avec la liste, pour chaque ressource mettre le detail des missions effectuer (order by fin) dans une liste (tableau) et l'inserer dans Liste_de_Tache */
  },
  components: {
    navbar: Nav,
    foot: Foot
  }
}
</script>
<style scoped>
.Tableau {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  border: solid rgb(103, 143, 216) 12px;
  margin-bottom: 5rem;
  margin-top: 5rem;
}
.T_Rh {
  width: 60%;
  border: solid black 5px;
  padding: 10px;
  margin: 0.5rem;
}
.T_Rh_Header {
  color:rgb(103, 143, 216);
  font-size: 300%;
  padding-bottom: 1rem;
}
.T_Rh_Tache {
  color: green;
  font-size: 150%;
}
</style>
