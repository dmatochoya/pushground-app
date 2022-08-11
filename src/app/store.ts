import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { pushgroundApi } from './services/pushgroundApi';
import mainSlice from './slices/mainSlice';

export const store = configureStore({
  reducer: {
    [pushgroundApi.reducerPath]: pushgroundApi.reducer,
    mainSlice,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(pushgroundApi.middleware)
  ),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
