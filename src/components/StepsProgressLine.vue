<script setup lang="ts">
import { useStepsStore } from '@store/steps';
import SuccessCheck from '@assets/icons/status/success.svg';
import { STEP_STATUSES } from '@constants/stepStatuses';

const stepsStore = useStepsStore();
</script>

<template>
  <ul class="steps-progress">
    <li v-for="(step, index) in stepsStore.steps" :key="step.id" :class="step.status">
      <template v-if="step.status === STEP_STATUSES.completed">
        <SuccessCheck />
      </template>
      <template v-else>
        <span>{{ index + 1 }}</span>
      </template>
      <span class="step-line" :class="step.status" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.steps-progress {
  display: flex;
  flex-direction: column;
  position: relative;
  top: -15px;
  z-index: 2;
  gap: 82.5px;

  li {
    position: relative;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $vela-sans;
    font-weight: $extra-bold;
    font-size: 18px;
    border: 5px solid;

    @include apply-status-styles(
      $color-accent,
      $color-border-current,
      $color-border-unavailable,
      border-color
    );
    @include apply-status-styles(
      $color-border-completed,
      $color-border-current,
      $color-text-unavailable,
      color
    );

    &.completed {
      @include apply-status-styles($color-accent, null, null, background-color);

      img {
        max-width: 17px;
        max-height: 20px;
      }
    }

    .step-line {
      position: absolute;
      transform: translate(0, 100%);
      width: 6px;
      height: 60px;
      border-radius: 6px;

      @include step-line-background(completed, $color-accent);
      @include step-line-background(current, $color-border-current);
      @include step-line-background(unavailable, $color-border-unavailable);
    }

    &:first-child .step-line {
      display: none;
    }
  }
}

@media screen and (min-width: 500px) {
  .steps-progress {
    gap: 88px;

    li {
      width: 47px;
      height: 47px;
      font-size: 25px;

      .step-line {
        transform: translate(0, -115%);
      }
    }
  }
}

@media screen and (min-width: 1510px) {
  .steps-progress {
    flex-direction: row;
    width: 1158px;
    justify-content: space-between;

    li {
      .step-line {
        transform: rotate(-90deg) translate(0, -64%);
        width: 6px;
        height: 289px;
        background-position: center;

        @include step-line-background(
          current,
          $color-border-current,
          $ellipse-height: 6px,
          $ellipse-width: 15px,
          $background-size: 47px
        );
        @include step-line-background(completed, $color-accent);
        @include step-line-background(
          unavailable,
          $color-border-unavailable,
          $ellipse-height: 6px,
          $ellipse-width: 15px,
          $background-size: 47px
        );
      }
    }
  }
}
</style>
