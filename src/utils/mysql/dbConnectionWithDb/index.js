const getDbConnection = require("../getDbConnection");
const dropDatabase = require("../dropDatabase");
const createDatabase = require("../createDatabase");
const { database } = require("../../../dbName");

const dbConnectionWithDb = async (bootstrap = false) => {
  if (bootstrap) {
    await dropDatabase(database);
    const response = await createDatabase(database, true);
    return response;
  }
  return getDbConnection(database);
};

module.exports = dbConnectionWithDb;
