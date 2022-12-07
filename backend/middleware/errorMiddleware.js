const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.orignalUrl}`);
  res.status(404);
  next(error);
};
const errorHandler = (req, res, next) => {
  const statusCode = res.status === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? NULL : err.stack,
  });
};
module.exports = { notFound, errorHandler };
