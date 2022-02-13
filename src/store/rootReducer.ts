import { combineReducers } from "redux";
import MemesReducer from "./Memes/reducer";
import UserReducer from "./User/reducer";

const rootReducer = combineReducers({
  memes: MemesReducer,
  user: UserReducer,
});

export default rootReducer;
