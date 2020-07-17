import React from 'react';
import dayjs from 'dayjs';
import { VergeState } from '../reducers/types';
import styles from './History.css';

interface Props {
  vergeState: VergeState;
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  sendHistory: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  index: number;
  currentIndex: number;
}

const History = (props: Props) => {
  const { vergeState, handleClick, sendHistory, index, currentIndex } = props;

  const historyClassNames = `${styles.history} ${
    index === currentIndex ? styles.selectedHistory : ''
  }`;

  return (
    <li>
      <div
        className={historyClassNames}
        onClick={handleClick}
        onKeyDown={() => {}}
        role="button"
        tabIndex={index}
      >
        <div className={styles.content}>
          <div className={styles.contentBody}>
            <h4>{vergeState.displayName}</h4>
            <h5>{dayjs(vergeState.createdAt).format('HH:mm:ss')}</h5>
          </div>
          <button
            className={styles.travelButton}
            type="button"
            onClick={sendHistory}
          >
            Jump
          </button>
        </div>
      </div>
    </li>
  );
};

export default History;
