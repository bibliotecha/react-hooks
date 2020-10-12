import React, { useRef, useEffect } from 'react';

/**
 * useRefの実用的な例です。普段なら入力欄をクリックしないと字は書けませんが、
 * useEffectによってページを表示させた瞬間に入力欄にクリックせずとも入力ができてしまいます。
 */
export const Lecture2 = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        ここをクリックしても入力欄に書いていくことができます
      </button>
    </div>
  );
};
