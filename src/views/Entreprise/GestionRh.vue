<template>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GestionRh</title>
</head>
<body>
  <navbar></navbar>
  <main>
      <h1>Liste de vos Collaborateurs</h1>
      <p>Un tableau avec chaque collaborateur et leur mission</p>
  </main>
  <foot></foot>
</body>
</html>
</template>
<script>
import Nav from '../../components/nav/nav'
import Foot from '../../components/footer/foot.vue'
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
