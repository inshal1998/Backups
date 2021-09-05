import {
  ADD_MOVIE,
  REMOVE_MOVIE,
  EDIT_MOVIE,
  MARK_COMPLETE,
} from '../Actions/action.type';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.payload];
    case REMOVE_MOVIE:
      return state.filter(season => season.id !== action.payload);
    case EDIT_MOVIE:
      return;
  }
};
