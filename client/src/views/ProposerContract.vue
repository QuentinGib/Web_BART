<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proposer un Contract</title>
</head>
<body>
    <navbar></navbar>
    <main class="main-newsc">
        <h1 id="theme">Proposer un contrat</h1>
        <form class="form-newsc">
            <div class="form-group">
                <label for="">Numéro du contrat </label>
                <input v-model="id_Contract"  type="text" id="id_Contract" class="form-control" placeholder="Id Contract" required>
            </div>
            <div class="form-group">
                <label for="">Mission </label>
                <input v-model="mission"  type="text" id="mission" class="form-control" placeholder="Mission" required>
            </div>
            <div class="form-group">
                <label for="">Nombre d'heures </label>
                <input v-model="heure"  type="number" id="heure" class="form-control" placeholder="Nombres d'heure" required>
            </div>
            <div class="form-group">
                <label for="">TMJ </label>
                <input v-model="TMJ"  type="number" id="TMJ" class="form-control" placeholder="TMJ" required>
            </div>
            <div class="form-group">
                <label for="">Mission </label>
                <input v-model="mission"  type="text" id="mission" class="form-control" placeholder="Mission" required>
            </div>
            <div>
                <button type="submit" class="btn">Créer et envoyer</button>
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
  name: 'Proposer',
  components: {
    navbar: Nav,
    foot: Foot
  }
}
</script>
<style>
.main-newsc {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-newsc {
    background-color: whitesmoke;
    padding: 5%;
    border: 2px solid #4D4D4F;
}

.form-control {
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid rgb(102, 102, 102);
    color: rgb(1, 64, 88);
    font-size: 14px;
    text-transform: uppercase;
    outline: none;
    transition: border-color 0.2s;
    margin-bottom: 0.5em;
}
.form-group {
    margin-bottom: 1em;
}
</style>
