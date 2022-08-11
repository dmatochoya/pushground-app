import React, { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { useLazyLogInUserQuery } from '../app/services/pushgroundApi';

export const useGetApiKey = (isUserAuthenticated: boolean) => {
  const apiKey = useAppSelector(({ mainSlice: { apiKey } }) => apiKey);

  const [logInUser] = useLazyLogInUserQuery();

  useEffect(() => {
    if (isUserAuthenticated && !apiKey) {
      logInUser({ email: 'demo@demo.com', password: 'demo1234' });
    }
  }, [isUserAuthenticated, apiKey]);

  const isLoading = isUserAuthenticated && !apiKey;

  return isLoading;
};
