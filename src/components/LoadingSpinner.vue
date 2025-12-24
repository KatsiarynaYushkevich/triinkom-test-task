<template>
  <div
    v-if="loading"
    class="spinner"
    :style="{
      '--spinner-size': size + 'px',
      '--spinner-color': color,
      '--spinner-thickness': thickness + 'px',
      '--spinner-speed': speed + 's',
    }"
  ></div>
</template>

<script setup lang="ts">
interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  thickness?: number;
  loading?: boolean;
  speed?: number;
}

const {
  size = 75,
  color = '#00d9c5',
  thickness = 15,
  loading = true,
  speed = 1.75,
} = defineProps<LoadingSpinnerProps>();
</script>

<style lang="scss" scoped>
.spinner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  --spinner-size: 75px;
  --spinner-color: $color-accent;
  --spinner-thickness: 15px;
  --spinner-speed: 1.75s;

  &::after {
    content: '';
    width: var(--spinner-size);
    height: var(--spinner-size);
    border-radius: 50%;
    border: var(--spinner-thickness) solid $spiner-border-color;
    border-top-color: var(--spinner-color);
    animation: spin var(--spinner-speed) linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
