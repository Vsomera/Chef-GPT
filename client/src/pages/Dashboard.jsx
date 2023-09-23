import Recipes from "../components/Recipes"
import Inputs from "../components/Inputs"
import Sidebar from "../components/Sidebar"
import axios from 'axios';
import { useState } from "react"


const Dashboard = () => {

    const [ingredient1, setIngredient1] = useState("")
    const [ingredient2, setIngredient2] = useState("")
    const [ingredient3, setIngredient3] = useState("")
    const [ingredient4, setIngredient4] = useState("")
    const [ingredient5, setIngredient5] = useState("")

    const [theme, setTheme] = useState("")

    const sendIngredients = async () => {
        const body = {
            "ingredients" : [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5]
            }

        const apiURL = 'http://localhost:5000/api/openapi'
        
        if (ingredient1 && ingredient2 && ingredient3 && ingredient4 && ingredient5) {
            const res = await axios.post(apiURL, body)
            console.log("req recieved")
            console.log(res.data)
        } else {
            // user needs to enter data
        }
    }

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-main">
                <Recipes />
                <Inputs 
                    ingredient1={ingredient1}
                    setIngredient1={setIngredient1}

                    ingredient2={ingredient2}
                    setIngredient2={setIngredient2}

                    ingredient3={ingredient3}
                    setIngredient3={setIngredient3}

                    ingredient4={ingredient4}
                    setIngredient4={setIngredient4}

                    ingredient5={ingredient5}
                    setIngredient5={setIngredient5}

                    theme={theme}
                    setTheme={setTheme}

                    sendIngredients={sendIngredients}
                />

            </div>
        </div>
    )
}

export default Dashboard