import MUIDataTable from "mui-datatables";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { useState } from "react"

//Styles
import colors from "../styles/colors"

function Table() {
  const [ListEmployees, setListEmployees] = useState(JSON.parse(localStorage.getItem("Employee")))

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
  )
}

export default Table

/*
const data = [
  {
    firstname: "Joe",
    lastname: "James",
    startdate: "01/08/2012",
    department: "Sales",
    birthdate: "01/05/1990",
    street: "3425 Stone Street",
    city: "Yonkers",
    state: "NY",
    zip: "1"
  },
  {
    firstname: "John",
    lastname: "Walsh",
    startdate: "03/04/2008",
    department: "Marketing",
    birthdate: "07/12/1987",
    street: "607 Heart Street",
    city: "Hartford",
    state: "CT",
    zip: "2"
  },
  {
    firstname: "Bob",
    lastname: "Herm",
    startdate: "10/04/2001",
    department: "Engineering",
    birthdate: "12/02/1978",
    street: "33 Butterfly Street",
    city: "Tampa",
    state: "FL",
    zip: "3"
  },
  {
    firstname: "James",
    lastname: "Houston",
    startdate: "05/21/2010",
    department: "Human Ressources",
    birthdate: "10/18/1994",
    street: "6 Monkey Street",
    city: "Dallas",
    state: "TX",
    zip: "4"
  },
];*/