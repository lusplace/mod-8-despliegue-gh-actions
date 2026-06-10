import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.NODE_ENV === "production"? process.env.PORT : 3000;
const app = express();

app.get("/", (req, res) => {
    res.send(`Hello world lulu on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} with a change`);
})