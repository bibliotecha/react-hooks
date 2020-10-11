import React, { useState, useEffect } from 'react';

/**
 * 基本
 */
export const Lecture1 = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>{show && <TestComponent />}</div>
      <button onClick={() => setShow((s) => !s)}>click</button>
    </>
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
