const {
  mysql: { fullDbSchema, getAllRows, getDerivatives },
} = require("../../../utils");

const getUsers = async (query = {}) => {
  const dbConn = await fullDbSchema();
  const where = getDerivatives(query);
  const response = await getAllRows(dbConn.models.User, where);
  return response;
};

module.exports = getUsers;
