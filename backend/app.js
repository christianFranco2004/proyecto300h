import express from "express";
import dotenv from "dotenv";
import { connectionMongo } from "./src/config/dataBase.js";
import { productRouter } from "./src/routes/product.routes.js";
import { orderRouter } from "./src/routes/order.routes.js";
import { usersRouter } from "./src/routes/user.routes.js";
import loginRouter from "./src/routes/login.routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();
connectionMongo ();
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); 
app.use('/productos', productRouter);
app.use("/ordenes", orderRouter);
app.use('/usuarios', usersRouter);
app.use('/iniciarSesion', loginRouter);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

const port = process.env.PORT;

app.listen (port, ()=> {
    console.log("se esta ejecutando el puerto " + port)
});  