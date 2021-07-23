const {
  mysql: { fullDbSchema, updateRow },
} = require("../../../utils");
const schema = require("./schema");

const updateMonster = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await updateRow(dbConn.models.Monster, value);
  return response;
};

module.exports = updateMonster;
