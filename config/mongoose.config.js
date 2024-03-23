const mongoose = require("mongoose");
const { DB, ENVIRONMENT } = require("./config");
let DB_URL = process.env.MONGO_URL;

// if (ENVIRONMENT === "dev") {
//   DB_URL = DB.PROTOCOL + "://" + DB.HOST + ":" + DB.PORT + "/" + DB.NAME;
// } else if (ENVIRONMENT === "prod") {
//   DB_URL =
//     DB.PROTOCOL +
//     "://" +
//     DB.USER +
//     ":" +
//     DB.PWD +
//     "@" +
//     DB.HOST +
//     ":" +
//     DB.PORT;
// }
mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => {
    throw err;
  });
