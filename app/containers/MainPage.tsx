import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { RootStateType } from '../reducers/types';
import {
  updateCurrentIndex,
  updateSearchText,
  sendHistory
} from '../actions/vergeState';

function mapStateToProps(state: RootStateType) {
  return {
    vergeStates: state.vergeState.vergeStates,
    currentIndex: state.vergeState.currentIndex,
    filteredItems: state.vergeState.vergeStates.filter(item => {
      if (state.vergeState.searchText === '') {
        return true;
      }
      return item.displayName.indexOf(state.vergeState.searchText) !== -1;
    })
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      updateCurrentIndex,
      updateSearchText,
      sendHistory
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
