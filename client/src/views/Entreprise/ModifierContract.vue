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
      <h3 id="Contrat">{{ $route.params.slug}}</h3>
      </div>
      <br>
    <div>
      <table class="TabModif">
        <thead>
          <th colspan="2">LES INFORMATIONS DU CONTRAT</th>
          <th colspan="2">MODIFIER LE CONTRAT</th>
        </thead>
        <tbody>
          <tr>
            <td>MISSION</td>
            <td>{{mission}}</td>
            <td>!</td>
            <td>!</td>
          </tr>
          <tr>
             <td>id_Client</td>
            <td>{{id_Client}}</td>
            <td>!</td>
            <td>!</td>
          </tr>
          <tr>
            <td rowspan="3">Début du Contrat</td>
            <td>Jour : {{s_day}}</td>
            <td><input  type="number" v-model="modif_s_day" class="form-control" placeholder="DD"  maxlength="2" max="31" min="1"></td>
            <td><button type="button" v-on:click="Modifier_sd">Modifier</button></td>
          </tr>
          <tr>
          <td>Mois : {{s_mouth}}</td>
          <td><input  type="number" v-model="modif_s_mouth" class="form-control" placeholder="MM"  maxlength="2" max="12" min="1"></td>
          <td><button type="button"  v-on:click="Modifier_sm">Modifier</button></td>
          </tr>
          <tr>
            <td>Année : {{s_year}}</td>
            <input   type="number" v-model="modif_s_year" class="form-control" placeholder="YYYY" maxlength="4" max="2050" min="2021">
            <td><button type="button"  v-on:click="Modifier_sy">Modifier</button></td>
          </tr>
          <tr>
            <td rowspan="3">Fin du Contrat</td>
            <td>Jour : {{e_day}}</td>
            <td><input  type="number" v-model="modif_e_day" class="form-control" placeholder="DD" maxlength="2" max="31" min="1"></td>
            <td><button type="button"  v-on:click="Modifier_ed">Modifier</button></td>
          </tr>
          <tr>
          <td>Mois : {{e_mouth}}</td>
          <td><input  type="number" v-model="modif_e_mouth" class="form-control" placeholder="MM" maxlength="2" max="12" min="1"></td>
          <td><button type="button"  v-on:click="Modifier_em">Modifier</button></td>
          </tr>
          <tr>
            <td>Année : {{e_year}}</td>
            <input  type="number" v-model="modif_e_year" class="form-control" placeholder="YYYY" maxlength="4" max="2050" min="2021">
            <td><button type="button"  v-on:click="Modifier_ey">Modifier</button></td>
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
    </div>
  </main>
  <foot></foot>
</body>
</html>
</template>
<script>
import Nav from '../../components/nav/nav'
import Foot from '../../components/footer/foot.vue'
export default {
  name: 'Modifier',
  data () {
    return {
      Contrat: '',
      mission: 'Faire du HTML',
      id_Client: 'I192J',
      s_day: '1',
      s_mouth: '1',
      s_year: '2020',
      e_day: '4',
      e_mouth: '5',
      e_year: '2034',
      Jours: '31.5',
      TJM: '12',
      Intervenant: 'I31J3I1',
      Liste_Intervenant: ['I31J3I1', '1', 'YG2IG2', 'UJ324I'],
      modif_s_day: '',
      modif_s_mouth: '',
      modif_s_year: '',
      modif_e_day: '',
      modif_e_mouth: '',
      modif_e_year: '',
      modif_jours: '',
      modif_TJM: '',
      modif_Intervenant: ''
    }
  },
  methods: {
    Modifier_sd: function () {
      if (this.modif_s_day < 32 && this.modif_s_day > 0) {
        this.s_day = this.modif_s_day
      }
    },
    Modifier_sm: function () {
      if (this.modif_s_mouth < 13 && this.modif_s_mouth > 0) {
        this.s_mouth = this.modif_s_mouth
      }
    },
    Modifier_sy: function () {
      if (this.modif_s_year > 2020) {
        this.s_year = this.modif_s_year
      }
    },
    Modifier_ed: function () {
      if (this.modif_e_day < 32 && this.modif_e_day > 0) {
        this.e_day = this.modif_e_day
      }
    },
    Modifier_em: function () {
      if (this.modif_e_mouth < 13 && this.modif_e_mouth > 0) {
        this.e_mouth = this.modif_e_mouth
      }
    },
    Modifier_ey: function () {
      if (this.modif_e_year >= this.s_year) {
        this.e_year = this.modif_e_year
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
      if (this.Liste_Intervenant.includes(this.Intervenant)) {
        this.Intervenant = this.modif_Intervenant
      }
    }
  },
  mounted () {
    this.Contrat = document.getElementById('Contrat').textContent
  },
  components: {
    navbar: Nav,
    foot: Foot
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
