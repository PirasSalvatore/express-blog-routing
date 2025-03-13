const express = require("express")
const app = express()
const port = 3000



app.listen(port, () => {
    console.log(`the blog server is run to port http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send("welcome to blog server")
})

