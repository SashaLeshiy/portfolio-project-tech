import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
};
Default.decorators = [StoreDecorator({
  loginForm: { username: '123', password: '123' },
})];

export const withError = Template.bind({});
withError.args = {
};
withError.decorators = [StoreDecorator({
  loginForm: { username: '123', password: '123', error: 'Errorr' },
})];
