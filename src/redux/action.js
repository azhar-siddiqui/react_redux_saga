import { ADD_TO_CART } from "./constant";
export const AddToCart = (data) => {
  console.log(data);
  return {
    type: ADD_TO_CART,
    data,
  };
};
