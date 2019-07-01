import '../scss/style.scss';
import React from 'react';
import {addDecorator} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {designToken, atom} from '../.storybook/utils';

addDecorator(story => (
  <div className="stretch d-flex justify-content-center align-items-center">{story()}</div>
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
