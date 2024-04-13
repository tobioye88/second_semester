import { connect } from "./database/connection.js";
import app from "./index.js";
import { userSeeder } from "./seeder/user.seeder.js";

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

connect(MONGO_URL).then(() => {
  console.log("Connected to DB");
  userSeeder()
    .then()
    .catch((e) => console.error(e));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
