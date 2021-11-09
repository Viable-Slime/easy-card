import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';
import '../src/slime-icon.js';

describe('slime-icon', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<slime-icon type="math"></slime-icon>`);
  });


  //icon test 1,
  //test alt text and icon
  it('alt text and icon', () => {
    //console.log(element.shadowRoot.childNodes[2].childNodes[1]);
    const imgTag = element.shadowRoot.childNodes[2].childNodes[1];
    expect(imgTag).to.exist;
    expect(imgTag.getAttribute("src")).to.contains('lightbulb.svg');
    expect(imgTag.getAttribute("alt")).to.equal("learning card math icon");
  });

  
  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
