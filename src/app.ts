import express, { Application, Request, Response, json } from "express";
import sequelize from "./adapters/sequelize";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import bookRoutes from "./features/book/routes/book.routes";

// Load environment variables
dotenv.config();

const app: Application = express();
const port = process.env.SERVER_PORT || 3001;

// Connect to database
sequelize.sync({ force: true });

// Middlewares
app.use(cors());
app.use(json());

// Book routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
