const { Sequelize } = require("sequelize");

const getDbConnection = (database) => {
  const sequelize = new Sequelize({
    dialect: "mysql",
    host: "llocalhost",
    port: 3306,
    password: "dap123",
    username: "root",
    ...(database ? { database } : {}),
  });
  return sequelize;
};
module.exports = getDbConnection;
