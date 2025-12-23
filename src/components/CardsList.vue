<script setup lang="ts">
import { useStepsStore } from '@store/steps';
import StepCard from '@components/StepCard.vue';
import StepsProgressLine from '@components/StepsProgressLine.vue';
import ActionCard from '@components/ActionCard.vue';
import CustomButton from './CustomButton.vue';
import { computed } from 'vue';
import { STEP_STATUSES } from '@constants/stepStatuses';

const stepsStore = useStepsStore();
const currentStep = computed(() =>
  stepsStore.steps.find((step) => step.status === STEP_STATUSES.current),
);
</script>

<template>
  <div class="steps-list">
    <ActionCard v-if="currentStep" :description="currentStep.description">
      <template #buttons>
        <CustomButton
          v-for="action in currentStep.actions"
          :key="action.name"
          type="basic"
          :label="action.label"
        />
        <CustomButton key="close" type="basic" label="Завершить" />
      </template>
    </ActionCard>
    <StepsProgressLine />
    <div class="steps-cards">
      <StepCard
        v-for="(step, index) in stepsStore.steps"
        :title="step.title"
        :icon="step.icon"
        :status="step.status"
        :key="index + 1"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.steps-list {
  min-width: 325px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  .steps-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
}

@media screen and (min-width: 550px) {
  .steps-list {
    gap: 17px;
    .steps-cards {
      gap: 40px;
    }
  }
}

@media screen and (min-width: 1510px) {
  .steps-list {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;

    .steps-cards {
      flex-direction: row;
      gap: 40px;
    }
  }
}
</style>
