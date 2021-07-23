const {
  mysql: { fullDbSchema, getDerivatives, getAllRows },
} = require("../../../utils");

const getUserMonsters = async (userId, query = {}) => {
  const dbConn = await fullDbSchema();
  const where = { userId, ...getDerivatives(query) };
  const response = await getAllRows(dbConn.models.Monster, where);
  return response;
};

module.exports = getUserMonsters;
