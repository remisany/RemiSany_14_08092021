import styled from "styled-components"

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;

    label {
        font-size: 1.5rem;
    }
`

function SimpleInput ({ type, id }) {
    const label = (id[0].toUpperCase() + id.slice(1)).replace("-", " ")

    return (
        <CONTAINER>
            <label>{label}</label>
            <input type = {type} id = {id} />
        </CONTAINER>
    )
}

export default SimpleInput