import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        user: action.payload.user,
        name: action.payload.name,
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};
