<template>
    <navbar></navbar>
    <main>
        <h1 id="theme">Proposer un Contract</h1>
        <form>
        <div class="form-group">
        <label for="">Numéro du contract</label>
        <input v-model="id_Contract"  type="text" id="id_Contract" class="form-control" placeholder="Id Contract" required>
    </div>
    <div class="form-group">
        <label for="">Mission</label>
        <input v-model="mission"  type="text" id="mission" class="form-control" placeholder="Mission" required>
    </div>
    <div class="form-group">
        <label for="">Nombre d'heures</label>
        <input v-model="heure"  type="number" id="heure" class="form-control" placeholder="Nombres d'heure" required>
    </div>
    <div class="form-group">
        <label for="">TMJ</label>
        <input v-model="TMJ"  type="number" id="TMJ" class="form-control" placeholder="TMJ" required>
    </div>
    <div class="form-group">
        <label for="">Mission</label>
        <input v-model="mission"  type="text" id="mission" class="form-control" placeholder="Mission" required>
    </div>
    <div>
        <button type="submit" class="btn">Connectez !</button>
    </div>
    </form>
    </main>
    <foot></foot>
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

</style>
