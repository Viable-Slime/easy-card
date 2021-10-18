// dependencies / things imported
import {css,html} from 'lit';
import {SimpleColors} from '@lrnwebcomponents/simple-colors';
import { SlimeIcon } from './slime-icon';



export class SlimeHeader extends SimpleColors {
  static get tag() {
    return "slime-header";
  }


  // CSS - specific to Lit
    static get styles() {
    return [...super.styles,
      css`
        :host{
        display: block;
        height: var(--header-height,inherit);
        width: var(--header-width,inherit);
        border-style: solid;
        border-color: black;
        border-width: 1px;
        background-color: var(--simple-colors-default-theme-accent-6,black);
        overflow: hidden;
        }


        .header-content{

            display: flex;
            height: inherit;
            width: inherit;
            align-items: center;

        }

        .header-text-box{

            width: 70% !important;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;

        }

        h2{margin:1px;}
        h3{margin:1px;}


      `
  ];
    
  }



  static get properties() {
    return {
      type: { type: String, reflect: true },
      iconScale: {type: String, attribute: "icon-scale"},
      height: {type: String, attribute:"height", reflect: true},
      width: {type: String, attribute:"width", reflect: true},
      heading: {type: String, attribute:"heading", reflect: true},
      subHeading: {type: String, attribute:"sub-heading", reflect: true},
      color: {type: String,attribute:"color", reflect: true}  
    };
  }



  constructor() {
    super();
    this.type = "math";
    this.iconScale = "inherit";
    this.height = "inherit";
    this.width = "inherit";
    this.heading = "Heading";
    this.subHeading = "sub heading";
    this.color = "grey";
    this.style.backgroundColor = "var(--simple-colors-default-theme-"+this.color+"-6)";
    
    

}



  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "type" && this[propName] === "science") {
        this.myIcon = "beaker";
      }

      this.style.setProperty("--header-height",this.height);
      this.style.setProperty("--header-width",this.width);
      this.style.backgroundColor = "var(--simple-colors-default-theme-"+this.color+"-6)";


    });
  }




  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
      this.style.backgroundColor = "var(--simple-colors-default-theme-"+this.color+"-6)";
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


        <div class="header-content">
        <slime-icon type="${this.type}" bg-color="transparent" icon-scale="${this.iconScale}" accent-color="transparent"></slime-icon>
        <div class="header-text-box">
        <h2>${this.heading}</h2>
        <h3>${this.subHeading}</h3>
        </div>
        </div>

     `;


  }







  }



