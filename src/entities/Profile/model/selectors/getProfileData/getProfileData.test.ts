import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
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
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('return undefined without state', () => {
    const state: DeepPartial<StateSchema> = {
    };
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
