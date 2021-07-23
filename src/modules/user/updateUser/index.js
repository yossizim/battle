const {
  mysql: { fullDbSchema, updateRow },
} = require("../../../utils");
const schema = require("./schema");

const updateUser = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await updateRow(dbConn.models.User, value);
  return response;
};

module.exports = updateUser;
