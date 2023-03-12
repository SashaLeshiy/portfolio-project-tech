import { StateSchema } from 'src/app/providers/StoreProvider';

export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading;
