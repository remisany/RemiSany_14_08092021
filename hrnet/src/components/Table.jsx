import MUIDataTable from "mui-datatables";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";

//Styles
import colors from "../styles/colors";

/**
* @returns {component} - Table with current employees
*/

function Table() {
  //Get the local storage
  const storage = JSON.parse(localStorage.getItem("Employee"));
  const [ListEmployees, setListEmployees] = useState(storage !== null ? storage : []);

  //Column datas
  const columns = [
    {
      name: "firstname",
      label: "First name",
    },
    {
      name: "lastname",
      label: "Last name",
    },
    {
      name: "startdate",
      label: "Start date",
    },
    {
      name: "department",
      label: "Department",
    },
    {
      name: "birthdate",
      label: "Birth date",
    },
    {
      name: "street",
      label: "Street",
    },
    {
      name: "city",
      label: "City",
    },
    {
      name: "state",
      label: "State",
    },
    {
      name: "zip",
      label: "Zip",
    },
  ];

  //Custom style
  const getMuiTheme = () => createTheme({
    overrides: {
      MUIDataTable: {
        paper: {
          backgroundColor: colors.white,
          color: colors.purpleLight,
          boxShadow: "none"
        },
      },
      MUIDataTableToolbar: {
        root: {
          minHeight: "0"
        }
      },
      MUIDataTableSearch: {
        main: {
          display: "flex",
          alignItems: "center"
        },
        searchText: {
          transform: "TranslateY(.5rem)",
          border: "none",
          "& input": {
            fontSize: "1.5rem",
            padding: ".2rem 0",
            color: colors.purpleLight,
            fontWeight: "500"
          },
        },
      },
      MUIDataTableHeadCell: {
        fixedHeader : {
          backgroundColor: colors.white,
          borderBottom: "solid .2rem rgba(240, 67, 41, .3)",
        },
        data: {
          fontSize: "1.5rem",
          color: colors.purpleLight,
          fontWeight: 700,
          "&:hover" : {
            color: colors.orange,
          }
        },
        sortActive : {
          color: colors.purpleLight,
        },
        toolButton: {
          "&:hover" : {
            backgroundColor: "transparent",
          }
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: colors.white,
          color: colors.purpleLight,
          borderColor: colors.orangeLight,
          fontSize: "1.5rem",
          fontWeight: 300
        },
      },
      MUIDataTablePagination: {
        root: {
          backgroundColor: colors.white,
          color: colors.purpleLight
        },
        toolbar: {
          fontSize: "1.5rem",
          "& p": {
            fontSize: "1.5rem",
          }
        },
        selectRoot: {
        }
      },
    },
  });
  
  //Datatable options
  const options = {
    filter: false,
    print: false,
    download: false,
    viewColumns: false,
    selectableRowsHeader: false,
    selectableRows: false,
  };

  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title = ""
        data = {ListEmployees}
        columns = {columns}
        options = {options}
      />
    </MuiThemeProvider>
  );
};

export default Table;