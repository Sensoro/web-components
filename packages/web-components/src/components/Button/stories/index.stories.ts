import { html } from 'lit';
import '../';

import type { Meta, StoryObj } from '@storybook/web-components';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta: Meta = {
  title: 'Button',
  render: (args) => {
    return html` <s-button type=${args.type} ?disabled=${args.disabled}> 主要按钮 </s-button> `;
  },
  tags: ['docsPage'],
  argTypes: {
    type: {
      options: ['default', 'primary'],
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    type: 'primary',
  },
};

export default meta;

type Story = StoryObj;

export const Type: Story = {
  args: {
    type: 'primary',
  },
};
