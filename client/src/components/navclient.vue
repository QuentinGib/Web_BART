<template>
    <nav>
        <ul>
            <li><router-link :to="{ name: 'Home' }"><i class="fas fa-home"></i></router-link></li>
            <li><router-link :to="{ name: 'HowKey' }">Comment valider un contract ?</router-link></li>
            <li><router-link :to="{ name: 'AskContract' }">Demander un contract</router-link></li>
            <li><router-link :to="{ name: 'Validate' }">Valider un contract</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
  name: 'navclient'
}
</script>
<style>
</style>
