export const STEP_STATUSES = {
  completed: 'completed',
  current: 'current',
  unavailable: 'unavailable',
} as const;

export type StepStatusKey = keyof typeof STEP_STATUSES;
