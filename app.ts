import express from "express";
import { ErrorRequestHandler } from "express";


import filmRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let getCounter = 0;
app.use((_req, _res, next) => {
    
    console.log(
        "GET counter : " + getCounter++);
    next();
});

app.use("/films",filmRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    return res.status(500).send("Something broke!");
  };

  app.use(errorHandler);

export default app;
