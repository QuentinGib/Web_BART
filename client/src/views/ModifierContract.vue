<template>
    <navbar></navbar>
    <main>
        <h1>Modifier Contract</h1>
    </main>
    <foot></foot>
</template>
<script>
import Nav from '../components/nav.vue'
import Foot from '../components/foot.vue'
export default {
  name: 'Modifier',
  components: {
    navbar: Nav,
    foot: Foot
  }
}
</script>
<style>
</style>
