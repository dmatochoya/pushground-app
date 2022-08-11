import { createSlice } from '@reduxjs/toolkit';
import { pushgroundApi } from '../services/pushgroundApi';

const authenticatedUserName = localStorage.getItem('authenticatedUserName');

interface InitialState {
  isUserAuthenticated: boolean;
  userName: string | undefined | null;
  apiKey: string | null;
}

const initialState = {
  isUserAuthenticated: !!authenticatedUserName,
  userName: authenticatedUserName,
  apiKey: null,
} as InitialState;

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    resetSliceState: (state) => {
      state.isUserAuthenticated = false;
      state.userName = null;
      localStorage.removeItem('authenticatedUserName');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(pushgroundApi.endpoints.logInUser.matchFulfilled, (state, action) => {
      state.apiKey = action.payload.apiKey;
      state.isUserAuthenticated = true;

      const { arg: { originalArgs: { userName } } } = action.meta;

      if (userName) {
        state.userName = userName;
        localStorage.setItem('authenticatedUserName', userName);
      }
    });
  },
});

export const { resetSliceState } = mainSlice.actions;

export default mainSlice.reducer;
