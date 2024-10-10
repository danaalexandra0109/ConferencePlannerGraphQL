const { RESTDataSource } = require('@apollo/datasource-rest')

class DepartamentsApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.API_URL
  }
  async GetAllDepartaments() {
    const response = await this.get('Departaments/departaments')
    return response
  }

  async CreateDepartament(body) {
    const response = await this.post('Departaments/departament', { body })
    return response
  }

  async updateDepartment(id, body) {
    const response = await this.put(`Departaments/departament/${id}`, { body })
    return response
  }

  async DeleteDepartament(id) {
    const response = await this.delete(`Departaments/departament/${id}`)
    return response
  }

  async GetDepartament(id) {
    const response = await this.get(`Departaments/departament/${id}`)
    return response
  }
}

module.exports = DepartamentsApi
