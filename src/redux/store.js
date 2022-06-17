import { createStore } from "redux";

const dummydata = () => {
  return 100;
};
const store = createStore(dummydata);

export default store;
