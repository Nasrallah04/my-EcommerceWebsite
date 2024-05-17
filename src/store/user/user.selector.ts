import { createSelector } from "reselect";
import { UserState } from "./user.reducer";
import { RootState } from "../store";

export const selectUserReduer = (state: RootState): UserState => state.user

export const currentUserSelctor = createSelector(
    selectUserReduer,
    (user) => user.currentUser
)