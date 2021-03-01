import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

import styles from '../styles/components/Input.module.css';

export function Input() {
  const { changeUsername } = useContext(UserContext);

  const router = useRouter();

  const [stylesButton, setStylesButton] = useState({
    background: 'var(--blue-dark)',
  });
  const [isDisabled, setisDisabled] = useState(true);

  const [username, setUsername] = useState('');

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
            setStylesButton({ background: 'var(--blue-dark)' });
            setisDisabled(true);
          }
        }}
        onChange={(e) => {
          if (e.target.value != '' || 'Digite seu username') {
            setStylesButton({ background: 'var(--green)' });
            setUsername(e.target.value);
            setisDisabled(false);
          }
        }}
      />
      <button
        disabled={isDisabled}
        style={stylesButton}
        onClick={(e) => {
          e.preventDefault();
          router.push('/home');
          changeUsername(username);
        }}
      >
        <img src="icons/arrow.svg" />
      </button>
    </div>
  );
}
