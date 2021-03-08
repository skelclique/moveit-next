import { useState } from 'react';

import styles from '../styles/components/SideBar.module.css';

export function SideBar() {
  const [homeActive, setHomeActive] = useState(true);

  return (
    <>
      {homeActive ? (
        <div className={styles.sideBar}>
          <img src="icons/sidebar.svg" />
          <div className={`${styles.links} ${styles.linksHomeActive}`}>
            <button>
              <div></div>
              <img src="icons/homeActive.svg" />
            </button>
            <button
              onClick={() => {
                setHomeActive(false);
              }}
            >
              <img src="icons/award.svg" />
            </button>
          </div>

          <div></div>
        </div>
      ) : (
        <div className={styles.sideBar}>
          <img src="icons/sidebar.svg" />
          <div className={`${styles.links} ${styles.linksAwardActive}`}>
            <button
              onClick={() => {
                setHomeActive(true);
              }}
            >
              <img src="icons/home.svg" />
            </button>
            <button>
              <div></div>
              <img src="icons/awardActive.svg" />
            </button>
          </div>

          <div></div>
        </div>
      )}
    </>
  );
}
