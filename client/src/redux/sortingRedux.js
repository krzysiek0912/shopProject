/* SELECTORS */
export const getSortOptions = ({ sorting }) => sorting;

// action name creator
const reducerName = 'sorting';
const createActionName = name => `app/${reducerName}/${name}`;

export const SET_SORT_OPTIONS = createActionName('SET_SORT_OPTIONS');

/* ACTIONS */
export const setSortOptions = payload => ({ payload, type: SET_SORT_OPTIONS });

const initialState = {
  direction: '',
  key: '',
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case SET_SORT_OPTIONS:
      return { ...statePart, key: action.payload.key, direction: action.payload.direction };
    default:
      return statePart;
  }
}
