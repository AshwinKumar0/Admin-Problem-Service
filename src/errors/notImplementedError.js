const baseError = require("./baseError");
const { StatusCodes } = require('http-status-codes');
class notImplemented extends baseError {
    constructor(methodName) {
        super('NotImplemented',StatusCodes.NOT_IMPLEMENTED,`${methodName} Not Implemented`,{});
    }
}

module.exports = notImplemented;