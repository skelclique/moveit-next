import { useState } from 'react';

import styles from '../styles/components/Input.module.css';

export function Input() {
  const [stylesButton, setStylesButton] = useState({
    background: 'var(--blue-dark)',
  });

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        defaultValue="Digite seu username"
        onFocus={(e) => {
          e.target.value === 'Digite seu username'
            ? (e.target.value = '')
            : null;
        }}
        onBlur={(e) => {
          if (e.target.value === '') {
            e.target.value = 'Digite seu username';
            setStylesButton({ background: 'var(--blue-dark)'})
          }
        }}
        onChange={(e) => {
          e.target.value != '' || 'Digite seu username'
            ? setStylesButton({ background: 'var(--green)' })
            : null;
        }}
      />
      <button type="button" style={stylesButton}>
        <img src="icons/arrow.svg" />
      </button>
    </div>
  );
}
