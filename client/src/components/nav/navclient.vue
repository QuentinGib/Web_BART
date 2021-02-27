<template>
<div>
    <div class="main-header">
        <header class="main-header-title">
          <img src="./../../../public/img/logoBART.png" alt="" class="logo-img">
        </header>
        <div class="main-nav" id="mainnav">
          <router-link class="main-tab" :to="{ name: 'Home' }">🏠 Home</router-link>
          <router-link class="main-tab" :to="{ name: 'AskContract' }">✉️ Demander un contrat
              </router-link
          >
          <router-link class="main-tab" :to="{ name: 'Validate' }">📝 Valider un contrat</router-link>
          <router-link class="main-tab" :to="{ name: 'Validation' }">📊 Valider l'activité</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'navclient'
}
</script>

<style>
</style>
