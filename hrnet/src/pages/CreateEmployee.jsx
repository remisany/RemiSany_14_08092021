import styled from "styled-components"
import {useState} from "react"
import {Modal} from "rs-react-modal";

//Components
import SimpleInput from "../components/SimpleInput"

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
const customStyle = {
    content : {
        fontSize: "1.5rem",
        color: colors.purpleLight,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        rowGap: "2rem",
        margin: "25rem auto",
        maxWidth: "50rem",
        background: colors.white,
        padding: "2rem",
        alignItems: "center",
        borderRadius: ".3rem"
      },

    button : {
        fontSize: "2rem",
        cursor: "pointer",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: colors.orange,
        color: colors.white,
        borderColor: colors.orange,
        width: "12rem",
        padding: "1rem",
        borderRadius: ".3rem"
    }
}

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
                <BUTTON onClick = {(e) => handleSumbit(e)}>Save</BUTTON>
            </FORM>
            <Modal
                open = {active}
                modalContent = "Employee Created!"
                close = {close}
                style = {customStyle}
            />
        </main>
    )
}

export default CreateEmployee