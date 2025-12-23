<script setup lang="ts">
import { STEP_ICONS, type StepIconKey } from '@constants/stepIcons';
import { STEP_STATUSES } from '@constants/stepStatuses';
import ArrowIcon from '@assets/icons/ui/arrow.svg';
import WarningIcon from '@assets/icons/status/warning.svg';

interface StepCardProps {
  title: string;
  icon?: StepIconKey;
  status: string;
}

const { title, icon, status } = defineProps<StepCardProps>();
</script>

<template>
  <div class="step-card" :class="status">
    <WarningIcon v-if="status === STEP_STATUSES.current" class="warning-icon" />
    <div class="title-block">
      <div class="card-icon" :class="status">
        <component v-if="icon" :is="STEP_ICONS[icon]" class="icon" />
      </div>
      <p>{{ title }}</p>
    </div>
    <button class="arrow-btn" :class="status">
      <ArrowIcon />
    </button>
    <a href="#" class="card-link"> <span>Подробнее</span></a>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.step-card {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 265px;
  height: 80px;
  padding: 15px;
  border: 3px solid;
  border-radius: 15px;
  background-color: $card-bg;

  @include apply-status-styles(
    $color-border-completed,
    $color-border-current,
    $color-border-unavailable
  );

  @include apply-status-styles(
    $color-text-primary,
    $color-text-primary,
    $color-text-unavailable,
    color
  );

  .warning-icon {
    position: absolute;
    top: 8px;
    right: 7px;

    @media screen and (max-width: 1509px) {
      display: none;
    }
  }

  .title-block {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 222px;

    p {
      font-family: $vela-sans;
      font-weight: $bold;
      font-size: 18px;
    }
  }

  .card-icon,
  .arrow-btn {
    max-width: 35px;
    max-height: 35px;

    @include apply-status-styles(
      $color-icon-completed,
      $color-border-current,
      $color-icon-unavailable,
      color
    );
  }

  .card-link {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 43%;
    left: -8px;
    width: 13px;
    height: 13px;
    background-color: $card-bg;
    transform: rotate(45deg);
    border: 3px solid;
    border-right: none;
    border-top: none;
  }
}

@media screen and (min-width: 500px) {
  .step-card {
    width: 333px;
    height: 94px;
    padding: 20px 30px;
  }

  .card-icon {
    max-width: 40px;
    max-height: 40px;
  }
}

@media screen and (min-width: 1510px) {
  .step-card {
    width: 330px;
    height: 127px;
    padding: 20px 30px;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    .card-link {
      display: block;
    }

    .title-block {
      gap: 15px;
      max-width: 100%;

      .card-icon {
        max-width: 40px;
        max-height: 40px;
      }

      p {
        font-size: 20px;
      }
    }

    a span {
      font-family: $inter;
      font-weight: $semi-bold;
      font-size: 15px;
      text-transform: uppercase;
      color: $color-text-secondary;
    }

    &::before {
      width: 20px;
      height: 20px;
      left: 47%;
      bottom: -12px;
      top: auto;
      transform: rotate(-45deg);
    }

    .arrow-btn {
      display: none;
    }
  }
}
</style>
