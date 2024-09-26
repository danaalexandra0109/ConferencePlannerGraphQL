const departmentMutationResolvers = {
  Mutation: {
    deleteDepartment: async (_parent, { id }, { dataSources }, _info) => {
      const response = await dataSources.departamentsApi.DeleteDepartament(id)
      return response
    }
  }
}

module.exports = departmentMutationResolvers
