import React, { useState, useEffect } from 'react';

export const Lecture2 = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log('countが変わったため呼び出しました');
  }, [count]); // countが変わる時だけuseEffectが読み込まれます
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>countを増やす</button>
      {show && <TestComponent />}
      <button onClick={() => setShow(!show)}>TestComponentを表示させる</button>
    </div>
  );
};

const TestComponent = () => {
  useEffect(() => {
    console.log('コンポーネントが乗っかりました');

    return () => {
      console.log('コンポーネントが外されました');
    };
  }, []);
  return <div>test</div>;
};
