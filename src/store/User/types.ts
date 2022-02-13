/* eslint-disable no-unused-vars */
export enum UserActionsType {
  logInUserData = "LOGIN_USER_DATA",
  logOutUserData = "LOGOUT_USER_DATA",
}

export type UserType = {
  name: string;
  pass: string;
};

export type UserReducerType = {
  user: UserType;
};

type logInUserDataActionType = {
  type: UserActionsType.logInUserData;
  payload: UserType;
};

type logOutUserDataActionType = {
  type: UserActionsType.logOutUserData;
};

export type ActionsType = logInUserDataActionType | logOutUserDataActionType;
