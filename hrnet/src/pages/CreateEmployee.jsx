import styled from "styled-components";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

//Components
import DateInput from "../components/DateInput";
import SimpleInput from "../components/SimpleInput";
import ModalWindow from "../components/ModalWindow";
import SelectMenu from "../components/SelectMenu";

//Datas
import states from "../datas/states";
import departments from "../datas/departments";

//Styles
import colors from "../styles/colors";

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

const FIELDSET = styled.fieldset`
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
    margin: -.5rem -1rem;
    padding: 1.5rem 1rem;

    border: solid.2rem ${colors.orangeLight};

    legend {
        color: ${colors.orangeLight};
        margin: 0 auto;
        padding: 0 .5rem;
        font-size: 1.5rem;
    }
`

/**
* @returns {component} - Create employee page with form
*/

function CreateEmployee () {
    const [active, setActive] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const store = useSelector((state) => state);

    //Update local storage
    const updateEmployees = () => {
        let storage = JSON.parse(localStorage.getItem("Employee"));
        storage === null ? storage = [store] : storage.push(store);
        localStorage.setItem("Employee", JSON.stringify(storage));
    };

    //Set active to false and redirect to current employees (after close modal)
    const close = () => {
        setActive(!active);
        setRedirect(true);
    };

    //Set active to true (open modal) and call function to update the local storage
    const handleSumbit = (e) => {
        e.preventDefault();
        setActive(true);
        updateEmployees();
    };

    return (
        <Fragment>
            {redirect && <Redirect to = "/current-employees" />}

            <main>
                <FORM>
                    <SimpleInput
                        type = "text"
                        name = "first-name"
                    />
                    <SimpleInput
                        type = "text"
                        name = "last-name"
                    />
                    <DateInput
                        name = "birth-date"
                    />
                    <DateInput
                        name = "start-date"
                    />
                    <FIELDSET>
                        <legend>Address</legend>
                        <SimpleInput
                            type = "text"
                            name = "street"
                        />
                        <SimpleInput
                            type = "text"
                            name = "city"
                        />
                        <SimpleInput
                            type = "number"
                            name = "zip"
                        />
                        <SelectMenu
                            options = {states}
                            name = "State"
                        />
                    </FIELDSET>
                    <SelectMenu
                            options = {departments}
                            name = "Department"
                    />
                    <BUTTON onClick = {(e) => handleSumbit(e)}>Save</BUTTON>
                </FORM>
                <ModalWindow
                    active = { active }
                    close = { close }
                />
            </main>
        </Fragment>
    );
};

export default CreateEmployee;