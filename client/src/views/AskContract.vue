<template>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AskContract</title>
</head>
<body>
  <navbar></navbar>
  <main class="main-asksc">
    <h1 id="theme">Demander un contract</h1>
    <form class="form-asksc">
      <div class="form-group">
        <label for="">Clé publique</label>
        <input v-model="id"  type="text" id="id" class="form-control" placeholder="Clé publique" required>
      </div>
      <div class="form-group">
        <label for="">Description</label>
        <textarea style="height: 800px" v-model="Description" id="Description" class="form-control-description" placeholder="Description" required></textarea>
      </div>
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
  name: 'AskContract', // demande un contract
  components: {
    navbar: Nav,
    foot: Foot
  }
}
</script>
<style>
.main-asksc {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-asksc {
    width: 600px;
    background-color: whitesmoke;
    padding: 5%;
    border: 2px solid #4D4D4F;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
}

.form-control-description {
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    color: rgb(1, 64, 88);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
}
</style>
