<script setup lang="ts">
import WarningIcon from '@assets/icons/status/warning.svg';
import ArrowIcon from '@assets/icons/ui/arrow.svg';
import StepCard from '@components/StepCard.vue';
import CustomButton from '@components/CustomButton.vue';
import { STEP_STATUSES } from '@constants/stepStatuses';

interface StepListItem {
  id: number;
  title: string;
  icon?: string;
  status: string;
}

interface StepListProps {
  steps: StepListItem[];
}

const props = defineProps<StepListProps>();

const { steps } = props;
</script>

<template>
  <ul class="steps-cards">
    <li v-for="step in steps" :key="step.id">
      <StepCard :title="step.title" :icon="step.icon" :status="step.status">
        <template #warning-icon>
          <WarningIcon v-if="step.status === STEP_STATUSES.current" class="warning-icon" />
        </template>
        <template #arrow-btn>
          <CustomButton type="icon" :class="step.status">
            <ArrowIcon />
          </CustomButton>
        </template>
      </StepCard>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.steps-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

@media screen and (min-width: 550px) {
  .steps-cards {
    gap: 40px;
  }
}

@media screen and (min-width: 1510px) {
  .steps-cards {
    flex-direction: row;
    gap: 40px;
  }
}
</style>
