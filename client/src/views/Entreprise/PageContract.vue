<template>
    <navbar></navbar>
    <div class="PageHeader">
    <h1>Nom du Contrat</h1>
      <h3>{{ $route.params.slug}}</h3>
  </div>
  <br>
  <div class='PageCenter'>
  <div><h2>Etat de validité du contrat :  </h2> <h2> {{Etat}}</h2></div>
  <button class="btn">Envoyer la facture</button>
  </div>
  <br>
  <div class="PageBas">
    <h2>Modifier contract</h2>
    <button class="btn">Modifier contrat</button>
  </div>
  <foot></foot>
</template>
<script>
import Nav from '../../components/nav/nav'
import Foot from '../../components/footer/foot.vue'
export default {
  name: 'Contract',
  data () {
    return {
      Etat: 'en cours'
    }
  },
  components: {
    navbar: Nav,
    foot: Foot
  }
}
</script>
<style>
.PageHeader {
  display: inline-block;
  text-align: center;
}
.PageCenter {
  display: flex;
  flex-direction: column;
  align-items: center;
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
.PageBas {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
}
.PageBas >Button {
  width: 30%;
  background-color: aqua;
}
.PageBas >button:hover{
  background-color: blue;
}
</style>
