import { SORT } from "./actions";

const init = {};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case SORT:
      return {...store ,users: [...store.users.users].sort((a,b)=>a[payload]>b[payload] ? 1 :a[payload]<b[payload] ? -1:0)}
    default:
      return store;
  }
};
