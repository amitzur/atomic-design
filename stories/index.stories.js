import '../scss/style.scss';
import '../scss/slideshow.scss';
import React from 'react';
import {addDecorator} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import cn from 'classnames';

// import {designToken, atom} from '../.storybook/utils'; // using this from another file kills HMR. Need to open an issue about this
import {storiesOf} from '@storybook/react';

const category = type => name => (kindName, stories) => {
  const kind = storiesOf(`${type}|${name}/${kindName}`, module);
  for (const story of stories) {
    kind.add(...story);
  }
};

const libaryCategory = category('Library');
const appCategory = category('Application');

const designToken = libaryCategory('Design Tokens');
const atom = libaryCategory('Atoms');
const molecule = libaryCategory('Molecule');

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

// Box here

// Slide here

// atom('Slide show', [

// ]);

// molecule('Slide show', [
//   [
//     'Slide with a box',
//     () => (
//       <Slide>
//         <Box>I'm a box</Box>
//       </Slide>
//     ),
//   ],
//   [
//     'Slide with several boxes',
//     () => (
//       <Slide>
//         <div className="p-4">
//           <div className="d-flex flex-grow-1">
//             <Box className="mr-3">I'm a box!!!</Box>
//             <div className="flex-grow-1">
//               <Box className="mb-3">box 2</Box>
//               <Box>box 3</Box>
//             </div>
//           </div>
//         </div>
//       </Slide>
//     ),
//   ],
//   [
//     'Layout',
//     () => (
//       <Slide>
//         <div className="p-4">
//           <Layout
//             left={() => 'Left side'}
//             right1={() => 'Upper right'}
//             right2={() => 'Lower right'}
//           />
//         </div>
//       </Slide>
//     ),
//   ],
// ]);

// function Layout({left, right1, right2}) {
//   return (
//     <div className="d-flex flex-grow-1">
//       <Box className="mr-3">{left()}</Box>
//       <div className="flex-grow-1">
//         <Box className="mb-3">{right1()}</Box>
//         <Box>{right2()}</Box>
//       </div>
//     </div>
//   );
// }

// const form = appCategory('Forms');

// form('Login', [
//   ['username', () => <div>username</div>],
//   ['username + password', () => <div>username + password</div>],
//   ['forgot my password', () => <div>forgot my password</div>],
//   ['passowrd reset', () => <div>passowrd reset</div>],
// ]);
