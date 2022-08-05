import {Params} from "@angular/router";
import {RouterReducerState} from "@ngrx/router-store";
import {Question} from "./question.model";
import {UserState} from "../app/store/user/user.selectors";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}



export interface AppState {
  router: RouterReducerState<RouterStateUrl>
  user: UserState;
}
