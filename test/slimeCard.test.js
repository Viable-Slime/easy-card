import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';
import '../src/slime-card.js';

describe('slime-card', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<slime-card type="science" accent-color="blue" shadow heading="Science" sub-heading="Unit1"></slime-card>`);
  });


  //slime-card test 1
  it('icon is beaker', () => {
    //test icon src
    //console.log(element.shadowRoot.childNodes[2].childNodes[1].childNodes[1].shadowRoot.childNodes[2].childNodes[1].shadowRoot.childNodes[2].childNodes[1]);
    const img = element.shadowRoot.childNodes[2].childNodes[1].childNodes[1].shadowRoot.childNodes[2].childNodes[1].shadowRoot.childNodes[2].childNodes[1]
    expect(img).to.exist;
    expect(img.getAttribute("src")).to.equal('http://localhost:8000/assets/beaker.svg');
  });

  
  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });


});
