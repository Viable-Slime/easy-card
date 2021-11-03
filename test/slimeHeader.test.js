import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';
import '../src/slime-header.js';

describe('slime-header', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<slime-header accent-color="red" heading="Header" sub-heading="SubHeader"></slime-header>`);
  });

  //header test 1,
  //test if heading text is correct
  it('Check heading and sub-heading', () => {
    //console.log(element.shadowRoot.childNodes[2].childNodes[3].childNodes[1].textContent);
    const subHeading = element.shadowRoot.childNodes[2].childNodes[3].childNodes[1].textContent;
    const heading = element.shadowRoot.childNodes[2].childNodes[3].childNodes[3].textContent;
    expect(subHeading).to.exist;
    expect(heading).to.exist;
    expect(heading).to.equal('Header');
    expect(subHeading).to.equal('SubHeader');
  });

  
  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
