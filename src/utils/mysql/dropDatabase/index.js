const getDbConnection = require("../getDbConnection");

const dropDatabase = async (database) => {
  const dbConn = getDbConnection();
  await dbConn.query(`DROP DATABASE IF EXIST \`${database}\`;`);
};
module.exports = dropDatabase;
