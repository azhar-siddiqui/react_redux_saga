import { ADD_TO_CART } from "./constant";
const initialData = [];

export const cartData = (initialData, action) => {
  if (action.type == ADD_TO_CART) {
    console.log("Reducer Called", action);
    return action.data;
  } else {
    return "abc";
  }
};
