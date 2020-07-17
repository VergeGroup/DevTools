import { findDOMNode } from 'react-dom';
import React from 'react';
// import styles from './TreeChart.css';

const stateVisualizer = require('d3-state-visualizer');

interface Props {
  state: object;
  rootKeyName?: string;
  pushMethod?: string;
  tree?: Tree;
  id?: string;
  style?: React.CSSProperties;
  size?: number;
  aspectRatio?: number;
  margin?: Margin;
  isSorted?: boolean;
  heightBetweenNodesCoeff?: number;
  widthBetweenNodesCoeff?: number;
  transitionDuration?: number;
  tooltipOptions?: TooltipOptions;
}

interface Tree {
  name: string;
  children: [];
}

interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface TooltipOptions {
  disabled?: boolean;
  left?: number;
  top?: number;
  offset?: Offset;
  indentationSize?: number;
  style?: React.CSSProperties;
}

interface Offset {
  left: number;
  top: number;
}

class TreeChart extends React.Component<Props, {}> {
  renderChart: Function;

  constructor(props: Props) {
    super(props);
    this.state = props;
    this.renderChart = () => {};
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    this.renderChart = stateVisualizer.tree(findDOMNode(this), this.props);
    this.renderChart();
  }

  componentDidUpdate() {
    const { state } = this.props;
    this.renderChart(state);
  }

  render() {
    return <div />;
  }
}

export default TreeChart;
