<script setup lang="ts">
import { useStepsStore } from '@store/steps';
import StepCard from '@components/StepCard.vue';

const stepsStore = useStepsStore();
</script>

<template>
  <div class="steps-list">
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
  gap: 15px;
  justify-content: space-between;

  .steps-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
}

@media screen and (min-width: 1510px) {
  .steps-list {
    .steps-cards {
      flex-direction: row;
      gap: 40px;
    }
  }
}
</style>
