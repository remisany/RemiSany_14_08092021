import { useState } from "react"
import { useDispatch } from 'react-redux'
import styled from "styled-components"

//Features
import { changeInput } from '../features/Form'

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
`

function SimpleInput ({ type, name }) {
    const dispatch = useDispatch()

    const [active, setActive] = useState(false)

    const label = (name[0].toUpperCase() + name.slice(1)).replace("-", " ")
    const id = name.replace("-", "")

    const close = (e) => {
        if (document.getElementById(id).value === "") {
            setActive(false)
        }
        window.removeEventListener("click", close)
    }

    return (
        <CONTAINER>
            {active && <label>{label}</label>}
            <input
                type = {type}
                id = {id}
                placeholder = {label}
                onFocus = {() => setActive(true)}
                onBlur = {(e) => {
                    close(e)
                    dispatch(changeInput(e))
                }}
            />
        </CONTAINER>
    )
}

export default SimpleInput