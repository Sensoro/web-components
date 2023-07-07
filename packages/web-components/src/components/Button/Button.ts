import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './style';

const prefixCls = 's-button'

/**
 * @summary 按钮组件
 * @documentation https://shoelace.style/components/button
 * @status stable
 * @since 2.0
 */
@customElement('s-button')
export class Button extends LitElement {
  static override styles = styles;

  /** 按钮类型 */
  @property({ reflect: true })
  type: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger' = 'primary';

  /** 按钮主题 */
  @property({ reflect: true })
  theme: 'solid' | 'borderless' | 'light' = 'light';

  /** 按钮形状 */
  @property({ reflect: true })
  shape: 'circle' | 'round' = 'round';

  /** 按钮大小 */
  @property({ reflect: true })
  size: 'small' | 'default' | 'large' = 'default';

  /** 是否禁用 */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** 设置按钮载入状态 */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /** 将按钮宽度调整为其父宽度的选项 */
  @property({ type: Boolean, reflect: true })
  block = false;

  override render() {
    return html`
      <button
        class=${classMap({
          [prefixCls]: true,
          [`${prefixCls}-${this.type}`]: true,
          [`${prefixCls}-${this.theme}`]: true,
          [`${prefixCls}-${this.size}`]: this.size !== 'default',
          [`${prefixCls}-block`]: this.block,
          [`${prefixCls}-loading`]: this.loading,
          [`${prefixCls}-disabled`]: this.disabled,
        })}
      >
        <slot part="label"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'l-button': Button;
  }
}

export default Button;
