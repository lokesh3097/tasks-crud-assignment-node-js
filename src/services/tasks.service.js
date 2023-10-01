const db = require('./db.service');

async function getAll(page) {
    const limitPerPage = 10;
    const offset = (page-1)*limitPerPage;
    let sql = "SELECT * FROM tasks LIMIT ?, ?;";

    const rows = await db.query(sql, [offset, limitPerPage]);

    // console.log("ROWS: ", rows);

    let resObj = {
        data: rows,
        page: page
    }

    return resObj;
}

async function getCountByStatus() {
    const sql = "SELECT COUNT(*) as count, status FROM tasks GROUP BY status";
    const rows = await db.query(sql, null);

    // console.log("COUNT BY Status: ", rows);

    // Ideally we should get the types of status from the DB and then prepare the result object
    let resObj = {
        'open_tasks': 0,
        'inprogress_tasks': 0,
        'completed_tasks': 0
    };

    rows.forEach(row => {
        const stringVar = String(row.status).toLowerCase() + '_tasks';
        resObj[stringVar] = row.count;
    });

    return resObj;
}

async function getMetrics(startMonth, startYear, endMonth, endYear) {
    startMonth = (startMonth < 10 ? '0' : '') + startMonth;
    endMonth = (endMonth < 10 ? '0' : '') + endMonth;
    const sql = `
        SELECT DATE_FORMAT(created_on, '%M %Y') AS month_year, COUNT(*) AS count, status
        FROM tasks WHERE
        DATE_FORMAT(created_on, '%Y-%m') >= '?-?'
        AND DATE_FORMAT(created_on, '%Y-%m') <= '?-?'
        GROUP BY status, month_year 
        ORDER BY DATE_FORMAT(created_on, '%Y-%m');
    `;

    const rows = await db.query(sql, [startYear, startMonth, endYear, endMonth]);

    const resObj = {};
    rows.forEach(row => {
        const monthYear = row.month_year;
        const stringVar = `${row.status.toLowerCase()}_tasks`;

        if (!resObj[monthYear]) {
            resObj[monthYear] = {
                date: monthYear,
                metrics: {
                    'open_tasks': 0,
                    'inprogress_tasks': 0,
                    'completed_tasks': 0
                }
            };
        }

        resObj[monthYear].metrics[stringVar] = row.count;
    });

    const resultsArray = Object.values(resObj);


    // console.log("Metrics: ", resObj);

    return resultsArray;
}

async function create(task) {
    const sql = "INSERT INTO tasks (name, description) VALUES (?, ?);";
    const result = await db.query(sql, [task.name, task.description]);
    let status = "FAILED";
    if (result.affectedRows) {
        status = "OK";
    }

    return {
        status: status
    };
}

async function update(id, task) {
    const sql = "UPDATE tasks SET name = ?, description = ?, status = ? WHERE id = ?";
    const result = await db.query(sql, [task.name, task.description, task.status, task.id]);

    let status = "FAILED";
    if (result.affectedRows) {
        status = "OK";
    }

    return {
        status: status
    };
}

async function remove(id) {
    const sql = "DELETE FROM tasks WHERE id = ?";
    const result = await db.query(sql, [id]);
    let status = "FAILED";
    if (result.affectedRows) {
        status = "OK";
    }

    return {
        status: status
    };
}

module.exports = {
  getAll,
  create,
  update,
  remove,
  getCountByStatus,
  getMetrics
}