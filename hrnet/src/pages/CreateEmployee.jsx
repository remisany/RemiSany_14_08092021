//Components
import SimpleInput from "../components/SimpleInput"

function CreateEmployee () {
    return (
        <main>
            <form>
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
            </form>
        </main>
    )
}

export default CreateEmployee