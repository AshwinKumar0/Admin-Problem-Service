const baseError = require("./baseError");
const { StatusCodes } = require('http-status-codes');
class badRequest extends baseError {
    constructor(propertyName,details){
        super('badRequest',StatusCodes.BAD_REQUEST,`Invalid structure ${propertyName} provided `,details);
    }
}

module.exports = badRequest;