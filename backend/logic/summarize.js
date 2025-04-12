const GoogleGenAI = require("@google/genai")
require("dotenv").config();

const summarize = (resource) => {
    return new Promise(async (resolve, reject) => {
        try {

            const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

            async function main() {
                const response = await ai.models.generateContent({
                    model: "gemini-2.0-flash",
                    contents: `use this resource link ${resource} and create a summary of it with keywords as searchable tags for the topic of resource. Give response in the from of an object schema. 
                    response :
                    {
                    "summary":"Summary of the resource requested",
                    "Tags":"Searchable Keywords from the content in the form of an array"
                    }`
                })
                console.log(response.text);
                resolve(response.text)
            }
        }
        catch (err) {
            reject(err)
        }
    })
}

module.exports = summarize;