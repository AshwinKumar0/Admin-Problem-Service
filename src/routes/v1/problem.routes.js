const express = require('express');
const {problemController } = require('../../controllers')

const problemRouter = express.Router()

problemRouter.get('/ping',problemController.ping);  
problemRouter.get('/:id',problemController.getProblem);
problemRouter.get('/',problemController.getProblems);
problemRouter.post('/',problemController.addProblems);
problemRouter.delete('/:id',problemController.deleteProblem);
problemRouter.put('/:id',problemController.updateProblem);


module.exports = problemRouter;