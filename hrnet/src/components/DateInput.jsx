import {Datepicker} from "rs-react-datepicker"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"

//Assets
import DoubleLeft from "../assets/double-left.svg"
import DoubleRight from "../assets/double-right.svg"
import Left from "../assets/left.svg"
import Right from "../assets/right.svg"

//Styles
import colors from "../styles/colors"

//Features
import { changeInput } from '../features/Form'

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

function DateInput ({ name }) {
    const id = name.replace("-", "")
    let placeholder = name.replace("-", "")
    placeholder = placeholder[0].toUpperCase() + placeholder.slice(1)
    const idDatepicker = name + "Datepicker"
    const [active, setActive] = useState(false)
    const storeChoice = useSelector((state) => state.Form[id])
    const dispatch = useDispatch()

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
        padding: "0",
        transform: "translateY(2rem)",
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
        const reset = () => {
            window.removeEventListener("click", close)
            window.removeEventListener("keydown", escape)
        }

        const changeChoice = () => {
            const choice = document.getElementById(name).value
            if (storeChoice !== choice) {
                dispatch(changeInput(id, choice))
                reset()
            }
        }

        const close = (e) => {
            changeChoice()
            const container = Array.from(document.querySelectorAll("#" + idDatepicker + " *"))
            if (container.indexOf(e.target) !== -1 || document.getElementById(idDatepicker) === e.target) {
            } else {
                if (document.getElementById(name).value === "") {
                    setActive(false)
                    reset()
                }
            }
        }

        const escape = (e) => {
            if (e.key === "Escape") {
                if (document.getElementById(name).value === "") {
                    setActive(false)
                    reset()
                    document.getElementById(name).blur()
                }
            }
        }

        active && window.addEventListener("click", close)
        active && window.addEventListener("keydown", escape)
    }, [active])

    return (
        <CONTAINER onClick = {() => setActive(true)}>
            {active && <label>{placeholder}</label>}
            <Datepicker
                date = {new Date()}
                id = {name}
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
                placeholder = {placeholder}
                doubleLeft = {DoubleLeft}
                doubleRight = {DoubleRight}
                left = {Left}
                right = {Right}
            />
        </CONTAINER>
    )

}

export default DateInput