import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mainSlice from '../slices/mainSlice';
import { pushgroundApi } from './services/pushgroundApi';

export const store = configureStore({
  reducer: {
    mainSlice,
    [pushgroundApi.reducerPath]: pushgroundApi.reducer,
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
