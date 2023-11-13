const express = require('express')
const cookieParser = require("cookie-parser")
const app = express()
const errorMiddleware = require("./middlewares/error")
const cors = require('cors')
const bodyParser = require("body-parser");
const dotenv = require('dotenv');


//config env
dotenv.config({ path: "./config/config.env" })



app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");

app.use("/api/v1", userRoute);
app.use("/api/v1", productRoute);


//middleware for error
app.use(errorMiddleware)

module.exports = app