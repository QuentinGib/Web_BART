<template>
<body>
    <navbar></navbar>
    <main class="main-newsc">
        <h1 id="theme">Proposer un contrat</h1>
        <form class="form-newsc" @submit.prevent="sendContract" v-if="fillInPK === false">
            <div class="form-group">
                <label for="">Numéro du contrat </label>
                <input v-model="id_Contract"  type="text" id="id_Contract" class="form-control" placeholder="ex: CT-212" required>
            </div>
            <div class="form-group">
                <label for="">Mission </label>
                <input v-model="mission"  type="text" id="mission" class="form-control" placeholder="ex: Analyse sécurité" required>
            </div>
            <div class="form-group">
                <label for="">Identifiant Client </label>
                <input v-model="id_Client"  type="text" id="id_Client" class="form-control" placeholder="ex: Google-12" required>
            </div>
            <div class="form-group">
              <label for="">Début de la mission</label>
              <div class="inline">
                <date :date="Debut"></date>
              </div>
            </div>
            <div class="form-group">
              <label for="">Fin de la mission</label>
              <div class="inline">
                <date :date="Fin"></date>
              </div>
            </div>
            <div class="form-group">
                <label for="">Nombre de jours </label>
                <input v-model="jours"  type="number" id="jours" class="form-control" placeholder="ex: 5" required>
            </div>
            <div class="form-group">
                <label for="">TJM </label>
                <input v-model="TJM"  type="number" id="TJM" class="form-control" placeholder="ex: 100" required>
            </div>
            <div class="form-group">
                <label for="">Intervenant </label>
                <input v-model="Intervenant"  type="text" id="Intervenant" class="form-control" placeholder="ex: Jacques Dupont" required>
            </div>
            <div class="form-group">
                <label for="">Descriptif de la mission </label>
                <input v-model="descriptif"  type="text" id="descriptif" class="form-control" placeholder="Ecrivez ici" required>
            </div>
            <div>
                <button type="submit" class="btn">Créer et envoyer</button>
            </div>
        </form>
        <div v-if="fillInPK === true && hashTransaction === null" class="container">
          <button type="button"  v-on:click="fillInPK = false; hashTransaction = null" class="close-button">X</button>
          <div class="panel pricing-table">
            <div class="pricing-plan">
                <label for="cle" class="pricing-header">🔑 Clé Privée 🔑</label>
                <div class="form-infoSCvalidate">
                  <input :type="passwordFieldType" id="pose_prv" class="prv-control" placeholder="Entrez votre clé privée ici" required>
                  <p class="montrer" v-on:click="Visibilite(); Show()">{{show}}</p>
                </div>
                <button type="button"  v-on:click="createContract(), createContractBDD()" class="pricing-button">📨 Valider et envoyer</button>
                <h3>Attention : ne jamais divulguer sa clé privée !</h3>
            </div>
          </div>
        </div>
        <div v-if="fillInPK === true && hashTransaction !== null" class="container">
          <button type="button"  v-on:click="fillInPK = false; hashTransaction = null" class="close-button">X</button>
          <div class="panel pricing-table">
            <div class="pricing-plan">
                <label for="cle" class="pricing-header">🎉 Contrat créé et envoyé ! 🎉</label>
                <div class="pricing-features">
                  <p class="pricing-features-item">Numéro de transaction : {{hashTransaction}}</p>
                </div>
            </div>
          </div>
        </div>
    </main>
    <foot></foot>
</body>
</template>
<script>
import Nav from '../../components/nav/nav'
import Foot from '../../components/footer/foot.vue'
import Datepicker from '../../components/Datepicker.vue'
export default {
  name: 'Proposer',
  data () {
    return {
      id_Contract: '',
      mission: '',
      id_Client: '',
      pk_client: '',
      Debut: {},
      Fin: {},
      jours: '',
      TJM: '',
      Intervenant: '',
      pk_ressource: '',
      descriptif: '',
      passwordFieldType: 'password',
      show: 'montrer',
      fillInPK: false,
      hashTransaction: null
    }
  },
  methods: {
    sendContract () {
      this.fillInPK = true
      // Retrouver les public key du client et ressource
      this.fromNameToPubKey(this.id_Client, 'client')
      this.fromNameToPubKey(this.Intervenant, 'ressource')
    },
    fromNameToPubKey (nom, role) {
      const name = nom
      fetch('http://localhost:3000/client/fetchkey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nom: name
        })
      })
        .then(res => {
          if (res.status === 401) { alert('Invalid credential') }
          if (res.status === 200) {
            res.json()
              .then(res => {
                if (role === 'client') {
                  this.pk_client = res.user.pub_key
                } else {
                  this.pk_ressource = res.user.pub_key
                }
              })
          }
        })
        .catch(error => { this.error = error })
    },

    createContract () {
      const clePrv = document.getElementById('pose_prv').value
      // Blockchain
      fetch('http://localhost:3000/api/v1/accessSC/setAll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          TJM: this.TJM.toString(),
          client: this.pk_client,
          id: this.id_Contract,
          ressource: this.pk_ressource,
          time: this.jours.toString(),
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

    createContractBDD () {
      const idContrat = this.id_Contrac
      const mission = this.mission
      const datecommencement = this.Debut.toString()
      const datefin = this.Fin.toString()
      const descriptif = this.descriptif
      fetch('http://localhost:3000/contrat/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idContrat,
          mission,
          datecommencement,
          datefin,
          descriptif
        })
      })
        .then(res => {
          if (res.status === 201) {
            console.log('BDDsuccess')
          }
        })
        .catch(error => { this.error = error })
    },

    Visibilite () {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },

    Show () {
      this.show = this.show === 'montrer' ? 'cacher' : 'montrer'
    }
  },
  components: {
    navbar: Nav,
    foot: Foot,
    date: Datepicker
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
    padding: 10px 0px;
    background: none;
    border: none;
    border-bottom: 1px solid rgb(102, 102, 102);
    color: rgb(1, 64, 88);
    font-size: 14px;
    text-transform: none;
    outline: none;
    transition: border-color 0.2s;
    margin: 0px 10px;
    margin-bottom: 0.5em;
}
.form-group {
    margin-bottom: 1em;
}
.inline {
    display:flex;
    justify-content: space-between;
}
label {
    font-size: 200%;
}
</style>
