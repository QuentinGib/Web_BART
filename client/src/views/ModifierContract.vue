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
      <h1>Modifier Contract</h1>
  </main>
  <foot></foot>
</body>
</html>
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
