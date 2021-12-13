import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
app.use(morgan("dev"));

app.set("view engine", "pug");
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/user", userRouter);

const handleListening = () => console.log(`server ${PORT}`);

app.listen(PORT, handleListening);
