<template>
<body>
  <navbar></navbar>
  <main class="main-asksc">
    <h1 id="theme">Demander un contrat</h1>
    <form class="form-asksc" @submit.prevent="sendEmail">
      <div class="form-group">
        <label for="">Nom de l'Entreprise</label>
        <input
          v-model="NomEntreprise"
          type="text"
          id="id"
          class="form-control"
          placeholder="Nom Entreprise"
          required
        >
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
        <label for="">Description</label>
        <textarea
          style="height: 400px"
          v-model="Description"
          id="Description"
          class="form-control-description"
          placeholder="Description"
          required
        >
        </textarea>
      </div>
      <div>
        <button type="submit" class="btn">Envoyer</button>
      </div>
      <spin v-if="chargement"></spin>
    </form>
  </main>
  <foot></foot>
</body>
</template>
<script>
import Nav from '../../components/nav/nav'
import Foot from '../../components/footer/foot.vue'
import Datepicker from '../../components/Datepicker.vue'
import Spinner from '../../components/spinner.vue'
import emailjs from 'emailjs-com'
export default {
  name: 'AskContract', // demande un contract
  components: {
    navbar: Nav,
    date: Datepicker,
    foot: Foot,
    spin: Spinner
  },
  data () {
    return {
      NomEntreprise: '',
      Debut: {},
      Fin: {},
      Description: '',
      chargement: false
    }
  },
  methods: {
    sendEmail (e) {
      this.chargement = true
      emailjs.init('user_lnmBZynZVFEI0tVt51BKl')
      try {
        const NomEntreprise = this.NomEntreprise
        const Description = this.Description
        const Debut = this.Debut.time
        const Fin = this.Fin.time
        emailjs.send('service_pytzwua', 'template_yqcdr8z', {
          fromName: NomEntreprise,
          description: Description,
          debut: Debut,
          fin: Fin
        })
        this.chargement = false
      } catch (error) {
        console.log({ error })
      }
    }
  }
}
</script>
<style>
.main-asksc {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-asksc {
    width: 600px;
    background-color: whitesmoke;
    padding: 5%;
    border: 2px solid #4D4D4F;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
}

.form-control-description {
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    color: rgb(1, 64, 88);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
}
</style>
