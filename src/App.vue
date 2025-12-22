<template>
  <div class="wrapper">
    <CardsList />
  </div>
</template>

<script setup lang="ts">
import CardsList from '@components/CardsList.vue';
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: $color-bg-main;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
