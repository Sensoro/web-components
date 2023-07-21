import { html } from 'lit';
import { Button } from '../index';
import '../index';

import type { Meta, StoryObj } from '@storybook/web-components';

new Button();

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta: Meta = {
  title: 'Button',
  render: (args) => {
    return html`
      <s-button type=${args.type} size=${args.size} ?block=${args.block} ?disabled=${args.disabled}>
        主要按钮
      </s-button>
    `;
  },
  tags: ['docsPage'],
  argTypes: {
    type: {
      options: ['default', 'primary'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['small', 'middle', 'large'],
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    block: {
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

export const Size: Story = {
  args: {
    size: 'small',
  },
};

export const Block: Story = {
  args: {
    type: 'primary',
  },
};
