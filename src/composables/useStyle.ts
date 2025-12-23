import { computed, type CSSProperties } from 'vue';

export function useStyle(styles: CSSProperties) {
  return computed(() => styles);
}
