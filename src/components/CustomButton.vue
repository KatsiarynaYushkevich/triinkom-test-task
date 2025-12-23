<template>
  <button
    :class="['base-button', typeClass]"
    :style="buttonStyle"
    :disabled="props.disabled || props.loading"
    @click="handleClick"
  >
    <slot name="icon"></slot>
    <slot>{{ props.label }}</slot>
    <slot name="loader" v-if="props.loading"> </slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStyle } from '@composables/useStyle';
import { BUTTON_TYPES } from '@constants/buttonTypes';

const BUTTON_CLASSES = {
  [BUTTON_TYPES.basic]: 'btn-basic',
  [BUTTON_TYPES.icon]: 'btn-icon',
} as const;

interface CustomButtonProps {
  label?: string;
  type?: keyof typeof BUTTON_TYPES;
  width?: string;
  height?: string;
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<CustomButtonProps>(), {
  label: 'Button',
  type: BUTTON_TYPES.basic,
  width: '250px',
  height: '45px',
  disabled: false,
  loading: false,
});

const typeClass = computed(() => BUTTON_CLASSES[props.type ?? BUTTON_TYPES.basic]);

const buttonStyle = useStyle({
  width: props.width,
  height: props.height,
});

const emit = defineEmits<{
  (e: 'handleClick', event: MouseEvent): void;
}>();

function handleClick(event: MouseEvent) {
  emit('handleClick', event);
}
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
      background-color: $color-basic-hover;
    }
  }

  &.btn-icon {
    background-color: transparent;
    min-width: 48px;
    min-height: 48px;

    &:hover:not(:disabled) {
      background-color: $color-basic-hover;
    }
  }
}
</style>
