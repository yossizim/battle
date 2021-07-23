const {
  mysql: { fullDbSchema, getRow },
} = require("../../../utils");

const getUser = async (id) => {
  const dbConn = await fullDbSchema();
  const response = await getRow(dbConn.models.User, id);
  return response;
};

module.exports = getUser;
