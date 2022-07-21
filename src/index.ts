import { json } from "body-parser";
import express from "express";
import { database } from "./db/conn";
import { userRouter } from "./routes/user_routes";

const app = express();

var port = 3000;

app.use(json());

app.use(userRouter);

database;

app.listen(port, function () {
  console.log("Running RestHub on port", +port);
});
