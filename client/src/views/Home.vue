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
      <h1 id="theme">Bienvenue dans votre espace client</h1>
      <br>
      <form>
      <div class="Encours">
        <h3>Contract en cours</h3>
        <select name="Contract" id="Contract" v-model="Contrat">
          <option value="">--Contract--</option>
  <!--
  <option v-bind:key="index" v-for="(Contract,index) in Contracts">
    {{Contract}}
    </option> -->
    <option v-for="Contrat in Contracts" :key="Contrat">
      <router-link :to="{name: 'PageContract', params: { slug: Contrat.slug }}">
          {{ Contrat}}
        </router-link>
    </option>
  </select>
  <p>{{Contrat}}</p>
  <!--
  <div>
      <button type="button" class="btn">Validez !</button>
  </div>-->
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
            <td>Nombre de jours</td>
            <td>Début du Contract</td>
            <td>Total</td>
          </tr>
          <tr v-bind:key="index" v-for="(H,index) in TC">
            <td>{{TC[index]}}</td>
            <td>{{TE[index]}}</td>
            <td>{{TH[index]}}</td>
            <td>{{TD[index]}}</td>
            <td>{{TP[index]}} €</td>
          </tr>
        </table>
      </div>
  </main>
  <foot></foot>
</body>
</html>
</template>
<script>
import Nav from '../components/nav/nav.vue'
import Foot from '../components/footer/foot.vue'
export default {
  name: 'Home',
  data () {
    return {
      Contrat: '',
      Contracts: ['C1', 'C2', 'C3', 'C4'],
      TC: [],
      TE: [],
      TH: [],
      TD: ['16-01-2003'],
      TP: []
    }
  },
  mounted () {
    fetch('http://localhost:3000/api/v1/infosSC/mycontracts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        role: 'client',
        pubKey: 'tz1dYGsagmf3m47JYtTWzZwByeM13fTktc4M'
      }),
      redirect: 'follow'
    })
      .then((res) => res.json())
      .then(({ storage }) => {
        this.TC = storage.map(contrat => contrat.id)
        this.TE = storage.map(contrat => contrat.entreprise)
        this.TH = storage.map(contrat => contrat.time)
        this.TP = storage.map(contrat => (parseInt(contrat.time, 10) * parseInt(contrat.TJM, 10)).toString())
      })
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
