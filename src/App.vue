<template>
  <div class="wrapper">
    <div class="steps-list">
      <StepsProgressLine :steps="stepsStore.steps || []" />
      <CardsList :steps="stepsStore.steps || []" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardsList from '@components/CardsList.vue';
import StepsProgressLine from '@components/StepsProgressLine.vue';
import { useStepsStore } from '@store/steps';

const stepsStore = useStepsStore();
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: $color-bg-main;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;

  .steps-list {
    min-width: 325px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }
}

@media screen and (min-width: 550px) {
  .wrapper {
    .steps-list {
      gap: 17px;
    }
  }
}
@media screen and (min-width: 1510px) {
  .wrapper {
    .steps-list {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>
