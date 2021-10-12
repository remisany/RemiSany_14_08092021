import React from "react";

//Components
import Table from "../components/Table";

import "../styles/table.css";

/**
* @returns {component} - Current employees page with table
*/

function CurrentEmployees () {
    return (
        <main>
            <Table />
        </main>
    );
};

export default CurrentEmployees;