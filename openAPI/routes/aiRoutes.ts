import express, { Request, Response } from "express"
import aiController from "../controllers/aiController"
const router = express.Router()

// @ desc  GET recipe from chatGPT API
// @ route GEY /api/openapi
router.get("/", aiController.getRecipe)

module.exports = router