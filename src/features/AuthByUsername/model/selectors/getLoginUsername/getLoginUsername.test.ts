import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return string', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: '123' },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('123');
  });
  test('should return ', () => {
    const state: DeepPartial<StateSchema> = {
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
