<template>
    <footer class="footer">
        <div class="divfooter">
        <h1>SMART CONTRACT</h1>
        <p>2020</p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style scoped>
.footer {
    display: flex;
    background-color: #202020;
    color: grey;
    justify-content: center;
    font-family: 'Bad Script', cursive;
}
.divfooter {
    text-align: center;
}
.divfooter >h1 {
    margin-bottom: 5px;
}
.divfooter >p{
    margin-top: 1px;
    font-size: 300%;
}

</style>
