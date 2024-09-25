const ConferenceApi = require('../features/conference/conferenceApi')
const DepartamentsApi = require('../features/departments/departamentsApi')

module.exports.getDataSources = context => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi(context)
  conferenceApi: new ConferenceApi(context),
  departamentsApi: new DepartamentsApi(context)
})
