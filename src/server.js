import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("hello World");
};

app.get("/", handleHome);

const handleListening = () => console.log("server 4000");

app.listen(PORT, handleListening);
