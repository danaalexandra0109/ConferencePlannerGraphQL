const { RESTDataSource } = require('@apollo/datasource-rest')

class ConferenceApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.API_URL
  }

  async sendSpeakerSMSNotification(body) {
    const response = await this.post('Notification/SendSpeakerSmsNotification', { body })
    return response
  }
  async sendParticipantEmailNotification(body) {
    const response = await this.post('Notification/SendParticipantEmailNotification', { body })
    return response
  }
}

module.exports = ConferenceApi
