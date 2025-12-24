import { defineStore } from 'pinia';
import { type StepStatusKey } from '@constants/stepStatuses';
import { stepsData } from '@data/steps';

interface CardActions {
  text?: string;
  label: string;
  name: string;
}
export interface Step {
  id: number;
  title: string;
  icon: string;
  description: string;
  status: string;
  actions: CardActions[];
}

export interface StepsStoreProps {
  steps: Step[] | undefined;
  isLoading: boolean;
  error: string | null;
}

export const useStepsStore = defineStore('stepsStore', {
  state: (): StepsStoreProps => ({
    steps: [],
    isLoading: false,
    error: '',
  }),
  actions: {
    setSteps(steps: Step[]) {
      this.steps = steps;
    },
    changeStepStatus(stepId: number, status: StepStatusKey) {
      const step = this.steps?.find((step) => step.id === stepId);
      if (step) step.status = status;
    },

    async fetchSteps() {
      this.isLoading = true;
      this.error = null;

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        this.steps = stepsData;
      } catch {
        this.error = 'An error occured during steps fetching';
      } finally {
        this.isLoading = false;
      }
    },
  },
});
