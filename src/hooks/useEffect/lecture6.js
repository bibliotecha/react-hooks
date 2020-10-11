import React, { useState, useEffect } from 'react';

const getNumber = () => {
  return localStorage.getItem('number')
    ? JSON.parse(localStorage.getItem('number'))
    : 0;
};

/**
 * 今まで扱ってきたuseStateとuseEffectの実用例です。
 * localStorageを使いブラウザ上にアンマウントされる時のstateを保存。
 * それを再びコンポーネントが読み込まれた時にlocalstorageから保存した数字を
 * とってきます。
 */
export const Lecture6 = () => {
  const [number, setNumber] = useState(() => getNumber());

  useEffect(() => {
    localStorage.setItem('number', number);
  }, [number]); // numberが変わるたびにブラウザに新しい数字が保存される
  return (
    <>
      <div>保存されている数字: {number}</div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}>
        １足す
      </button>
    </>
  );
};
