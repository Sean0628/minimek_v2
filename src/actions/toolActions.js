import { fetchData } from '../data/mockAPI';

import { DATA_LOADED } from './types';

export function loadUnitData() {
  return (dispatch, getState) => {
    fetchData()
      .then(data => {
        dispatch({
          type : DATA_LOADED,
          payload : data
        })
      });
  }
}
