import { CSS_TRANSITIONS } from '../redux_actions/types';

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CSS_TRANSITIONS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
