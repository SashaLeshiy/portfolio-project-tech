import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    first: 'Sashka',
    lastname: 'Leshiy',
    age: 45,
    city: 'Moscow',
    username: 'king',
    currency: Currency.EUR,
    country: Country.Russia,
    avatar: 'https://avatars.githubusercontent.com/u/73581770?v=4',
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};
