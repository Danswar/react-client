const initialState = {
    msg: "hello from redux-test!!"
};

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}