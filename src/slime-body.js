import {css,html,LitElement} from 'lit';

export class SlimeBody extends LitElement{
  static get tag() {
    return "slime-body";
  }

    static get styles() {
    return css`
        :host{
          display: flex;
          border-color: black;
          border-style: solid;
          border-width: 1px;
          height: var(--toggle-height,auto);
          width: inherit;
          padding: 2%;
          overflow:hidden;
        }

        :host([toggle="true"]){

          height: var(--toggle-height,auto);
          max-height: var(--body-max-height,0px);
          padding: var(--body-padding,0%);
          border-bottom: var(--body-bottom-border,none);
          transition: max-height 0.35s;
         
        }

        .body-content{
          padding-top: 1%;
          padding-bottom: 1%;
          width: 100%;
          overflow: hidden;
        }
      `;
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
      toggle: {type: Boolean},
    };
  }



  constructor() {
    super();
    this.type = "math";
    this.toggle = false;
}

  render() {
    return html` 
        <div class="body-content">
        <slot></slot>
        </div>
     `;
  }
  }



