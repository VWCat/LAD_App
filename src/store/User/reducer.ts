import { ActionsType, UserActionsType, UserReducerType } from "./types";

const initialState: UserReducerType = {
  user: {
    name: "",
    pass: "",
  },
};

const UserReducer = (
  state = initialState,
  action: ActionsType
): UserReducerType => {
  switch (action.type) {
    case UserActionsType.logInUserData: {
      return { ...state, user: action.payload };
    }
    case UserActionsType.logOutUserData: {
      return {
        ...state,
        user: initialState.user,
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
