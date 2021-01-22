<template>
    <footer class="footer">
        <router-link class="aide" :to="{ name: 'HowKey' }">Help : comment valider un contract ?
            </router-link
        >
    </footer>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style scoped>
/*region aide*/
.footer {
    display: flex;
    justify-content: center;
}

.aide {
    display: flex;
    justify-content: center;
    font-size: 120%;
    font-weight: 300;
    color: whitesmoke;
    background-color: #00638a;
    margin: 2em;
    text-decoration: none;
    width: 21rem;

    text-align: center;
    padding: 0.8rem;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 30px;
}
/*region aide*/
</style>
