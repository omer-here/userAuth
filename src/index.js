// import {app} from './app'
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

//connection fuctions runs and in console it gives the status of it
connectDB()

// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
// })









console.log("Shru Allah ky nam sy")