<template>
<navbar></navbar>
<main>
    <h1>Liste de vos Collaborateurs</h1>
    <p>Un tableau avec chaque collaborateur et leur mission</p>
</main>
<foot></foot>
</template>
<script>
import Nav from '../components/nav.vue'
import Foot from '../components/foot.vue'
export default {
  name: 'GestionRh',
  components: {
    navbar: Nav,
    foot: Foot
  }
}
</script>
<style scoped>

</style>
