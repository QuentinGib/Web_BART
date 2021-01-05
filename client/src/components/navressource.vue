<template>
    <nav class="colorR">
        <ul>
            <li><router-link :to="{ name: 'Home' }"><i class="fas fa-home"></i></router-link></li>
            <li><router-link :to="{ name: 'HowKey' }">Comment valider un contract ?</router-link></li>
            <li><router-link :to="{ name: 'Activité' }">Rendre son rapport d'Activité</router-link></li>
            <li><router-link :to="{ name: 'Validate' }">Valider son contract</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
  name: 'navclient'
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
