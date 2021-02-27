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
    <h1 id="theme">Valider L'Activité</h1>
    <form class="form-infoSCvalidate" @submit.prevent="VoirContrat">
      <div class="form-group">
        <label for="id_contrat" class="label-id-contrat">ID du contrat :</label>
        <input v-model="id_contrat" class="input-id-contrat" type="text" id="id_contrat" required>
      </div>
      <div>
        <button type="submit" class="btn">Voir le contrat</button>
      </div>
    </form>
    <div v-if="afficheContrat === true" class="Icontract">
      <div class="container">
        <div class="panel pricing-table">
          <div class="pricing-plan">
            <img src="./../../public/img/onepoint-logo-black.png" alt="" class="pricing-img">
            <h2 class="pricing-header">Titre de la mission</h2>
            <h3>Pour le client xxxxxxxx du XX/XX/XXXX au XX/XX/XXXX</h3>
            <ul class="pricing-features">
              <li class="pricing-features-item">
                Informations intervenant :<br>
                Nom : xxxxx      Prénom : xxxxxxxx<br>
                TJM : {{storage.TJM}}<br>
                Estimation temps de réalisation : {{storage.time}} jours
              </li>
              <li class="pricing-features-item">
                Desrciption de la mission :<br>
                ..............................................................<br>
                ..............................................................<br>
                ..............................................................
              </li>
            </ul>
            <span class="pricing-price">Montant total : XXX.XX €</span>
            <!--Modifier-->
            <button type="button" v-on:click="Signature()" class="pricing-button">✒️ Signer le contrat</button>
          </div>
        </div>
      </div>
    </div>
    <div class="prv">
        <label for="cle">Clé Privée</label>
        <input :type="passwordFieldType" id="pose_prv" class="prv-control" placeholder="clé privée" required>
        <p class="montrer" v-on:click="Visibilite(); Show()">{{show}}</p>
        <button type="button"  v-on:click="poser_prv()">mettre sa clé privée</button>
        <h3>Ne jamais Divulguer sa clé privée !!!</h3>
    </div>
    <!--Fin Modif-->
  </main>
  <foot></foot>
</body>
</html>
</template>
<script>
import Nav from '../components/nav/nav'
import Foot from '../components/footer/foot.vue'
export default {
  name: 'Validation',
  data () {
    return {
      id_contrat: '',
      cle_prv: '', /* Modifier */
      passwordFieldType: 'password', /* Modifier */
      show: 'voir la clé privée', /* Modifier */
      storage: [],
      afficheContrat: false
    }
  },
  components: {
    navbar: Nav,
    foot: Foot
  },
  methods: {
    VoirContrat () {
      const id = this.id_contrat
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
        })
        .then(this.afficheContrat = true)
        .catch(error => { this.error = error })
    },
    /* Modifier */
    Visibilite () {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    Show () {
      this.show = this.show === 'voir la clé privée' ? 'masquer la clé privée' : 'voir la clé privée'
    },
    poser_prv () {
      this.cle_prv = document.getElementById('pose_prv').value
    },
    Signature () {
      /* envoie clé publique et clé privée dans le testnet */
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
/* Modifier */
.prv {
    display:inline-block;
    width: 80%;
    justify-content: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border: solid black;
}
.prv >label{
    margin-bottom: .5rem;
    font-size: 200%;
}
.prv-control {
    display: block;
    width: 70%;
    height: calc(1.5em + .75rem + 2px);
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
  width: 40%;
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
  width: 20%;
  border-radius: 10px;
  margin-bottom: 2rem;
  font-size:100%;
  background-color: rgb(51, 78, 128);
  color: #fff;
}
</style>
