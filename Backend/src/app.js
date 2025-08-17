import express from "express"
import cors from "cors"
import router from "./routes/report.route.js"
import { ApiError } from "./utils/ApiError.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1", router)

app.use((req, res, next) => {
    next(new ApiError(404, "Route not found."))
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        success: false,
        message: err.message,
        errors: err.error || [],
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
});



export default app