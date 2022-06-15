import { createStore } from "redux";

const dummydata = () => {
  return 100;
};
export const store = createStore(dummydata);
