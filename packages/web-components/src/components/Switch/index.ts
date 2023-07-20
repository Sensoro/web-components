import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { live } from 'lit/directives/live.js';
import { ShoelaceElement } from '../../internal/shoelaceElement';
import { styles } from './style';

const prefixCls = 's-switch';

/**
 * @summary 开关
 * @documentation https://shoelace.style/components/switch
 * @status stable
 * @since 2.0
 */
@customElement('s-switch')
export class Switch extends ShoelaceElement {
  @query('input[type="checkbox"]') input: HTMLInputElement;

  static override styles = styles;

  /** 两种种样式类型 */
  @property({ reflect: true })
  type: 'circle' | 'round' = 'circle';

  /** Loading the switch. */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /** Disables the switch. */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Draws the switch in a checked state. */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** The switch's size. */
  @property({ reflect: true })
  size: 'small' | 'default' | 'large' = 'default';

  private handleClick() {
    this.checked = !this.checked;
  }

  render() {
    return html`
      <label
        part="base"
        class=${classMap({
          [prefixCls]: true,
          [`${prefixCls}-checked`]: this.checked,
        })}
      >
        <input
          role="switch"
          type="checkbox"
          class="${prefixCls}-input"
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          @click=${this.handleClick}
        />
        <div class="${prefixCls}-handle"></div>
        <span class="${prefixCls}-inner">
          <span class="${prefixCls}-inner-checked"></span>
          <span class="${prefixCls}-inner-unchecked"></span>
        </span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    's-switch': Switch;
  }
}

export default Switch;
