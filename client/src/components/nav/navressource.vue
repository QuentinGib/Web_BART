<template>
<div>
    <div class="main-header">
        <header class="main-header-title">
          <img src="./../../../public/img/logoBART.png" alt="" class="logo-img">
        </header>
        <div class="main-nav" id="mainnav">
          <router-link class="main-tab" :to="{ name: 'Home' }">🏠 Home</router-link>
          <router-link class="main-tab" :to="{ name: 'Activite' }">📊 Rapport d'activité
              </router-link
          >
          <router-link class="main-tab" :to="{ name: 'Validate' }">📝 Valider son contrat
              </router-link
          >
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'navressource'
}
</script>
<style>
.colorR {
    display: flex;
    background: rgb(105, 219, 120);
}
.colorR ul li {
    background: rgb(132, 190, 137);
}

</style>
