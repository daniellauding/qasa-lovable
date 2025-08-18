import QualityIndicator from './QualityIndicator';

export default {
  title: 'Prototypes/Tenants/BET Increase Quality/QualityIndicator',
  component: QualityIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Poor = {
  args: {
    score: 20,
  },
};

export const Fair = {
  args: {
    score: 50,
  },
};

export const Good = {
  args: {
    score: 75,
  },
};

export const Excellent = {
  args: {
    score: 100,
  },
}; 