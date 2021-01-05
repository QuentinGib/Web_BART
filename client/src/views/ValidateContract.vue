<template>
    <navbar></navbar>
    <main>
        <h1 id="theme">Valider un contract</h1>
        <form>
          <div class="form-group">
        <label for="">Numéro du contract</label>
        <input v-model="id_Contract"  type="text" id="id_Contract" class="form-control" placeholder="Id Contract" required>
    </div>
    <div>
        <button type="submit" class="btn">Voir le contract!</button>
    </div>
        </form>
      <div class="Icontract">
        <h2>Info du contract</h2>
        <h3>{{Contract}}</h3>
        <p> une fonction SQL qui récuperent les infos pour la blockchain</p>
      </div>
      <div>
        <button type="submit" class="btn">Validez le contract !</button>
    </div>
    </main>
    <foot></foot>
</template>
<script>
import Nav from '../components/nav.vue'
import Foot from '../components/foot.vue'
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

</style>
