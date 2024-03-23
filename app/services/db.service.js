const { mongoose } = require("mongoose");
const { DB, ENVIRONMENT } = require("../../config/config");

class DbService {
  constructor() {
    // this.connect();
  }
  connect = async () => {
    try {
      if (ENVIRONMENT === "dev") {
        this.DB_URL =
          DB.PROTOCOL + "://" + DB.HOST + ":" + DB.PORT + "/" + DB.NAME;
      } else if (ENVIRONMENT === "prod") {
        DB_URL =
          DB.PROTOCOL +
          "://" +
          DB.USER +
          ":" +
          DB.PWD +
          "@" +
          DB.HOST +
          ":" +
          DB.PORT;
      }
      await mongoose.connect(this.DB_URL);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = DbService;
