import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { User } from "../model/user.model";
import { Action } from "rxjs/internal/scheduler/Action";
import { AuthActionTypes, AuthActions } from "../auth/auth.actions";

type AuthState = {
  loggedIn: boolean;
  user: User;
};
export interface AppState {
  auth: AuthState;
  // courses: CoursesState;
  // lessons: LessonsState;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function AuthReducer(
  state: AuthState = initialAuthState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user
      };
    }
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  auth: AuthReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
