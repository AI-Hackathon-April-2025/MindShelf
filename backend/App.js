const express = require("express")
const app = express()
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const { summarize } = require("./routes")

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.use("/api", summarize)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));