import React, { useRef, useLayoutEffect } from 'react';

/**
 * useLayoutEffectはuseEffectと同じでDOMがマウントされる時に呼ばれますが、useLayoutEffectはDOMがマウントされた瞬間ほぼ同時に呼ばれます。
 * 主な用途としては要素の高さや横の長さなど
 * を測る時に使われます。その例を下記で紹介します。
 */
export const Lecture1 = () => {
  const containerRef = useRef();
  /**
   * getBoundingClientRectはdomに備わっているメソッドで要素の大きさを測ってくれます。
   * x座標、y座標、また高さ、横の長さなどその要素の形に関する情報を得ることができます。
   */
  useLayoutEffect(() => {
    console.log(containerRef.current.getBoundingClientRect());
  });
  return (
    <div ref={containerRef}>
      ここではこの文章を囲っているdivの長さを計りコンソールに表示させています。
    </div>
  );
};
