import { useState } from "react"
import {Select} from "rs-react-select"
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'

//Assets
import Up from "../assets/caret-up-solid.svg"
import Down from "../assets/caret-down-solid.svg"

//Styles
import colors from "../styles/colors"

//Features
import { changeSelectMenu } from '../features/Form'

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
`

function SelectMenu ({ options, name }) {
    const dispatch = useDispatch()
    const id = name.toLowerCase()
    const storeChoice = useSelector((state) => state.Form[id])

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

    const changeChoice = (e) => {
            const choice = e.target.innerHTML
            console.log(storeChoice)
            if (options.indexOf(choice) !== -1) {
                if (storeChoice !== choice) {
                    dispatch(changeSelectMenu(id, choice))
                }
            }
    }

    return (
        <CONTAINER
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