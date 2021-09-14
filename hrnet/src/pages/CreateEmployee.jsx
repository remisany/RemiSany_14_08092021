import styled from "styled-components"

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


function CreateEmployee () {
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
                <BUTTON>Save</BUTTON>
            </FORM>
        </main>
    )
}

export default CreateEmployee