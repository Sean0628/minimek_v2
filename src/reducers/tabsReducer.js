import { createReducer } from './reducerUtils';
import { TAB_SELECTED } from '../actions/types';

const initialState = {
  currentTab : 'unitInfo'
};

export function selectTab(state, payload) {
  return {
    currentTab : payload.tabName
  };
}

export default createReducer(initialState, {
  [TAB_SELECTED] : selectTab,
});
