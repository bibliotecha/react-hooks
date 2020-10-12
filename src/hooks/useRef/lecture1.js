import React, { useRef, useState } from 'react';

/**
 * 基本の型
 */
export const Lecture1 = () => {
  const [state, setState] = useState('');
  // useRefを使えばdomの中のelementに直接アクセスできるようになる
  // React版のdocument.querySelector()のようなもの
  const inputRef = useRef();

  return (
    <div>
      <input
        ref={inputRef}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={() => console.log('ref', inputRef.current)}>
        Refを除いてみる
      </button>
    </div>
  );
};
