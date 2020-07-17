import React from 'react';
import JSONTree from 'react-json-tree';
import TreeChart from './TreeChart';
import HistoryList from './HistoryList';
import StateInfo from './StateInfo';
import { VergeState } from '../reducers/types';
import styles from './Main.css';

type Props = {
  updateCurrentIndex: (index: number) => void;
  updateSearchText: (value: string) => void;
  sendHistory: (id: string) => void;
  filteredItems: VergeState[];
  vergeStates: VergeState[];
  currentIndex: number;
};

const jsonTreeTheme = {
  scheme: 'verge',
  author: 'takuma.matsushita',
  tree: () => ({ className: 'jsonTree' }),
  base00: '#272822', // bg (overwritten by class)
  base01: '#383830',
  base02: '#49483e',
  base03: '#aaaaaa', // string expanded
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: 'white', // (unneeded) text
  base08: 'white', // (unneeded) null | undefined | function | symbol
  base09: '#0b84ff', // number | bool
  base0A: '#f4bf75',
  base0B: '#63d2ff', // string | date
  base0C: '#a1efe4',
  base0D: '#eeeeee', // label | arrow
  base0E: '#ae81ff',
  base0F: '#cc6633'
};

export default function Main(props: Props) {
  const {
    vergeStates,
    filteredItems,
    currentIndex,
    updateCurrentIndex,
    updateSearchText,
    sendHistory
  } = props;

  const currentVergeState = vergeStates[currentIndex];
  const currentData =
    vergeStates[currentIndex] === undefined
      ? {}
      : vergeStates[currentIndex].data;

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <HistoryList
          vergeStates={filteredItems}
          updateCurrentIndex={updateCurrentIndex}
          updateSearchText={updateSearchText}
          sendHistory={sendHistory}
          currentIndex={currentIndex}
        />
      </div>
      <main className={styles.main}>
        <div className={styles.stateInfoContainer}>
          <StateInfo vergeState={currentVergeState} />
          <div className={styles.jsonTree}>
            <JSONTree
              data={currentData}
              theme={jsonTreeTheme}
              invertTheme={false}
            />
          </div>
        </div>
        <div className={styles.treeChart}>
          <TreeChart
            state={currentData}
            id="tree"
            size={2000}
            aspectRatio={0.5}
            isSorted={false}
            widthBetweenNodesCoeff={1.5}
            heightBetweenNodesCoeff={2}
            tooltipOptions={{
              offset: { left: 30, top: 10 },
              indentationSize: 2
            }}
          />
        </div>
      </main>
    </div>
  );
}
