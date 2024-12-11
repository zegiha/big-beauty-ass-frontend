'use client'

import styles from './button.module.css';

interface ButtonProps {
  type: 'button' | 'submit';
  width?: number | 'fill' | 'fit-content';
  height?: number;
  backgroundColor?: 'primary' | 'gray' | 'green' | 'red';
  padding?: number | {horizontal: number, vertical: number};
  children: React.ReactNode;
  onClick: () => void;
}

function getBackgroundColor(backgroundColor: ButtonProps['backgroundColor']): string {
  switch (backgroundColor) {
    case 'primary': return styles.primary_button;
    case 'gray': return styles.gray_button;
    case 'green': return styles.green_button;
    case 'red': return styles.red_button;
    default: return '';
  }
}

export default function Button({
  children,
  type,
  width,
  height,
  backgroundColor,
  padding,
  onClick,
}: ButtonProps) {
  return <button
    type={type}
    className={`${styles.button} ${getBackgroundColor(backgroundColor)}`}
    style={{
      width:
        width === 'fill' ?
        '100%' :
        width === 'fit-content' ?
        'fit-content' :
        width === undefined ?
        'auto' :
        `${width}px`,
      height: height === undefined ? 'auto' : `${height}px`,
      padding:
        typeof padding === 'number' ?
        `${padding}px` :
        padding !== undefined ?
        `${padding.horizontal}px ${padding.vertical}px` :
        undefined,
    }}
    onClick={onClick}
  >
    {children}
  </button>
}