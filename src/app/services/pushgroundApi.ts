import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import camelcaseKeys from 'camelcase-keys';
// import type { ServiceData, DriverInformation } from '../../slices/trackingSliceTypes';

export const pushgroundApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.pushground.com/' }),
  endpoints: (builder) => ({
    logInUser: builder.query({
      query: (body) => ({
        url: 'advertisers/key',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useLazyLogInUserQuery,
  util: { resetApiState },
} = pushgroundApi;
