import React from 'react';
import { useFetch } from '../custom/useFetch';

export const Lecture5 = () => {
  const { data, loading } = useFetch('https://dog.ceo/api/breeds/image/random');
  // JSON.stringifyはJavascriptのオブジェクトをJSON型に変換する（ページはJSON型でないと表示されない)

  return (
    <>{loading ? <div>ロード中</div> : <div>{JSON.stringify(data)}</div>}</>
  );
};
