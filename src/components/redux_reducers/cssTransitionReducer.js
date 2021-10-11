import { CSS_TRANSITIONS } from '../redux_actions/types';

const initialState = {
  classNames = 'scroll-down',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CSS_TRANSITIONS:
      return {
        ...state,
        classNames: action.payload,
      };
    default:
      return state;
  }
}
