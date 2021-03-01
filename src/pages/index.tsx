import Head from 'next/head';
import { Input } from '../components/Input';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <section className={styles.gridContainer}>
        <img src="icons/symbol.svg" />
        <div>
          <img src="icons/logo.svg" />
          <strong>Bem-vindo</strong>

          <div className={styles.githubContainer}>
            <img src="icons/github.svg" />
            <p>
              Faça login com seu Github <br /> para começar
            </p>
          </div>
          <Input />
        </div>
      </section>
    </div>
  );
}
