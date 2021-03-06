const {
  mysql: { fullDbSchema, createRow },
} = require("../../../utils");
const schema = require("./schema");

const createUser = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await createRow(dbConn.models.User, value);
  return response;
};

module.exports = createUser;
