import { useState, useEffect } from 'react';

/**
 * APIからのデータ取得に特化したカスタムHooks。
 * urlさえ渡せばデータを返してくれるようにする。
 */
export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const resJson = await response.json();
      setState({
        data: resJson,
        loading: false,
      });
    };
    fetchData();
  }, [url]);

  return state;
};
