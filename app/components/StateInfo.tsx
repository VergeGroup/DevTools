import React from 'react';
import { VergeState } from '../reducers/types';
import styles from './StateInfo.css';

interface Props {
  vergeState?: VergeState;
}

const HistoryList = (props: Props) => {
  const { vergeState } = props;

  if (!vergeState) {
    return <div />;
  }

  const { displayName, fileName, line } = vergeState;

  return (
    <div className={styles.wrapper}>
      <h2>{displayName}</h2>
      <h5>{`${fileName.split('/').pop()} - Line: ${line}`}</h5>
    </div>
  );
};

export default HistoryList;
