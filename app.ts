import express from "express";
import bodyParser from "body-parser";
import sequelize from "@adapters/sequelize";

// Import routes
import bookRoutes from "@features/book/routes/book.routes";

const app = express();
const port = process.env.PORT || 3000;

sequelize.sync();
app.use(bodyParser.json());

// Book routes
app.use(bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
