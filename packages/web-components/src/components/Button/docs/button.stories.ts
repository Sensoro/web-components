import { html } from 'lit';
import { Button } from '../';
import { ButtonTypes, ButtonShapes } from '../helpers';
import '../';
import '../../Icon';
import AccountBookFilled from '../../../icons/AccountBookFilled';
import SearchOutlined from '../../../icons/SearchOutlined';

import type { ButtonType, ButtonSize, ButtonShape } from '../';
import type { Meta, StoryObj } from '@storybook/web-components';

new Button();

interface IArgs {
  type: ButtonType;
  shape: ButtonShape;
  size: ButtonSize;
  block: boolean;
  loading: boolean;
  disabled: boolean;
}

type Story = StoryObj<IArgs>;

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta: Meta<IArgs> = {
  title: 'Button',
  component: 's-button',
  tags: ['docsPage'],
  argTypes: {
    type: {
      description: '设置按钮类型',
      options: ButtonTypes,
      table: {
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
      },
    },
    shape: {
      description: '设置按钮形状',
      options: ButtonShapes,
      table: {
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
      },
    },
    size: {
      description: '设置按钮大小',
      options: ['small', 'middle', 'large'],
      table: {
        defaultValue: {
          summary: 'middle',
        },
      },
      control: {
        type: 'select',
      },
    },
    disabled: {
      description: '设置按钮失效状态',
      control: {
        type: 'boolean',
      },
    },
    loading: {
      description: '设置按钮载入状态',
      control: {
        type: 'boolean',
      },
    },
    block: {
      description: '将按钮宽度调整为其父宽度的选项',
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。
        `,
      },
    },
  },
  args: {
    type: 'default',
    size: 'middle',
  },
};

export default meta;

export const ButtonDefault: Story = {
  name: 'default',
  render: (args) => html`
    <s-button type=${args.type} size=${args.size} ?loading=${args.loading} ?disabled=${args.disabled}>
      默认按钮
    </s-button>
  `,
  args: {},
};

export const Type: Story = {
  name: 'type',
  render: (args) => html`
    <s-button type="primary" size=${args.size} ?disabled=${args.disabled}>主要按钮</s-button>
    <s-button size=${args.size} ?disabled=${args.disabled}>默认按钮</s-button>
    <s-button type="dashed" size=${args.size} ?disabled=${args.disabled}>虚框按钮</s-button>
  `,
  args: {
    type: 'primary',
  },
};

export const Icon: Story = {
  name: 'icon',
  render: (args) => html`
    <s-button type=${args.type} ?loading=${args.loading} size=${args.size} ?disabled=${args.disabled}>
      <s-icon slot="icon" .icon=${AccountBookFilled}></s-icon>
      主要按钮
    </s-button>
    <s-button type=${args.type} ?loading=${args.loading} size=${args.size} ?disabled=${args.disabled}>
      <s-icon slot="icon" .icon=${SearchOutlined}></s-icon>
    </s-button>
  `,
  args: {},
};

export const Size: Story = {
  name: 'size',
  render: (args) => html`
    <s-button size="large" ?disabled=${args.disabled} type=${args.type}>主要按钮</s-button>
    <s-button size="middle" ?disabled=${args.disabled} type=${args.type}>默认按钮</s-button>
    <s-button size="small" ?disabled=${args.disabled} type=${args.type}>虚框按钮</s-button>
  `,
  args: {
    size: 'small',
  },
};

export const Block: Story = {
  name: 'block',
  render: (args) => html` <s-button type=${args.type} block>主要按钮</s-button> `,
  args: {
    type: 'primary',
  },
};

export const Circle: Story = {
  name: 'circle',
  render: (args) => html`
    <s-button type=${args.type} size=${args.size} ?disabled=${args.disabled} shape="circle">A</s-button>
    <s-button type=${args.type} size=${args.size} ?disabled=${args.disabled} shape="circle">
      <s-icon slot="icon" .icon=${SearchOutlined}></s-icon>
    </s-button>
  `,
  args: {
    type: 'primary',
  },
};
