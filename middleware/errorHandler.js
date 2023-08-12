const CustomAPIError = require("../utils/custom-error");
const errorhandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json(err.message);
  }
  console.log(err);
  return res.status(505).json(`Something went wrong`);
};

module.exports = errorhandler;

// export class CustomAPIError extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }
