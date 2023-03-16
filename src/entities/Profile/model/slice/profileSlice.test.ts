import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { profileReducer, profileActions } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice.test', () => {
  const data = {
    first: 'Sashka',
    lastname: 'Leshiy',
    age: 45,
    city: 'Moscow',
    username: 'king',
    currency: Currency.RUB,
    country: Country.Russia,
  };

  test('set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setReadonly(true),
      ),
    ).toEqual({ readonly: true });
  });
  test('set cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit(),
      ),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });
  test('set updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: 'lalala' } };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: 'blablabla' }),
      ),
    ).toEqual({
      form: { username: 'blablabla' },
    });
  });
  test('set updateProfile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.pending,
      ),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });
  test('set updateProfile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
