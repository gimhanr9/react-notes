import { createStore, combineReducers } from "redux";

const initialState = {
  open: false,
  name: "",
  orderId: "",
  avatar: "",
  total: 0,
  date: "",
};
function dialog(state = initialState, action) {
  switch (action.type) {
    case "OPEN_DIALOG":
      return action.payload;

    case "CLOSE_DIALOG":
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
}

export default createStore(combineReducers({ dialog }));
