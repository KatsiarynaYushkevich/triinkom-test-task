import type { StepIconKey } from '@constants/stepIcons';
import { defineStore } from 'pinia';

export interface Step {
  id: number;
  title: string;
  icon: StepIconKey;
  description: string;
  status: string;
}

export interface StepsStoreProps {
  steps: Step[] | undefined;
}
export const useStepsStore = defineStore('stepsStore', {
  state: (): StepsStoreProps => ({
    steps: [
      {
        id: 1,
        title: 'Пройдите идентификацию',
        icon: 'identification',
        description:
          'Участники сервиса проходят обязательную идентификацию с использованием МСИ (Межбанковской системы идентификации)',
        status: 'current',
      },
      {
        id: 2,
        title: 'Заполнить анкету',
        icon: 'register',
        description:
          'Для заемщика обязательны к заполнению общие, а также дополнительные сведения для формирования рейтинга',
        status: 'unavailable',
      },
      {
        id: 3,
        title: 'Подпишите согласия',
        icon: 'agreement',
        description:
          'Заемщики подписывают согласия на получение данных из кредитного регистра и ФСЗН для формирования рейтинга',
        status: 'unavailable',
      },
      {
        id: 4,
        title: 'Привязать карту',
        icon: 'card',
        description:
          'Для возможности полноценного использования функциональность сервиса необходимо привязать карту',
        status: 'unavailable',
      },
    ],
  }),
});
