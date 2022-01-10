const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const isRegistered = state => state.auth.isRegistered;

const getHttpError = state => state.auth.httpError;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    isRegistered,
    getHttpError,
}

export default authSelectors;