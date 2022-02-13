import { UserActionsType, UserType } from "./types";

export const logInUserDataAction = (user: UserType) => {
  return {
    type: UserActionsType.logInUserData,
    payload: user,
  };
};

export const logOutUserDataAction = () => {
  return {
    type: UserActionsType.logOutUserData,
  };
};
