'use client'

import styles from './input.module.css';

interface IInput {
  type: 'email' | 'password' | 'text';
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

export default function Input({
  type,
  value,
  setValue,
  placeholder,
}: IInput) {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  )
}