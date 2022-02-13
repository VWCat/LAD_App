import { RootReducerType } from "../types";

// eslint-disable-next-line import/prefer-default-export
export const getUser = (state: RootReducerType) => state.user.user;
