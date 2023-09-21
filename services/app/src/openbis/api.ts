
import type {
  Sample,
  AuthorizationGroupFetchOptions,
  DataSetFetchOptions,
  DataSetSearchCriteria,
  DataSetTypeDeletionOptions,
  DataSetTypeFetchOptions,
  DataSetTypeSearchCriteria,
  DataSetTypeUpdate,
  ExperimentFetchOptions,
  ExperimentSearchCriteria,
  ExperimentTypeDeletionOptions,
  ExperimentTypeFetchOptions,
  ExperimentTypeSearchCriteria,
  ExperimentTypeUpdate,
  IAuthorizationGroupId,
  IDataSetId,
  IEntityTypeId,
  IExperimentId,
  IOperation,
  IOperationExecutionId,
  IOperationExecutionOptions,
  IPersonId,
  IPluginId,
  IProjectId,
  IPropertyTypeId,
  IQueryId,
  ISampleId,
  ISpaceId,
  IVocabularyId,
  MaterialFetchOptions,
  MaterialSearchCriteria,
  MaterialTypeDeletionOptions,
  MaterialTypeFetchOptions,
  MaterialTypeSearchCriteria,
  MaterialTypeUpdate,
  PersonFetchOptions,
  PersonSearchCriteria,
  PersonUpdate,
  PluginFetchOptions,
  ProjectFetchOptions,
  ProjectSearchCriteria,
  PropertyAssignmentFetchOptions,
  PropertyAssignmentSearchCriteria,
  PropertyTypeFetchOptions,
  PropertyTypeSearchCriteria,
  QueryDatabaseFetchOptions,
  QueryDatabaseSearchCriteria,
  QueryExecutionOptions,
  QueryFetchOptions,
  QuerySearchCriteria,
  SampleFetchOptions,
  SampleSearchCriteria,
  SampleTypeDeletionOptions,
  SampleTypeFetchOptions,
  SampleTypeSearchCriteria,
  SampleTypeUpdate,
  SpaceFetchOptions,
  SpaceSearchCriteria,
  SqlExecutionOptions,
  VocabularyFetchOptions,
  VocabularySearchCriteria,
  VocabularyTermFetchOptions,
  VocabularyTermSearchCriteria,
  IOperationExecutionResults,
  CustomASServiceExecutionOptions,
  ICustomASServiceId,
  PluginEvaluationOptions,
  PluginSearchCriteria,
  PersonalAccessTokenFetchOptions,
  PersonalAccessTokenSearchCriteria,
  EventFetchOptions,
  EventSearchCriteria,
  SynchronousOperationExecutionResults,
  AsynchronousOperationExecutionResults,
} from "@src/types/openbis";

import {ExecuteCustomASServiceOperation, AsynchronousOperationExecutionOptions, OperationExecutionFetchOptions, SampleDeletionOptions} from './dto'

import {  openbis } from "v3api/V3API.esm";

import type {  OpenBIS  as OpenBISInterface} from "@src/types/openbis";

interface V3 extends OpenBISInterface {
  _private: {
    sessionToken: string;
  };
  executeOperations(
    token: string,
    operations:  IOperation[],
    options:  IOperationExecutionOptions,
  ): Promise<SynchronousOperationExecutionResults>;
  //This is needed to be able to use the executeService method in the facade
  executeOperations(
    operations:  IOperation[],
    options:  IOperationExecutionOptions,
  ): Promise<SynchronousOperationExecutionResults>;
}

export class Facade {
  v3: V3;
  constructor() {
    this.v3 = new openbis();
  }

  static fromURL(url: string) {
    const facade = new Facade();
    facade.v3 = new openbis(`${url}/openbis/openbis/rmi-application-server-v3.json`);
  
    return facade;
  }

  checkSession(sessionToken: string) {
    this.useSession(sessionToken);
    console.log("Checking session");
    return this.promise(this.getServerInformation());
  }

  useSession(sessionToken: string) {
    this.v3._private.sessionToken = sessionToken;
  }

  getSessionInformation() {
    return this.promise(this.v3.getSessionInformation());
  }

  getServerInformation() {
    return this.promise(this.v3.getServerInformation());
  }

  getServerPublicInformation() {
    return this.promise(this.v3.getServerPublicInformation());
  }

  login(user: string, password: string) {
    return this.promise(this.v3.login(user, password));
  }

  logout() {
    return this.promise(this.v3.logout());
  }

  getSpaces(ids: ISpaceId[], fo: SpaceFetchOptions) {
    return this.promise(this.v3.getSpaces(ids, fo));
  }

  getProjects(ids: IProjectId[], fo: ProjectFetchOptions) {
    return this.promise(this.v3.getProjects(ids, fo));
  }

  getExperiments(ids: IExperimentId[], fo: ExperimentFetchOptions) {
    return this.promise(this.v3.getExperiments(ids, fo));
  }

  getSamples(ids: ISampleId[], fo: SampleFetchOptions) {
    return this.promise(this.v3.getSamples(ids, fo));
  }

  getDataSets(ids: IDataSetId[], fo: DataSetFetchOptions) {
    return this.promise(this.v3.getDataSets(ids, fo));
  }

  getPlugins(ids: IPluginId[], fo: PluginFetchOptions) {
    return this.promise(this.v3.getPlugins(ids, fo));
  }

  getQueries(ids: IQueryId[], fo: QueryFetchOptions) {
    return this.promise(this.v3.getQueries(ids, fo));
  }

  getPropertyTypes(ids: IPropertyTypeId[], fo: PropertyTypeFetchOptions) {
    return this.promise(this.v3.getPropertyTypes(ids, fo));
  }

  getAuthorizationGroups(
    ids: IAuthorizationGroupId[],
    fo: AuthorizationGroupFetchOptions,
  ) {
    return this.promise(this.v3.getAuthorizationGroups(ids, fo));
  }

  getPersons(ids: IPersonId[], fo: PersonFetchOptions) {
    return this.promise(this.v3.getPersons(ids, fo));
  }

  updatePersons(updates: PersonUpdate[]) {
    return this.promise(this.v3.updatePersons(updates));
  }

  searchSpaces(criteria: SpaceSearchCriteria, fo: SpaceFetchOptions) {
    return this.promise(this.v3.searchSpaces(criteria, fo));
  }

  searchProjects(criteria: ProjectSearchCriteria, fo: ProjectFetchOptions) {
    return this.promise(this.v3.searchProjects(criteria, fo));
  }

  searchPropertyTypes(
    criteria: PropertyTypeSearchCriteria,
    fo: PropertyTypeFetchOptions,
  ) {
    return this.promise(this.v3.searchPropertyTypes(criteria, fo));
  }

  searchPlugins(criteria: PluginSearchCriteria, fo: PluginFetchOptions) {
    return this.promise(this.v3.searchPlugins(criteria, fo));
  }

  searchPersonalAccessTokens(criteria: PersonalAccessTokenSearchCriteria, fo: PersonalAccessTokenFetchOptions) {
    return this.promise(this.v3.searchPersonalAccessTokens(criteria, fo));
  }

  searchQueries(criteria: QuerySearchCriteria, fo: QueryFetchOptions) {
    return this.promise(this.v3.searchQueries(criteria, fo));
  }

  searchQueryDatabases(
    criteria: QueryDatabaseSearchCriteria,
    fo: QueryDatabaseFetchOptions,
  ) {
    return this.promise(this.v3.searchQueryDatabases(criteria, fo));
  }

  searchMaterials(criteria: MaterialSearchCriteria, fo: MaterialFetchOptions) {
    return this.promise(this.v3.searchMaterials(criteria, fo));
  }

  searchSamples(criteria: SampleSearchCriteria, fo: SampleFetchOptions) {
    return this.promise(this.v3.searchSamples(criteria, fo));
  }

  searchExperiments(
    criteria: ExperimentSearchCriteria,
    fo: ExperimentFetchOptions,
  ) {
    return this.promise(this.v3.searchExperiments(criteria, fo));
  }

  searchDataSets(criteria: DataSetSearchCriteria, fo: DataSetFetchOptions) {
    return this.promise(this.v3.searchDataSets(criteria, fo));
  }

  searchVocabularies(
    criteria: VocabularySearchCriteria,
    fo: VocabularyFetchOptions,
  ) {
    return this.promise(this.v3.searchVocabularies(criteria, fo));
  }

  searchVocabularyTerms(
    criteria: VocabularyTermSearchCriteria,
    fo: VocabularyTermFetchOptions,
  ) {
    return this.promise(this.v3.searchVocabularyTerms(criteria, fo));
  }

  searchPersons(criteria: PersonSearchCriteria, fo: PersonFetchOptions) {
    return this.promise(this.v3.searchPersons(criteria, fo));
  }

  searchAuthorizationGroups(criteria: any, fo: AuthorizationGroupFetchOptions) {
    return this.promise(this.v3.searchAuthorizationGroups(criteria, fo));
  }

  searchPropertyAssignments(
    criteria: PropertyAssignmentSearchCriteria,
    fo: PropertyAssignmentFetchOptions,
  ) {
    return this.promise(this.v3.searchPropertyAssignments(criteria, fo));
  }

  searchEvents(criteria: EventSearchCriteria, fo: EventFetchOptions) {
    return this.promise(this.v3.searchEvents(criteria, fo));
  }

  getSampleTypes(ids: IEntityTypeId[], fo: SampleTypeFetchOptions) {
    return this.promise(this.v3.getSampleTypes(ids, fo));
  }

  getExperimentTypes(ids: IEntityTypeId[], fo: ExperimentTypeFetchOptions) {
    return this.promise(this.v3.getExperimentTypes(ids, fo));
  }

  getDataSetTypes(ids: IEntityTypeId[], fo: DataSetTypeFetchOptions) {
    return this.promise(this.v3.getDataSetTypes(ids, fo));
  }

  getMaterialTypes(ids: IEntityTypeId[], fo: MaterialTypeFetchOptions) {
    return this.promise(this.v3.getMaterialTypes(ids, fo));
  }

  getVocabularies(ids: IVocabularyId[], fo: VocabularyFetchOptions) {
    return this.promise(this.v3.getVocabularies(ids, fo));
  }

  getOperationExecutions(
    ids: IOperationExecutionId[],
    fo:  typeof OperationExecutionFetchOptions,
  ) {
    return this.promise(this.v3.getOperationExecutions(ids, fo));
  }

  updateSampleTypes(updates: SampleTypeUpdate[]) {
    return this.promise(this.v3.updateSampleTypes(updates));
  }

  updateExperimentTypes(updates: ExperimentTypeUpdate[]) {
    return this.promise(this.v3.updateExperimentTypes(updates));
  }

  updateDataSetTypes(updates: DataSetTypeUpdate[]) {
    return this.promise(this.v3.updateDataSetTypes(updates));
  }

  updateMaterialTypes(updates: MaterialTypeUpdate[]) {
    return this.promise(this.v3.updateMaterialTypes(updates));
  }

  searchSampleTypes(
    criteria: SampleTypeSearchCriteria,
    fo: SampleTypeFetchOptions,
  ) {
    return this.promise(this.v3.searchSampleTypes(criteria, fo));
  }

  searchExperimentTypes(
    criteria: ExperimentTypeSearchCriteria,
    fo: ExperimentTypeFetchOptions,
  ) {
    return this.promise(this.v3.searchExperimentTypes(criteria, fo));
  }

  searchDataSetTypes(
    criteria: DataSetTypeSearchCriteria,
    fo: DataSetTypeFetchOptions,
  ) {
    return this.promise(this.v3.searchDataSetTypes(criteria, fo));
  }

  searchMaterialTypes(
    criteria: MaterialTypeSearchCriteria,
    fo: MaterialTypeFetchOptions,
  ) {
    return this.promise(this.v3.searchMaterialTypes(criteria, fo));
  }

  deleteSampleTypes(ids: IEntityTypeId[], options: SampleTypeDeletionOptions) {
    return this.promise(this.v3.deleteSampleTypes(ids, options));
  }

  deleteExperimentTypes(
    ids: IEntityTypeId[],
    options: ExperimentTypeDeletionOptions,
  ) {
    return this.promise(this.v3.deleteExperimentTypes(ids, options));
  }

  deleteDataSetTypes(
    ids: IEntityTypeId[],
    options: DataSetTypeDeletionOptions,
  ) {
    return this.promise(this.v3.deleteDataSetTypes(ids, options));
  }

  deleteMaterialTypes(
    ids: IEntityTypeId[],
    options: MaterialTypeDeletionOptions,
  ) {
    return this.promise(this.v3.deleteMaterialTypes(ids, options));
  }

  evaluatePlugin(options: PluginEvaluationOptions) {
    return this.promise(this.v3.evaluatePlugin(options));
  }

  async executeService(id: ICustomASServiceId, options: CustomASServiceExecutionOptions) {
    const scheduleResult: AsynchronousOperationExecutionResults = await this.executeOperations(
      [new ExecuteCustomASServiceOperation(id, options)],
      new AsynchronousOperationExecutionOptions(),
    );

    const executionId = scheduleResult.executionId;
    const executionFetchOptions = new OperationExecutionFetchOptions();
    executionFetchOptions.withDetails().withResults();
    executionFetchOptions.withDetails().withError();

    for (;;) {
      const executions = await this.getOperationExecutions(
        [executionId],
        executionFetchOptions,
      );

      const execution = executions[executionId];

      if (!execution) {
        throw new Error("Execution id: " + executionId + " not found.");
      } else if (execution.details.error !== null) {
        throw new Error(execution.details.error.message);
      } else if (
        execution.details.results !== null &&
        execution.details.results.length > 0
      ) {
        return execution.details.results[0].result;
      } else {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      }
    }
  }

  deleteSamples(ids: ISampleId[], reason: string = "No reason provided") {
    const options = new SampleDeletionOptions();
    options.reason = reason;
    return this.promise(this.v3.deleteSamples(ids, options));
  }

  executeQuery(id: IQueryId, options: QueryExecutionOptions) {
    return this.promise(this.v3.executeQuery(id, options));
  }

  executeSql(sql: string, options: SqlExecutionOptions) {
    return this.promise(this.v3.executeSql(sql, options));
  }

  executeOperations(operations: IOperation[], options: IOperationExecutionOptions) {
    return this.promise(this.v3.executeOperations(operations, options));
  }

  public promise<T>(dfd: Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      dfd.then(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        },
      );
    });
  }
}


