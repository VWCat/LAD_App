import { RootReducerType } from "../types";

const getMemesData = (state: RootReducerType) => state.memes.memes;

export default getMemesData;
