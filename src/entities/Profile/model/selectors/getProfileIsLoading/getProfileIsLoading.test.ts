import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
  test('return undefined without state', () => {
    const state: DeepPartial<StateSchema> = {
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
