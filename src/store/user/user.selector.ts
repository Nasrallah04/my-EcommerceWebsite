// export const currentUserSelctor = (state) => state.user.currentUser;

import { createSelector } from "reselect";
import { UserState } from "./user.reducer";

export const selectUserReduer = (state: any): UserState => state.user

export const currentUserSelctor = createSelector(
    selectUserReduer,
    (user) => user.currentUser
)