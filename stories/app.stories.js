import { html } from 'lit-html';
import '../src/app.js';

export default {
    title: 'Easy Icon',
    component: 'slime-icon',
    argTypes: {
      iconValue: {control: 'text'},
      iconHeight: {control: 'text'},
      iconWidth: {control: 'text'},
    },
    title: 'Easy Header',
    component: 'slime-header',
    argTypes: {
      type: { control: 'text' },
      iconScale: {control: 'text'},
      height: {control: 'text'},
      width: {control:'text'},
      heading: {control: 'text'},
      subHeading: {control: 'text'},
      fontSize: {control: 'text'},
    },
    title: 'Easy Body',
    component: 'slime-body',
    argTypes: {
      type: {control: 'text'}
    },
    title: 'Easy Card',
    component: 'slime-card',
    argTypes: {
      type: {control: 'text'},
      iconScale: {control: 'text'},
      height: {control: 'text'},
      width: {control: 'text'},
      accentColor: {control: 'text',reflect: true},
      heading: {control: 'text', reflect: true},
      subHeading: {control: 'text', reflect: true},
      toggle: {control: 'boolean'},
      expanded: {control: 'boolean'}
    },

};


function SlimeCardTemplate({ type = "science", height = '10px', width = '100px', heading='Unit 1', subHeading='Science', accentColor='green' }) {
  
  
  return html`
    <slime-card type="${type}" sub-heading="${subHeading}" heading="${heading}" width="${width}" accent-color=${accentColor} >
    </slime-card>
  `;
}

function SlimeIconTemplate({ iconHeight = 'inherit', iconWidth= 'inherit', iconValue= "science"}) {
 
  return html`
  <slime-icon iconValue="${type}>
  </slime-icon>
 `;
}

export const SlimeCard = SlimeCardTemplate.bind({});
SlimeCard.args = {
  type: 'science',
  height: '10px',
  width: '40px',
  heading: 'Unit 1', 
  subHeading: 'Science',
  accentColor: 'green',

};

