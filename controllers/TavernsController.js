//const validator = require('validator');
const sql = require('mssql');
const bcrypt = require('bcrypt');
const bcryptPromise = require('bcrypt-promise');
const { poolPromise } = require('../data/db');
const jwt = require('jsonwebtoken');

const getAllTaverns = async function(req) {
    const pool = await poolPromise;
    let result;

    try {
        result = await pool
            .request()
            .input('userName', sql.Int, req.user.Id)
            .query('select Taverns.TavernName, Users.TavernID from Users LEFT JOIN Taverns ON Users.TavernID = Taverns.ID WHERE Users.UserName = @userName');
    } catch (e) {
        throwError(e.message);
    }

    return result.recordset;
};

getAll = async function(req, res) {
    // format request
    res.setHeader('ContentType', 'application/json');

    let err, taverns;

    // now call the db
    [err, taverns] = await executeOrThrow(getAllTodos(req));
    if (err) {
        return returnError(res, err, 422);
    }

    // return results
    return returnSuccessResponse(res, taverns, 201);
};

module.exports.getAll = getAll;