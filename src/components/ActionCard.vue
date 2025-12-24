<template>
  <div class="action-card">
    <p class="description">{{ description }}</p>
    <div class="buttons">
      <slot name="buttons" />
    </div>
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
  font-family: $vela-sans;
  font-weight: $normal;
  color: $color-text-primary;

  .description {
    line-height: 140%;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &::v-deep(.action-row) {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
