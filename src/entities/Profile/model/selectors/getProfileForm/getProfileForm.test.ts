import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return error', () => {
    const data = {
      first: 'Sashka',
      lastname: 'Leshiy',
      age: 45,
      city: 'Moscow',
      username: 'king',
      currency: Currency.RUB,
      country: Country.Russia,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('return undefined without state', () => {
    const state: DeepPartial<StateSchema> = {
    };
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
