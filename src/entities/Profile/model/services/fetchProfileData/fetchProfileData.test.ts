import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { fetchProfileData } from './fetchProfileData';

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
describe('loginByUsername.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
