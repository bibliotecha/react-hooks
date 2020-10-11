import React from 'react';
import { useForm } from '../custom/useForm';

export const Lecture5 = () => {
  const [formAttribute, handleChange] = useForm({
    email: '',
    password: '',
  });
  console.log('formAttribute email', formAttribute.email);
  console.log('formAttribute password', formAttribute.password);
  return (
    <div>
      <input
        name='email'
        value={formAttribute.email}
        placeholder='Emailを入力'
        onChange={handleChange}
      />
      <input
        name='password'
        value={formAttribute.password}
        placeholder='パスワードを入力'
        onChange={handleChange}
      />
    </div>
  );
};
