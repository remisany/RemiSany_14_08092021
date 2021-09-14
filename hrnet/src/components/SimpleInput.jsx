import { useState } from "react"
import styled from "styled-components"

//Styles
import colors from "../styles/colors"

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;

    label {
        position: absolute;
        color: ${colors.orange};
        font-size: 1.3rem;
        margin-top: -1.4rem;
        font-weight: 700;
    }

    input {
        font-size: 1.5rem;
        padding: .2rem 0;
        border: none;
        background-color: #F8F7FB;
        border-bottom: solid .2rem ${colors.purpleLight};
        color: ${colors.purpleLight};
        font-weight: 500;

        ::placeholder {
            color: ${colors.purpleLight};
            font-weight: 300;
        }

        :focus {
            outline: none;
            border-bottom: solid .2rem ${colors.orange};

            ::placeholder {
                color: transparent;
            }
        }
    }
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