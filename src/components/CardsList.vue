<script setup lang="ts">
import { useStepsStore } from '@store/steps';
import StepCard from '@components/StepCard.vue';
import StepsProgressLine from '@components/StepsProgressLine.vue';

const stepsStore = useStepsStore();
</script>

<template>
  <div class="steps-list">
    <StepsProgressLine :steps="stepsStore.steps || []" />
    <div class="steps-cards">
      <StepCard
        v-for="step in stepsStore.steps"
        :title="step.title"
        :icon="step.icon"
        :status="step.status"
        :key="step.id"
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
