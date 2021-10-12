const initialState = {
    firstname: "",
    lastname: "",
    birthdate: "",
    startdate: "",
    street: "",
    city: "",
    zip: "",
    state: "",
    department: ""
}

const INPUT = "changeInput";

export const changeInput = (id, content) => ({
    type: INPUT,
    id: id,
    content: content
});

function reducer (state = initialState, action) {
    if (action.type === INPUT) {
        return {
            ...state,
            [action.id]: action.content
        }
    }
    return state
};

export default reducer;
