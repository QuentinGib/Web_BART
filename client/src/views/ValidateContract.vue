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
  <main>
    <h1 id="theme">Valider un contrat</h1>
    <form class="form-infoSCvalidate" @submit.prevent="VoirContrat">
      <div class="form-group">
        <label for="">Numéro du contrat</label>
        <input v-model="id_contrat"  type="text" id="id_contrat" class="form-control" placeholder="Id Contract" required>
      </div>
      <div>
        <button type="submit" class="btn">Voir le contrat</button>
      </div>
    </form>
    <div class="Icontract">
      <h2>Infos du contrat</h2>
      <h3>{{storage.TJM}}</h3>
      <p> une fonction SQL qui récuperent les infos pour la blockchain</p>
    </div>
    <div>
      <button type="submit" class="btn">✔️ Signer le contract</button>
    </div>
  </main>
  <foot></foot>
</body>
</html>
</template>
<script>
import Nav from '../components/nav/nav'
import Foot from '../components/footer/foot.vue'
export default {
  name: 'Validate',
  data () {
    return {
      id_contrat: '',
      storage: []
    }
  },
  components: {
    navbar: Nav,
    foot: Foot
  },
  methods: {
    VoirContrat () {
      const id = this.id_contrat
      fetch('http://localhost:3000/api/v1/infosSC/', {
        method: 'POST',
        headers: {
          method: 'POST',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id
        })
      })
        .then((res) => res.json())
        .then(({ storage }) => {
          this.storage = storage
        })
        .catch(error => { this.error = error })
    }
  }
}
</script>
<style>
.form-infoSCvalidate {
  width: 145px;
  margin-left: 0.5em;
}
</style>
