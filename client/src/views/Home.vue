<template>
    <navbar></navbar>
    <main>
        <h1 id="theme">Bienvenue dans votre espace client</h1>
        <br>
        <form>
        <div class="Encours">
          <h3>Contract en cours</h3>
          <select name="Contract" id="Contract">
            <option value="">--Contract--</option>
    <option v-bind:key="index" v-for="(Contract,index) in Contracts">{{Contract}}</option>
    </select>
    <div>
        <button type="submit" class="btn">Validez !</button>
    </div>
        </div>
        </form>
        <br>
        <div>
          <table class="Thistorique">
            <tr>
              <td colspan=5 class="Theader">Historique</td>
            </tr>
            <tr>
              <td>Numéro de Contract</td>
              <td>Entreprise</td>
              <td>Nombre d'heures</td>
              <td>Début du Contract</td>
              <td>Total</td>
            </tr>
            <tr v-bind:key="index" v-for="(H,index) in TC">
              <td>{{TC[index]}}</td>
              <td>{{TE[index]}}</td>
              <td>{{TH[index]}}</td>
              <td>{{TD[index]}}</td>
              <td>{{TP[index]}}</td>
            </tr>
          </table>
        </div>
    </main>
    <foot></foot>
</template>
<script>
import Nav from '../components/nav.vue'
import Foot from '../components/foot.vue'
export default {
  name: 'Home',
  data () {
    return {
      Contracts: ['C1', 'C2', 'C3', 'C4'],
      TC: ['T1', 'T2', 'T3', 'T4'],
      TE: ['Onepoint', 'Onepoint', 'Parterns', 'Cap'],
      TH: ['32', '50', '345', '1'],
      TD: ['16-01-2003', '05-10-2006', '09-07-2013', '28-06-2017'],
      TP: ['329,24', '423,43', '1322,21', '31,13']
    }
  },
  components: {
    foot: Foot,
    navbar: Nav
  }
}
</script>
<style scoped>
.Encours {
  display: inline-block;
  align-items: center;
  text-align: center;
  width: 100%;
  font-size: 200%;
}
.Encours h3 {
  margin: 5px;
}
select {
    font-size: 1.2rem;
    padding: 2px 10px;
    border-radius: 5px;
    margin: 5px;
}
.Thistorique {
  width: 90%;
  font-size: 120%;
}
.Theader {
  font-size: 300%;
  color: grey;
  text-align: center;
}
.Thistorique tr td {
  padding: 5px;
  border: 3px gray solid;
}
</style>
