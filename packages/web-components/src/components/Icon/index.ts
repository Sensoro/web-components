import { LitElement } from 'lit';
import { html } from 'lit/static-html.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './style';
import { renderIconDefinitionToSVGElement } from './utils/helpers';

import type { IconDefinition } from '../../types';

const prefixCls = 's-icon';

@customElement('s-icon')
export class Icon extends LitElement {
  static override styles = styles;

  /** 按钮类型 */
  @property({ type: Boolean, reflect: true })
  spin = false;

  @property({ type: Object })
  icon: IconDefinition | null = null;

  override connectedCallback() {
    super.connectedCallback();
  }

  override render() {
    return html`
      <span
        role="img"
        class=${classMap({
          [prefixCls]: true,
          [`${prefixCls}-spin`]: this.spin,
        })}
      >
        ${this.icon
          ? unsafeSVG(
              renderIconDefinitionToSVGElement(this.icon, {
                extraSVGAttrs: {
                  width: '1em',
                  height: '1em',
                  fill: 'currentcolor',
                },
              }),
            )
          : ''}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    's-icon': Icon;
  }
}

export default Icon;
