import {Modal} from "rs-react-modal"

//Styles
import colors from "../styles/colors"

function ModalWindow ({ active, close }) {
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

    return (
        <Modal
            open = {active}
            modalContent = "Employee Created!"
            close = {close}
            style = {customStyle}
        />
    )
}

export default ModalWindow