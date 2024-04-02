const {StatusCodes} = require('http-status-codes');
const { route } = require('../routes');


function ping(req, res) {
    return res.json({message : 'problem controller is up'});
}

function addProblems(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "Not implemented"
    })
}

function getProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "Not implemented"
    })
}

function getProblems(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "Not implemented"
    });
}

function updateProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "Not implemented"
    })
}

function deleteProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "Not implemented"
    })
}

module.exports = {
    addProblems,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    ping
}