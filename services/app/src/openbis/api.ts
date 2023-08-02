import autoBind from 'auto-bind'
import dto from './dto'
import requirejs from 'requirejs'

class Facade {
  v3: any
  url: String
  constructor(url: String) {
    autoBind(this)
    this.url = url
  }

  public _init() {
    let _this = this
    return new Promise((resolve, reject) => {
      /* eslint-disable-next-line no-undef */
      requirejs(
        this.url,
        openbis => {
          _this.v3 = new openbis()
          resolve(void(0))
        },
        error => {
          reject(error)
        }
      )
    })
  }

  public useSession(sessionToken) {
    this.v3._private.sessionToken = sessionToken
  }

  public getSessionInformation() {
    return this.promise(this.v3.getSessionInformation())
  }

  public getServerInformation() {
    return this.promise(this.v3.getServerInformation())
  }

  public getServerPublicInformation() {
    return this.promise(this.v3.getServerPublicInformation())
  }

  public login(user, password) {
    return this.promise(this.v3.login(user, password))
  }

  public logout() {
    return this.promise(this.v3.logout())
  }

  public getSpaces(ids, fo) {
    return this.promise(this.v3.getSpaces(ids, fo))
  }

  public getProjects(ids, fo) {
    return this.promise(this.v3.getProjects(ids, fo))
  }

  public getExperiments(ids, fo) {
    return this.promise(this.v3.getExperiments(ids, fo))
  }

  public getSamples(ids, fo) {
    return this.promise(this.v3.getSamples(ids, fo))
  }

  public getDataSets(ids, fo) {
    return this.promise(this.v3.getDataSets(ids, fo))
  }

  public getPlugins(ids, fo) {
    return this.promise(this.v3.getPlugins(ids, fo))
  }

  public getQueries(ids, fo) {
    return this.promise(this.v3.getQueries(ids, fo))
  }

  public getPropertyTypes(ids, fo) {
    return this.promise(this.v3.getPropertyTypes(ids, fo))
  }

  public getAuthorizationGroups(ids, fo) {
    return this.promise(this.v3.getAuthorizationGroups(ids, fo))
  }

  public getPersons(ids, fo) {
    return this.promise(this.v3.getPersons(ids, fo))
  }

  public updatePersons(updates) {
    return this.promise(this.v3.updatePersons(updates))
  }

  public searchSpaces(criteria, fo) {
    return this.promise(this.v3.searchSpaces(criteria, fo))
  }

  public searchProjects(criteria, fo) {
    return this.promise(this.v3.searchProjects(criteria, fo))
  }

  public searchPropertyTypes(criteria, fo) {
    return this.promise(this.v3.searchPropertyTypes(criteria, fo))
  }

  public searchPlugins(criteria, fo) {
    return this.promise(this.v3.searchPlugins(criteria, fo))
  }

  public searchPersonalAccessTokens(criteria, fo) {
    return this.promise(this.v3.searchPersonalAccessTokens(criteria, fo))
  }

  public searchQueries(criteria, fo) {
    return this.promise(this.v3.searchQueries(criteria, fo))
  }

  public searchQueryDatabases(criteria, fo) {
    return this.promise(this.v3.searchQueryDatabases(criteria, fo))
  }

  public searchMaterials(criteria, fo) {
    return this.promise(this.v3.searchMaterials(criteria, fo))
  }

  public searchSamples(criteria, fo) {
    return this.promise(this.v3.searchSamples(criteria, fo))
  }

  public searchExperiments(criteria, fo) {
    return this.promise(this.v3.searchExperiments(criteria, fo))
  }

  public searchDataSets(criteria, fo) {
    return this.promise(this.v3.searchDataSets(criteria, fo))
  }

  public searchVocabularies(criteria, fo) {
    return this.promise(this.v3.searchVocabularies(criteria, fo))
  }

  public searchVocabularyTerms(criteria, fo) {
    return this.promise(this.v3.searchVocabularyTerms(criteria, fo))
  }

  public searchPersons(criteria, fo) {
    return this.promise(this.v3.searchPersons(criteria, fo))
  }

  public searchAuthorizationGroups(criteria, fo) {
    return this.promise(this.v3.searchAuthorizationGroups(criteria, fo))
  }

  public searchPropertyAssignments(criteria, fo) {
    return this.promise(this.v3.searchPropertyAssignments(criteria, fo))
  }

  public searchEvents(criteria, fo) {
    return this.promise(this.v3.searchEvents(criteria, fo))
  }

  public getSampleTypes(ids, fo) {
    return this.promise(this.v3.getSampleTypes(ids, fo))
  }

  public getExperimentTypes(ids, fo) {
    return this.promise(this.v3.getExperimentTypes(ids, fo))
  }

  public getDataSetTypes(ids, fo) {
    return this.promise(this.v3.getDataSetTypes(ids, fo))
  }

  public getMaterialTypes(ids, fo) {
    return this.promise(this.v3.getMaterialTypes(ids, fo))
  }

  public getVocabularies(ids, fo) {
    return this.promise(this.v3.getVocabularies(ids, fo))
  }

  public getOperationExecutions(ids, fo) {
    return this.promise(this.v3.getOperationExecutions(ids, fo))
  }

  public updateSampleTypes(updates) {
    return this.promise(this.v3.updateSampleTypes(updates))
  }

  public updateExperimentTypes(updates) {
    return this.promise(this.v3.updateExperimentTypes(updates))
  }

  public updateDataSetTypes(updates) {
    return this.promise(this.v3.updateDataSetTypes(updates))
  }

  public updateMaterialTypes(updates) {
    return this.promise(this.v3.updateMaterialTypes(updates))
  }

  public searchSampleTypes(criteria, fo) {
    return this.promise(this.v3.searchSampleTypes(criteria, fo))
  }

  public searchExperimentTypes(criteria, fo) {
    return this.promise(this.v3.searchExperimentTypes(criteria, fo))
  }

  public searchDataSetTypes(criteria, fo) {
    return this.promise(this.v3.searchDataSetTypes(criteria, fo))
  }

  public searchMaterialTypes(criteria, fo) {
    return this.promise(this.v3.searchMaterialTypes(criteria, fo))
  }

  public deleteSampleTypes(ids, options) {
    return this.promise(this.v3.deleteSampleTypes(ids, options))
  }

  public deleteExperimentTypes(ids, options) {
    return this.promise(this.v3.deleteExperimentTypes(ids, options))
  }

  public deleteDataSetTypes(ids, options) {
    return this.promise(this.v3.deleteDataSetTypes(ids, options))
  }

  public deleteMaterialTypes(ids, options) {
    return this.promise(this.v3.deleteMaterialTypes(ids, options))
  }

  public evaluatePlugin(options) {
    return this.promise(this.v3.evaluatePlugin(options))
  }

  public async executeService(id, options) {
    const scheduleResult = await this.executeOperations(
      [new dto.ExecuteCustomASServiceOperation(id, options)],
      new dto.AsynchronousOperationExecutionOptions()
    )

    const executionId = scheduleResult.executionId
    const executionFetchOptions = new dto.OperationExecutionFetchOptions()
    executionFetchOptions.withDetails().withResults()
    executionFetchOptions.withDetails().withError()

    for (;;) {
      const executions = await this.getOperationExecutions(
        [executionId],
        executionFetchOptions
      )

      const execution = executions[executionId]

      if (!execution) {
        throw new Error('Execution id: ' + executionId + ' not found.')
      } else if (execution.details.error !== null) {
        throw new Error(execution.details.error.message)
      } else if (
        execution.details.results !== null &&
        execution.details.results.length > 0
      ) {
        return execution.details.results[0].result
      } else {
        await new Promise(resolve => {
          setTimeout(resolve, 1000)
        })
      }
    }
  }

  public executeQuery(id, options) {
    return this.promise(this.v3.executeQuery(id, options))
  }

  public executeSql(sql, options) {
    return this.promise(this.v3.executeSql(sql, options))
  }

  public executeOperations(operations, options) {
    return this.promise(this.v3.executeOperations(operations, options))
  }

  promise(dfd) {
    return new Promise((resolve, reject) => {
      dfd.then(
        result => {
          resolve(result)
        },
        error => {
          reject(error)
        }
      )
    })
  }
}


export default Facade
