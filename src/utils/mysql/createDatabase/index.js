const getDbConnection = require("../getDbConnection");

const createDatabase = async (database, newConnection = false) => {
  const dbConn = getDbConnection();
  await dbConn.query(`CREATE DATABASE IF NOT EXIST \`${database}\``);
  if (newConnection) {
    return getDbConnection(databse);
  }
};

module.exports = createDatabase;
