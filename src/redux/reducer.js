import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";
const initialData = [];

export const cartData = (initialData, action) => {
  // if (action.type == ADD_TO_CART) {
  //   console.log("Reducer Called", action);
  //   return action.data;
  // } else {
  //   return "abc";
  // }

  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART CONDITION", action);
      return 1 + 1;
    case REMOVE_TO_CART:
      console.log("REMOVE_TO_CART CONDITION", action);
      return 1 - 1;
    default:
      return `Sorry, we are out of`;
    // return action.data;
    // break;
  }
};
