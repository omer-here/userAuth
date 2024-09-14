import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

//app.use() is usually use for the configuration of the app

//cors configuration
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credential: true,
}
))

//limiting the getting(req) data size
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

//the usage is to access and update/set cookies on user browser
app.use(cookieParser())

export { app }