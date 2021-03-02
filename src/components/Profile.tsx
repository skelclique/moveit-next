import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { username } = useContext(UserContext);

  return (
    <div className={styles.profileContainer}>
      <img src={`https://github.com/${username}.png`}/>
      <div>
        <strong>{username}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}