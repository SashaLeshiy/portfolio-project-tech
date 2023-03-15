import { StateSchema } from 'src/app/providers/StoreProvider';

export const getProfileReadonly = (state: StateSchema) => state?.profile?.readonly;
