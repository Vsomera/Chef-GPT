import { Request, Response, response } from "express"
import OpenAI from "openai"

const OPENAPI_KEY = "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"

const openai = new OpenAI({
    apiKey: OPENAPI_KEY
})

const getRecipe = async (req: Request, res: Response) => {
    try {

        const { ingredients } = req.body

        if (ingredients) {
            const stream = await openai.chat.completions.create({
                // returns messages from chatGPT
                model: "gpt-3.5-turbo",
                messages: [{
                    "role": "user",
                    "content": `
                    Given the list of these ingredients, give me a recipe based off of Mexican Cuisine:
                        ${ingredients}
                    `
                }]
            }).then(res => {
                return res.choices[0].message.content // returns message from Chat GPT
            })

            return res.status(200).json({
                message: stream
            })

        } else {
            return res.status(400).json({
                message : "Could not generate recipe",
                error : "No indgredients were given"
            })
        }

    } catch (err) {
        return res.status(400).json({
            err
        })
    }
}

export default {
    getRecipe
}