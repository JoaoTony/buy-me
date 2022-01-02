import useSWR from 'swr';

const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || '';

export const useSwr = <T>(endPoint: string) => {
  const { data, error } = useSWR(
    `${baseURL}${endPoint}`,

    async (url) => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

      });
      const res = await response.json();

      return res;
    },

    {
      shouldRetryOnError: true,
      errorRetryCount: 3,
      errorRetryInterval: 1000,
      revalidateOnMount: true,
      revalidateOnFocus: true,
      refreshInterval: 1000,
      revalidateOnReconnect: true,
    },
  );

  const loading = !data && !error;

  return { loading, error, data: data as T };
};
