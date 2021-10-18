import {css,html} from 'lit';
import {SimpleColors} from '@lrnwebcomponents/simple-colors';
const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;


export class SlimeIcon extends SimpleColors {
  static get tag() {
    return "slime-icon";
  }


  // CSS - specific to Lit
    static get styles() {
    return [...super.styles,
      css`
        :host{
        display: block;
        background-color var (--simple-colors-default-theme-accent-8,#0000000);
        }
      `
  ];
    
  }



  static get properties() {
    return {
      type: { type: String, reflect: true },
      myIcon: { type: String, attribute: "my-icon" },
      icon_value: {type: Map}
      
    };
  }


  
  constructor() {
    super();
    this.myIcon;
    this.type = "math";
    this.icon_value = new Map(); 
    this.icon_value.set("math",lightbulb);
    this.icon_value.set("science",beaker);
    this.icon_value.set("question",question);
}

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "type" && this[propName] === "science") {
        this.myIcon = "beaker";
      }
    });
  }




  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }





  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }





  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }



  // HTML - specific to Lit
  render() {
    return html` 
    <div id="slime-icon-container">
    <slot><img part="icon" src="${this.icon_value.get(this.type)}" alt="learning card icon"></slot>
    </div> `;


  }







  }



