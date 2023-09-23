import express from "express"
import dotenv from "dotenv"
import 'dotenv/config'
import cors from 'cors'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

// Rest API Routes
app.use("/api/openapi", require("./routes/aiRoutes"))

app.listen(port, () => {
    console.log(`Development : Server running on http://localhost:${port}`)
})
