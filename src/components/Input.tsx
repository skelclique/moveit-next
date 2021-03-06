import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import styles from '../styles/components/Input.module.css';

export function Input() {

  const router = useRouter();

  const [stylesButton, setStylesButton] = useState({
    background: 'var(--blue-dark)',
  });

  const [isDisabled, setisDisabled] = useState(true);
  const [username, setUsername] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    router.push(`/home?username=${username}`);
  }

  return (
    <form 
      className={styles.inputContainer}
      onSubmit={(e) => {handleSubmit(e)}}
    >
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
            setStylesButton({ background: 'var(--blue-dark)' });
            setisDisabled(true);
          }
        }}
        onChange={(e) => {
          if (e.target.value !== '') {
            setStylesButton({ background: 'var(--green)' });
            setUsername(e.target.value);
            setisDisabled(false);
          }
        }}
      />
      <button
        type="submit"
        disabled={isDisabled}
        style={stylesButton}
      >
        <img src="icons/arrow.svg" />
      </button>
    </form>
  );
}
