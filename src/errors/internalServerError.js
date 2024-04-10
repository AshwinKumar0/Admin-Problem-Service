const baseError = require("./baseError");
const { StatusCodes } = require("http-status-codes");
class internalServerError extends baseError {
    constructor(details) {
        super('InternalServerError', StatusCodes.INTERNAL_SERVER_ERROR, `Something went wrong ${details}`);
    }
}

module.exports = internalServerError;