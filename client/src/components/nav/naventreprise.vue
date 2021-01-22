<template>
  <div>
    <div class="main-header">
        <header class="main-header-title">
          <h1>
            B.A.R.T.
          </h1>
        </header>
        <div class="main-nav" id="mainnav">
          <router-link class="main-tab" :to="{ name: 'Home' }">🏠 Home</router-link>
          <router-link class="main-tab" :to="{ name: 'Proposer' }">📝 Nouveau contract
              </router-link
          >
          <router-link class="main-tab" :to="{ name: 'GestionRh' }">👓 Collaborateurs
              </router-link
          >
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'naventreprise'
}
</script>
<style>

</style>
