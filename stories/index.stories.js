import '../scss/style.scss';
import React from 'react';
import {addDecorator} from '@storybook/react';
import {action} from '@storybook/addon-actions';

// import {designToken, atom} from '../.storybook/utils'; // using this from another file kills HMR. Need to open an issue about this
import {storiesOf} from '@storybook/react';

const category = name => (kindName, stories) => {
  const kind = storiesOf(`Library|${name}/${kindName}`, module);
  for (const story of stories) {
    kind.add(...story);
  }
};

export const designToken = category('Design Tokens');
export const atom = category('Atoms');

addDecorator(story => (
  <div
    className="stretch d-flex justify-content-center align-items-center"
    style={{background: '#3f3f3f'}}>
    <div className="box-shadow-lg bg-white p-5">{story()}</div>
  </div>
));

designToken('Colors', [
  ['Background', () => <div>background colors</div>],
  ['Text', () => <div>text colors</div>],
]);

designToken('Typography', [
  ['Headers', () => <div>headers</div>],
  ['Labels', () => <div>labels</div>],
]);

designToken('Spacing', [
  ['Margins', () => <div>margins</div>],
  ['Margins', () => <div>padding</div>],
]);

designToken('Borders', [['Lines', () => <div>lines</div>], ['Radius', () => <div>radius</div>]]);

atom('Input', [['Textbox', () => <div>textbox</div>], ['Checkbox', () => <div>checkbox</div>]]);
