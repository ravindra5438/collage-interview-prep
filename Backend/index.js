const express = require("express");
const config = require("dotenv").config;
config();
const authRoutes = require("./routes/auth.js");
const mongoConnect = require("./config/db.js");
const app = express();
const port = process.env.PORT || 5000;

mongoConnect();

app.use(express.json());

app.get("/api", (req, res) => {
    res.status(200).json({ error: false, message: "API is working" });
});

app.use("/",authRoutes);


app.listen(port,() => {
    console.log(`Server is listenning to port ${port}`);
})