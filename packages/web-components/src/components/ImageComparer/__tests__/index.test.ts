import '../index';
import { expect, fixture, html } from '@open-wc/testing';

import type ImageComparer from '../';

describe('<s-image-comparer>', () => {
  it('should render a basic before/after', async () => {
    const el = await fixture<ImageComparer>(html`
      <s-image-comparer>
        <div slot="before"></div>
        <div slot="after"></div>
      </s-image-comparer>
    `);

    // const afterPart = el.shadowRoot!.querySelector<HTMLElement>('[part~="after"]')!;

    expect(el.position).to.equal(50);
  })
})
