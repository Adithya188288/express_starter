exports.handle404 = (req, res, next) => {
  res.status(404).send("This route does not exists")
}
