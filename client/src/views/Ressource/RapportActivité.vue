<template>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <navbar></navbar>
  <main class="main-ra">
    <h1 id="theme">Donner son Bilan</h1>
    <form class="form-ra">
      <div class="form-group">
        <div ><label for="">Numéro du contract</label></div>
        <div class="RAS"><select name="Contract" id="Contract" v-model="contrat">
          <option value="">--Contract--</option>
  <option v-bind:key="index" v-for="(Contrat,index) in Contrats">{{Contrat}}</option>
  </select></div>
      </div>
      <div class="form-group">
        <div><label for="">Nombre d'heures</label></div>
        <input v-model="Heures"  type="number" id="heure" class="form-control" placeholder="Nombres d'heure" required>
      </div>
      <p>Mettre un PDF ici pour un rapport de contract plus complet</p>
      <div>
          <button type="submit" class="btn">Envoyer</button>
      </div>
    </form>
  </main>
  <foot></foot>
</body>
</html>
</template>
<script>
import Nav from '../../components/nav/nav'
import Foot from '../../components/footer/foot.vue'
export default {
  name: 'Activité',
  data () {
    return {
      Contrats: ['C1', 'C2', 'C3', 'C4'],
      contrat: '',
      Heures: null
    }
  },
  components: {
    navbar: Nav,
    foot: Foot
  }
}
</script>
<style>
.main-ra {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-ra {
    background-color: whitesmoke;
    padding: 5%;
    border: 2px solid #4D4D4F;
}
.RAS {
 height: 40px;
 width: 60%;
}
.RAS >select {
  height: 90%;
  width: 80%;
  font-size: 170%;
}
</style>
