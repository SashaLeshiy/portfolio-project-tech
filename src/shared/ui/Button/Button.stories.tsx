import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '../../config/storybook/themeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};

export const backgroundInverted = Template.bind({});
backgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Войти',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
};
