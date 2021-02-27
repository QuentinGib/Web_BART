<!--Copie/colle tous-->
<template>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PageContrat</title>
</head>
<body>
  <navbar></navbar>
  <div class="PageHeader">
    <h1>Nom du Contrat</h1>
    <h3 id="Contrat">{{ $route.params.slug}}</h3>
    <h3>Début du contrat : {{Debut}}</h3>
    <h3>Fin du contrat : {{Fin}}</h3>
    <h3>Nombre de Jour : {{Jours}}</h3>
    <h3>TJM : {{TJM}}</h3>
  </div>
  <br>
  <div class='PageCenter'>
      <h2>Etat de validité du contrat :  </h2>
      <h2> {{Etat}}</h2>
  </div>
  <br>
  <div v-if="fonction === 0" class="PageBas">
    <h2>Envoyer la facture</h2>
    <p class="facture">Envoyez la facture {{Contrat.slug}}</p>
  </div>
  <foot></foot>
</body>
</html>
</template>
<script>
import Nav from '../../components/nav/nav'
import Foot from '../../components/footer/foot.vue'
export default {
  name: 'Contract',
  data () {
    return {
      Contrat: {},
      Jours: '31.5',
      Debut: '',
      Fin: '',
      TJM: 34,
      Etat: 'en cours',
      fonction: 0
    }
  },
  components: {
    navbar: Nav,
    foot: Foot
  },
  mounted () {
    this.Contrat.slug = document.getElementById('Contrat').textContent
  }
}
</script>
<style>
.PageHeader {
  display: inline-block;
  text-align: center;
}
.PageCenter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn{
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  user-select: none;
  background-color: rgb(78, 228, 78);
  color: #fff;
}
.btn:hover{
  background-color: darkgreen;
}
.PageBas {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}
.facture{
  background-color: rgb(94, 182, 94);
  display: flex;
  justify-content: center;
  width: 50%;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  font-size: 200%;
}

.facture:hover {
  background-color: rgb(74, 168, 74);
}
</style>
