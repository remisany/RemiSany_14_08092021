import { NavLink } from "react-router-dom";
import styled from "styled-components";

//Styles
import colors from "../styles/colors";

const HEADER = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;

    h1 {
        font-size: 5rem;
        color: ${colors.purpleDark};
        font-weight: 700;
    }

    nav {
        display: flex;
        align-items: center;
        column-gap: 3rem;
    }

    p {
        font-size: 1.5rem;
    }
`

const NAVLINK = styled(NavLink)`
    font-size: 1.5rem;
    text-decoration: none;
    color: ${colors.purpleLight};

    &.active {
        color: ${colors.orange};
        font-weight: 700;
    }
`

/**
* @returns {component} - Header with name and nav menu
*/

function Header () {
    return (
        <HEADER>
            <h1>HRnet</h1>
            <nav>
                <NAVLINK exact to = "/" >Create Employee</NAVLINK>
                <p>|</p>
                <NAVLINK to = "/current-employees">Current Employees</NAVLINK>
            </nav>
        </HEADER>
    );
};

export default Header;