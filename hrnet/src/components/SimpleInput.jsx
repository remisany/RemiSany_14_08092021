import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//Features
import { changeInput } from "../features/Form";

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
`

/**
* @param {object} props - Props
* @param {string} type - To assign input type
* @param {string} name - To customize input id and input placeholder
* @returns {component} - Input
*/

function SimpleInput ({ type, name }) {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);

    //Format label
    const label = (name[0].toUpperCase() + name.slice(1)).replace("-", " ");

    //Format id
    const id = name.replace("-", "");

    //Get the store value
    const storeChoice = useSelector((state) => state[id]);

    //Set active to false if input value is empty and click outside
    //Update the store
    const close = (e) => {
        if (document.getElementById(id).value === "") {
            setActive(false);
        } else {
            const choice = e.target.value;
            if (storeChoice !== choice) {
                dispatch(changeInput(id, choice));
            };
        };
        window.removeEventListener("click", close);
    };

    return (
        <CONTAINER>
            {active && <label>{label}</label>}
            <input
                type = {type}
                id = {id}
                placeholder = {label}
                onFocus = {() => setActive(true)}
                onBlur = {(e) => close(e)}
            />
        </CONTAINER>
    );
};

export default SimpleInput;