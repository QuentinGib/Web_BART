<template>
<body>
  <navbar></navbar>
  <main>
    <h1 id="theme">Bienvenue dans votre espace client</h1>
    <div>
      <table class="Thistorique">
        <tr>
          <td colspan=5 class="Theader">Historique</td>
        </tr>
        <tr>
          <td>Numéro de Contract</td>
          <td>Entreprise</td>
          <td>Nombre de jours</td>
          <td>Début du contrat</td>
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
</template>
<script>
import Nav from '../components/nav/nav.vue'
import Foot from '../components/footer/foot.vue'
import VueCookies from 'vue-cookies'
export default {
  name: 'Home',
  data () {
    return {
      Contrat: {},
      TC: [],
      TE: [],
      TH: [],
      TD: [],
      TP: []
    }
  },
  mounted () {
    const role = VueCookies.get('role')
    const publicKey = VueCookies.get('key')
    // Blockchain
    fetch('http://localhost:3000/api/v1/infosSC/mycontracts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        role: role,
        pubKey: publicKey
      }),
      redirect: 'follow'
    })
      .then((res) => res.json())
      .then(({ storage }) => {
        this.TC = storage.map(contrat => contrat.id)
        this.fromPubKeyToName(storage.map(contrat => contrat.entreprise))
        this.TH = storage.map(contrat => contrat.time)
        this.TP = storage.map(contrat => (parseInt(contrat.time, 10) * parseInt(contrat.TJM, 10)).toString())
        this.fromIDtoDate(storage.map(contrat => contrat.id))
      })
  },
  methods: {
    fromIDtoDate (ids) {
      for (var elmnt of ids) {
        fetch('http://localhost:3000/contrat/fetch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            idContrat: elmnt
          })
        })
          .then(res => {
            if (res.status === 401) {
              return
            }
            if (res.status === 200) {
              console.log('success')
              res.json()
                .then(res => {
                  this.TD.push(res.contrats[0].datefin)
                })
            }
          })
          .catch(error => { this.error = error })
      }
    },

    fromPubKeyToName (pk) {
      const pubkey = pk
      for (var elmnt of pubkey) {
        fetch('http://localhost:3000/client/fetchname', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pub_key: elmnt
          })
        })
          .then(res => {
            if (res.status === 401) { alert('Invalid credential') }
            if (res.status === 200) {
              res.json()
                .then(res => {
                  this.TE.push(res.user.nom)
                })
            }
          })
          .catch(error => { this.error = error })
      }
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
.VoirContrat{
  display: flex;
  justify-content: center;
  width: 50%;
  background-color: rgb(35, 131, 187);
  border-radius: 10px;
  color: white;
  margin-bottom: 2rem;
  text-decoration: none;
}

.VoirContrat:hover {
  background-color: rgb(32, 62, 145);
}
</style>
