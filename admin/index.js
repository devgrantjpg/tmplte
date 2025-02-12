import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";
import checkout from "./routes/checkout.js";

const port = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("You might not be in the right place");
});

app.use("/", checkout);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
