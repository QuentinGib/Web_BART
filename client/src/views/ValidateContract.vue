<template>
<body>
  <navbar></navbar>
  <main>
    <h1 id="theme">Valider un contrat</h1>
    <form class="form-infoSCvalidate" @submit.prevent="VoirContrat">
      <div class="form-group">
        <label for="id_contrat" class="label-id-contrat">ID du contrat :</label>
        <select id="id_contrat" v-model="id_contrat" class="input-id-contrat">
          <option v-bind:key="index" v-for="(Contract,index) in Contracts">
            {{Contract}}
          </option>
        </select>
      </div>
      <div>
        <button type="submit" class="btn">Voir le contrat</button>
      </div>
    </form>
    <div v-if="afficheContrat === true && fillInPK === false" class="Icontract">
      <div class="container">
        <div class="panel pricing-table">
          <div class="pricing-plan">
            <img src="./../../public/img/onepoint-logo-black.png" alt="" class="pricing-img">
            <h2 class="pricing-header">{{mission}}</h2>
            <h3>Pour le client {{client_nom}},&nbsp; du {{dateDebut}} au {{dateFin}}</h3>
            <ul class="pricing-features">
              <li class="pricing-features-item">
                Informations intervenant :<br>
                Nom : {{ressource_nom.split(' ')[1]}} &emsp; Prénom : {{ressource_nom.split(' ')[0]}}<br>
                TJM : {{storage.TJM}}<br>
                Estimation temps de réalisation : {{storage.time}} jours
              </li>
              <li class="pricing-features-item">
                Desrciption de la mission :<br>
                {{descriptif}}
              </li>
            </ul>
            <p class="pricing-price">Montant total : {{storage.time*storage.TJM}}.00 €</p>
            <p v-if="signed" class="pricing-button">✔️ Document signé ✔️</p>
            <button v-else type="button" v-on:click="fillInPK = true" class="pricing-button">✒️ Signer le contrat</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="afficheContrat === true && fillInPK === true && hashTransaction === null" class="container">
      <button type="button"  v-on:click="fillInPK = false; hashTransaction = null" class="close-button">X</button>
      <div class="panel pricing-table">
        <div class="pricing-plan">
            <label for="cle" class="pricing-header">🔑 Clé Privée 🔑</label>
            <div class="form-infoSCvalidate">
              <input :type="passwordFieldType" id="pose_prv" class="prv-control" placeholder="Entrez votre clé privée ici" required>
              <p class="montrer" v-on:click="Visibilite(); Show()">{{show}}</p>
            </div>
            <button type="button"  v-on:click="signer()" class="pricing-button">🔏 Valider et Signer</button>
            <h3>Attention : ne jamais divulguer sa clé privée !</h3>
        </div>
      </div>
    </div>
    <div v-if="afficheContrat === true && fillInPK === true && hashTransaction !== null" class="container">
      <button type="button"  v-on:click="fillInPK = false; hashTransaction = null" class="close-button">X</button>
      <div class="panel pricing-table">
        <div class="pricing-plan">
            <label for="cle" class="pricing-header">🎉 Signature réussie ! 🎉</label>
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
import Nav from '../components/nav/nav'
import Foot from '../components/footer/foot.vue'
import VueCookies from 'vue-cookies'
export default {
  name: 'Validate',
  data () {
    return {
      Contracts: [],
      id_contrat: '',
      mission: '',
      dateDebut: '',
      dateFin: '',
      descriptif: '',
      passwordFieldType: 'password',
      show: 'montrer',
      storage: [],
      afficheContrat: false,
      fillInPK: false,
      hashTransaction: null,
      client_nom: '',
      ressource_nom: '',
      signed: false
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
    foot: Foot
  },
  methods: {
    VoirContrat () {
      const id = this.id_contrat
      const role = VueCookies.get('role')

      // appel blockchain
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
          this.storage = storage
          this.fromPubKeyToName(storage.client, 'client')
          this.fromPubKeyToName(storage.ressource, 'ressource')
        })
        .then(this.afficheContrat = true)
        .catch(error => { this.error = error })

      // appel BDD
      fetch('http://localhost:3000/contrat/fetch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idContrat: id
        })
      })
        .then(res => {
          if (res.status === 401) { console.log('Invalid credential') }
          if (res.status === 200) {
            console.log('success')
            res.json()
              .then(res => {
                this.mission = res.contrats[0].mission
                this.dateDebut = res.contrats[0].datecommencement
                this.dateFin = res.contrats[0].datefin
                this.descriptif = res.contrats[0].descriptif
              })
          }
        })
        .catch(error => { this.error = error })

      fetch('http://localhost:3000/api/v1/infosSC/signature', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id,
          role
        }),
        redirect: 'follow'
      })
        .then((res) => res.json())
        .then(({ signature }) => {
          this.signed = signature
        })
        .catch(error => { this.error = error })
    },
    fromPubKeyToName (pk, role) {
      const pubkey = pk
      fetch('http://localhost:3000/client/fetchname', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pub_key: pubkey
        })
      })
        .then(res => {
          if (res.status === 401) { alert('Invalid credential') }
          if (res.status === 200) {
            res.json()
              .then(res => {
                if (role === 'client') {
                  this.client_nom = res.user.nom
                } else {
                  this.ressource_nom = res.user.nom
                }
              })
          }
        })
        .catch(error => { this.error = error })
    },
    Visibilite () {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    Show () {
      this.show = this.show === 'montrer' ? 'cacher' : 'montrer'
    },
    signer () {
      const clePrv = document.getElementById('pose_prv').value
      const role = VueCookies.get('role')
      var fetchURL = ''
      if (role === 'client') {
        fetchURL = 'http://localhost:3000/api/v1/accessSC/validateByClient'
      } else {
        fetchURL = 'http://localhost:3000/api/v1/accessSC/validateByRessource'
      }
      fetch(fetchURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.id_contrat,
          privateKey: clePrv
        }),
        redirect: 'follow'
      })
        .then((res) => res.json())
        .then(({ resultID }) => {
          this.hashTransaction = resultID
          this.signed = true
        })
        .catch(error => { this.hashTransaction = error })
    }
  }
}
</script>
<style>
.form-infoSCvalidate {
  display: flex;
  margin-left: 0.5em;
}

.label-id-contrat {
  font-size: 1.5em;
  margin-right: 0.9em;
}

.input-id-contrat {
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 2px solid #0093CD;
  font-size: 1.4em;
  margin-right: 1em;
}

.input-id-contrat:focus{
  outline: none;
}

.container {
  margin: 0 auto;
  padding: 50px 0 0;
  max-width: 960px;
  width: 100%;
}
.panel {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  width: 100%;
  z-index: 10;
}

.pricing-table {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
}

@media (min-width: 900px) {
  .pricing-table {
    flex-direction: row;
  }
}

.pricing-table * {
  text-align: center;
  text-transform: uppercase;
}

.pricing-plan {
  border-bottom: 1px solid #e1f1ff;
  padding: 25px;
}

.pricing-plan:last-child {
  border-bottom: none;
}

@media (min-width: 900px) {
  .pricing-plan {
    border-bottom: none;
    border-right: 1px solid #e1f1ff;
    flex-basis: 100%;
    padding: 25px 50px;
  }

  .pricing-plan:last-child {
    border-right: none;
  }
}

.pricing-img {
  margin-bottom: 25px;
  max-width: 30%;
}

.pricing-header {
  color: #888;
  font-weight: 600;
  letter-spacing: 1px;
}

.pricing-features {
  color: #00638a;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 50px 0 25px;
}

.pricing-features-item {
  display: flex;
  justify-content: flex-start;
  text-align: left;
  text-transform: none;
  border-top: 1px solid #e1f1ff;
  font-size: 20px;
  line-height: 1.5;
  padding: 15px 0;
}

.pricing-features-item:last-child {
  border-bottom: 1px solid #e1f1ff;
}

.pricing-price {
  color: #00638a;
  display: block;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 3%;
}

.pricing-button {
  border: 1px solid #9dd1ff;
  border-radius: 10px;
  color: #348EFE;
  background-color: white;
  display: inline-block;
  margin: 25px 0;
  padding: 15px 35px;
  text-decoration: none;
  transition: all 150ms ease-in-out;
}

.pricing-button:hover,
.pricing-button:focus {
  background-color: #e1f1ff;
}

.pricing-button.is-featured {
  background-color: #48aaff;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
  background-color: #269aff;
}
.prv {
    display:inline-block;
    width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border: solid black;
    text-transform: none;
}
.prv >label{
    margin-bottom: .5rem;
    font-size: 200%;
}
.prv-control {
    display: block;
    width: 80%;
    height: calc(1em + .75rem + 2px);
    margin: 1em;
    margin-top: 1.5em;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}
.prv>button {
  background-color: #495057;
  color: #fff;
  width: 60%;
  font-size: 200%;
  margin-bottom: 5px;
  border-radius: 10px;
}
.prv>button:hover {
  background-color: black;
}
.prv>h3 {
  font-size: 200%;
  color: #0093CD;
}
.montrer{
  text-align: center;
  width: 8%;
  border-radius: 80px;
  padding-top: 15px;
  margin: 1rem;
  margin-top: 1.2rem;
  font-size: 100%;
  background-color: rgb(51, 78, 128);
  color: #fff;
  text-transform: none;
}
.close-button {
  width: 45px;
  height: 45px;
  margin-bottom: 0.5em;
  font-size: 150%;
  border-radius: 50%;
  color: black;
  background-color: #4e493733;
  border: none;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
}
</style>
