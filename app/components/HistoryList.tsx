import React from 'react';
import History from './History';
import SearchBar from './SearchBar';
import styles from './HistoryList.css';

import { VergeState } from '../reducers/types';

interface Props {
  vergeStates: VergeState[];
  currentIndex: number;
  updateCurrentIndex: (index: number) => void;
  updateSearchText: (value: string) => void;
  sendHistory: (id: string) => void;
}

const HistoryList = (props: Props) => {
  const {
    vergeStates,
    currentIndex,
    updateCurrentIndex,
    updateSearchText,
    sendHistory
  } = props;

  return (
    <div className={styles.container}>
      <SearchBar updateSearchText={updateSearchText} />
      <ul className={styles.list}>
        {vergeStates.map((vergeState, index) => (
          <History
            key={vergeState.id}
            vergeState={vergeState}
            handleClick={() => updateCurrentIndex(index)}
            sendHistory={() => sendHistory(vergeState.id)}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
