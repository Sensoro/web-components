import { html } from 'lit';
import { Icon } from '../index';
import '../index';
import AccountBookFilled from '../../../icons/AccountBookFilled';
import AccountBookOutlined from '../../../icons/AccountBookOutlined';

import type { Meta, StoryObj } from '@storybook/web-components';

new Icon();

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta: Meta = {
  title: 'Icon',
  render: () => {
    return html`
      <span>
        <s-icon .icon=${AccountBookFilled}></s-icon>
        <s-icon .icon=${AccountBookOutlined}></s-icon>
      </span>
    `;
  },
  tags: ['docsPage'],
  argTypes: {
    color: {
      options: ['default', 'primary'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    type: 'primary',
  },
};

export const Color: StoryObj = {
  args: {},
};

export default meta;
