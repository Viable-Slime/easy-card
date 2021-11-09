import {css,html, LitElement} from 'lit';
import {SlimeHeader} from './slime-header';
import {SlimeBody} from './slime-body';

export class SlimeCard extends LitElement {
  static get tag() {
    return "slime-card";
  }

    static get styles() {
    return css`
        :host{
            display:block;
            height: inherit;
            width: inherit;
            }
        .header{
          font-size: var(--header-font-size,30px); 
        }
        :host([shadow]){
          box-shadow: 0px 0px 5px 0px black;
        }
            .slime-card-bottom{
              border-top:none;
              font-size: var(--body-font-size,20px);
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
      bodyTabIndex: {type: String, attribute: "body-tab-index"}
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
    this.bodyTabIndex = -1;
    
}

  extend(){
    this.toggle = !this.toggle;
    if(this.toggle){
      //card expanded
      this.bodyTabIndex = 0;
      this.parentNode.children[1].style.setProperty("--body-max-height",'1000px');
      this.parentNode.children[1].style.setProperty("--body-padding",'2%');
      this.parentNode.children[1].style.setProperty("--body-bottom-border",'solid 1px');
    }else{
      //card closed
      this.bodyTabIndex = -1;
      this.parentNode.children[1].style.setProperty("--body-max-height",'0px');
      setTimeout(()=>{    
        this.parentNode.children[1].style.setProperty("--body-padding",'0%');    
        this.parentNode.children[1].style.setProperty("--body-bottom-border",'none');
      },300);
    }
  
  }

  accessibleExtend(event){
      if(event.key=='Enter'){
        //pase extend method here
        this.toggle = !this.toggle;
        if(this.toggle){
          //card expanded
          this.parentNode.children[1].style.setProperty("--body-max-height",'1000px');
          this.parentNode.children[1].style.setProperty("--body-padding",'2%');
          this.parentNode.children[1].style.setProperty("--body-bottom-border",'solid 1px');
       }else{
          //card closed
          this.parentNode.children[1].style.setProperty("--body-max-height",'0px');
          setTimeout(()=>{
          this.parentNode.children[1].style.setProperty("--body-padding",'0%');        
          this.parentNode.children[1].style.setProperty("--body-bottom-border",'none');
      },300);
      }
    }
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties){
    if (super.firstUpdated) {
      var element = this;
      if(this.toggle){this.shadowRoot.getElementById("click-target").addEventListener('click',this.extend);}
      if(this.toggle){this.shadowRoot.getElementById("click-target").addEventListener('keypress',this.accessibleExtend);}
  }
}



  // HTML - specific to Lit
  render() {
    return html` 
        <div class="slime-card-container">
        <div id="click-target" tabindex="0">
        <slime-header class="header" ?toggle="${this.toggle}" type="${this.type}" heading="${this.heading}" sub-heading="${this.subHeading}" accent-color="${this.accentColor}"></slime-header>
        </div>
        <slime-body tabindex="${this.bodyTabIndex}" id="expand-target" class="slime-card-bottom" ?toggle="${this.toggle}"><slot></slot></slime-body>
        </div>`;
  }
}

