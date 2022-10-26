import express from "express"

const app = express()
const PORT = 8001

app.get("/questions",
    (req, res) => {
        console.log(req)
        res.send("TODO: Send quiz")
    }
);

app.post("/submit",
    (req, res) => {
        console.log(req)
        res.send("TODO: Process the answers and return a score")
    }
);

app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT}`))