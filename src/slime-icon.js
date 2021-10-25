import {css,html, LitElement} from 'lit';
const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;


export class SlimeIcon extends LitElement {
  static get tag() {
    return "slime-icon";
  }


  // CSS - specific to Lit
    static get styles() {
    return css`
        :host{
        display: block;
        height: var(--icon-height,inherit);
        width: var(--icon-width,inherit);
        }

        

        #icon{

          width: inherit;
          height: inherit;

        }
      `;
  }



  static get properties() {
    
    return {
      type: { type: String, reflect: true },
      icon_value: {type: Map},
      iconHeight: {type: String, attribute:"icon-height", reflect: true},
      iconWidth: {type: String, attribute:"icon-width", reflect: true},
    };
  }



  constructor() {
    super();
    this.type = "math";
    this.iconHeight = "inherit";
    this.iconWidth = "inherit";
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
      this.style.setProperty("--icon-height",this.iconHeight);
      this.style.setProperty("--icon-width",this.iconWidth);
    });
  }


  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
      this.style.setProperty("--icon-height",this.iconHeight);
      this.style.setProperty("--icon-width",this.iconWidth);
    }
  }


  // HTML - specific to Lit
  render() {
    return html` 
    <div id="slime-icon-container">
    <img part="icon" id="icon" src="${this.icon_value.get(this.type)}"  alt="learning card ${this.type} icon">
    </div> `;


  }







  }



