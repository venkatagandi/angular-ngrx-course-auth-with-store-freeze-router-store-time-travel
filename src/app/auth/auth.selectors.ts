import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>("auth"); // state => state.auth;

export const isLoggedIn = createSelector(
  selectAuthState,
  state => state.loggedIn
);

export const isLoggedOut = createSelector(
  selectAuthState,
  state => !state.loggedIn
);
