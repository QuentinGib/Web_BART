<template>
<h1 id="theme">Bienvenue dans la start'up</h1>
<div class="gauche">
  <img class="imgAuth" src="@/assets/images/SC.png">
</div>
<div class="droite">
  <div class="space"></div>
  <p class="psize">Connectez-Vous avec l'identifiant fourni</p>
  <form>
    <div class="form-group">
        <label for="">Clé publique</label>
        <input v-model="id"  type="text" id="id" class="form-control" placeholder="Clé publique" required>
    </div>
<div class="form-group">
        <label for="cle">mot de passe</label>
        <input v-model="cle" type="password"  id="cle" class="form-control" placeholder="Mot de Passe" required>
    </div>
    <div>
    <button v-if="CheckButtom" v-on:click="envoiForm" class="btn">Envoyez</button>
    </div>
    <div>
        <button type="submit" class="btn">Connectez !</button>
    </div>
    </form>
    <p>en cas de perte de votre mot de passe, Contactez à l'adresse: #email-automatique</p>
</div>
<foot class="bas"></foot>
</template>

<script>
import Foot from '../components/foot.vue'
export default {
  name: 'Authentification',
  components: {
    foot: Foot
  },
  data () {
    return {
      id: undefined,
      cle: undefined,
      fonction: undefined // dans le SQL mettre si c'est un client / ressource / entreprise
    }
  },
  methods: {
    sendCredentials () {
      const login = this.mail
      const password = this.cle

      fetch('/api/v1/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login,
          password
        })
      })
        .then(res => res.json())
        .then(({ success, token, message }) => {
          localStorage.setItem('token', token)
        })
        .catch(error => { this.error = error })
    }
  }
}
</script>
<style>
.main {
  display: inline;
}
.gauche {
  display: flex;
  float: left;
  width: 40%;
  height: 650px;
}
.imgAuth {
  width: 100%;
}
.droite {
  display: inline;
  align-items: center;
  float: right;
  width: 53%;
  height: 650px;
}
.psize {
  font-size: 300%;
  margin: 1px;
}
.space {
  margin-bottom: 100px ;
}
.form-group {
    display:inline-block;
    width: 80%;
    justify-content: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
}
.form-group >label{
    margin-bottom: .5rem;
    font-size: larger;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border:  #ced4da;
    border-radius: .25rem;
}
.btn{
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  user-select: none;
  background-color: rgb(78, 228, 78);
  color: #fff;
}
.btn:hover{
  background-color: darkgreen;
}
.bas {
  margin-top: 700px;
}
</style>
