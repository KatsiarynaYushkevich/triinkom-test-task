<template>
  <div class="action-card">
    <p class="description">{{ description }}</p>
    <slot name="buttons"></slot>
  </div>
</template>

<script setup lang="ts">
interface ActionCardProps {
  description: string;
}

const { description } = defineProps<ActionCardProps>();
</script>

<style scoped lang="scss">
.action-card {
  background-color: $card-bg;
  border-radius: 10px;
  padding: 40px;
  width: 330px;
  min-height: 356px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .description {
    font-size: 15px;
    font-family: $vela-sans;
    font-weight: $normal;
    color: $color-text-primary;
    line-height: 140%;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
