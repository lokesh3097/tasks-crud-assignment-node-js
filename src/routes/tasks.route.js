const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasks.controller');

router.get('/', taskController.get);

router.get('/count-by-status', taskController.getCountByStatus);

router.get('/metrics', taskController.getMetrics);

router.post('/', taskController.create);

router.put('/:id', taskController.update);

router.delete('/:id', taskController.remove);

module.exports = router;