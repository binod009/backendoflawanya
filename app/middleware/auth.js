const jwt = require("jsonwebtoken");
const UserService = require("../services/user.Service");
let user_svc = new UserService();
const Auth = async (req, res, next) => {
  try {
    let token = null;
    if (req.headers["authorization"] || req.headers["x-xsrf-token"]) {
      token = req.headers["authorization"];
    } else if (req.query["token"]) {
      token = req.query["token"];
    }
    if (token === null) {
      next({ status: 401, msg: "Token not Provided" });
    } else {
      let str_split = token.split(" ");
      token = str_split.pop();
      if (token === null) {
        next({ status: 401, msg: "token not Provided" });
      } else {
        let data = jwt.verify(token, process.env.JWT_KEY);

        let auth_user = await user_svc.getUserById(data.user_id);
        if (auth_user) {
          req.auth_user = auth_user;
          next();
        } else {
          next({ staus: 403, msg: "Token Invalid !" });
        }
      }
    }
  } catch (excp) {
    next({ status: 404, msg: excp });
  }
};

module.exports = Auth;
