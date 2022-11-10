const boomErrorHandler = (error, req, res, next) => {
  if (error.isBoom) {
    const { output: { payload } } = error
    res.status(payload.statusCode).json({
      message: payload.message,
      error: payload.error
    })
  } else {
    next(error)
  }
}

module.exports = boomErrorHandler
