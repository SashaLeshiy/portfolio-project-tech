import { StateSchema } from 'src/app/providers/StoreProvider';

export const getProfileValidateErrors = (state: StateSchema) => state?.profile?.validateErrors;
