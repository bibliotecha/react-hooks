import React, { useState, useEffect } from 'react';

/**
 * 実際にuseEffectが使われるケースを紹介します
 */
export const Lecture3 = () => {
  const [showMouseListener, setShowMouseListener] = useState(false);
  return (
    <div>
      {showMouseListener && <MouseListener />}
      <button onClick={() => setShowMouseListener(!showMouseListener)}>
        {showMouseListener
          ? 'MouseListenerを外してみましょう'
          : 'MouseListenerを呼び出しましょう'}
      </button>
    </div>
  );
};

const MouseListener = () => {
  useEffect(() => {
    const onMouseMove = (e) => {
      /**
       * eのオブジェクトにはその瞬間のマウスの位置についての情報を持っている
       */
      console.log(e);
    };
    /**
     * マウスがブラウザの中で動くたびにコンポーネントが読み込まれ直します
     */
    window.addEventListener('mousemove', onMouseMove);
    console.log('eventlistenerが取付けられました');

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      console.log('eventlistenerが外されました');
    };
  }, []);

  return <div>マウスを動かしてみましょう</div>;
};
