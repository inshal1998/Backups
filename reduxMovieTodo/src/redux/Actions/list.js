import {
  ADD_MOVIE,
  REMOVE_MOVIE,
  EDIT_MOVIE,
  MARK_COMPLETE,
} from './action.type';

export const addMovie = season => ({
  type: ADD_MOVIE,
  payload: season,
});
export const removeMovie = season => ({
  type: REMOVE_MOVIE,
  payload: season,
});
export const editMovie = season => ({
  type: EDIT_MOVIE,
  payload: season,
});
export const markComplete = season => ({
  type: MARK_COMPLETE,
  payload: season,
});
