<template>
    <navbar></navbar>
    <main>
        <h1 id="theme">Demander un contract</h1>
    </main>
    <form>
      <div class="form-group">
        <label for="">Clé publique</label>
        <input v-model="id"  type="text" id="id" class="form-control" placeholder="Clé publique" required>
    </div>
    <div class="form-group">
        <label for="">Description</label>
        <textarea style="height: 800px" v-model="Description" id="Description" class="form-control" placeholder="Description" required></textarea>
    </div>
    <div>
        <button type="submit" class="btn">Envoyez !</button>
    </div>
    </form>
    <foot></foot>
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

</style>
