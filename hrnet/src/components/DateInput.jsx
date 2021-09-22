import {Datepicker} from "rs-react-datepicker"
import { useState, useEffect } from "react"
import styled from "styled-components"

//Assets
import DoubleLeft from "../assets/double-left.svg"
import DoubleRight from "../assets/double-right.svg"
import Left from "../assets/left.svg"
import Right from "../assets/right.svg"

//Styles
import colors from "../styles/colors"

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
`

function DateInput ({ name }) {
    const [active, setActive] = useState(false)

    const customInput = {
        width: "100%"
    }

    const customDatePicker = {
        width: "100%",
        backgroundColor: colors.white,
        border: "solid .2rem",
        borderColor: colors.orangeLight,
        borderRadius: ".5rem",
        marginTop: ".5rem",
        color: colors.purpleDark,
        zIndex: "2",
        padding: "0"
    }

    const customHeader = {
        color: colors.purpleDark,
        backgroundColor: colors.orangeLight 
    }

    const customNumberDay = {
        fontSize: "1.5rem",
        padding: ".5rem 0"
    }

    const customNameDay = {
        fontSize: "1.5rem",
        color: colors.purpleDark,
        backgroundColor: colors.orangeLight 
    }

    const customOutsideDay = {
        color: colors.purpleDark,
        fontWeight: "300",
        fontSize: "1.5rem",
        padding: ".5rem 0"
    }

    const customSelectedDay = {
        fontSize: "1.5rem",
        backgroundColor: colors.orangeLight,
        borderRadius: ".5rem",
        padding: ".5rem 0"
    }

    const customYear = {
        fontSize: "2.5rem",
    }

    const customMonth = {
        fontSize: "1.5rem",
    }

    const customHover = {
        backgroundColor: colors.orange,
        borderRadius: ".5rem"
    }

    useEffect((e) => {
        const close = (e) => {
            if (!e.target.classList.contains("in")) {
                setActive(false)
                window.removeEventListener("click", close)
            }
        }

        active && window.addEventListener("click", close)
    })

    return (
        <CONTAINER onClick= {() => setActive(true)}>
            {active && <label>{name}</label>}
            <Datepicker
                date = {new Date()}
                styleInput = {customInput}
                styleDatePicker = {customDatePicker}
                styleNumberDay = {customNumberDay}
                styleNameDay = {customNameDay}
                styleOutsideDay = {customOutsideDay}
                styleSelectedDay = {customSelectedDay}
                styleHeader = {customHeader}
                styleYear = {customYear}
                styleMonth = {customMonth}
                styleHover = {customHover}
                placeholder = {name}
                doubleLeft = {DoubleLeft}
                doubleRight = {DoubleRight}
                left = {Left}
                right = {Right}
            />
        </CONTAINER>
    )

}

export default DateInput