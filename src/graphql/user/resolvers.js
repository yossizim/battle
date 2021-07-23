const { user, monster } = require("../../modules");

module.exports = {
  Query: {
    getUser: (_, { id }) => user.getUser(id),
    getUsers: (_, { query }) => user.getUsers(query),
  },
  Mutation: {
    createUser: (_, { input }) => user.createUser(input),
    updateUser: (_, { input }) => user.updateUser(input),
  },
  User: {
    monsters: (parent, { query }) => monster.getUserMonsters(parent.id, query),
  },
};
