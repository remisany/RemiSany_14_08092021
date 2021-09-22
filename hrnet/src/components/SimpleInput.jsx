import { useState } from "react"
import styled from "styled-components"

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
`

function SimpleInput ({ type, id }) {
    const [active, setActive] = useState(false)

    const label = (id[0].toUpperCase() + id.slice(1)).replace("-", " ")

    return (
        <CONTAINER>
            {active ? <label>{label}</label> : null}
            <input type = {type} id = {id} placeholder = {label} onFocus = {() => setActive(true)} onBlur = {() => setActive(false)}/>
        </CONTAINER>
    )
}

export default SimpleInput