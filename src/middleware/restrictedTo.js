// Utils
import AppError from "../utils/appError.js";

const restrictedTo =
  (...roles) =>
  (req, res, next) => {
    const role = req.cookies?.token;
    if (!roles.includes(role.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };

export default restrictedTo;
