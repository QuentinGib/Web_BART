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
          <option value="C1">--Contrat--</option>
  <option v-bind:key="index" v-for="(Contrat,index) in Contrats">{{Contrat}}</option>
  </select></div>
      </div>
      <div class="form-group">
        <div><label for="">Nombre d'heures</label></div>
        <input v-model="Heures"  type="number" id="heure" class="form-control" placeholder="Nombres d'heure" required>
      </div>
      <!-- mettre pdf -->
      <div class="fichier">
      <input type="file" @change="onFileChanged">
      <button type="button" @click="onUpload">Upload!</button>
      </div>
       <div>
      <button type="submit" class="btn">Envoyer</button>
    </div>
      <!-- Fin -->
    </form>
    <h1>{{contrat}} + {{Heures}} +{{File}}</h1>
  </main>
  <foot></foot>
</body>
</html>
</template>
<script>
import Nav from '../../components/nav/nav.vue'
import Foot from '../../components/footer/foot.vue'
import axios from 'axios'
export default {
  name: 'Activite',
  data () {
    return {
      Contrats: ['C1', 'C2', 'C3', 'C4'],
      contrat: '',
      Heures: null,
      File: null
    }
  },
  methods: {
    onFileChanged (event) { this.File = event.target.files[0] },
    onUpload () {
      const mypostparameters = new FormData()
      mypostparameters.append('pdf', this.File, this.File.name)
      mypostparameters.append('USERID', 21)
      axios.post('/uploadmyfile', mypostparameters)
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
.fichier {
  display: flex;
  flex-direction: column;
  font-size: 150%;
  margin-bottom: 3rem;
}
.fichier >button {
  width: 30%;
  background-color: rgb(206, 66, 66);
  color: white;
}
</style>
