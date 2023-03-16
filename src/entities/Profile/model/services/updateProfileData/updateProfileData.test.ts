import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const data = {
  first: 'Sashka',
  lastname: 'Leshiy',
  age: 45,
  city: 'Moscow',
  username: 'king',
  currency: Currency.RUB,
  country: Country.Russia,
};
describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
