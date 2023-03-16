import axios from 'axios';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { validateProfileData } from './validateProfileData';
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
describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });
  test('without first & lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test('without country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
  test('without all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
