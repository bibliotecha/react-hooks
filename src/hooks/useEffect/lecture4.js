import React, { useState, useEffect } from 'react';

/**
 * useEffectの実用的な使い方：APIから情報を取得する
 */
export const Lecture4 = () => {
  const [data, setData] = useState([]);

  //   方法１->async/awaitを使う場合
  useEffect(() => {
    const fetchAPI = async function () {
      // APIからデータを取得（取得したときにはJSON形式)
      const response = await fetch('API');
      // JSON形式をJavascript形式に変換
      const resJson = await response.json();
      setData(resJson);
    };
    fetchAPI();
  }, []);

  //   方法２->thenを使う場合
  useEffect(() => {
    fetch('API')
      .then((response) => response.json())
      .then((resJson) => setData(resJson));
  }, []);

  return <div>{data}</div>;
};
