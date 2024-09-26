const { RESTDataSource } = require('@apollo/datasource-rest')

class DepartamentsApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.API_URL
  }
  async GetAllDepartaments() {
    const response = await this.get('Departaments/get-departaments')
    return response
  }

  async CreateDepartament(body) {
    const response = await this.post('Departaments/post-departament', { body })
    return response
  }

  async UpdateDepartament(body) {
    const response = await this.put('Departaments/put-departament', { body })
    return response
  }

  async DeleteDepartament(id) {
    const response = await this.delete(`Departaments/delete-departament/${id}`)
    return response
  }
}

module.exports = DepartamentsApi
