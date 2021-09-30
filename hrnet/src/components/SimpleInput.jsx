import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"

//Features
import { changeInput } from '../features/Form'

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
`

function SimpleInput ({ type, name }) {
    const label = (name[0].toUpperCase() + name.slice(1)).replace("-", " ")
    const id = name.replace("-", "")
    const dispatch = useDispatch()
    const storeChoice = useSelector((state) => state.Form[id])
    const [active, setActive] = useState(false)

    const close = (e) => {
        if (document.getElementById(id).value === "") {
            setActive(false)
        } else {
            const choice = e.target.value
            if (storeChoice !== choice) {
                dispatch(changeInput(id, choice))
            }
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
                }}
            />
        </CONTAINER>
    )
}

export default SimpleInput