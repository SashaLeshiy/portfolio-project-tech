import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Officiis iure voluptatibus temporibus neque odit autem?
  Distinctio suscipit est eum obcaecati.`,
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Officiis iure voluptatibus temporibus neque odit autem?
  Distinctio suscipit est eum obcaecati.`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
