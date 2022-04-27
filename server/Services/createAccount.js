const db = require("./dbConnections.js");

const isDuplicateAccount = (reqBody) =>
  new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) console.error(err);
      let sql = `SELECT * FROM testusers WHERE email='${reqBody.email}'`;

      connection.query(sql, (err, results) => {
        if (err) console.error(err);
        console.log("User Query Results: ", results);
        let isDuplicate = results.length == 0 ? false : true;
        resolve(isDuplicate);
        connection.release((err) => {
          if (err) console.error(err);
        });
      });
    });
  });

const insertAccount = (reqBody) =>
  new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) console.log(err);
      let sql = `INSERT INTO testusers (fName, lName, email) VALUES ('${reqBody.firstName}', '${reqBody.lastName}', '${reqBody.email}')`;
      connection.query(sql, (error, results) => {
        if (error) {
          console.log(error);
          resolve(false);
        }
        resolve(true);
        connection.release((er) => {
          if (er) console.error(er);
        });
      });
    });
  });

const createAccount = async (reqBody) => {
  let isDuplicate = await isDuplicateAccount(reqBody);
  if (!isDuplicate) {
    let status = await insertAccount(reqBody);
    return status;
  }
  return false;
};

module.exports = createAccount;
