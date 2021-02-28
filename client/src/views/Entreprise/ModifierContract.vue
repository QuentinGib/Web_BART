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
    <h1 id="theme">Modifier Contract</h1>
    <form class="form-infoSCvalidate" @submit.prevent="VoirContrat">
      <div class="form-group">
        <label for="id_Contract" class="label-id-contrat">ID du contrat :</label>
        <select id="id_Contract" v-model="id_Contract" class="input-id-contrat">
          <option v-bind:key="index" v-for="(Contract,index) in Contracts">
            {{Contract}}
          </option>
        </select>
      </div>
      <div>
        <button type="submit" class="btn">Choisir</button>
      </div>
    </form>
    <br>
    <table class="TabModif" v-if="afficheContrat === true && fillInPK === false">
      <thead>
        <th colspan="2">LES INFORMATIONS DU CONTRAT</th>
        <th colspan="2">MODIFIER LE CONTRAT</th>
      </thead>
      <tbody>
        <tr>
          <td>Mission :</td>
          <td style="color:#00638a">{{mission}}</td>
        </tr>
        <tr>
          <td>Client :</td>
          <td style="color:#00638a">{{id_Client}}</td>
        </tr>
        <tr>
          <td>Début du contrat :</td>
          <td style="color:#00638a">{{Debut['time']}}</td>
        </tr>
        <tr>
          <td>Fin du contrat :</td>
          <td style="color:#00638a">{{Fin['time']}}</td>
          <td><date :date="Modif_Fin"></date></td>
          <td><button type="button" v-on:click="Modifier_Fin">Modifier</button></td>
        </tr>
        <tr>
          <td>Nombre de jours (j) :</td>
          <td style="color:#00638a">{{Jours}}</td>
          <td><input  type="text" v-model="modif_jours" class="form-control" placeholder="Nombres de jours"></td>
          <td><button type="button"  v-on:click="Modifier_j">Modifier</button></td>
        </tr>
        <tr>
          <td>TJM :</td>
          <td style="color:#00638a">{{TJM}}</td>
          <td> <input  type="number" v-model="modif_TJM" class="form-control" placeholder="TJM" ></td>
          <td><button type="button"  v-on:click="Modifier_tjm">Modifier</button></td>
        </tr>
        <tr>
          <td>Intervenant :</td>
          <td style="color:#00638a">{{Intervenant}}</td>
          <td> <input type="text" v-model="modif_Intervenant" class="form-control" placeholder="Intervenant"></td>
          <td><button type="button"  v-on:click="Modifier_i">Modifier</button></td>
        </tr>
      </tbody>
      <button type="button" v-on:click="fillInPK = true" class="pricing-button">✔️ Valider les modifications</button>
    </table>
    <div v-if="afficheContrat === true && fillInPK === true && hashTransaction === null" class="container">
      <button type="button"  v-on:click="fillInPK = false; hashTransaction = null" class="close-button">X</button>
      <div class="panel pricing-table">
        <div class="pricing-plan">
            <label for="cle" class="pricing-header">🔑 Clé Privée 🔑</label>
            <div class="form-infoSCvalidate">
              <input :type="passwordFieldType" id="pose_prv" class="prv-control" placeholder="Entrez votre clé privée ici" required>
              <p class="montrer" v-on:click="Visibilite(); Show()">{{show}}</p>
            </div>
            <button type="button"  v-on:click="signer()" class="pricing-button">🔏 Valider et envoyer</button>
            <h3>Attention : ne jamais divulguer sa clé privée !</h3>
        </div>
      </div>
    </div>
    <div v-if="afficheContrat === true && fillInPK === true && hashTransaction !== null" class="container">
      <button type="button"  v-on:click="fillInPK = false; hashTransaction = null" class="close-button">X</button>
      <div class="panel pricing-table">
        <div class="pricing-plan">
            <label for="cle" class="pricing-header">🎉 Modification réussie ! 🎉</label>
            <div class="pricing-features">
              <p class="pricing-features-item">Numéro de transaction : {{hashTransaction}}</p>
            </div>
        </div>
      </div>
    </div>
  </main>
  <foot></foot>
</body>
</html>
</template>
<script>
import Nav from '../../components/nav/nav'
import Foot from '../../components/footer/foot.vue'
import Datepicker from '../../components/Datepicker.vue'
import VueCookies from 'vue-cookies'
export default {
  name: 'Modifier',
  data () {
    return {
      id_Contract: '',
      Contracts: [],
      mission: 'Faire du HTML',
      id_Client: '',
      Debut: { time: '2012-06-09' },
      Fin: { time: '2013-06-09' },
      Jours: '',
      TJM: '',
      Intervenant: '',
      Liste_Intervenant: ['I31J3I1', '1', 'YG2IG2', 'UJ324I'],
      Modif_Fin: {},
      modif_jours: '',
      modif_TJM: '',
      modif_Intervenant: '',
      passwordFieldType: 'password',
      show: 'montrer',
      fillInPK: false,
      hashTransaction: '',
      afficheContrat: false
    }
  },
  methods: {
    VoirContrat () {
      const id = this.id_Contract
      fetch('http://localhost:3000/api/v1/infosSC/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id
        }),
        redirect: 'follow'
      })
        .then((res) => res.json())
        .then(({ storage }) => {
          this.Intervenant = storage.map(contrat => contrat.ressource)
          this.Jours = storage.map(contrat => contrat.time)
          this.TJM = storage.map(contrat => contrat.TJM)
          this.id_Client = storage.map(contrat => contrat.client)
        })
        .then(this.afficheContrat = true)
        .catch(error => { this.error = error })
    },
    Modifier_Fin: function () {
      if (this.Fin.time < this.Modif_Fin.time) {
        this.Fin = this.Modif_Fin
      }
    },
    Modifier_j: function () {
      if (this.modif_jours) {
        this.Jours = this.modif_jours
      }
    },
    Modifier_tjm: function () {
      if (this.modif_TJM > 0) {
        this.TJM = this.modif_TJM
      }
    },
    Modifier_i: function () {
      if (this.Liste_Intervenant.includes(this.modif_Intervenant)) {
        this.Intervenant = this.modif_Intervenant
      }
    },
    sendContract () {
      this.fillInPK = true
    },
    createContract () {
      // Retrouver les public key du client et ressource
      const pubKeyClient = 'pubKeyClient'
      const pubKeyRessource = 'pubKeyRessource'
      const clePrv = document.getElementById('pose_prv').value
      // Blockchain
      fetch('http://localhost:3000/api/v1/accessSC/setAll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          TJM: this.TJM.toString(),
          client: pubKeyClient,
          id: this.id_Contract,
          ressource: pubKeyRessource,
          time: this.Jours.toString(),
          privateKey: clePrv
        }),
        redirect: 'follow'
      })
        .then((res) => res.json())
        .then(({ resultID }) => {
          this.hashTransaction = resultID
        })
        .catch(error => { this.hashTransaction = error })
    },
    Visibilite () {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    Show () {
      this.show = this.show === 'montrer' ? 'cacher' : 'montrer'
    }
  },
  mounted () {
    const role = VueCookies.get('role')
    const publicKey = VueCookies.get('key')
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
        this.Contracts = storage.map(contrat => contrat.id)
      })
  },
  components: {
    navbar: Nav,
    foot: Foot,
    date: Datepicker
  }
}
</script>
<style>
.ModifHeader {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid black;
  width: 70%;
  }
  .TabModif {
    border: solid black;
    width: 90%;
    text-align: center;
  }
</style>
