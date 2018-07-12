import { INCREMENT_COUNTER } from "../constants/action-types";

const initialState = {
  firstName: "First Name"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        firstName: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
