import express from "express";
import userRoutes from "./routes/routes.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/usuarios", userRoutes);

app.use(errorHandler);

export default app;
