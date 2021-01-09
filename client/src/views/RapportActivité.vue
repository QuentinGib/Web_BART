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
        <label for="">Numéro du contract</label>
        <input v-model="id_Contract"  type="text" id="id_Contract" class="form-control" placeholder="Id Contract" required>
      </div>
      <div class="form-group">
        <label for="">Nombre d'heures</label>
        <input v-model="heure"  type="number" id="heure" class="form-control" placeholder="Nombres d'heure" required>
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
import Nav from '../components/nav.vue'
import Foot from '../components/foot.vue'
export default {
  name: 'Activité',
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
</style>
