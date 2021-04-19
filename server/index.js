import "dotenv/config.js";
import path from "path";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
const PORT = process.env.PORT || 8080;
const __dirname = path.resolve();

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));
const app = express();
app.use(express.static(path.resolve(__dirname, "../motoreasyfrontend/build")));
app.use("/api", routes);
app.use(express.json());
app.get(
  "*",
  (req,res) => {
    res.sendFile(
      path.resolve(__dirname, "../motoreasyfrontend/build", "index.html")
    );
  });
const db = mongoose.connection;
mongoose.set("bufferCommands", false);
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected");
});
app.listen(PORT, () => {
  console.log("Server has started");
});
