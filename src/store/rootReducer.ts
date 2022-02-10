import { combineReducers } from "redux";
import MemesReducer from "./Memes/reducer";

const rootReducer = combineReducers({
  memes: MemesReducer,
});

export default rootReducer;
