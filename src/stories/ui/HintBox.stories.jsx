import React from 'react';
import HintBox from '../../components/ui/HintBox';

export default {
  title: 'UI/HintBox',
  component: HintBox,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: () => (
    <div className="w-[400px]">
      <HintBox>
        You can edit your preferences at any time in your profile.
      </HintBox>
    </div>
  ),
};

export const LongText = {
  args: {
    children: 'This is a longer hint text that might span multiple lines. It helps users understand more complex features or provides additional context about certain functionality.',
  },
};

export const WithCustomWidth = {
  render: () => (
    <div className="w-[300px]">
      <HintBox>
        You can edit your preferences at any time in your profile.
      </HintBox>
    </div>
  ),
}; 