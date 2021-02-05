import { types } from "../types/types";

export const loginAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login("userAsyn", "Usuario Async API"));
    }, 3500);
  };
};

export const login = (user, name) => {
  return {
    type: types.login,
    payload: {
      user,
      name,
    },
  };
};
