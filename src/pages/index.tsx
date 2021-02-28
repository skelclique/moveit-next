import Head from 'next/head';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  return (
    <div className={styles.background}>
      <div className={styles.loginContainer}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <section>
          <img src="icons/symbol.svg" />
          <div>
            <img src="icons/logo.svg" />
            <strong>Bem-vindo</strong>
            <div className={styles.githubContainer}>
              <img src="icons/github.svg" />
              <p>
                Faça login com seu Github para começar
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
