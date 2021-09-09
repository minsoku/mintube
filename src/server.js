import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("I love node");
};

app.get("/", logger, handleHome);

const handleListening = () => console.log("server 4000");

app.listen(PORT, handleListening);
