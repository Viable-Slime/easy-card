import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';
import '../src/slime-body.js';

describe('slime-body', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<slime-body><h1>Test</h1></slime-body>`);
  });


  //slime body test 1
  it('renders slot content', () => {
    //console.log(element.shadowRoot.childNodes[2].childNodes[1].assignedNodes()[0]);
    const content = element.shadowRoot.childNodes[2].childNodes[1].assignedNodes()[0];
    expect(content).to.exist;
    expect(content.textContent).to.equal('Test');
  });

  
  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
