const departmentResolvers = {
  Query: {
    departmentsList: async (_parent, _args, { dataSources }, _info) => {
      const response = await dataSources.departamentsApi.GetAllDepartaments()
      return response
    },

    departamentData: async (_parent, _args, { id }, { dataSources }, _info) => {
      const response = await dataSources.departamentsApi.GetDepartament(id)
      return response
    }
  }
}

module.exports = departmentResolvers
