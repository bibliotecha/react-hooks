import { useState } from 'react';

/**
 * 問い合わせやログインなどに使うフォームを扱ったhooks
 * React hooksの良い点としてあげられるのが、カスタムのhooksを自分で作れること
 * @param {*} param0
 */
export const useForm = (initialValues) => {
  const [state, setState] = useState(initialValues);

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  return [state, handleChange];
};
