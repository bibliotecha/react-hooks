import React from 'react';
import { useState } from 'react';

const heavyFunction = () => {
  //...重い処理
  console.log('called');
  return 10;
};

/**
 * stateの初期値の設定の仕方
 */
export const Lecture2 = () => {
  /*
   重い処理の結果をuseStateの初期値として加えたい時に使えるのが下記の表記。コールバック関数を引数として書くことにより、
   読み込まれる回数を制限することができます。（最初の一回だけ）
  */
  const [state, setState] = useState(() => heavyFunction());

  return <div>{state}</div>;
};
