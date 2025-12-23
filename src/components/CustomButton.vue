<template>
  <button
    :class="['base-button', typeClass]"
    :style="buttonStyle"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <template v-if="loading">
      <span class="spinner"></span>
    </template>
    <template v-else>
      <slot>{{ label }}</slot>
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStyle } from '@composables/useStyle';

interface CustomButtonProps {
  label?: string;
  type?: 'basic' | 'icon';
  width?: string;
  height?: string;
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<CustomButtonProps>(), {
  label: 'Button',
  type: 'basic',
  width: '250px',
  height: '45px',
  disabled: false,
  loading: false,
});

const typeClass = computed(() => (props.type === 'icon' ? 'btn-icon' : 'btn-basic'));

const buttonStyle = useStyle({
  width: props.width,
  height: props.height,
});
</script>

<style scoped lang="scss">
.base-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background-color 0.2s;
  text-transform: uppercase;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.btn-basic {
    background-color: $color-button-basic;
    color: $color-text-primary;
    font-size: 15px;
    font-weight: $semi-bold;
    font-family: $inter;

    &:hover:not(:disabled) {
      background-color: #0069d9;
    }
  }

  &.btn-icon {
    background-color: transparent;
    min-width: 48px;
    min-height: 48px;
    &:hover:not(:disabled) {
      background-color: #e0e0e0;
    }
  }
}
</style>
