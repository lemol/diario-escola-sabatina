
import type { Action } from './types';
import { replaceRoute } from './route';

export const SET_USER = 'SET_USER';

export function setUser(user:string):Action {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function login(username: string):Action {
  return dispatch => {
    dispatch(setUser(username));
    dispatch(replaceRoute('home', 0));
  };
}
