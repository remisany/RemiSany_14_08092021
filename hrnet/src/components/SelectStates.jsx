import {Select} from "rs-react-select"

//Styles
import colors from "../styles/colors"

function SelectStates () {
    const states = [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District Of Columbia",
        "Federated States Of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Islands",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
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
        color: colors.purpleLight
    }

    return (
        <Select
            options = {states}
            styleContainer = {customContainer}
            styleList = {customList}
            styleOption = {customOption}
            styleOptionSelected = {customOptionSelected}
            stylePlaceholder= {customPlaceholder}
            styleSelectMenu = {customSelectMenu}
        />
    )
}

export default SelectStates