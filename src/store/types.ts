import { MemesReducerType } from "./Memes/types";
import { UserReducerType } from "./User/types";

export type RootReducerType = {
  memes: MemesReducerType;
  user: UserReducerType;
};
