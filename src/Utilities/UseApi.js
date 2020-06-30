import React from 'react';

export const apiStates = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const useApi = (url, request, callback) => {
  const [data, setData] = React.useState({
    state: apiStates.LOADING,
    error: '',
    data: [],
  });

  const setPartData = (partialData) => setData({ ...data, ...partialData });

  const load = () => {
    setPartData({
      state: apiStates.LOADING,
    });
    fetch(url, request)
      .then((response) => response.json())
      .then((data) => {
        setPartData({
          state: apiStates.SUCCESS,
          data,
        });
        callback();
      })
      .catch(() => {
        setPartData({
          state: apiStates.ERROR,
          error: 'fetch failed',
        });
      });
  };

  React.useEffect(() => {
    load();
  }, []);

  return data;
};
