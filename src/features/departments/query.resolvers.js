const departmentResolvers = {
  Query: {
    departmentsList: async (_parent, _args, { dataSources }, _info) => {
      const response = await dataSources.departamentsApi.GetAllDepartaments()
      return response
    }
  }
}

module.exports = departmentResolvers
