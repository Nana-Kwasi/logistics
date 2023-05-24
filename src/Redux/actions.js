export const authUser = (auth) => {
    return {
        type: "AUTH_LOGIN",
        payload: auth,
    };
};