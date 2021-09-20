import { useState } from "react"
import { Select } from "rs-react-select"
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
    `

function SelectDepartments () {
    const [active, setActive] = useState(false)

    const departments = [
        "Sales",
        "Marketing",
        "Engineering",
        "Human Resources",
        "Legal"
    ];

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
    }

    const customOption = {
        fontSize: "1.5rem",
        color: colors.purpleLight,
        width: "100%",
        padding: ".5rem",
    }

    const customPlaceholder = {
        fontSize: "1.5rem",
        fontWeight: "300",
        color: colors.purpleLight
    }

    const customOptionSelected = {
        fontWeight: "500",
        fontSize: "1.5rem",
        color: colors.purpleLight
    }

    return (
        <CONTAINER>
            {active ? <label>Department</label> : null}
            <Select
                hoverBackground = {colors.orangeLight}
                options = {departments}
                styleContainer = {customContainer}
                styleList = {customList}
                styleOption = {customOption}
                styleOptionSelected = {customOptionSelected}
                stylePlaceholder= {customPlaceholder}
                styleSelectMenu = {customSelectMenu}
            />
        </CONTAINER>
    )
}

export default SelectDepartments