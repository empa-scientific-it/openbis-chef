import type { PersonUpdate, DataSetTypeUpdate, MaterialTypeUpdate, AuthorizationGroupFetchOptions, DataSetFetchOptions, DataSetTypeFetchOptions, ExperimentFetchOptions, ExperimentTypeFetchOptions, ExperimentTypeUpdate, MaterialFetchOptions, MaterialTypeFetchOptions, OpenBIS, PersonFetchOptions, PluginFetchOptions, ProjectFetchOptions, PropertyAssignmentFetchOptions, PropertyTypeFetchOptions, SampleFetchOptions, SampleTypeFetchOptions, SampleTypeUpdate, SpaceFetchOptions, VocabularyFetchOptions, VocabularyTermFetchOptions, ISpaceId, IProjectId, IExperimentId, ISampleId, IDataSetId, IPluginId, IPropertyTypeId, IAuthorizationGroupId, IPersonId, IEntityTypeId, IEntityTypeId, IEntityTypeId, IEntityTypeId, IVocabularyId, IEntityTypeId, IEntityTypeId, IEntityTypeId, IEntityTypeId, IOperation, IQueryId, IOperationExecutionId, QueryFetchOptions, SpaceSearchCriteria, ProjectSearchCriteria, PropertyTypeSearchCriteria, QueryFetchOptions, QuerySearchCriteria, QueryDatabaseFetchOptions, QueryDatabaseSearchCriteria, MaterialSearchCriteria, SampleSearchCriteria, ExperimentSearchCriteria, DataSetSearchCriteria, VocabularySearchCriteria, VocabularyTermSearchCriteria, PersonSearchCriteria, PropertyAssignmentSearchCriteria, OperationExecutionFetchOptions, SampleTypeSearchCriteria, ExperimentTypeSearchCriteria, DataSetTypeSearchCriteria, MaterialTypeSearchCriteria, SampleTypeDeletionOptions, ExperimentTypeDeletionOptions, DataSetTypeDeletionOptions, MaterialTypeDeletionOptions, QueryExecutionOptions, SqlExecutionOptions, IOperationExecutionOptions } from '@src/types/openbis'
import openbis from 'v3api/V3API.esm'
import { ExecuteCustomASServiceOperation, AsynchronousOperationExecutionOptions, OperationExecutionFetchOptions } from './dto'

interface V3 extends OpenBIS {
  _private: {
    sessionToken: string
  }
  executeOperations(token: string, operations: IOperation[], options: IOperationExecutionOptions): Promise<any>
  //This is needed to be able to use the executeService method in the facade
  executeOperations(operations: IOperation[], options: IOperationExecutionOptions): Promise<any>
}

export class Facade {
  v3: V3
  constructor() {
    this.v3 = new openbis.openbis()
  }



  useSession(sessionToken: string) {
    this.v3._private.sessionToken = sessionToken
  }

  getSessionInformation() {
    return this.promise(this.v3.getSessionInformation())
  }

  getServerInformation() {
    return this.promise(this.v3.getServerInformation())
  }

  getServerPublicInformation() {
    return this.promise(this.v3.getServerPublicInformation())
  }

  login(user: string | String, password: string | String) {
    return this.promise(this.v3.login(user, password))
  }

  logout() {
    return this.promise(this.v3.logout())
  }

  getSpaces(ids: ISpaceId[], fo: SpaceFetchOptions) {
    return this.promise(this.v3.getSpaces(ids, fo))
  }

  getProjects(ids: IProjectId[], fo: ProjectFetchOptions) {
    return this.promise(this.v3.getProjects(ids, fo))
  }

  getExperiments(ids: IExperimentId[], fo: ExperimentFetchOptions) {
    return this.promise(this.v3.getExperiments(ids, fo))
  }

  getSamples(ids: ISampleId[], fo: SampleFetchOptions) {
    return this.promise(this.v3.getSamples(ids, fo))
  }

  getDataSets(ids: IDataSetId[], fo: DataSetFetchOptions) {
    return this.promise(this.v3.getDataSets(ids, fo))
  }

  getPlugins(ids: IPluginId[], fo: PluginFetchOptions) {
    return this.promise(this.v3.getPlugins(ids, fo))
  }

  getQueries(ids: IQueryId[], fo: QueryFetchOptions) {
    return this.promise(this.v3.getQueries(ids, fo))
  }

  getPropertyTypes(ids: IPropertyTypeId[], fo: PropertyTypeFetchOptions) {
    return this.promise(this.v3.getPropertyTypes(ids, fo))
  }

  getAuthorizationGroups(ids: IAuthorizationGroupId[], fo: AuthorizationGroupFetchOptions) {
    return this.promise(this.v3.getAuthorizationGroups(ids, fo))
  }

  getPersons(ids: IPersonId[], fo: PersonFetchOptions) {
    return this.promise(this.v3.getPersons(ids, fo))
  }

  updatePersons(updates: PersonUpdate[]) {
    return this.promise(this.v3.updatePersons(updates))
  }

  searchSpaces(criteria: SpaceSearchCriteria, fo: SpaceFetchOptions) {
    return this.promise(this.v3.searchSpaces(criteria, fo))
  }

  searchProjects(criteria: ProjectSearchCriteria, fo: ProjectFetchOptions) {
    return this.promise(this.v3.searchProjects(criteria, fo))
  }

  searchPropertyTypes(criteria: PropertyTypeSearchCriteria, fo: PropertyTypeFetchOptions) {
    return this.promise(this.v3.searchPropertyTypes(criteria, fo))
  }

  searchPlugins(criteria: any, fo: PluginFetchOptions) {
    return this.promise(this.v3.searchPlugins(criteria, fo))
  }

  searchPersonalAccessTokens(criteria: any, fo: any) {
    return this.promise(this.v3.searchPersonalAccessTokens(criteria, fo))
  }

  searchQueries(criteria: QuerySearchCriteria, fo: QueryFetchOptions) {
    return this.promise(this.v3.searchQueries(criteria, fo))
  }

  searchQueryDatabases(criteria: QueryDatabaseSearchCriteria, fo: QueryDatabaseFetchOptions) {
    return this.promise(this.v3.searchQueryDatabases(criteria, fo))
  }

  searchMaterials(criteria: MaterialSearchCriteria, fo: MaterialFetchOptions) {
    return this.promise(this.v3.searchMaterials(criteria, fo))
  }

  searchSamples(criteria: SampleSearchCriteria, fo: SampleFetchOptions) {
    return this.promise(this.v3.searchSamples(criteria, fo))
  }

  searchExperiments(criteria: ExperimentSearchCriteria, fo: ExperimentFetchOptions) {
    return this.promise(this.v3.searchExperiments(criteria, fo))
  }

  searchDataSets(criteria: DataSetSearchCriteria, fo: DataSetFetchOptions) {
    return this.promise(this.v3.searchDataSets(criteria, fo))
  }

  searchVocabularies(criteria: VocabularySearchCriteria, fo: VocabularyFetchOptions) {
    return this.promise(this.v3.searchVocabularies(criteria, fo))
  }

  searchVocabularyTerms(criteria: VocabularyTermSearchCriteria, fo: VocabularyTermFetchOptions) {
    return this.promise(this.v3.searchVocabularyTerms(criteria, fo))
  }

  searchPersons(criteria: PersonSearchCriteria, fo: PersonFetchOptions) {
    return this.promise(this.v3.searchPersons(criteria, fo))
  }

  searchAuthorizationGroups(criteria: any, fo: AuthorizationGroupFetchOptions) {
    return this.promise(this.v3.searchAuthorizationGroups(criteria, fo))
  }

  searchPropertyAssignments(criteria: PropertyAssignmentSearchCriteria, fo: PropertyAssignmentFetchOptions) {
    return this.promise(this.v3.searchPropertyAssignments(criteria, fo))
  }

  searchEvents(criteria: any, fo: any) {
    return this.promise(this.v3.searchEvents(criteria, fo))
  }

  getSampleTypes(ids: IEntityTypeId[], fo: SampleTypeFetchOptions) {
    return this.promise(this.v3.getSampleTypes(ids, fo))
  }

  getExperimentTypes(ids: IEntityTypeId[], fo: ExperimentTypeFetchOptions) {
    return this.promise(this.v3.getExperimentTypes(ids, fo))
  }

  getDataSetTypes(ids: IEntityTypeId[], fo: DataSetTypeFetchOptions) {
    return this.promise(this.v3.getDataSetTypes(ids, fo))
  }

  getMaterialTypes(ids: IEntityTypeId[], fo: MaterialTypeFetchOptions) {
    return this.promise(this.v3.getMaterialTypes(ids, fo))
  }

  getVocabularies(ids: IVocabularyId[], fo: VocabularyFetchOptions) {
    return this.promise(this.v3.getVocabularies(ids, fo))
  }

  getOperationExecutions(ids: IOperationExecutionId[], fo: OperationExecutionFetchOptions) {
    return this.promise(this.v3.getOperationExecutions(ids, fo))
  }

  updateSampleTypes(updates: SampleTypeUpdate[]) {
    return this.promise(this.v3.updateSampleTypes(updates))
  }

  updateExperimentTypes(updates: ExperimentTypeUpdate[]) {
    return this.promise(this.v3.updateExperimentTypes(updates))
  }

  updateDataSetTypes(updates: DataSetTypeUpdate[]) {
    return this.promise(this.v3.updateDataSetTypes(updates))
  }

  updateMaterialTypes(updates: MaterialTypeUpdate[]) {
    return this.promise(this.v3.updateMaterialTypes(updates))
  }

  searchSampleTypes(criteria: SampleTypeSearchCriteria, fo: SampleTypeFetchOptions) {
    return this.promise(this.v3.searchSampleTypes(criteria, fo))
  }

  searchExperimentTypes(criteria: ExperimentTypeSearchCriteria, fo: ExperimentTypeFetchOptions) {
    return this.promise(this.v3.searchExperimentTypes(criteria, fo))
  }

  searchDataSetTypes(criteria: DataSetTypeSearchCriteria, fo: DataSetTypeFetchOptions) {
    return this.promise(this.v3.searchDataSetTypes(criteria, fo))
  }

  searchMaterialTypes(criteria: MaterialTypeSearchCriteria, fo: MaterialTypeFetchOptions) {
    return this.promise(this.v3.searchMaterialTypes(criteria, fo))
  }

  deleteSampleTypes(ids: IEntityTypeId[], options: SampleTypeDeletionOptions) {
    return this.promise(this.v3.deleteSampleTypes(ids, options))
  }

  deleteExperimentTypes(ids: IEntityTypeId[], options: ExperimentTypeDeletionOptions) {
    return this.promise(this.v3.deleteExperimentTypes(ids, options))
  }

  deleteDataSetTypes(ids: IEntityTypeId[], options: DataSetTypeDeletionOptions) {
    return this.promise(this.v3.deleteDataSetTypes(ids, options))
  }

  deleteMaterialTypes(ids: IEntityTypeId[], options: MaterialTypeDeletionOptions) {
    return this.promise(this.v3.deleteMaterialTypes(ids, options))
  }

  evaluatePlugin(options: any) {
    return this.promise(this.v3.evaluatePlugin(options))
  }

  async executeService(id: any, options: any) {
    const scheduleResult = await this.executeOperations(
      [new ExecuteCustomASServiceOperation(id, options)],
      new AsynchronousOperationExecutionOptions()
    )

    const executionId = scheduleResult.executionId
    const executionFetchOptions = new OperationExecutionFetchOptions()
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

  executeQuery(id: IQueryId, options: QueryExecutionOptions) {
    return this.promise(this.v3.executeQuery(id, options))
  }

  executeSql(sql: String, options: SqlExecutionOptions) {
    return this.promise(this.v3.executeSql(sql, options))
  }

  executeOperations(operations, options: IOperationExecutionOptions) {
    return this.promise(this.v3.executeOperations(operations, options))
  }

  public promise<T>(dfd: Promise<T>):Promise<T> {
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

