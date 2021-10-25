// dependencies / things imported
import {css,html, LitElement} from 'lit';


export class SlimeBody extends LitElement {
  static get tag() {
    return "slime-body";
  }


  // CSS - specific to Lit
    static get styles() {
    return css`
        :host{
          display: flex;
          border-color: black;
          border-style: solid;
          border-width: 1px;
          height: auto;
          min-height: 50px;
          width: inherit;
        }
      `;
  }



  static get properties() {
    return {
      type: { type: String, reflect: true },
    };
  }



  constructor() {
    super();
    this.type = "math";
/*
    var subContent = this.childNodes;
    console.log(subContent);
    for(var i = 0; i<subContent.length; i++){

      this.shadowRoot.appendChild(subContent[i]);

    }
*/


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



  // HTML - specific to Lit
  render() {
    return html` 
        <div class="body-content">
        <slot></slot>
        </div>

     `;


  }

  }



