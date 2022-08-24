import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import {RootState} from "../root-store";


export const hydrationMetaReducer = (
  reducer: ActionReducer<RootState>
): ActionReducer<RootState> => {
  return (state, action) => {
    console.log(action.type)
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem("state");
      console.log(storageValue)
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState;
  };
};
