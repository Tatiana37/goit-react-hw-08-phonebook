export const getIsAuth = state => state.auth.isAuth;
export const getUsername = state => state.auth.user.name;
export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
export const getErrorStatus = state => state.auth.error;
