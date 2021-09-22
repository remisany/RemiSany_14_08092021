import { useState, useEffect } from "react"
import {Select} from "rs-react-select"
import styled from "styled-components"

//Assets
import Up from "../assets/caret-up-solid.svg"
import Down from "../assets/caret-down-solid.svg"

//Styles
import colors from "../styles/colors"

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
`

function SelectMenu ({ options, name }) {
    const [active, setActive] = useState(false)

    const customContainer = {
        position: "relative",
        borderBottom: "solid .2rem",
        borderColor: colors.purpleLight,
    }

    const customSelectMenu = {
        width: "100%",
        padding: "0",
        border: "none",
    }

    const customList = {
        position: "absolute",
        background: colors.white,
        width: "100%",
        border: "none",
        borderTop: "solid .2rem",
        borderColor: colors.orange,
        zIndex: "4"
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
        const close = (e) => {
            const choice = e.target.innerHTML
            if (options.indexOf(choice) !== -1) {
                console.log(choice)
            }
            setActive(false)
            window.removeEventListener("click", close)
        }

        active && window.addEventListener("click", close)
    })

    return (
        <CONTAINER onClick= {() => setActive(true)}>
            {active && <label>{name}</label>}
            <Select
                down = {Down}
                placeholder = {name}
                hoverBackground = {colors.orangeLight}
                options = {options}
                styleContainer = {customContainer}
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