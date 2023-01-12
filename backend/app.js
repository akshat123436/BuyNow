const express = require("express");
const errorMiddleware = require("./middlewares/error");
const app = express();
const product = require("./routes/productRoutes");
app.use(express.json());
app.use("/api/v1", product);

app.use(errorMiddleware);
module.exports = app;
