import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '../../../shared/config/storybook/themeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...(args as Record<string, unknown>)} />;

export const Default = Template.bind({});
Default.args = {
};
Default.decorators = [StoreDecorator({
  profile: {
    form: {
      first: 'Sashka',
      lastname: 'Leshiy',
      age: 45,
      city: 'Moscow',
      username: 'king',
      currency: Currency.RUB,
      country: Country.Russia,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      first: 'Sashka',
      lastname: 'Leshiy',
      age: 45,
      city: 'Moscow',
      username: 'king',
      currency: Currency.RUB,
      country: Country.Russia,
    },
  },
})];
