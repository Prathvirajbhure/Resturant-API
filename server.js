const express = require('express');
//rest object
const app = express();
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
//dot en configuration 
dotenv.config();
//DB connection
connectDb();

//middlewares
app.use(cors());
//Accessing client JSON data 
app.use(express.json());
app.use(morgan("dev"))


//route
app.use('/api/v1/auth', require("./routes/authRoutes"))
app.use("/api/v1/user", require("./routes/userRoutes"))
app.use("/api/v1/resturant", require("./routes/resturantRoutes"))
app.use("/api/v1/category", require("./routes/categoryRoutes"))
app.use("/api/v1/food", require("./routes/foodRoutes"))



//route
// URL => http://localhost:8080
app.get('/', (req, res) => {
    res.status(200).send("<h1>Welcome to Food server App</h1>")
})

//port
const PORT = process.env.PORT || 3000;
//listen
app.listen(PORT, () => {
    console.log(`Node Server running  ${PORT}`.white.bgMagenta)
})