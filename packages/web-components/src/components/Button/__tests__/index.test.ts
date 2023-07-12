import { expect, fixture, html } from '@open-wc/testing';
import '../index';

import type Button from '../';

describe('<s-button>', () => {
  describe('accessibility tests', () => {
    it(`should be accessible when type is primary`, async () => {
      const el = await fixture<Button>(html`<s-button> Button Label </s-button>`);
      await expect(el).to.be.accessible();
    });
  });
})
