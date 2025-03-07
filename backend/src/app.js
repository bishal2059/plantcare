import express from "express";
import { createServer } from "http";
import ApiError from "./utils/apiError.js";
import cors from "cors";

import apiRoute from "./routes/index.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

const httpServer = createServer(app);

const logging = async (req, res, next) => {
  console.log(`Requested ${req.method} ${req.originalUrl} !!!`);
  next();
};

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api", logging, apiRoute);

app.use((req, res, next) => {
  throw new ApiError({
    status: 404,
    message: "URL not found!",
    errors: [
      {
        message: `Cannot ${req.method} ${req.originalUrl} !!!`,
      },
    ],
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status,
    message: err.message,
    errors: err.errors,
  });
});

export { app };

export default httpServer;
