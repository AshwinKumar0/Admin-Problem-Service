function ping(req, res) {
    return res.json({message : 'problem controller is up'});
}

function addProblems(req, res){

}

function getProblem(req, res){

}

function getProblems(req, res){

}

function updateProblem(req, res){

}

function deleteProblem(req, res){

}

module.exports = {
    addProblems,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    ping
}