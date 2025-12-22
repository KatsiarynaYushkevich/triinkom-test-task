import registerIcon from '@assets/icons/steps/register.svg';
import agreementIcon from '@assets/icons/steps/agreement.svg';
import identificationIcon from '@assets/icons/steps/identification.svg';
import cardIcon from '@assets/icons/steps/card.svg';

export const STEP_ICONS = {
  register: registerIcon,
  agreement: agreementIcon,
  identification: identificationIcon,
  card: cardIcon,
} as const;

export type StepIconKey = keyof typeof STEP_ICONS;
