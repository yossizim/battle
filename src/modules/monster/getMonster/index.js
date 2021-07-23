const {
  mysql: { fullDbSchema, getRow },
} = require("../../../utils");

const getMonster = async (id) => {
  const dbConn = await fullDbSchema();
  const response = await getRow(dbConn.models.Monster, id);
  return response;
};

module.exports = getMonster;
