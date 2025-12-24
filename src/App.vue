<template>
  <div class="wrapper">
    <div class="steps-container">
      <LoadingSpinner
        v-if="stepsStore.isLoading"
        :loading="stepsStore.isLoading"
        :size="85"
        :thickness="10"
      />
      <div class="steps-block" v-else>
        <StepsProgressLine :steps="stepsStore.steps || []" />
        <CardsList :steps="stepsStore.steps || []" />
      </div>
      <ActionCard v-if="currentStep" :description="currentStep.description">
        <template #buttons>
          <div v-for="action in currentStep.actions" :key="action.name" class="action-row">
            <span class="action-text">{{ action.text }}</span>
            <CustomButton type="basic" :label="action.label" />
          </div>
          <CustomButton
            type="basic"
            label="Завершить"
            @handleClick="() => completeStep(currentStep?.id!)"
          />
        </template>
      </ActionCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import ActionCard from '@components/ActionCard.vue';
import CardsList from '@components/CardsList.vue';
import CustomButton from '@components/CustomButton.vue';
import LoadingSpinner from '@components/LoadingSpinner.vue';
import StepsProgressLine from '@components/StepsProgressLine.vue';
import { STEP_STATUSES } from '@constants/stepStatuses';
import { useStepsStore } from '@store/steps';
import { computed } from 'vue';

const stepsStore = useStepsStore();
stepsStore.fetchSteps();

const currentStep = computed(() => {
  if (!stepsStore.steps) return undefined;
  return stepsStore.steps.find((step) => step.status === STEP_STATUSES.current);
});

const completeStep = (stepId: number) => {
  const step = stepsStore.steps?.find((step) => step.id === stepId);
  console.log(step);
  if (step && step.status === STEP_STATUSES.current) {
    stepsStore.changeStepStatus(step.id, STEP_STATUSES.completed);
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: $color-bg-main;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;

  .steps-container {
    margin-top: 20px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 30px;

    .steps-block {
      min-width: 325px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      perspective: 500px;
    }
  }
}

@media screen and (min-width: 550px) {
  .wrapper {
    .steps-block {
      gap: 17px;
    }
  }
}

@media screen and (min-width: 1000px) {
  .wrapper {
    .steps-container {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
  }
}

@media screen and (min-width: 1510px) {
  .wrapper {
    .steps-container {
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }
  }

  .steps-block {
    flex-direction: column-reverse;
  }
}
</style>
