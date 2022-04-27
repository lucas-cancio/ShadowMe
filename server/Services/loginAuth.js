const createApplication = require("express/lib/express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("./dbConnections.js");

const queryLogin = (reqBody) =>
  new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) console.error(err);
      let sql = `SELECT * FROM testusers WHERE email='${reqBody.email}'`;

      connection.query(sql, (error, results) => {
        if (error) {
          console.error(error);
          resolve(false);
        }

        if (results.length == 0) resolve(false); //check if user is in database
        else resolve(true);

        connection.release((er) => {
          if (er) console.error(er);
        });
      });
    });
  });

const authorizeLogin = async (reqBody) => {
  let status = await queryLogin(reqBody);
  return status;
};

module.exports = authorizeLogin;
