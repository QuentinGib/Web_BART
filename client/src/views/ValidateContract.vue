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
    <form class="form-infoSCvalidate">
      <div class="form-group">
        <label for="">Numéro du contrat</label>
        <input v-model="id_Contract"  type="text" id="id_Contract" class="form-control" placeholder="Id Contract" required>
      </div>
      <div>
        <button type="submit" class="btn">Voir le contrat</button>
      </div>
    </form>
    <div class="Icontract">
      <h2>Infos du contrat</h2>
      <h3>{{Contract}}</h3>
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
      Contract: 'C1'
    }
  },
  components: {
    navbar: Nav,
    foot: Foot
  }
}
</script>
<style>
.form-infoSCvalidate {
  width: 145px;
  margin-left: 0.5em;
}
</style>
