const departmentMutationResolvers = {
  Mutation: {
    deleteDepartment: async (_parent, { id }, { dataSources }, _info) => {
      const response = await dataSources.departamentsApi.DeleteDepartament(id)
      return response
    },

    updateDepartment: async (_parent, { input }, { dataSources }, _info) => {
      const { id, name, code, employees, description } = input
      const body = { name: name, code: code, employees: employees, description: description }
      const response = await dataSources.departamentsApi.UpdateDepartment(id, body)
      return response
    },

    addDepartment: async (_parent, { input }, { dataSources }, _info) => {
      const response = await dataSources.departamentsApi.CreateDepartament(input)
      return response
    }
  }
}

module.exports = departmentMutationResolvers
