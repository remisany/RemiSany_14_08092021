import styled from "styled-components"
import {useState} from "react"

//Components
import SimpleInput from "../components/SimpleInput"
import SelectStates from "../components/SelectStates"
import SelectDepartments from "../components/SelectDepartments"
import ModalWindow from "../components/ModalWindow"

//Styles
import colors from "../styles/colors"

const FORM = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
`

const BUTTON = styled.button`
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: ${colors.orange};
    cursor: pointer;
    border-radius: .3rem;
    background-color: ${colors.orange};
    color: ${colors.white};
`

function CreateEmployee () {
    const [active, setActive] = useState(false)

    const close = () => {
        setActive(!active)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        setActive(true)
    }

    return (
        <main>
            <FORM>
                <SimpleInput
                    type = "text"
                    id = "first-name"
                />
                <SimpleInput
                    type = "text"
                    id = "last-name"
                />
                <SimpleInput
                    type = "text"
                    id = "street"
                />
                <SimpleInput
                    type = "text"
                    id = "city"
                />
                <SimpleInput
                    type = "number"
                    id = "zip"
                />
                <SelectStates />
                <SelectDepartments />
                <BUTTON onClick = {(e) => handleSumbit(e)}>Save</BUTTON>
            </FORM>
            <ModalWindow
                active = {active}
                close = {close}
            />
        </main>
    )
}

export default CreateEmployee