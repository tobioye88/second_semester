import dotenv from "dotenv";
import express from "express";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/users.route.js";
import { authMiddleware } from "./middleware/auth.middleware.js";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/auth", authRoute);
app.use(authMiddleware);
app.use("/users", userRoute);

// catch all route
app.all("*", (req, res) => {
  res.status(404);
  res.json({
    message: "Not found",
  });
});

// mongoose.connect(MONGO_URL).then(() => {
//   console.log("Connected to DB");
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// });

export default app;
