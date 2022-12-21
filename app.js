const express = require("express");
const app = express();


app.use(express.static("Public"));
app.listen(process.env.PORT || 3000, function() {console.log("Servidor corriendo");});
app.get("/", (_, res)=>{res.sendFile(__dirname + "/views/index.html")});

