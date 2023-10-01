const tasks = require('../services/tasks.service');

async function get(req, res, next) {
    try {
        res.json(await tasks.getAll(req.query.page));
    } catch (err) {
        console.error('Error while getting tasks', err.message);
        next(err);
    }
}

async function getCountByStatus(req, res, next) {
    try {
        res.json(await tasks.getCountByStatus());
    } catch (err) {
        console.error('Error while getting tasks', err.message);
        next(err);
    }
}

async function getMetrics(req, res, next) {
    try {
        const startMonth = req.body.startMonth;
        const startYear = req.body.startYear;
        const endMonth = req.body.endMonth;
        const endYear = req.body.endYear;
        res.json(await tasks.getMetrics(startMonth, startYear, endMonth, endYear));
    } catch (err) {
        console.error('Error while getting tasks', err.message);
        next(err);
    }
}

async function create(req, res, next) {
    try {
        const task = req.body.task;
        res.json(await tasks.create(task));
    } catch (err) {
        console.error('Error while creating task', err.message);
        next(err);
    }
}

async function update(req, res, next) {
    try {
        const id = req.params.id;
        const task = req.body.task;
        res.json(await tasks.update(id, task));
    } catch (err) {
        console.error('Error while updating task', err.message);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        const id = req.params.id;
        res.json(await tasks.remove(id));
    } catch (err) {
        console.error('Error while deleting task', err.message);
        next(err);
    }
}

module.exports = {
  get,
  create,
  update,
  remove,
  getCountByStatus,
  getMetrics
};