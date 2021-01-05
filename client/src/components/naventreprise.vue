<template>
    <nav class='colorE'>
        <ul>
            <li><router-link :to="{ name: 'Home' }"><i class="fas fa-home"></i></router-link></li>
            <li><router-link :to="{ name: 'HowKey' }">Comment valider un contract ?</router-link></li>
            <li><router-link :to="{ name: 'Proposer' }">Proposer un contract</router-link></li>
            <li><router-link :to="{ name: 'GestionRh' }">Gestion de vos Collaborateurs</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
  name: 'naventreprise'
}
</script>
<style>
.colorE {
    display: flex;
    background: rgb(230, 78, 78);
}
.colorE ul li {
    background: rgb(192, 110, 110);
}

</style>
