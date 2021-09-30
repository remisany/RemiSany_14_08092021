import { useEffect, useState } from "react"
import {Select} from "rs-react-select"
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'

//Assets
import Up from "../assets/caret-up-solid.svg"
import Down from "../assets/caret-down-solid.svg"

//Styles
import colors from "../styles/colors"

//Features
import { changeInput } from '../features/Form'

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom: solid .2rem ${colors.purpleLight};

    :focus {
        border-bottom: solid .2rem ${colors.orange};
    }
`

function SelectMenu ({ options, name }) {
    const dispatch = useDispatch()
    const id = name.toLowerCase()
    const storeChoice = useSelector((state) => state.Form[id])

    const [active, setActive] = useState(false)

    const customSelectMenu = {
        width: "100%",
        padding: "0",
        border: "none"
    }

    const customList = {
        position: "absolute",
        background: colors.white,
        width: "100%",
        border: "none",
        zIndex: "4",
        transform: "translateY(2rem)",
        borderTop: "solid .2rem",
        borderColor: colors.orange,
    }

    const customOption = {
        fontSize: "1.5rem",
        color: colors.purpleLight,
        width: "100%",
        padding: ".5rem"
    }

    const customPlaceholder = {
        fontSize: "1.5rem",
        fontWeight: "300",
        color: colors.purpleLight
    }

    const customOptionSelected = {
        fontWeight: "500",
        fontSize: "1.5rem",
        padding: ".2rem 0",
        color: colors.purpleLight
    }

    useEffect((e) => {
        const close = () => {
            if (document.querySelector("#" + name + " span").innerHTML === name) {
                setActive(false)
            }
            window.removeEventListener("click", close)
        }

        active && window.addEventListener("click", close)
    }, [active])

    const changeChoice = (e) => {
        const choice = e.target.innerHTML
        if (options.indexOf(choice) !== -1) {
            if (storeChoice !== choice) {
                dispatch(changeInput(id, choice))
            }
        }
    }

    return (
        <CONTAINER id = {name}
            onClick = {(e) => {
                setActive(true)
                changeChoice(e)
            }}>
            {active && <label>{name}</label>}
            <Select
                down = {Down}
                placeholder = {name}
                hoverBackground = {colors.orangeLight}
                options = {options}
                styleList = {customList}
                styleOption = {customOption}
                styleOptionSelected = {customOptionSelected}
                stylePlaceholder= {customPlaceholder}
                styleSelectMenu = {customSelectMenu}
                up = {Up}
            />
        </CONTAINER>
    )
}

export default SelectMenu