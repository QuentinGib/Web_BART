<!--Copie/colle tous-->
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
    <div class="ModifHeader">
      <h1>Modifier Contract</h1>
      <div class="form-group">
        <div ><label for="">Numéro du contract</label></div>
        <div class="RAS"><select name="Contract" id="Contract" v-model="contrat">
          <option value="C1">--Contrat--</option>
  <option v-bind:key="index" v-for="(Contrat,index) in Contrats">{{Contrat}}</option>
  </select></div>
      </div>
      </div>
      <br>
      <table class="TabModif">
        <thead>
          <th colspan="2">LES INFORMATIONS DU CONTRAT</th>
          <th colspan="2">MODIFIER LE CONTRAT</th>
        </thead>
        <tbody>
          <tr>
            <td>MISSION</td>
            <td>{{mission}}</td>
            <td>! ! !</td>
            <td>! ! !</td>
          </tr>
          <tr>
             <td>id_Client</td>
            <td>{{id_Client}}</td>
            <td>! ! !</td>
            <td>! ! !</td>
          </tr>
          <tr>
            <td>Début du Contrat</td>
            <td>{{Debut['time']}}</td>
            <td><date :date="Modif_Debut"></date></td>
            <td><button type="button" v-on:click="Modifier_Debut">Modifier</button></td>
          </tr>
          <tr>
            <td>Fin du Contrat</td>
            <td>{{Fin['time']}}</td>
            <td><date :date="Modif_Fin"></date></td>
            <td><button type="button"  v-on:click="Modifier_Fin">Modifier</button></td>
          </tr>
          <tr>
            <td>Nombre de Jours (j)</td>
            <td>{{Jours}}</td>
            <td><input  type="text" v-model="modif_jours" class="form-control" placeholder="Nombres de jours"></td>
            <td><button type="button"  v-on:click="Modifier_j">Modifier</button></td>
          </tr>
          <tr>
            <td>TJM</td>
            <td>{{TJM}}</td>
            <td> <input  type="number" v-model="modif_TJM" class="form-control" placeholder="TJM" ></td>
            <td><button type="button"  v-on:click="Modifier_tjm">Modifier</button></td>
          </tr>
          <tr>
            <td>Intervenant</td>
            <td>{{Intervenant}}</td>
            <td> <input type="text" v-model="modif_Intervenant" class="form-control" placeholder="Intervenant"></td>
            <td><button type="button"  v-on:click="Modifier_i">Modifier</button></td>
          </tr>
        </tbody>
      </table>
      <h1>{{contrat}}+{{modif_TJM}}+{{Modif_Debut}}+{{Debut}}</h1>
  </main>
  <foot></foot>
</body>
</html>
</template>
<script>
import Nav from '../../components/nav/nav'
import Foot from '../../components/footer/foot.vue'
import Datepicker from '../../components/Datepicker.vue'
export default {
  name: 'Modifier',
  data () {
    return {
      contrat: '',
      Contrats: ['C1', 'C2', 'C3'],
      mission: 'Faire du HTML',
      id_Client: 'I192J',
      Debut: { time: '2012-06-09' },
      Fin: { time: '2013-06-09' },
      Jours: '31.5',
      TJM: '12',
      Intervenant: 'I31J3I1',
      Liste_Intervenant: ['I31J3I1', '1', 'YG2IG2', 'UJ324I'],
      Modif_Debut: {},
      Modif_Fin: {},
      modif_jours: '',
      modif_TJM: '',
      modif_Intervenant: ''
    }
  },
  methods: {
    Modifier_Debut: function () {
      if (Date.parse(this.Debut.time) < Date.parse(this.Modif_Debut.time)) {
        this.Debut = this.Modif_Debut
      }
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
    }
  },
  mounted () {
    /* Fonction SQL qui récupère la liste des contrats et mettre dans Contracts
    Pour chaque selection de contrat, mettre ses informations
    envoyer les modifient dans la bdd */
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
