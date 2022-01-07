const express = require("express");
const cors = require("cors");
const app = express();
const Port = process.env.PORT || 8080;
const hostName = "127.0.0.1";

app.set("port", Port);

app.use(cors());

app.get("/", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Jason",
            gender: "Man",
            age: 32,
        },
        {
            id: 2,
            name: "John",
            gender: "Man",
            age: 27,
        },
        {
            id: 3,
            name: "Serha",
            gender: "Woman",
            age: 25,
        },
    ];
    res.send(products);
});

app.listen(app.get("port"), () => {
    console.log(`Server is running at (http://${hostName}:${Port})`);
});
