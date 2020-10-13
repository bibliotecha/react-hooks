import React, { useRef, useState, useLayoutEffect } from 'react';

/**
 * useLayoutEffectはuseEffectと同じでDOMがマウントされる時に呼ばれますが、useLayoutEffectはDOMがマウントされた瞬間ほぼ同時に呼ばれます。
 * 主な用途としては要素の高さや横の長さなど
 * を測る時に使われます。その例を下記で紹介します。
 */
export const Lecture1 = () => {
  const [info, setInfo] = useState({});
  const containerRef = useRef();
  /**
   * getBoundingClientRectはdomに備わっているメソッドで要素の大きさを測ってくれます。
   * x座標、y座標、また高さ、横の長さなどその要素の形に関する情報を得ることができます。
   */
  useLayoutEffect(() => {
    console.log(containerRef.current.getBoundingClientRect());
    setInfo(containerRef.current.getBoundingClientRect());
  }, []);
  return (
    <>
      <div style={{ display: 'inline-block' }} ref={containerRef}>
        ここではこの文章を囲っているdivの長さを計りコンソールに表示させていますよね。
      </div>
      <div>文章のwidthは：{JSON.stringify(info.width)}pxです</div>
      <div>文章のheightは：{JSON.stringify(info.height)}pxです</div>
      <div>文章のx座標は：{JSON.stringify(info.x)}です</div>
      <div>文章のy座標は：{JSON.stringify(info.y)}です</div>
      <div>文章は右から{JSON.stringify(info.right)}pxのところにあります</div>
      <div>文章は左から：{JSON.stringify(info.left)}pxのところにあります</div>
      <div>文章は上から{JSON.stringify(info.top)}pxのところにあります</div>
      <div>文章は下から：{JSON.stringify(info.bottom)}pxのところにあります</div>
    </>
  );
};
