<template>
<body>
  <navbar></navbar>
  <main>
      <h1 id="theme">Comment utiliser sa clé privée ?</h1>
      <h2>
        Avec l'accès à cette plateforme vous a été fournie une clé privée.
        Lorsqu'elle est demandée, veuillez renseigner cette clé dans l'espace correspondant,
        puis cliquez sur "valider" pour effectuer l'action. Patientez quelques secondes puis un
        message s'affichera vous informant de la réussite ou l'echec de votre action. Si tout se
        passe bien, vous aurez réalisé votre première transaction sur la blockchain ! <br>
        Attention : Ne divulguez jamais votre clé privée, et ne la perdez pas, elle est unique !
      </h2>
  </main>
  <foot></foot>
</body>
</template>
<script>
import Nav from '../components/nav/nav'
export default {
  name: 'HowKey',
  components: {
    navbar: Nav
  }
}
</script>
<style>

</style>
