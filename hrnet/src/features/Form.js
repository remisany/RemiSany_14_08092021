const initialState = {
    firstname: "",
    lastname: "",
    birthdate: "",
    startday: "",
    street: "",
    city: "",
    zip: "",
    state: "",
    department: ""
}

const INPUT = "changeInput"
const SELECT = "changeSelectMenu"

export const changeInput = (e) => ({
    type: INPUT,
    id: e.target.id,
    content: e.target.value
})

export const changeSelectMenu = (id, content) => ({
    type: INPUT,
    id: id,
    content: content
})

function reducer (state = initialState, action) {
    if (action.type === INPUT || action.type === SELECT) {
        return {
            ...state,
            [action.id]: action.content
        }
    }
    return state
}

export default reducer 
