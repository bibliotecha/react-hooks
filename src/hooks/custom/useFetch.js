import { useState, useEffect } from 'react';

/**
 * APIからのデータ取得に特化したカスタムHooks。
 * urlさえ渡せばデータを返してくれるようにする。
 */
export const useFetch = (url) => {
  const stateExists = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const resJson = await response.json();
      setInterval(() => {
        if (stateExists.current) {
          setState({
            data: resJson,
            loading: false,
          });
        }
      }, 2000);
    };
    fetchData();

    return () => {
      stateExists.current = false;
    };
  }, [url]);

  return state;
};
