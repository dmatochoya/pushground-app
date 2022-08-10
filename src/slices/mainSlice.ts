import { createSlice } from '@reduxjs/toolkit';
import { pushgroundApi } from '../app/services/pushgroundApi';

const initialState = { isUserAuthenticated: false } as { isUserAuthenticated: boolean };

export const mainSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {
    resetSliceState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(pushgroundApi.endpoints.logInUser.matchFulfilled, (state, action) => {
      const { arg: { originalArgs: { Hash: code } } } = action.meta;
      // state.serviceData = { ...action.payload, code };
    });
  },
});

export const { resetSliceState } = mainSlice.actions;

export default mainSlice.reducer;
