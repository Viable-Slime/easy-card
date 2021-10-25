// dependencies / things imported
import {css,html, LitElement} from 'lit';
import { SlimeHeader } from './slime-header';
import { SlimeBody } from './slime-body';



export class SlimeCard extends LitElement {
  static get tag() {
    return "slime-card";
  }


  // CSS - specific to Lit
    static get styles() {
    return css`
        :host{
            display:block;
            height: inherit;
            width: inherit;
        
            }

        :host([toggle]) .slime-card-bottom{
            transition: max-height 0.75s linear 0s;
            max-height: var(--slime-card-bottom, 0);
            height: auto;
            overflow: hidden;
        }
        
      `;
  }



  static get properties() {
    return {...super.properties,
      type: { type: String, reflect: true },
      iconScale: {type: String, attribute: "icon-scale"},
      height: {type: String, attribute:"height", reflect: true},
      width: {type: String, attribute:"width", reflect: true},
      accentColor: {type: String, attribute:"accent-color",reflect: true},
      heading: {type: String, attribute:"heading", reflect: true},
      subHeading: {type: String, attribute:"sub-heading", reflect: true},
      toggle: {type: Boolean},
      expanded: {type: Boolean}
     
    };
  }



  constructor() {
    super();
    this.type = "math";
    this.height = "inherit";
    this.width = "inherit";
    this.heading = "Heading";
    this.subHeading = "sub heading";
    this.accentColor = "grey";
    this.toggle = false;
    this.expanded = false;
    
}



    expand(){
        console.log("expand");
        this.removeEventListener('click',this.expand);
        this.addEventListener('click',this.contract);
        this.expanded = true;
        this.style.setProperty('--slime-card-bottom',"1000px");
    }

    contract(){
        console.log("contract");
        this.removeEventListener('click',this.contract);
        this.addEventListener('click',this.expand);
        this.expanded = false;
        this.style.setProperty('--slime-card-bottom',"0px");
        
    }



  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "type" && this[propName] === "science") {
        this.myIcon = "beaker";
      }

      
        if(this.toggle==true && this.expanded==false){
            this.addEventListener('click',this.expand);
        }

        if(this.toggle==true && this.expanded==true){
            this.addEventListener('click',this.contract);
        }
            
        

    });
  }


  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {

        /*
      super.firstUpdated(changedProperties);
      

      if(this.toggle && this.expanded==false){
        this.addEventListener('click',this.expand());
    }

    if(this.toggle && this.expanded==true){
        this.addEventListener('click',this.contract());
    }

    */
 
    }
    
  }



  // HTML - specific to Lit
  render() {
    return html` 
        <div class="slime-card-container">
            <div class="slime-card-top"><slime-header toggle="${this.toggle}" type="${this.type}" heading="${this.heading}" sub-heading="${this.subHeading}" accent-color="${this.accentColor}"></slime-header></div>
            <div class="slime-card-bottom"><slime-body style="border-top:none;"><slot></slot></slime-body></div>
        </div>
     `;
  }







  }



