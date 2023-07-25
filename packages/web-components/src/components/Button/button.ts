import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { HasSlotController } from '../../internal/slot.js';
import ShoelaceElement from '../../internal/shoelaceElement.js';
import LoadingPurely from '../../icons/LoadingPurely';
import { styles } from './style';

import '../Icon';

import type { ButtonShape, ButtonType } from './helpers';
import type { SizeType } from '../../types';

const prefixCls = 's-btn';

const sizeClassNameMap = {
  small: 'sm',
  middle: undefined,
  large: 'lg',
};

/**
 * @summary 按钮组件
 * @documentation https://sensoro.github.io/web-components/?path=/docs/button--docs
 * @status stable
 * @since 2.0
 *
 * @dependency s-icon
 */
@customElement('s-button')
export class Button extends ShoelaceElement {
  static override styles = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'icon');

  @query(`.${prefixCls}`) button: HTMLButtonElement | HTMLLinkElement;

  /** 按钮类型 */
  @property({ reflect: true })
  type: ButtonType = 'default';

  /** 按钮形状 */
  @property({ reflect: true })
  shape: ButtonShape = 'default';

  /** 按钮大小 */
  @property({ reflect: true })
  size: SizeType;

  /** 是否禁用 */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** 设置按钮载入状态 */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /** 幽灵属性，使按钮背景透明 */
  @property({ type: Boolean, reflect: true })
  ghost = false;

  /** 设置危险按钮 */
  @property({ type: Boolean, reflect: true })
  danger = false;

  /** 将按钮宽度调整为其父宽度的选项 */
  @property({ type: Boolean, reflect: true })
  block = false;

  @property() href = '';

  private isLink() {
    return !!this.href;
  }

  override render() {
    const isLink = this.isLink();
    const sizeCls = this.size ? sizeClassNameMap[this.size] || '' : '';

    return html`
      <button
        part="base"
        class=${classMap({
          [prefixCls]: true,
          [`${prefixCls}-icon-only`]: !this.hasSlotController.test('[default]') && this.hasSlotController.test('icon'),
          [`${prefixCls}-${this.shape}`]: this.shape !== 'default' && this.shape,
          [`${prefixCls}-${this.type}`]: this.type,
          [`${prefixCls}-${sizeCls}`]: !!sizeCls,
          [`${prefixCls}-block`]: this.block,
          [`${prefixCls}-loading`]: this.loading,
          [`${prefixCls}-dangerous`]: this.danger,
        })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${this.disabled ? '-1' : '0'}
      >
        ${this.loading ? html`<s-icon spin .icon=${LoadingPurely}></s-icon>` : ''}
        <slot name="icon" part="icon" class="${prefixCls}-icon"></slot>
        <slot part="label"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    's-button': Button;
  }
}

export default Button;
