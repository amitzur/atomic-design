import {storiesOf} from '@storybook/react';

const category = name => (kindName, stories) => {
  const kind = storiesOf(`Library|${name}/${kindName}`, module);
  for (const story of stories) {
    kind.add(...story);
  }
};

export const designToken = category('Design Tokens');
export const atom = category('Atoms');
