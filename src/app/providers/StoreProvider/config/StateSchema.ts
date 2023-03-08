import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
 counter: CounterSchema,
 user: UserSchema,

//  Асинхронные редьсеры
 loginForm?: LoginSchema,
 profile?: ProfileSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduceManager {
  getReducerMap: () => ReducersMapObject <StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithmanager extends EnhancedStore<StateSchema> {
  reducerManager: ReduceManager;
}
