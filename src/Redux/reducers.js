const initialState = {
    users: [],
    auth: false,
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH_LOGIN":
            return {auth: action.payload};

        default:
            return state;
    };
};

export default reducers;