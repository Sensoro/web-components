import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { clamp } from '../../internal/math';
import { drag } from '../../internal/drag';
import { watch } from '../../internal/watch';
import { ShoelaceElement } from '../../internal/shoelaceElement';
import { styles } from './style';

const prefixCls = 's-image-comparer'

/**
 * @summary 图像比较器
 * @documentation https://shoelace.style/components/button
 * @status stable
 * @since 2.0
 *
 * @event s-change - Emitted when the position changes.
 */
@customElement('s-image-comparer')
export class ImageComparer extends ShoelaceElement {
  static override styles = styles;

  @query(`.${prefixCls}`) base: HTMLElement;
  @query(`.${prefixCls}-handle`) handle: HTMLElement;

  @property({ type: Number, reflect: true })
  position = 50;

  private handleDrag(event: PointerEvent) {
    const { width } = this.base.getBoundingClientRect();

    event.preventDefault();

    drag(this.base, {
      onMove: x => {
        this.position = parseFloat(clamp((x / width) * 100, 0, 100).toFixed(2));
      },
      initialEvent: event
    })
  }

  private handleKeyDown(event: KeyboardEvent) {
    console.log(event);
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      const incr = event.shiftKey ? 10 : 1;
      let newPosition = this.position;

      event.preventDefault();

      if (event.key === 'ArrowLeft') {
        newPosition -= incr;
      }
      if (event.key === 'ArrowRight') {
        newPosition += incr;
      }
      if (event.key === 'Home') {
        newPosition = 0;
      }
      if (event.key === 'End') {
        newPosition = 100;
      }
      newPosition = clamp(newPosition, 0, 100);

      this.position = newPosition;
    }
  }

  @watch('position', { waitUntilFirstUpdate: true })
  handlePositionChange() {
    this.emit('s-change');
  }

  override render() {
    return html`
      <div
        part="base"
        class=${classMap({
          [prefixCls]: true,
        })}
        @keydown=${this.handleKeyDown}
      >
        <div class="${prefixCls}-image">
          <slot name="before" part="before" class="${prefixCls}-before"></slot>

          <slot
            name="after"
            part="after"
            class="${prefixCls}-after"
            style=${styleMap({
              clipPath: `inset(0 ${100 - this.position}% 0 0)`
            })}
          ></slot>
        </div>

        <div
          part="divider"
          class="${prefixCls}-divider"
          style=${styleMap({
            left: `${this.position}%`
          })}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <slot
            name="handle"
            part="handle"
            class="${prefixCls}-handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <span>3</span>
          </slot>
        </div>
      </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    's-image-comparer': ImageComparer;
  }
}

export default ImageComparer;
