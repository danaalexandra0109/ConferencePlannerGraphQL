const departmentMutationResolvers = {
  Mutation: {
    deleteDepartment: async (_parent, { id }, { dataSources }, _info) => {
      const response = await dataSources.departamentsApi.DeleteDepartament(id)
      return response
    },

    updateDepartment: async (_parent, { id }, { dataSources }, _info) => {
      const response = await dataSources.departamentsApi.UpdateDepartment(id)
      return response
    },

    addDepartment: async (_parent, { dataSources }, _info) => {
      const response = await dataSources.departamentsApi.CreateDepartament()
      return response
    }
  }
}

module.exports = departmentMutationResolvers
