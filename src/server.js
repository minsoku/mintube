import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
app.use(morgan("dev"));

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("edit user");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("watch video");
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);

app.use("/videos", videoRouter);

app.use("/user", userRouter);

const handleListening = () => console.log(`server ${PORT}`);

app.listen(PORT, handleListening);
