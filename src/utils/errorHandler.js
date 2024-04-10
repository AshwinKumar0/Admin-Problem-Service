const { StatusCodes } = require("http-status-codes");
const baseError = require("../errors/baseError");

function errorHandler(err, req, res, next) {
    if(err instanceof baseError) {
        return res.status(err.statusCode).json({
            success : false,
            message : err.message,
            error : err.details,
            data : {}
        });
    }

    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        success : false,
        message : 'Somtething went wrong',
        error : err,
        data : {}
    });
}

module.exports = errorHandler;