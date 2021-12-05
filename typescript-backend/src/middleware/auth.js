const jwt = require("jsonwebtoken");
let helper = require("../helpers/Helper");
const logger = helper.getLogger("JWTAuth");
const config = require(__dirname + "./../config." + process.env.NODE_ENV);

const secretKey = config.SECRET_KEY;

const jsonwtSign = data => {
  return jwt.sign(data, secretKey, { expiresIn: "1h" });
};

const verify = async (req, res, next) => {
  if (!req.headers.authorization) {
    logger.error("Auth token not available");
    const response = await helper.getErrorMessage("Auth token not available");
    return res.status(401).json(response);
  }

  let header = req.headers.authorization;

  try {
    logger.debug(
      "\n\n ================\n\n%s\n\n=================\n\n",
      header
    );
    jwt.verify(header, secretKey, async (err, verify) => {
      if (err) {
        logger.error(err);
        const response = await helper.getErrorMessage(err);
        return res.status(401).json(response);
      }
      return next();
    });
  } catch (error) {
    logger.error(error + " Token Received " + header);
    const response = await helper.getErrorMessage(
      "Auth token failed or invalid"
    );
    return res.status(401).json(response);
  }
};

exports.verify = verify;
exports.jsonwtSign = jsonwtSign;
