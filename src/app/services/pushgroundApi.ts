import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const pushgroundApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pushground.com/',
    prepareHeaders: (headers, { getState }) => {
      const { apiKey } = (getState() as RootState).mainSlice;

      if (apiKey) {
        headers.set('Authorization', apiKey);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    logInUser: builder.query({
      query: ({ userName, ...body }) => ({
        url: 'advertisers/key',
        method: 'POST',
        body,
      }),
    }),
    getStats: builder.query({
      query: (params) => ({
        url: 'advertisers/stats',
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const {
  useLazyLogInUserQuery,
  useGetStatsQuery,
  util: { resetApiState },
} = pushgroundApi;
