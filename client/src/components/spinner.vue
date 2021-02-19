<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue'
export default {
  name: 'Spinner',
  components: {
    loader: RingLoader
  }
}
</script>

<template>
<div class="spin">
    <div>
    <loader :loading="loading" :color="color" :size="size"></loader>
    <p>Chargement</p>
    </div>
</div>
</template>

<style>
.spin {
    display: flex;
    justify-content: center;
    text-align: center;
}
</style>
