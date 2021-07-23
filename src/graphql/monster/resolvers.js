const { user, monster } = require("../../modules");

module.exports = {
  Query: {
    getMonster: (_, { id }) => monster.getMonster(id),
  },
  Mutation: {
    createMonster: (_, { input }) => monster.createMonster(input),
    updateMonster: (_, { input }) => monster.updateMonster(input),
  },
  Monster: {
    user: (parent) => user.getUser(parent.id),
  },
};
