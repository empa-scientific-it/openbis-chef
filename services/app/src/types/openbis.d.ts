/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2023-08-25 08:31:26.

export interface OpenBIS {
  sessionToken: string;
  sessionInformation: SessionInformation;
  sessionActive: boolean;
  serverInformation: { [index: string]: string };
  serverPublicInformation: { [index: string]: string };

  loginAsAnonymousUser(): Promise<string>;

  login(arg0: string, arg1: string): Promise<string>;

  setSessionToken(arg0: string): Promise<void>;

  loginAs(arg0: string, arg1: string, arg2: string): Promise<string>;

  logout(): Promise<void>;

  getSessionInformation(): Promise<SessionInformation>;

  isSessionActive(): Promise<boolean>;

  createSpaces(arg0: SpaceCreation[]): Promise<SpacePermId[]>;

  createExperiments(arg0: ExperimentCreation[]): Promise<ExperimentPermId[]>;

  createExperimentTypes(
    arg0: ExperimentTypeCreation[],
  ): Promise<EntityTypePermId[]>;

  createSamples(arg0: SampleCreation[]): Promise<SamplePermId[]>;

  createSampleTypes(arg0: SampleTypeCreation[]): Promise<EntityTypePermId[]>;

  createDataSetTypes(arg0: DataSetTypeCreation[]): Promise<EntityTypePermId[]>;

  createMaterials(arg0: MaterialCreation[]): Promise<MaterialPermId[]>;

  createMaterialTypes(
    arg0: MaterialTypeCreation[],
  ): Promise<EntityTypePermId[]>;

  createPropertyTypes(
    arg0: PropertyTypeCreation[],
  ): Promise<PropertyTypePermId[]>;

  createPlugins(arg0: PluginCreation[]): Promise<PluginPermId[]>;

  createVocabularies(arg0: VocabularyCreation[]): Promise<VocabularyPermId[]>;

  createVocabularyTerms(
    arg0: VocabularyTermCreation[],
  ): Promise<VocabularyTermPermId[]>;

  createTags(arg0: TagCreation[]): Promise<TagPermId[]>;

  createAuthorizationGroups(
    arg0: AuthorizationGroupCreation[],
  ): Promise<AuthorizationGroupPermId[]>;

  createRoleAssignments(
    arg0: RoleAssignmentCreation[],
  ): Promise<RoleAssignmentTechId[]>;

  createPersons(arg0: PersonCreation[]): Promise<PersonPermId[]>;

  createExternalDataManagementSystems(
    arg0: ExternalDmsCreation[],
  ): Promise<ExternalDmsPermId[]>;

  createQueries(arg0: QueryCreation[]): Promise<QueryTechId[]>;

  createSemanticAnnotations(
    arg0: SemanticAnnotationCreation[],
  ): Promise<SemanticAnnotationPermId[]>;

  createPersonalAccessTokens(
    arg0: PersonalAccessTokenCreation[],
  ): Promise<PersonalAccessTokenPermId[]>;

  updateSpaces(arg0: SpaceUpdate[]): Promise<void>;

  updateProjects(arg0: ProjectUpdate[]): Promise<void>;

  updateExperiments(arg0: ExperimentUpdate[]): Promise<void>;

  updateExperimentTypes(arg0: ExperimentTypeUpdate[]): Promise<void>;

  updateSamples(arg0: SampleUpdate[]): Promise<void>;

  updateSampleTypes(arg0: SampleTypeUpdate[]): Promise<void>;

  updateDataSets(arg0: DataSetUpdate[]): Promise<void>;

  updateDataSetTypes(arg0: DataSetTypeUpdate[]): Promise<void>;

  updateMaterials(arg0: MaterialUpdate[]): Promise<void>;

  updateMaterialTypes(arg0: MaterialTypeUpdate[]): Promise<void>;

  updateExternalDataManagementSystems(arg0: ExternalDmsUpdate[]): Promise<void>;

  updatePropertyTypes(arg0: PropertyTypeUpdate[]): Promise<void>;

  updatePlugins(arg0: PluginUpdate[]): Promise<void>;

  updateVocabularies(arg0: VocabularyUpdate[]): Promise<void>;

  updateVocabularyTerms(arg0: VocabularyTermUpdate[]): Promise<void>;

  updateTags(arg0: TagUpdate[]): Promise<void>;

  updateAuthorizationGroups(arg0: AuthorizationGroupUpdate[]): Promise<void>;

  updatePersons(arg0: PersonUpdate[]): Promise<void>;

  updateOperationExecutions(arg0: OperationExecutionUpdate[]): Promise<void>;

  updateSemanticAnnotations(arg0: SemanticAnnotationUpdate[]): Promise<void>;

  updateQueries(arg0: QueryUpdate[]): Promise<void>;

  updatePersonalAccessTokens(arg0: PersonalAccessTokenUpdate[]): Promise<void>;

  getRights(
    arg0: IObjectId[],
    arg1: RightsFetchOptions,
  ): Promise<{ [index: string]: Rights }>;

  getSpaces(
    arg0: ISpaceId[],
    arg1: SpaceFetchOptions,
  ): Promise<{ [index: string]: Space }>;

  getExperiments(
    arg0: IExperimentId[],
    arg1: ExperimentFetchOptions,
  ): Promise<{ [index: string]: Experiment }>;

  getExperimentTypes(
    arg0: IEntityTypeId[],
    arg1: ExperimentTypeFetchOptions,
  ): Promise<{ [index: string]: ExperimentType }>;

  getSamples(
    arg0: ISampleId[],
    arg1: SampleFetchOptions,
  ): Promise<{ [index: string]: Sample }>;

  getSampleTypes(
    arg0: IEntityTypeId[],
    arg1: SampleTypeFetchOptions,
  ): Promise<{ [index: string]: SampleType }>;

  getDataSets(
    arg0: IDataSetId[],
    arg1: DataSetFetchOptions,
  ): Promise<{ [index: string]: DataSet }>;

  getDataSetTypes(
    arg0: IEntityTypeId[],
    arg1: DataSetTypeFetchOptions,
  ): Promise<{ [index: string]: DataSetType }>;

  getMaterials(
    arg0: IMaterialId[],
    arg1: MaterialFetchOptions,
  ): Promise<{ [index: string]: Material }>;

  getMaterialTypes(
    arg0: IEntityTypeId[],
    arg1: MaterialTypeFetchOptions,
  ): Promise<{ [index: string]: MaterialType }>;

  getPropertyTypes(
    arg0: IPropertyTypeId[],
    arg1: PropertyTypeFetchOptions,
  ): Promise<{ [index: string]: PropertyType }>;

  getVocabularies(
    arg0: IVocabularyId[],
    arg1: VocabularyFetchOptions,
  ): Promise<{ [index: string]: Vocabulary }>;

  getVocabularyTerms(
    arg0: IVocabularyTermId[],
    arg1: VocabularyTermFetchOptions,
  ): Promise<{ [index: string]: VocabularyTerm }>;

  getAuthorizationGroups(
    arg0: IAuthorizationGroupId[],
    arg1: AuthorizationGroupFetchOptions,
  ): Promise<{ [index: string]: AuthorizationGroup }>;

  getRoleAssignments(
    arg0: IRoleAssignmentId[],
    arg1: RoleAssignmentFetchOptions,
  ): Promise<{ [index: string]: RoleAssignment }>;

  getPersons(
    arg0: IPersonId[],
    arg1: PersonFetchOptions,
  ): Promise<{ [index: string]: Person }>;

  getExternalDataManagementSystems(
    arg0: IExternalDmsId[],
    arg1: ExternalDmsFetchOptions,
  ): Promise<{ [index: string]: ExternalDms }>;

  getSemanticAnnotations(
    arg0: ISemanticAnnotationId[],
    arg1: SemanticAnnotationFetchOptions,
  ): Promise<{ [index: string]: SemanticAnnotation }>;

  getOperationExecutions(
    arg0: IOperationExecutionId[],
    arg1: OperationExecutionFetchOptions,
  ): Promise<{ [index: string]: OperationExecution }>;

  getQueries(
    arg0: IQueryId[],
    arg1: QueryFetchOptions,
  ): Promise<{ [index: string]: Query }>;

  getQueryDatabases(
    arg0: IQueryDatabaseId[],
    arg1: QueryDatabaseFetchOptions,
  ): Promise<{ [index: string]: QueryDatabase }>;

  getPersonalAccessTokens(
    arg0: IPersonalAccessTokenId[],
    arg1: PersonalAccessTokenFetchOptions,
  ): Promise<{ [index: string]: PersonalAccessToken }>;

  searchSpaces(
    arg0: SpaceSearchCriteria,
    arg1: SpaceFetchOptions,
  ): Promise<SearchResult<Space>>;

  searchProjects(
    arg0: ProjectSearchCriteria,
    arg1: ProjectFetchOptions,
  ): Promise<SearchResult<Project>>;

  searchExperiments(
    arg0: ExperimentSearchCriteria,
    arg1: ExperimentFetchOptions,
  ): Promise<SearchResult<Experiment>>;

  searchExperimentTypes(
    arg0: ExperimentTypeSearchCriteria,
    arg1: ExperimentTypeFetchOptions,
  ): Promise<SearchResult<ExperimentType>>;

  searchSamples(
    arg0: SampleSearchCriteria,
    arg1: SampleFetchOptions,
  ): Promise<SearchResult<Sample>>;

  searchSampleTypes(
    arg0: SampleTypeSearchCriteria,
    arg1: SampleTypeFetchOptions,
  ): Promise<SearchResult<SampleType>>;

  searchDataSets(
    arg0: DataSetSearchCriteria,
    arg1: DataSetFetchOptions,
  ): Promise<SearchResult<DataSet>>;

  searchDataSetTypes(
    arg0: DataSetTypeSearchCriteria,
    arg1: DataSetTypeFetchOptions,
  ): Promise<SearchResult<DataSetType>>;

  searchMaterials(
    arg0: MaterialSearchCriteria,
    arg1: MaterialFetchOptions,
  ): Promise<SearchResult<Material>>;

  searchExternalDataManagementSystems(
    arg0: $ch$ethz$sis$openbis$generic$asapi$v3$dto$externaldms$search$ExternalDmsSearchCriteria$,
    arg1: ExternalDmsFetchOptions,
  ): Promise<SearchResult<ExternalDms>>;

  searchMaterialTypes(
    arg0: MaterialTypeSearchCriteria,
    arg1: MaterialTypeFetchOptions,
  ): Promise<SearchResult<MaterialType>>;

  searchPlugins(
    arg0: PluginSearchCriteria,
    arg1: PluginFetchOptions,
  ): Promise<SearchResult<Plugin>>;

  searchVocabularies(
    arg0: VocabularySearchCriteria,
    arg1: VocabularyFetchOptions,
  ): Promise<SearchResult<Vocabulary>>;

  searchVocabularyTerms(
    arg0: VocabularyTermSearchCriteria,
    arg1: VocabularyTermFetchOptions,
  ): Promise<SearchResult<VocabularyTerm>>;

  searchTags(
    arg0: TagSearchCriteria,
    arg1: TagFetchOptions,
  ): Promise<SearchResult<Tag>>;

  searchAuthorizationGroups(
    arg0: AuthorizationGroupSearchCriteria,
    arg1: AuthorizationGroupFetchOptions,
  ): Promise<SearchResult<AuthorizationGroup>>;

  searchRoleAssignments(
    arg0: RoleAssignmentSearchCriteria,
    arg1: RoleAssignmentFetchOptions,
  ): Promise<SearchResult<RoleAssignment>>;

  searchPersons(
    arg0: PersonSearchCriteria,
    arg1: PersonFetchOptions,
  ): Promise<SearchResult<Person>>;

  searchCustomASServices(
    arg0: CustomASServiceSearchCriteria,
    arg1: CustomASServiceFetchOptions,
  ): Promise<SearchResult<CustomASService>>;

  searchSearchDomainServices(
    arg0: SearchDomainServiceSearchCriteria,
    arg1: SearchDomainServiceFetchOptions,
  ): Promise<SearchResult<SearchDomainService>>;

  searchAggregationServices(
    arg0: AggregationServiceSearchCriteria,
    arg1: AggregationServiceFetchOptions,
  ): Promise<SearchResult<AggregationService>>;

  searchReportingServices(
    arg0: ReportingServiceSearchCriteria,
    arg1: ReportingServiceFetchOptions,
  ): Promise<SearchResult<ReportingService>>;

  searchProcessingServices(
    arg0: ProcessingServiceSearchCriteria,
    arg1: ProcessingServiceFetchOptions,
  ): Promise<SearchResult<ProcessingService>>;

  searchObjectKindModifications(
    arg0: ObjectKindModificationSearchCriteria,
    arg1: ObjectKindModificationFetchOptions,
  ): Promise<SearchResult<ObjectKindModification>>;

  searchGlobally(
    arg0: GlobalSearchCriteria,
    arg1: GlobalSearchObjectFetchOptions,
  ): Promise<SearchResult<GlobalSearchObject>>;

  searchOperationExecutions(
    arg0: OperationExecutionSearchCriteria,
    arg1: OperationExecutionFetchOptions,
  ): Promise<SearchResult<OperationExecution>>;

  searchDataStores(
    arg0: DataStoreSearchCriteria,
    arg1: DataStoreFetchOptions,
  ): Promise<SearchResult<DataStore>>;

  searchSemanticAnnotations(
    arg0: SemanticAnnotationSearchCriteria,
    arg1: SemanticAnnotationFetchOptions,
  ): Promise<SearchResult<SemanticAnnotation>>;

  searchPropertyTypes(
    arg0: PropertyTypeSearchCriteria,
    arg1: PropertyTypeFetchOptions,
  ): Promise<SearchResult<PropertyType>>;

  searchPropertyAssignments(
    arg0: PropertyAssignmentSearchCriteria,
    arg1: PropertyAssignmentFetchOptions,
  ): Promise<SearchResult<PropertyAssignment>>;

  searchQueries(
    arg0: QuerySearchCriteria,
    arg1: QueryFetchOptions,
  ): Promise<SearchResult<Query>>;

  searchQueryDatabases(
    arg0: QueryDatabaseSearchCriteria,
    arg1: QueryDatabaseFetchOptions,
  ): Promise<SearchResult<QueryDatabase>>;

  deleteProjects(
    arg0: IProjectId[],
    arg1: ProjectDeletionOptions,
  ): Promise<void>;

  deleteExperiments(
    arg0: IExperimentId[],
    arg1: ExperimentDeletionOptions,
  ): Promise<IDeletionId>;

  deleteSamples(
    arg0: ISampleId[],
    arg1: SampleDeletionOptions,
  ): Promise<IDeletionId>;

  deleteDataSets(
    arg0: IDataSetId[],
    arg1: DataSetDeletionOptions,
  ): Promise<IDeletionId>;

  deleteMaterials(
    arg0: IMaterialId[],
    arg1: MaterialDeletionOptions,
  ): Promise<void>;

  deletePlugins(arg0: IPluginId[], arg1: PluginDeletionOptions): Promise<void>;

  deletePropertyTypes(
    arg0: IPropertyTypeId[],
    arg1: PropertyTypeDeletionOptions,
  ): Promise<void>;

  deleteVocabularies(
    arg0: IVocabularyId[],
    arg1: VocabularyDeletionOptions,
  ): Promise<void>;

  deleteVocabularyTerms(
    arg0: IVocabularyTermId[],
    arg1: VocabularyTermDeletionOptions,
  ): Promise<void>;

  deleteExperimentTypes(
    arg0: IEntityTypeId[],
    arg1: ExperimentTypeDeletionOptions,
  ): Promise<void>;

  deleteSampleTypes(
    arg0: IEntityTypeId[],
    arg1: SampleTypeDeletionOptions,
  ): Promise<void>;

  deleteDataSetTypes(
    arg0: IEntityTypeId[],
    arg1: DataSetTypeDeletionOptions,
  ): Promise<void>;

  deleteMaterialTypes(
    arg0: IEntityTypeId[],
    arg1: MaterialTypeDeletionOptions,
  ): Promise<void>;

  deleteExternalDataManagementSystems(
    arg0: IExternalDmsId[],
    arg1: ExternalDmsDeletionOptions,
  ): Promise<void>;

  deleteTags(arg0: ITagId[], arg1: TagDeletionOptions): Promise<void>;

  deleteAuthorizationGroups(
    arg0: IAuthorizationGroupId[],
    arg1: AuthorizationGroupDeletionOptions,
  ): Promise<void>;

  deleteRoleAssignments(
    arg0: IRoleAssignmentId[],
    arg1: RoleAssignmentDeletionOptions,
  ): Promise<void>;

  deleteOperationExecutions(
    arg0: IOperationExecutionId[],
    arg1: OperationExecutionDeletionOptions,
  ): Promise<void>;

  deleteSemanticAnnotations(
    arg0: ISemanticAnnotationId[],
    arg1: SemanticAnnotationDeletionOptions,
  ): Promise<void>;

  deleteQueries(arg0: IQueryId[], arg1: QueryDeletionOptions): Promise<void>;

  deletePersons(arg0: IPersonId[], arg1: PersonDeletionOptions): Promise<void>;

  deletePersonalAccessTokens(
    arg0: IPersonalAccessTokenId[],
    arg1: PersonalAccessTokenDeletionOptions,
  ): Promise<void>;

  searchDeletions(
    arg0: DeletionSearchCriteria,
    arg1: DeletionFetchOptions,
  ): Promise<SearchResult<Deletion>>;

  searchEvents(
    arg0: EventSearchCriteria,
    arg1: EventFetchOptions,
  ): Promise<SearchResult<Event>>;

  searchPersonalAccessTokens(
    arg0: PersonalAccessTokenSearchCriteria,
    arg1: PersonalAccessTokenFetchOptions,
  ): Promise<SearchResult<PersonalAccessToken>>;

  searchSessionInformation(
    arg0: SessionInformationSearchCriteria,
    arg1: SessionInformationFetchOptions,
  ): Promise<SearchResult<SessionInformation>>;

  revertDeletions(arg0: IDeletionId[]): Promise<void>;

  confirmDeletions(arg0: IDeletionId[]): Promise<void>;

  executeCustomASService(
    arg0: ICustomASServiceId,
    arg1: CustomASServiceExecutionOptions,
  ): Promise<any>;

  executeSearchDomainService(
    arg0: SearchDomainServiceExecutionOptions,
  ): Promise<SearchResult<SearchDomainServiceExecutionResult>>;

  executeAggregationService(
    arg0: IDssServiceId,
    arg1: AggregationServiceExecutionOptions,
  ): Promise<TableModel>;

  executeReportingService(
    arg0: IDssServiceId,
    arg1: ReportingServiceExecutionOptions,
  ): Promise<TableModel>;

  executeProcessingService(
    arg0: IDssServiceId,
    arg1: ProcessingServiceExecutionOptions,
  ): Promise<void>;

  executeSql(arg0: string, arg1: SqlExecutionOptions): Promise<TableModel>;

  evaluatePlugin(
    arg0: PluginEvaluationOptions,
  ): Promise<PluginEvaluationResult>;

  archiveDataSets(
    arg0: IDataSetId[],
    arg1: DataSetArchiveOptions,
  ): Promise<void>;

  unarchiveDataSets(
    arg0: IDataSetId[],
    arg1: DataSetUnarchiveOptions,
  ): Promise<void>;

  lockDataSets(arg0: IDataSetId[], arg1: DataSetLockOptions): Promise<void>;

  unlockDataSets(arg0: IDataSetId[], arg1: DataSetUnlockOptions): Promise<void>;

  executeOperations(
    arg0: string,
    arg1: IOperation[],
    arg2: IOperationExecutionOptions,
  ): Promise<IOperationExecutionResults>;

  getServerInformation(): Promise<{ [index: string]: string }>;

  getServerPublicInformation(): Promise<{ [index: string]: string }>;

  createPermIdStrings(arg0: number): Promise<string[]>;

  createCodes(arg0: string, arg1: EntityKind, arg2: number): Promise<string[]>;

  searchFiles(
    arg0: DataSetFileSearchCriteria,
    arg1: DataSetFileFetchOptions,
  ): Promise<SearchResult<DataSetFile>>;

  downloadFiles(
    arg0: IDataSetFileId[],
    arg1: DataSetFileDownloadOptions,
  ): Promise<$java$io$InputStream$>;

  createFastDownloadSession(
    arg0: IDataSetFileId[],
    arg1: FastDownloadSessionOptions,
  ): Promise<FastDownloadSession>;

  createUploadedDataSet(arg0: UploadedDataSetCreation): Promise<DataSetPermId>;

  uploadFileWorkspaceDSS(arg0: $java$nio$file$Path$): Promise<string>;

  createDataSetsAS(arg0: DataSetCreation[]): Promise<DataSetPermId[]>;

  createDataSetsDSS(arg0: FullDataSetCreation[]): Promise<DataSetPermId[]>;

  getSessionToken(): Promise<string>;

  getManagedPersonalAccessToken(
    arg0: string,
  ): Promise<PersonalAccessTokenPermId>;

  getSemanticSubjectCreation(
    arg0: EntityKind,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: string,
  ): Promise<SemanticAnnotationCreation>;

  getSemanticPredicateWithSubjectCreation(
    arg0: EntityKind,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: string,
    arg5: string,
  ): Promise<SemanticAnnotationCreation>;

  getSemanticPredicateCreation(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
  ): Promise<SemanticAnnotationCreation>;

  getProjects(
    arg0: IProjectId[],
    arg1: ProjectFetchOptions,
  ): Promise<{ [index: string]: Project }>;

  getPlugins(
    arg0: IPluginId[],
    arg1: PluginFetchOptions,
  ): Promise<{ [index: string]: Plugin }>;

  deleteSpaces(arg0: ISpaceId[], arg1: SpaceDeletionOptions): Promise<void>;

  createProjects(arg0: ProjectCreation[]): Promise<ProjectPermId[]>;

  executeQuery(
    arg0: IQueryId,
    arg1: QueryExecutionOptions,
  ): Promise<TableModel>;

  getTags(
    arg0: ITagId[],
    arg1: TagFetchOptions,
  ): Promise<{ [index: string]: Tag }>;

  new (arg0: string, arg1: string, arg2: number): OpenBIS;

  new (arg0: string, arg1: string): OpenBIS;

  new (arg0: string, arg1: number): OpenBIS;

  new (arg0: string): OpenBIS;
}

export interface Attachment
  extends Serializable,
    IDescriptionHolder,
    IRegistrationDateHolder,
    IRegistratorHolder {
  fetchOptions: AttachmentFetchOptions;
  fileName: string;
  title: string;
  permlink: string;
  latestVersionPermlink: string;
  version: number;
  previousVersion: Attachment;
  content: any;

  getContent(): number[];

  getFileName(): string;

  getVersion(): number;

  getFetchOptions(): AttachmentFetchOptions;

  setFetchOptions(arg0: AttachmentFetchOptions): void;

  setFileName(arg0: string): void;

  getPermlink(): string;

  setPermlink(arg0: string): void;

  getLatestVersionPermlink(): string;

  setLatestVersionPermlink(arg0: string): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  getPreviousVersion(): Attachment;

  setPreviousVersion(arg0: Attachment): void;

  setContent(arg0: number[]): void;

  setDescription(arg0: string): void;

  setVersion(arg0: number): void;

  getTitle(): string;

  setTitle(arg0: string): void;

  getDescription(): string;

  new (): Attachment;
}

export interface AttachmentCreation extends ICreation {
  fileName: string;
  title: string;
  description: string;
  content: any;

  getContent(): number[];

  getFileName(): string;

  setFileName(arg0: string): void;

  setContent(arg0: number[]): void;

  setDescription(arg0: string): void;

  getTitle(): string;

  setTitle(arg0: string): void;

  getDescription(): string;

  new (): AttachmentCreation;
}

export interface AttachmentFetchOptions
  extends FetchOptions<Attachment>,
    Serializable {
  registrator: PersonFetchOptions;
  previousVersion: AttachmentFetchOptions;
  content: EmptyFetchOptions;
  sort: AttachmentSortOptions;
  sortBy: AttachmentSortOptions;

  hasRegistrator(): boolean;

  hasPreviousVersion(): boolean;

  getSortBy(): SortOptions<any>;

  getSortBy(): AttachmentSortOptions;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  withPreviousVersion(): AttachmentFetchOptions;

  withPreviousVersionUsing(
    arg0: AttachmentFetchOptions,
  ): AttachmentFetchOptions;

  withContentUsing(arg0: EmptyFetchOptions): EmptyFetchOptions;

  withContent(): EmptyFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): AttachmentSortOptions;

  hasContent(): boolean;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): AttachmentFetchOptions;
}

export interface AttachmentSortOptions extends SortOptions<Attachment> {
  getSortings(): Sorting[];

  new (): AttachmentSortOptions;
}

export interface AttachmentFileName extends IAttachmentId, Serializable {
  fileName: string;

  getFileName(): string;

  new (arg0: string): AttachmentFileName;

  new (): AttachmentFileName;
}

export interface IAttachmentId extends IObjectId {}

export interface AttachmentListUpdateValue
  extends ListUpdateValue<
    AttachmentCreation,
    IAttachmentId,
    AttachmentCreation,
    any
  > {
  actions: ListUpdateAction<any>[];

  add(arg0: ADD[]): void;

  remove(arg0: REMOVE[]): void;

  set(arg0: SET[]): void;

  getActions(): ListUpdateAction<ACTION>[];

  getAdded(): ADD[];

  getRemoved(): REMOVE[];

  getSet(): SET[];

  hasActions(): boolean;

  setActions(arg0: ListUpdateAction<ACTION>[]): void;

  new (): AttachmentListUpdateValue;
}

export interface AuthorizationGroup
  extends Serializable,
    IPermIdHolder,
    ICodeHolder,
    IDescriptionHolder,
    IRegistrationDateHolder,
    IRegistratorHolder,
    IModificationDateHolder {
  fetchOptions: AuthorizationGroupFetchOptions;
  permId: AuthorizationGroupPermId;
  users: Person[];
  roleAssignments: RoleAssignment[];

  getFetchOptions(): AuthorizationGroupFetchOptions;

  setFetchOptions(arg0: AuthorizationGroupFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setPermId(arg0: AuthorizationGroupPermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getUsers(): Person[];

  setUsers(arg0: Person[]): void;

  setRoleAssignments(arg0: RoleAssignment[]): void;

  getRoleAssignments(): RoleAssignment[];

  getPermId(): AuthorizationGroupPermId;

  getPermId(): IObjectId;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): AuthorizationGroup;
}

export interface AuthorizationGroupCreation extends ICreation, IObjectCreation {
  code: string;
  description: string;
  userIds: IPersonId[];

  getUserIds(): IPersonId[];

  setUserIds(arg0: IPersonId[]): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): AuthorizationGroupCreation;
}

export interface CreateAuthorizationGroupsOperation
  extends CreateObjectsOperation<AuthorizationGroupCreation> {
  creations: AuthorizationGroupCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateAuthorizationGroupsOperation;

  new (arg0: AuthorizationGroupCreation[]): CreateAuthorizationGroupsOperation;

  new (arg0: AuthorizationGroupCreation[]): CreateAuthorizationGroupsOperation;
}

export interface CreateAuthorizationGroupsOperationResult
  extends CreateObjectsOperationResult<AuthorizationGroupPermId> {
  objectIds: AuthorizationGroupPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateAuthorizationGroupsOperationResult;

  new (
    arg0: AuthorizationGroupPermId[],
  ): CreateAuthorizationGroupsOperationResult;
}

export interface AuthorizationGroupDeletionOptions
  extends AbstractObjectDeletionOptions<AuthorizationGroupDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): AuthorizationGroupDeletionOptions;
}

export interface DeleteAuthorizationGroupsOperation
  extends DeleteObjectsOperation<
    IAuthorizationGroupId,
    AuthorizationGroupDeletionOptions
  > {
  options: AuthorizationGroupDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteAuthorizationGroupsOperation;

  new (
    arg0: IAuthorizationGroupId[],
    arg1: AuthorizationGroupDeletionOptions,
  ): DeleteAuthorizationGroupsOperation;
}

export interface DeleteAuthorizationGroupsOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteAuthorizationGroupsOperationResult;
}

export interface AuthorizationGroupFetchOptions
  extends FetchOptions<AuthorizationGroup>,
    Serializable {
  registrator: PersonFetchOptions;
  users: PersonFetchOptions;
  roleAssignments: RoleAssignmentFetchOptions;
  sort: AuthorizationGroupSortOptions;
  sortBy: AuthorizationGroupSortOptions;

  hasRegistrator(): boolean;

  getSortBy(): SortOptions<any>;

  getSortBy(): AuthorizationGroupSortOptions;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasUsers(): boolean;

  hasRoleAssignments(): boolean;

  withUsers(): PersonFetchOptions;

  withUsersUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  withRoleAssignments(): RoleAssignmentFetchOptions;

  withRoleAssignmentsUsing(
    arg0: RoleAssignmentFetchOptions,
  ): RoleAssignmentFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): AuthorizationGroupSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): AuthorizationGroupFetchOptions;
}

export interface AuthorizationGroupSortOptions
  extends SortOptions<AuthorizationGroup> {
  code: SortOrder;

  code(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): AuthorizationGroupSortOptions;
}

export interface GetAuthorizationGroupsOperation
  extends GetObjectsOperation<
    IAuthorizationGroupId,
    AuthorizationGroupFetchOptions
  > {
  fetchOptions: AuthorizationGroupFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetAuthorizationGroupsOperation;

  new (
    arg0: IAuthorizationGroupId[],
    arg1: AuthorizationGroupFetchOptions,
  ): GetAuthorizationGroupsOperation;
}

export interface GetAuthorizationGroupsOperationResult
  extends GetObjectsOperationResult<IAuthorizationGroupId, AuthorizationGroup> {
  ids: IAuthorizationGroupId[];
  objects: AuthorizationGroup[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetAuthorizationGroupsOperationResult;

  new (arg0: {
    [index: string]: AuthorizationGroup;
  }): GetAuthorizationGroupsOperationResult;
}

export interface AuthorizationGroupPermId
  extends ObjectPermId,
    IAuthorizationGroupId,
    Serializable {
  getPermId(): string;

  new (arg0: string): AuthorizationGroupPermId;

  new (): AuthorizationGroupPermId;
}

export interface IAuthorizationGroupId extends IObjectId {}

export interface AuthorizationGroupSearchCriteria
  extends AbstractObjectSearchCriteria<IAuthorizationGroupId> {
  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withUser(): PersonSearchCriteria;

  withOrOperator(): AuthorizationGroupSearchCriteria;

  withAndOperator(): AuthorizationGroupSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): AuthorizationGroupSearchCriteria;
}

export interface SearchAuthorizationGroupsOperation
  extends SearchObjectsOperation<
    AuthorizationGroupSearchCriteria,
    AuthorizationGroupFetchOptions
  > {
  criteria: AuthorizationGroupSearchCriteria;
  fetchOptions: AuthorizationGroupFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchAuthorizationGroupsOperation;

  new (
    arg0: AuthorizationGroupSearchCriteria,
    arg1: AuthorizationGroupFetchOptions,
  ): SearchAuthorizationGroupsOperation;
}

export interface SearchAuthorizationGroupsOperationResult
  extends SearchObjectsOperationResult<AuthorizationGroup> {
  searchResult: SearchResult<AuthorizationGroup>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchAuthorizationGroupsOperationResult;

  new (
    arg0: SearchResult<AuthorizationGroup>,
  ): SearchAuthorizationGroupsOperationResult;
}

export interface AuthorizationGroupUpdate
  extends IUpdate,
    IObjectUpdate<IAuthorizationGroupId> {
  groupId: IAuthorizationGroupId;
  description: FieldUpdateValue<string>;
  userIds: IdListUpdateValue<IPersonId>;

  getObjectId(): IObjectId;

  getObjectId(): IAuthorizationGroupId;

  getUserIds(): IdListUpdateValue<IPersonId>;

  setAuthorizationGroupId(arg0: IAuthorizationGroupId): void;

  setUserIdActions(arg0: ListUpdateAction<IPersonId>[]): void;

  getAuthorizationGroupId(): IAuthorizationGroupId;

  setDescription(arg0: string): void;

  getDescription(): FieldUpdateValue<string>;

  new (): AuthorizationGroupUpdate;
}

export interface UpdateAuthorizationGroupsOperation
  extends UpdateObjectsOperation<AuthorizationGroupUpdate> {
  updates: AuthorizationGroupUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateAuthorizationGroupsOperation;

  new (arg0: AuthorizationGroupUpdate[]): UpdateAuthorizationGroupsOperation;

  new (arg0: AuthorizationGroupUpdate[]): UpdateAuthorizationGroupsOperation;
}

export interface UpdateAuthorizationGroupsOperationResult
  extends UpdateObjectsOperationResult<AuthorizationGroupPermId> {
  objectIds: AuthorizationGroupPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateAuthorizationGroupsOperationResult;

  new (
    arg0: AuthorizationGroupPermId[],
  ): UpdateAuthorizationGroupsOperationResult;
}

export interface ITableCell extends Serializable {}

export interface ObjectToString extends Serializable {
  append(arg0: string, arg1: any): ObjectToString;

  new (arg0: any): ObjectToString;
}

export interface Relationship extends Serializable {
  childAnnotations: { [index: string]: string };
  parentAnnotations: { [index: string]: string };

  getChildAnnotations(): { [index: string]: string };

  setChildAnnotations(arg0: { [index: string]: string }): void;

  getParentAnnotations(): { [index: string]: string };

  setParentAnnotations(arg0: { [index: string]: string }): void;

  addChildAnnotation(arg0: string, arg1: string): Relationship;

  addParentAnnotation(arg0: string, arg1: string): Relationship;

  new (): Relationship;
}

export interface TableColumn extends Serializable {
  title: string;

  getTitle(): string;

  new (arg0: string): TableColumn;

  new (): TableColumn;
}

export interface TableDoubleCell extends ITableCell {
  value: number;

  getValue(): number;

  new (arg0: number): TableDoubleCell;

  new (): TableDoubleCell;
}

export interface TableLongCell extends ITableCell {
  value: number;

  getValue(): number;

  new (arg0: number): TableLongCell;

  new (): TableLongCell;
}

export interface TableModel extends Serializable {
  columns: TableColumn[];
  rows: ITableCell[][];

  getColumns(): TableColumn[];

  getRows(): ITableCell[][];

  new (): TableModel;

  new (arg0: TableColumn[], arg1: ITableCell[][]): TableModel;
}

export interface TableStringCell extends ITableCell {
  value: string;

  getValue(): string;

  new (arg0: string): TableStringCell;

  new (): TableStringCell;
}

export interface CreateObjectsOperation<C> extends IOperation {
  creations: C[];

  getMessage(): string;

  getCreations(): C[];

  new (arg0: C[]): CreateObjectsOperation<any>;

  new (arg0: C[]): CreateObjectsOperation<any>;
}

export interface CreateObjectsOperationResult<ID> extends IOperationResult {
  objectIds: ID[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateObjectsOperationResult<any>;

  new (arg0: ID[]): CreateObjectsOperationResult<any>;
}

export interface ICreation extends Serializable {}

export interface IObjectCreation {}

export interface DeleteObjectsOperation<ID, OPTIONS> extends IOperation {
  objectIds: ID[];
  options: OPTIONS;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteObjectsOperation<any, any>;

  new (arg0: ID[], arg1: OPTIONS): DeleteObjectsOperation<any, any>;
}

export interface DeleteObjectsOperationResult extends IOperationResult {
  getMessage(): string;

  new (): DeleteObjectsOperationResult;
}

export interface DeleteObjectsWithTrashOperationResult
  extends DeleteObjectsOperationResult {
  deletionId: IDeletionId;

  getMessage(): string;

  getDeletionId(): IDeletionId;

  new (): DeleteObjectsWithTrashOperationResult;

  new (arg0: IDeletionId): DeleteObjectsWithTrashOperationResult;
}

export interface DeleteObjectsWithoutTrashOperationResult
  extends DeleteObjectsOperationResult {
  getMessage(): string;

  new (): DeleteObjectsWithoutTrashOperationResult;
}

export interface EmptyFetchOptions extends FetchOptions<void> {
  sortBy: SortOptions<void>;

  getSortBy(): SortOptions<void>;

  sortBy(): SortOptions<void>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): EmptyFetchOptions;
}

export interface EntitySortOptions<OBJECT> extends SortOptions<OBJECT> {
  registrationDate: SortOrder;
  modificationDate: SortOrder;
  permId: SortOrder;
  code: SortOrder;

  code(): SortOrder;

  registrationDate(): SortOrder;

  getRegistrationDate(): SortOrder;

  permId(): SortOrder;

  modificationDate(): SortOrder;

  getModificationDate(): SortOrder;

  getPermId(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): EntitySortOptions<any>;
}

export interface EntityWithPropertiesSortOptions<OBJECT>
  extends EntitySortOptions<OBJECT> {
  type: SortOrder;
  fetchedFieldsScore: SortOrder;

  type(): SortOrder;

  getProperty(arg0: string): SortOrder;

  getType(): SortOrder;

  property(arg0: string): SortOrder;

  fetchedFieldsScore(): SortOrder;

  getFetchedFieldsScore(): SortOrder;

  stringMatchPropertyScore(arg0: string, arg1: string): SortOrder;

  stringPrefixMatchPropertyScore(arg0: string, arg1: string): SortOrder;

  stringMatchAnyPropertyScore(arg0: string): SortOrder;

  stringPrefixMatchAnyPropertyScore(arg0: string): SortOrder;

  code(): SortOrder;

  registrationDate(): SortOrder;

  getRegistrationDate(): SortOrder;

  permId(): SortOrder;

  modificationDate(): SortOrder;

  getModificationDate(): SortOrder;

  getPermId(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): EntityWithPropertiesSortOptions<any>;
}

export interface FetchOptions<OBJECT> extends Serializable {
  count: number;
  from: number;
  cacheMode: CacheMode;
  sortBy: SortOptions<OBJECT>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  getSortBy(): SortOptions<OBJECT>;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  sortBy(): SortOptions<OBJECT>;

  new (): FetchOptions<any>;
}

export interface FetchOptionsToStringBuilder extends Serializable {
  addFetchOption(
    arg0: string,
    arg1: FetchOptions<any>,
  ): FetchOptionsToStringBuilder;

  new (arg0: string, arg1: FetchOptions<any>): FetchOptionsToStringBuilder;
}

export interface IFetchOptionsMatcher {
  areMatching(arg0: any, arg1: any): boolean;
}

export interface IFetchPropertyHandler extends Serializable {
  areMatching(arg0: any, arg1: any, arg2: IFetchOptionsMatcher): boolean;
}

export interface SortOptions<OBJECT> extends Serializable {
  sortings: Sorting[];

  getSortings(): Sorting[];

  new (): SortOptions<any>;
}

export interface SortOrder extends Serializable {
  asc: boolean;

  desc(): void;

  isAsc(): boolean;

  asc(): void;

  new (): SortOrder;
}

export interface Sorting extends Serializable {
  field: string;
  order: SortOrder;
  parameters: { [P in SortParameter]?: string };

  getField(): string;

  getParameters(): { [P in SortParameter]?: string };

  getOrder(): SortOrder;

  new (
    arg0: string,
    arg1: SortOrder,
    arg2: { [P in SortParameter]?: string },
  ): Sorting;

  new (arg0: string, arg1: SortOrder): Sorting;

  new (): Sorting;
}

export interface GetObjectsOperation<ID, FETCH_OPTIONS> extends IOperation {
  objectIds: ID[];
  fetchOptions: FETCH_OPTIONS;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetObjectsOperation<any, any>;

  new (arg0: ID[], arg1: FETCH_OPTIONS): GetObjectsOperation<any, any>;
}

export interface GetObjectsOperationResult<ID, OBJECT>
  extends IOperationResult {
  ids: ID[];
  objects: OBJECT[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetObjectsOperationResult<any, any>;

  new (arg0: { [index: string]: OBJECT }): GetObjectsOperationResult<any, any>;
}

export interface GetServerInformationOperation extends IOperation {
  getMessage(): string;

  new (): GetServerInformationOperation;
}

export interface GetServerInformationOperationResult extends IOperationResult {
  serverInformation: { [index: string]: string };

  getMessage(): string;

  getServerInformation(): { [index: string]: string };

  new (): GetServerInformationOperationResult;

  new (arg0: { [index: string]: string }): GetServerInformationOperationResult;
}

export interface GetServerPublicInformationOperation extends IOperation {
  getMessage(): string;

  new (): GetServerPublicInformationOperation;
}

export interface GetServerPublicInformationOperationResult
  extends IOperationResult {
  serverInformation: { [index: string]: string };

  getMessage(): string;

  getServerInformation(): { [index: string]: string };

  new (): GetServerPublicInformationOperationResult;

  new (arg0: {
    [index: string]: string;
  }): GetServerPublicInformationOperationResult;
}

export interface CreationId
  extends ISampleId,
    IDataSetId,
    IExperimentId,
    IProjectId,
    ISpaceId,
    IMaterialId {
  creationId: string;

  getCreationId(): string;

  setCreationId(arg0: string): void;

  new (arg0: string): CreationId;

  new (): CreationId;
}

export interface IObjectId extends Serializable {}

export interface ObjectIdentifier extends IObjectId {
  identifier: string;

  getIdentifier(): string;

  new (arg0: string): ObjectIdentifier;

  new (): ObjectIdentifier;
}

export interface ObjectPermId extends IObjectId {
  permId: string;

  getPermId(): string;

  new (arg0: string): ObjectPermId;

  new (): ObjectPermId;
}

export interface ObjectTechId extends IObjectId {
  techId: number;
  id: string;

  getTechId(): number;

  new (arg0: number): ObjectTechId;

  new (): ObjectTechId;
}

export interface IAttachmentsHolder {
  attachments: Attachment[];

  getAttachments(): Attachment[];
}

export interface ICodeHolder {
  code: string;

  getCode(): string;
}

export interface ICreationIdHolder {
  creationId: CreationId;

  getCreationId(): CreationId;
}

export interface IDataSetCodesHolder {
  dataSetCodes: string[];

  getDataSetCodes(): string[];
}

export interface IDataSetsHolder {
  dataSets: DataSet[];

  getDataSets(): DataSet[];
}

export interface IDescriptionHolder {
  description: string;

  getDescription(): string;
}

export interface IEntityType
  extends ICodeHolder,
    IDescriptionHolder,
    IModificationDateHolder,
    IPermIdHolder,
    IPropertyAssignmentsHolder,
    IValidationPluginHolder {
  getCode(): string;

  getDescription(): string;

  getModificationDate(): Date;

  getPermId(): IObjectId;

  getPropertyAssignments(): PropertyAssignment[];

  getValidationPlugin(): Plugin;
}

export interface IEntityTypeHolder {
  type: IEntityType;

  getType(): IEntityType;
}

export interface IExperimentHolder {
  experiment: Experiment;

  getExperiment(): Experiment;
}

export interface IExperimentsHolder {
  experiments: Experiment[];

  getExperiments(): Experiment[];
}

export interface IIdentifierHolder {
  identifier: ObjectIdentifier;

  getIdentifier(): ObjectIdentifier;
}

export interface ILabelHolder {
  label: string;

  getLabel(): string;
}

export interface IMaterialPropertiesHolder {
  materialProperties: { [index: string]: Material };

  getMaterialProperties(): { [index: string]: Material };

  setMaterialProperties(arg0: { [index: string]: Material }): void;

  getMaterialProperty(arg0: string): Material;

  setMaterialProperty(arg0: string, arg1: Material): void;
}

export interface IMaterialsHolder {
  materials: Material[];

  getMaterials(): Material[];
}

export interface IMetaDataUpdateHolder extends IUpdate {
  metaData: ListUpdateMapValues;

  getMetaData(): ListUpdateMapValues;
}

export interface IModificationDateHolder {
  modificationDate: Date;

  getModificationDate(): Date;
}

export interface IModifierHolder {
  modifier: Person;

  getModifier(): Person;
}

export interface INameHolder {
  name: string;

  getName(): string;
}

export interface IOwnerHolder {
  owner: Person;

  getOwner(): Person;
}

export interface IParentChildrenHolder<T> {
  children: T[];
  parents: T[];

  getChildren(): T[];

  getParents(): T[];
}

export interface IPermIdHolder {
  permId: IObjectId;

  getPermId(): IObjectId;
}

export interface IProjectHolder {
  project: Project;

  getProject(): Project;
}

export interface IProjectsHolder {
  projects: Project[];

  getProjects(): Project[];
}

export interface IPropertiesHolder {
  properties: { [index: string]: string };

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  getBooleanProperty(arg0: string): boolean;

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;
}

export interface IPropertyAssignmentsHolder {
  propertyAssignments: PropertyAssignment[];

  getPropertyAssignments(): PropertyAssignment[];
}

export interface IPropertyTypeHolder {
  propertyType: PropertyType;

  getPropertyType(): PropertyType;
}

export interface IRegistrationDateHolder {
  registrationDate: Date;

  getRegistrationDate(): Date;
}

export interface IRegistratorHolder {
  registrator: Person;

  getRegistrator(): Person;
}

export interface ISampleHolder {
  sample: Sample;

  getSample(): Sample;
}

export interface ISamplesHolder {
  samples: Sample[];

  getSamples(): Sample[];
}

export interface ISemanticAnnotationsHolder {
  semanticAnnotations: SemanticAnnotation[];

  getSemanticAnnotations(): SemanticAnnotation[];
}

export interface ISpaceHolder {
  space: Space;

  getSpace(): Space;
}

export interface ITagsHolder {
  tags: Tag[];

  getTags(): Tag[];
}

export interface IValidationPluginHolder {
  validationPlugin: Plugin;

  getValidationPlugin(): Plugin;
}

export interface IOperation extends Serializable {
  message: string;

  getMessage(): string;
}

export interface IOperationExecutionError extends Serializable {
  message: string;

  getMessage(): string;
}

export interface IOperationExecutionProgress extends Serializable {
  message: string;
  totalItemsToProcess: number;
  numItemsProcessed: number;

  getMessage(): string;

  getTotalItemsToProcess(): number;

  getNumItemsProcessed(): number;
}

export interface IOperationResult extends Serializable {
  message: string;

  getMessage(): string;
}

export interface AbstractCompositeSearchCriteria
  extends AbstractSearchCriteria {
  criteria: ISearchCriteria[];
  operator: SearchOperator;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): AbstractCompositeSearchCriteria;
}

export interface AbstractDateObjectValue extends AbstractValue<Date>, IDate {
  value: Date;

  getValue(): any;

  setValue(arg0: any): void;

  new (arg0: Date): AbstractDateObjectValue;
}

export interface AbstractDateValue extends AbstractValue<string>, IDate {
  value: string;

  getValue(): any;

  setValue(arg0: any): void;

  new (arg0: string): AbstractDateValue;
}

export interface AbstractEntitySearchCriteria<ID>
  extends AbstractObjectSearchCriteria<ID> {
  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withOrOperator(): AbstractEntitySearchCriteria<ID>;

  withAndOperator(): AbstractEntitySearchCriteria<ID>;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (): AbstractEntitySearchCriteria<any>;
}

export interface AbstractFieldSearchCriteria<T> extends AbstractSearchCriteria {
  fieldName: string;
  fieldType: SearchFieldType;
  fieldValue: T;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (arg0: string, arg1: SearchFieldType): AbstractFieldSearchCriteria<any>;
}

export interface AbstractNumberValue extends AbstractValue<number> {
  value: number;

  getValue(): any;

  setValue(arg0: any): void;

  new (arg0: number): AbstractNumberValue;
}

export interface AbstractObjectSearchCriteria<ID>
  extends AbstractCompositeSearchCriteria {
  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): AbstractObjectSearchCriteria<any>;
}

export interface AbstractSearchCriteria extends ISearchCriteria {
  isNegated(): boolean;

  new (): AbstractSearchCriteria;
}

export interface AbstractStringValue extends AbstractValue<string> {
  value: string;

  getValue(): any;

  setValue(arg0: any): void;

  new (arg0: string): AbstractStringValue;
}

export interface AbstractValue<T> extends Serializable {
  value: T;

  getValue(): T;

  setValue(arg0: T): void;

  new (arg0: T): AbstractValue<any>;
}

export interface AnyBooleanPropertySearchCriteria
  extends BooleanFieldSearchCriteria {
  thatEquals(arg0: boolean): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): AnyBooleanPropertySearchCriteria;
}

export interface AnyDatePropertySearchCriteria extends DateFieldSearchCriteria {
  setTimeZone(arg0: ITimeZone): void;

  getTimeZone(): ITimeZone;

  withTimeZone(arg0: number): DateFieldSearchCriteria;

  setFieldValue(arg0: any): void;

  setFieldValue(arg0: IDate): void;

  thatEquals(arg0: Date): void;

  thatEquals(arg0: string): void;

  formatValue(arg0: string, arg1: IDateFormat): Date;

  thatIsLaterThanOrEqualTo(arg0: Date): void;

  thatIsLaterThanOrEqualTo(arg0: string): void;

  thatIsLaterThan(arg0: Date): void;

  thatIsLaterThan(arg0: string): void;

  thatIsEarlierThanOrEqualTo(arg0: Date): void;

  thatIsEarlierThanOrEqualTo(arg0: string): void;

  thatIsEarlierThan(arg0: string): void;

  thatIsEarlierThan(arg0: Date): void;

  withServerTimeZone(): DateFieldSearchCriteria;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  isNegated(): boolean;

  new (): AnyDatePropertySearchCriteria;
}

export interface AnyFieldSearchCriteria extends StringFieldSearchCriteria {
  thatMatches(arg0: string): void;

  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): AnyFieldSearchCriteria;
}

export interface AnyNumberPropertySearchCriteria
  extends NumberFieldSearchCriteria {
  thatEquals(arg0: number): void;

  thatIsLessThan(arg0: number): void;

  thatIsLessThanOrEqualTo(arg0: number): void;

  thatIsGreaterThan(arg0: number): void;

  thatIsGreaterThanOrEqualTo(arg0: number): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): AnyNumberPropertySearchCriteria;
}

export interface AnyPropertySearchCriteria extends StringFieldSearchCriteria {
  thatMatches(arg0: string): void;

  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): AnyPropertySearchCriteria;
}

export interface AnyStringPropertySearchCriteria
  extends StringFieldSearchCriteria {
  thatMatches(arg0: string): void;

  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): AnyStringPropertySearchCriteria;
}

export interface AnyStringValue extends AbstractStringValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): AnyStringValue;
}

export interface BooleanFieldSearchCriteria
  extends AbstractFieldSearchCriteria<boolean> {
  fieldValue: boolean;

  thatEquals(arg0: boolean): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (arg0: string, arg1: SearchFieldType): BooleanFieldSearchCriteria;
}

export interface BooleanPropertySearchCriteria
  extends BooleanFieldSearchCriteria {
  thatEquals(arg0: boolean): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): BooleanPropertySearchCriteria;

  new (arg0: string): BooleanPropertySearchCriteria;
}

export interface CodeSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): CodeSearchCriteria;
}

export interface CodesSearchCriteria
  extends CollectionFieldSearchCriteria<string> {
  fieldValue: string[];

  thatIn(arg0: T[]): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): CodesSearchCriteria;
}

export interface CollectionFieldSearchCriteria<T>
  extends AbstractFieldSearchCriteria<T[]> {
  fieldValue: T[];

  thatIn(arg0: T[]): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (arg0: string, arg1: SearchFieldType): CollectionFieldSearchCriteria<any>;
}

export interface ControlledVocabularyPropertySearchCriteria
  extends AbstractFieldSearchCriteria<string> {
  fieldValue: string;

  thatEquals(arg0: string): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): ControlledVocabularyPropertySearchCriteria;

  new (arg0: string): ControlledVocabularyPropertySearchCriteria;
}

export interface DateEarlierThanOrEqualToValue extends AbstractDateValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): DateEarlierThanOrEqualToValue;

  new (arg0: string): DateEarlierThanOrEqualToValue;
}

export interface DateEarlierThanValue extends AbstractDateValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): DateEarlierThanValue;

  new (arg0: string): DateEarlierThanValue;
}

export interface DateEqualToValue extends AbstractDateValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): DateEqualToValue;

  new (arg0: string): DateEqualToValue;
}

export interface DateFieldSearchCriteria
  extends AbstractFieldSearchCriteria<IDate> {
  fieldValue: IDate;
  timeZone: ITimeZone;

  setTimeZone(arg0: ITimeZone): void;

  getTimeZone(): ITimeZone;

  withTimeZone(arg0: number): DateFieldSearchCriteria;

  setFieldValue(arg0: any): void;

  setFieldValue(arg0: IDate): void;

  thatEquals(arg0: Date): void;

  thatEquals(arg0: string): void;

  formatValue(arg0: string, arg1: IDateFormat): Date;

  thatIsLaterThanOrEqualTo(arg0: Date): void;

  thatIsLaterThanOrEqualTo(arg0: string): void;

  thatIsLaterThan(arg0: Date): void;

  thatIsLaterThan(arg0: string): void;

  thatIsEarlierThanOrEqualTo(arg0: Date): void;

  thatIsEarlierThanOrEqualTo(arg0: string): void;

  thatIsEarlierThan(arg0: string): void;

  thatIsEarlierThan(arg0: Date): void;

  withServerTimeZone(): DateFieldSearchCriteria;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  isNegated(): boolean;

  new (arg0: string, arg1: SearchFieldType): DateFieldSearchCriteria;
}

export interface DateLaterThanOrEqualToValue extends AbstractDateValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): DateLaterThanOrEqualToValue;

  new (arg0: string): DateLaterThanOrEqualToValue;
}

export interface DateLaterThanValue extends AbstractDateValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): DateLaterThanValue;

  new (arg0: string): DateLaterThanValue;
}

export interface DateObjectEarlierThanOrEqualToValue
  extends AbstractDateObjectValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): DateObjectEarlierThanOrEqualToValue;

  new (arg0: Date): DateObjectEarlierThanOrEqualToValue;
}

export interface DateObjectEarlierThanValue extends AbstractDateObjectValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): DateObjectEarlierThanValue;

  new (arg0: Date): DateObjectEarlierThanValue;
}

export interface DateObjectEqualToValue extends AbstractDateObjectValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): DateObjectEqualToValue;

  new (arg0: Date): DateObjectEqualToValue;
}

export interface DateObjectLaterThanOrEqualToValue
  extends AbstractDateObjectValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): DateObjectLaterThanOrEqualToValue;

  new (arg0: Date): DateObjectLaterThanOrEqualToValue;
}

export interface DateObjectLaterThanValue extends AbstractDateObjectValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): DateObjectLaterThanValue;

  new (arg0: Date): DateObjectLaterThanValue;
}

export interface DatePropertySearchCriteria extends DateFieldSearchCriteria {
  setTimeZone(arg0: ITimeZone): void;

  getTimeZone(): ITimeZone;

  withTimeZone(arg0: number): DateFieldSearchCriteria;

  setFieldValue(arg0: any): void;

  setFieldValue(arg0: IDate): void;

  thatEquals(arg0: Date): void;

  thatEquals(arg0: string): void;

  formatValue(arg0: string, arg1: IDateFormat): Date;

  thatIsLaterThanOrEqualTo(arg0: Date): void;

  thatIsLaterThanOrEqualTo(arg0: string): void;

  thatIsLaterThan(arg0: Date): void;

  thatIsLaterThan(arg0: string): void;

  thatIsEarlierThanOrEqualTo(arg0: Date): void;

  thatIsEarlierThanOrEqualTo(arg0: string): void;

  thatIsEarlierThan(arg0: string): void;

  thatIsEarlierThan(arg0: Date): void;

  withServerTimeZone(): DateFieldSearchCriteria;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  isNegated(): boolean;

  new (): DatePropertySearchCriteria;

  new (arg0: string): DatePropertySearchCriteria;
}

export interface DescriptionSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): DescriptionSearchCriteria;
}

export interface EnumFieldSearchCriteria<T>
  extends AbstractFieldSearchCriteria<T> {
  thatEquals(arg0: T): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (arg0: string, arg1: SearchFieldType): EnumFieldSearchCriteria<any>;
}

export interface IDate extends Serializable {}

export interface IDateFormat extends Serializable {
  format: string;

  getFormat(): string;
}

export interface ISearchCriteria extends Serializable {
  negated: boolean;

  isNegated(): boolean;
}

export interface ITimeZone extends Serializable {}

export interface IdSearchCriteria<T> extends AbstractSearchCriteria {
  id: T;

  getId(): T;

  thatEquals(arg0: T): void;

  isNegated(): boolean;

  new (): IdSearchCriteria<any>;
}

export interface IdentifierSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): IdentifierSearchCriteria;
}

export interface IdsSearchCriteria<T> extends CollectionFieldSearchCriteria<T> {
  thatIn(arg0: T[]): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): IdsSearchCriteria<any>;
}

export interface LongDateFormat extends IDateFormat {
  getFormat(): string;

  new (): LongDateFormat;
}

export interface ModificationDateSearchCriteria
  extends DateFieldSearchCriteria {
  setTimeZone(arg0: ITimeZone): void;

  getTimeZone(): ITimeZone;

  withTimeZone(arg0: number): DateFieldSearchCriteria;

  setFieldValue(arg0: any): void;

  setFieldValue(arg0: IDate): void;

  thatEquals(arg0: Date): void;

  thatEquals(arg0: string): void;

  formatValue(arg0: string, arg1: IDateFormat): Date;

  thatIsLaterThanOrEqualTo(arg0: Date): void;

  thatIsLaterThanOrEqualTo(arg0: string): void;

  thatIsLaterThan(arg0: Date): void;

  thatIsLaterThan(arg0: string): void;

  thatIsEarlierThanOrEqualTo(arg0: Date): void;

  thatIsEarlierThanOrEqualTo(arg0: string): void;

  thatIsEarlierThan(arg0: string): void;

  thatIsEarlierThan(arg0: Date): void;

  withServerTimeZone(): DateFieldSearchCriteria;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  isNegated(): boolean;

  new (): ModificationDateSearchCriteria;
}

export interface NameSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): NameSearchCriteria;
}

export interface NormalDateFormat extends IDateFormat {
  getFormat(): string;

  new (): NormalDateFormat;
}

export interface NumberEqualToValue extends AbstractNumberValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): NumberEqualToValue;

  new (arg0: number): NumberEqualToValue;
}

export interface NumberFieldSearchCriteria
  extends AbstractFieldSearchCriteria<AbstractNumberValue> {
  fieldValue: AbstractNumberValue;

  thatEquals(arg0: number): void;

  thatIsLessThan(arg0: number): void;

  thatIsLessThanOrEqualTo(arg0: number): void;

  thatIsGreaterThan(arg0: number): void;

  thatIsGreaterThanOrEqualTo(arg0: number): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (arg0: string, arg1: SearchFieldType): NumberFieldSearchCriteria;
}

export interface NumberGreaterThanOrEqualToValue extends AbstractNumberValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): NumberGreaterThanOrEqualToValue;

  new (arg0: number): NumberGreaterThanOrEqualToValue;
}

export interface NumberGreaterThanValue extends AbstractNumberValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): NumberGreaterThanValue;

  new (arg0: number): NumberGreaterThanValue;
}

export interface NumberLessThanOrEqualToValue extends AbstractNumberValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): NumberLessThanOrEqualToValue;

  new (arg0: number): NumberLessThanOrEqualToValue;
}

export interface NumberLessThanValue extends AbstractNumberValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): NumberLessThanValue;

  new (arg0: number): NumberLessThanValue;
}

export interface NumberPropertySearchCriteria
  extends NumberFieldSearchCriteria {
  thatEquals(arg0: number): void;

  thatIsLessThan(arg0: number): void;

  thatIsLessThanOrEqualTo(arg0: number): void;

  thatIsGreaterThan(arg0: number): void;

  thatIsGreaterThanOrEqualTo(arg0: number): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): NumberPropertySearchCriteria;

  new (arg0: string): NumberPropertySearchCriteria;
}

export interface PermIdSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): PermIdSearchCriteria;
}

export interface RegistrationDateSearchCriteria
  extends DateFieldSearchCriteria {
  setTimeZone(arg0: ITimeZone): void;

  getTimeZone(): ITimeZone;

  withTimeZone(arg0: number): DateFieldSearchCriteria;

  setFieldValue(arg0: any): void;

  setFieldValue(arg0: IDate): void;

  thatEquals(arg0: Date): void;

  thatEquals(arg0: string): void;

  formatValue(arg0: string, arg1: IDateFormat): Date;

  thatIsLaterThanOrEqualTo(arg0: Date): void;

  thatIsLaterThanOrEqualTo(arg0: string): void;

  thatIsLaterThan(arg0: Date): void;

  thatIsLaterThan(arg0: string): void;

  thatIsEarlierThanOrEqualTo(arg0: Date): void;

  thatIsEarlierThanOrEqualTo(arg0: string): void;

  thatIsEarlierThan(arg0: string): void;

  thatIsEarlierThan(arg0: Date): void;

  withServerTimeZone(): DateFieldSearchCriteria;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  isNegated(): boolean;

  new (): RegistrationDateSearchCriteria;
}

export interface SamplePropertySearchCriteria
  extends AbstractFieldSearchCriteria<string> {
  fieldValue: string;

  thatEquals(arg0: string): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): SamplePropertySearchCriteria;

  new (arg0: string): SamplePropertySearchCriteria;
}

export interface SearchCriteriaToStringBuilder extends Serializable {
  name: string;
  operator: SearchOperator;
  criteria: ISearchCriteria[];
  negated: boolean;

  setName(arg0: string): SearchCriteriaToStringBuilder;

  setCriteria(arg0: ISearchCriteria[]): SearchCriteriaToStringBuilder;

  setOperator(arg0: SearchOperator): SearchCriteriaToStringBuilder;

  setNegated(arg0: boolean): SearchCriteriaToStringBuilder;

  new (): SearchCriteriaToStringBuilder;
}

export interface SearchObjectsOperation<CRITERIA, FETCH_OPTIONS>
  extends IOperation {
  criteria: CRITERIA;
  fetchOptions: FETCH_OPTIONS;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchObjectsOperation<any, any>;

  new (arg0: CRITERIA, arg1: FETCH_OPTIONS): SearchObjectsOperation<any, any>;
}

export interface SearchObjectsOperationResult<OBJECT> extends IOperationResult {
  searchResult: SearchResult<OBJECT>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchObjectsOperationResult<any>;

  new (arg0: SearchResult<OBJECT>): SearchObjectsOperationResult<any>;
}

export interface SearchResult<OBJECT> extends Serializable {
  objects: OBJECT[];
  totalCount: number;

  getTotalCount(): number;

  getObjects(): OBJECT[];

  new (): SearchResult<any>;

  new (arg0: OBJECT[], arg1: number): SearchResult<any>;
}

export interface ServerTimeZone extends ITimeZone {
  new (): ServerTimeZone;
}

export interface ShortDateFormat extends IDateFormat {
  getFormat(): string;

  new (): ShortDateFormat;
}

export interface StrictlyStringPropertySearchCriteria
  extends StringFieldSearchCriteria {
  thatMatches(arg0: string): void;

  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): StrictlyStringPropertySearchCriteria;

  new (arg0: string): StrictlyStringPropertySearchCriteria;
}

export interface StringContainsExactlyValue extends AbstractStringValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): StringContainsExactlyValue;

  new (arg0: string): StringContainsExactlyValue;
}

export interface StringContainsValue extends AbstractStringValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): StringContainsValue;

  new (arg0: string): StringContainsValue;
}

export interface StringEndsWithValue extends AbstractStringValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): StringEndsWithValue;

  new (arg0: string): StringEndsWithValue;
}

export interface StringEqualToValue extends AbstractStringValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): StringEqualToValue;

  new (arg0: string): StringEqualToValue;
}

export interface StringFieldSearchCriteria
  extends AbstractFieldSearchCriteria<AbstractStringValue> {
  fieldValue: AbstractStringValue;
  useWildcards: boolean;

  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (arg0: string, arg1: SearchFieldType): StringFieldSearchCriteria;
}

export interface StringGreaterThanOrEqualToValue extends AbstractStringValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): StringGreaterThanOrEqualToValue;

  new (arg0: string): StringGreaterThanOrEqualToValue;
}

export interface StringGreaterThanValue extends AbstractStringValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): StringGreaterThanValue;

  new (arg0: string): StringGreaterThanValue;
}

export interface StringLessThanOrEqualToValue extends AbstractStringValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): StringLessThanOrEqualToValue;

  new (arg0: string): StringLessThanOrEqualToValue;
}

export interface StringLessThanValue extends AbstractStringValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): StringLessThanValue;

  new (arg0: string): StringLessThanValue;
}

export interface StringMatchesValue extends AbstractStringValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): StringMatchesValue;

  new (arg0: string): StringMatchesValue;
}

export interface StringPropertySearchCriteria
  extends StringFieldSearchCriteria {
  thatMatches(arg0: string): void;

  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): StringPropertySearchCriteria;

  new (arg0: string): StringPropertySearchCriteria;
}

export interface StringStartsWithValue extends AbstractStringValue {
  getValue(): any;

  setValue(arg0: any): void;

  new (): StringStartsWithValue;

  new (arg0: string): StringStartsWithValue;
}

export interface TechIdSearchCriteria extends NumberFieldSearchCriteria {
  thatEquals(arg0: number): void;

  thatIsLessThan(arg0: number): void;

  thatIsLessThanOrEqualTo(arg0: number): void;

  thatIsGreaterThan(arg0: number): void;

  thatIsGreaterThanOrEqualTo(arg0: number): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): TechIdSearchCriteria;
}

export interface TextAttributeSearchCriteria extends AbstractSearchCriteria {
  fieldValue: AbstractStringValue;

  getFieldValue(): AbstractStringValue;

  thatMatches(arg0: string): void;

  isNegated(): boolean;

  new (): TextAttributeSearchCriteria;
}

export interface TimeZone extends ITimeZone {
  hourOffset: number;

  getHourOffset(): number;

  new (): TimeZone;

  new (arg0: number): TimeZone;
}

export interface FieldUpdateValue<T> extends Serializable {
  isModified: boolean;
  value: T;

  getValue(): T;

  setValue(arg0: T): void;

  isModified(): boolean;

  new (): FieldUpdateValue<any>;
}

export interface IObjectUpdate<ID> {
  objectId: ID;

  getObjectId(): ID;
}

export interface IUpdate extends Serializable {}

export interface IdListUpdateValue<T> extends ListUpdateValue<T, T, T, T> {
  actions: ListUpdateAction<T>[];

  add(arg0: ADD[]): void;

  remove(arg0: REMOVE[]): void;

  set(arg0: SET[]): void;

  getActions(): ListUpdateAction<ACTION>[];

  getAdded(): ADD[];

  getRemoved(): REMOVE[];

  getSet(): SET[];

  hasActions(): boolean;

  setActions(arg0: ListUpdateAction<ACTION>[]): void;

  new (): IdListUpdateValue<any>;
}

export interface ListUpdateMapValues
  extends ListUpdateValue<
    { [index: string]: string },
    string,
    { [index: string]: string },
    any
  > {
  actions: ListUpdateAction<any>[];

  put(arg0: string, arg1: string): ListUpdateMapValues;

  add(arg0: ADD[]): void;

  remove(arg0: REMOVE[]): void;

  set(arg0: SET[]): void;

  getActions(): ListUpdateAction<ACTION>[];

  getAdded(): ADD[];

  getRemoved(): REMOVE[];

  getSet(): SET[];

  hasActions(): boolean;

  setActions(arg0: ListUpdateAction<ACTION>[]): void;

  new (): ListUpdateMapValues;
}

export interface ListUpdateValue<ADD, REMOVE, SET, ACTION>
  extends Serializable {
  actions: ListUpdateAction<ACTION>[];

  add(arg0: ADD[]): void;

  remove(arg0: REMOVE[]): void;

  set(arg0: SET[]): void;

  getActions(): ListUpdateAction<ACTION>[];

  getAdded(): ADD[];

  getRemoved(): REMOVE[];

  getSet(): SET[];

  hasActions(): boolean;

  setActions(arg0: ListUpdateAction<ACTION>[]): void;

  new (): ListUpdateValue<any, any, any, any>;
}

export interface ListUpdateAction<T> extends Serializable {
  items: T[];

  setItems(arg0: T[]): void;

  getItems(): T[];

  new (): ListUpdateAction<any>;
}

export interface ListUpdateActionAdd<ADD> extends ListUpdateAction<ADD> {
  setItems(arg0: T[]): void;

  getItems(): T[];

  new (): ListUpdateActionAdd<any>;
}

export interface ListUpdateActionRemove<REMOVE>
  extends ListUpdateAction<REMOVE> {
  setItems(arg0: T[]): void;

  getItems(): T[];

  new (): ListUpdateActionRemove<any>;
}

export interface ListUpdateActionSet<SET> extends ListUpdateAction<SET> {
  setItems(arg0: T[]): void;

  getItems(): T[];

  new (): ListUpdateActionSet<any>;
}

export interface RelationshipUpdate extends Serializable {
  childAnnotations: ListUpdateMapValues;
  parentAnnotations: ListUpdateMapValues;

  getChildAnnotations(): ListUpdateMapValues;

  setChildAnnotations(arg0: ListUpdateMapValues): void;

  getParentAnnotations(): ListUpdateMapValues;

  setParentAnnotations(arg0: ListUpdateMapValues): void;

  addChildAnnotation(arg0: string, arg1: string): RelationshipUpdate;

  addParentAnnotation(arg0: string, arg1: string): RelationshipUpdate;

  removeChildAnnotations(arg0: string[]): RelationshipUpdate;

  removeParentAnnotations(arg0: string[]): RelationshipUpdate;

  setRelationship(arg0: Relationship): void;

  new (): RelationshipUpdate;
}

export interface UpdateObjectsOperation<U> extends IOperation {
  updates: U[];

  getMessage(): string;

  getUpdates(): U[];

  new (arg0: U[]): UpdateObjectsOperation<any>;

  new (arg0: U[]): UpdateObjectsOperation<any>;
}

export interface UpdateObjectsOperationResult<ID> extends IOperationResult {
  objectIds: ID[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateObjectsOperationResult<any>;

  new (arg0: ID[]): UpdateObjectsOperationResult<any>;
}

export interface ContentCopy extends Serializable {
  id: ContentCopyPermId;
  externalDms: ExternalDms;
  externalCode: string;
  path: string;
  gitCommitHash: string;
  gitRepositoryId: string;

  getId(): ContentCopyPermId;

  getPath(): string;

  getExternalDms(): ExternalDms;

  setExternalDms(arg0: ExternalDms): void;

  getExternalCode(): string;

  setExternalCode(arg0: string): void;

  getGitCommitHash(): string;

  setGitCommitHash(arg0: string): void;

  getGitRepositoryId(): string;

  setGitRepositoryId(arg0: string): void;

  setPath(arg0: string): void;

  setId(arg0: ContentCopyPermId): void;

  new (): ContentCopy;
}

export interface DataSet
  extends Serializable,
    ICodeHolder,
    IEntityTypeHolder,
    IExperimentHolder,
    IMaterialPropertiesHolder,
    IModificationDateHolder,
    IModifierHolder,
    IParentChildrenHolder<DataSet>,
    IPermIdHolder,
    IPropertiesHolder,
    IRegistrationDateHolder,
    IRegistratorHolder,
    ISampleHolder,
    ITagsHolder {
  fetchOptions: DataSetFetchOptions;
  permId: DataSetPermId;
  frozen: boolean;
  frozenForChildren: boolean;
  frozenForParents: boolean;
  frozenForComponents: boolean;
  frozenForContainers: boolean;
  type: DataSetType;
  kind: DataSetKind;
  dataStore: DataStore;
  measured: boolean;
  postRegistered: boolean;
  physicalData: PhysicalData;
  linkedData: LinkedData;
  sampleProperties: { [index: string]: Sample };
  parents: DataSet[];
  children: DataSet[];
  containers: DataSet[];
  components: DataSet[];
  history: HistoryEntry[];
  propertiesHistory: HistoryEntry[];
  experimentHistory: HistoryEntry[];
  sampleHistory: HistoryEntry[];
  parentsHistory: HistoryEntry[];
  childrenHistory: HistoryEntry[];
  containersHistory: HistoryEntry[];
  componentsHistory: HistoryEntry[];
  contentCopiesHistory: HistoryEntry[];
  unknownHistory: HistoryEntry[];
  dataProducer: string;
  dataProductionDate: Date;
  accessDate: Date;
  metaData: { [index: string]: string };

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  getType(): DataSetType;

  getType(): IEntityType;

  isFrozen(): boolean;

  getBooleanProperty(arg0: string): boolean;

  getChildren(): DataSet[];

  getFetchOptions(): DataSetFetchOptions;

  setFetchOptions(arg0: DataSetFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setPermId(arg0: DataSetPermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getExperiment(): Experiment;

  getMaterialProperties(): { [index: string]: Material };

  setMaterialProperties(arg0: { [index: string]: Material }): void;

  getMaterialProperty(arg0: string): Material;

  setMaterialProperty(arg0: string, arg1: Material): void;

  getPermId(): DataSetPermId;

  getPermId(): IObjectId;

  getModifier(): Person;

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  setFrozen(arg0: boolean): void;

  isFrozenForChildren(): boolean;

  setFrozenForChildren(arg0: boolean): void;

  isFrozenForParents(): boolean;

  setFrozenForParents(arg0: boolean): void;

  isFrozenForComponents(): boolean;

  setFrozenForComponents(arg0: boolean): void;

  isFrozenForContainers(): boolean;

  setFrozenForContainers(arg0: boolean): void;

  setKind(arg0: DataSetKind): void;

  getDataStore(): DataStore;

  setDataStore(arg0: DataStore): void;

  isMeasured(): boolean;

  setMeasured(arg0: boolean): void;

  isPostRegistered(): boolean;

  setPostRegistered(arg0: boolean): void;

  getPhysicalData(): PhysicalData;

  setPhysicalData(arg0: PhysicalData): void;

  getLinkedData(): LinkedData;

  setLinkedData(arg0: LinkedData): void;

  setExperiment(arg0: Experiment): void;

  setSample(arg0: Sample): void;

  getSampleProperties(): { [index: string]: Sample };

  setSampleProperties(arg0: { [index: string]: Sample }): void;

  setParents(arg0: DataSet[]): void;

  setHistory(arg0: HistoryEntry[]): void;

  getPropertiesHistory(): HistoryEntry[];

  setPropertiesHistory(arg0: HistoryEntry[]): void;

  getExperimentHistory(): HistoryEntry[];

  setExperimentHistory(arg0: HistoryEntry[]): void;

  getSampleHistory(): HistoryEntry[];

  setSampleHistory(arg0: HistoryEntry[]): void;

  getParentsHistory(): HistoryEntry[];

  setParentsHistory(arg0: HistoryEntry[]): void;

  getChildrenHistory(): HistoryEntry[];

  setChildrenHistory(arg0: HistoryEntry[]): void;

  getContainersHistory(): HistoryEntry[];

  setContainersHistory(arg0: HistoryEntry[]): void;

  getComponentsHistory(): HistoryEntry[];

  setComponentsHistory(arg0: HistoryEntry[]): void;

  getContentCopiesHistory(): HistoryEntry[];

  setContentCopiesHistory(arg0: HistoryEntry[]): void;

  getUnknownHistory(): HistoryEntry[];

  setUnknownHistory(arg0: HistoryEntry[]): void;

  setModifier(arg0: Person): void;

  getDataProducer(): string;

  setDataProducer(arg0: string): void;

  getDataProductionDate(): Date;

  setDataProductionDate(arg0: Date): void;

  getAccessDate(): Date;

  setAccessDate(arg0: Date): void;

  setMetaData(arg0: { [index: string]: string }): void;

  getParents(): DataSet[];

  getComponents(): DataSet[];

  getKind(): DataSetKind;

  getMetaData(): { [index: string]: string };

  getHistory(): HistoryEntry[];

  getCode(): string;

  setCode(arg0: string): void;

  getContainers(): DataSet[];

  getSample(): Sample;

  setChildren(arg0: DataSet[]): void;

  setComponents(arg0: DataSet[]): void;

  setContainers(arg0: DataSet[]): void;

  getTags(): Tag[];

  setTags(arg0: Tag[]): void;

  setType(arg0: DataSetType): void;

  new (): DataSet;
}

export interface DataSetType
  extends Serializable,
    ICodeHolder,
    IDescriptionHolder,
    IEntityType,
    IModificationDateHolder,
    IPermIdHolder,
    IPropertyAssignmentsHolder {
  fetchOptions: DataSetTypeFetchOptions;
  permId: EntityTypePermId;
  mainDataSetPattern: string;
  mainDataSetPath: string;
  disallowDeletion: boolean;
  metaData: { [index: string]: string };

  getFetchOptions(): DataSetTypeFetchOptions;

  setFetchOptions(arg0: DataSetTypeFetchOptions): void;

  setPermId(arg0: EntityTypePermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getPropertyAssignments(): PropertyAssignment[];

  getValidationPlugin(): Plugin;

  getPermId(): IObjectId;

  getPermId(): EntityTypePermId;

  getMainDataSetPattern(): string;

  setMainDataSetPattern(arg0: string): void;

  getMainDataSetPath(): string;

  setMainDataSetPath(arg0: string): void;

  isDisallowDeletion(): boolean;

  setDisallowDeletion(arg0: boolean): void;

  setPropertyAssignments(arg0: PropertyAssignment[]): void;

  setValidationPlugin(arg0: Plugin): void;

  setMetaData(arg0: { [index: string]: string }): void;

  setDescription(arg0: string): void;

  getMetaData(): { [index: string]: string };

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): DataSetType;
}

/**
 * @deprecated
 */
export interface FileFormatType extends Serializable, ICodeHolder {
  fetchOptions: FileFormatTypeFetchOptions;
  description: string;

  getFetchOptions(): FileFormatTypeFetchOptions;

  setFetchOptions(arg0: FileFormatTypeFetchOptions): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): FileFormatType;
}

export interface LinkedData extends Serializable {
  fetchOptions: LinkedDataFetchOptions;
  /**
   * @deprecated
   */
  externalCode: string;
  /**
   * @deprecated
   */
  externalDms: ExternalDms;
  contentCopies: ContentCopy[];

  getFetchOptions(): LinkedDataFetchOptions;

  setFetchOptions(arg0: LinkedDataFetchOptions): void;

  getExternalDms(): ExternalDms;

  setExternalDms(arg0: ExternalDms): void;

  getExternalCode(): string;

  setExternalCode(arg0: string): void;

  getContentCopies(): ContentCopy[];

  setContentCopies(arg0: ContentCopy[]): void;

  new (): LinkedData;
}

export interface LocatorType extends Serializable, ICodeHolder {
  fetchOptions: LocatorTypeFetchOptions;
  description: string;

  getFetchOptions(): LocatorTypeFetchOptions;

  setFetchOptions(arg0: LocatorTypeFetchOptions): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): LocatorType;
}

export interface PhysicalData extends Serializable {
  fetchOptions: PhysicalDataFetchOptions;
  shareId: string;
  location: string;
  size: number;
  storageFormat: StorageFormat;
  /**
   * @deprecated
   */
  fileFormatType: FileFormatType;
  locatorType: LocatorType;
  complete: Complete;
  status: ArchivingStatus;
  presentInArchive: boolean;
  storageConfirmation: boolean;
  speedHint: number;
  archivingRequested: boolean;

  getLocation(): string;

  getSize(): number;

  setSize(arg0: number): void;

  getFetchOptions(): PhysicalDataFetchOptions;

  setFetchOptions(arg0: PhysicalDataFetchOptions): void;

  getShareId(): string;

  setShareId(arg0: string): void;

  getStorageFormat(): StorageFormat;

  setStorageFormat(arg0: StorageFormat): void;

  getFileFormatType(): FileFormatType;

  setFileFormatType(arg0: FileFormatType): void;

  getLocatorType(): LocatorType;

  setLocatorType(arg0: LocatorType): void;

  getComplete(): Complete;

  setComplete(arg0: Complete): void;

  isPresentInArchive(): boolean;

  setPresentInArchive(arg0: boolean): void;

  isStorageConfirmation(): boolean;

  setStorageConfirmation(arg0: boolean): void;

  getSpeedHint(): number;

  setSpeedHint(arg0: number): void;

  isArchivingRequested(): boolean;

  setArchivingRequested(arg0: boolean): void;

  setLocation(arg0: string): void;

  getStatus(): ArchivingStatus;

  setStatus(arg0: ArchivingStatus): void;

  new (): PhysicalData;
}

export interface StorageFormat extends Serializable, ICodeHolder {
  fetchOptions: StorageFormatFetchOptions;
  description: string;

  getFetchOptions(): StorageFormatFetchOptions;

  setFetchOptions(arg0: StorageFormatFetchOptions): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): StorageFormat;
}

export interface ArchiveDataSetsOperation extends IOperation {
  dataSetIds: IDataSetId[];
  options: DataSetArchiveOptions;

  getMessage(): string;

  getDataSetIds(): IDataSetId[];

  getOptions(): DataSetArchiveOptions;

  new (): ArchiveDataSetsOperation;

  new (
    arg0: IDataSetId[],
    arg1: DataSetArchiveOptions,
  ): ArchiveDataSetsOperation;
}

export interface ArchiveDataSetsOperationResult extends IOperationResult {
  getMessage(): string;

  new (): ArchiveDataSetsOperationResult;
}

export interface DataSetArchiveOptions extends Serializable {
  removeFromDataStore: boolean;
  options: { [index: string]: string };

  setRemoveFromDataStore(arg0: boolean): void;

  isRemoveFromDataStore(): boolean;

  withOption(arg0: string, arg1: string): DataSetArchiveOptions;

  getOptions(): { [index: string]: string };

  new (): DataSetArchiveOptions;
}

export interface ContentCopyCreation extends ICreation {
  externalId: string;
  path: string;
  gitCommitHash: string;
  gitRepositoryId: string;
  externalDmsId: IExternalDmsId;

  getPath(): string;

  getGitCommitHash(): string;

  setGitCommitHash(arg0: string): void;

  getGitRepositoryId(): string;

  setGitRepositoryId(arg0: string): void;

  getExternalId(): string;

  setExternalId(arg0: string): void;

  getExternalDmsId(): IExternalDmsId;

  setExternalDmsId(arg0: IExternalDmsId): void;

  setPath(arg0: string): void;

  new (): ContentCopyCreation;
}

export interface CreateDataSetTypesOperation
  extends CreateObjectsOperation<DataSetTypeCreation> {
  creations: DataSetTypeCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateDataSetTypesOperation;

  new (arg0: DataSetTypeCreation[]): CreateDataSetTypesOperation;

  new (arg0: DataSetTypeCreation[]): CreateDataSetTypesOperation;
}

export interface CreateDataSetTypesOperationResult
  extends CreateObjectsOperationResult<EntityTypePermId> {
  objectIds: EntityTypePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateDataSetTypesOperationResult;

  new (arg0: EntityTypePermId[]): CreateDataSetTypesOperationResult;
}

export interface CreateDataSetsOperation
  extends CreateObjectsOperation<DataSetCreation> {
  creations: DataSetCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateDataSetsOperation;

  new (arg0: DataSetCreation[]): CreateDataSetsOperation;

  new (arg0: DataSetCreation[]): CreateDataSetsOperation;
}

export interface CreateDataSetsOperationResult
  extends CreateObjectsOperationResult<DataSetPermId> {
  objectIds: DataSetPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateDataSetsOperationResult;

  new (arg0: DataSetPermId[]): CreateDataSetsOperationResult;
}

export interface DataSetCreation
  extends ICreation,
    ICreationIdHolder,
    IObjectCreation,
    IPropertiesHolder {
  typeId: IEntityTypeId;
  experimentId: IExperimentId;
  sampleId: ISampleId;
  dataStoreId: IDataStoreId;
  code: string;
  dataSetKind: DataSetKind;
  measured: boolean;
  dataProducer: string;
  dataProductionDate: Date;
  physicalData: PhysicalDataCreation;
  linkedData: LinkedDataCreation;
  tagIds: ITagId[];
  containerIds: IDataSetId[];
  componentIds: IDataSetId[];
  parentIds: IDataSetId[];
  childIds: IDataSetId[];
  autoGeneratedCode: boolean;
  metaData: { [index: string]: string };

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  getBooleanProperty(arg0: string): boolean;

  getTypeId(): IEntityTypeId;

  setTypeId(arg0: IEntityTypeId): void;

  getCreationId(): CreationId;

  setCreationId(arg0: CreationId): void;

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  getExperimentId(): IExperimentId;

  setExperimentId(arg0: IExperimentId): void;

  getSampleId(): ISampleId;

  setSampleId(arg0: ISampleId): void;

  getDataStoreId(): IDataStoreId;

  setDataStoreId(arg0: IDataStoreId): void;

  getDataSetKind(): DataSetKind;

  setDataSetKind(arg0: DataSetKind): void;

  getTagIds(): ITagId[];

  setTagIds(arg0: ITagId[]): void;

  getContainerIds(): IDataSetId[];

  setContainerIds(arg0: IDataSetId[]): void;

  getComponentIds(): IDataSetId[];

  setComponentIds(arg0: IDataSetId[]): void;

  getParentIds(): IDataSetId[];

  setParentIds(arg0: IDataSetId[]): void;

  getChildIds(): IDataSetId[];

  setChildIds(arg0: IDataSetId[]): void;

  isAutoGeneratedCode(): boolean;

  setAutoGeneratedCode(arg0: boolean): void;

  isMeasured(): boolean;

  setMeasured(arg0: boolean): void;

  getPhysicalData(): PhysicalDataCreation;

  setPhysicalData(arg0: PhysicalDataCreation): void;

  getLinkedData(): LinkedDataCreation;

  setLinkedData(arg0: LinkedDataCreation): void;

  getDataProducer(): string;

  setDataProducer(arg0: string): void;

  getDataProductionDate(): Date;

  setDataProductionDate(arg0: Date): void;

  setMetaData(arg0: { [index: string]: string }): void;

  getMetaData(): { [index: string]: string };

  getCode(): string;

  setCode(arg0: string): void;

  new (): DataSetCreation;
}

export interface DataSetTypeCreation extends IEntityTypeCreation {
  mainDataSetPattern: string;
  mainDataSetPath: string;
  disallowDeletion: boolean;
  metaData: { [index: string]: string };

  getPropertyAssignments(): PropertyAssignmentCreation[];

  getMainDataSetPattern(): string;

  setMainDataSetPattern(arg0: string): void;

  getMainDataSetPath(): string;

  setMainDataSetPath(arg0: string): void;

  isDisallowDeletion(): boolean;

  setDisallowDeletion(arg0: boolean): void;

  setPropertyAssignments(arg0: PropertyAssignmentCreation[]): void;

  getValidationPluginId(): IPluginId;

  setValidationPluginId(arg0: IPluginId): void;

  setMetaData(arg0: { [index: string]: string }): void;

  setDescription(arg0: string): void;

  getMetaData(): { [index: string]: string };

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): DataSetTypeCreation;
}

export interface LinkedDataCreation extends ICreation {
  externalCode: string;
  externalDmsId: IExternalDmsId;
  contentCopies: ContentCopyCreation[];

  getExternalCode(): string;

  setExternalCode(arg0: string): void;

  getContentCopies(): ContentCopyCreation[];

  setContentCopies(arg0: ContentCopyCreation[]): void;

  getExternalDmsId(): IExternalDmsId;

  setExternalDmsId(arg0: IExternalDmsId): void;

  new (): LinkedDataCreation;
}

export interface PhysicalDataCreation extends ICreation {
  shareId: string;
  location: string;
  size: number;
  storageFormatId: IStorageFormatId;
  /**
   * @deprecated
   */
  fileFormatTypeId: IFileFormatTypeId;
  locatorTypeId: ILocatorTypeId;
  complete: Complete;
  speedHint: number;
  h5Folders: boolean;
  h5arFolders: boolean;
  archivingRequested: boolean;

  getLocation(): string;

  getSize(): number;

  setSize(arg0: number): void;

  getShareId(): string;

  setShareId(arg0: string): void;

  getComplete(): Complete;

  setComplete(arg0: Complete): void;

  getSpeedHint(): number;

  setSpeedHint(arg0: number): void;

  isArchivingRequested(): boolean;

  setArchivingRequested(arg0: boolean): void;

  getStorageFormatId(): IStorageFormatId;

  setStorageFormatId(arg0: IStorageFormatId): void;

  getFileFormatTypeId(): IFileFormatTypeId;

  setFileFormatTypeId(arg0: IFileFormatTypeId): void;

  getLocatorTypeId(): ILocatorTypeId;

  setLocatorTypeId(arg0: ILocatorTypeId): void;

  isH5Folders(): boolean;

  setH5Folders(arg0: boolean): void;

  isH5arFolders(): boolean;

  setH5arFolders(arg0: boolean): void;

  setLocation(arg0: string): void;

  new (): PhysicalDataCreation;
}

export interface DataSetDeletionOptions
  extends AbstractObjectDeletionOptions<DataSetDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): DataSetDeletionOptions;
}

export interface DataSetTypeDeletionOptions
  extends AbstractObjectDeletionOptions<DataSetTypeDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): DataSetTypeDeletionOptions;
}

export interface DeleteDataSetTypesOperation
  extends DeleteObjectsOperation<IEntityTypeId, DataSetTypeDeletionOptions> {
  options: DataSetTypeDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteDataSetTypesOperation;

  new (
    arg0: IEntityTypeId[],
    arg1: DataSetTypeDeletionOptions,
  ): DeleteDataSetTypesOperation;
}

export interface DeleteDataSetTypesOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteDataSetTypesOperationResult;
}

export interface DeleteDataSetsOperation
  extends DeleteObjectsOperation<IDataSetId, DataSetDeletionOptions> {
  options: DataSetDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteDataSetsOperation;

  new (
    arg0: IDataSetId[],
    arg1: DataSetDeletionOptions,
  ): DeleteDataSetsOperation;
}

export interface DeleteDataSetsOperationResult
  extends DeleteObjectsWithTrashOperationResult {
  getMessage(): string;

  getDeletionId(): IDeletionId;

  new (): DeleteDataSetsOperationResult;

  new (arg0: IDeletionId): DeleteDataSetsOperationResult;
}

export interface DataSetFetchOptions
  extends FetchOptions<DataSet>,
    Serializable {
  type: DataSetTypeFetchOptions;
  dataStore: DataStoreFetchOptions;
  physicalData: PhysicalDataFetchOptions;
  linkedData: LinkedDataFetchOptions;
  experiment: ExperimentFetchOptions;
  sample: SampleFetchOptions;
  properties: PropertyFetchOptions;
  materialProperties: MaterialFetchOptions;
  sampleProperties: SampleFetchOptions;
  parents: DataSetFetchOptions;
  children: DataSetFetchOptions;
  containers: DataSetFetchOptions;
  components: DataSetFetchOptions;
  tags: TagFetchOptions;
  history: HistoryEntryFetchOptions;
  propertiesHistory: HistoryEntryFetchOptions;
  experimentHistory: HistoryEntryFetchOptions;
  sampleHistory: HistoryEntryFetchOptions;
  parentsHistory: HistoryEntryFetchOptions;
  childrenHistory: HistoryEntryFetchOptions;
  containersHistory: HistoryEntryFetchOptions;
  componentsHistory: HistoryEntryFetchOptions;
  contentCopiesHistory: HistoryEntryFetchOptions;
  unknownHistory: HistoryEntryFetchOptions;
  modifier: PersonFetchOptions;
  registrator: PersonFetchOptions;
  sort: DataSetSortOptions;
  sortBy: DataSetSortOptions;

  withModifier(): PersonFetchOptions;

  hasRegistrator(): boolean;

  getSortBy(): DataSetSortOptions;

  getSortBy(): SortOptions<any>;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasType(): boolean;

  hasDataStore(): boolean;

  hasPhysicalData(): boolean;

  hasLinkedData(): boolean;

  hasExperiment(): boolean;

  hasSample(): boolean;

  hasProperties(): boolean;

  hasMaterialProperties(): boolean;

  hasSampleProperties(): boolean;

  hasParents(): boolean;

  hasContainers(): boolean;

  hasComponents(): boolean;

  hasTags(): boolean;

  hasHistory(): boolean;

  hasPropertiesHistory(): boolean;

  hasExperimentHistory(): boolean;

  hasSampleHistory(): boolean;

  hasParentsHistory(): boolean;

  hasChildrenHistory(): boolean;

  hasContainersHistory(): boolean;

  hasComponentsHistory(): boolean;

  hasContentCopiesHistory(): boolean;

  hasUnknownHistory(): boolean;

  hasModifier(): boolean;

  withTypeUsing(arg0: DataSetTypeFetchOptions): DataSetTypeFetchOptions;

  withDataStore(): DataStoreFetchOptions;

  withDataStoreUsing(arg0: DataStoreFetchOptions): DataStoreFetchOptions;

  withPhysicalData(): PhysicalDataFetchOptions;

  withPhysicalDataUsing(
    arg0: PhysicalDataFetchOptions,
  ): PhysicalDataFetchOptions;

  withLinkedData(): LinkedDataFetchOptions;

  withLinkedDataUsing(arg0: LinkedDataFetchOptions): LinkedDataFetchOptions;

  withExperiment(): ExperimentFetchOptions;

  withExperimentUsing(arg0: ExperimentFetchOptions): ExperimentFetchOptions;

  withSample(): SampleFetchOptions;

  withSampleUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  withPropertiesUsing(arg0: PropertyFetchOptions): PropertyFetchOptions;

  withMaterialProperties(): MaterialFetchOptions;

  withMaterialPropertiesUsing(arg0: MaterialFetchOptions): MaterialFetchOptions;

  withSampleProperties(): SampleFetchOptions;

  withSamplePropertiesUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  withParents(): DataSetFetchOptions;

  withParentsUsing(arg0: DataSetFetchOptions): DataSetFetchOptions;

  withChildren(): DataSetFetchOptions;

  withChildrenUsing(arg0: DataSetFetchOptions): DataSetFetchOptions;

  withContainers(): DataSetFetchOptions;

  withContainersUsing(arg0: DataSetFetchOptions): DataSetFetchOptions;

  withComponents(): DataSetFetchOptions;

  withComponentsUsing(arg0: DataSetFetchOptions): DataSetFetchOptions;

  withTags(): TagFetchOptions;

  withTagsUsing(arg0: TagFetchOptions): TagFetchOptions;

  withHistory(): HistoryEntryFetchOptions;

  withHistoryUsing(arg0: HistoryEntryFetchOptions): HistoryEntryFetchOptions;

  withPropertiesHistory(): HistoryEntryFetchOptions;

  withPropertiesHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withExperimentHistory(): HistoryEntryFetchOptions;

  withExperimentHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withSampleHistory(): HistoryEntryFetchOptions;

  withSampleHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withParentsHistory(): HistoryEntryFetchOptions;

  withParentsHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withChildrenHistory(): HistoryEntryFetchOptions;

  withChildrenHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withContainersHistory(): HistoryEntryFetchOptions;

  withContainersHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withComponentsHistory(): HistoryEntryFetchOptions;

  withComponentsHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withContentCopiesHistory(): HistoryEntryFetchOptions;

  withContentCopiesHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withUnknownHistory(): HistoryEntryFetchOptions;

  withUnknownHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withModifierUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  withProperties(): PropertyFetchOptions;

  withType(): DataSetTypeFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): DataSetSortOptions;

  hasChildren(): boolean;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): DataSetFetchOptions;
}

export interface DataSetSortOptions
  extends EntityWithPropertiesSortOptions<DataSet> {
  type(): SortOrder;

  getProperty(arg0: string): SortOrder;

  getType(): SortOrder;

  property(arg0: string): SortOrder;

  fetchedFieldsScore(): SortOrder;

  getFetchedFieldsScore(): SortOrder;

  stringMatchPropertyScore(arg0: string, arg1: string): SortOrder;

  stringPrefixMatchPropertyScore(arg0: string, arg1: string): SortOrder;

  stringMatchAnyPropertyScore(arg0: string): SortOrder;

  stringPrefixMatchAnyPropertyScore(arg0: string): SortOrder;

  code(): SortOrder;

  registrationDate(): SortOrder;

  getRegistrationDate(): SortOrder;

  permId(): SortOrder;

  modificationDate(): SortOrder;

  getModificationDate(): SortOrder;

  getPermId(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): DataSetSortOptions;
}

export interface DataSetTypeFetchOptions
  extends FetchOptions<DataSetType>,
    Serializable {
  propertyAssignments: PropertyAssignmentFetchOptions;
  validationPlugin: PluginFetchOptions;
  sort: DataSetTypeSortOptions;
  sortBy: DataSetTypeSortOptions;

  getSortBy(): DataSetTypeSortOptions;

  getSortBy(): SortOptions<any>;

  hasPropertyAssignments(): boolean;

  hasValidationPlugin(): boolean;

  withPropertyAssignments(): PropertyAssignmentFetchOptions;

  withPropertyAssignmentsUsing(
    arg0: PropertyAssignmentFetchOptions,
  ): PropertyAssignmentFetchOptions;

  withValidationPlugin(): PluginFetchOptions;

  withValidationPluginUsing(arg0: PluginFetchOptions): PluginFetchOptions;

  sortBy(): DataSetTypeSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): DataSetTypeFetchOptions;
}

export interface DataSetTypeSortOptions extends SortOptions<DataSetType> {
  getSortings(): Sorting[];

  new (): DataSetTypeSortOptions;
}

/**
 * @deprecated
 */
export interface FileFormatTypeFetchOptions
  extends FetchOptions<FileFormatType>,
    Serializable {
  sort: FileFormatTypeSortOptions;
  sortBy: FileFormatTypeSortOptions;

  getSortBy(): FileFormatTypeSortOptions;

  getSortBy(): SortOptions<any>;

  sortBy(): FileFormatTypeSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): FileFormatTypeFetchOptions;
}

/**
 * @deprecated
 */
export interface FileFormatTypeSortOptions extends SortOptions<FileFormatType> {
  getSortings(): Sorting[];

  new (): FileFormatTypeSortOptions;
}

export interface LinkedDataFetchOptions
  extends FetchOptions<LinkedData>,
    Serializable {
  externalDms: ExternalDmsFetchOptions;
  sort: LinkedDataSortOptions;
  sortBy: LinkedDataSortOptions;

  getSortBy(): LinkedDataSortOptions;

  getSortBy(): SortOptions<any>;

  withExternalDms(): ExternalDmsFetchOptions;

  withExternalDmsUsing(arg0: ExternalDmsFetchOptions): ExternalDmsFetchOptions;

  hasExternalDms(): boolean;

  sortBy(): SortOptions<any>;

  sortBy(): LinkedDataSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): LinkedDataFetchOptions;
}

export interface LinkedDataSortOptions extends SortOptions<LinkedData> {
  getSortings(): Sorting[];

  new (): LinkedDataSortOptions;
}

export interface LocatorTypeFetchOptions
  extends FetchOptions<LocatorType>,
    Serializable {
  sort: LocatorTypeSortOptions;
  sortBy: LocatorTypeSortOptions;

  getSortBy(): LocatorTypeSortOptions;

  getSortBy(): SortOptions<any>;

  sortBy(): LocatorTypeSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): LocatorTypeFetchOptions;
}

export interface LocatorTypeSortOptions extends SortOptions<LocatorType> {
  getSortings(): Sorting[];

  new (): LocatorTypeSortOptions;
}

export interface PhysicalDataFetchOptions
  extends FetchOptions<PhysicalData>,
    Serializable {
  storageFormat: StorageFormatFetchOptions;
  /**
   * @deprecated
   */
  fileFormatType: FileFormatTypeFetchOptions;
  locatorType: LocatorTypeFetchOptions;
  sort: PhysicalDataSortOptions;
  sortBy: PhysicalDataSortOptions;

  getSortBy(): PhysicalDataSortOptions;

  getSortBy(): SortOptions<any>;

  hasStorageFormat(): boolean;

  hasFileFormatType(): boolean;

  hasLocatorType(): boolean;

  withLocatorType(): LocatorTypeFetchOptions;

  withLocatorTypeUsing(arg0: LocatorTypeFetchOptions): LocatorTypeFetchOptions;

  withStorageFormat(): StorageFormatFetchOptions;

  withStorageFormatUsing(
    arg0: StorageFormatFetchOptions,
  ): StorageFormatFetchOptions;

  withFileFormatType(): FileFormatTypeFetchOptions;

  withFileFormatTypeUsing(
    arg0: FileFormatTypeFetchOptions,
  ): FileFormatTypeFetchOptions;

  sortBy(): PhysicalDataSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): PhysicalDataFetchOptions;
}

export interface PhysicalDataSortOptions extends SortOptions<PhysicalData> {
  getSortings(): Sorting[];

  new (): PhysicalDataSortOptions;
}

export interface StorageFormatFetchOptions
  extends FetchOptions<StorageFormat>,
    Serializable {
  sort: StorageFormatSortOptions;
  sortBy: StorageFormatSortOptions;

  getSortBy(): StorageFormatSortOptions;

  getSortBy(): SortOptions<any>;

  sortBy(): StorageFormatSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): StorageFormatFetchOptions;
}

export interface StorageFormatSortOptions extends SortOptions<StorageFormat> {
  getSortings(): Sorting[];

  new (): StorageFormatSortOptions;
}

export interface GetDataSetTypesOperation
  extends GetObjectsOperation<IEntityTypeId, DataSetTypeFetchOptions> {
  fetchOptions: DataSetTypeFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetDataSetTypesOperation;

  new (
    arg0: IEntityTypeId[],
    arg1: DataSetTypeFetchOptions,
  ): GetDataSetTypesOperation;
}

export interface GetDataSetTypesOperationResult
  extends GetObjectsOperationResult<IEntityTypeId, DataSetType> {
  ids: IEntityTypeId[];
  objects: DataSetType[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetDataSetTypesOperationResult;

  new (arg0: { [index: string]: DataSetType }): GetDataSetTypesOperationResult;
}

export interface GetDataSetsOperation
  extends GetObjectsOperation<IDataSetId, DataSetFetchOptions> {
  fetchOptions: DataSetFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetDataSetsOperation;

  new (arg0: IDataSetId[], arg1: DataSetFetchOptions): GetDataSetsOperation;
}

export interface GetDataSetsOperationResult
  extends GetObjectsOperationResult<IDataSetId, DataSet> {
  ids: IDataSetId[];
  objects: DataSet[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetDataSetsOperationResult;

  new (arg0: { [index: string]: DataSet }): GetDataSetsOperationResult;
}

export interface BdsDirectoryStorageFormatPermId extends StorageFormatPermId {
  getPermId(): string;

  new (): BdsDirectoryStorageFormatPermId;
}

export interface ContentCopyPermId extends ObjectPermId, IContentCopyId {
  getPermId(): string;

  new (arg0: string): ContentCopyPermId;

  new (): ContentCopyPermId;
}

export interface DataSetPermId extends ObjectPermId, IDataSetId {
  getPermId(): string;

  new (arg0: string): DataSetPermId;

  new (): DataSetPermId;
}

/**
 * @deprecated
 */
export interface FileFormatTypePermId extends ObjectPermId, IFileFormatTypeId {
  getPermId(): string;

  new (arg0: string): FileFormatTypePermId;

  new (): FileFormatTypePermId;
}

export interface IContentCopyId extends IObjectId {}

export interface IDataSetId extends IObjectId {}

/**
 * @deprecated
 */
export interface IFileFormatTypeId extends IObjectId {}

export interface ILocatorTypeId extends IObjectId {}

export interface IStorageFormatId extends IObjectId {}

export interface LocatorTypePermId extends ObjectPermId, ILocatorTypeId {
  getPermId(): string;

  new (arg0: string): LocatorTypePermId;

  new (): LocatorTypePermId;
}

export interface ProprietaryStorageFormatPermId extends StorageFormatPermId {
  getPermId(): string;

  new (): ProprietaryStorageFormatPermId;
}

export interface RelativeLocationLocatorTypePermId extends LocatorTypePermId {
  getPermId(): string;

  new (): RelativeLocationLocatorTypePermId;
}

export interface StorageFormatPermId extends ObjectPermId, IStorageFormatId {
  getPermId(): string;

  new (arg0: string): StorageFormatPermId;

  new (): StorageFormatPermId;
}

export interface DataSetLockOptions extends Serializable {
  new (): DataSetLockOptions;
}

export interface LockDataSetsOperation extends IOperation {
  dataSetIds: IDataSetId[];
  options: DataSetLockOptions;

  getMessage(): string;

  getDataSetIds(): IDataSetId[];

  getOptions(): DataSetLockOptions;

  new (): LockDataSetsOperation;

  new (arg0: IDataSetId[], arg1: DataSetLockOptions): LockDataSetsOperation;
}

export interface LockDataSetsOperationResult extends IOperationResult {
  getMessage(): string;

  new (): LockDataSetsOperationResult;
}

export interface AbstractDataSetSearchCriteria<T>
  extends AbstractEntitySearchCriteria<IDataSetId> {
  relation: DataSetSearchRelation;

  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): T;

  withAndOperator(): T;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withPhysicalData(): PhysicalDataSearchCriteria;

  withLinkedData(): LinkedDataSearchCriteria;

  withExperiment(): ExperimentSearchCriteria;

  withSample(): SampleSearchCriteria;

  withoutExperiment(): T;

  withoutSample(): T;

  getRelation(): DataSetSearchRelation;

  withType(): DataSetTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (arg0: DataSetSearchRelation): AbstractDataSetSearchCriteria<any>;
}

export interface ArchivingRequestedSearchCriteria
  extends BooleanFieldSearchCriteria {
  thatEquals(arg0: boolean): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): ArchivingRequestedSearchCriteria;
}

export interface CompleteSearchCriteria
  extends EnumFieldSearchCriteria<Complete> {
  fieldValue: Complete;

  thatEquals(arg0: T): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): CompleteSearchCriteria;
}

export interface ContentCopySearchCriteria
  extends AbstractObjectSearchCriteria<IExternalDmsId> {
  withExternalDms(): $ch$ethz$sis$openbis$generic$asapi$v3$dto$dataset$search$ExternalDmsSearchCriteria$;

  withExternalCode(): ExternalCodeSearchCriteria;

  withGitCommitHash(): GitCommitHashSearchCriteria;

  withGitRepositoryId(): GitRepositoryIdSearchCriteria;

  withPath(): PathSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): ContentCopySearchCriteria;
}

export interface DataSetChildrenSearchCriteria
  extends AbstractDataSetSearchCriteria<DataSetChildrenSearchCriteria> {
  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): T;

  withAndOperator(): T;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withPhysicalData(): PhysicalDataSearchCriteria;

  withLinkedData(): LinkedDataSearchCriteria;

  withExperiment(): ExperimentSearchCriteria;

  withSample(): SampleSearchCriteria;

  withoutExperiment(): T;

  withoutSample(): T;

  getRelation(): DataSetSearchRelation;

  withType(): DataSetTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (): DataSetChildrenSearchCriteria;
}

export interface DataSetContainerSearchCriteria
  extends AbstractDataSetSearchCriteria<DataSetContainerSearchCriteria> {
  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): T;

  withAndOperator(): T;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withPhysicalData(): PhysicalDataSearchCriteria;

  withLinkedData(): LinkedDataSearchCriteria;

  withExperiment(): ExperimentSearchCriteria;

  withSample(): SampleSearchCriteria;

  withoutExperiment(): T;

  withoutSample(): T;

  getRelation(): DataSetSearchRelation;

  withType(): DataSetTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (): DataSetContainerSearchCriteria;
}

export interface DataSetParentsSearchCriteria
  extends AbstractDataSetSearchCriteria<DataSetParentsSearchCriteria> {
  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): T;

  withAndOperator(): T;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withPhysicalData(): PhysicalDataSearchCriteria;

  withLinkedData(): LinkedDataSearchCriteria;

  withExperiment(): ExperimentSearchCriteria;

  withSample(): SampleSearchCriteria;

  withoutExperiment(): T;

  withoutSample(): T;

  getRelation(): DataSetSearchRelation;

  withType(): DataSetTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (): DataSetParentsSearchCriteria;
}

export interface DataSetSearchCriteria
  extends AbstractDataSetSearchCriteria<DataSetSearchCriteria> {
  negate(): DataSetSearchCriteria;

  negate(): AbstractEntitySearchCriteria<any>;

  withParents(): DataSetParentsSearchCriteria;

  withChildren(): DataSetChildrenSearchCriteria;

  withContainer(): DataSetContainerSearchCriteria;

  withSubcriteria(): DataSetSearchCriteria;

  withTextAttribute(): TextAttributeSearchCriteria;

  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): T;

  withAndOperator(): T;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withPhysicalData(): PhysicalDataSearchCriteria;

  withLinkedData(): LinkedDataSearchCriteria;

  withExperiment(): ExperimentSearchCriteria;

  withSample(): SampleSearchCriteria;

  withoutExperiment(): T;

  withoutSample(): T;

  getRelation(): DataSetSearchRelation;

  withType(): DataSetTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (): DataSetSearchCriteria;
}

export interface DataSetTypeSearchCriteria
  extends AbstractEntityTypeSearchCriteria {
  withOrOperator(): DataSetTypeSearchCriteria;

  withAndOperator(): DataSetTypeSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withPropertyAssignments(): PropertyAssignmentSearchCriteria;

  withIds(): IdsSearchCriteria<IEntityTypeId>;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): DataSetTypeSearchCriteria;
}

export interface ExternalCodeSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): ExternalCodeSearchCriteria;
}

/**
 * @deprecated
 */
export interface FileFormatTypeSearchCriteria
  extends AbstractCompositeSearchCriteria {
  withCode(): CodeSearchCriteria;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): FileFormatTypeSearchCriteria;
}

export interface GitCommitHashSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): GitCommitHashSearchCriteria;
}

export interface GitRepositoryIdSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): GitRepositoryIdSearchCriteria;
}

export interface LinkedDataSearchCriteria
  extends AbstractCompositeSearchCriteria {
  withExternalDms(): $ch$ethz$sis$openbis$generic$asapi$v3$dto$dataset$search$ExternalDmsSearchCriteria$;

  withExternalCode(): ExternalCodeSearchCriteria;

  withCopy(): ContentCopySearchCriteria;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): LinkedDataSearchCriteria;
}

export interface LocationSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): LocationSearchCriteria;
}

export interface LocatorTypeSearchCriteria
  extends AbstractCompositeSearchCriteria {
  withCode(): CodeSearchCriteria;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): LocatorTypeSearchCriteria;
}

export interface PathSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): PathSearchCriteria;
}

export interface PhysicalDataSearchCriteria
  extends AbstractCompositeSearchCriteria {
  withLocatorType(): LocatorTypeSearchCriteria;

  withStorageFormat(): StorageFormatSearchCriteria;

  withFileFormatType(): FileFormatTypeSearchCriteria;

  withShareId(): ShareIdSearchCriteria;

  withLocation(): LocationSearchCriteria;

  withSize(): SizeSearchCriteria;

  withComplete(): CompleteSearchCriteria;

  withStatus(): StatusSearchCriteria;

  withArchivingRequested(): ArchivingRequestedSearchCriteria;

  withPresentInArchive(): PresentInArchiveSearchCriteria;

  withStorageConfirmation(): StorageConfirmationSearchCriteria;

  withSpeedHint(): SpeedHintSearchCriteria;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): PhysicalDataSearchCriteria;
}

export interface PresentInArchiveSearchCriteria
  extends BooleanFieldSearchCriteria {
  thatEquals(arg0: boolean): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): PresentInArchiveSearchCriteria;
}

export interface SearchDataSetTypesOperation
  extends SearchObjectsOperation<
    DataSetTypeSearchCriteria,
    DataSetTypeFetchOptions
  > {
  criteria: DataSetTypeSearchCriteria;
  fetchOptions: DataSetTypeFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchDataSetTypesOperation;

  new (
    arg0: DataSetTypeSearchCriteria,
    arg1: DataSetTypeFetchOptions,
  ): SearchDataSetTypesOperation;
}

export interface SearchDataSetTypesOperationResult
  extends SearchObjectsOperationResult<DataSetType> {
  searchResult: SearchResult<DataSetType>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchDataSetTypesOperationResult;

  new (arg0: SearchResult<DataSetType>): SearchDataSetTypesOperationResult;
}

export interface SearchDataSetsOperation
  extends SearchObjectsOperation<DataSetSearchCriteria, DataSetFetchOptions> {
  criteria: DataSetSearchCriteria;
  fetchOptions: DataSetFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchDataSetsOperation;

  new (
    arg0: DataSetSearchCriteria,
    arg1: DataSetFetchOptions,
  ): SearchDataSetsOperation;
}

export interface SearchDataSetsOperationResult
  extends SearchObjectsOperationResult<DataSet> {
  searchResult: SearchResult<DataSet>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchDataSetsOperationResult;

  new (arg0: SearchResult<DataSet>): SearchDataSetsOperationResult;
}

export interface ShareIdSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): ShareIdSearchCriteria;
}

export interface SizeSearchCriteria extends NumberFieldSearchCriteria {
  thatEquals(arg0: number): void;

  thatIsLessThan(arg0: number): void;

  thatIsLessThanOrEqualTo(arg0: number): void;

  thatIsGreaterThan(arg0: number): void;

  thatIsGreaterThanOrEqualTo(arg0: number): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): SizeSearchCriteria;
}

export interface SpeedHintSearchCriteria extends NumberFieldSearchCriteria {
  thatEquals(arg0: number): void;

  thatIsLessThan(arg0: number): void;

  thatIsLessThanOrEqualTo(arg0: number): void;

  thatIsGreaterThan(arg0: number): void;

  thatIsGreaterThanOrEqualTo(arg0: number): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): SpeedHintSearchCriteria;
}

export interface StatusSearchCriteria
  extends EnumFieldSearchCriteria<ArchivingStatus> {
  fieldValue: ArchivingStatus;

  thatEquals(arg0: T): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): StatusSearchCriteria;
}

export interface StorageConfirmationSearchCriteria
  extends BooleanFieldSearchCriteria {
  thatEquals(arg0: boolean): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): StorageConfirmationSearchCriteria;
}

export interface StorageFormatSearchCriteria
  extends AbstractCompositeSearchCriteria {
  withCode(): CodeSearchCriteria;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): StorageFormatSearchCriteria;
}

export interface DataSetUnarchiveOptions extends Serializable {
  new (): DataSetUnarchiveOptions;
}

export interface UnarchiveDataSetsOperation extends IOperation {
  dataSetIds: IDataSetId[];
  options: DataSetUnarchiveOptions;

  getMessage(): string;

  getDataSetIds(): IDataSetId[];

  getOptions(): DataSetUnarchiveOptions;

  new (): UnarchiveDataSetsOperation;

  new (
    arg0: IDataSetId[],
    arg1: DataSetUnarchiveOptions,
  ): UnarchiveDataSetsOperation;
}

export interface UnarchiveDataSetsOperationResult extends IOperationResult {
  getMessage(): string;

  new (): UnarchiveDataSetsOperationResult;
}

export interface DataSetUnlockOptions extends Serializable {
  new (): DataSetUnlockOptions;
}

export interface UnlockDataSetsOperation extends IOperation {
  dataSetIds: IDataSetId[];
  options: DataSetUnlockOptions;

  getMessage(): string;

  getDataSetIds(): IDataSetId[];

  getOptions(): DataSetUnlockOptions;

  new (): UnlockDataSetsOperation;

  new (arg0: IDataSetId[], arg1: DataSetUnlockOptions): UnlockDataSetsOperation;
}

export interface UnlockDataSetsOperationResult extends IOperationResult {
  getMessage(): string;

  new (): UnlockDataSetsOperationResult;
}

export interface ContentCopyListUpdateValue
  extends ListUpdateValue<
    ContentCopyCreation,
    IContentCopyId,
    ContentCopyCreation,
    any
  > {
  actions: ListUpdateAction<any>[];

  add(arg0: ADD[]): void;

  remove(arg0: REMOVE[]): void;

  set(arg0: SET[]): void;

  getActions(): ListUpdateAction<ACTION>[];

  getAdded(): ADD[];

  getRemoved(): REMOVE[];

  getSet(): SET[];

  hasActions(): boolean;

  setActions(arg0: ListUpdateAction<ACTION>[]): void;

  new (): ContentCopyListUpdateValue;
}

export interface DataSetTypeUpdate
  extends IEntityTypeUpdate,
    IMetaDataUpdateHolder {
  mainDataSetPattern: FieldUpdateValue<string>;
  mainDataSetPath: FieldUpdateValue<string>;
  disallowDeletion: FieldUpdateValue<boolean>;

  getTypeId(): IEntityTypeId;

  setTypeId(arg0: IEntityTypeId): void;

  getObjectId(): IObjectId;

  getObjectId(): IEntityTypeId;

  getPropertyAssignments(): PropertyAssignmentListUpdateValue;

  getMainDataSetPattern(): FieldUpdateValue<string>;

  setMainDataSetPattern(arg0: string): void;

  getMainDataSetPath(): FieldUpdateValue<string>;

  setMainDataSetPath(arg0: string): void;

  isDisallowDeletion(): FieldUpdateValue<boolean>;

  setDisallowDeletion(arg0: boolean): void;

  getValidationPluginId(): FieldUpdateValue<IPluginId>;

  setValidationPluginId(arg0: IPluginId): void;

  setPropertyAssignmentActions(arg0: ListUpdateAction<any>[]): void;

  setMetaDataActions(arg0: ListUpdateAction<any>[]): void;

  setDescription(arg0: string): void;

  getMetaData(): ListUpdateMapValues;

  getDescription(): FieldUpdateValue<string>;

  new (): DataSetTypeUpdate;
}

export interface DataSetUpdate
  extends IUpdate,
    IObjectUpdate<IDataSetId>,
    IPropertiesHolder,
    IMetaDataUpdateHolder {
  dataSetId: IDataSetId;
  freeze: boolean;
  freezeForChildren: boolean;
  freezeForParents: boolean;
  freezeForComponents: boolean;
  freezeForContainers: boolean;
  experimentId: FieldUpdateValue<IExperimentId>;
  sampleId: FieldUpdateValue<ISampleId>;
  physicalData: FieldUpdateValue<PhysicalDataUpdate>;
  linkedData: FieldUpdateValue<LinkedDataUpdate>;
  tagIds: IdListUpdateValue<ITagId>;
  containerIds: IdListUpdateValue<IDataSetId>;
  componentIds: IdListUpdateValue<IDataSetId>;
  parentIds: IdListUpdateValue<IDataSetId>;
  childIds: IdListUpdateValue<IDataSetId>;

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  freeze(): void;

  getBooleanProperty(arg0: string): boolean;

  getObjectId(): IObjectId;

  getObjectId(): IDataSetId;

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  getExperimentId(): FieldUpdateValue<IExperimentId>;

  setExperimentId(arg0: IExperimentId): void;

  getSampleId(): FieldUpdateValue<ISampleId>;

  setSampleId(arg0: ISampleId): void;

  getTagIds(): IdListUpdateValue<ITagId>;

  getContainerIds(): IdListUpdateValue<IDataSetId>;

  getComponentIds(): IdListUpdateValue<IDataSetId>;

  getParentIds(): IdListUpdateValue<IDataSetId>;

  getChildIds(): IdListUpdateValue<IDataSetId>;

  getPhysicalData(): FieldUpdateValue<PhysicalDataUpdate>;

  setPhysicalData(arg0: PhysicalDataUpdate): void;

  getLinkedData(): FieldUpdateValue<LinkedDataUpdate>;

  setLinkedData(arg0: LinkedDataUpdate): void;

  shouldBeFrozenForChildren(): boolean;

  shouldBeFrozenForParents(): boolean;

  shouldBeFrozenForComponents(): boolean;

  shouldBeFrozenForContainers(): boolean;

  setTagActions(arg0: ListUpdateAction<ITagId>[]): void;

  setContainerActions(arg0: ListUpdateAction<IDataSetId>[]): void;

  setComponentActions(arg0: ListUpdateAction<IDataSetId>[]): void;

  setParentActions(arg0: ListUpdateAction<IDataSetId>[]): void;

  setChildActions(arg0: ListUpdateAction<IDataSetId>[]): void;

  setMetaDataActions(arg0: ListUpdateAction<any>[]): void;

  getDataSetId(): IDataSetId;

  freezeForChildren(): void;

  freezeForParents(): void;

  freezeForComponents(): void;

  freezeForContainers(): void;

  setDataSetId(arg0: IDataSetId): void;

  shouldBeFrozen(): boolean;

  getMetaData(): ListUpdateMapValues;

  new (): DataSetUpdate;
}

export interface LinkedDataUpdate extends IUpdate {
  /**
   * @deprecated
   */
  externalCode: FieldUpdateValue<string>;
  /**
   * @deprecated
   */
  externalDmsId: FieldUpdateValue<IExternalDmsId>;
  contentCopies: ContentCopyListUpdateValue;

  getExternalCode(): FieldUpdateValue<string>;

  setExternalCode(arg0: string): void;

  getContentCopies(): ContentCopyListUpdateValue;

  getExternalDmsId(): FieldUpdateValue<IExternalDmsId>;

  setExternalDmsId(arg0: IExternalDmsId): void;

  setContentCopyActions(arg0: ListUpdateAction<any>[]): void;

  new (): LinkedDataUpdate;
}

export interface PhysicalDataUpdate extends IUpdate {
  /**
   * @deprecated
   */
  fileFormatTypeId: FieldUpdateValue<IFileFormatTypeId>;
  archivingRequested: FieldUpdateValue<boolean>;

  isArchivingRequested(): FieldUpdateValue<boolean>;

  setArchivingRequested(arg0: boolean): void;

  getFileFormatTypeId(): FieldUpdateValue<IFileFormatTypeId>;

  setFileFormatTypeId(arg0: IFileFormatTypeId): void;

  new (): PhysicalDataUpdate;
}

export interface UpdateDataSetTypesOperation
  extends UpdateObjectsOperation<DataSetTypeUpdate> {
  updates: DataSetTypeUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateDataSetTypesOperation;

  new (arg0: DataSetTypeUpdate[]): UpdateDataSetTypesOperation;

  new (arg0: DataSetTypeUpdate[]): UpdateDataSetTypesOperation;
}

export interface UpdateDataSetTypesOperationResult
  extends UpdateObjectsOperationResult<EntityTypePermId> {
  objectIds: EntityTypePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateDataSetTypesOperationResult;

  new (arg0: EntityTypePermId[]): UpdateDataSetTypesOperationResult;
}

export interface UpdateDataSetsOperation
  extends UpdateObjectsOperation<DataSetUpdate> {
  updates: DataSetUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateDataSetsOperation;

  new (arg0: DataSetUpdate[]): UpdateDataSetsOperation;

  new (arg0: DataSetUpdate[]): UpdateDataSetsOperation;
}

export interface UpdateDataSetsOperationResult
  extends UpdateObjectsOperationResult<DataSetPermId> {
  objectIds: DataSetPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateDataSetsOperationResult;

  new (arg0: DataSetPermId[]): UpdateDataSetsOperationResult;
}

export interface DataStore
  extends Serializable,
    ICodeHolder,
    IModificationDateHolder,
    IRegistrationDateHolder {
  fetchOptions: DataStoreFetchOptions;
  downloadUrl: string;
  remoteUrl: string;

  getFetchOptions(): DataStoreFetchOptions;

  setFetchOptions(arg0: DataStoreFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getDownloadUrl(): string;

  setDownloadUrl(arg0: string): void;

  getRemoteUrl(): string;

  setRemoteUrl(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  new (): DataStore;
}

export interface DataStoreFetchOptions
  extends FetchOptions<DataStore>,
    Serializable {
  sort: DataStoreSortOptions;
  sortBy: DataStoreSortOptions;

  getSortBy(): DataStoreSortOptions;

  getSortBy(): SortOptions<any>;

  sortBy(): DataStoreSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): DataStoreFetchOptions;
}

export interface DataStoreSortOptions extends SortOptions<DataStore> {
  getSortings(): Sorting[];

  new (): DataStoreSortOptions;
}

export interface DataStorePermId extends ObjectPermId, IDataStoreId {
  getPermId(): string;

  new (arg0: string): DataStorePermId;

  new (): DataStorePermId;
}

export interface IDataStoreId extends IObjectId {}

export interface DataStoreSearchCriteria
  extends AbstractObjectSearchCriteria<IDataStoreId> {
  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withOrOperator(): DataStoreSearchCriteria;

  withAndOperator(): DataStoreSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): DataStoreSearchCriteria;
}

export interface SearchDataStoresOperation
  extends SearchObjectsOperation<
    DataStoreSearchCriteria,
    DataStoreFetchOptions
  > {
  criteria: DataStoreSearchCriteria;
  fetchOptions: DataStoreFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchDataStoresOperation;

  new (
    arg0: DataStoreSearchCriteria,
    arg1: DataStoreFetchOptions,
  ): SearchDataStoresOperation;
}

export interface SearchDataStoresOperationResult
  extends SearchObjectsOperationResult<DataStore> {
  searchResult: SearchResult<DataStore>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchDataStoresOperationResult;

  new (arg0: SearchResult<DataStore>): SearchDataStoresOperationResult;
}

export interface AbstractObjectDeletionOptions<T> extends Serializable {
  reason: string;

  setReason(arg0: string): T;

  getReason(): string;

  new (): AbstractObjectDeletionOptions<any>;
}

export interface DeletedObject extends Serializable {
  id: IObjectId;
  identifier: string;
  entityTypeCode: string;
  entityKind: EntityKind;

  getId(): IObjectId;

  getEntityTypeCode(): string;

  setEntityTypeCode(arg0: string): void;

  getEntityKind(): EntityKind;

  setEntityKind(arg0: EntityKind): void;

  setId(arg0: IObjectId): void;

  setIdentifier(arg0: string): void;

  getIdentifier(): string;

  new (): DeletedObject;
}

export interface Deletion extends Serializable {
  fetchOptions: DeletionFetchOptions;
  id: IDeletionId;
  reason: string;
  deletedObjects: DeletedObject[];
  deletionDate: Date;
  totalSamplesCount: number;
  totalDataSetsCount: number;
  totalExperimentsCount: number;

  getId(): IDeletionId;

  getFetchOptions(): DeletionFetchOptions;

  setFetchOptions(arg0: DeletionFetchOptions): void;

  getTotalSamplesCount(): number;

  setTotalSamplesCount(arg0: number): void;

  getTotalDataSetsCount(): number;

  setTotalDataSetsCount(arg0: number): void;

  getTotalExperimentsCount(): number;

  setTotalExperimentsCount(arg0: number): void;

  getDeletedObjects(): DeletedObject[];

  setDeletedObjects(arg0: DeletedObject[]): void;

  getDeletionDate(): Date;

  setDeletionDate(arg0: Date): void;

  setId(arg0: IDeletionId): void;

  setReason(arg0: string): void;

  getReason(): string;

  new (): Deletion;
}

export interface ConfirmDeletionsOperation extends IOperation {
  deletionIds: IDeletionId[];
  forceDeletion: boolean;
  forceDeletionOfDependentDeletions: boolean;

  getMessage(): string;

  isForceDeletion(): boolean;

  getDeletionIds(): IDeletionId[];

  setForceDeletion(arg0: boolean): void;

  isForceDeletionOfDependentDeletions(): boolean;

  setForceDeletionOfDependentDeletions(arg0: boolean): void;

  new (): ConfirmDeletionsOperation;

  new (arg0: IDeletionId[]): ConfirmDeletionsOperation;
}

export interface ConfirmDeletionsOperationResult extends IOperationResult {
  getMessage(): string;

  new (): ConfirmDeletionsOperationResult;
}

export interface DeletedObjectFetchOptions extends EmptyFetchOptions {
  getSortBy(): SortOptions<void>;

  sortBy(): SortOptions<void>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): DeletedObjectFetchOptions;
}

export interface DeletionFetchOptions
  extends FetchOptions<Deletion>,
    Serializable {
  deletedObjects: DeletedObjectFetchOptions;
  sort: DeletionSortOptions;
  sortBy: DeletionSortOptions;

  getSortBy(): DeletionSortOptions;

  getSortBy(): SortOptions<any>;

  hasDeletedObjects(): boolean;

  withDeletedObjects(): DeletedObjectFetchOptions;

  withDeletedObjectsUsing(
    arg0: DeletedObjectFetchOptions,
  ): DeletedObjectFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): DeletionSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): DeletionFetchOptions;
}

export interface DeletionSortOptions extends SortOptions<Deletion> {
  getSortings(): Sorting[];

  new (): DeletionSortOptions;
}

export interface DeletionTechId extends ObjectTechId, IDeletionId {
  getTechId(): number;

  new (arg0: number): DeletionTechId;

  new (): DeletionTechId;
}

export interface IDeletionId extends IObjectId {}

export interface RevertDeletionsOperation extends IOperation {
  deletionIds: IDeletionId[];

  getMessage(): string;

  getDeletionIds(): IDeletionId[];

  new (): RevertDeletionsOperation;

  new (arg0: IDeletionId[]): RevertDeletionsOperation;
}

export interface RevertDeletionsOperationResult extends IOperationResult {
  getMessage(): string;

  new (): RevertDeletionsOperationResult;
}

export interface DeletionSearchCriteria
  extends AbstractObjectSearchCriteria<IDeletionId> {
  withOrOperator(): DeletionSearchCriteria;

  withAndOperator(): DeletionSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): DeletionSearchCriteria;
}

export interface SearchDeletionsOperation
  extends SearchObjectsOperation<DeletionSearchCriteria, DeletionFetchOptions> {
  criteria: DeletionSearchCriteria;
  fetchOptions: DeletionFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchDeletionsOperation;

  new (
    arg0: DeletionSearchCriteria,
    arg1: DeletionFetchOptions,
  ): SearchDeletionsOperation;
}

export interface SearchDeletionsOperationResult
  extends SearchObjectsOperationResult<Deletion> {
  searchResult: SearchResult<Deletion>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchDeletionsOperationResult;

  new (arg0: SearchResult<Deletion>): SearchDeletionsOperationResult;
}

export interface CreateCodesOperation extends IOperation {
  prefix: string;
  entityKind: EntityKind;
  count: number;

  getMessage(): string;

  getCount(): number;

  getEntityKind(): EntityKind;

  getPrefix(): string;

  new (): CreateCodesOperation;

  new (arg0: string, arg1: EntityKind, arg2: number): CreateCodesOperation;
}

export interface CreateCodesOperationResult extends IOperationResult {
  codes: string[];

  getMessage(): string;

  getCodes(): string[];

  new (): CreateCodesOperationResult;

  new (arg0: string[]): CreateCodesOperationResult;
}

export interface CreatePermIdsOperation extends IOperation {
  count: number;

  getMessage(): string;

  getCount(): number;

  new (): CreatePermIdsOperation;

  new (arg0: number): CreatePermIdsOperation;
}

export interface CreatePermIdsOperationResult extends IOperationResult {
  permIds: string[];

  getMessage(): string;

  getPermIds(): string[];

  new (): CreatePermIdsOperationResult;

  new (arg0: string[]): CreatePermIdsOperationResult;
}

export interface IEntityTypeCreation extends ICreation, IObjectCreation {
  propertyAssignments: PropertyAssignmentCreation[];
  validationPluginId: IPluginId;
  description: string;
  code: string;

  getPropertyAssignments(): PropertyAssignmentCreation[];

  setPropertyAssignments(arg0: PropertyAssignmentCreation[]): void;

  getValidationPluginId(): IPluginId;

  setValidationPluginId(arg0: IPluginId): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;
}

export interface EntityTypeFetchOptions
  extends FetchOptions<IEntityType>,
    Serializable {
  propertyAssignments: PropertyAssignmentFetchOptions;
  sort: EntityTypeSortOptions;
  sortBy: EntityTypeSortOptions;

  getSortBy(): EntityTypeSortOptions;

  getSortBy(): SortOptions<any>;

  hasPropertyAssignments(): boolean;

  withPropertyAssignments(): PropertyAssignmentFetchOptions;

  withPropertyAssignmentsUsing(
    arg0: PropertyAssignmentFetchOptions,
  ): PropertyAssignmentFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): EntityTypeSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): EntityTypeFetchOptions;
}

export interface EntityTypeSortOptions extends SortOptions<IEntityType> {
  getSortings(): Sorting[];

  new (): EntityTypeSortOptions;
}

export interface EntityTypePermId extends ObjectPermId, IEntityTypeId {
  entityKind: EntityKind;

  getEntityKind(): EntityKind;

  getPermId(): string;

  new (): EntityTypePermId;

  new (arg0: string, arg1: EntityKind): EntityTypePermId;

  new (arg0: string): EntityTypePermId;
}

export interface IEntityTypeId extends IObjectId {}

export interface AbstractEntityTypeSearchCriteria
  extends AbstractObjectSearchCriteria<IEntityTypeId> {
  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withPropertyAssignments(): PropertyAssignmentSearchCriteria;

  withIds(): IdsSearchCriteria<IEntityTypeId>;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): AbstractEntityTypeSearchCriteria;
}

export interface EntityKindSearchCriteria
  extends EnumFieldSearchCriteria<EntityKind> {
  fieldValue: EntityKind;

  thatEquals(arg0: T): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EntityKindSearchCriteria;
}

export interface EntityTypeSearchCriteria
  extends AbstractObjectSearchCriteria<IEntityTypeId> {
  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withOrOperator(): EntityTypeSearchCriteria;

  withAndOperator(): EntityTypeSearchCriteria;

  withKind(): EntityKindSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): EntityTypeSearchCriteria;
}

export interface IEntityTypeUpdate
  extends IUpdate,
    IObjectUpdate<IEntityTypeId> {
  typeId: IEntityTypeId;
  propertyAssignments: PropertyAssignmentListUpdateValue;
  validationPluginId: FieldUpdateValue<IPluginId>;
  description: FieldUpdateValue<string>;
  objectId: IEntityTypeId;

  getTypeId(): IEntityTypeId;

  setTypeId(arg0: IEntityTypeId): void;

  getPropertyAssignments(): PropertyAssignmentListUpdateValue;

  getValidationPluginId(): FieldUpdateValue<IPluginId>;

  setValidationPluginId(arg0: IPluginId): void;

  setPropertyAssignmentActions(arg0: ListUpdateAction<any>[]): void;

  setDescription(arg0: string): void;

  getDescription(): FieldUpdateValue<string>;

  getObjectId(): ID;
}

export interface PropertyAssignmentListUpdateValue
  extends ListUpdateValue<
    PropertyAssignmentCreation,
    IPropertyAssignmentId,
    PropertyAssignmentCreation,
    any
  > {
  actions: ListUpdateAction<any>[];
  forceRemovingAssignments: boolean;

  isForceRemovingAssignments(): boolean;

  setForceRemovingAssignments(arg0: boolean): void;

  add(arg0: ADD[]): void;

  remove(arg0: REMOVE[]): void;

  set(arg0: SET[]): void;

  getActions(): ListUpdateAction<ACTION>[];

  getAdded(): ADD[];

  getRemoved(): REMOVE[];

  getSet(): SET[];

  hasActions(): boolean;

  setActions(arg0: ListUpdateAction<ACTION>[]): void;

  new (): PropertyAssignmentListUpdateValue;
}

export interface Event
  extends Serializable,
    IRegistrationDateHolder,
    IRegistratorHolder {
  fetchOptions: EventFetchOptions;
  id: IEventId;
  eventType: EventType;
  entityType: EntityType;
  entitySpace: string;
  entitySpaceId: ISpaceId;
  entityProject: string;
  entityProjectId: IProjectId;
  entityRegistrator: string;
  entityRegistrationDate: Date;
  identifier: string;
  description: string;
  reason: string;
  content: string;

  getId(): IEventId;

  getContent(): string;

  getFetchOptions(): EventFetchOptions;

  setFetchOptions(arg0: EventFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setContent(arg0: string): void;

  getEventType(): EventType;

  setEventType(arg0: EventType): void;

  getEntityType(): EntityType;

  setEntityType(arg0: EntityType): void;

  getEntitySpace(): string;

  setEntitySpace(arg0: string): void;

  getEntitySpaceId(): ISpaceId;

  setEntitySpaceId(arg0: ISpaceId): void;

  getEntityProject(): string;

  setEntityProject(arg0: string): void;

  getEntityProjectId(): IProjectId;

  setEntityProjectId(arg0: IProjectId): void;

  getEntityRegistrator(): string;

  setEntityRegistrator(arg0: string): void;

  getEntityRegistrationDate(): Date;

  setEntityRegistrationDate(arg0: Date): void;

  setDescription(arg0: string): void;

  setId(arg0: IEventId): void;

  setReason(arg0: string): void;

  setIdentifier(arg0: string): void;

  getReason(): string;

  getDescription(): string;

  getIdentifier(): string;

  new (): Event;
}

export interface EventFetchOptions extends FetchOptions<Event>, Serializable {
  registrator: PersonFetchOptions;
  sort: EventSortOptions;
  sortBy: EventSortOptions;

  hasRegistrator(): boolean;

  getSortBy(): EventSortOptions;

  getSortBy(): SortOptions<any>;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): EventSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): EventFetchOptions;
}

export interface EventSortOptions extends SortOptions<Event> {
  id: SortOrder;
  registrationDate: SortOrder;
  identifier: SortOrder;

  id(): SortOrder;

  getId(): SortOrder;

  registrationDate(): SortOrder;

  getRegistrationDate(): SortOrder;

  getIdentifier(): SortOrder;

  identifier(): SortOrder;

  getSortings(): Sorting[];

  new (): EventSortOptions;
}

export interface EventTechId extends ObjectTechId, IEventId {
  getTechId(): number;

  new (arg0: number): EventTechId;

  new (): EventTechId;
}

export interface IEventId extends IObjectId {}

export interface EventDescriptionSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EventDescriptionSearchCriteria;
}

export interface EventEntityProjectIdSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EventEntityProjectIdSearchCriteria;
}

export interface EventEntityProjectSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EventEntityProjectSearchCriteria;
}

export interface EventEntityRegistrationDateSearchCriteria
  extends DateFieldSearchCriteria {
  setTimeZone(arg0: ITimeZone): void;

  getTimeZone(): ITimeZone;

  withTimeZone(arg0: number): DateFieldSearchCriteria;

  setFieldValue(arg0: any): void;

  setFieldValue(arg0: IDate): void;

  thatEquals(arg0: Date): void;

  thatEquals(arg0: string): void;

  formatValue(arg0: string, arg1: IDateFormat): Date;

  thatIsLaterThanOrEqualTo(arg0: Date): void;

  thatIsLaterThanOrEqualTo(arg0: string): void;

  thatIsLaterThan(arg0: Date): void;

  thatIsLaterThan(arg0: string): void;

  thatIsEarlierThanOrEqualTo(arg0: Date): void;

  thatIsEarlierThanOrEqualTo(arg0: string): void;

  thatIsEarlierThan(arg0: string): void;

  thatIsEarlierThan(arg0: Date): void;

  withServerTimeZone(): DateFieldSearchCriteria;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  isNegated(): boolean;

  new (): EventEntityRegistrationDateSearchCriteria;
}

export interface EventEntityRegistratorSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EventEntityRegistratorSearchCriteria;
}

export interface EventEntitySpaceIdSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EventEntitySpaceIdSearchCriteria;
}

export interface EventEntitySpaceSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EventEntitySpaceSearchCriteria;
}

export interface EventEntityTypeSearchCriteria
  extends EnumFieldSearchCriteria<EntityType> {
  fieldValue: EntityType;

  thatEquals(arg0: T): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EventEntityTypeSearchCriteria;
}

export interface EventIdentifierSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EventIdentifierSearchCriteria;
}

export interface EventReasonSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EventReasonSearchCriteria;
}

export interface EventSearchCriteria
  extends AbstractObjectSearchCriteria<IEventId> {
  withRegistrator(): RegistratorSearchCriteria;

  withOrOperator(): EventSearchCriteria;

  withAndOperator(): EventSearchCriteria;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withEventType(): EventTypeSearchCriteria;

  withEntityType(): EventEntityTypeSearchCriteria;

  withEntitySpace(): EventEntitySpaceSearchCriteria;

  withEntitySpaceId(): EventEntitySpaceIdSearchCriteria;

  withEntityProject(): EventEntityProjectSearchCriteria;

  withEntityProjectId(): EventEntityProjectIdSearchCriteria;

  withEntityRegistrator(): EventEntityRegistratorSearchCriteria;

  withEntityRegistrationDate(): EventEntityRegistrationDateSearchCriteria;

  withIdentifier(): EventIdentifierSearchCriteria;

  withReason(): EventReasonSearchCriteria;

  withDescription(): EventDescriptionSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): EventSearchCriteria;
}

export interface EventTypeSearchCriteria
  extends EnumFieldSearchCriteria<EventType> {
  fieldValue: EventType;

  thatEquals(arg0: T): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EventTypeSearchCriteria;
}

export interface SearchEventsOperation
  extends SearchObjectsOperation<EventSearchCriteria, EventFetchOptions> {
  criteria: EventSearchCriteria;
  fetchOptions: EventFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchEventsOperation;

  new (
    arg0: EventSearchCriteria,
    arg1: EventFetchOptions,
  ): SearchEventsOperation;
}

export interface SearchEventsOperationResult
  extends SearchObjectsOperationResult<Event> {
  searchResult: SearchResult<Event>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchEventsOperationResult;

  new (arg0: SearchResult<Event>): SearchEventsOperationResult;
}

export interface Experiment
  extends Serializable,
    IAttachmentsHolder,
    ICodeHolder,
    IDataSetsHolder,
    IEntityTypeHolder,
    IIdentifierHolder,
    IMaterialPropertiesHolder,
    IModificationDateHolder,
    IModifierHolder,
    IPermIdHolder,
    IProjectHolder,
    IPropertiesHolder,
    IRegistrationDateHolder,
    IRegistratorHolder,
    ISamplesHolder,
    ITagsHolder {
  fetchOptions: ExperimentFetchOptions;
  permId: ExperimentPermId;
  identifier: ExperimentIdentifier;
  frozen: boolean;
  frozenForDataSets: boolean;
  frozenForSamples: boolean;
  type: ExperimentType;
  history: HistoryEntry[];
  propertiesHistory: HistoryEntry[];
  projectHistory: HistoryEntry[];
  samplesHistory: HistoryEntry[];
  dataSetsHistory: HistoryEntry[];
  unknownHistory: HistoryEntry[];
  sampleProperties: { [index: string]: Sample };
  metaData: { [index: string]: string };

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  getType(): IEntityType;

  getType(): ExperimentType;

  isFrozen(): boolean;

  getBooleanProperty(arg0: string): boolean;

  getFetchOptions(): ExperimentFetchOptions;

  setFetchOptions(arg0: ExperimentFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  getSamples(): Sample[];

  setPermId(arg0: ExperimentPermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getAttachments(): Attachment[];

  getMaterialProperties(): { [index: string]: Material };

  setMaterialProperties(arg0: { [index: string]: Material }): void;

  getMaterialProperty(arg0: string): Material;

  setMaterialProperty(arg0: string, arg1: Material): void;

  getDataSets(): DataSet[];

  getPermId(): ExperimentPermId;

  getPermId(): IObjectId;

  getModifier(): Person;

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  setFrozen(arg0: boolean): void;

  getSampleProperties(): { [index: string]: Sample };

  setSampleProperties(arg0: { [index: string]: Sample }): void;

  setHistory(arg0: HistoryEntry[]): void;

  getPropertiesHistory(): HistoryEntry[];

  setPropertiesHistory(arg0: HistoryEntry[]): void;

  getUnknownHistory(): HistoryEntry[];

  setUnknownHistory(arg0: HistoryEntry[]): void;

  setModifier(arg0: Person): void;

  setMetaData(arg0: { [index: string]: string }): void;

  isFrozenForDataSets(): boolean;

  setFrozenForDataSets(arg0: boolean): void;

  isFrozenForSamples(): boolean;

  setFrozenForSamples(arg0: boolean): void;

  setDataSets(arg0: DataSet[]): void;

  setSamples(arg0: Sample[]): void;

  getProjectHistory(): HistoryEntry[];

  setProjectHistory(arg0: HistoryEntry[]): void;

  getSamplesHistory(): HistoryEntry[];

  setSamplesHistory(arg0: HistoryEntry[]): void;

  getDataSetsHistory(): HistoryEntry[];

  setDataSetsHistory(arg0: HistoryEntry[]): void;

  setAttachments(arg0: Attachment[]): void;

  getProject(): Project;

  setProject(arg0: Project): void;

  getMetaData(): { [index: string]: string };

  getHistory(): HistoryEntry[];

  getCode(): string;

  setCode(arg0: string): void;

  getTags(): Tag[];

  setTags(arg0: Tag[]): void;

  setIdentifier(arg0: ExperimentIdentifier): void;

  setType(arg0: ExperimentType): void;

  getIdentifier(): ObjectIdentifier;

  getIdentifier(): ExperimentIdentifier;

  new (): Experiment;
}

export interface ExperimentType
  extends Serializable,
    ICodeHolder,
    IDescriptionHolder,
    IEntityType,
    IModificationDateHolder,
    IPermIdHolder,
    IPropertyAssignmentsHolder {
  fetchOptions: ExperimentTypeFetchOptions;
  permId: EntityTypePermId;
  metaData: { [index: string]: string };

  getFetchOptions(): ExperimentTypeFetchOptions;

  setFetchOptions(arg0: ExperimentTypeFetchOptions): void;

  setPermId(arg0: EntityTypePermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getPropertyAssignments(): PropertyAssignment[];

  getValidationPlugin(): Plugin;

  getPermId(): IObjectId;

  getPermId(): EntityTypePermId;

  setPropertyAssignments(arg0: PropertyAssignment[]): void;

  setValidationPlugin(arg0: Plugin): void;

  setMetaData(arg0: { [index: string]: string }): void;

  setDescription(arg0: string): void;

  getMetaData(): { [index: string]: string };

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): ExperimentType;
}

export interface CreateExperimentTypesOperation
  extends CreateObjectsOperation<ExperimentTypeCreation> {
  creations: ExperimentTypeCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateExperimentTypesOperation;

  new (arg0: ExperimentTypeCreation[]): CreateExperimentTypesOperation;

  new (arg0: ExperimentTypeCreation[]): CreateExperimentTypesOperation;
}

export interface CreateExperimentTypesOperationResult
  extends CreateObjectsOperationResult<EntityTypePermId> {
  objectIds: EntityTypePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateExperimentTypesOperationResult;

  new (arg0: EntityTypePermId[]): CreateExperimentTypesOperationResult;
}

export interface CreateExperimentsOperation
  extends CreateObjectsOperation<ExperimentCreation> {
  creations: ExperimentCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateExperimentsOperation;

  new (arg0: ExperimentCreation[]): CreateExperimentsOperation;

  new (arg0: ExperimentCreation[]): CreateExperimentsOperation;
}

export interface CreateExperimentsOperationResult
  extends CreateObjectsOperationResult<ExperimentPermId> {
  objectIds: ExperimentPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateExperimentsOperationResult;

  new (arg0: ExperimentPermId[]): CreateExperimentsOperationResult;
}

export interface ExperimentCreation
  extends ICreation,
    IObjectCreation,
    ICreationIdHolder,
    IPropertiesHolder {
  typeId: IEntityTypeId;
  projectId: IProjectId;
  code: string;
  tagIds: ITagId[];
  attachments: AttachmentCreation[];
  metaData: { [index: string]: string };

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  getBooleanProperty(arg0: string): boolean;

  getTypeId(): IEntityTypeId;

  setTypeId(arg0: IEntityTypeId): void;

  getCreationId(): CreationId;

  setCreationId(arg0: CreationId): void;

  getAttachments(): AttachmentCreation[];

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  getTagIds(): ITagId[];

  setTagIds(arg0: ITagId[]): void;

  setMetaData(arg0: { [index: string]: string }): void;

  setProjectId(arg0: IProjectId): void;

  setAttachments(arg0: AttachmentCreation[]): void;

  getProjectId(): IProjectId;

  getMetaData(): { [index: string]: string };

  getCode(): string;

  setCode(arg0: string): void;

  new (): ExperimentCreation;
}

export interface ExperimentTypeCreation extends IEntityTypeCreation {
  metaData: { [index: string]: string };

  getPropertyAssignments(): PropertyAssignmentCreation[];

  setPropertyAssignments(arg0: PropertyAssignmentCreation[]): void;

  getValidationPluginId(): IPluginId;

  setValidationPluginId(arg0: IPluginId): void;

  setMetaData(arg0: { [index: string]: string }): void;

  setDescription(arg0: string): void;

  getMetaData(): { [index: string]: string };

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): ExperimentTypeCreation;
}

export interface DeleteExperimentTypesOperation
  extends DeleteObjectsOperation<IEntityTypeId, ExperimentTypeDeletionOptions> {
  options: ExperimentTypeDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteExperimentTypesOperation;

  new (
    arg0: IEntityTypeId[],
    arg1: ExperimentTypeDeletionOptions,
  ): DeleteExperimentTypesOperation;
}

export interface DeleteExperimentTypesOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteExperimentTypesOperationResult;
}

export interface DeleteExperimentsOperation
  extends DeleteObjectsOperation<IExperimentId, ExperimentDeletionOptions> {
  options: ExperimentDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteExperimentsOperation;

  new (
    arg0: IExperimentId[],
    arg1: ExperimentDeletionOptions,
  ): DeleteExperimentsOperation;
}

export interface DeleteExperimentsOperationResult
  extends DeleteObjectsWithTrashOperationResult {
  getMessage(): string;

  getDeletionId(): IDeletionId;

  new (): DeleteExperimentsOperationResult;

  new (arg0: IDeletionId): DeleteExperimentsOperationResult;
}

export interface ExperimentDeletionOptions
  extends AbstractObjectDeletionOptions<ExperimentDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): ExperimentDeletionOptions;
}

export interface ExperimentTypeDeletionOptions
  extends AbstractObjectDeletionOptions<ExperimentTypeDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): ExperimentTypeDeletionOptions;
}

export interface ExperimentFetchOptions
  extends FetchOptions<Experiment>,
    Serializable {
  type: ExperimentTypeFetchOptions;
  project: ProjectFetchOptions;
  dataSets: DataSetFetchOptions;
  samples: SampleFetchOptions;
  history: HistoryEntryFetchOptions;
  propertiesHistory: HistoryEntryFetchOptions;
  projectHistory: HistoryEntryFetchOptions;
  samplesHistory: HistoryEntryFetchOptions;
  dataSetsHistory: HistoryEntryFetchOptions;
  unknownHistory: HistoryEntryFetchOptions;
  properties: PropertyFetchOptions;
  materialProperties: MaterialFetchOptions;
  sampleProperties: SampleFetchOptions;
  tags: TagFetchOptions;
  registrator: PersonFetchOptions;
  modifier: PersonFetchOptions;
  attachments: AttachmentFetchOptions;
  sort: ExperimentSortOptions;
  sortBy: ExperimentSortOptions;

  withModifier(): PersonFetchOptions;

  hasRegistrator(): boolean;

  getSortBy(): SortOptions<any>;

  getSortBy(): ExperimentSortOptions;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasType(): boolean;

  hasProperties(): boolean;

  hasMaterialProperties(): boolean;

  hasSampleProperties(): boolean;

  hasTags(): boolean;

  hasHistory(): boolean;

  hasPropertiesHistory(): boolean;

  hasUnknownHistory(): boolean;

  hasModifier(): boolean;

  withTypeUsing(arg0: ExperimentTypeFetchOptions): ExperimentTypeFetchOptions;

  withPropertiesUsing(arg0: PropertyFetchOptions): PropertyFetchOptions;

  withMaterialProperties(): MaterialFetchOptions;

  withMaterialPropertiesUsing(arg0: MaterialFetchOptions): MaterialFetchOptions;

  withSampleProperties(): SampleFetchOptions;

  withSamplePropertiesUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  withTags(): TagFetchOptions;

  withTagsUsing(arg0: TagFetchOptions): TagFetchOptions;

  withHistory(): HistoryEntryFetchOptions;

  withHistoryUsing(arg0: HistoryEntryFetchOptions): HistoryEntryFetchOptions;

  withPropertiesHistory(): HistoryEntryFetchOptions;

  withPropertiesHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withUnknownHistory(): HistoryEntryFetchOptions;

  withUnknownHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withModifierUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasProject(): boolean;

  hasDataSets(): boolean;

  hasSamples(): boolean;

  hasProjectHistory(): boolean;

  hasSamplesHistory(): boolean;

  hasDataSetsHistory(): boolean;

  hasAttachments(): boolean;

  withProject(): ProjectFetchOptions;

  withProjectUsing(arg0: ProjectFetchOptions): ProjectFetchOptions;

  withDataSets(): DataSetFetchOptions;

  withDataSetsUsing(arg0: DataSetFetchOptions): DataSetFetchOptions;

  withSamples(): SampleFetchOptions;

  withSamplesUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  withProjectHistory(): HistoryEntryFetchOptions;

  withProjectHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withSamplesHistory(): HistoryEntryFetchOptions;

  withSamplesHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withDataSetsHistory(): HistoryEntryFetchOptions;

  withDataSetsHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withAttachments(): AttachmentFetchOptions;

  withAttachmentsUsing(arg0: AttachmentFetchOptions): AttachmentFetchOptions;

  withProperties(): PropertyFetchOptions;

  withType(): ExperimentTypeFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): ExperimentSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): ExperimentFetchOptions;
}

export interface ExperimentSortOptions
  extends EntityWithPropertiesSortOptions<Experiment> {
  identifier: SortOrder;

  getIdentifier(): SortOrder;

  identifier(): SortOrder;

  type(): SortOrder;

  getProperty(arg0: string): SortOrder;

  getType(): SortOrder;

  property(arg0: string): SortOrder;

  fetchedFieldsScore(): SortOrder;

  getFetchedFieldsScore(): SortOrder;

  stringMatchPropertyScore(arg0: string, arg1: string): SortOrder;

  stringPrefixMatchPropertyScore(arg0: string, arg1: string): SortOrder;

  stringMatchAnyPropertyScore(arg0: string): SortOrder;

  stringPrefixMatchAnyPropertyScore(arg0: string): SortOrder;

  code(): SortOrder;

  registrationDate(): SortOrder;

  getRegistrationDate(): SortOrder;

  permId(): SortOrder;

  modificationDate(): SortOrder;

  getModificationDate(): SortOrder;

  getPermId(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): ExperimentSortOptions;
}

export interface ExperimentTypeFetchOptions
  extends FetchOptions<ExperimentType>,
    Serializable {
  propertyAssignments: PropertyAssignmentFetchOptions;
  validationPlugin: PluginFetchOptions;
  sort: ExperimentTypeSortOptions;
  sortBy: ExperimentTypeSortOptions;

  getSortBy(): ExperimentTypeSortOptions;

  getSortBy(): SortOptions<any>;

  hasPropertyAssignments(): boolean;

  hasValidationPlugin(): boolean;

  withPropertyAssignments(): PropertyAssignmentFetchOptions;

  withPropertyAssignmentsUsing(
    arg0: PropertyAssignmentFetchOptions,
  ): PropertyAssignmentFetchOptions;

  withValidationPlugin(): PluginFetchOptions;

  withValidationPluginUsing(arg0: PluginFetchOptions): PluginFetchOptions;

  sortBy(): ExperimentTypeSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): ExperimentTypeFetchOptions;
}

export interface ExperimentTypeSortOptions extends SortOptions<ExperimentType> {
  getSortings(): Sorting[];

  new (): ExperimentTypeSortOptions;
}

export interface GetExperimentTypesOperation
  extends GetObjectsOperation<IEntityTypeId, ExperimentTypeFetchOptions> {
  fetchOptions: ExperimentTypeFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetExperimentTypesOperation;

  new (
    arg0: IEntityTypeId[],
    arg1: ExperimentTypeFetchOptions,
  ): GetExperimentTypesOperation;
}

export interface GetExperimentTypesOperationResult
  extends GetObjectsOperationResult<IEntityTypeId, ExperimentType> {
  ids: IEntityTypeId[];
  objects: ExperimentType[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetExperimentTypesOperationResult;

  new (arg0: {
    [index: string]: ExperimentType;
  }): GetExperimentTypesOperationResult;
}

export interface GetExperimentsOperation
  extends GetObjectsOperation<IExperimentId, ExperimentFetchOptions> {
  fetchOptions: ExperimentFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetExperimentsOperation;

  new (
    arg0: IExperimentId[],
    arg1: ExperimentFetchOptions,
  ): GetExperimentsOperation;
}

export interface GetExperimentsOperationResult
  extends GetObjectsOperationResult<IExperimentId, Experiment> {
  ids: IExperimentId[];
  objects: Experiment[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetExperimentsOperationResult;

  new (arg0: { [index: string]: Experiment }): GetExperimentsOperationResult;
}

export interface ExperimentIdentifier extends ObjectIdentifier, IExperimentId {
  getIdentifier(): string;

  new (arg0: string): ExperimentIdentifier;

  new (arg0: string, arg1: string, arg2: string): ExperimentIdentifier;

  new (): ExperimentIdentifier;
}

export interface ExperimentPermId extends ObjectPermId, IExperimentId {
  getPermId(): string;

  new (arg0: string): ExperimentPermId;

  new (): ExperimentPermId;
}

export interface IExperimentId extends IObjectId {}

export interface ExperimentSearchCriteria
  extends AbstractEntitySearchCriteria<IExperimentId> {
  negate(): AbstractEntitySearchCriteria<any>;

  negate(): ExperimentSearchCriteria;

  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): ExperimentSearchCriteria;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withAndOperator(): ExperimentSearchCriteria;

  withSubcriteria(): ExperimentSearchCriteria;

  withTextAttribute(): TextAttributeSearchCriteria;

  withIdentifier(): IdentifierSearchCriteria;

  withProject(): ProjectSearchCriteria;

  withType(): ExperimentTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (): ExperimentSearchCriteria;
}

export interface ExperimentTypeSearchCriteria
  extends AbstractEntityTypeSearchCriteria {
  withOrOperator(): ExperimentTypeSearchCriteria;

  withAndOperator(): ExperimentTypeSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withPropertyAssignments(): PropertyAssignmentSearchCriteria;

  withIds(): IdsSearchCriteria<IEntityTypeId>;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): ExperimentTypeSearchCriteria;
}

export interface NoExperimentSearchCriteria extends ISearchCriteria {
  isNegated(): boolean;

  new (): NoExperimentSearchCriteria;
}

export interface SearchExperimentTypesOperation
  extends SearchObjectsOperation<
    ExperimentTypeSearchCriteria,
    ExperimentTypeFetchOptions
  > {
  criteria: ExperimentTypeSearchCriteria;
  fetchOptions: ExperimentTypeFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchExperimentTypesOperation;

  new (
    arg0: ExperimentTypeSearchCriteria,
    arg1: ExperimentTypeFetchOptions,
  ): SearchExperimentTypesOperation;
}

export interface SearchExperimentTypesOperationResult
  extends SearchObjectsOperationResult<ExperimentType> {
  searchResult: SearchResult<ExperimentType>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchExperimentTypesOperationResult;

  new (
    arg0: SearchResult<ExperimentType>,
  ): SearchExperimentTypesOperationResult;
}

export interface SearchExperimentsOperation
  extends SearchObjectsOperation<
    ExperimentSearchCriteria,
    ExperimentFetchOptions
  > {
  criteria: ExperimentSearchCriteria;
  fetchOptions: ExperimentFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchExperimentsOperation;

  new (
    arg0: ExperimentSearchCriteria,
    arg1: ExperimentFetchOptions,
  ): SearchExperimentsOperation;
}

export interface SearchExperimentsOperationResult
  extends SearchObjectsOperationResult<Experiment> {
  searchResult: SearchResult<Experiment>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchExperimentsOperationResult;

  new (arg0: SearchResult<Experiment>): SearchExperimentsOperationResult;
}

export interface ExperimentTypeUpdate
  extends IEntityTypeUpdate,
    IMetaDataUpdateHolder {
  getTypeId(): IEntityTypeId;

  setTypeId(arg0: IEntityTypeId): void;

  getObjectId(): IObjectId;

  getObjectId(): IEntityTypeId;

  getPropertyAssignments(): PropertyAssignmentListUpdateValue;

  getValidationPluginId(): FieldUpdateValue<IPluginId>;

  setValidationPluginId(arg0: IPluginId): void;

  setPropertyAssignmentActions(arg0: ListUpdateAction<any>[]): void;

  setMetaDataActions(arg0: ListUpdateAction<any>[]): void;

  setDescription(arg0: string): void;

  getMetaData(): ListUpdateMapValues;

  getDescription(): FieldUpdateValue<string>;

  new (): ExperimentTypeUpdate;
}

export interface ExperimentUpdate
  extends IUpdate,
    IObjectUpdate<IExperimentId>,
    IPropertiesHolder,
    IMetaDataUpdateHolder {
  experimentId: IExperimentId;
  freeze: boolean;
  freezeForDataSets: boolean;
  freezeForSamples: boolean;
  projectId: FieldUpdateValue<IProjectId>;
  tagIds: IdListUpdateValue<ITagId>;
  attachments: AttachmentListUpdateValue;

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  freeze(): void;

  getBooleanProperty(arg0: string): boolean;

  getObjectId(): IObjectId;

  getObjectId(): IExperimentId;

  getAttachments(): AttachmentListUpdateValue;

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  getExperimentId(): IExperimentId;

  setExperimentId(arg0: IExperimentId): void;

  getTagIds(): IdListUpdateValue<ITagId>;

  setMetaDataActions(arg0: ListUpdateAction<any>[]): void;

  shouldBeFrozen(): boolean;

  setProjectId(arg0: IProjectId): void;

  freezeForDataSets(): void;

  freezeForSamples(): void;

  shouldBeFrozenForDataSets(): boolean;

  shouldBeFrozenForSamples(): boolean;

  setAttachmentsActions(arg0: ListUpdateAction<any>[]): void;

  getProjectId(): FieldUpdateValue<IProjectId>;

  getMetaData(): ListUpdateMapValues;

  new (): ExperimentUpdate;
}

export interface UpdateExperimentTypesOperation
  extends UpdateObjectsOperation<ExperimentTypeUpdate> {
  updates: ExperimentTypeUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateExperimentTypesOperation;

  new (arg0: ExperimentTypeUpdate[]): UpdateExperimentTypesOperation;

  new (arg0: ExperimentTypeUpdate[]): UpdateExperimentTypesOperation;
}

export interface UpdateExperimentTypesOperationResult
  extends UpdateObjectsOperationResult<EntityTypePermId> {
  objectIds: EntityTypePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateExperimentTypesOperationResult;

  new (arg0: EntityTypePermId[]): UpdateExperimentTypesOperationResult;
}

export interface UpdateExperimentsOperation
  extends UpdateObjectsOperation<ExperimentUpdate> {
  updates: ExperimentUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateExperimentsOperation;

  new (arg0: ExperimentUpdate[]): UpdateExperimentsOperation;

  new (arg0: ExperimentUpdate[]): UpdateExperimentsOperation;
}

export interface UpdateExperimentsOperationResult
  extends UpdateObjectsOperationResult<ExperimentPermId> {
  objectIds: ExperimentPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateExperimentsOperationResult;

  new (arg0: ExperimentPermId[]): UpdateExperimentsOperationResult;
}

export interface ExternalDms extends Serializable, ICodeHolder {
  fetchOptions: ExternalDmsFetchOptions;
  permId: ExternalDmsPermId;
  label: string;
  urlTemplate: string;
  address: string;
  openbis: boolean;
  addressType: ExternalDmsAddressType;

  getAddress(): string;

  getFetchOptions(): ExternalDmsFetchOptions;

  setFetchOptions(arg0: ExternalDmsFetchOptions): void;

  setPermId(arg0: ExternalDmsPermId): void;

  getPermId(): ExternalDmsPermId;

  getUrlTemplate(): string;

  setUrlTemplate(arg0: string): void;

  isOpenbis(): boolean;

  setOpenbis(arg0: boolean): void;

  setAddressType(arg0: ExternalDmsAddressType): void;

  getAddressType(): ExternalDmsAddressType;

  getCode(): string;

  setCode(arg0: string): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  setAddress(arg0: string): void;

  new (): ExternalDms;
}

export interface CreateExternalDmsOperation
  extends CreateObjectsOperation<ExternalDmsCreation> {
  creations: ExternalDmsCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateExternalDmsOperation;

  new (arg0: ExternalDmsCreation[]): CreateExternalDmsOperation;

  new (arg0: ExternalDmsCreation[]): CreateExternalDmsOperation;
}

export interface CreateExternalDmsOperationResult
  extends CreateObjectsOperationResult<ExternalDmsPermId> {
  objectIds: ExternalDmsPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateExternalDmsOperationResult;

  new (arg0: ExternalDmsPermId[]): CreateExternalDmsOperationResult;
}

export interface ExternalDmsCreation
  extends ICreation,
    IObjectCreation,
    ICreationIdHolder {
  code: string;
  label: string;
  address: string;
  addressType: ExternalDmsAddressType;

  getAddress(): string;

  getCreationId(): CreationId;

  setCreationId(arg0: CreationId): void;

  setAddressType(arg0: ExternalDmsAddressType): void;

  getAddressType(): ExternalDmsAddressType;

  getCode(): string;

  setCode(arg0: string): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  setAddress(arg0: string): void;

  new (): ExternalDmsCreation;
}

export interface DeleteExternalDmsOperation
  extends DeleteObjectsOperation<IExternalDmsId, ExternalDmsDeletionOptions> {
  options: ExternalDmsDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteExternalDmsOperation;

  new (
    arg0: IExternalDmsId[],
    arg1: ExternalDmsDeletionOptions,
  ): DeleteExternalDmsOperation;
}

export interface DeleteExternalDmsOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteExternalDmsOperationResult;
}

export interface ExternalDmsDeletionOptions
  extends AbstractObjectDeletionOptions<ExternalDmsDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): ExternalDmsDeletionOptions;
}

export interface ExternalDmsFetchOptions
  extends FetchOptions<ExternalDms>,
    Serializable {
  sort: ExternalDmsSortOptions;
  sortBy: ExternalDmsSortOptions;

  getSortBy(): ExternalDmsSortOptions;

  getSortBy(): SortOptions<any>;

  sortBy(): ExternalDmsSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): ExternalDmsFetchOptions;
}

export interface ExternalDmsSortOptions extends SortOptions<ExternalDms> {
  getSortings(): Sorting[];

  new (): ExternalDmsSortOptions;
}

export interface GetExternalDmsOperation
  extends GetObjectsOperation<IExternalDmsId, ExternalDmsFetchOptions> {
  fetchOptions: ExternalDmsFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetExternalDmsOperation;

  new (
    arg0: IExternalDmsId[],
    arg1: ExternalDmsFetchOptions,
  ): GetExternalDmsOperation;
}

export interface GetExternalDmsOperationResult
  extends GetObjectsOperationResult<IExternalDmsId, ExternalDms> {
  ids: IExternalDmsId[];
  objects: ExternalDms[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetExternalDmsOperationResult;

  new (arg0: { [index: string]: ExternalDms }): GetExternalDmsOperationResult;
}

export interface ExternalDmsPermId extends ObjectPermId, IExternalDmsId {
  getPermId(): string;

  new (arg0: string): ExternalDmsPermId;

  new (): ExternalDmsPermId;
}

export interface IExternalDmsId extends IObjectId {}

export interface AddressSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): AddressSearchCriteria;
}

export interface ExternalDmsTypeSearchCriteria
  extends EnumFieldSearchCriteria<ExternalDmsAddressType> {
  fieldValue: ExternalDmsAddressType;

  thatEquals(arg0: T): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): ExternalDmsTypeSearchCriteria;
}

export interface LabelSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): LabelSearchCriteria;
}

export interface SearchExternalDmsOperation
  extends SearchObjectsOperation<any, ExternalDmsFetchOptions> {
  criteria: any;
  fetchOptions: ExternalDmsFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchExternalDmsOperation;

  new (
    arg0: $ch$ethz$sis$openbis$generic$asapi$v3$dto$externaldms$search$ExternalDmsSearchCriteria$,
    arg1: ExternalDmsFetchOptions,
  ): SearchExternalDmsOperation;
}

export interface SearchExternalDmsOperationResult
  extends SearchObjectsOperationResult<ExternalDms> {
  searchResult: SearchResult<ExternalDms>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchExternalDmsOperationResult;

  new (arg0: SearchResult<ExternalDms>): SearchExternalDmsOperationResult;
}

export interface ExternalDmsUpdate
  extends IUpdate,
    IObjectUpdate<IExternalDmsId> {
  externalDmsId: IExternalDmsId;
  label: FieldUpdateValue<string>;
  address: FieldUpdateValue<string>;

  getAddress(): FieldUpdateValue<string>;

  getObjectId(): IObjectId;

  getObjectId(): IExternalDmsId;

  getExternalDmsId(): IExternalDmsId;

  setExternalDmsId(arg0: IExternalDmsId): void;

  getLabel(): FieldUpdateValue<string>;

  setLabel(arg0: string): void;

  setAddress(arg0: string): void;

  new (): ExternalDmsUpdate;
}

export interface UpdateExternalDmsOperation
  extends UpdateObjectsOperation<ExternalDmsUpdate> {
  updates: ExternalDmsUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateExternalDmsOperation;

  new (arg0: ExternalDmsUpdate[]): UpdateExternalDmsOperation;

  new (arg0: ExternalDmsUpdate[]): UpdateExternalDmsOperation;
}

export interface UpdateExternalDmsOperationResult
  extends UpdateObjectsOperationResult<ExternalDmsPermId> {
  objectIds: ExternalDmsPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateExternalDmsOperationResult;

  new (arg0: ExternalDmsPermId[]): UpdateExternalDmsOperationResult;
}

export interface GlobalSearchObject extends Serializable {
  fetchOptions: GlobalSearchObjectFetchOptions;
  objectKind: GlobalSearchObjectKind;
  objectPermId: IObjectId;
  objectIdentifier: IObjectId;
  match: string;
  score: number;
  experiment: Experiment;
  sample: Sample;
  dataSet: DataSet;
  material: Material;

  getFetchOptions(): GlobalSearchObjectFetchOptions;

  setFetchOptions(arg0: GlobalSearchObjectFetchOptions): void;

  getExperiment(): Experiment;

  setExperiment(arg0: Experiment): void;

  setSample(arg0: Sample): void;

  getObjectKind(): GlobalSearchObjectKind;

  setObjectKind(arg0: GlobalSearchObjectKind): void;

  getObjectPermId(): IObjectId;

  setObjectPermId(arg0: IObjectId): void;

  getObjectIdentifier(): IObjectId;

  setObjectIdentifier(arg0: IObjectId): void;

  setMatch(arg0: string): void;

  getScore(): number;

  setScore(arg0: number): void;

  getDataSet(): DataSet;

  setDataSet(arg0: DataSet): void;

  getMaterial(): Material;

  setMaterial(arg0: Material): void;

  getMatch(): string;

  getSample(): Sample;

  new (): GlobalSearchObject;
}

export interface GlobalSearchObjectFetchOptions
  extends FetchOptions<GlobalSearchObject>,
    Serializable {
  experiment: ExperimentFetchOptions;
  sample: SampleFetchOptions;
  dataSet: DataSetFetchOptions;
  material: MaterialFetchOptions;
  sort: GlobalSearchObjectSortOptions;
  match: MatchFetchOptions;
  sortBy: GlobalSearchObjectSortOptions;

  getSortBy(): SortOptions<any>;

  getSortBy(): GlobalSearchObjectSortOptions;

  hasExperiment(): boolean;

  hasSample(): boolean;

  withExperiment(): ExperimentFetchOptions;

  withExperimentUsing(arg0: ExperimentFetchOptions): ExperimentFetchOptions;

  withSample(): SampleFetchOptions;

  withSampleUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  hasDataSet(): boolean;

  hasMaterial(): boolean;

  withDataSet(): DataSetFetchOptions;

  withDataSetUsing(arg0: DataSetFetchOptions): DataSetFetchOptions;

  withMaterial(): MaterialFetchOptions;

  withMaterialUsing(arg0: MaterialFetchOptions): MaterialFetchOptions;

  withMatch(): MatchFetchOptions;

  hasMatch(): boolean;

  withMatchUsing(arg0: MatchFetchOptions): MatchFetchOptions;

  sortBy(): GlobalSearchObjectSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): GlobalSearchObjectFetchOptions;
}

export interface GlobalSearchObjectSortOptions
  extends SortOptions<GlobalSearchObject> {
  objectKind(): SortOrder;

  objectPermId(): SortOrder;

  objectIdentifier(): SortOrder;

  score(): SortOrder;

  getSortings(): Sorting[];

  new (): GlobalSearchObjectSortOptions;
}

export interface MatchFetchOptions extends EmptyFetchOptions {
  getSortBy(): SortOptions<void>;

  sortBy(): SortOptions<void>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): MatchFetchOptions;
}

export interface GlobalSearchCriteria extends AbstractCompositeSearchCriteria {
  withText(): GlobalSearchTextCriteria;

  withObjectKind(): GlobalSearchObjectKindCriteria;

  withWildCards(): GlobalSearchWildCardsCriteria;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): GlobalSearchCriteria;
}

export interface GlobalSearchObjectKindCriteria extends AbstractSearchCriteria {
  objectKinds: GlobalSearchObjectKind[];

  thatIn(arg0: GlobalSearchObjectKind[]): void;

  thatIn(arg0: GlobalSearchObjectKind[]): void;

  getObjectKinds(): GlobalSearchObjectKind[];

  isNegated(): boolean;

  new (): GlobalSearchObjectKindCriteria;
}

export interface GlobalSearchTextCriteria
  extends AbstractFieldSearchCriteria<AbstractStringValue> {
  fieldValue: AbstractStringValue;

  thatMatches(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatContainsExactly(arg0: string): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): GlobalSearchTextCriteria;
}

export interface GlobalSearchWildCardsCriteria extends AbstractSearchCriteria {
  isNegated(): boolean;

  new (): GlobalSearchWildCardsCriteria;
}

export interface SearchGloballyOperation
  extends SearchObjectsOperation<
    GlobalSearchCriteria,
    GlobalSearchObjectFetchOptions
  > {
  criteria: GlobalSearchCriteria;
  fetchOptions: GlobalSearchObjectFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchGloballyOperation;

  new (
    arg0: GlobalSearchCriteria,
    arg1: GlobalSearchObjectFetchOptions,
  ): SearchGloballyOperation;
}

export interface SearchGloballyOperationResult
  extends SearchObjectsOperationResult<GlobalSearchObject> {
  searchResult: SearchResult<GlobalSearchObject>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchGloballyOperationResult;

  new (arg0: SearchResult<GlobalSearchObject>): SearchGloballyOperationResult;
}

export interface ContentCopyHistoryEntry extends HistoryEntry {
  externalCode: string;
  path: string;
  gitCommitHash: string;
  gitRepositoryId: string;
  externalDmsId: number;
  externalDmsCode: string;
  externalDmsLabel: string;
  externalDmsAddress: string;

  getPath(): string;

  getExternalCode(): string;

  setExternalCode(arg0: string): void;

  getGitCommitHash(): string;

  setGitCommitHash(arg0: string): void;

  getGitRepositoryId(): string;

  setGitRepositoryId(arg0: string): void;

  getExternalDmsId(): number;

  setExternalDmsId(arg0: number): void;

  getExternalDmsCode(): string;

  setExternalDmsCode(arg0: string): void;

  getExternalDmsLabel(): string;

  setExternalDmsLabel(arg0: string): void;

  getExternalDmsAddress(): string;

  setExternalDmsAddress(arg0: string): void;

  getSerialversionuid(): number;

  setPath(arg0: string): void;

  getFetchOptions(): HistoryEntryFetchOptions;

  setFetchOptions(arg0: HistoryEntryFetchOptions): void;

  getValidFrom(): Date;

  setValidFrom(arg0: Date): void;

  getValidTo(): Date;

  setValidTo(arg0: Date): void;

  getAuthor(): Person;

  setAuthor(arg0: Person): void;

  new (): ContentCopyHistoryEntry;
}

export interface HistoryEntry extends Serializable {
  fetchOptions: HistoryEntryFetchOptions;
  validFrom: Date;
  validTo: Date;
  author: Person;

  getFetchOptions(): HistoryEntryFetchOptions;

  setFetchOptions(arg0: HistoryEntryFetchOptions): void;

  getValidFrom(): Date;

  setValidFrom(arg0: Date): void;

  getValidTo(): Date;

  setValidTo(arg0: Date): void;

  getAuthor(): Person;

  setAuthor(arg0: Person): void;

  new (): HistoryEntry;
}

export interface IRelationType {}

export interface PropertyHistoryEntry extends HistoryEntry {
  propertyName: string;
  propertyValue: string;

  setPropertyValue(arg0: string): void;

  setPropertyName(arg0: string): void;

  getPropertyName(): string;

  getPropertyValue(): string;

  getFetchOptions(): HistoryEntryFetchOptions;

  setFetchOptions(arg0: HistoryEntryFetchOptions): void;

  getValidFrom(): Date;

  setValidFrom(arg0: Date): void;

  getValidTo(): Date;

  setValidTo(arg0: Date): void;

  getAuthor(): Person;

  setAuthor(arg0: Person): void;

  new (): PropertyHistoryEntry;
}

export interface RelationHistoryEntry extends HistoryEntry {
  relationType: IRelationType;
  relatedObjectId: IObjectId;

  getRelationType(): IRelationType;

  setRelationType(arg0: IRelationType): void;

  getRelatedObjectId(): IObjectId;

  setRelatedObjectId(arg0: IObjectId): void;

  getFetchOptions(): HistoryEntryFetchOptions;

  setFetchOptions(arg0: HistoryEntryFetchOptions): void;

  getValidFrom(): Date;

  setValidFrom(arg0: Date): void;

  getValidTo(): Date;

  setValidTo(arg0: Date): void;

  getAuthor(): Person;

  setAuthor(arg0: Person): void;

  new (): RelationHistoryEntry;
}

export interface HistoryEntryFetchOptions
  extends FetchOptions<HistoryEntry>,
    Serializable {
  author: PersonFetchOptions;
  sort: HistoryEntrySortOptions;
  sortBy: HistoryEntrySortOptions;

  getSortBy(): HistoryEntrySortOptions;

  getSortBy(): SortOptions<any>;

  withAuthor(): PersonFetchOptions;

  withAuthorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasAuthor(): boolean;

  sortBy(): SortOptions<any>;

  sortBy(): HistoryEntrySortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): HistoryEntryFetchOptions;
}

export interface HistoryEntrySortOptions extends SortOptions<HistoryEntry> {
  getSortings(): Sorting[];

  new (): HistoryEntrySortOptions;
}

export interface UnknownRelatedObjectId extends IObjectId {
  relatedObjectId: string;
  relationType: string;

  getRelationType(): string;

  getRelatedObjectId(): string;

  new (arg0: string, arg1: string): UnknownRelatedObjectId;

  new (): UnknownRelatedObjectId;
}

export interface Material
  extends Serializable,
    ICodeHolder,
    IEntityTypeHolder,
    IMaterialPropertiesHolder,
    IModificationDateHolder,
    IPermIdHolder,
    IPropertiesHolder,
    IRegistrationDateHolder,
    IRegistratorHolder,
    ITagsHolder {
  fetchOptions: MaterialFetchOptions;
  permId: MaterialPermId;
  type: MaterialType;
  history: HistoryEntry[];

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  getType(): MaterialType;

  getType(): IEntityType;

  getBooleanProperty(arg0: string): boolean;

  getFetchOptions(): MaterialFetchOptions;

  setFetchOptions(arg0: MaterialFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setPermId(arg0: MaterialPermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getMaterialProperties(): { [index: string]: Material };

  setMaterialProperties(arg0: { [index: string]: Material }): void;

  getMaterialProperty(arg0: string): Material;

  setMaterialProperty(arg0: string, arg1: Material): void;

  getPermId(): IObjectId;

  getPermId(): MaterialPermId;

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  setHistory(arg0: HistoryEntry[]): void;

  getHistory(): HistoryEntry[];

  getCode(): string;

  setCode(arg0: string): void;

  getTags(): Tag[];

  setTags(arg0: Tag[]): void;

  setType(arg0: MaterialType): void;

  new (): Material;
}

export interface MaterialType
  extends Serializable,
    ICodeHolder,
    IDescriptionHolder,
    IEntityType,
    IModificationDateHolder,
    IPermIdHolder,
    IPropertyAssignmentsHolder {
  fetchOptions: MaterialTypeFetchOptions;
  permId: EntityTypePermId;

  getFetchOptions(): MaterialTypeFetchOptions;

  setFetchOptions(arg0: MaterialTypeFetchOptions): void;

  setPermId(arg0: EntityTypePermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getPropertyAssignments(): PropertyAssignment[];

  getValidationPlugin(): Plugin;

  getPermId(): IObjectId;

  getPermId(): EntityTypePermId;

  setPropertyAssignments(arg0: PropertyAssignment[]): void;

  setValidationPlugin(arg0: Plugin): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): MaterialType;
}

export interface CreateMaterialTypesOperation
  extends CreateObjectsOperation<MaterialTypeCreation> {
  creations: MaterialTypeCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateMaterialTypesOperation;

  new (arg0: MaterialTypeCreation[]): CreateMaterialTypesOperation;

  new (arg0: MaterialTypeCreation[]): CreateMaterialTypesOperation;
}

export interface CreateMaterialTypesOperationResult
  extends CreateObjectsOperationResult<EntityTypePermId> {
  objectIds: EntityTypePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateMaterialTypesOperationResult;

  new (arg0: EntityTypePermId[]): CreateMaterialTypesOperationResult;
}

export interface CreateMaterialsOperation
  extends CreateObjectsOperation<MaterialCreation> {
  creations: MaterialCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateMaterialsOperation;

  new (arg0: MaterialCreation[]): CreateMaterialsOperation;

  new (arg0: MaterialCreation[]): CreateMaterialsOperation;
}

export interface CreateMaterialsOperationResult
  extends CreateObjectsOperationResult<MaterialPermId> {
  objectIds: MaterialPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateMaterialsOperationResult;

  new (arg0: MaterialPermId[]): CreateMaterialsOperationResult;
}

export interface MaterialCreation
  extends ICreation,
    IObjectCreation,
    ICreationIdHolder,
    IPropertiesHolder {
  code: string;
  typeId: IEntityTypeId;
  description: string;
  tagIds: ITagId[];

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  getBooleanProperty(arg0: string): boolean;

  getTypeId(): IEntityTypeId;

  setTypeId(arg0: IEntityTypeId): void;

  getCreationId(): CreationId;

  setCreationId(arg0: CreationId): void;

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  getTagIds(): ITagId[];

  setTagIds(arg0: ITagId[]): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): MaterialCreation;
}

export interface MaterialTypeCreation extends IEntityTypeCreation {
  getPropertyAssignments(): PropertyAssignmentCreation[];

  setPropertyAssignments(arg0: PropertyAssignmentCreation[]): void;

  getValidationPluginId(): IPluginId;

  setValidationPluginId(arg0: IPluginId): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): MaterialTypeCreation;
}

export interface DeleteMaterialTypesOperation
  extends DeleteObjectsOperation<IEntityTypeId, MaterialTypeDeletionOptions> {
  options: MaterialTypeDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteMaterialTypesOperation;

  new (
    arg0: IEntityTypeId[],
    arg1: MaterialTypeDeletionOptions,
  ): DeleteMaterialTypesOperation;
}

export interface DeleteMaterialTypesOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteMaterialTypesOperationResult;
}

export interface DeleteMaterialsOperation
  extends DeleteObjectsOperation<IMaterialId, MaterialDeletionOptions> {
  options: MaterialDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteMaterialsOperation;

  new (
    arg0: IMaterialId[],
    arg1: MaterialDeletionOptions,
  ): DeleteMaterialsOperation;
}

export interface DeleteMaterialsOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteMaterialsOperationResult;
}

export interface MaterialDeletionOptions
  extends AbstractObjectDeletionOptions<MaterialDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): MaterialDeletionOptions;
}

export interface MaterialTypeDeletionOptions
  extends AbstractObjectDeletionOptions<MaterialTypeDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): MaterialTypeDeletionOptions;
}

export interface MaterialFetchOptions
  extends FetchOptions<Material>,
    Serializable {
  type: MaterialTypeFetchOptions;
  history: HistoryEntryFetchOptions;
  registrator: PersonFetchOptions;
  properties: PropertyFetchOptions;
  materialProperties: MaterialFetchOptions;
  tags: TagFetchOptions;
  sort: MaterialSortOptions;
  sortBy: MaterialSortOptions;

  hasRegistrator(): boolean;

  getSortBy(): MaterialSortOptions;

  getSortBy(): SortOptions<any>;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasType(): boolean;

  hasProperties(): boolean;

  hasMaterialProperties(): boolean;

  hasTags(): boolean;

  hasHistory(): boolean;

  withTypeUsing(arg0: MaterialTypeFetchOptions): MaterialTypeFetchOptions;

  withPropertiesUsing(arg0: PropertyFetchOptions): PropertyFetchOptions;

  withMaterialProperties(): MaterialFetchOptions;

  withMaterialPropertiesUsing(arg0: MaterialFetchOptions): MaterialFetchOptions;

  withTags(): TagFetchOptions;

  withTagsUsing(arg0: TagFetchOptions): TagFetchOptions;

  withHistory(): HistoryEntryFetchOptions;

  withHistoryUsing(arg0: HistoryEntryFetchOptions): HistoryEntryFetchOptions;

  withProperties(): PropertyFetchOptions;

  withType(): MaterialTypeFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): MaterialSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): MaterialFetchOptions;
}

export interface MaterialSortOptions
  extends EntityWithPropertiesSortOptions<Material> {
  type(): SortOrder;

  getProperty(arg0: string): SortOrder;

  getType(): SortOrder;

  property(arg0: string): SortOrder;

  fetchedFieldsScore(): SortOrder;

  getFetchedFieldsScore(): SortOrder;

  stringMatchPropertyScore(arg0: string, arg1: string): SortOrder;

  stringPrefixMatchPropertyScore(arg0: string, arg1: string): SortOrder;

  stringMatchAnyPropertyScore(arg0: string): SortOrder;

  stringPrefixMatchAnyPropertyScore(arg0: string): SortOrder;

  code(): SortOrder;

  registrationDate(): SortOrder;

  getRegistrationDate(): SortOrder;

  permId(): SortOrder;

  modificationDate(): SortOrder;

  getModificationDate(): SortOrder;

  getPermId(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): MaterialSortOptions;
}

export interface MaterialTypeFetchOptions
  extends FetchOptions<MaterialType>,
    Serializable {
  propertyAssignments: PropertyAssignmentFetchOptions;
  validationPlugin: PluginFetchOptions;
  sort: MaterialTypeSortOptions;
  sortBy: MaterialTypeSortOptions;

  getSortBy(): MaterialTypeSortOptions;

  getSortBy(): SortOptions<any>;

  hasPropertyAssignments(): boolean;

  hasValidationPlugin(): boolean;

  withPropertyAssignments(): PropertyAssignmentFetchOptions;

  withPropertyAssignmentsUsing(
    arg0: PropertyAssignmentFetchOptions,
  ): PropertyAssignmentFetchOptions;

  withValidationPlugin(): PluginFetchOptions;

  withValidationPluginUsing(arg0: PluginFetchOptions): PluginFetchOptions;

  sortBy(): MaterialTypeSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): MaterialTypeFetchOptions;
}

export interface MaterialTypeSortOptions extends SortOptions<MaterialType> {
  getSortings(): Sorting[];

  new (): MaterialTypeSortOptions;
}

export interface GetMaterialTypesOperation
  extends GetObjectsOperation<IEntityTypeId, MaterialTypeFetchOptions> {
  fetchOptions: MaterialTypeFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetMaterialTypesOperation;

  new (
    arg0: IEntityTypeId[],
    arg1: MaterialTypeFetchOptions,
  ): GetMaterialTypesOperation;
}

export interface GetMaterialTypesOperationResult
  extends GetObjectsOperationResult<IEntityTypeId, MaterialType> {
  ids: IEntityTypeId[];
  objects: MaterialType[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetMaterialTypesOperationResult;

  new (arg0: {
    [index: string]: MaterialType;
  }): GetMaterialTypesOperationResult;
}

export interface GetMaterialsOperation
  extends GetObjectsOperation<IMaterialId, MaterialFetchOptions> {
  fetchOptions: MaterialFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetMaterialsOperation;

  new (arg0: IMaterialId[], arg1: MaterialFetchOptions): GetMaterialsOperation;
}

export interface GetMaterialsOperationResult
  extends GetObjectsOperationResult<IMaterialId, Material> {
  ids: IMaterialId[];
  objects: Material[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetMaterialsOperationResult;

  new (arg0: { [index: string]: Material }): GetMaterialsOperationResult;
}

export interface IMaterialId extends IObjectId {}

export interface MaterialPermId extends IMaterialId {
  code: string;
  typeCode: string;

  getTypeCode(): string;

  setTypeCode(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  new (): MaterialPermId;

  new (arg0: string, arg1: string): MaterialPermId;
}

export interface MaterialSearchCriteria
  extends AbstractEntitySearchCriteria<IMaterialId> {
  negate(): AbstractEntitySearchCriteria<any>;

  negate(): MaterialSearchCriteria;

  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): MaterialSearchCriteria;

  withAndOperator(): MaterialSearchCriteria;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withSubcriteria(): MaterialSearchCriteria;

  withTextAttribute(): TextAttributeSearchCriteria;

  withType(): MaterialTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (): MaterialSearchCriteria;
}

export interface MaterialTypeSearchCriteria
  extends AbstractEntityTypeSearchCriteria {
  withOrOperator(): MaterialTypeSearchCriteria;

  withAndOperator(): MaterialTypeSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withPropertyAssignments(): PropertyAssignmentSearchCriteria;

  withIds(): IdsSearchCriteria<IEntityTypeId>;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): MaterialTypeSearchCriteria;
}

export interface SearchMaterialTypesOperation
  extends SearchObjectsOperation<
    MaterialTypeSearchCriteria,
    MaterialTypeFetchOptions
  > {
  criteria: MaterialTypeSearchCriteria;
  fetchOptions: MaterialTypeFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchMaterialTypesOperation;

  new (
    arg0: MaterialTypeSearchCriteria,
    arg1: MaterialTypeFetchOptions,
  ): SearchMaterialTypesOperation;
}

export interface SearchMaterialTypesOperationResult
  extends SearchObjectsOperationResult<MaterialType> {
  searchResult: SearchResult<MaterialType>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchMaterialTypesOperationResult;

  new (arg0: SearchResult<MaterialType>): SearchMaterialTypesOperationResult;
}

export interface SearchMaterialsOperation
  extends SearchObjectsOperation<MaterialSearchCriteria, MaterialFetchOptions> {
  criteria: MaterialSearchCriteria;
  fetchOptions: MaterialFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchMaterialsOperation;

  new (
    arg0: MaterialSearchCriteria,
    arg1: MaterialFetchOptions,
  ): SearchMaterialsOperation;
}

export interface SearchMaterialsOperationResult
  extends SearchObjectsOperationResult<Material> {
  searchResult: SearchResult<Material>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchMaterialsOperationResult;

  new (arg0: SearchResult<Material>): SearchMaterialsOperationResult;
}

export interface MaterialTypeUpdate extends IEntityTypeUpdate {
  getTypeId(): IEntityTypeId;

  setTypeId(arg0: IEntityTypeId): void;

  getObjectId(): IObjectId;

  getObjectId(): IEntityTypeId;

  getPropertyAssignments(): PropertyAssignmentListUpdateValue;

  getValidationPluginId(): FieldUpdateValue<IPluginId>;

  setValidationPluginId(arg0: IPluginId): void;

  setPropertyAssignmentActions(arg0: ListUpdateAction<any>[]): void;

  setDescription(arg0: string): void;

  getDescription(): FieldUpdateValue<string>;

  new (): MaterialTypeUpdate;
}

export interface MaterialUpdate
  extends IUpdate,
    IObjectUpdate<IMaterialId>,
    IPropertiesHolder {
  materialId: IMaterialId;
  tagIds: IdListUpdateValue<ITagId>;

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  getBooleanProperty(arg0: string): boolean;

  getObjectId(): IObjectId;

  getObjectId(): IMaterialId;

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  getTagIds(): IdListUpdateValue<ITagId>;

  setTagActions(arg0: ListUpdateAction<ITagId>[]): void;

  setMaterialId(arg0: IMaterialId): void;

  getMaterialId(): IMaterialId;

  new (): MaterialUpdate;
}

export interface UpdateMaterialTypesOperation
  extends UpdateObjectsOperation<MaterialTypeUpdate> {
  updates: MaterialTypeUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateMaterialTypesOperation;

  new (arg0: MaterialTypeUpdate[]): UpdateMaterialTypesOperation;

  new (arg0: MaterialTypeUpdate[]): UpdateMaterialTypesOperation;
}

export interface UpdateMaterialTypesOperationResult
  extends UpdateObjectsOperationResult<EntityTypePermId> {
  objectIds: EntityTypePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateMaterialTypesOperationResult;

  new (arg0: EntityTypePermId[]): UpdateMaterialTypesOperationResult;
}

export interface UpdateMaterialsOperation
  extends UpdateObjectsOperation<MaterialUpdate> {
  updates: MaterialUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateMaterialsOperation;

  new (arg0: MaterialUpdate[]): UpdateMaterialsOperation;

  new (arg0: MaterialUpdate[]): UpdateMaterialsOperation;
}

export interface UpdateMaterialsOperationResult
  extends UpdateObjectsOperationResult<MaterialPermId> {
  objectIds: MaterialPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateMaterialsOperationResult;

  new (arg0: MaterialPermId[]): UpdateMaterialsOperationResult;
}

export interface ObjectKindModification extends Serializable {
  fetchOptions: ObjectKindModificationFetchOptions;
  objectKind: ObjectKind;
  operationKind: OperationKind;
  lastModificationTimeStamp: Date;

  getFetchOptions(): ObjectKindModificationFetchOptions;

  setFetchOptions(arg0: ObjectKindModificationFetchOptions): void;

  getObjectKind(): ObjectKind;

  setObjectKind(arg0: ObjectKind): void;

  getOperationKind(): OperationKind;

  setOperationKind(arg0: OperationKind): void;

  getLastModificationTimeStamp(): Date;

  setLastModificationTimeStamp(arg0: Date): void;

  new (): ObjectKindModification;
}

export interface ObjectKindModificationFetchOptions
  extends FetchOptions<ObjectKindModification>,
    Serializable {
  sort: ObjectKindModificationSortOptions;
  sortBy: ObjectKindModificationSortOptions;

  getSortBy(): ObjectKindModificationSortOptions;

  getSortBy(): SortOptions<any>;

  sortBy(): ObjectKindModificationSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): ObjectKindModificationFetchOptions;
}

export interface ObjectKindModificationSortOptions
  extends SortOptions<ObjectKindModification> {
  getSortings(): Sorting[];

  new (): ObjectKindModificationSortOptions;
}

export interface ObjectKindCriteria extends AbstractSearchCriteria {
  objectKinds: ObjectKind[];

  thatIn(arg0: ObjectKind[]): void;

  thatIn(arg0: ObjectKind[]): void;

  getObjectKinds(): ObjectKind[];

  isNegated(): boolean;

  new (): ObjectKindCriteria;
}

export interface ObjectKindModificationSearchCriteria
  extends AbstractCompositeSearchCriteria {
  withObjectKind(): ObjectKindCriteria;

  withOperationKind(): OperationKindCriteria;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): ObjectKindModificationSearchCriteria;
}

export interface OperationKindCriteria extends AbstractSearchCriteria {
  operationKinds: OperationKind[];

  thatIn(arg0: OperationKind[]): void;

  thatIn(arg0: OperationKind[]): void;

  getOperationKinds(): OperationKind[];

  isNegated(): boolean;

  new (): OperationKindCriteria;
}

export interface SearchObjectKindModificationsOperation
  extends SearchObjectsOperation<
    ObjectKindModificationSearchCriteria,
    ObjectKindModificationFetchOptions
  > {
  criteria: ObjectKindModificationSearchCriteria;
  fetchOptions: ObjectKindModificationFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchObjectKindModificationsOperation;

  new (
    arg0: ObjectKindModificationSearchCriteria,
    arg1: ObjectKindModificationFetchOptions,
  ): SearchObjectKindModificationsOperation;
}

export interface SearchObjectKindModificationsOperationResult
  extends SearchObjectsOperationResult<ObjectKindModification> {
  searchResult: SearchResult<ObjectKindModification>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchObjectKindModificationsOperationResult;

  new (
    arg0: SearchResult<ObjectKindModification>,
  ): SearchObjectKindModificationsOperationResult;
}

export interface AbstractOperationExecutionOptions
  extends IOperationExecutionOptions {
  setNotification(arg0: IOperationExecutionNotification): void;

  getNotification(): IOperationExecutionNotification;

  getAvailabilityTime(): number;

  setAvailabilityTime(arg0: number): void;

  getSummaryAvailabilityTime(): number;

  setSummaryAvailabilityTime(arg0: number): void;

  getDetailsAvailabilityTime(): number;

  setDetailsAvailabilityTime(arg0: number): void;

  isExecuteInOrder(): boolean;

  setExecuteInOrder(arg0: boolean): void;

  setDescription(arg0: string): void;

  getDescription(): string;

  new (): AbstractOperationExecutionOptions;
}

export interface AsynchronousOperationExecutionOptions
  extends AbstractOperationExecutionOptions {
  setNotification(arg0: IOperationExecutionNotification): void;

  getNotification(): IOperationExecutionNotification;

  getAvailabilityTime(): number;

  setAvailabilityTime(arg0: number): void;

  getSummaryAvailabilityTime(): number;

  setSummaryAvailabilityTime(arg0: number): void;

  getDetailsAvailabilityTime(): number;

  setDetailsAvailabilityTime(arg0: number): void;

  isExecuteInOrder(): boolean;

  setExecuteInOrder(arg0: boolean): void;

  setDescription(arg0: string): void;

  getDescription(): string;

  new (): AsynchronousOperationExecutionOptions;
}

export interface AsynchronousOperationExecutionResults
  extends IOperationExecutionResults {
  executionId: OperationExecutionPermId;

  getExecutionId(): OperationExecutionPermId;

  new (): AsynchronousOperationExecutionResults;

  new (arg0: OperationExecutionPermId): AsynchronousOperationExecutionResults;
}

export interface IOperationExecutionNotification extends Serializable {}

export interface IOperationExecutionOptions extends Serializable {
  notification: IOperationExecutionNotification;
  availabilityTime: number;
  summaryAvailabilityTime: number;
  detailsAvailabilityTime: number;
  executeInOrder: boolean;
  description: string;

  getNotification(): IOperationExecutionNotification;

  getAvailabilityTime(): number;

  getSummaryAvailabilityTime(): number;

  getDetailsAvailabilityTime(): number;

  isExecuteInOrder(): boolean;

  getDescription(): string;
}

export interface IOperationExecutionResults extends Serializable {}

export interface OperationExecution
  extends Serializable,
    ICodeHolder,
    IDescriptionHolder,
    IPermIdHolder {
  fetchOptions: OperationExecutionFetchOptions;
  permId: OperationExecutionPermId;
  state: OperationExecutionState;
  owner: Person;
  notification: IOperationExecutionNotification;
  availability: OperationExecutionAvailability;
  availabilityTime: number;
  summary: OperationExecutionSummary;
  summaryAvailability: OperationExecutionAvailability;
  summaryAvailabilityTime: number;
  details: OperationExecutionDetails;
  detailsAvailability: OperationExecutionAvailability;
  detailsAvailabilityTime: number;
  creationDate: Date;
  startDate: Date;
  finishDate: Date;

  getState(): OperationExecutionState;

  getOwner(): Person;

  setOwner(arg0: Person): void;

  setState(arg0: OperationExecutionState): void;

  getFetchOptions(): OperationExecutionFetchOptions;

  setFetchOptions(arg0: OperationExecutionFetchOptions): void;

  setPermId(arg0: OperationExecutionPermId): void;

  getPermId(): IObjectId;

  getPermId(): OperationExecutionPermId;

  setNotification(arg0: IOperationExecutionNotification): void;

  getNotification(): IOperationExecutionNotification;

  getAvailabilityTime(): number;

  setAvailabilityTime(arg0: number): void;

  getSummaryAvailabilityTime(): number;

  setSummaryAvailabilityTime(arg0: number): void;

  getDetailsAvailabilityTime(): number;

  setDetailsAvailabilityTime(arg0: number): void;

  getAvailability(): OperationExecutionAvailability;

  setAvailability(arg0: OperationExecutionAvailability): void;

  getSummaryAvailability(): OperationExecutionAvailability;

  setSummaryAvailability(arg0: OperationExecutionAvailability): void;

  setDetails(arg0: OperationExecutionDetails): void;

  getDetailsAvailability(): OperationExecutionAvailability;

  setDetailsAvailability(arg0: OperationExecutionAvailability): void;

  getCreationDate(): Date;

  setCreationDate(arg0: Date): void;

  getStartDate(): Date;

  setStartDate(arg0: Date): void;

  getFinishDate(): Date;

  setFinishDate(arg0: Date): void;

  setSummary(arg0: OperationExecutionSummary): void;

  getSummary(): OperationExecutionSummary;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  getDetails(): OperationExecutionDetails;

  new (): OperationExecution;
}

export interface OperationExecutionDetails extends Serializable {
  fetchOptions: OperationExecutionDetailsFetchOptions;
  operations: IOperation[];
  progress: IOperationExecutionProgress;
  error: IOperationExecutionError;
  results: IOperationResult[];

  setError(arg0: IOperationExecutionError): void;

  getFetchOptions(): OperationExecutionDetailsFetchOptions;

  setFetchOptions(arg0: OperationExecutionDetailsFetchOptions): void;

  getOperations(): IOperation[];

  setOperations(arg0: IOperation[]): void;

  setProgress(arg0: IOperationExecutionProgress): void;

  setResults(arg0: IOperationResult[]): void;

  getProgress(): IOperationExecutionProgress;

  getError(): IOperationExecutionError;

  getResults(): IOperationResult[];

  new (): OperationExecutionDetails;
}

export interface OperationExecutionEmailNotification
  extends IOperationExecutionNotification {
  emails: string[];

  getEmails(): string[];

  new (arg0: string[]): OperationExecutionEmailNotification;

  new (arg0: string[]): OperationExecutionEmailNotification;

  new (): OperationExecutionEmailNotification;
}

export interface OperationExecutionError extends IOperationExecutionError {
  getMessage(): string;

  new (arg0: $java$lang$Exception$): OperationExecutionError;

  new (arg0: string): OperationExecutionError;

  new (): OperationExecutionError;
}

export interface OperationExecutionProgress
  extends IOperationExecutionProgress {
  getMessage(): string;

  getTotalItemsToProcess(): number;

  getNumItemsProcessed(): number;

  new (): OperationExecutionProgress;

  new (arg0: string, arg1: number, arg2: number): OperationExecutionProgress;
}

export interface OperationExecutionSummary extends Serializable {
  fetchOptions: OperationExecutionSummaryFetchOptions;
  operations: string[];
  progress: string;
  error: string;
  results: string[];

  setError(arg0: string): void;

  getFetchOptions(): OperationExecutionSummaryFetchOptions;

  setFetchOptions(arg0: OperationExecutionSummaryFetchOptions): void;

  getOperations(): string[];

  setOperations(arg0: string[]): void;

  setProgress(arg0: string): void;

  setResults(arg0: string[]): void;

  getProgress(): string;

  getError(): string;

  getResults(): string[];

  new (): OperationExecutionSummary;
}

export interface SynchronousOperationExecutionOptions
  extends AbstractOperationExecutionOptions {
  executionId: OperationExecutionPermId;

  getExecutionId(): OperationExecutionPermId;

  setExecutionId(arg0: OperationExecutionPermId): void;

  setNotification(arg0: IOperationExecutionNotification): void;

  getNotification(): IOperationExecutionNotification;

  getAvailabilityTime(): number;

  setAvailabilityTime(arg0: number): void;

  getSummaryAvailabilityTime(): number;

  setSummaryAvailabilityTime(arg0: number): void;

  getDetailsAvailabilityTime(): number;

  setDetailsAvailabilityTime(arg0: number): void;

  isExecuteInOrder(): boolean;

  setExecuteInOrder(arg0: boolean): void;

  setDescription(arg0: string): void;

  getDescription(): string;

  new (): SynchronousOperationExecutionOptions;
}

export interface SynchronousOperationExecutionResults
  extends IOperationExecutionResults {
  results: IOperationResult[];

  getResults(): IOperationResult[];

  new (): SynchronousOperationExecutionResults;

  new (arg0: IOperationResult[]): SynchronousOperationExecutionResults;
}

export interface DeleteOperationExecutionsOperation
  extends DeleteObjectsOperation<
    IOperationExecutionId,
    OperationExecutionDeletionOptions
  > {
  options: OperationExecutionDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteOperationExecutionsOperation;

  new (
    arg0: IOperationExecutionId[],
    arg1: OperationExecutionDeletionOptions,
  ): DeleteOperationExecutionsOperation;
}

export interface DeleteOperationExecutionsOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteOperationExecutionsOperationResult;
}

export interface OperationExecutionDeletionOptions
  extends AbstractObjectDeletionOptions<OperationExecutionDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): OperationExecutionDeletionOptions;
}

export interface OperationExecutionDetailsFetchOptions
  extends FetchOptions<OperationExecutionDetails>,
    Serializable {
  operations: EmptyFetchOptions;
  progress: EmptyFetchOptions;
  error: EmptyFetchOptions;
  results: EmptyFetchOptions;
  sort: OperationExecutionDetailsSortOptions;
  sortBy: OperationExecutionDetailsSortOptions;

  getSortBy(): SortOptions<any>;

  getSortBy(): OperationExecutionDetailsSortOptions;

  hasOperations(): boolean;

  hasProgress(): boolean;

  hasResults(): boolean;

  withOperations(): EmptyFetchOptions;

  withOperationsUsing(arg0: EmptyFetchOptions): EmptyFetchOptions;

  withProgress(): EmptyFetchOptions;

  withProgressUsing(arg0: EmptyFetchOptions): EmptyFetchOptions;

  withError(): EmptyFetchOptions;

  withErrorUsing(arg0: EmptyFetchOptions): EmptyFetchOptions;

  withResults(): EmptyFetchOptions;

  withResultsUsing(arg0: EmptyFetchOptions): EmptyFetchOptions;

  hasError(): boolean;

  sortBy(): OperationExecutionDetailsSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): OperationExecutionDetailsFetchOptions;
}

export interface OperationExecutionDetailsSortOptions
  extends SortOptions<OperationExecutionDetails> {
  getSortings(): Sorting[];

  new (): OperationExecutionDetailsSortOptions;
}

export interface OperationExecutionFetchOptions
  extends FetchOptions<OperationExecution>,
    Serializable {
  owner: PersonFetchOptions;
  notification: OperationExecutionNotificationFetchOptions;
  summary: OperationExecutionSummaryFetchOptions;
  details: OperationExecutionDetailsFetchOptions;
  sort: OperationExecutionSortOptions;
  sortBy: OperationExecutionSortOptions;

  getSortBy(): SortOptions<any>;

  getSortBy(): OperationExecutionSortOptions;

  withOwner(): PersonFetchOptions;

  hasOwner(): boolean;

  hasNotification(): boolean;

  hasSummary(): boolean;

  hasDetails(): boolean;

  withOwnerUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  withNotification(): OperationExecutionNotificationFetchOptions;

  withNotificationUsing(
    arg0: OperationExecutionNotificationFetchOptions,
  ): OperationExecutionNotificationFetchOptions;

  withSummaryUsing(
    arg0: OperationExecutionSummaryFetchOptions,
  ): OperationExecutionSummaryFetchOptions;

  withDetails(): OperationExecutionDetailsFetchOptions;

  withDetailsUsing(
    arg0: OperationExecutionDetailsFetchOptions,
  ): OperationExecutionDetailsFetchOptions;

  withSummary(): OperationExecutionSummaryFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): OperationExecutionSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): OperationExecutionFetchOptions;
}

export interface OperationExecutionNotificationFetchOptions
  extends FetchOptions<IOperationExecutionNotification>,
    Serializable {
  sort: OperationExecutionNotificationSortOptions;
  sortBy: SortOptions<IOperationExecutionNotification>;

  getSortBy(): SortOptions<IOperationExecutionNotification>;

  sortBy(): SortOptions<IOperationExecutionNotification>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): OperationExecutionNotificationFetchOptions;
}

export interface OperationExecutionNotificationSortOptions
  extends SortOptions<IOperationExecutionNotification> {
  getSortings(): Sorting[];

  new (): OperationExecutionNotificationSortOptions;
}

export interface OperationExecutionSortOptions
  extends SortOptions<OperationExecution> {
  getSortings(): Sorting[];

  new (): OperationExecutionSortOptions;
}

export interface OperationExecutionSummaryFetchOptions
  extends FetchOptions<OperationExecutionSummary>,
    Serializable {
  operations: EmptyFetchOptions;
  progress: EmptyFetchOptions;
  error: EmptyFetchOptions;
  results: EmptyFetchOptions;
  sort: OperationExecutionSummarySortOptions;
  sortBy: OperationExecutionSummarySortOptions;

  getSortBy(): SortOptions<any>;

  getSortBy(): OperationExecutionSummarySortOptions;

  hasOperations(): boolean;

  hasProgress(): boolean;

  hasResults(): boolean;

  withOperations(): EmptyFetchOptions;

  withOperationsUsing(arg0: EmptyFetchOptions): EmptyFetchOptions;

  withProgress(): EmptyFetchOptions;

  withProgressUsing(arg0: EmptyFetchOptions): EmptyFetchOptions;

  withError(): EmptyFetchOptions;

  withErrorUsing(arg0: EmptyFetchOptions): EmptyFetchOptions;

  withResults(): EmptyFetchOptions;

  withResultsUsing(arg0: EmptyFetchOptions): EmptyFetchOptions;

  hasError(): boolean;

  sortBy(): OperationExecutionSummarySortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): OperationExecutionSummaryFetchOptions;
}

export interface OperationExecutionSummarySortOptions
  extends SortOptions<OperationExecutionSummary> {
  getSortings(): Sorting[];

  new (): OperationExecutionSummarySortOptions;
}

export interface GetOperationExecutionsOperation
  extends GetObjectsOperation<
    IOperationExecutionId,
    OperationExecutionFetchOptions
  > {
  fetchOptions: OperationExecutionFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetOperationExecutionsOperation;

  new (
    arg0: IOperationExecutionId[],
    arg1: OperationExecutionFetchOptions,
  ): GetOperationExecutionsOperation;
}

export interface GetOperationExecutionsOperationResult
  extends GetObjectsOperationResult<IOperationExecutionId, OperationExecution> {
  ids: IOperationExecutionId[];
  objects: OperationExecution[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetOperationExecutionsOperationResult;

  new (arg0: {
    [index: string]: OperationExecution;
  }): GetOperationExecutionsOperationResult;
}

export interface IOperationExecutionId extends IObjectId {}

export interface OperationExecutionPermId
  extends ObjectPermId,
    IOperationExecutionId {
  getPermId(): string;

  new (): OperationExecutionPermId;

  new (arg0: string): OperationExecutionPermId;
}

export interface OperationExecutionSearchCriteria
  extends AbstractCompositeSearchCriteria {
  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): OperationExecutionSearchCriteria;
}

export interface SearchOperationExecutionsOperation
  extends SearchObjectsOperation<
    OperationExecutionSearchCriteria,
    OperationExecutionFetchOptions
  > {
  criteria: OperationExecutionSearchCriteria;
  fetchOptions: OperationExecutionFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchOperationExecutionsOperation;

  new (
    arg0: OperationExecutionSearchCriteria,
    arg1: OperationExecutionFetchOptions,
  ): SearchOperationExecutionsOperation;
}

export interface SearchOperationExecutionsOperationResult
  extends SearchObjectsOperationResult<OperationExecution> {
  searchResult: SearchResult<OperationExecution>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchOperationExecutionsOperationResult;

  new (
    arg0: SearchResult<OperationExecution>,
  ): SearchOperationExecutionsOperationResult;
}

export interface OperationExecutionUpdate
  extends IUpdate,
    IObjectUpdate<IOperationExecutionId> {
  executionId: IOperationExecutionId;
  description: FieldUpdateValue<string>;
  deleteSummaryRequested: boolean;
  deleteDetailsRequested: boolean;

  getObjectId(): IObjectId;

  getObjectId(): IOperationExecutionId;

  getExecutionId(): IOperationExecutionId;

  setExecutionId(arg0: IOperationExecutionId): void;

  deleteSummary(): void;

  isDeleteSummary(): boolean;

  deleteDetails(): void;

  isDeleteDetails(): boolean;

  setDescription(arg0: string): void;

  getDescription(): FieldUpdateValue<string>;

  new (): OperationExecutionUpdate;
}

export interface UpdateOperationExecutionsOperation
  extends UpdateObjectsOperation<OperationExecutionUpdate> {
  updates: OperationExecutionUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateOperationExecutionsOperation;

  new (arg0: OperationExecutionUpdate[]): UpdateOperationExecutionsOperation;

  new (arg0: OperationExecutionUpdate[]): UpdateOperationExecutionsOperation;
}

export interface UpdateOperationExecutionsOperationResult
  extends UpdateObjectsOperationResult<OperationExecutionPermId> {
  objectIds: OperationExecutionPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateOperationExecutionsOperationResult;

  new (
    arg0: OperationExecutionPermId[],
  ): UpdateOperationExecutionsOperationResult;
}

export interface PersonalAccessToken
  extends Serializable,
    IModificationDateHolder,
    IModifierHolder,
    IOwnerHolder,
    IPermIdHolder,
    IRegistrationDateHolder,
    IRegistratorHolder {
  fetchOptions: PersonalAccessTokenFetchOptions;
  permId: PersonalAccessTokenPermId;
  hash: string;
  sessionName: string;
  validFromDate: Date;
  validToDate: Date;
  accessDate: Date;

  getOwner(): Person;

  setOwner(arg0: Person): void;

  getFetchOptions(): PersonalAccessTokenFetchOptions;

  setFetchOptions(arg0: PersonalAccessTokenFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setPermId(arg0: PersonalAccessTokenPermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getValidToDate(): Date;

  getPermId(): IObjectId;

  getPermId(): PersonalAccessTokenPermId;

  setSessionName(arg0: string): void;

  setValidFromDate(arg0: Date): void;

  setValidToDate(arg0: Date): void;

  getModifier(): Person;

  setModifier(arg0: Person): void;

  getAccessDate(): Date;

  setAccessDate(arg0: Date): void;

  setHash(arg0: string): void;

  getSessionName(): string;

  getValidFromDate(): Date;

  getHash(): string;

  new (): PersonalAccessToken;
}

export interface CreatePersonalAccessTokensOperation
  extends CreateObjectsOperation<PersonalAccessTokenCreation> {
  creations: PersonalAccessTokenCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreatePersonalAccessTokensOperation;

  new (
    arg0: PersonalAccessTokenCreation[],
  ): CreatePersonalAccessTokensOperation;

  new (
    arg0: PersonalAccessTokenCreation[],
  ): CreatePersonalAccessTokensOperation;
}

export interface CreatePersonalAccessTokensOperationResult
  extends CreateObjectsOperationResult<PersonalAccessTokenPermId> {
  objectIds: PersonalAccessTokenPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreatePersonalAccessTokensOperationResult;

  new (
    arg0: PersonalAccessTokenPermId[],
  ): CreatePersonalAccessTokensOperationResult;
}

export interface PersonalAccessTokenCreation
  extends ICreation,
    IObjectCreation {
  ownerId: IPersonId;
  sessionName: string;
  validFromDate: Date;
  validToDate: Date;

  getValidToDate(): Date;

  setSessionName(arg0: string): void;

  setValidFromDate(arg0: Date): void;

  setValidToDate(arg0: Date): void;

  getSessionName(): string;

  getValidFromDate(): Date;

  setOwnerId(arg0: IPersonId): void;

  getOwnerId(): IPersonId;

  new (): PersonalAccessTokenCreation;
}

export interface DeletePersonalAccessTokensOperation
  extends DeleteObjectsOperation<
    IPersonalAccessTokenId,
    PersonalAccessTokenDeletionOptions
  > {
  options: PersonalAccessTokenDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeletePersonalAccessTokensOperation;

  new (
    arg0: IPersonalAccessTokenId[],
    arg1: PersonalAccessTokenDeletionOptions,
  ): DeletePersonalAccessTokensOperation;
}

export interface DeletePersonalAccessTokensOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeletePersonalAccessTokensOperationResult;
}

export interface PersonalAccessTokenDeletionOptions
  extends AbstractObjectDeletionOptions<PersonalAccessTokenDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): PersonalAccessTokenDeletionOptions;
}

export interface PersonalAccessTokenFetchOptions
  extends FetchOptions<PersonalAccessToken>,
    Serializable {
  owner: PersonFetchOptions;
  registrator: PersonFetchOptions;
  modifier: PersonFetchOptions;
  sort: PersonalAccessTokenSortOptions;
  sortBy: PersonalAccessTokenSortOptions;

  withModifier(): PersonFetchOptions;

  hasRegistrator(): boolean;

  getSortBy(): SortOptions<any>;

  getSortBy(): PersonalAccessTokenSortOptions;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  withOwner(): PersonFetchOptions;

  hasModifier(): boolean;

  withModifierUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasOwner(): boolean;

  withOwnerUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  sortBy(): PersonalAccessTokenSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): PersonalAccessTokenFetchOptions;
}

export interface PersonalAccessTokenSortOptions
  extends SortOptions<PersonalAccessToken> {
  getSortings(): Sorting[];

  new (): PersonalAccessTokenSortOptions;
}

export interface GetPersonalAccessTokensOperation
  extends GetObjectsOperation<
    IPersonalAccessTokenId,
    PersonalAccessTokenFetchOptions
  > {
  fetchOptions: PersonalAccessTokenFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetPersonalAccessTokensOperation;

  new (
    arg0: IPersonalAccessTokenId[],
    arg1: PersonalAccessTokenFetchOptions,
  ): GetPersonalAccessTokensOperation;
}

export interface GetPersonalAccessTokensOperationResult
  extends GetObjectsOperationResult<
    IPersonalAccessTokenId,
    PersonalAccessToken
  > {
  ids: IPersonalAccessTokenId[];
  objects: PersonalAccessToken[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetPersonalAccessTokensOperationResult;

  new (arg0: {
    [index: string]: PersonalAccessToken;
  }): GetPersonalAccessTokensOperationResult;
}

export interface IPersonalAccessTokenId extends IObjectId {}

export interface PersonalAccessTokenPermId
  extends ObjectPermId,
    IPersonalAccessTokenId {
  getPermId(): string;

  new (arg0: string): PersonalAccessTokenPermId;

  new (): PersonalAccessTokenPermId;
}

export interface PersonalAccessTokenOwnerSearchCriteria
  extends PersonSearchCriteria {
  withOrOperator(): PersonSearchCriteria;

  withAndOperator(): PersonSearchCriteria;

  withUserId(): UserIdSearchCriteria;

  withUserIds(): UserIdsSearchCriteria;

  withFirstName(): FirstNameSearchCriteria;

  withLastName(): LastNameSearchCriteria;

  withEmail(): EmailSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): PersonalAccessTokenOwnerSearchCriteria;
}

export interface PersonalAccessTokenSearchCriteria
  extends AbstractObjectSearchCriteria<IPersonalAccessTokenId> {
  withOrOperator(): PersonalAccessTokenSearchCriteria;

  withAndOperator(): PersonalAccessTokenSearchCriteria;

  withSessionName(): PersonalAccessTokenSessionNameSearchCriteria;

  withOwner(): PersonalAccessTokenOwnerSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): PersonalAccessTokenSearchCriteria;
}

export interface PersonalAccessTokenSessionNameSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): PersonalAccessTokenSessionNameSearchCriteria;
}

export interface SearchPersonalAccessTokensOperation
  extends SearchObjectsOperation<
    PersonalAccessTokenSearchCriteria,
    PersonalAccessTokenFetchOptions
  > {
  criteria: PersonalAccessTokenSearchCriteria;
  fetchOptions: PersonalAccessTokenFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchPersonalAccessTokensOperation;

  new (
    arg0: PersonalAccessTokenSearchCriteria,
    arg1: PersonalAccessTokenFetchOptions,
  ): SearchPersonalAccessTokensOperation;
}

export interface SearchPersonalAccessTokensOperationResult
  extends SearchObjectsOperationResult<PersonalAccessToken> {
  searchResult: SearchResult<PersonalAccessToken>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchPersonalAccessTokensOperationResult;

  new (
    arg0: SearchResult<PersonalAccessToken>,
  ): SearchPersonalAccessTokensOperationResult;
}

export interface PersonalAccessTokenUpdate
  extends IUpdate,
    IObjectUpdate<IPersonalAccessTokenId> {
  personalAccessTokenId: IPersonalAccessTokenId;
  accessDate: FieldUpdateValue<Date>;

  getObjectId(): IObjectId;

  getObjectId(): IPersonalAccessTokenId;

  getAccessDate(): FieldUpdateValue<Date>;

  setAccessDate(arg0: Date): void;

  setPersonalAccessTokenId(arg0: IPersonalAccessTokenId): void;

  getPersonalAccessTokenId(): IPersonalAccessTokenId;

  new (): PersonalAccessTokenUpdate;
}

export interface UpdatePersonalAccessTokensOperation
  extends UpdateObjectsOperation<PersonalAccessTokenUpdate> {
  updates: PersonalAccessTokenUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdatePersonalAccessTokensOperation;

  new (arg0: PersonalAccessTokenUpdate[]): UpdatePersonalAccessTokensOperation;

  new (arg0: PersonalAccessTokenUpdate[]): UpdatePersonalAccessTokensOperation;
}

export interface UpdatePersonalAccessTokensOperationResult
  extends UpdateObjectsOperationResult<PersonalAccessTokenPermId> {
  objectIds: PersonalAccessTokenPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdatePersonalAccessTokensOperationResult;

  new (
    arg0: PersonalAccessTokenPermId[],
  ): UpdatePersonalAccessTokensOperationResult;
}

export interface Person
  extends Serializable,
    IPermIdHolder,
    IRegistrationDateHolder,
    IRegistratorHolder,
    ISpaceHolder {
  fetchOptions: PersonFetchOptions;
  permId: PersonPermId;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  roleAssignments: RoleAssignment[];
  webAppSettings: { [index: string]: WebAppSettings };

  isActive(): boolean;

  getSpace(): Space;

  getFetchOptions(): PersonFetchOptions;

  setFetchOptions(arg0: PersonFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setPermId(arg0: PersonPermId): void;

  setRoleAssignments(arg0: RoleAssignment[]): void;

  getRoleAssignments(): RoleAssignment[];

  getPermId(): PersonPermId;

  getPermId(): IObjectId;

  getWebAppSettings(): { [index: string]: WebAppSettings };

  getWebAppSettings(arg0: string): WebAppSettings;

  getFirstName(): string;

  setFirstName(arg0: string): void;

  setLastName(arg0: string): void;

  getEmail(): string;

  setEmail(arg0: string): void;

  setSpace(arg0: Space): void;

  setWebAppSettings(arg0: { [index: string]: WebAppSettings }): void;

  getUserId(): string;

  getLastName(): string;

  setUserId(arg0: string): void;

  setActive(arg0: boolean): void;

  new (): Person;
}

export interface CreatePersonsOperation
  extends CreateObjectsOperation<PersonCreation> {
  creations: PersonCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreatePersonsOperation;

  new (arg0: PersonCreation[]): CreatePersonsOperation;

  new (arg0: PersonCreation[]): CreatePersonsOperation;
}

export interface CreatePersonsOperationResult
  extends CreateObjectsOperationResult<PersonPermId> {
  objectIds: PersonPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreatePersonsOperationResult;

  new (arg0: PersonPermId[]): CreatePersonsOperationResult;
}

export interface PersonCreation extends ICreation, IObjectCreation {
  userId: string;
  spaceId: ISpaceId;

  getSpaceId(): ISpaceId;

  setSpaceId(arg0: ISpaceId): void;

  getUserId(): string;

  setUserId(arg0: string): void;

  new (): PersonCreation;
}

export interface DeletePersonsOperation
  extends DeleteObjectsOperation<IPersonId, PersonDeletionOptions> {
  options: PersonDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeletePersonsOperation;

  new (arg0: IPersonId[], arg1: PersonDeletionOptions): DeletePersonsOperation;
}

export interface DeletePersonsOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeletePersonsOperationResult;
}

export interface PersonDeletionOptions
  extends AbstractObjectDeletionOptions<PersonDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): PersonDeletionOptions;
}

export interface PersonFetchOptions extends FetchOptions<Person>, Serializable {
  space: SpaceFetchOptions;
  registrator: PersonFetchOptions;
  roleAssignments: RoleAssignmentFetchOptions;
  webAppSettings: { [index: string]: WebAppSettingsFetchOptions };
  allWebAppSettings: boolean;
  sort: PersonSortOptions;

  hasRegistrator(): boolean;

  getSortBy(): SortOptions<any>;

  getSortBy(): PersonSortOptions;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasRoleAssignments(): boolean;

  withRoleAssignments(): RoleAssignmentFetchOptions;

  withRoleAssignmentsUsing(
    arg0: RoleAssignmentFetchOptions,
  ): RoleAssignmentFetchOptions;

  hasSpace(): boolean;

  hasAllWebAppSettings(): boolean;

  hasWebAppSettings(arg0: string): boolean;

  getWebAppSettings(): { [index: string]: WebAppSettingsFetchOptions };

  withSpace(): SpaceFetchOptions;

  withSpaceUsing(arg0: SpaceFetchOptions): SpaceFetchOptions;

  withWebAppSettings(arg0: string): WebAppSettingsFetchOptions;

  withWebAppSettingsUsing(arg0: {
    [index: string]: WebAppSettingsFetchOptions;
  }): { [index: string]: WebAppSettingsFetchOptions };

  withAllWebAppSettings(): void;

  withAllWebAppSettingsUsing(arg0: boolean): boolean;

  sortBy(): SortOptions<any>;

  sortBy(): PersonSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): PersonFetchOptions;
}

export interface PersonFetchOptionsAllWebAppSettingsHandler
  extends IFetchPropertyHandler {
  areMatching(arg0: any, arg1: any, arg2: IFetchOptionsMatcher): boolean;

  new (): PersonFetchOptionsAllWebAppSettingsHandler;
}

export interface PersonFetchOptionsWebAppSettingsHandler
  extends IFetchPropertyHandler {
  areMatching(arg0: any, arg1: any, arg2: IFetchOptionsMatcher): boolean;

  new (): PersonFetchOptionsWebAppSettingsHandler;
}

export interface PersonSortOptions extends SortOptions<Person> {
  getSortings(): Sorting[];

  new (): PersonSortOptions;
}

export interface GetPersonsOperation
  extends GetObjectsOperation<IPersonId, PersonFetchOptions> {
  fetchOptions: PersonFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetPersonsOperation;

  new (arg0: IPersonId[], arg1: PersonFetchOptions): GetPersonsOperation;
}

export interface GetPersonsOperationResult
  extends GetObjectsOperationResult<IPersonId, Person> {
  ids: IPersonId[];
  objects: Person[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetPersonsOperationResult;

  new (arg0: { [index: string]: Person }): GetPersonsOperationResult;
}

export interface IPersonId extends IObjectId {}

export interface Me extends ObjectPermId, IPersonId {
  getPermId(): string;

  new (): Me;
}

export interface PersonPermId extends ObjectPermId, IPersonId {
  getPermId(): string;

  new (arg0: string): PersonPermId;

  new (): PersonPermId;
}

export interface EmailSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EmailSearchCriteria;
}

export interface FirstNameSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): FirstNameSearchCriteria;
}

export interface LastNameSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): LastNameSearchCriteria;
}

export interface ModifierSearchCriteria extends PersonSearchCriteria {
  withOrOperator(): PersonSearchCriteria;

  withAndOperator(): PersonSearchCriteria;

  withUserId(): UserIdSearchCriteria;

  withUserIds(): UserIdsSearchCriteria;

  withFirstName(): FirstNameSearchCriteria;

  withLastName(): LastNameSearchCriteria;

  withEmail(): EmailSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): ModifierSearchCriteria;
}

export interface PersonSearchCriteria
  extends AbstractObjectSearchCriteria<IPersonId> {
  withOrOperator(): PersonSearchCriteria;

  withAndOperator(): PersonSearchCriteria;

  withUserId(): UserIdSearchCriteria;

  withUserIds(): UserIdsSearchCriteria;

  withFirstName(): FirstNameSearchCriteria;

  withLastName(): LastNameSearchCriteria;

  withEmail(): EmailSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): PersonSearchCriteria;
}

export interface RegistratorSearchCriteria extends PersonSearchCriteria {
  withOrOperator(): PersonSearchCriteria;

  withAndOperator(): PersonSearchCriteria;

  withUserId(): UserIdSearchCriteria;

  withUserIds(): UserIdsSearchCriteria;

  withFirstName(): FirstNameSearchCriteria;

  withLastName(): LastNameSearchCriteria;

  withEmail(): EmailSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): RegistratorSearchCriteria;
}

export interface SearchPersonsOperation
  extends SearchObjectsOperation<PersonSearchCriteria, PersonFetchOptions> {
  criteria: PersonSearchCriteria;
  fetchOptions: PersonFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchPersonsOperation;

  new (
    arg0: PersonSearchCriteria,
    arg1: PersonFetchOptions,
  ): SearchPersonsOperation;
}

export interface SearchPersonsOperationResult
  extends SearchObjectsOperationResult<Person> {
  searchResult: SearchResult<Person>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchPersonsOperationResult;

  new (arg0: SearchResult<Person>): SearchPersonsOperationResult;
}

export interface UserIdSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): UserIdSearchCriteria;
}

export interface UserIdsSearchCriteria
  extends CollectionFieldSearchCriteria<string> {
  fieldValue: string[];

  thatIn(arg0: T[]): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): UserIdsSearchCriteria;
}

export interface PersonUpdate extends IUpdate, IObjectUpdate<IPersonId> {
  userId: IPersonId;
  spaceId: FieldUpdateValue<ISpaceId>;
  active: FieldUpdateValue<boolean>;
  webAppSettings: { [index: string]: WebAppSettingsUpdateValue };

  isActive(): FieldUpdateValue<boolean>;

  getObjectId(): IObjectId;

  getObjectId(): IPersonId;

  getWebAppSettings(): { [index: string]: WebAppSettingsUpdateValue };

  getWebAppSettings(arg0: string): WebAppSettingsUpdateValue;

  getSpaceId(): FieldUpdateValue<ISpaceId>;

  setSpaceId(arg0: ISpaceId): void;

  deactivate(): void;

  getUserId(): IPersonId;

  setUserId(arg0: IPersonId): void;

  activate(): void;

  new (): PersonUpdate;
}

export interface UpdatePersonsOperation
  extends UpdateObjectsOperation<PersonUpdate> {
  updates: PersonUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdatePersonsOperation;

  new (arg0: PersonUpdate[]): UpdatePersonsOperation;

  new (arg0: PersonUpdate[]): UpdatePersonsOperation;
}

export interface UpdatePersonsOperationResult
  extends UpdateObjectsOperationResult<PersonPermId> {
  objectIds: PersonPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdatePersonsOperationResult;

  new (arg0: PersonPermId[]): UpdatePersonsOperationResult;
}

export interface Plugin
  extends Serializable,
    IDescriptionHolder,
    IPermIdHolder,
    IRegistrationDateHolder,
    IRegistratorHolder {
  fetchOptions: PluginFetchOptions;
  name: string;
  permId: PluginPermId;
  pluginKind: PluginKind;
  entityKinds: EntityKind[];
  pluginType: PluginType;
  script: string;
  available: boolean;

  getName(): string;

  setName(arg0: string): void;

  getScript(): string;

  setScript(arg0: string): void;

  getFetchOptions(): PluginFetchOptions;

  setFetchOptions(arg0: PluginFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setPermId(arg0: PluginPermId): void;

  getPermId(): IObjectId;

  getPermId(): PluginPermId;

  getPluginKind(): PluginKind;

  setPluginKind(arg0: PluginKind): void;

  getEntityKinds(): EntityKind[];

  setEntityKinds(arg0: EntityKind[]): void;

  getPluginType(): PluginType;

  setPluginType(arg0: PluginType): void;

  setDescription(arg0: string): void;

  setAvailable(arg0: boolean): void;

  isAvailable(): boolean;

  getDescription(): string;

  new (): Plugin;
}

export interface CreatePluginsOperation
  extends CreateObjectsOperation<PluginCreation> {
  creations: PluginCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreatePluginsOperation;

  new (arg0: PluginCreation[]): CreatePluginsOperation;

  new (arg0: PluginCreation[]): CreatePluginsOperation;
}

export interface CreatePluginsOperationResult
  extends CreateObjectsOperationResult<PluginPermId> {
  objectIds: PluginPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreatePluginsOperationResult;

  new (arg0: PluginPermId[]): CreatePluginsOperationResult;
}

export interface PluginCreation extends ICreation, IObjectCreation {
  name: string;
  description: string;
  entityKind: EntityKind;
  pluginType: PluginType;
  script: string;
  available: boolean;

  getName(): string;

  setName(arg0: string): void;

  getScript(): string;

  setScript(arg0: string): void;

  getEntityKind(): EntityKind;

  setEntityKind(arg0: EntityKind): void;

  getPluginType(): PluginType;

  setPluginType(arg0: PluginType): void;

  setDescription(arg0: string): void;

  setAvailable(arg0: boolean): void;

  isAvailable(): boolean;

  getDescription(): string;

  new (): PluginCreation;
}

export interface DeletePluginsOperation
  extends DeleteObjectsOperation<IPluginId, PluginDeletionOptions> {
  options: PluginDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeletePluginsOperation;

  new (arg0: IPluginId[], arg1: PluginDeletionOptions): DeletePluginsOperation;
}

export interface DeletePluginsOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeletePluginsOperationResult;
}

export interface PluginDeletionOptions
  extends AbstractObjectDeletionOptions<PluginDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): PluginDeletionOptions;
}

export interface DynamicPropertyPluginEvaluationOptions
  extends PluginEvaluationOptions {
  objectId: IObjectId;

  getObjectId(): IObjectId;

  setObjectId(arg0: IObjectId): void;

  setPluginId(arg0: IPluginId): void;

  getPluginScript(): string;

  setPluginScript(arg0: string): void;

  getPluginId(): IPluginId;

  new (): DynamicPropertyPluginEvaluationOptions;
}

export interface DynamicPropertyPluginEvaluationResult
  extends PluginEvaluationResult {
  value: string;

  getValue(): string;

  new (): DynamicPropertyPluginEvaluationResult;

  new (arg0: string): DynamicPropertyPluginEvaluationResult;
}

export interface EntityValidationPluginEvaluationOptions
  extends PluginEvaluationOptions {
  objectId: IObjectId;
  isNew: boolean;

  getObjectId(): IObjectId;

  setObjectId(arg0: IObjectId): void;

  isNew(): boolean;

  setNew(arg0: boolean): void;

  setPluginId(arg0: IPluginId): void;

  getPluginScript(): string;

  setPluginScript(arg0: string): void;

  getPluginId(): IPluginId;

  new (): EntityValidationPluginEvaluationOptions;
}

export interface EntityValidationPluginEvaluationResult
  extends PluginEvaluationResult {
  error: string;
  requestedValidations: IObjectId[];

  getRequestedValidations(): IObjectId[];

  getError(): string;

  new (): EntityValidationPluginEvaluationResult;

  new (arg0: string, arg1: IObjectId[]): EntityValidationPluginEvaluationResult;
}

export interface EvaluatePluginOperation extends IOperation {
  options: PluginEvaluationOptions;

  getMessage(): string;

  getOptions(): PluginEvaluationOptions;

  new (): EvaluatePluginOperation;

  new (arg0: PluginEvaluationOptions): EvaluatePluginOperation;
}

export interface EvaluatePluginOperationResult extends IOperationResult {
  result: PluginEvaluationResult;

  getMessage(): string;

  getResult(): PluginEvaluationResult;

  new (): EvaluatePluginOperationResult;

  new (arg0: PluginEvaluationResult): EvaluatePluginOperationResult;
}

export interface PluginEvaluationOptions extends Serializable {
  pluginId: IPluginId;
  pluginScript: string;

  setPluginId(arg0: IPluginId): void;

  getPluginScript(): string;

  setPluginScript(arg0: string): void;

  getPluginId(): IPluginId;

  new (): PluginEvaluationOptions;
}

export interface PluginEvaluationResult extends Serializable {
  new (): PluginEvaluationResult;
}

export interface PluginFetchOptions extends FetchOptions<Plugin>, Serializable {
  registrator: PersonFetchOptions;
  sort: PluginSortOptions;
  script: EmptyFetchOptions;
  sortBy: PluginSortOptions;

  hasRegistrator(): boolean;

  getSortBy(): PluginSortOptions;

  getSortBy(): SortOptions<any>;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasScript(): boolean;

  withScript(): EmptyFetchOptions;

  withScriptUsing(arg0: EmptyFetchOptions): EmptyFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): PluginSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): PluginFetchOptions;
}

export interface PluginSortOptions extends SortOptions<Plugin> {
  name: SortOrder;

  getName(): SortOrder;

  name(): SortOrder;

  getSortings(): Sorting[];

  new (): PluginSortOptions;
}

export interface GetPluginsOperation
  extends GetObjectsOperation<IPluginId, PluginFetchOptions> {
  fetchOptions: PluginFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetPluginsOperation;

  new (arg0: IPluginId[], arg1: PluginFetchOptions): GetPluginsOperation;
}

export interface GetPluginsOperationResult
  extends GetObjectsOperationResult<IPluginId, Plugin> {
  ids: IPluginId[];
  objects: Plugin[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetPluginsOperationResult;

  new (arg0: { [index: string]: Plugin }): GetPluginsOperationResult;
}

export interface IPluginId extends IObjectId {}

export interface PluginPermId extends ObjectPermId, IPluginId {
  getPermId(): string;

  new (arg0: string): PluginPermId;

  new (): PluginPermId;
}

export interface PluginKindSearchCriteria
  extends EnumFieldSearchCriteria<PluginKind> {
  fieldValue: PluginKind;

  thatEquals(arg0: T): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): PluginKindSearchCriteria;
}

export interface PluginSearchCriteria
  extends AbstractObjectSearchCriteria<IPluginId> {
  withOrOperator(): PluginSearchCriteria;

  withAndOperator(): PluginSearchCriteria;

  withIds(): IdsSearchCriteria<IPluginId>;

  withPluginType(): PluginTypeSearchCriteria;

  withPluginKind(): PluginKindSearchCriteria;

  withName(): NameSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): PluginSearchCriteria;
}

export interface PluginTypeSearchCriteria
  extends EnumFieldSearchCriteria<PluginType> {
  fieldValue: PluginType;

  thatEquals(arg0: T): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): PluginTypeSearchCriteria;
}

export interface SearchPluginsOperation
  extends SearchObjectsOperation<PluginSearchCriteria, PluginFetchOptions> {
  criteria: PluginSearchCriteria;
  fetchOptions: PluginFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchPluginsOperation;

  new (
    arg0: PluginSearchCriteria,
    arg1: PluginFetchOptions,
  ): SearchPluginsOperation;
}

export interface SearchPluginsOperationResult
  extends SearchObjectsOperationResult<Plugin> {
  searchResult: SearchResult<Plugin>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchPluginsOperationResult;

  new (arg0: SearchResult<Plugin>): SearchPluginsOperationResult;
}

export interface PluginUpdate extends IUpdate, IObjectUpdate<IPluginId> {
  pluginId: IPluginId;
  description: FieldUpdateValue<string>;
  script: FieldUpdateValue<string>;
  available: FieldUpdateValue<boolean>;

  getScript(): FieldUpdateValue<string>;

  setScript(arg0: string): void;

  getObjectId(): IPluginId;

  getObjectId(): IObjectId;

  setPluginId(arg0: IPluginId): void;

  setDescription(arg0: string): void;

  getPluginId(): IPluginId;

  setAvailable(arg0: boolean): void;

  getAvailable(): FieldUpdateValue<boolean>;

  getDescription(): FieldUpdateValue<string>;

  new (): PluginUpdate;
}

export interface UpdatePluginsOperation
  extends UpdateObjectsOperation<PluginUpdate> {
  updates: PluginUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdatePluginsOperation;

  new (arg0: PluginUpdate[]): UpdatePluginsOperation;

  new (arg0: PluginUpdate[]): UpdatePluginsOperation;
}

export interface UpdatePluginsOperationResult
  extends UpdateObjectsOperationResult<PluginPermId> {
  objectIds: PluginPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdatePluginsOperationResult;

  new (arg0: PluginPermId[]): UpdatePluginsOperationResult;
}

export interface Project
  extends Serializable,
    IAttachmentsHolder,
    ICodeHolder,
    IDescriptionHolder,
    IExperimentsHolder,
    IIdentifierHolder,
    IModificationDateHolder,
    IModifierHolder,
    IPermIdHolder,
    IRegistrationDateHolder,
    IRegistratorHolder,
    ISpaceHolder {
  fetchOptions: ProjectFetchOptions;
  permId: ProjectPermId;
  identifier: ProjectIdentifier;
  frozen: boolean;
  frozenForExperiments: boolean;
  frozenForSamples: boolean;
  samples: Sample[];
  history: HistoryEntry[];
  spaceHistory: HistoryEntry[];
  experimentsHistory: HistoryEntry[];
  samplesHistory: HistoryEntry[];
  unknownHistory: HistoryEntry[];
  leader: Person;

  isFrozen(): boolean;

  getSpace(): Space;

  getFetchOptions(): ProjectFetchOptions;

  setFetchOptions(arg0: ProjectFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  getExperiments(): Experiment[];

  getSamples(): Sample[];

  setPermId(arg0: ProjectPermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getAttachments(): Attachment[];

  getPermId(): IObjectId;

  getPermId(): ProjectPermId;

  getModifier(): Person;

  setFrozen(arg0: boolean): void;

  setHistory(arg0: HistoryEntry[]): void;

  getUnknownHistory(): HistoryEntry[];

  setUnknownHistory(arg0: HistoryEntry[]): void;

  setModifier(arg0: Person): void;

  isFrozenForSamples(): boolean;

  setFrozenForSamples(arg0: boolean): void;

  setSamples(arg0: Sample[]): void;

  getSamplesHistory(): HistoryEntry[];

  setSamplesHistory(arg0: HistoryEntry[]): void;

  setAttachments(arg0: Attachment[]): void;

  setSpace(arg0: Space): void;

  isFrozenForExperiments(): boolean;

  setFrozenForExperiments(arg0: boolean): void;

  setExperiments(arg0: Experiment[]): void;

  getSpaceHistory(): HistoryEntry[];

  setSpaceHistory(arg0: HistoryEntry[]): void;

  getExperimentsHistory(): HistoryEntry[];

  setExperimentsHistory(arg0: HistoryEntry[]): void;

  getLeader(): Person;

  setLeader(arg0: Person): void;

  setDescription(arg0: string): void;

  getHistory(): HistoryEntry[];

  getCode(): string;

  setCode(arg0: string): void;

  setIdentifier(arg0: ProjectIdentifier): void;

  getDescription(): string;

  getIdentifier(): ProjectIdentifier;

  getIdentifier(): ObjectIdentifier;

  new (): Project;
}

export interface CreateProjectsOperation
  extends CreateObjectsOperation<ProjectCreation> {
  creations: ProjectCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateProjectsOperation;

  new (arg0: ProjectCreation[]): CreateProjectsOperation;

  new (arg0: ProjectCreation[]): CreateProjectsOperation;
}

export interface CreateProjectsOperationResult
  extends CreateObjectsOperationResult<ProjectPermId> {
  objectIds: ProjectPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateProjectsOperationResult;

  new (arg0: ProjectPermId[]): CreateProjectsOperationResult;
}

export interface ProjectCreation
  extends ICreation,
    IObjectCreation,
    ICreationIdHolder {
  spaceId: ISpaceId;
  code: string;
  description: string;
  leaderId: IPersonId;
  attachments: AttachmentCreation[];

  getCreationId(): CreationId;

  setCreationId(arg0: CreationId): void;

  getAttachments(): AttachmentCreation[];

  setAttachments(arg0: AttachmentCreation[]): void;

  getSpaceId(): ISpaceId;

  setSpaceId(arg0: ISpaceId): void;

  getLeaderId(): IPersonId;

  setLeaderId(arg0: IPersonId): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): ProjectCreation;
}

export interface DeleteProjectsOperation
  extends DeleteObjectsOperation<IProjectId, ProjectDeletionOptions> {
  options: ProjectDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteProjectsOperation;

  new (
    arg0: IProjectId[],
    arg1: ProjectDeletionOptions,
  ): DeleteProjectsOperation;
}

export interface DeleteProjectsOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteProjectsOperationResult;
}

export interface ProjectDeletionOptions
  extends AbstractObjectDeletionOptions<ProjectDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): ProjectDeletionOptions;
}

export interface ProjectFetchOptions
  extends FetchOptions<Project>,
    Serializable {
  experiments: ExperimentFetchOptions;
  samples: SampleFetchOptions;
  history: HistoryEntryFetchOptions;
  spaceHistory: HistoryEntryFetchOptions;
  experimentsHistory: HistoryEntryFetchOptions;
  samplesHistory: HistoryEntryFetchOptions;
  unknownHistory: HistoryEntryFetchOptions;
  space: SpaceFetchOptions;
  registrator: PersonFetchOptions;
  modifier: PersonFetchOptions;
  leader: PersonFetchOptions;
  attachments: AttachmentFetchOptions;
  sort: ProjectSortOptions;
  sortBy: ProjectSortOptions;

  withModifier(): PersonFetchOptions;

  hasRegistrator(): boolean;

  getSortBy(): SortOptions<any>;

  getSortBy(): ProjectSortOptions;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasHistory(): boolean;

  hasUnknownHistory(): boolean;

  hasModifier(): boolean;

  withHistory(): HistoryEntryFetchOptions;

  withHistoryUsing(arg0: HistoryEntryFetchOptions): HistoryEntryFetchOptions;

  withUnknownHistory(): HistoryEntryFetchOptions;

  withUnknownHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withModifierUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasSamples(): boolean;

  hasSamplesHistory(): boolean;

  hasAttachments(): boolean;

  withSamples(): SampleFetchOptions;

  withSamplesUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  withSamplesHistory(): HistoryEntryFetchOptions;

  withSamplesHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withAttachments(): AttachmentFetchOptions;

  withAttachmentsUsing(arg0: AttachmentFetchOptions): AttachmentFetchOptions;

  hasSpace(): boolean;

  withSpace(): SpaceFetchOptions;

  withSpaceUsing(arg0: SpaceFetchOptions): SpaceFetchOptions;

  hasExperiments(): boolean;

  hasSpaceHistory(): boolean;

  hasExperimentsHistory(): boolean;

  hasLeader(): boolean;

  withExperiments(): ExperimentFetchOptions;

  withExperimentsUsing(arg0: ExperimentFetchOptions): ExperimentFetchOptions;

  withSpaceHistory(): HistoryEntryFetchOptions;

  withSpaceHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withExperimentsHistory(): HistoryEntryFetchOptions;

  withExperimentsHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withLeader(): PersonFetchOptions;

  withLeaderUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  sortBy(): ProjectSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): ProjectFetchOptions;
}

export interface ProjectSortOptions extends EntitySortOptions<Project> {
  identifier: SortOrder;

  getIdentifier(): SortOrder;

  identifier(): SortOrder;

  code(): SortOrder;

  registrationDate(): SortOrder;

  getRegistrationDate(): SortOrder;

  permId(): SortOrder;

  modificationDate(): SortOrder;

  getModificationDate(): SortOrder;

  getPermId(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): ProjectSortOptions;
}

export interface GetProjectsOperation
  extends GetObjectsOperation<IProjectId, ProjectFetchOptions> {
  fetchOptions: ProjectFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetProjectsOperation;

  new (arg0: IProjectId[], arg1: ProjectFetchOptions): GetProjectsOperation;
}

export interface GetProjectsOperationResult
  extends GetObjectsOperationResult<IProjectId, Project> {
  ids: IProjectId[];
  objects: Project[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetProjectsOperationResult;

  new (arg0: { [index: string]: Project }): GetProjectsOperationResult;
}

export interface IProjectId extends IObjectId {}

export interface ProjectIdentifier extends ObjectIdentifier, IProjectId {
  getIdentifier(): string;

  new (arg0: string): ProjectIdentifier;

  new (arg0: string, arg1: string): ProjectIdentifier;

  new (): ProjectIdentifier;
}

export interface ProjectPermId extends ObjectPermId, IProjectId {
  getPermId(): string;

  new (arg0: string): ProjectPermId;

  new (): ProjectPermId;
}

export interface NoProjectSearchCriteria extends ISearchCriteria {
  isNegated(): boolean;

  new (): NoProjectSearchCriteria;
}

export interface ProjectSearchCriteria
  extends AbstractObjectSearchCriteria<IProjectId> {
  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withOrOperator(): ProjectSearchCriteria;

  withAndOperator(): ProjectSearchCriteria;

  withSpace(): SpaceSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): ProjectSearchCriteria;
}

export interface SearchProjectsOperation
  extends SearchObjectsOperation<ProjectSearchCriteria, ProjectFetchOptions> {
  criteria: ProjectSearchCriteria;
  fetchOptions: ProjectFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchProjectsOperation;

  new (
    arg0: ProjectSearchCriteria,
    arg1: ProjectFetchOptions,
  ): SearchProjectsOperation;
}

export interface SearchProjectsOperationResult
  extends SearchObjectsOperationResult<Project> {
  searchResult: SearchResult<Project>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchProjectsOperationResult;

  new (arg0: SearchResult<Project>): SearchProjectsOperationResult;
}

export interface ProjectUpdate extends IUpdate, IObjectUpdate<IProjectId> {
  projectId: IProjectId;
  freeze: boolean;
  freezeForExperiments: boolean;
  freezeForSamples: boolean;
  spaceId: FieldUpdateValue<ISpaceId>;
  description: FieldUpdateValue<string>;
  attachments: AttachmentListUpdateValue;

  freeze(): void;

  getObjectId(): IObjectId;

  getObjectId(): IProjectId;

  getAttachments(): AttachmentListUpdateValue;

  shouldBeFrozen(): boolean;

  setProjectId(arg0: IProjectId): void;

  freezeForSamples(): void;

  shouldBeFrozenForSamples(): boolean;

  setAttachmentsActions(arg0: ListUpdateAction<any>[]): void;

  getSpaceId(): FieldUpdateValue<ISpaceId>;

  setSpaceId(arg0: ISpaceId): void;

  freezeForExperiments(): void;

  shouldBeFrozenForExperiments(): boolean;

  setDescription(arg0: string): void;

  getProjectId(): IProjectId;

  getDescription(): FieldUpdateValue<string>;

  new (): ProjectUpdate;
}

export interface UpdateProjectsOperation
  extends UpdateObjectsOperation<ProjectUpdate> {
  updates: ProjectUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateProjectsOperation;

  new (arg0: ProjectUpdate[]): UpdateProjectsOperation;

  new (arg0: ProjectUpdate[]): UpdateProjectsOperation;
}

export interface UpdateProjectsOperationResult
  extends UpdateObjectsOperationResult<ProjectPermId> {
  objectIds: ProjectPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateProjectsOperationResult;

  new (arg0: ProjectPermId[]): UpdateProjectsOperationResult;
}

export interface PropertyAssignment
  extends Serializable,
    IPermIdHolder,
    IPropertyTypeHolder,
    IRegistrationDateHolder,
    IRegistratorHolder,
    ISemanticAnnotationsHolder {
  fetchOptions: PropertyAssignmentFetchOptions;
  permId: PropertyAssignmentPermId;
  section: string;
  ordinal: number;
  entityType: IEntityType;
  mandatory: boolean;
  showInEditView: boolean;
  showRawValueInForms: boolean;
  semanticAnnotationsInherited: boolean;
  plugin: Plugin;

  getFetchOptions(): PropertyAssignmentFetchOptions;

  setFetchOptions(arg0: PropertyAssignmentFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setPermId(arg0: PropertyAssignmentPermId): void;

  getSemanticAnnotations(): SemanticAnnotation[];

  getPermId(): IObjectId;

  getPermId(): PropertyAssignmentPermId;

  getEntityType(): IEntityType;

  setEntityType(arg0: IEntityType): void;

  setSection(arg0: string): void;

  setOrdinal(arg0: number): void;

  setMandatory(arg0: boolean): void;

  isShowInEditView(): boolean;

  setShowInEditView(arg0: boolean): void;

  isShowRawValueInForms(): boolean;

  setShowRawValueInForms(arg0: boolean): void;

  setSemanticAnnotations(arg0: SemanticAnnotation[]): void;

  isSemanticAnnotationsInherited(): boolean;

  setSemanticAnnotationsInherited(arg0: boolean): void;

  setPlugin(arg0: Plugin): void;

  getPlugin(): Plugin;

  getOrdinal(): number;

  getSection(): string;

  getPropertyType(): PropertyType;

  setPropertyType(arg0: PropertyType): void;

  isMandatory(): boolean;

  new (): PropertyAssignment;
}

export interface PropertyType
  extends Serializable,
    ICodeHolder,
    IDescriptionHolder,
    IPermIdHolder,
    IRegistrationDateHolder,
    IRegistratorHolder,
    ISemanticAnnotationsHolder {
  fetchOptions: PropertyTypeFetchOptions;
  permId: PropertyTypePermId;
  label: string;
  managedInternally: boolean;
  dataType: DataType;
  vocabulary: Vocabulary;
  materialType: MaterialType;
  sampleType: SampleType;
  schema: string;
  transformation: string;
  metaData: { [index: string]: string };

  getFetchOptions(): PropertyTypeFetchOptions;

  setFetchOptions(arg0: PropertyTypeFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setPermId(arg0: PropertyTypePermId): void;

  getSemanticAnnotations(): SemanticAnnotation[];

  getPermId(): IObjectId;

  getPermId(): PropertyTypePermId;

  setMetaData(arg0: { [index: string]: string }): void;

  isManagedInternally(): boolean;

  setManagedInternally(arg0: boolean): void;

  isInternalNameSpace(): boolean;

  setInternalNameSpace(arg0: boolean): void;

  getDataType(): DataType;

  setDataType(arg0: DataType): void;

  getVocabulary(): Vocabulary;

  setVocabulary(arg0: Vocabulary): void;

  getMaterialType(): MaterialType;

  setMaterialType(arg0: MaterialType): void;

  getSampleType(): SampleType;

  setSampleType(arg0: SampleType): void;

  setTransformation(arg0: string): void;

  setSemanticAnnotations(arg0: SemanticAnnotation[]): void;

  setDescription(arg0: string): void;

  getTransformation(): string;

  getMetaData(): { [index: string]: string };

  getCode(): string;

  setCode(arg0: string): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  setSchema(arg0: string): void;

  getDescription(): string;

  getSchema(): string;

  new (): PropertyType;
}

export interface CreatePropertyTypesOperation
  extends CreateObjectsOperation<PropertyTypeCreation> {
  creations: PropertyTypeCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreatePropertyTypesOperation;

  new (arg0: PropertyTypeCreation[]): CreatePropertyTypesOperation;

  new (arg0: PropertyTypeCreation[]): CreatePropertyTypesOperation;
}

export interface CreatePropertyTypesOperationResult
  extends CreateObjectsOperationResult<PropertyTypePermId> {
  objectIds: PropertyTypePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreatePropertyTypesOperationResult;

  new (arg0: PropertyTypePermId[]): CreatePropertyTypesOperationResult;
}

export interface PropertyAssignmentCreation extends ICreation {
  section: string;
  ordinal: number;
  propertyTypeId: IPropertyTypeId;
  pluginId: IPluginId;
  mandatory: boolean;
  initialValueForExistingEntities: string;
  showInEditView: boolean;
  showRawValueInForms: boolean;

  setPropertyTypeId(arg0: IPropertyTypeId): void;

  setPluginId(arg0: IPluginId): void;

  setInitialValueForExistingEntities(arg0: string): void;

  getPropertyTypeId(): IPropertyTypeId;

  getInitialValueForExistingEntities(): string;

  setSection(arg0: string): void;

  setOrdinal(arg0: number): void;

  setMandatory(arg0: boolean): void;

  isShowInEditView(): boolean;

  setShowInEditView(arg0: boolean): void;

  isShowRawValueInForms(): boolean;

  setShowRawValueInForms(arg0: boolean): void;

  getPluginId(): IPluginId;

  getOrdinal(): number;

  getSection(): string;

  isMandatory(): boolean;

  new (): PropertyAssignmentCreation;
}

export interface PropertyTypeCreation extends ICreation, IObjectCreation {
  code: string;
  label: string;
  description: string;
  managedInternally: boolean;
  dataType: DataType;
  vocabularyId: IVocabularyId;
  materialTypeId: IEntityTypeId;
  sampleTypeId: IEntityTypeId;
  schema: string;
  transformation: string;
  metaData: { [index: string]: string };

  setMetaData(arg0: { [index: string]: string }): void;

  isManagedInternally(): boolean;

  setManagedInternally(arg0: boolean): void;

  isInternalNameSpace(): boolean;

  setInternalNameSpace(arg0: boolean): void;

  getDataType(): DataType;

  setDataType(arg0: DataType): void;

  setTransformation(arg0: string): void;

  getVocabularyId(): IVocabularyId;

  setVocabularyId(arg0: IVocabularyId): void;

  getMaterialTypeId(): IEntityTypeId;

  setMaterialTypeId(arg0: IEntityTypeId): void;

  getSampleTypeId(): IEntityTypeId;

  setSampleTypeId(arg0: IEntityTypeId): void;

  setDescription(arg0: string): void;

  getTransformation(): string;

  getMetaData(): { [index: string]: string };

  getCode(): string;

  setCode(arg0: string): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  setSchema(arg0: string): void;

  getDescription(): string;

  getSchema(): string;

  new (): PropertyTypeCreation;
}

export interface DeletePropertyTypesOperation
  extends DeleteObjectsOperation<IPropertyTypeId, PropertyTypeDeletionOptions> {
  options: PropertyTypeDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeletePropertyTypesOperation;

  new (
    arg0: IPropertyTypeId[],
    arg1: PropertyTypeDeletionOptions,
  ): DeletePropertyTypesOperation;
}

export interface DeletePropertyTypesOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeletePropertyTypesOperationResult;
}

export interface PropertyTypeDeletionOptions
  extends AbstractObjectDeletionOptions<PropertyTypeDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): PropertyTypeDeletionOptions;
}

export interface PropertyAssignmentFetchOptions
  extends FetchOptions<PropertyAssignment>,
    Serializable {
  entityType: EntityTypeFetchOptions;
  propertyType: PropertyTypeFetchOptions;
  semanticAnnotations: SemanticAnnotationFetchOptions;
  registrator: PersonFetchOptions;
  sort: PropertyAssignmentSortOptions;
  plugin: PluginFetchOptions;
  sortBy: PropertyAssignmentSortOptions;

  hasRegistrator(): boolean;

  getSortBy(): PropertyAssignmentSortOptions;

  getSortBy(): SortOptions<any>;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  withEntityType(): EntityTypeFetchOptions;

  hasEntityType(): boolean;

  hasPropertyType(): boolean;

  hasSemanticAnnotations(): boolean;

  withEntityTypeUsing(arg0: EntityTypeFetchOptions): EntityTypeFetchOptions;

  withPropertyType(): PropertyTypeFetchOptions;

  withPropertyTypeUsing(
    arg0: PropertyTypeFetchOptions,
  ): PropertyTypeFetchOptions;

  withSemanticAnnotations(): SemanticAnnotationFetchOptions;

  withSemanticAnnotationsUsing(
    arg0: SemanticAnnotationFetchOptions,
  ): SemanticAnnotationFetchOptions;

  withPluginUsing(arg0: PluginFetchOptions): PluginFetchOptions;

  hasPlugin(): boolean;

  withPlugin(): PluginFetchOptions;

  sortBy(): PropertyAssignmentSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): PropertyAssignmentFetchOptions;
}

export interface PropertyAssignmentSortOptions
  extends SortOptions<PropertyAssignment> {
  ordinal: SortOrder;
  code: SortOrder;
  label: SortOrder;

  code(): SortOrder;

  ordinal(): SortOrder;

  label(): SortOrder;

  getOrdinal(): SortOrder;

  getCode(): SortOrder;

  getLabel(): SortOrder;

  getSortings(): Sorting[];

  new (): PropertyAssignmentSortOptions;
}

export interface PropertyFetchOptions extends EmptyFetchOptions {
  getSortBy(): SortOptions<void>;

  sortBy(): SortOptions<void>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): PropertyFetchOptions;
}

export interface PropertyTypeFetchOptions
  extends FetchOptions<PropertyType>,
    Serializable {
  vocabulary: VocabularyFetchOptions;
  materialType: MaterialTypeFetchOptions;
  sampleType: SampleTypeFetchOptions;
  semanticAnnotations: SemanticAnnotationFetchOptions;
  registrator: PersonFetchOptions;
  sort: PropertyTypeSortOptions;
  sortBy: PropertyTypeSortOptions;

  hasRegistrator(): boolean;

  getSortBy(): PropertyTypeSortOptions;

  getSortBy(): SortOptions<any>;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasSemanticAnnotations(): boolean;

  hasVocabulary(): boolean;

  hasMaterialType(): boolean;

  hasSampleType(): boolean;

  withSemanticAnnotations(): SemanticAnnotationFetchOptions;

  withSemanticAnnotationsUsing(
    arg0: SemanticAnnotationFetchOptions,
  ): SemanticAnnotationFetchOptions;

  withVocabulary(): VocabularyFetchOptions;

  withVocabularyUsing(arg0: VocabularyFetchOptions): VocabularyFetchOptions;

  withMaterialType(): MaterialTypeFetchOptions;

  withMaterialTypeUsing(
    arg0: MaterialTypeFetchOptions,
  ): MaterialTypeFetchOptions;

  withSampleType(): SampleTypeFetchOptions;

  withSampleTypeUsing(arg0: SampleTypeFetchOptions): SampleTypeFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): PropertyTypeSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): PropertyTypeFetchOptions;
}

export interface PropertyTypeSortOptions extends SortOptions<PropertyType> {
  code: SortOrder;

  code(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): PropertyTypeSortOptions;
}

export interface GetPropertyTypesOperation
  extends GetObjectsOperation<IPropertyTypeId, PropertyTypeFetchOptions> {
  fetchOptions: PropertyTypeFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetPropertyTypesOperation;

  new (
    arg0: IPropertyTypeId[],
    arg1: PropertyTypeFetchOptions,
  ): GetPropertyTypesOperation;
}

export interface GetPropertyTypesOperationResult
  extends GetObjectsOperationResult<IPropertyTypeId, PropertyType> {
  ids: IPropertyTypeId[];
  objects: PropertyType[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetPropertyTypesOperationResult;

  new (arg0: {
    [index: string]: PropertyType;
  }): GetPropertyTypesOperationResult;
}

export interface IPropertyAssignmentId extends IObjectId {}

export interface IPropertyTypeId extends IObjectId {}

export interface PropertyAssignmentPermId extends IPropertyAssignmentId {
  entityTypeId: IEntityTypeId;
  propertyTypeId: IPropertyTypeId;

  getPropertyTypeId(): IPropertyTypeId;

  getEntityTypeId(): IEntityTypeId;

  new (): PropertyAssignmentPermId;

  new (arg0: IEntityTypeId, arg1: IPropertyTypeId): PropertyAssignmentPermId;
}

export interface PropertyTypePermId extends ObjectPermId, IPropertyTypeId {
  getPermId(): string;

  new (arg0: string): PropertyTypePermId;

  new (): PropertyTypePermId;
}

export interface PropertyAssignmentSearchCriteria
  extends AbstractObjectSearchCriteria<IPropertyAssignmentId> {
  withOrOperator(): PropertyAssignmentSearchCriteria;

  withAndOperator(): PropertyAssignmentSearchCriteria;

  withIds(): IdsSearchCriteria<IPropertyAssignmentId>;

  withEntityType(): EntityTypeSearchCriteria;

  withPropertyType(): PropertyTypeSearchCriteria;

  withSemanticAnnotations(): SemanticAnnotationSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): PropertyAssignmentSearchCriteria;
}

export interface PropertyTypeSearchCriteria
  extends AbstractObjectSearchCriteria<IPropertyTypeId> {
  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withOrOperator(): PropertyTypeSearchCriteria;

  withAndOperator(): PropertyTypeSearchCriteria;

  withIds(): IdsSearchCriteria<IPropertyTypeId>;

  withSemanticAnnotations(): SemanticAnnotationSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): PropertyTypeSearchCriteria;
}

export interface SearchPropertyAssignmentsOperation
  extends SearchObjectsOperation<
    PropertyAssignmentSearchCriteria,
    PropertyAssignmentFetchOptions
  > {
  criteria: PropertyAssignmentSearchCriteria;
  fetchOptions: PropertyAssignmentFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchPropertyAssignmentsOperation;

  new (
    arg0: PropertyAssignmentSearchCriteria,
    arg1: PropertyAssignmentFetchOptions,
  ): SearchPropertyAssignmentsOperation;
}

export interface SearchPropertyAssignmentsOperationResult
  extends SearchObjectsOperationResult<PropertyAssignment> {
  searchResult: SearchResult<PropertyAssignment>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchPropertyAssignmentsOperationResult;

  new (
    arg0: SearchResult<PropertyAssignment>,
  ): SearchPropertyAssignmentsOperationResult;
}

export interface SearchPropertyTypesOperation
  extends SearchObjectsOperation<
    PropertyTypeSearchCriteria,
    PropertyTypeFetchOptions
  > {
  criteria: PropertyTypeSearchCriteria;
  fetchOptions: PropertyTypeFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchPropertyTypesOperation;

  new (
    arg0: PropertyTypeSearchCriteria,
    arg1: PropertyTypeFetchOptions,
  ): SearchPropertyTypesOperation;
}

export interface SearchPropertyTypesOperationResult
  extends SearchObjectsOperationResult<PropertyType> {
  searchResult: SearchResult<PropertyType>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchPropertyTypesOperationResult;

  new (arg0: SearchResult<PropertyType>): SearchPropertyTypesOperationResult;
}

export interface PropertyTypeUpdate
  extends IUpdate,
    IObjectUpdate<IPropertyTypeId> {
  typeId: IPropertyTypeId;
  dataType: DataType;
  label: FieldUpdateValue<string>;
  description: FieldUpdateValue<string>;
  schema: FieldUpdateValue<string>;
  transformation: FieldUpdateValue<string>;
  metaData: ListUpdateMapValues;

  getTypeId(): IPropertyTypeId;

  setTypeId(arg0: IPropertyTypeId): void;

  getObjectId(): IObjectId;

  getObjectId(): IPropertyTypeId;

  setMetaDataActions(arg0: ListUpdateAction<any>[]): void;

  setTransformation(arg0: string): void;

  getDataTypeToBeConverted(): DataType;

  convertToDataType(arg0: DataType): void;

  setDescription(arg0: string): void;

  getTransformation(): FieldUpdateValue<string>;

  getMetaData(): ListUpdateMapValues;

  getLabel(): FieldUpdateValue<string>;

  setLabel(arg0: string): void;

  setSchema(arg0: string): void;

  getDescription(): FieldUpdateValue<string>;

  getSchema(): FieldUpdateValue<string>;

  new (): PropertyTypeUpdate;
}

export interface UpdatePropertyTypesOperation
  extends UpdateObjectsOperation<PropertyTypeUpdate> {
  updates: PropertyTypeUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdatePropertyTypesOperation;

  new (arg0: PropertyTypeUpdate[]): UpdatePropertyTypesOperation;

  new (arg0: PropertyTypeUpdate[]): UpdatePropertyTypesOperation;
}

export interface UpdatePropertyTypesOperationResult
  extends UpdateObjectsOperationResult<PropertyTypePermId> {
  objectIds: PropertyTypePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdatePropertyTypesOperationResult;

  new (arg0: PropertyTypePermId[]): UpdatePropertyTypesOperationResult;
}

export interface Query
  extends Serializable,
    IDescriptionHolder,
    IModificationDateHolder,
    IRegistrationDateHolder,
    IRegistratorHolder {
  fetchOptions: QueryFetchOptions;
  permId: IQueryId;
  name: string;
  databaseId: IQueryDatabaseId;
  databaseLabel: string;
  queryType: QueryType;
  entityTypeCodePattern: string;
  sql: string;
  publicFlag: boolean;

  getName(): string;

  isPublic(): boolean;

  setName(arg0: string): void;

  getFetchOptions(): QueryFetchOptions;

  setFetchOptions(arg0: QueryFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setPermId(arg0: IQueryId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getPermId(): IQueryId;

  getDatabaseId(): IQueryDatabaseId;

  setDatabaseId(arg0: IQueryDatabaseId): void;

  getDatabaseLabel(): string;

  setDatabaseLabel(arg0: string): void;

  getQueryType(): QueryType;

  setQueryType(arg0: QueryType): void;

  getEntityTypeCodePattern(): string;

  setEntityTypeCodePattern(arg0: string): void;

  getSql(): string;

  setSql(arg0: string): void;

  setDescription(arg0: string): void;

  setPublic(arg0: boolean): void;

  getDescription(): string;

  new (): Query;
}

export interface QueryDatabase
  extends Serializable,
    IPermIdHolder,
    ISpaceHolder {
  fetchOptions: QueryDatabaseFetchOptions;
  permId: QueryDatabaseName;
  name: string;
  label: string;
  creatorMinimalRole: Role;
  creatorMinimalRoleLevel: RoleLevel;

  getName(): string;

  setName(arg0: string): void;

  getSpace(): Space;

  getFetchOptions(): QueryDatabaseFetchOptions;

  setFetchOptions(arg0: QueryDatabaseFetchOptions): void;

  setPermId(arg0: QueryDatabaseName): void;

  getPermId(): IObjectId;

  getPermId(): QueryDatabaseName;

  setSpace(arg0: Space): void;

  getCreatorMinimalRole(): Role;

  setCreatorMinimalRole(arg0: Role): void;

  getCreatorMinimalRoleLevel(): RoleLevel;

  setCreatorMinimalRoleLevel(arg0: RoleLevel): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  new (): QueryDatabase;
}

export interface CreateQueriesOperation
  extends CreateObjectsOperation<QueryCreation> {
  creations: QueryCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateQueriesOperation;

  new (arg0: QueryCreation[]): CreateQueriesOperation;

  new (arg0: QueryCreation[]): CreateQueriesOperation;
}

export interface CreateQueriesOperationResult
  extends CreateObjectsOperationResult<QueryTechId> {
  objectIds: QueryTechId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateQueriesOperationResult;

  new (arg0: QueryTechId[]): CreateQueriesOperationResult;
}

export interface QueryCreation extends ICreation, IObjectCreation {
  name: string;
  databaseId: IQueryDatabaseId;
  queryType: QueryType;
  entityTypeCodePattern: string;
  description: string;
  sql: string;
  publicFlag: boolean;

  getName(): string;

  isPublic(): boolean;

  setName(arg0: string): void;

  getDatabaseId(): IQueryDatabaseId;

  setDatabaseId(arg0: IQueryDatabaseId): void;

  getQueryType(): QueryType;

  setQueryType(arg0: QueryType): void;

  getEntityTypeCodePattern(): string;

  setEntityTypeCodePattern(arg0: string): void;

  getSql(): string;

  setSql(arg0: string): void;

  setDescription(arg0: string): void;

  setPublic(arg0: boolean): void;

  getDescription(): string;

  new (): QueryCreation;
}

export interface DeleteQueriesOperation
  extends DeleteObjectsOperation<IQueryId, QueryDeletionOptions> {
  options: QueryDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteQueriesOperation;

  new (arg0: IQueryId[], arg1: QueryDeletionOptions): DeleteQueriesOperation;
}

export interface DeleteQueriesOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteQueriesOperationResult;
}

export interface QueryDeletionOptions
  extends AbstractObjectDeletionOptions<QueryDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): QueryDeletionOptions;
}

export interface ExecuteQueryOperation extends IOperation {
  queryId: IQueryId;
  options: QueryExecutionOptions;

  getMessage(): string;

  getQueryId(): IQueryId;

  getOptions(): QueryExecutionOptions;

  new (): ExecuteQueryOperation;

  new (arg0: IQueryId, arg1: QueryExecutionOptions): ExecuteQueryOperation;
}

export interface ExecuteQueryOperationResult extends IOperationResult {
  result: TableModel;

  getMessage(): string;

  getResult(): TableModel;

  new (): ExecuteQueryOperationResult;

  new (arg0: TableModel): ExecuteQueryOperationResult;
}

export interface ExecuteSqlOperation extends IOperation {
  sql: string;
  options: SqlExecutionOptions;

  getMessage(): string;

  getSql(): string;

  getOptions(): SqlExecutionOptions;

  new (): ExecuteSqlOperation;

  new (arg0: string, arg1: SqlExecutionOptions): ExecuteSqlOperation;
}

export interface ExecuteSqlOperationResult extends IOperationResult {
  result: TableModel;

  getMessage(): string;

  getResult(): TableModel;

  new (): ExecuteSqlOperationResult;

  new (arg0: TableModel): ExecuteSqlOperationResult;
}

export interface QueryExecutionOptions extends Serializable {
  parameters: { [index: string]: string };

  getParameters(): { [index: string]: string };

  withParameter(arg0: string, arg1: string): QueryExecutionOptions;

  withParameters(arg0: { [index: string]: string }): QueryExecutionOptions;

  new (): QueryExecutionOptions;
}

export interface SqlExecutionOptions extends Serializable {
  databaseId: IQueryDatabaseId;
  parameters: { [index: string]: string };

  getParameters(): { [index: string]: string };

  getDatabaseId(): IQueryDatabaseId;

  withParameter(arg0: string, arg1: string): SqlExecutionOptions;

  withDatabaseId(arg0: IQueryDatabaseId): SqlExecutionOptions;

  withParameters(arg0: { [index: string]: string }): SqlExecutionOptions;

  new (): SqlExecutionOptions;
}

export interface QueryDatabaseFetchOptions
  extends FetchOptions<QueryDatabase>,
    Serializable {
  space: SpaceFetchOptions;
  sort: QueryDatabaseSortOptions;
  sortBy: QueryDatabaseSortOptions;

  getSortBy(): QueryDatabaseSortOptions;

  getSortBy(): SortOptions<any>;

  hasSpace(): boolean;

  withSpace(): SpaceFetchOptions;

  withSpaceUsing(arg0: SpaceFetchOptions): SpaceFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): QueryDatabaseSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): QueryDatabaseFetchOptions;
}

export interface QueryDatabaseSortOptions extends SortOptions<QueryDatabase> {
  name: SortOrder;

  getName(): SortOrder;

  name(): SortOrder;

  getSortings(): Sorting[];

  new (): QueryDatabaseSortOptions;
}

export interface QueryFetchOptions extends FetchOptions<Query>, Serializable {
  registrator: PersonFetchOptions;
  sort: QuerySortOptions;
  sortBy: QuerySortOptions;

  hasRegistrator(): boolean;

  getSortBy(): QuerySortOptions;

  getSortBy(): SortOptions<any>;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): QuerySortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): QueryFetchOptions;
}

export interface QuerySortOptions extends SortOptions<Query> {
  getSortings(): Sorting[];

  new (): QuerySortOptions;
}

export interface GetQueriesOperation
  extends GetObjectsOperation<IQueryId, QueryFetchOptions> {
  fetchOptions: QueryFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetQueriesOperation;

  new (arg0: IQueryId[], arg1: QueryFetchOptions): GetQueriesOperation;
}

export interface GetQueriesOperationResult
  extends GetObjectsOperationResult<IQueryId, Query> {
  ids: IQueryId[];
  objects: Query[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetQueriesOperationResult;

  new (arg0: { [index: string]: Query }): GetQueriesOperationResult;
}

export interface GetQueryDatabasesOperation
  extends GetObjectsOperation<IQueryDatabaseId, QueryDatabaseFetchOptions> {
  fetchOptions: QueryDatabaseFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetQueryDatabasesOperation;

  new (
    arg0: IQueryDatabaseId[],
    arg1: QueryDatabaseFetchOptions,
  ): GetQueryDatabasesOperation;
}

export interface GetQueryDatabasesOperationResult
  extends GetObjectsOperationResult<IQueryDatabaseId, QueryDatabase> {
  ids: IQueryDatabaseId[];
  objects: QueryDatabase[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetQueryDatabasesOperationResult;

  new (arg0: {
    [index: string]: QueryDatabase;
  }): GetQueryDatabasesOperationResult;
}

export interface IQueryDatabaseId extends IObjectId {}

export interface IQueryId extends IObjectId {}

export interface QueryDatabaseName extends IQueryDatabaseId, Serializable {
  name: string;

  getName(): string;

  new (): QueryDatabaseName;

  new (arg0: string): QueryDatabaseName;
}

export interface QueryName extends IQueryId, Serializable {
  name: string;

  getName(): string;

  new (): QueryName;

  new (arg0: string): QueryName;
}

export interface QueryTechId extends ObjectTechId, IQueryId {
  getTechId(): number;

  new (arg0: number): QueryTechId;

  new (): QueryTechId;
}

export interface DatabaseIdSearchCriteria
  extends IdSearchCriteria<IQueryDatabaseId> {
  id: IQueryDatabaseId;

  getId(): T;

  thatEquals(arg0: T): void;

  isNegated(): boolean;

  new (): DatabaseIdSearchCriteria;
}

export interface EntityTypeCodePatternSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): EntityTypeCodePatternSearchCriteria;
}

export interface QueryDatabaseSearchCriteria
  extends AbstractObjectSearchCriteria<IQueryDatabaseId> {
  withOrOperator(): QueryDatabaseSearchCriteria;

  withAndOperator(): QueryDatabaseSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): QueryDatabaseSearchCriteria;
}

export interface QuerySearchCriteria
  extends AbstractObjectSearchCriteria<IQueryId> {
  withOrOperator(): QuerySearchCriteria;

  withAndOperator(): QuerySearchCriteria;

  withDatabaseId(): DatabaseIdSearchCriteria;

  withQueryType(): QueryTypeSearchCriteria;

  withEntityTypeCodePattern(): EntityTypeCodePatternSearchCriteria;

  withSql(): SqlSearchCriteria;

  withName(): NameSearchCriteria;

  withDescription(): DescriptionSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): QuerySearchCriteria;
}

export interface QueryTypeSearchCriteria
  extends EnumFieldSearchCriteria<QueryType> {
  fieldValue: QueryType;

  thatEquals(arg0: T): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): QueryTypeSearchCriteria;
}

export interface SearchQueriesOperation
  extends SearchObjectsOperation<QuerySearchCriteria, QueryFetchOptions> {
  criteria: QuerySearchCriteria;
  fetchOptions: QueryFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchQueriesOperation;

  new (
    arg0: QuerySearchCriteria,
    arg1: QueryFetchOptions,
  ): SearchQueriesOperation;
}

export interface SearchQueriesOperationResult
  extends SearchObjectsOperationResult<Query> {
  searchResult: SearchResult<Query>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchQueriesOperationResult;

  new (arg0: SearchResult<Query>): SearchQueriesOperationResult;
}

export interface SearchQueryDatabasesOperation
  extends SearchObjectsOperation<
    QueryDatabaseSearchCriteria,
    QueryDatabaseFetchOptions
  > {
  criteria: QueryDatabaseSearchCriteria;
  fetchOptions: QueryDatabaseFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchQueryDatabasesOperation;

  new (
    arg0: QueryDatabaseSearchCriteria,
    arg1: QueryDatabaseFetchOptions,
  ): SearchQueryDatabasesOperation;
}

export interface SearchQueryDatabasesOperationResult
  extends SearchObjectsOperationResult<QueryDatabase> {
  searchResult: SearchResult<QueryDatabase>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchQueryDatabasesOperationResult;

  new (arg0: SearchResult<QueryDatabase>): SearchQueryDatabasesOperationResult;
}

export interface SqlSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): SqlSearchCriteria;
}

export interface QueryUpdate extends IUpdate, IObjectUpdate<IQueryId> {
  queryId: IQueryId;
  name: FieldUpdateValue<string>;
  description: FieldUpdateValue<string>;
  databaseId: FieldUpdateValue<IQueryDatabaseId>;
  queryType: FieldUpdateValue<QueryType>;
  entityTypeCodePattern: FieldUpdateValue<string>;
  sql: FieldUpdateValue<string>;
  publicFlag: FieldUpdateValue<boolean>;

  getName(): FieldUpdateValue<string>;

  isPublic(): FieldUpdateValue<boolean>;

  setName(arg0: string): void;

  getObjectId(): IObjectId;

  getObjectId(): IQueryId;

  getDatabaseId(): FieldUpdateValue<IQueryDatabaseId>;

  setDatabaseId(arg0: IQueryDatabaseId): void;

  getQueryType(): FieldUpdateValue<QueryType>;

  setQueryType(arg0: QueryType): void;

  getEntityTypeCodePattern(): FieldUpdateValue<string>;

  setEntityTypeCodePattern(arg0: string): void;

  getSql(): FieldUpdateValue<string>;

  setSql(arg0: string): void;

  getQueryId(): IQueryId;

  setQueryId(arg0: IQueryId): void;

  setDescription(arg0: string): void;

  setPublic(arg0: boolean): void;

  getDescription(): FieldUpdateValue<string>;

  new (): QueryUpdate;
}

export interface UpdateQueriesOperation
  extends UpdateObjectsOperation<QueryUpdate> {
  updates: QueryUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateQueriesOperation;

  new (arg0: QueryUpdate[]): UpdateQueriesOperation;

  new (arg0: QueryUpdate[]): UpdateQueriesOperation;
}

export interface UpdateQueriesOperationResult
  extends UpdateObjectsOperationResult<QueryTechId> {
  objectIds: QueryTechId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateQueriesOperationResult;

  new (arg0: QueryTechId[]): UpdateQueriesOperationResult;
}

export interface Rights extends Serializable {
  rights: Right[];

  getRights(): Right[];

  setRights(arg0: Right[]): void;

  new (): Rights;

  new (arg0: Right[]): Rights;
}

export interface RightsFetchOptions extends EmptyFetchOptions {
  getSortBy(): SortOptions<void>;

  sortBy(): SortOptions<void>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): RightsFetchOptions;
}

export interface GetRightsOperation
  extends GetObjectsOperation<IObjectId, RightsFetchOptions> {
  fetchOptions: RightsFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetRightsOperation;

  new (arg0: IObjectId[], arg1: RightsFetchOptions): GetRightsOperation;
}

export interface GetRightsOperationResult
  extends GetObjectsOperationResult<IObjectId, Rights> {
  ids: IObjectId[];
  objects: Rights[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetRightsOperationResult;

  new (arg0: { [index: string]: Rights }): GetRightsOperationResult;
}

export interface RoleAssignment
  extends Serializable,
    ISpaceHolder,
    IRegistrationDateHolder,
    IRegistratorHolder {
  fetchOptions: RoleAssignmentFetchOptions;
  id: IRoleAssignmentId;
  user: Person;
  authorizationGroup: AuthorizationGroup;
  role: Role;
  roleLevel: RoleLevel;
  project: Project;

  getId(): IRoleAssignmentId;

  getSpace(): Space;

  getFetchOptions(): RoleAssignmentFetchOptions;

  setFetchOptions(arg0: RoleAssignmentFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setSpace(arg0: Space): void;

  getAuthorizationGroup(): AuthorizationGroup;

  setAuthorizationGroup(arg0: AuthorizationGroup): void;

  getRole(): Role;

  setRole(arg0: Role): void;

  getRoleLevel(): RoleLevel;

  setRoleLevel(arg0: RoleLevel): void;

  getProject(): Project;

  getUser(): Person;

  setProject(arg0: Project): void;

  setId(arg0: IRoleAssignmentId): void;

  setUser(arg0: Person): void;

  new (): RoleAssignment;
}

export interface CreateRoleAssignmentsOperation
  extends CreateObjectsOperation<RoleAssignmentCreation> {
  creations: RoleAssignmentCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateRoleAssignmentsOperation;

  new (arg0: RoleAssignmentCreation[]): CreateRoleAssignmentsOperation;

  new (arg0: RoleAssignmentCreation[]): CreateRoleAssignmentsOperation;
}

export interface CreateRoleAssignmentsOperationResult
  extends CreateObjectsOperationResult<RoleAssignmentTechId> {
  objectIds: RoleAssignmentTechId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateRoleAssignmentsOperationResult;

  new (arg0: RoleAssignmentTechId[]): CreateRoleAssignmentsOperationResult;
}

export interface RoleAssignmentCreation extends ICreation, IObjectCreation {
  userId: IPersonId;
  authorizationGroupId: IAuthorizationGroupId;
  role: Role;
  spaceId: ISpaceId;
  projectId: IProjectId;

  setAuthorizationGroupId(arg0: IAuthorizationGroupId): void;

  getAuthorizationGroupId(): IAuthorizationGroupId;

  setProjectId(arg0: IProjectId): void;

  getSpaceId(): ISpaceId;

  setSpaceId(arg0: ISpaceId): void;

  getRole(): Role;

  setRole(arg0: Role): void;

  getUserId(): IPersonId;

  getProjectId(): IProjectId;

  setUserId(arg0: IPersonId): void;

  new (): RoleAssignmentCreation;
}

export interface DeleteRoleAssignmentsOperation
  extends DeleteObjectsOperation<
    IRoleAssignmentId,
    RoleAssignmentDeletionOptions
  > {
  options: RoleAssignmentDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteRoleAssignmentsOperation;

  new (
    arg0: IRoleAssignmentId[],
    arg1: RoleAssignmentDeletionOptions,
  ): DeleteRoleAssignmentsOperation;
}

export interface DeleteRoleAssignmentsOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteRoleAssignmentsOperationResult;
}

export interface RoleAssignmentDeletionOptions
  extends AbstractObjectDeletionOptions<RoleAssignmentDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): RoleAssignmentDeletionOptions;
}

export interface RoleAssignmentFetchOptions
  extends FetchOptions<RoleAssignment>,
    Serializable {
  registrator: PersonFetchOptions;
  user: PersonFetchOptions;
  authorizationGroup: AuthorizationGroupFetchOptions;
  space: SpaceFetchOptions;
  project: ProjectFetchOptions;
  sort: RoleAssignmentSortOptions;
  sortBy: RoleAssignmentSortOptions;

  hasRegistrator(): boolean;

  getSortBy(): RoleAssignmentSortOptions;

  getSortBy(): SortOptions<any>;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  withUser(): PersonFetchOptions;

  hasProject(): boolean;

  withProject(): ProjectFetchOptions;

  withProjectUsing(arg0: ProjectFetchOptions): ProjectFetchOptions;

  hasSpace(): boolean;

  withSpace(): SpaceFetchOptions;

  withSpaceUsing(arg0: SpaceFetchOptions): SpaceFetchOptions;

  hasUser(): boolean;

  hasAuthorizationGroup(): boolean;

  withUserUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  withAuthorizationGroup(): AuthorizationGroupFetchOptions;

  withAuthorizationGroupUsing(
    arg0: AuthorizationGroupFetchOptions,
  ): AuthorizationGroupFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): RoleAssignmentSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): RoleAssignmentFetchOptions;
}

export interface RoleAssignmentSortOptions extends SortOptions<RoleAssignment> {
  getSortings(): Sorting[];

  new (): RoleAssignmentSortOptions;
}

export interface GetRoleAssignmentsOperation
  extends GetObjectsOperation<IRoleAssignmentId, RoleAssignmentFetchOptions> {
  fetchOptions: RoleAssignmentFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetRoleAssignmentsOperation;

  new (
    arg0: IRoleAssignmentId[],
    arg1: RoleAssignmentFetchOptions,
  ): GetRoleAssignmentsOperation;
}

export interface GetRoleAssignmentsOperationResult
  extends GetObjectsOperationResult<IRoleAssignmentId, RoleAssignment> {
  ids: IRoleAssignmentId[];
  objects: RoleAssignment[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetRoleAssignmentsOperationResult;

  new (arg0: {
    [index: string]: RoleAssignment;
  }): GetRoleAssignmentsOperationResult;
}

export interface IRoleAssignmentId extends IObjectId {}

export interface RoleAssignmentTechId extends ObjectTechId, IRoleAssignmentId {
  getTechId(): number;

  new (arg0: number): RoleAssignmentTechId;

  new (): RoleAssignmentTechId;
}

export interface RoleAssignmentSearchCriteria
  extends AbstractObjectSearchCriteria<IRoleAssignmentId> {
  withUser(): PersonSearchCriteria;

  withOrOperator(): RoleAssignmentSearchCriteria;

  withAndOperator(): RoleAssignmentSearchCriteria;

  withProject(): ProjectSearchCriteria;

  withSpace(): SpaceSearchCriteria;

  withAuthorizationGroup(): AuthorizationGroupSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): RoleAssignmentSearchCriteria;
}

export interface SearchRoleAssignmentsOperation
  extends SearchObjectsOperation<
    RoleAssignmentSearchCriteria,
    RoleAssignmentFetchOptions
  > {
  criteria: RoleAssignmentSearchCriteria;
  fetchOptions: RoleAssignmentFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchRoleAssignmentsOperation;

  new (
    arg0: RoleAssignmentSearchCriteria,
    arg1: RoleAssignmentFetchOptions,
  ): SearchRoleAssignmentsOperation;
}

export interface SearchRoleAssignmentsOperationResult
  extends SearchObjectsOperationResult<RoleAssignment> {
  searchResult: SearchResult<RoleAssignment>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchRoleAssignmentsOperationResult;

  new (
    arg0: SearchResult<RoleAssignment>,
  ): SearchRoleAssignmentsOperationResult;
}

export interface Sample
  extends Serializable,
    IAttachmentsHolder,
    ICodeHolder,
    IDataSetsHolder,
    IEntityTypeHolder,
    IExperimentHolder,
    IIdentifierHolder,
    IMaterialPropertiesHolder,
    IModificationDateHolder,
    IModifierHolder,
    IParentChildrenHolder<Sample>,
    IPermIdHolder,
    IProjectHolder,
    IPropertiesHolder,
    IRegistrationDateHolder,
    IRegistratorHolder,
    ISpaceHolder,
    ITagsHolder {
  fetchOptions: SampleFetchOptions;
  permId: SamplePermId;
  identifier: SampleIdentifier;
  frozen: boolean;
  frozenForComponents: boolean;
  frozenForChildren: boolean;
  frozenForParents: boolean;
  frozenForDataSets: boolean;
  type: SampleType;
  sampleProperties: { [index: string]: Sample };
  parents: Sample[];
  parentsRelationships: { [index: string]: Relationship };
  children: Sample[];
  childrenRelationships: { [index: string]: Relationship };
  container: Sample;
  components: Sample[];
  history: HistoryEntry[];
  propertiesHistory: HistoryEntry[];
  spaceHistory: HistoryEntry[];
  projectHistory: HistoryEntry[];
  experimentHistory: HistoryEntry[];
  parentsHistory: HistoryEntry[];
  childrenHistory: HistoryEntry[];
  containerHistory: HistoryEntry[];
  componentsHistory: HistoryEntry[];
  dataSetsHistory: HistoryEntry[];
  unknownHistory: HistoryEntry[];
  metaData: { [index: string]: string };

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  getType(): IEntityType;

  getType(): SampleType;

  isFrozen(): boolean;

  getSpace(): Space;

  getBooleanProperty(arg0: string): boolean;

  getChildren(): Sample[];

  getFetchOptions(): SampleFetchOptions;

  setFetchOptions(arg0: SampleFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setPermId(arg0: SamplePermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getAttachments(): Attachment[];

  getExperiment(): Experiment;

  getMaterialProperties(): { [index: string]: Material };

  setMaterialProperties(arg0: { [index: string]: Material }): void;

  getMaterialProperty(arg0: string): Material;

  setMaterialProperty(arg0: string, arg1: Material): void;

  getDataSets(): DataSet[];

  getPermId(): IObjectId;

  getPermId(): SamplePermId;

  getModifier(): Person;

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  setFrozen(arg0: boolean): void;

  isFrozenForChildren(): boolean;

  setFrozenForChildren(arg0: boolean): void;

  isFrozenForParents(): boolean;

  setFrozenForParents(arg0: boolean): void;

  isFrozenForComponents(): boolean;

  setFrozenForComponents(arg0: boolean): void;

  setExperiment(arg0: Experiment): void;

  getSampleProperties(): { [index: string]: Sample };

  setSampleProperties(arg0: { [index: string]: Sample }): void;

  setParents(arg0: Sample[]): void;

  setHistory(arg0: HistoryEntry[]): void;

  getPropertiesHistory(): HistoryEntry[];

  setPropertiesHistory(arg0: HistoryEntry[]): void;

  getExperimentHistory(): HistoryEntry[];

  setExperimentHistory(arg0: HistoryEntry[]): void;

  getParentsHistory(): HistoryEntry[];

  setParentsHistory(arg0: HistoryEntry[]): void;

  getChildrenHistory(): HistoryEntry[];

  setChildrenHistory(arg0: HistoryEntry[]): void;

  getComponentsHistory(): HistoryEntry[];

  setComponentsHistory(arg0: HistoryEntry[]): void;

  getUnknownHistory(): HistoryEntry[];

  setUnknownHistory(arg0: HistoryEntry[]): void;

  setModifier(arg0: Person): void;

  setMetaData(arg0: { [index: string]: string }): void;

  isFrozenForDataSets(): boolean;

  setFrozenForDataSets(arg0: boolean): void;

  setDataSets(arg0: DataSet[]): void;

  getProjectHistory(): HistoryEntry[];

  setProjectHistory(arg0: HistoryEntry[]): void;

  getDataSetsHistory(): HistoryEntry[];

  setDataSetsHistory(arg0: HistoryEntry[]): void;

  setAttachments(arg0: Attachment[]): void;

  setSpace(arg0: Space): void;

  getSpaceHistory(): HistoryEntry[];

  setSpaceHistory(arg0: HistoryEntry[]): void;

  getParentsRelationships(): { [index: string]: Relationship };

  getChildrenRelationships(): { [index: string]: Relationship };

  setParentsRelationships(arg0: { [index: string]: Relationship }): void;

  setChildrenRelationships(arg0: { [index: string]: Relationship }): void;

  setContainer(arg0: Sample): void;

  getContainerHistory(): HistoryEntry[];

  setContainerHistory(arg0: HistoryEntry[]): void;

  getParentRelationship(arg0: ISampleId): Relationship;

  getChildRelationship(arg0: ISampleId): Relationship;

  getProject(): Project;

  setProject(arg0: Project): void;

  getParents(): Sample[];

  getComponents(): Sample[];

  getContainer(): Sample;

  getMetaData(): { [index: string]: string };

  getHistory(): HistoryEntry[];

  getCode(): string;

  setCode(arg0: string): void;

  setChildren(arg0: Sample[]): void;

  setComponents(arg0: Sample[]): void;

  getTags(): Tag[];

  setTags(arg0: Tag[]): void;

  setIdentifier(arg0: SampleIdentifier): void;

  setType(arg0: SampleType): void;

  getIdentifier(): SampleIdentifier;

  getIdentifier(): ObjectIdentifier;

  new (): Sample;
}

export interface SampleType
  extends Serializable,
    ICodeHolder,
    IDescriptionHolder,
    IEntityType,
    IModificationDateHolder,
    IPermIdHolder,
    IPropertyAssignmentsHolder,
    ISemanticAnnotationsHolder,
    IValidationPluginHolder {
  fetchOptions: SampleTypeFetchOptions;
  permId: EntityTypePermId;
  listable: boolean;
  subcodeUnique: boolean;
  autoGeneratedCode: boolean;
  showContainer: boolean;
  showParents: boolean;
  showParentMetadata: boolean;
  generatedCodePrefix: string;
  metaData: { [index: string]: string };

  getFetchOptions(): SampleTypeFetchOptions;

  setFetchOptions(arg0: SampleTypeFetchOptions): void;

  setPermId(arg0: EntityTypePermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getPropertyAssignments(): PropertyAssignment[];

  getValidationPlugin(): Plugin;

  getSemanticAnnotations(): SemanticAnnotation[];

  getPermId(): IObjectId;

  getPermId(): EntityTypePermId;

  setPropertyAssignments(arg0: PropertyAssignment[]): void;

  setValidationPlugin(arg0: Plugin): void;

  isAutoGeneratedCode(): boolean;

  setAutoGeneratedCode(arg0: boolean): void;

  setMetaData(arg0: { [index: string]: string }): void;

  setSemanticAnnotations(arg0: SemanticAnnotation[]): void;

  isListable(): boolean;

  setListable(arg0: boolean): void;

  isSubcodeUnique(): boolean;

  setSubcodeUnique(arg0: boolean): void;

  isShowContainer(): boolean;

  setShowContainer(arg0: boolean): void;

  isShowParents(): boolean;

  setShowParents(arg0: boolean): void;

  isShowParentMetadata(): boolean;

  setShowParentMetadata(arg0: boolean): void;

  getGeneratedCodePrefix(): string;

  setGeneratedCodePrefix(arg0: string): void;

  setDescription(arg0: string): void;

  getMetaData(): { [index: string]: string };

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): SampleType;
}

export interface CreateSampleTypesOperation
  extends CreateObjectsOperation<SampleTypeCreation> {
  creations: SampleTypeCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateSampleTypesOperation;

  new (arg0: SampleTypeCreation[]): CreateSampleTypesOperation;

  new (arg0: SampleTypeCreation[]): CreateSampleTypesOperation;
}

export interface CreateSampleTypesOperationResult
  extends CreateObjectsOperationResult<EntityTypePermId> {
  objectIds: EntityTypePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateSampleTypesOperationResult;

  new (arg0: EntityTypePermId[]): CreateSampleTypesOperationResult;
}

export interface CreateSamplesOperation
  extends CreateObjectsOperation<SampleCreation> {
  creations: SampleCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateSamplesOperation;

  new (arg0: SampleCreation[]): CreateSamplesOperation;

  new (arg0: SampleCreation[]): CreateSamplesOperation;
}

export interface CreateSamplesOperationResult
  extends CreateObjectsOperationResult<SamplePermId> {
  objectIds: SamplePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateSamplesOperationResult;

  new (arg0: SamplePermId[]): CreateSamplesOperationResult;
}

export interface SampleCreation
  extends ICreation,
    ICreationIdHolder,
    IPropertiesHolder,
    IObjectCreation {
  typeId: IEntityTypeId;
  experimentId: IExperimentId;
  projectId: IProjectId;
  spaceId: ISpaceId;
  code: string;
  autoGeneratedCode: boolean;
  tagIds: ITagId[];
  containerId: ISampleId;
  componentIds: ISampleId[];
  parentIds: ISampleId[];
  childIds: ISampleId[];
  relationships: { [index: string]: Relationship };
  attachments: AttachmentCreation[];
  metaData: { [index: string]: string };

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  getBooleanProperty(arg0: string): boolean;

  getTypeId(): IEntityTypeId;

  setTypeId(arg0: IEntityTypeId): void;

  getCreationId(): CreationId;

  setCreationId(arg0: CreationId): void;

  getAttachments(): AttachmentCreation[];

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  getExperimentId(): IExperimentId;

  setExperimentId(arg0: IExperimentId): void;

  getTagIds(): ITagId[];

  setTagIds(arg0: ITagId[]): void;

  getComponentIds(): ISampleId[];

  setComponentIds(arg0: ISampleId[]): void;

  getParentIds(): ISampleId[];

  setParentIds(arg0: ISampleId[]): void;

  getChildIds(): ISampleId[];

  setChildIds(arg0: ISampleId[]): void;

  isAutoGeneratedCode(): boolean;

  setAutoGeneratedCode(arg0: boolean): void;

  setMetaData(arg0: { [index: string]: string }): void;

  setProjectId(arg0: IProjectId): void;

  setAttachments(arg0: AttachmentCreation[]): void;

  getSpaceId(): ISpaceId;

  setSpaceId(arg0: ISpaceId): void;

  getContainerId(): ISampleId;

  setContainerId(arg0: ISampleId): void;

  getRelationships(): { [index: string]: Relationship };

  setRelationships(arg0: { [index: string]: Relationship }): void;

  relationship(arg0: ISampleId): Relationship;

  getProjectId(): IProjectId;

  getMetaData(): { [index: string]: string };

  getCode(): string;

  setCode(arg0: string): void;

  new (): SampleCreation;
}

export interface SampleTypeCreation extends IEntityTypeCreation {
  autoGeneratedCode: boolean;
  generatedCodePrefix: string;
  subcodeUnique: boolean;
  listable: boolean;
  showContainer: boolean;
  showParents: boolean;
  showParentMetadata: boolean;
  metaData: { [index: string]: string };

  getPropertyAssignments(): PropertyAssignmentCreation[];

  setPropertyAssignments(arg0: PropertyAssignmentCreation[]): void;

  isAutoGeneratedCode(): boolean;

  setAutoGeneratedCode(arg0: boolean): void;

  getValidationPluginId(): IPluginId;

  setValidationPluginId(arg0: IPluginId): void;

  setMetaData(arg0: { [index: string]: string }): void;

  isListable(): boolean;

  setListable(arg0: boolean): void;

  isSubcodeUnique(): boolean;

  setSubcodeUnique(arg0: boolean): void;

  isShowContainer(): boolean;

  setShowContainer(arg0: boolean): void;

  isShowParents(): boolean;

  setShowParents(arg0: boolean): void;

  isShowParentMetadata(): boolean;

  setShowParentMetadata(arg0: boolean): void;

  getGeneratedCodePrefix(): string;

  setGeneratedCodePrefix(arg0: string): void;

  setDescription(arg0: string): void;

  getMetaData(): { [index: string]: string };

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): SampleTypeCreation;
}

export interface DeleteSampleTypesOperation
  extends DeleteObjectsOperation<IEntityTypeId, SampleTypeDeletionOptions> {
  options: SampleTypeDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteSampleTypesOperation;

  new (
    arg0: IEntityTypeId[],
    arg1: SampleTypeDeletionOptions,
  ): DeleteSampleTypesOperation;
}

export interface DeleteSampleTypesOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteSampleTypesOperationResult;
}

export interface DeleteSamplesOperation
  extends DeleteObjectsOperation<ISampleId, SampleDeletionOptions> {
  options: SampleDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteSamplesOperation;

  new (arg0: ISampleId[], arg1: SampleDeletionOptions): DeleteSamplesOperation;
}

export interface DeleteSamplesOperationResult
  extends DeleteObjectsWithTrashOperationResult {
  getMessage(): string;

  getDeletionId(): IDeletionId;

  new (): DeleteSamplesOperationResult;

  new (arg0: IDeletionId): DeleteSamplesOperationResult;
}

export interface SampleDeletionOptions
  extends AbstractObjectDeletionOptions<SampleDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): SampleDeletionOptions;
}

export interface SampleTypeDeletionOptions
  extends AbstractObjectDeletionOptions<SampleTypeDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): SampleTypeDeletionOptions;
}

export interface SampleFetchOptions extends FetchOptions<Sample>, Serializable {
  type: SampleTypeFetchOptions;
  project: ProjectFetchOptions;
  space: SpaceFetchOptions;
  experiment: ExperimentFetchOptions;
  properties: PropertyFetchOptions;
  materialProperties: MaterialFetchOptions;
  sampleProperties: SampleFetchOptions;
  parents: SampleFetchOptions;
  children: SampleFetchOptions;
  container: SampleFetchOptions;
  components: SampleFetchOptions;
  dataSets: DataSetFetchOptions;
  history: HistoryEntryFetchOptions;
  propertiesHistory: HistoryEntryFetchOptions;
  spaceHistory: HistoryEntryFetchOptions;
  projectHistory: HistoryEntryFetchOptions;
  experimentHistory: HistoryEntryFetchOptions;
  parentsHistory: HistoryEntryFetchOptions;
  childrenHistory: HistoryEntryFetchOptions;
  containerHistory: HistoryEntryFetchOptions;
  componentsHistory: HistoryEntryFetchOptions;
  dataSetsHistory: HistoryEntryFetchOptions;
  unknownHistory: HistoryEntryFetchOptions;
  tags: TagFetchOptions;
  registrator: PersonFetchOptions;
  modifier: PersonFetchOptions;
  attachments: AttachmentFetchOptions;
  sort: SampleSortOptions;
  sortBy: SampleSortOptions;

  withModifier(): PersonFetchOptions;

  hasRegistrator(): boolean;

  getSortBy(): SampleSortOptions;

  getSortBy(): SortOptions<any>;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasType(): boolean;

  hasExperiment(): boolean;

  hasProperties(): boolean;

  hasMaterialProperties(): boolean;

  hasSampleProperties(): boolean;

  hasParents(): boolean;

  hasComponents(): boolean;

  hasTags(): boolean;

  hasHistory(): boolean;

  hasPropertiesHistory(): boolean;

  hasExperimentHistory(): boolean;

  hasParentsHistory(): boolean;

  hasChildrenHistory(): boolean;

  hasComponentsHistory(): boolean;

  hasUnknownHistory(): boolean;

  hasModifier(): boolean;

  withTypeUsing(arg0: SampleTypeFetchOptions): SampleTypeFetchOptions;

  withExperiment(): ExperimentFetchOptions;

  withExperimentUsing(arg0: ExperimentFetchOptions): ExperimentFetchOptions;

  withPropertiesUsing(arg0: PropertyFetchOptions): PropertyFetchOptions;

  withMaterialProperties(): MaterialFetchOptions;

  withMaterialPropertiesUsing(arg0: MaterialFetchOptions): MaterialFetchOptions;

  withSampleProperties(): SampleFetchOptions;

  withSamplePropertiesUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  withParents(): SampleFetchOptions;

  withParentsUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  withChildren(): SampleFetchOptions;

  withChildrenUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  withComponents(): SampleFetchOptions;

  withComponentsUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  withTags(): TagFetchOptions;

  withTagsUsing(arg0: TagFetchOptions): TagFetchOptions;

  withHistory(): HistoryEntryFetchOptions;

  withHistoryUsing(arg0: HistoryEntryFetchOptions): HistoryEntryFetchOptions;

  withPropertiesHistory(): HistoryEntryFetchOptions;

  withPropertiesHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withExperimentHistory(): HistoryEntryFetchOptions;

  withExperimentHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withParentsHistory(): HistoryEntryFetchOptions;

  withParentsHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withChildrenHistory(): HistoryEntryFetchOptions;

  withChildrenHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withComponentsHistory(): HistoryEntryFetchOptions;

  withComponentsHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withUnknownHistory(): HistoryEntryFetchOptions;

  withUnknownHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withModifierUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  withContainer(): SampleFetchOptions;

  hasProject(): boolean;

  hasDataSets(): boolean;

  hasProjectHistory(): boolean;

  hasDataSetsHistory(): boolean;

  hasAttachments(): boolean;

  withProject(): ProjectFetchOptions;

  withProjectUsing(arg0: ProjectFetchOptions): ProjectFetchOptions;

  withDataSets(): DataSetFetchOptions;

  withDataSetsUsing(arg0: DataSetFetchOptions): DataSetFetchOptions;

  withProjectHistory(): HistoryEntryFetchOptions;

  withProjectHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withDataSetsHistory(): HistoryEntryFetchOptions;

  withDataSetsHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withAttachments(): AttachmentFetchOptions;

  withAttachmentsUsing(arg0: AttachmentFetchOptions): AttachmentFetchOptions;

  hasSpace(): boolean;

  withSpace(): SpaceFetchOptions;

  withSpaceUsing(arg0: SpaceFetchOptions): SpaceFetchOptions;

  hasSpaceHistory(): boolean;

  withSpaceHistory(): HistoryEntryFetchOptions;

  withSpaceHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  withContainerUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  withContainerHistory(): HistoryEntryFetchOptions;

  withContainerHistoryUsing(
    arg0: HistoryEntryFetchOptions,
  ): HistoryEntryFetchOptions;

  hasContainer(): boolean;

  hasContainerHistory(): boolean;

  withProperties(): PropertyFetchOptions;

  withType(): SampleTypeFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): SampleSortOptions;

  hasChildren(): boolean;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): SampleFetchOptions;
}

export interface SampleSortOptions
  extends EntityWithPropertiesSortOptions<Sample> {
  identifier: SortOrder;

  getIdentifier(): SortOrder;

  identifier(): SortOrder;

  type(): SortOrder;

  getProperty(arg0: string): SortOrder;

  getType(): SortOrder;

  property(arg0: string): SortOrder;

  fetchedFieldsScore(): SortOrder;

  getFetchedFieldsScore(): SortOrder;

  stringMatchPropertyScore(arg0: string, arg1: string): SortOrder;

  stringPrefixMatchPropertyScore(arg0: string, arg1: string): SortOrder;

  stringMatchAnyPropertyScore(arg0: string): SortOrder;

  stringPrefixMatchAnyPropertyScore(arg0: string): SortOrder;

  code(): SortOrder;

  registrationDate(): SortOrder;

  getRegistrationDate(): SortOrder;

  permId(): SortOrder;

  modificationDate(): SortOrder;

  getModificationDate(): SortOrder;

  getPermId(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): SampleSortOptions;
}

export interface SampleTypeFetchOptions
  extends FetchOptions<SampleType>,
    Serializable {
  propertyAssignments: PropertyAssignmentFetchOptions;
  semanticAnnotations: SemanticAnnotationFetchOptions;
  validationPlugin: PluginFetchOptions;
  sort: SampleTypeSortOptions;
  sortBy: SampleTypeSortOptions;

  getSortBy(): SampleTypeSortOptions;

  getSortBy(): SortOptions<any>;

  hasPropertyAssignments(): boolean;

  hasValidationPlugin(): boolean;

  withPropertyAssignments(): PropertyAssignmentFetchOptions;

  withPropertyAssignmentsUsing(
    arg0: PropertyAssignmentFetchOptions,
  ): PropertyAssignmentFetchOptions;

  withValidationPlugin(): PluginFetchOptions;

  withValidationPluginUsing(arg0: PluginFetchOptions): PluginFetchOptions;

  hasSemanticAnnotations(): boolean;

  withSemanticAnnotations(): SemanticAnnotationFetchOptions;

  withSemanticAnnotationsUsing(
    arg0: SemanticAnnotationFetchOptions,
  ): SemanticAnnotationFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): SampleTypeSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): SampleTypeFetchOptions;
}

export interface SampleTypeSortOptions extends SortOptions<SampleType> {
  getSortings(): Sorting[];

  new (): SampleTypeSortOptions;
}

export interface GetSampleTypesOperation
  extends GetObjectsOperation<IEntityTypeId, SampleTypeFetchOptions> {
  fetchOptions: SampleTypeFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetSampleTypesOperation;

  new (
    arg0: IEntityTypeId[],
    arg1: SampleTypeFetchOptions,
  ): GetSampleTypesOperation;
}

export interface GetSampleTypesOperationResult
  extends GetObjectsOperationResult<IEntityTypeId, SampleType> {
  ids: IEntityTypeId[];
  objects: SampleType[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetSampleTypesOperationResult;

  new (arg0: { [index: string]: SampleType }): GetSampleTypesOperationResult;
}

export interface GetSamplesOperation
  extends GetObjectsOperation<ISampleId, SampleFetchOptions> {
  fetchOptions: SampleFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetSamplesOperation;

  new (arg0: ISampleId[], arg1: SampleFetchOptions): GetSamplesOperation;
}

export interface GetSamplesOperationResult
  extends GetObjectsOperationResult<ISampleId, Sample> {
  ids: ISampleId[];
  objects: Sample[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetSamplesOperationResult;

  new (arg0: { [index: string]: Sample }): GetSamplesOperationResult;
}

export interface ISampleId extends IObjectId {}

export interface SampleIdDeserializer extends KeyDeserializer {
  deserializeKey(
    arg0: string,
    arg1: $com$fasterxml$jackson$databind$DeserializationContext$,
  ): ISampleId;

  deserializeKey(
    arg0: string,
    arg1: $com$fasterxml$jackson$databind$DeserializationContext$,
  ): any;

  new (): SampleIdDeserializer;
}

export interface SampleIdentifier extends ObjectIdentifier, ISampleId {
  getIdentifier(): string;

  new (): SampleIdentifier;

  new (
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
  ): SampleIdentifier;

  new (arg0: string, arg1: string, arg2: string): SampleIdentifier;

  new (arg0: string): SampleIdentifier;
}

export interface SamplePermId extends ObjectPermId, ISampleId {
  getPermId(): string;

  new (arg0: string): SamplePermId;

  new (): SamplePermId;
}

export interface AbstractSampleSearchCriteria<T>
  extends AbstractEntitySearchCriteria<ISampleId> {
  relation: SampleSearchRelation;

  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): T;

  withAndOperator(): T;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withExperiment(): ExperimentSearchCriteria;

  withoutExperiment(): T;

  getRelation(): SampleSearchRelation;

  withIdentifier(): IdentifierSearchCriteria;

  withProject(): ProjectSearchCriteria;

  withSpace(): SpaceSearchCriteria;

  withoutSpace(): T;

  withoutProject(): T;

  withoutContainer(): T;

  withType(): SampleTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (arg0: SampleSearchRelation): AbstractSampleSearchCriteria<any>;
}

export interface ListableSampleTypeSearchCriteria
  extends AbstractSearchCriteria {
  listable: boolean;

  thatEquals(arg0: boolean): void;

  isListable(): boolean;

  setListable(arg0: boolean): void;

  isNegated(): boolean;

  new (): ListableSampleTypeSearchCriteria;
}

export interface NoSampleContainerSearchCriteria
  extends NoSampleSearchCriteria {
  isNegated(): boolean;

  new (): NoSampleContainerSearchCriteria;
}

export interface NoSampleSearchCriteria extends ISearchCriteria {
  isNegated(): boolean;

  new (): NoSampleSearchCriteria;
}

export interface SampleChildrenSearchCriteria
  extends AbstractSampleSearchCriteria<SampleChildrenSearchCriteria> {
  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): T;

  withAndOperator(): T;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withExperiment(): ExperimentSearchCriteria;

  withoutExperiment(): T;

  getRelation(): SampleSearchRelation;

  withIdentifier(): IdentifierSearchCriteria;

  withProject(): ProjectSearchCriteria;

  withSpace(): SpaceSearchCriteria;

  withoutSpace(): T;

  withoutProject(): T;

  withoutContainer(): T;

  withType(): SampleTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (): SampleChildrenSearchCriteria;
}

export interface SampleContainerSearchCriteria
  extends AbstractSampleSearchCriteria<SampleContainerSearchCriteria> {
  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): T;

  withAndOperator(): T;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withExperiment(): ExperimentSearchCriteria;

  withoutExperiment(): T;

  getRelation(): SampleSearchRelation;

  withIdentifier(): IdentifierSearchCriteria;

  withProject(): ProjectSearchCriteria;

  withSpace(): SpaceSearchCriteria;

  withoutSpace(): T;

  withoutProject(): T;

  withoutContainer(): T;

  withType(): SampleTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (): SampleContainerSearchCriteria;
}

export interface SampleParentsSearchCriteria
  extends AbstractSampleSearchCriteria<SampleParentsSearchCriteria> {
  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): T;

  withAndOperator(): T;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withExperiment(): ExperimentSearchCriteria;

  withoutExperiment(): T;

  getRelation(): SampleSearchRelation;

  withIdentifier(): IdentifierSearchCriteria;

  withProject(): ProjectSearchCriteria;

  withSpace(): SpaceSearchCriteria;

  withoutSpace(): T;

  withoutProject(): T;

  withoutContainer(): T;

  withType(): SampleTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (): SampleParentsSearchCriteria;
}

export interface SampleSearchCriteria
  extends AbstractSampleSearchCriteria<SampleSearchCriteria> {
  negate(): AbstractEntitySearchCriteria<any>;

  negate(): SampleSearchCriteria;

  withParents(): SampleParentsSearchCriteria;

  withChildren(): SampleChildrenSearchCriteria;

  withContainer(): SampleContainerSearchCriteria;

  withSubcriteria(): SampleSearchCriteria;

  withTextAttribute(): TextAttributeSearchCriteria;

  withOrOperator(): AbstractEntitySearchCriteria<any>;

  withOrOperator(): T;

  withAndOperator(): T;

  withAndOperator(): AbstractEntitySearchCriteria<any>;

  withExperiment(): ExperimentSearchCriteria;

  withoutExperiment(): T;

  getRelation(): SampleSearchRelation;

  withIdentifier(): IdentifierSearchCriteria;

  withProject(): ProjectSearchCriteria;

  withSpace(): SpaceSearchCriteria;

  withoutSpace(): T;

  withoutProject(): T;

  withoutContainer(): T;

  withType(): SampleTypeSearchCriteria;

  withModifier(): ModifierSearchCriteria;

  withProperty(arg0: string): StringPropertySearchCriteria;

  withRegistrator(): RegistratorSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  isNegated(): boolean;

  withRegistrationDate(): RegistrationDateSearchCriteria;

  withModificationDate(): ModificationDateSearchCriteria;

  withTag(): TagSearchCriteria;

  withNumberProperty(arg0: string): NumberPropertySearchCriteria;

  withStringProperty(arg0: string): StrictlyStringPropertySearchCriteria;

  withDateProperty(arg0: string): DatePropertySearchCriteria;

  withBooleanProperty(arg0: string): BooleanPropertySearchCriteria;

  withSampleProperty(arg0: string): SamplePropertySearchCriteria;

  withVocabularyProperty(
    arg0: string,
  ): ControlledVocabularyPropertySearchCriteria;

  withAnyProperty(): AnyPropertySearchCriteria;

  withAnyStringProperty(): AnyStringPropertySearchCriteria;

  withAnyNumberProperty(): AnyNumberPropertySearchCriteria;

  withAnyDateProperty(): AnyDatePropertySearchCriteria;

  withAnyBooleanProperty(): AnyBooleanPropertySearchCriteria;

  withAnyField(): AnyFieldSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  new (): SampleSearchCriteria;
}

export interface SampleTypeSearchCriteria
  extends AbstractEntityTypeSearchCriteria {
  withOrOperator(): SampleTypeSearchCriteria;

  withAndOperator(): SampleTypeSearchCriteria;

  withSemanticAnnotations(): SemanticAnnotationSearchCriteria;

  withListable(): ListableSampleTypeSearchCriteria;

  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withPropertyAssignments(): PropertyAssignmentSearchCriteria;

  withIds(): IdsSearchCriteria<IEntityTypeId>;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): SampleTypeSearchCriteria;
}

export interface SearchSampleTypesOperation
  extends SearchObjectsOperation<
    SampleTypeSearchCriteria,
    SampleTypeFetchOptions
  > {
  criteria: SampleTypeSearchCriteria;
  fetchOptions: SampleTypeFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchSampleTypesOperation;

  new (
    arg0: SampleTypeSearchCriteria,
    arg1: SampleTypeFetchOptions,
  ): SearchSampleTypesOperation;
}

export interface SearchSampleTypesOperationResult
  extends SearchObjectsOperationResult<SampleType> {
  searchResult: SearchResult<SampleType>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchSampleTypesOperationResult;

  new (arg0: SearchResult<SampleType>): SearchSampleTypesOperationResult;
}

export interface SearchSamplesOperation
  extends SearchObjectsOperation<SampleSearchCriteria, SampleFetchOptions> {
  criteria: SampleSearchCriteria;
  fetchOptions: SampleFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchSamplesOperation;

  new (
    arg0: SampleSearchCriteria,
    arg1: SampleFetchOptions,
  ): SearchSamplesOperation;
}

export interface SearchSamplesOperationResult
  extends SearchObjectsOperationResult<Sample> {
  searchResult: SearchResult<Sample>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchSamplesOperationResult;

  new (arg0: SearchResult<Sample>): SearchSamplesOperationResult;
}

export interface SampleTypeUpdate
  extends IEntityTypeUpdate,
    IMetaDataUpdateHolder {
  autoGeneratedCode: FieldUpdateValue<boolean>;
  generatedCodePrefix: FieldUpdateValue<string>;
  subcodeUnique: FieldUpdateValue<boolean>;
  listable: FieldUpdateValue<boolean>;
  showContainer: FieldUpdateValue<boolean>;
  showParents: FieldUpdateValue<boolean>;
  showParentMetadata: FieldUpdateValue<boolean>;

  getTypeId(): IEntityTypeId;

  setTypeId(arg0: IEntityTypeId): void;

  getObjectId(): IObjectId;

  getObjectId(): IEntityTypeId;

  getPropertyAssignments(): PropertyAssignmentListUpdateValue;

  isAutoGeneratedCode(): FieldUpdateValue<boolean>;

  setAutoGeneratedCode(arg0: boolean): void;

  getValidationPluginId(): FieldUpdateValue<IPluginId>;

  setValidationPluginId(arg0: IPluginId): void;

  setPropertyAssignmentActions(arg0: ListUpdateAction<any>[]): void;

  setMetaDataActions(arg0: ListUpdateAction<any>[]): void;

  isListable(): FieldUpdateValue<boolean>;

  setListable(arg0: boolean): void;

  isSubcodeUnique(): FieldUpdateValue<boolean>;

  setSubcodeUnique(arg0: boolean): void;

  isShowContainer(): FieldUpdateValue<boolean>;

  setShowContainer(arg0: boolean): void;

  isShowParents(): FieldUpdateValue<boolean>;

  setShowParents(arg0: boolean): void;

  isShowParentMetadata(): FieldUpdateValue<boolean>;

  setShowParentMetadata(arg0: boolean): void;

  getGeneratedCodePrefix(): FieldUpdateValue<string>;

  setGeneratedCodePrefix(arg0: string): void;

  setDescription(arg0: string): void;

  getMetaData(): ListUpdateMapValues;

  getDescription(): FieldUpdateValue<string>;

  new (): SampleTypeUpdate;
}

export interface SampleUpdate
  extends IUpdate,
    IPropertiesHolder,
    IObjectUpdate<ISampleId>,
    IMetaDataUpdateHolder {
  sampleId: ISampleId;
  freeze: boolean;
  freezeForComponents: boolean;
  freezeForChildren: boolean;
  freezeForParents: boolean;
  freezeForDataSets: boolean;
  experimentId: FieldUpdateValue<IExperimentId>;
  projectId: FieldUpdateValue<IProjectId>;
  spaceId: FieldUpdateValue<ISpaceId>;
  tagIds: IdListUpdateValue<ITagId>;
  containerId: FieldUpdateValue<ISampleId>;
  componentIds: IdListUpdateValue<ISampleId>;
  parentIds: IdListUpdateValue<ISampleId>;
  childIds: IdListUpdateValue<ISampleId>;
  relationships: { [index: string]: RelationshipUpdate };
  attachments: AttachmentListUpdateValue;

  getProperty(arg0: string): string;

  setProperty(arg0: string, arg1: string): void;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  freeze(): void;

  getBooleanProperty(arg0: string): boolean;

  getObjectId(): ISampleId;

  getObjectId(): IObjectId;

  getAttachments(): AttachmentListUpdateValue;

  getIntegerProperty(arg0: string): number;

  setIntegerProperty(arg0: string, arg1: number): void;

  getVarcharProperty(arg0: string): string;

  setVarcharProperty(arg0: string, arg1: string): void;

  getMultilineVarcharProperty(arg0: string): string;

  setMultilineVarcharProperty(arg0: string, arg1: string): void;

  getRealProperty(arg0: string): number;

  setRealProperty(arg0: string, arg1: number): void;

  getTimestampProperty(arg0: string): Date;

  setTimestampProperty(arg0: string, arg1: Date): void;

  setBooleanProperty(arg0: string, arg1: boolean): void;

  getControlledVocabularyProperty(arg0: string): string;

  setControlledVocabularyProperty(arg0: string, arg1: string): void;

  getSampleProperty(arg0: string): SamplePermId;

  setSampleProperty(arg0: string, arg1: SamplePermId): void;

  getHyperlinkProperty(arg0: string): string;

  setHyperlinkProperty(arg0: string, arg1: string): void;

  getXmlProperty(arg0: string): string;

  setXmlProperty(arg0: string, arg1: string): void;

  getIntegerArrayProperty(arg0: string): number[];

  setIntegerArrayProperty(arg0: string, arg1: number[]): void;

  getRealArrayProperty(arg0: string): number[];

  setRealArrayProperty(arg0: string, arg1: number[]): void;

  getStringArrayProperty(arg0: string): string[];

  setStringArrayProperty(arg0: string, arg1: string[]): void;

  getTimestampArrayProperty(arg0: string): Date[];

  setTimestampArrayProperty(arg0: string, arg1: Date[]): void;

  getJsonProperty(arg0: string): string;

  setJsonProperty(arg0: string, arg1: string): void;

  getExperimentId(): FieldUpdateValue<IExperimentId>;

  setExperimentId(arg0: IExperimentId): void;

  getSampleId(): ISampleId;

  setSampleId(arg0: ISampleId): void;

  getTagIds(): IdListUpdateValue<ITagId>;

  getComponentIds(): IdListUpdateValue<ISampleId>;

  getParentIds(): IdListUpdateValue<ISampleId>;

  getChildIds(): IdListUpdateValue<ISampleId>;

  shouldBeFrozenForChildren(): boolean;

  shouldBeFrozenForParents(): boolean;

  shouldBeFrozenForComponents(): boolean;

  setTagActions(arg0: ListUpdateAction<ITagId>[]): void;

  setComponentActions(arg0: ListUpdateAction<ISampleId>[]): void;

  setParentActions(arg0: ListUpdateAction<ISampleId>[]): void;

  setChildActions(arg0: ListUpdateAction<ISampleId>[]): void;

  setMetaDataActions(arg0: ListUpdateAction<any>[]): void;

  freezeForChildren(): void;

  freezeForParents(): void;

  freezeForComponents(): void;

  shouldBeFrozen(): boolean;

  setProjectId(arg0: IProjectId): void;

  freezeForDataSets(): void;

  shouldBeFrozenForDataSets(): boolean;

  setAttachmentsActions(arg0: ListUpdateAction<any>[]): void;

  getSpaceId(): FieldUpdateValue<ISpaceId>;

  setSpaceId(arg0: ISpaceId): void;

  getContainerId(): FieldUpdateValue<ISampleId>;

  setContainerId(arg0: ISampleId): void;

  getRelationships(): { [index: string]: RelationshipUpdate };

  setRelationships(arg0: { [index: string]: RelationshipUpdate }): void;

  relationship(arg0: ISampleId): RelationshipUpdate;

  getProjectId(): FieldUpdateValue<IProjectId>;

  getMetaData(): ListUpdateMapValues;

  new (): SampleUpdate;
}

export interface UpdateSampleTypesOperation
  extends UpdateObjectsOperation<SampleTypeUpdate> {
  updates: SampleTypeUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateSampleTypesOperation;

  new (arg0: SampleTypeUpdate[]): UpdateSampleTypesOperation;

  new (arg0: SampleTypeUpdate[]): UpdateSampleTypesOperation;
}

export interface UpdateSampleTypesOperationResult
  extends UpdateObjectsOperationResult<EntityTypePermId> {
  objectIds: EntityTypePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateSampleTypesOperationResult;

  new (arg0: EntityTypePermId[]): UpdateSampleTypesOperationResult;
}

export interface UpdateSamplesOperation
  extends UpdateObjectsOperation<SampleUpdate> {
  updates: SampleUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateSamplesOperation;

  new (arg0: SampleUpdate[]): UpdateSamplesOperation;

  new (arg0: SampleUpdate[]): UpdateSamplesOperation;
}

export interface UpdateSamplesOperationResult
  extends UpdateObjectsOperationResult<SamplePermId> {
  objectIds: SamplePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateSamplesOperationResult;

  new (arg0: SamplePermId[]): UpdateSamplesOperationResult;
}

export interface SemanticAnnotation extends Serializable, IPermIdHolder {
  fetchOptions: SemanticAnnotationFetchOptions;
  entityType: IEntityType;
  propertyType: PropertyType;
  propertyAssignment: PropertyAssignment;
  permId: SemanticAnnotationPermId;
  predicateOntologyId: string;
  predicateOntologyVersion: string;
  predicateAccessionId: string;
  descriptorOntologyId: string;
  descriptorOntologyVersion: string;
  descriptorAccessionId: string;
  creationDate: Date;

  getFetchOptions(): SemanticAnnotationFetchOptions;

  setFetchOptions(arg0: SemanticAnnotationFetchOptions): void;

  setPermId(arg0: SemanticAnnotationPermId): void;

  getPermId(): SemanticAnnotationPermId;

  getPermId(): IObjectId;

  setPredicateOntologyId(arg0: string): void;

  setDescriptorOntologyId(arg0: string): void;

  setPredicateOntologyVersion(arg0: string): void;

  setDescriptorOntologyVersion(arg0: string): void;

  setPredicateAccessionId(arg0: string): void;

  setDescriptorAccessionId(arg0: string): void;

  getEntityType(): IEntityType;

  setEntityType(arg0: IEntityType): void;

  getCreationDate(): Date;

  setCreationDate(arg0: Date): void;

  getPropertyAssignment(): PropertyAssignment;

  setPropertyAssignment(arg0: PropertyAssignment): void;

  getPredicateOntologyId(): string;

  getPredicateOntologyVersion(): string;

  getPredicateAccessionId(): string;

  getDescriptorOntologyId(): string;

  getDescriptorOntologyVersion(): string;

  getDescriptorAccessionId(): string;

  getPropertyType(): PropertyType;

  setPropertyType(arg0: PropertyType): void;

  new (): SemanticAnnotation;
}

export interface CreateSemanticAnnotationsOperation
  extends CreateObjectsOperation<SemanticAnnotationCreation> {
  creations: SemanticAnnotationCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateSemanticAnnotationsOperation;

  new (arg0: SemanticAnnotationCreation[]): CreateSemanticAnnotationsOperation;

  new (arg0: SemanticAnnotationCreation[]): CreateSemanticAnnotationsOperation;
}

export interface CreateSemanticAnnotationsOperationResult
  extends CreateObjectsOperationResult<SemanticAnnotationPermId> {
  objectIds: SemanticAnnotationPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateSemanticAnnotationsOperationResult;

  new (
    arg0: SemanticAnnotationPermId[],
  ): CreateSemanticAnnotationsOperationResult;
}

export interface SemanticAnnotationCreation extends ICreation, IObjectCreation {
  entityTypeId: IEntityTypeId;
  propertyTypeId: IPropertyTypeId;
  propertyAssignmentId: IPropertyAssignmentId;
  predicateOntologyId: string;
  predicateOntologyVersion: string;
  predicateAccessionId: string;
  descriptorOntologyId: string;
  descriptorOntologyVersion: string;
  descriptorAccessionId: string;

  setEntityTypeId(arg0: IEntityTypeId): void;

  setPredicateOntologyId(arg0: string): void;

  setDescriptorOntologyId(arg0: string): void;

  setPredicateOntologyVersion(arg0: string): void;

  setDescriptorOntologyVersion(arg0: string): void;

  setPredicateAccessionId(arg0: string): void;

  setDescriptorAccessionId(arg0: string): void;

  setPropertyAssignmentId(arg0: IPropertyAssignmentId): void;

  setPropertyTypeId(arg0: IPropertyTypeId): void;

  getPropertyTypeId(): IPropertyTypeId;

  getEntityTypeId(): IEntityTypeId;

  getPropertyAssignmentId(): IPropertyAssignmentId;

  getPredicateOntologyId(): string;

  getPredicateOntologyVersion(): string;

  getPredicateAccessionId(): string;

  getDescriptorOntologyId(): string;

  getDescriptorOntologyVersion(): string;

  getDescriptorAccessionId(): string;

  new (): SemanticAnnotationCreation;
}

export interface DeleteSemanticAnnotationsOperation
  extends DeleteObjectsOperation<
    ISemanticAnnotationId,
    SemanticAnnotationDeletionOptions
  > {
  options: SemanticAnnotationDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteSemanticAnnotationsOperation;

  new (
    arg0: ISemanticAnnotationId[],
    arg1: SemanticAnnotationDeletionOptions,
  ): DeleteSemanticAnnotationsOperation;
}

export interface DeleteSemanticAnnotationsOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteSemanticAnnotationsOperationResult;
}

export interface SemanticAnnotationDeletionOptions
  extends AbstractObjectDeletionOptions<SemanticAnnotationDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): SemanticAnnotationDeletionOptions;
}

export interface SemanticAnnotationFetchOptions
  extends FetchOptions<SemanticAnnotation>,
    Serializable {
  entityType: EntityTypeFetchOptions;
  propertyType: PropertyTypeFetchOptions;
  propertyAssignment: PropertyAssignmentFetchOptions;
  sort: SemanticAnnotationSortOptions;
  sortBy: SemanticAnnotationSortOptions;

  getSortBy(): SortOptions<any>;

  getSortBy(): SemanticAnnotationSortOptions;

  withEntityType(): EntityTypeFetchOptions;

  hasEntityType(): boolean;

  hasPropertyType(): boolean;

  withEntityTypeUsing(arg0: EntityTypeFetchOptions): EntityTypeFetchOptions;

  withPropertyType(): PropertyTypeFetchOptions;

  withPropertyTypeUsing(
    arg0: PropertyTypeFetchOptions,
  ): PropertyTypeFetchOptions;

  hasPropertyAssignment(): boolean;

  withPropertyAssignment(): PropertyAssignmentFetchOptions;

  withPropertyAssignmentUsing(
    arg0: PropertyAssignmentFetchOptions,
  ): PropertyAssignmentFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): SemanticAnnotationSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): SemanticAnnotationFetchOptions;
}

export interface SemanticAnnotationSortOptions
  extends SortOptions<SemanticAnnotation> {
  getSortings(): Sorting[];

  new (): SemanticAnnotationSortOptions;
}

export interface GetSemanticAnnotationsOperation
  extends GetObjectsOperation<
    ISemanticAnnotationId,
    SemanticAnnotationFetchOptions
  > {
  fetchOptions: SemanticAnnotationFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetSemanticAnnotationsOperation;

  new (
    arg0: ISemanticAnnotationId[],
    arg1: SemanticAnnotationFetchOptions,
  ): GetSemanticAnnotationsOperation;
}

export interface GetSemanticAnnotationsOperationResult
  extends GetObjectsOperationResult<ISemanticAnnotationId, SemanticAnnotation> {
  ids: ISemanticAnnotationId[];
  objects: SemanticAnnotation[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetSemanticAnnotationsOperationResult;

  new (arg0: {
    [index: string]: SemanticAnnotation;
  }): GetSemanticAnnotationsOperationResult;
}

export interface ISemanticAnnotationId extends IObjectId {}

export interface SemanticAnnotationPermId
  extends ObjectPermId,
    ISemanticAnnotationId {
  getPermId(): string;

  new (arg0: string): SemanticAnnotationPermId;

  new (): SemanticAnnotationPermId;
}

export interface DescriptorAccessionIdSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): DescriptorAccessionIdSearchCriteria;
}

export interface DescriptorOntologyIdSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): DescriptorOntologyIdSearchCriteria;
}

export interface DescriptorOntologyVersionSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): DescriptorOntologyVersionSearchCriteria;
}

export interface PredicateAccessionIdSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): PredicateAccessionIdSearchCriteria;
}

export interface PredicateOntologyIdSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): PredicateOntologyIdSearchCriteria;
}

export interface PredicateOntologyVersionSearchCriteria
  extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): PredicateOntologyVersionSearchCriteria;
}

export interface SearchSemanticAnnotationsOperation
  extends SearchObjectsOperation<
    SemanticAnnotationSearchCriteria,
    SemanticAnnotationFetchOptions
  > {
  criteria: SemanticAnnotationSearchCriteria;
  fetchOptions: SemanticAnnotationFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchSemanticAnnotationsOperation;

  new (
    arg0: SemanticAnnotationSearchCriteria,
    arg1: SemanticAnnotationFetchOptions,
  ): SearchSemanticAnnotationsOperation;
}

export interface SearchSemanticAnnotationsOperationResult
  extends SearchObjectsOperationResult<SemanticAnnotation> {
  searchResult: SearchResult<SemanticAnnotation>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchSemanticAnnotationsOperationResult;

  new (
    arg0: SearchResult<SemanticAnnotation>,
  ): SearchSemanticAnnotationsOperationResult;
}

export interface SemanticAnnotationSearchCriteria
  extends AbstractObjectSearchCriteria<ISemanticAnnotationId> {
  withPermId(): PermIdSearchCriteria;

  withOrOperator(): SemanticAnnotationSearchCriteria;

  withAndOperator(): SemanticAnnotationSearchCriteria;

  withEntityType(): EntityTypeSearchCriteria;

  withPropertyType(): PropertyTypeSearchCriteria;

  withPropertyAssignment(): PropertyAssignmentSearchCriteria;

  withPredicateOntologyId(): PredicateOntologyIdSearchCriteria;

  withPredicateOntologyVersion(): PredicateOntologyVersionSearchCriteria;

  withPredicateAccessionId(): PredicateAccessionIdSearchCriteria;

  withDescriptorOntologyId(): DescriptorOntologyIdSearchCriteria;

  withDescriptorOntologyVersion(): DescriptorOntologyVersionSearchCriteria;

  withDescriptorAccessionId(): DescriptorAccessionIdSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): SemanticAnnotationSearchCriteria;
}

export interface SemanticAnnotationUpdate
  extends IUpdate,
    IObjectUpdate<ISemanticAnnotationId> {
  semanticAnnotationId: ISemanticAnnotationId;
  predicateOntologyId: FieldUpdateValue<string>;
  predicateOntologyVersion: FieldUpdateValue<string>;
  predicateAccessionId: FieldUpdateValue<string>;
  descriptorOntologyId: FieldUpdateValue<string>;
  descriptorOntologyVersion: FieldUpdateValue<string>;
  descriptorAccessionId: FieldUpdateValue<string>;

  getObjectId(): IObjectId;

  getObjectId(): ISemanticAnnotationId;

  setPredicateOntologyId(arg0: string): void;

  setDescriptorOntologyId(arg0: string): void;

  setPredicateOntologyVersion(arg0: string): void;

  setDescriptorOntologyVersion(arg0: string): void;

  setPredicateAccessionId(arg0: string): void;

  setDescriptorAccessionId(arg0: string): void;

  getPredicateOntologyId(): FieldUpdateValue<string>;

  getPredicateOntologyVersion(): FieldUpdateValue<string>;

  getPredicateAccessionId(): FieldUpdateValue<string>;

  getDescriptorOntologyId(): FieldUpdateValue<string>;

  getDescriptorOntologyVersion(): FieldUpdateValue<string>;

  getDescriptorAccessionId(): FieldUpdateValue<string>;

  getSemanticAnnotationId(): ISemanticAnnotationId;

  setSemanticAnnotationId(arg0: ISemanticAnnotationId): void;

  new (): SemanticAnnotationUpdate;
}

export interface UpdateSemanticAnnotationsOperation
  extends UpdateObjectsOperation<SemanticAnnotationUpdate> {
  updates: SemanticAnnotationUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateSemanticAnnotationsOperation;

  new (arg0: SemanticAnnotationUpdate[]): UpdateSemanticAnnotationsOperation;

  new (arg0: SemanticAnnotationUpdate[]): UpdateSemanticAnnotationsOperation;
}

export interface UpdateSemanticAnnotationsOperationResult
  extends UpdateObjectsOperationResult<SemanticAnnotationPermId> {
  objectIds: SemanticAnnotationPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateSemanticAnnotationsOperationResult;

  new (
    arg0: SemanticAnnotationPermId[],
  ): UpdateSemanticAnnotationsOperationResult;
}

export interface ServerInformation {}

export interface AggregationService
  extends INameHolder,
    ILabelHolder,
    IPermIdHolder,
    Serializable {
  fetchOptions: AggregationServiceFetchOptions;
  permId: DssServicePermId;

  getName(): string;

  setName(arg0: string): void;

  getFetchOptions(): AggregationServiceFetchOptions;

  setFetchOptions(arg0: AggregationServiceFetchOptions): void;

  setPermId(arg0: DssServicePermId): void;

  getPermId(): DssServicePermId;

  getPermId(): IObjectId;

  getLabel(): string;

  setLabel(arg0: string): void;

  new (): AggregationService;
}

export interface CustomASService extends ILabelHolder, Serializable {
  fetchOptions: CustomASServiceFetchOptions;
  code: CustomASServiceCode;
  description: string;

  getFetchOptions(): CustomASServiceFetchOptions;

  setFetchOptions(arg0: CustomASServiceFetchOptions): void;

  setDescription(arg0: string): void;

  getCode(): CustomASServiceCode;

  setCode(arg0: CustomASServiceCode): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  getDescription(): string;

  new (): CustomASService;
}

export interface CustomASServiceExecutionOptions
  extends AbstractExecutionOptionsWithParameters<
    CustomASServiceExecutionOptions,
    any
  > {
  parameters: { [index: string]: any };

  getParameters(): { [index: string]: V };

  withParameter(arg0: string, arg1: V): EO;

  new (): CustomASServiceExecutionOptions;
}

export interface ProcessingService
  extends INameHolder,
    ILabelHolder,
    IPermIdHolder,
    Serializable {
  fetchOptions: ProcessingServiceFetchOptions;
  permId: DssServicePermId;
  dataSetTypeCodes: string[];

  getName(): string;

  setName(arg0: string): void;

  getFetchOptions(): ProcessingServiceFetchOptions;

  setFetchOptions(arg0: ProcessingServiceFetchOptions): void;

  setPermId(arg0: DssServicePermId): void;

  getPermId(): IObjectId;

  getPermId(): DssServicePermId;

  getDataSetTypeCodes(): string[];

  setDataSetTypeCodes(arg0: string[]): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  new (): ProcessingService;
}

export interface ReportingService
  extends INameHolder,
    ILabelHolder,
    IPermIdHolder,
    Serializable {
  fetchOptions: ReportingServiceFetchOptions;
  permId: DssServicePermId;
  dataSetTypeCodes: string[];

  getName(): string;

  setName(arg0: string): void;

  getFetchOptions(): ReportingServiceFetchOptions;

  setFetchOptions(arg0: ReportingServiceFetchOptions): void;

  setPermId(arg0: DssServicePermId): void;

  getPermId(): IObjectId;

  getPermId(): DssServicePermId;

  getDataSetTypeCodes(): string[];

  setDataSetTypeCodes(arg0: string[]): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  new (): ReportingService;
}

export interface SearchDomainService
  extends Serializable,
    INameHolder,
    ILabelHolder,
    IPermIdHolder {
  fetchOptions: SearchDomainServiceFetchOptions;
  permId: DssServicePermId;
  possibleSearchOptionsKey: string;
  possibleSearchOptions: SearchDomainServiceSearchOption[];

  getName(): string;

  setName(arg0: string): void;

  getFetchOptions(): SearchDomainServiceFetchOptions;

  setFetchOptions(arg0: SearchDomainServiceFetchOptions): void;

  setPermId(arg0: DssServicePermId): void;

  getPermId(): IObjectId;

  getPermId(): DssServicePermId;

  getPossibleSearchOptionsKey(): string;

  setPossibleSearchOptionsKey(arg0: string): void;

  getPossibleSearchOptions(): SearchDomainServiceSearchOption[];

  setPossibleSearchOptions(arg0: SearchDomainServiceSearchOption[]): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  new (): SearchDomainService;
}

export interface SearchDomainServiceExecutionResult extends Serializable {
  servicePermId: DssServicePermId;
  searchDomainName: string;
  searchDomainLabel: string;
  entityKind: EntityKind;
  entityType: string;
  entityIdentifier: string;
  entityPermId: string;
  resultDetails: { [index: string]: string };

  getEntityKind(): EntityKind;

  setEntityKind(arg0: EntityKind): void;

  getEntityType(): string;

  setEntityType(arg0: string): void;

  getServicePermId(): DssServicePermId;

  setServicePermId(arg0: DssServicePermId): void;

  getSearchDomainName(): string;

  setSearchDomainName(arg0: string): void;

  getSearchDomainLabel(): string;

  setSearchDomainLabel(arg0: string): void;

  getEntityIdentifier(): string;

  setEntityIdentifier(arg0: string): void;

  getEntityPermId(): string;

  setEntityPermId(arg0: string): void;

  getResultDetails(): { [index: string]: string };

  setResultDetails(arg0: { [index: string]: string }): void;

  new (): SearchDomainServiceExecutionResult;
}

export interface SearchDomainServiceSearchOption extends Serializable {
  code: string;
  label: string;
  description: string;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  getDescription(): string;

  new (): SearchDomainServiceSearchOption;
}

export interface AbstractExecutionOptionsWithParameters<EO, V>
  extends Serializable {
  parameters: { [index: string]: V };

  getParameters(): { [index: string]: V };

  withParameter(arg0: string, arg1: V): EO;

  new (): AbstractExecutionOptionsWithParameters<any, any>;
}

export interface AggregationServiceExecutionOptions
  extends AbstractExecutionOptionsWithParameters<
    AggregationServiceExecutionOptions,
    any
  > {
  parameters: { [index: string]: any };

  getParameters(): { [index: string]: V };

  withParameter(arg0: string, arg1: V): EO;

  new (): AggregationServiceExecutionOptions;
}

export interface ExecuteAggregationServiceOperation extends IOperation {
  serviceId: IDssServiceId;
  options: AggregationServiceExecutionOptions;

  getMessage(): string;

  getServiceId(): IDssServiceId;

  getOptions(): AggregationServiceExecutionOptions;

  new (): ExecuteAggregationServiceOperation;

  new (
    arg0: IDssServiceId,
    arg1: AggregationServiceExecutionOptions,
  ): ExecuteAggregationServiceOperation;
}

export interface ExecuteAggregationServiceOperationResult
  extends IOperationResult {
  result: TableModel;

  getMessage(): string;

  getResult(): TableModel;

  new (): ExecuteAggregationServiceOperationResult;

  new (arg0: TableModel): ExecuteAggregationServiceOperationResult;
}

export interface ExecuteCustomASServiceOperation extends IOperation {
  serviceId: ICustomASServiceId;
  options: CustomASServiceExecutionOptions;

  getMessage(): string;

  getServiceId(): ICustomASServiceId;

  getOptions(): CustomASServiceExecutionOptions;

  new (): ExecuteCustomASServiceOperation;

  new (
    arg0: ICustomASServiceId,
    arg1: CustomASServiceExecutionOptions,
  ): ExecuteCustomASServiceOperation;
}

export interface ExecuteCustomASServiceOperationResult
  extends IOperationResult {
  result: any;

  getMessage(): string;

  getResult(): any;

  new (): ExecuteCustomASServiceOperationResult;

  new (arg0: any): ExecuteCustomASServiceOperationResult;
}

export interface ExecuteProcessingServiceOperation extends IOperation {
  serviceId: IDssServiceId;
  options: ProcessingServiceExecutionOptions;

  getMessage(): string;

  getServiceId(): IDssServiceId;

  getOptions(): ProcessingServiceExecutionOptions;

  new (): ExecuteProcessingServiceOperation;

  new (
    arg0: IDssServiceId,
    arg1: ProcessingServiceExecutionOptions,
  ): ExecuteProcessingServiceOperation;
}

export interface ExecuteProcessingServiceOperationResult
  extends IOperationResult {
  getMessage(): string;

  new (): ExecuteProcessingServiceOperationResult;
}

export interface ExecuteReportingServiceOperation extends IOperation {
  serviceId: IDssServiceId;
  options: ReportingServiceExecutionOptions;

  getMessage(): string;

  getServiceId(): IDssServiceId;

  getOptions(): ReportingServiceExecutionOptions;

  new (): ExecuteReportingServiceOperation;

  new (
    arg0: IDssServiceId,
    arg1: ReportingServiceExecutionOptions,
  ): ExecuteReportingServiceOperation;
}

export interface ExecuteReportingServiceOperationResult
  extends IOperationResult {
  result: TableModel;

  getMessage(): string;

  getResult(): TableModel;

  new (): ExecuteReportingServiceOperationResult;

  new (arg0: TableModel): ExecuteReportingServiceOperationResult;
}

export interface ExecuteSearchDomainServiceOperation extends IOperation {
  options: SearchDomainServiceExecutionOptions;

  getMessage(): string;

  getOptions(): SearchDomainServiceExecutionOptions;

  new (): ExecuteSearchDomainServiceOperation;

  new (
    arg0: SearchDomainServiceExecutionOptions,
  ): ExecuteSearchDomainServiceOperation;
}

export interface ExecuteSearchDomainServiceOperationResult
  extends IOperationResult {
  result: SearchResult<SearchDomainServiceExecutionResult>;

  getMessage(): string;

  getResult(): SearchResult<SearchDomainServiceExecutionResult>;

  new (): ExecuteSearchDomainServiceOperationResult;

  new (
    arg0: SearchResult<SearchDomainServiceExecutionResult>,
  ): ExecuteSearchDomainServiceOperationResult;
}

export interface ProcessingServiceExecutionOptions
  extends AbstractExecutionOptionsWithParameters<
      ProcessingServiceExecutionOptions,
      string
    >,
    IDataSetCodesHolder {
  parameters: { [index: string]: string };

  getDataSetCodes(): string[];

  withDataSets(arg0: string[]): ProcessingServiceExecutionOptions;

  withDataSets(arg0: string[]): ProcessingServiceExecutionOptions;

  getParameters(): { [index: string]: V };

  withParameter(arg0: string, arg1: V): EO;

  new (): ProcessingServiceExecutionOptions;
}

export interface ReportingServiceExecutionOptions
  extends Serializable,
    IDataSetCodesHolder {
  getDataSetCodes(): string[];

  withDataSets(arg0: string[]): ReportingServiceExecutionOptions;

  withDataSets(arg0: string[]): ReportingServiceExecutionOptions;

  new (): ReportingServiceExecutionOptions;
}

export interface SearchDomainServiceExecutionOptions
  extends AbstractExecutionOptionsWithParameters<
    SearchDomainServiceExecutionOptions,
    string
  > {
  parameters: { [index: string]: string };
  preferredSearchDomain: string;
  searchString: string;

  withPreferredSearchDomain(arg0: string): SearchDomainServiceExecutionOptions;

  getPreferredSearchDomain(): string;

  withSearchString(arg0: string): SearchDomainServiceExecutionOptions;

  getSearchString(): string;

  getParameters(): { [index: string]: V };

  withParameter(arg0: string, arg1: V): EO;

  new (): SearchDomainServiceExecutionOptions;
}

export interface AggregationServiceFetchOptions
  extends FetchOptions<AggregationService>,
    Serializable {
  sort: AggregationServiceSortOptions;
  sortBy: SortOptions<AggregationService>;

  getSortBy(): SortOptions<AggregationService>;

  sortBy(): SortOptions<AggregationService>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): AggregationServiceFetchOptions;
}

export interface AggregationServiceSortOptions
  extends SortOptions<AggregationService> {
  getSortings(): Sorting[];

  new (): AggregationServiceSortOptions;
}

export interface CustomASServiceFetchOptions
  extends FetchOptions<CustomASService>,
    Serializable {
  sort: CustomASServiceSortOptions;
  sortBy: CustomASServiceSortOptions;

  getSortBy(): CustomASServiceSortOptions;

  getSortBy(): SortOptions<any>;

  sortBy(): CustomASServiceSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): CustomASServiceFetchOptions;
}

export interface CustomASServiceSortOptions
  extends SortOptions<CustomASService> {
  getSortings(): Sorting[];

  new (): CustomASServiceSortOptions;
}

export interface ProcessingServiceFetchOptions
  extends FetchOptions<ProcessingService>,
    Serializable {
  sort: ProcessingServiceSortOptions;
  sortBy: SortOptions<ProcessingService>;

  getSortBy(): SortOptions<ProcessingService>;

  sortBy(): SortOptions<ProcessingService>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): ProcessingServiceFetchOptions;
}

export interface ProcessingServiceSortOptions
  extends SortOptions<ProcessingService> {
  getSortings(): Sorting[];

  new (): ProcessingServiceSortOptions;
}

export interface ReportingServiceFetchOptions
  extends FetchOptions<ReportingService>,
    Serializable {
  sort: ReportingServiceSortOptions;
  sortBy: SortOptions<ReportingService>;

  getSortBy(): SortOptions<ReportingService>;

  sortBy(): SortOptions<ReportingService>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): ReportingServiceFetchOptions;
}

export interface ReportingServiceSortOptions
  extends SortOptions<ReportingService> {
  getSortings(): Sorting[];

  new (): ReportingServiceSortOptions;
}

export interface SearchDomainServiceFetchOptions
  extends FetchOptions<SearchDomainService>,
    Serializable {
  sort: SearchDomainServiceSortOptions;
  sortBy: SortOptions<SearchDomainService>;

  getSortBy(): SortOptions<SearchDomainService>;

  sortBy(): SortOptions<SearchDomainService>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): SearchDomainServiceFetchOptions;
}

export interface SearchDomainServiceSortOptions
  extends SortOptions<SearchDomainService> {
  getSortings(): Sorting[];

  new (): SearchDomainServiceSortOptions;
}

export interface CustomASServiceCode extends ObjectPermId, ICustomASServiceId {
  getPermId(): string;

  new (arg0: string): CustomASServiceCode;

  new (): CustomASServiceCode;
}

export interface DssServicePermId extends ObjectPermId, IDssServiceId {
  dataStoreId: IDataStoreId;

  getDataStoreId(): IDataStoreId;

  getPermId(): string;

  new (arg0: string): DssServicePermId;

  new (arg0: string, arg1: IDataStoreId): DssServicePermId;

  new (): DssServicePermId;
}

export interface ICustomASServiceId extends IObjectId {}

export interface IDssServiceId extends IObjectId {}

export interface AggregationServiceSearchCriteria
  extends AbstractObjectSearchCriteria<IDssServiceId> {
  withOrOperator(): AggregationServiceSearchCriteria;

  withAndOperator(): AggregationServiceSearchCriteria;

  withName(): NameSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): AggregationServiceSearchCriteria;
}

export interface CustomASServiceSearchCriteria
  extends AbstractObjectSearchCriteria<ICustomASServiceId> {
  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withOrOperator(): CustomASServiceSearchCriteria;

  withAndOperator(): CustomASServiceSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): CustomASServiceSearchCriteria;
}

export interface ProcessingServiceSearchCriteria
  extends AbstractObjectSearchCriteria<IDssServiceId> {
  withOrOperator(): ProcessingServiceSearchCriteria;

  withAndOperator(): ProcessingServiceSearchCriteria;

  withName(): NameSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): ProcessingServiceSearchCriteria;
}

export interface ReportingServiceSearchCriteria
  extends AbstractObjectSearchCriteria<IDssServiceId> {
  withOrOperator(): ReportingServiceSearchCriteria;

  withAndOperator(): ReportingServiceSearchCriteria;

  withName(): NameSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): ReportingServiceSearchCriteria;
}

export interface SearchAggregationServicesOperation
  extends SearchObjectsOperation<
    AggregationServiceSearchCriteria,
    AggregationServiceFetchOptions
  > {
  criteria: AggregationServiceSearchCriteria;
  fetchOptions: AggregationServiceFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchAggregationServicesOperation;

  new (
    arg0: AggregationServiceSearchCriteria,
    arg1: AggregationServiceFetchOptions,
  ): SearchAggregationServicesOperation;
}

export interface SearchAggregationServicesOperationResult
  extends SearchObjectsOperationResult<AggregationService> {
  searchResult: SearchResult<AggregationService>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchAggregationServicesOperationResult;

  new (
    arg0: SearchResult<AggregationService>,
  ): SearchAggregationServicesOperationResult;
}

export interface SearchCustomASServicesOperation
  extends SearchObjectsOperation<
    CustomASServiceSearchCriteria,
    CustomASServiceFetchOptions
  > {
  criteria: CustomASServiceSearchCriteria;
  fetchOptions: CustomASServiceFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchCustomASServicesOperation;

  new (
    arg0: CustomASServiceSearchCriteria,
    arg1: CustomASServiceFetchOptions,
  ): SearchCustomASServicesOperation;
}

export interface SearchCustomASServicesOperationResult
  extends SearchObjectsOperationResult<CustomASService> {
  searchResult: SearchResult<CustomASService>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchCustomASServicesOperationResult;

  new (
    arg0: SearchResult<CustomASService>,
  ): SearchCustomASServicesOperationResult;
}

export interface SearchDomainServiceSearchCriteria
  extends AbstractObjectSearchCriteria<IDssServiceId> {
  withOrOperator(): SearchDomainServiceSearchCriteria;

  withAndOperator(): SearchDomainServiceSearchCriteria;

  withName(): NameSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): SearchDomainServiceSearchCriteria;
}

export interface SearchProcessingServicesOperation
  extends SearchObjectsOperation<
    ProcessingServiceSearchCriteria,
    ProcessingServiceFetchOptions
  > {
  criteria: ProcessingServiceSearchCriteria;
  fetchOptions: ProcessingServiceFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchProcessingServicesOperation;

  new (
    arg0: ProcessingServiceSearchCriteria,
    arg1: ProcessingServiceFetchOptions,
  ): SearchProcessingServicesOperation;
}

export interface SearchProcessingServicesOperationResult
  extends SearchObjectsOperationResult<ProcessingService> {
  searchResult: SearchResult<ProcessingService>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchProcessingServicesOperationResult;

  new (
    arg0: SearchResult<ProcessingService>,
  ): SearchProcessingServicesOperationResult;
}

export interface SearchReportingServicesOperation
  extends SearchObjectsOperation<
    ReportingServiceSearchCriteria,
    ReportingServiceFetchOptions
  > {
  criteria: ReportingServiceSearchCriteria;
  fetchOptions: ReportingServiceFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchReportingServicesOperation;

  new (
    arg0: ReportingServiceSearchCriteria,
    arg1: ReportingServiceFetchOptions,
  ): SearchReportingServicesOperation;
}

export interface SearchReportingServicesOperationResult
  extends SearchObjectsOperationResult<ReportingService> {
  searchResult: SearchResult<ReportingService>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchReportingServicesOperationResult;

  new (
    arg0: SearchResult<ReportingService>,
  ): SearchReportingServicesOperationResult;
}

export interface SearchSearchDomainServicesOperation
  extends SearchObjectsOperation<
    SearchDomainServiceSearchCriteria,
    SearchDomainServiceFetchOptions
  > {
  criteria: SearchDomainServiceSearchCriteria;
  fetchOptions: SearchDomainServiceFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchSearchDomainServicesOperation;

  new (
    arg0: SearchDomainServiceSearchCriteria,
    arg1: SearchDomainServiceFetchOptions,
  ): SearchSearchDomainServicesOperation;
}

export interface SearchSearchDomainServicesOperationResult
  extends SearchObjectsOperationResult<SearchDomainService> {
  searchResult: SearchResult<SearchDomainService>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchSearchDomainServicesOperationResult;

  new (
    arg0: SearchResult<SearchDomainService>,
  ): SearchSearchDomainServicesOperationResult;
}

export interface SessionInformation extends Serializable {
  fetchOptions: SessionInformationFetchOptions;
  sessionToken: string;
  userName: string;
  homeGroupCode: string;
  personalAccessTokenSession: boolean;
  personalAccessTokenSessionName: string;
  person: Person;
  creatorPerson: Person;

  getFetchOptions(): SessionInformationFetchOptions;

  setFetchOptions(arg0: SessionInformationFetchOptions): void;

  setSessionToken(arg0: string): void;

  getPerson(): Person;

  getSessionToken(): string;

  setUserName(arg0: string): void;

  getHomeGroupCode(): string;

  setHomeGroupCode(arg0: string): void;

  isPersonalAccessTokenSession(): boolean;

  setPersonalAccessTokenSession(arg0: boolean): void;

  getPersonalAccessTokenSessionName(): string;

  setPersonalAccessTokenSessionName(arg0: string): void;

  setPerson(arg0: Person): void;

  getCreatorPerson(): Person;

  setCreatorPerson(arg0: Person): void;

  getUserName(): string;

  new (): SessionInformation;
}

export interface SessionInformationFetchOptions
  extends FetchOptions<SessionInformation>,
    Serializable {
  person: PersonFetchOptions;
  creatorPerson: PersonFetchOptions;
  sort: SessionInformationSortOptions;
  sortBy: SessionInformationSortOptions;

  getSortBy(): SessionInformationSortOptions;

  getSortBy(): SortOptions<any>;

  hasPerson(): boolean;

  hasCreatorPerson(): boolean;

  withPerson(): PersonFetchOptions;

  withPersonUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  withCreatorPerson(): PersonFetchOptions;

  withCreatorPersonUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  sortBy(): SessionInformationSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): SessionInformationFetchOptions;
}

export interface SessionInformationSortOptions
  extends SortOptions<SessionInformation> {
  getSortings(): Sorting[];

  new (): SessionInformationSortOptions;
}

export interface GetSessionInformationOperation extends IOperation {
  getMessage(): string;

  new (): GetSessionInformationOperation;
}

export interface GetSessionInformationOperationResult extends IOperationResult {
  sessionInformation: SessionInformation;

  getMessage(): string;

  getSessionInformation(): SessionInformation;

  new (): GetSessionInformationOperationResult;

  new (arg0: SessionInformation): GetSessionInformationOperationResult;
}

export interface ISessionInformationId extends IObjectId {}

export interface SessionInformationPermId
  extends ObjectPermId,
    ISessionInformationId {
  getPermId(): string;

  new (arg0: string): SessionInformationPermId;

  new (): SessionInformationPermId;
}

export interface PersonalAccessTokenSessionSearchCriteria
  extends BooleanFieldSearchCriteria {
  thatEquals(arg0: boolean): void;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): PersonalAccessTokenSessionSearchCriteria;
}

export interface SearchSessionInformationOperation
  extends SearchObjectsOperation<
    SessionInformationSearchCriteria,
    SessionInformationFetchOptions
  > {
  criteria: SessionInformationSearchCriteria;
  fetchOptions: SessionInformationFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchSessionInformationOperation;

  new (
    arg0: SessionInformationSearchCriteria,
    arg1: SessionInformationFetchOptions,
  ): SearchSessionInformationOperation;
}

export interface SearchSessionInformationOperationResult
  extends SearchObjectsOperationResult<SessionInformation> {
  searchResult: SearchResult<SessionInformation>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchSessionInformationOperationResult;

  new (
    arg0: SearchResult<SessionInformation>,
  ): SearchSessionInformationOperationResult;
}

export interface SessionInformationSearchCriteria
  extends AbstractObjectSearchCriteria<ISessionInformationId> {
  withOrOperator(): SessionInformationSearchCriteria;

  withAndOperator(): SessionInformationSearchCriteria;

  withUserName(): UserNameSearchCriteria;

  withPersonalAccessTokenSession(): PersonalAccessTokenSessionSearchCriteria;

  withPersonalAccessTokenSessionName(): $ch$ethz$sis$openbis$generic$asapi$v3$dto$session$search$PersonalAccessTokenSessionNameSearchCriteria$;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): SessionInformationSearchCriteria;
}

export interface UserNameSearchCriteria extends StringFieldSearchCriteria {
  thatEquals(arg0: string): void;

  thatStartsWith(arg0: string): void;

  thatEndsWith(arg0: string): void;

  thatContains(arg0: string): void;

  thatIsLessThan(arg0: string): void;

  thatIsLessThanOrEqualTo(arg0: string): void;

  thatIsGreaterThan(arg0: string): void;

  thatIsGreaterThanOrEqualTo(arg0: string): void;

  withWildcards(): StringFieldSearchCriteria;

  withoutWildcards(): StringFieldSearchCriteria;

  isUseWildcards(): boolean;

  getFieldType(): SearchFieldType;

  getFieldName(): string;

  getFieldValue(): T;

  setFieldValue(arg0: T): void;

  isNegated(): boolean;

  new (): UserNameSearchCriteria;
}

export interface Space
  extends Serializable,
    ICodeHolder,
    IDescriptionHolder,
    IModificationDateHolder,
    IPermIdHolder,
    IProjectsHolder,
    IRegistrationDateHolder,
    IRegistratorHolder,
    ISamplesHolder {
  fetchOptions: SpaceFetchOptions;
  id: SpaceTechId;
  permId: SpacePermId;
  frozen: boolean;
  frozenForProjects: boolean;
  frozenForSamples: boolean;

  getId(): SpaceTechId;

  isFrozen(): boolean;

  getFetchOptions(): SpaceFetchOptions;

  setFetchOptions(arg0: SpaceFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  getSamples(): Sample[];

  setPermId(arg0: SpacePermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getPermId(): IObjectId;

  getPermId(): SpacePermId;

  setFrozen(arg0: boolean): void;

  isFrozenForSamples(): boolean;

  setFrozenForSamples(arg0: boolean): void;

  setSamples(arg0: Sample[]): void;

  isFrozenForProjects(): boolean;

  setFrozenForProjects(arg0: boolean): void;

  setDescription(arg0: string): void;

  getProjects(): Project[];

  setId(arg0: SpaceTechId): void;

  getCode(): string;

  setCode(arg0: string): void;

  setProjects(arg0: Project[]): void;

  getDescription(): string;

  new (): Space;
}

export interface CreateSpacesOperation
  extends CreateObjectsOperation<SpaceCreation> {
  creations: SpaceCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateSpacesOperation;

  new (arg0: SpaceCreation[]): CreateSpacesOperation;

  new (arg0: SpaceCreation[]): CreateSpacesOperation;
}

export interface CreateSpacesOperationResult
  extends CreateObjectsOperationResult<SpacePermId> {
  objectIds: SpacePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateSpacesOperationResult;

  new (arg0: SpacePermId[]): CreateSpacesOperationResult;
}

export interface SpaceCreation
  extends ICreation,
    IObjectCreation,
    ICreationIdHolder {
  code: string;
  description: string;

  getCreationId(): CreationId;

  setCreationId(arg0: CreationId): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): SpaceCreation;
}

export interface DeleteSpacesOperation
  extends DeleteObjectsOperation<ISpaceId, SpaceDeletionOptions> {
  options: SpaceDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteSpacesOperation;

  new (arg0: ISpaceId[], arg1: SpaceDeletionOptions): DeleteSpacesOperation;
}

export interface DeleteSpacesOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteSpacesOperationResult;
}

export interface SpaceDeletionOptions
  extends AbstractObjectDeletionOptions<SpaceDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): SpaceDeletionOptions;
}

export interface SpaceFetchOptions extends FetchOptions<Space>, Serializable {
  registrator: PersonFetchOptions;
  samples: SampleFetchOptions;
  projects: ProjectFetchOptions;
  sort: SpaceSortOptions;
  sortBy: SpaceSortOptions;

  hasRegistrator(): boolean;

  getSortBy(): SortOptions<any>;

  getSortBy(): SpaceSortOptions;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasSamples(): boolean;

  withSamples(): SampleFetchOptions;

  withSamplesUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  hasProjects(): boolean;

  withProjects(): ProjectFetchOptions;

  withProjectsUsing(arg0: ProjectFetchOptions): ProjectFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): SpaceSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): SpaceFetchOptions;
}

export interface SpaceSortOptions extends EntitySortOptions<Space> {
  code(): SortOrder;

  registrationDate(): SortOrder;

  getRegistrationDate(): SortOrder;

  permId(): SortOrder;

  modificationDate(): SortOrder;

  getModificationDate(): SortOrder;

  getPermId(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): SpaceSortOptions;
}

export interface GetSpacesOperation
  extends GetObjectsOperation<ISpaceId, SpaceFetchOptions> {
  fetchOptions: SpaceFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetSpacesOperation;

  new (arg0: ISpaceId[], arg1: SpaceFetchOptions): GetSpacesOperation;
}

export interface GetSpacesOperationResult
  extends GetObjectsOperationResult<ISpaceId, Space> {
  ids: ISpaceId[];
  objects: Space[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetSpacesOperationResult;

  new (arg0: { [index: string]: Space }): GetSpacesOperationResult;
}

export interface ISpaceId extends IObjectId {}

export interface SpacePermId extends ObjectPermId, ISpaceId {
  getPermId(): string;

  new (arg0: string): SpacePermId;

  new (): SpacePermId;
}

export interface SpaceTechId extends ObjectTechId, ISpaceId {
  getTechId(): number;

  new (arg0: number): SpaceTechId;

  new (): SpaceTechId;
}

export interface NoSpaceSearchCriteria extends ISearchCriteria {
  isNegated(): boolean;

  new (): NoSpaceSearchCriteria;
}

export interface SearchSpacesOperation
  extends SearchObjectsOperation<SpaceSearchCriteria, SpaceFetchOptions> {
  criteria: SpaceSearchCriteria;
  fetchOptions: SpaceFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchSpacesOperation;

  new (
    arg0: SpaceSearchCriteria,
    arg1: SpaceFetchOptions,
  ): SearchSpacesOperation;
}

export interface SearchSpacesOperationResult
  extends SearchObjectsOperationResult<Space> {
  searchResult: SearchResult<Space>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchSpacesOperationResult;

  new (arg0: SearchResult<Space>): SearchSpacesOperationResult;
}

export interface SpaceSearchCriteria
  extends AbstractObjectSearchCriteria<ISpaceId> {
  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withOrOperator(): SpaceSearchCriteria;

  withAndOperator(): SpaceSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): SpaceSearchCriteria;
}

export interface SpaceUpdate extends IUpdate, IObjectUpdate<ISpaceId> {
  spaceId: ISpaceId;
  description: FieldUpdateValue<string>;
  freeze: boolean;
  freezeForProjects: boolean;
  freezeForSamples: boolean;

  freeze(): void;

  getObjectId(): IObjectId;

  getObjectId(): ISpaceId;

  shouldBeFrozen(): boolean;

  freezeForSamples(): void;

  shouldBeFrozenForSamples(): boolean;

  getSpaceId(): ISpaceId;

  setSpaceId(arg0: ISpaceId): void;

  freezeForProjects(): void;

  shouldBeFrozenForProjects(): boolean;

  setDescription(arg0: string): void;

  getDescription(): FieldUpdateValue<string>;

  new (): SpaceUpdate;
}

export interface UpdateSpacesOperation
  extends UpdateObjectsOperation<SpaceUpdate> {
  updates: SpaceUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateSpacesOperation;

  new (arg0: SpaceUpdate[]): UpdateSpacesOperation;

  new (arg0: SpaceUpdate[]): UpdateSpacesOperation;
}

export interface UpdateSpacesOperationResult
  extends UpdateObjectsOperationResult<SpacePermId> {
  objectIds: SpacePermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateSpacesOperationResult;

  new (arg0: SpacePermId[]): UpdateSpacesOperationResult;
}

export interface Tag
  extends Serializable,
    ICodeHolder,
    IDataSetsHolder,
    IDescriptionHolder,
    IExperimentsHolder,
    IMaterialsHolder,
    IOwnerHolder,
    IPermIdHolder,
    IRegistrationDateHolder,
    ISamplesHolder {
  fetchOptions: TagFetchOptions;
  permId: TagPermId;
  private: boolean;

  isPrivate(): boolean;

  getOwner(): Person;

  setOwner(arg0: Person): void;

  getFetchOptions(): TagFetchOptions;

  setFetchOptions(arg0: TagFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getExperiments(): Experiment[];

  getSamples(): Sample[];

  setPermId(arg0: TagPermId): void;

  getDataSets(): DataSet[];

  getMaterials(): Material[];

  getPermId(): IObjectId;

  getPermId(): TagPermId;

  setDataSets(arg0: DataSet[]): void;

  setSamples(arg0: Sample[]): void;

  setExperiments(arg0: Experiment[]): void;

  setPrivate(arg0: boolean): void;

  setMaterials(arg0: Material[]): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): Tag;
}

export interface CreateTagsOperation
  extends CreateObjectsOperation<TagCreation> {
  creations: TagCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateTagsOperation;

  new (arg0: TagCreation[]): CreateTagsOperation;

  new (arg0: TagCreation[]): CreateTagsOperation;
}

export interface CreateTagsOperationResult
  extends CreateObjectsOperationResult<TagPermId> {
  objectIds: TagPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateTagsOperationResult;

  new (arg0: TagPermId[]): CreateTagsOperationResult;
}

export interface TagCreation extends ICreation, IObjectCreation {
  code: string;
  description: string;
  experimentIds: IExperimentId[];
  sampleIds: ISampleId[];
  dataSetIds: IDataSetId[];
  materialIds: IMaterialId[];

  getDataSetIds(): IDataSetId[];

  getExperimentIds(): IExperimentId[];

  setExperimentIds(arg0: IExperimentId[]): void;

  getSampleIds(): ISampleId[];

  setSampleIds(arg0: ISampleId[]): void;

  setDataSetIds(arg0: IDataSetId[]): void;

  getMaterialIds(): IMaterialId[];

  setMaterialIds(arg0: IMaterialId[]): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): TagCreation;
}

export interface DeleteTagsOperation
  extends DeleteObjectsOperation<ITagId, TagDeletionOptions> {
  options: TagDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteTagsOperation;

  new (arg0: ITagId[], arg1: TagDeletionOptions): DeleteTagsOperation;
}

export interface DeleteTagsOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteTagsOperationResult;
}

export interface TagDeletionOptions
  extends AbstractObjectDeletionOptions<TagDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): TagDeletionOptions;
}

export interface TagFetchOptions extends FetchOptions<Tag>, Serializable {
  experiments: ExperimentFetchOptions;
  samples: SampleFetchOptions;
  dataSets: DataSetFetchOptions;
  materials: MaterialFetchOptions;
  owner: PersonFetchOptions;
  sort: TagSortOptions;
  sortBy: TagSortOptions;

  getSortBy(): SortOptions<any>;

  getSortBy(): TagSortOptions;

  withOwner(): PersonFetchOptions;

  hasDataSets(): boolean;

  hasSamples(): boolean;

  withDataSets(): DataSetFetchOptions;

  withDataSetsUsing(arg0: DataSetFetchOptions): DataSetFetchOptions;

  withSamples(): SampleFetchOptions;

  withSamplesUsing(arg0: SampleFetchOptions): SampleFetchOptions;

  hasOwner(): boolean;

  withOwnerUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasExperiments(): boolean;

  withExperiments(): ExperimentFetchOptions;

  withExperimentsUsing(arg0: ExperimentFetchOptions): ExperimentFetchOptions;

  hasMaterials(): boolean;

  withMaterials(): MaterialFetchOptions;

  withMaterialsUsing(arg0: MaterialFetchOptions): MaterialFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): TagSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): TagFetchOptions;
}

export interface TagSortOptions extends SortOptions<Tag> {
  registrationDate: SortOrder;
  code: SortOrder;

  code(): SortOrder;

  registrationDate(): SortOrder;

  getRegistrationDate(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): TagSortOptions;
}

export interface GetTagsOperation
  extends GetObjectsOperation<ITagId, TagFetchOptions> {
  fetchOptions: TagFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetTagsOperation;

  new (arg0: ITagId[], arg1: TagFetchOptions): GetTagsOperation;
}

export interface GetTagsOperationResult
  extends GetObjectsOperationResult<ITagId, Tag> {
  ids: ITagId[];
  objects: Tag[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetTagsOperationResult;

  new (arg0: { [index: string]: Tag }): GetTagsOperationResult;
}

export interface ITagId extends IObjectId {}

export interface TagCode extends ITagId, Serializable {
  code: string;

  getCode(): string;

  new (arg0: string): TagCode;

  new (): TagCode;
}

export interface TagPermId extends ObjectPermId, ITagId {
  getPermId(): string;

  new (arg0: string, arg1: string): TagPermId;

  new (arg0: string): TagPermId;

  new (): TagPermId;
}

export interface SearchTagsOperation
  extends SearchObjectsOperation<TagSearchCriteria, TagFetchOptions> {
  criteria: TagSearchCriteria;
  fetchOptions: TagFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchTagsOperation;

  new (arg0: TagSearchCriteria, arg1: TagFetchOptions): SearchTagsOperation;
}

export interface SearchTagsOperationResult
  extends SearchObjectsOperationResult<Tag> {
  searchResult: SearchResult<Tag>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchTagsOperationResult;

  new (arg0: SearchResult<Tag>): SearchTagsOperationResult;
}

export interface TagSearchCriteria
  extends AbstractObjectSearchCriteria<ITagId> {
  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withOrOperator(): TagSearchCriteria;

  withAndOperator(): TagSearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): TagSearchCriteria;
}

export interface TagUpdate extends IUpdate, IObjectUpdate<ITagId> {
  tagId: ITagId;
  description: FieldUpdateValue<string>;
  experimentIds: IdListUpdateValue<IExperimentId>;
  sampleIds: IdListUpdateValue<ISampleId>;
  dataSetIds: IdListUpdateValue<IDataSetId>;
  materialIds: IdListUpdateValue<IMaterialId>;

  getObjectId(): IObjectId;

  getObjectId(): ITagId;

  getDataSetIds(): IdListUpdateValue<IDataSetId>;

  getExperimentIds(): IdListUpdateValue<IExperimentId>;

  getSampleIds(): IdListUpdateValue<ISampleId>;

  getMaterialIds(): IdListUpdateValue<IMaterialId>;

  getTagId(): ITagId;

  setTagId(arg0: ITagId): void;

  setExperimentActions(arg0: ListUpdateAction<IExperimentId>[]): void;

  setSampleActions(arg0: ListUpdateAction<ISampleId>[]): void;

  setDataSetActions(arg0: ListUpdateAction<IDataSetId>[]): void;

  setMaterialActions(arg0: ListUpdateAction<IMaterialId>[]): void;

  setDescription(arg0: string): void;

  getDescription(): FieldUpdateValue<string>;

  new (): TagUpdate;
}

export interface UpdateTagsOperation extends UpdateObjectsOperation<TagUpdate> {
  updates: TagUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateTagsOperation;

  new (arg0: TagUpdate[]): UpdateTagsOperation;

  new (arg0: TagUpdate[]): UpdateTagsOperation;
}

export interface UpdateTagsOperationResult
  extends UpdateObjectsOperationResult<TagPermId> {
  objectIds: TagPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateTagsOperationResult;

  new (arg0: TagPermId[]): UpdateTagsOperationResult;
}

export interface Vocabulary
  extends Serializable,
    ICodeHolder,
    IDescriptionHolder,
    IModificationDateHolder,
    IRegistrationDateHolder,
    IRegistratorHolder {
  fetchOptions: VocabularyFetchOptions;
  managedInternally: boolean;
  chosenFromList: boolean;
  urlTemplate: string;
  terms: VocabularyTerm[];

  getFetchOptions(): VocabularyFetchOptions;

  setFetchOptions(arg0: VocabularyFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getPermId(): VocabularyPermId;

  getUrlTemplate(): string;

  setUrlTemplate(arg0: string): void;

  isManagedInternally(): boolean;

  setManagedInternally(arg0: boolean): void;

  isInternalNameSpace(): boolean;

  setInternalNameSpace(arg0: boolean): void;

  isChosenFromList(): boolean;

  setChosenFromList(arg0: boolean): void;

  getTerms(): VocabularyTerm[];

  setTerms(arg0: VocabularyTerm[]): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): Vocabulary;
}

export interface VocabularyTerm
  extends Serializable,
    ICodeHolder,
    IDescriptionHolder,
    IModificationDateHolder,
    IPermIdHolder,
    IRegistrationDateHolder,
    IRegistratorHolder {
  fetchOptions: VocabularyTermFetchOptions;
  permId: VocabularyTermPermId;
  label: string;
  ordinal: number;
  official: boolean;
  vocabulary: Vocabulary;

  getFetchOptions(): VocabularyTermFetchOptions;

  setFetchOptions(arg0: VocabularyTermFetchOptions): void;

  getRegistrationDate(): Date;

  setRegistrationDate(arg0: Date): void;

  getRegistrator(): Person;

  setRegistrator(arg0: Person): void;

  setPermId(arg0: VocabularyTermPermId): void;

  getModificationDate(): Date;

  setModificationDate(arg0: Date): void;

  getPermId(): IObjectId;

  getPermId(): VocabularyTermPermId;

  getVocabulary(): Vocabulary;

  setVocabulary(arg0: Vocabulary): void;

  setOrdinal(arg0: number): void;

  isOfficial(): boolean;

  setOfficial(arg0: boolean): void;

  setDescription(arg0: string): void;

  getOrdinal(): number;

  getCode(): string;

  setCode(arg0: string): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  getDescription(): string;

  new (): VocabularyTerm;
}

export interface CreateVocabulariesOperation
  extends CreateObjectsOperation<VocabularyCreation> {
  creations: VocabularyCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateVocabulariesOperation;

  new (arg0: VocabularyCreation[]): CreateVocabulariesOperation;

  new (arg0: VocabularyCreation[]): CreateVocabulariesOperation;
}

export interface CreateVocabulariesOperationResult
  extends CreateObjectsOperationResult<VocabularyPermId> {
  objectIds: VocabularyPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateVocabulariesOperationResult;

  new (arg0: VocabularyPermId[]): CreateVocabulariesOperationResult;
}

export interface CreateVocabularyTermsOperation
  extends CreateObjectsOperation<VocabularyTermCreation> {
  creations: VocabularyTermCreation[];

  getMessage(): string;

  getCreations(): C[];

  new (): CreateVocabularyTermsOperation;

  new (arg0: VocabularyTermCreation[]): CreateVocabularyTermsOperation;

  new (arg0: VocabularyTermCreation[]): CreateVocabularyTermsOperation;
}

export interface CreateVocabularyTermsOperationResult
  extends CreateObjectsOperationResult<VocabularyTermPermId> {
  objectIds: VocabularyTermPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): CreateVocabularyTermsOperationResult;

  new (arg0: VocabularyTermPermId[]): CreateVocabularyTermsOperationResult;
}

export interface VocabularyCreation extends ICreation, IObjectCreation {
  code: string;
  description: string;
  managedInternally: boolean;
  chosenFromList: boolean;
  urlTemplate: string;
  terms: VocabularyTermCreation[];

  getUrlTemplate(): string;

  setUrlTemplate(arg0: string): void;

  isManagedInternally(): boolean;

  setManagedInternally(arg0: boolean): void;

  isInternalNameSpace(): boolean;

  setInternalNameSpace(arg0: boolean): void;

  isChosenFromList(): boolean;

  setChosenFromList(arg0: boolean): void;

  getTerms(): VocabularyTermCreation[];

  setTerms(arg0: VocabularyTermCreation[]): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getDescription(): string;

  new (): VocabularyCreation;
}

export interface VocabularyTermCreation extends ICreation, IObjectCreation {
  vocabularyId: IVocabularyId;
  code: string;
  label: string;
  description: string;
  official: boolean;
  previousTermId: IVocabularyTermId;

  getVocabularyId(): IVocabularyId;

  setVocabularyId(arg0: IVocabularyId): void;

  isOfficial(): boolean;

  setOfficial(arg0: boolean): void;

  getPreviousTermId(): IVocabularyTermId;

  setPreviousTermId(arg0: IVocabularyTermId): void;

  setDescription(arg0: string): void;

  getCode(): string;

  setCode(arg0: string): void;

  getLabel(): string;

  setLabel(arg0: string): void;

  getDescription(): string;

  new (): VocabularyTermCreation;
}

export interface DeleteVocabulariesOperation
  extends DeleteObjectsOperation<IVocabularyId, VocabularyDeletionOptions> {
  options: VocabularyDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteVocabulariesOperation;

  new (
    arg0: IVocabularyId[],
    arg1: VocabularyDeletionOptions,
  ): DeleteVocabulariesOperation;
}

export interface DeleteVocabulariesOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteVocabulariesOperationResult;
}

export interface DeleteVocabularyTermsOperation
  extends DeleteObjectsOperation<
    IVocabularyTermId,
    VocabularyTermDeletionOptions
  > {
  options: VocabularyTermDeletionOptions;

  getMessage(): string;

  getObjectIds(): ID[];

  getOptions(): OPTIONS;

  new (): DeleteVocabularyTermsOperation;

  new (
    arg0: IVocabularyTermId[],
    arg1: VocabularyTermDeletionOptions,
  ): DeleteVocabularyTermsOperation;
}

export interface DeleteVocabularyTermsOperationResult
  extends DeleteObjectsWithoutTrashOperationResult {
  getMessage(): string;

  new (): DeleteVocabularyTermsOperationResult;
}

export interface VocabularyDeletionOptions
  extends AbstractObjectDeletionOptions<VocabularyDeletionOptions> {
  setReason(arg0: string): T;

  getReason(): string;

  new (): VocabularyDeletionOptions;
}

export interface VocabularyTermDeletionOptions
  extends AbstractObjectDeletionOptions<VocabularyTermDeletionOptions> {
  replacements: VocabularyTermReplacement[];

  replace(arg0: IVocabularyTermId, arg1: IVocabularyTermId): void;

  getReplacements(): VocabularyTermReplacement[];

  setReason(arg0: string): T;

  getReason(): string;

  new (): VocabularyTermDeletionOptions;
}

export interface VocabularyTermReplacement extends Serializable {
  replacedId: IVocabularyTermId;
  replacementId: IVocabularyTermId;

  getReplacedId(): IVocabularyTermId;

  getReplacementId(): IVocabularyTermId;

  new (): VocabularyTermReplacement;

  new (
    arg0: IVocabularyTermId,
    arg1: IVocabularyTermId,
  ): VocabularyTermReplacement;
}

export interface VocabularyFetchOptions
  extends FetchOptions<Vocabulary>,
    Serializable {
  registrator: PersonFetchOptions;
  terms: VocabularyTermFetchOptions;
  sort: VocabularySortOptions;
  sortBy: VocabularySortOptions;

  hasRegistrator(): boolean;

  getSortBy(): VocabularySortOptions;

  getSortBy(): SortOptions<any>;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasTerms(): boolean;

  withTerms(): VocabularyTermFetchOptions;

  withTermsUsing(arg0: VocabularyTermFetchOptions): VocabularyTermFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): VocabularySortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): VocabularyFetchOptions;
}

export interface VocabularySortOptions extends SortOptions<Vocabulary> {
  code: SortOrder;

  code(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): VocabularySortOptions;
}

export interface VocabularyTermFetchOptions
  extends FetchOptions<VocabularyTerm>,
    Serializable {
  vocabulary: VocabularyFetchOptions;
  registrator: PersonFetchOptions;
  sort: VocabularyTermSortOptions;
  sortBy: VocabularyTermSortOptions;

  hasRegistrator(): boolean;

  getSortBy(): VocabularyTermSortOptions;

  getSortBy(): SortOptions<any>;

  withRegistrator(): PersonFetchOptions;

  withRegistratorUsing(arg0: PersonFetchOptions): PersonFetchOptions;

  hasVocabulary(): boolean;

  withVocabulary(): VocabularyFetchOptions;

  withVocabularyUsing(arg0: VocabularyFetchOptions): VocabularyFetchOptions;

  sortBy(): SortOptions<any>;

  sortBy(): VocabularyTermSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): VocabularyTermFetchOptions;
}

export interface VocabularyTermSortOptions extends SortOptions<VocabularyTerm> {
  ordinal: SortOrder;
  code: SortOrder;

  code(): SortOrder;

  ordinal(): SortOrder;

  getOrdinal(): SortOrder;

  getCode(): SortOrder;

  getSortings(): Sorting[];

  new (): VocabularyTermSortOptions;
}

export interface GetVocabulariesOperation
  extends GetObjectsOperation<IVocabularyId, VocabularyFetchOptions> {
  fetchOptions: VocabularyFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetVocabulariesOperation;

  new (
    arg0: IVocabularyId[],
    arg1: VocabularyFetchOptions,
  ): GetVocabulariesOperation;
}

export interface GetVocabulariesOperationResult
  extends GetObjectsOperationResult<IVocabularyId, Vocabulary> {
  ids: IVocabularyId[];
  objects: Vocabulary[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetVocabulariesOperationResult;

  new (arg0: { [index: string]: Vocabulary }): GetVocabulariesOperationResult;
}

export interface GetVocabularyTermsOperation
  extends GetObjectsOperation<IVocabularyTermId, VocabularyTermFetchOptions> {
  fetchOptions: VocabularyTermFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getObjectIds(): ID[];

  new (): GetVocabularyTermsOperation;

  new (
    arg0: IVocabularyTermId[],
    arg1: VocabularyTermFetchOptions,
  ): GetVocabularyTermsOperation;
}

export interface GetVocabularyTermsOperationResult
  extends GetObjectsOperationResult<IVocabularyTermId, VocabularyTerm> {
  ids: IVocabularyTermId[];
  objects: VocabularyTerm[];

  getMessage(): string;

  getObjectMap(): { [index: string]: OBJECT };

  new (): GetVocabularyTermsOperationResult;

  new (arg0: {
    [index: string]: VocabularyTerm;
  }): GetVocabularyTermsOperationResult;
}

export interface IVocabularyId extends IObjectId {}

export interface IVocabularyTermId extends IObjectId {}

export interface VocabularyPermId extends ObjectPermId, IVocabularyId {
  getPermId(): string;

  new (arg0: string): VocabularyPermId;

  new (): VocabularyPermId;
}

export interface VocabularyTermPermId extends IVocabularyTermId, Serializable {
  code: string;
  vocabularyCode: string;

  getVocabularyCode(): string;

  getCode(): string;

  new (arg0: string, arg1: string): VocabularyTermPermId;

  new (): VocabularyTermPermId;
}

export interface SearchVocabulariesOperation
  extends SearchObjectsOperation<
    VocabularySearchCriteria,
    VocabularyFetchOptions
  > {
  criteria: VocabularySearchCriteria;
  fetchOptions: VocabularyFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchVocabulariesOperation;

  new (
    arg0: VocabularySearchCriteria,
    arg1: VocabularyFetchOptions,
  ): SearchVocabulariesOperation;
}

export interface SearchVocabulariesOperationResult
  extends SearchObjectsOperationResult<Vocabulary> {
  searchResult: SearchResult<Vocabulary>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchVocabulariesOperationResult;

  new (arg0: SearchResult<Vocabulary>): SearchVocabulariesOperationResult;
}

export interface SearchVocabularyTermsOperation
  extends SearchObjectsOperation<
    VocabularyTermSearchCriteria,
    VocabularyTermFetchOptions
  > {
  criteria: VocabularyTermSearchCriteria;
  fetchOptions: VocabularyTermFetchOptions;

  getMessage(): string;

  getFetchOptions(): FETCH_OPTIONS;

  getCriteria(): CRITERIA;

  new (): SearchVocabularyTermsOperation;

  new (
    arg0: VocabularyTermSearchCriteria,
    arg1: VocabularyTermFetchOptions,
  ): SearchVocabularyTermsOperation;
}

export interface SearchVocabularyTermsOperationResult
  extends SearchObjectsOperationResult<VocabularyTerm> {
  searchResult: SearchResult<VocabularyTerm>;

  getMessage(): string;

  getSearchResult(): SearchResult<OBJECT>;

  new (): SearchVocabularyTermsOperationResult;

  new (
    arg0: SearchResult<VocabularyTerm>,
  ): SearchVocabularyTermsOperationResult;
}

export interface VocabularySearchCriteria
  extends AbstractObjectSearchCriteria<IVocabularyId> {
  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withOrOperator(): VocabularySearchCriteria;

  withAndOperator(): VocabularySearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): VocabularySearchCriteria;
}

export interface VocabularyTermSearchCriteria
  extends AbstractObjectSearchCriteria<IVocabularyTermId> {
  withCode(): CodeSearchCriteria;

  withCodes(): CodesSearchCriteria;

  withPermId(): PermIdSearchCriteria;

  withOrOperator(): VocabularyTermSearchCriteria;

  withAndOperator(): VocabularyTermSearchCriteria;

  withVocabulary(): VocabularySearchCriteria;

  withId(): IdSearchCriteria<ID>;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): VocabularyTermSearchCriteria;
}

export interface UpdateVocabulariesOperation
  extends UpdateObjectsOperation<VocabularyUpdate> {
  updates: VocabularyUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateVocabulariesOperation;

  new (arg0: VocabularyUpdate[]): UpdateVocabulariesOperation;

  new (arg0: VocabularyUpdate[]): UpdateVocabulariesOperation;
}

export interface UpdateVocabulariesOperationResult
  extends UpdateObjectsOperationResult<VocabularyPermId> {
  objectIds: VocabularyPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateVocabulariesOperationResult;

  new (arg0: VocabularyPermId[]): UpdateVocabulariesOperationResult;
}

export interface UpdateVocabularyTermsOperation
  extends UpdateObjectsOperation<VocabularyTermUpdate> {
  updates: VocabularyTermUpdate[];

  getMessage(): string;

  getUpdates(): U[];

  new (): UpdateVocabularyTermsOperation;

  new (arg0: VocabularyTermUpdate[]): UpdateVocabularyTermsOperation;

  new (arg0: VocabularyTermUpdate[]): UpdateVocabularyTermsOperation;
}

export interface UpdateVocabularyTermsOperationResult
  extends UpdateObjectsOperationResult<VocabularyTermPermId> {
  objectIds: VocabularyTermPermId[];

  getMessage(): string;

  getObjectIds(): ID[];

  new (): UpdateVocabularyTermsOperationResult;

  new (arg0: VocabularyTermPermId[]): UpdateVocabularyTermsOperationResult;
}

export interface VocabularyTermUpdate
  extends IUpdate,
    IObjectUpdate<IVocabularyTermId> {
  vocabularyTermId: IVocabularyTermId;
  label: FieldUpdateValue<string>;
  description: FieldUpdateValue<string>;
  previousTermId: FieldUpdateValue<IVocabularyTermId>;
  official: FieldUpdateValue<boolean>;

  getObjectId(): IObjectId;

  getObjectId(): IVocabularyTermId;

  isOfficial(): FieldUpdateValue<boolean>;

  setOfficial(arg0: boolean): void;

  getPreviousTermId(): FieldUpdateValue<IVocabularyTermId>;

  setPreviousTermId(arg0: IVocabularyTermId): void;

  getVocabularyTermId(): IVocabularyTermId;

  setVocabularyTermId(arg0: IVocabularyTermId): void;

  setDescription(arg0: string): void;

  getLabel(): FieldUpdateValue<string>;

  setLabel(arg0: string): void;

  getDescription(): FieldUpdateValue<string>;

  new (): VocabularyTermUpdate;
}

export interface VocabularyUpdate
  extends IUpdate,
    IObjectUpdate<IVocabularyId> {
  vocabularyId: IVocabularyId;
  description: FieldUpdateValue<string>;
  chosenFromList: FieldUpdateValue<boolean>;
  urlTemplate: FieldUpdateValue<string>;

  getObjectId(): IObjectId;

  getObjectId(): IVocabularyId;

  getUrlTemplate(): FieldUpdateValue<string>;

  setUrlTemplate(arg0: string): void;

  getVocabularyId(): IVocabularyId;

  setVocabularyId(arg0: IVocabularyId): void;

  setChosenFromList(arg0: boolean): void;

  getChosenFromList(): FieldUpdateValue<boolean>;

  setDescription(arg0: string): void;

  getDescription(): FieldUpdateValue<string>;

  new (): VocabularyUpdate;
}

export interface WebAppSetting extends Serializable {
  name: string;
  value: string;

  getName(): string;

  getValue(): string;

  setName(arg0: string): void;

  setValue(arg0: string): void;

  new (): WebAppSetting;

  new (arg0: string, arg1: string): WebAppSetting;
}

export interface WebAppSettings extends Serializable {
  fetchOptions: WebAppSettingsFetchOptions;
  webAppId: string;
  settings: { [index: string]: WebAppSetting };

  getFetchOptions(): WebAppSettingsFetchOptions;

  setFetchOptions(arg0: WebAppSettingsFetchOptions): void;

  getWebAppId(): string;

  setWebAppId(arg0: string): void;

  getSetting(arg0: string): WebAppSetting;

  getSettings(): { [index: string]: WebAppSetting };

  setSettings(arg0: { [index: string]: WebAppSetting }): void;

  new (): WebAppSettings;
}

export interface WebAppSettingCreation extends ICreation, IObjectCreation {
  name: string;
  value: string;

  getName(): string;

  getValue(): string;

  setName(arg0: string): void;

  setValue(arg0: string): void;

  new (): WebAppSettingCreation;

  new (arg0: string, arg1: string): WebAppSettingCreation;
}

export interface WebAppSettingsFetchOptions
  extends FetchOptions<WebAppSettings>,
    Serializable {
  settings: string[];
  allSettings: boolean;
  sort: WebAppSettingsSortOptions;

  getSortBy(): SortOptions<any>;

  getSortBy(): WebAppSettingsSortOptions;

  hasAllSettings(): boolean;

  hasSetting(arg0: string): boolean;

  withSetting(arg0: string): void;

  withSettingsUsing(arg0: string[]): string[];

  withAllSettings(): void;

  withAllSettingsUsing(arg0: boolean): boolean;

  getSettings(): string[];

  sortBy(): SortOptions<any>;

  sortBy(): WebAppSettingsSortOptions;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): WebAppSettingsFetchOptions;
}

export interface WebAppSettingsFetchOptionsAllSettingsHandler
  extends IFetchPropertyHandler {
  areMatching(arg0: any, arg1: any, arg2: IFetchOptionsMatcher): boolean;

  new (): WebAppSettingsFetchOptionsAllSettingsHandler;
}

export interface WebAppSettingsFetchOptionsSettingsHandler
  extends IFetchPropertyHandler {
  areMatching(arg0: any, arg1: any, arg2: IFetchOptionsMatcher): boolean;

  new (): WebAppSettingsFetchOptionsSettingsHandler;
}

export interface WebAppSettingsSortOptions extends SortOptions<WebAppSettings> {
  getSortings(): Sorting[];

  new (): WebAppSettingsSortOptions;
}

export interface WebAppSettingsUpdateValue
  extends ListUpdateValue<
    WebAppSettingCreation,
    string,
    WebAppSettingCreation,
    any
  > {
  actions: ListUpdateAction<any>[];

  add(arg0: ADD[]): void;

  remove(arg0: REMOVE[]): void;

  set(arg0: SET[]): void;

  getActions(): ListUpdateAction<ACTION>[];

  getAdded(): ADD[];

  getRemoved(): REMOVE[];

  getSet(): SET[];

  hasActions(): boolean;

  setActions(arg0: ListUpdateAction<ACTION>[]): void;

  new (): WebAppSettingsUpdateValue;
}

export interface FullDataSetCreation extends ICreation {
  metadataCreation: DataSetCreation;
  fileMetadata: DataSetFileCreation[];

  getMetadataCreation(): DataSetCreation;

  setMetadataCreation(arg0: DataSetCreation): void;

  getFileMetadata(): DataSetFileCreation[];

  setFileMetadata(arg0: DataSetFileCreation[]): void;

  new (): FullDataSetCreation;
}

export interface UploadedDataSetCreation extends ICreation {
  typeId: IEntityTypeId;
  experimentId: IExperimentId;
  sampleId: ISampleId;
  properties: { [index: string]: string };
  parentIds: IDataSetId[];
  uploadId: string;

  getProperties(): { [index: string]: string };

  setProperties(arg0: { [index: string]: string }): void;

  getTypeId(): IEntityTypeId;

  setTypeId(arg0: IEntityTypeId): void;

  getExperimentId(): IExperimentId;

  setExperimentId(arg0: IExperimentId): void;

  getSampleId(): ISampleId;

  setSampleId(arg0: ISampleId): void;

  getParentIds(): IDataSetId[];

  setParentIds(arg0: IDataSetId[]): void;

  getUploadId(): string;

  setUploadId(arg0: string): void;

  new (): UploadedDataSetCreation;
}

export interface DataSetFile extends Serializable {
  permId: DataSetFilePermId;
  dataSetPermId: DataSetPermId;
  dataStore: DataStore;
  path: string;
  directory: boolean;
  fileLength: number;
  checksumCRC32: number;
  checksum: string;
  checksumType: string;

  getPath(): string;

  isDirectory(): boolean;

  setPermId(arg0: DataSetFilePermId): void;

  getPermId(): DataSetFilePermId;

  getDataStore(): DataStore;

  setDataStore(arg0: DataStore): void;

  getDataSetPermId(): DataSetPermId;

  setDataSetPermId(arg0: DataSetPermId): void;

  getFileLength(): number;

  setFileLength(arg0: number): void;

  getChecksumCRC32(): number;

  setChecksumCRC32(arg0: number): void;

  setChecksum(arg0: string): void;

  getChecksumType(): string;

  setChecksumType(arg0: string): void;

  setDirectory(arg0: boolean): void;

  setPath(arg0: string): void;

  getChecksum(): string;

  new (): DataSetFile;
}

export interface DataSetFileCreation extends ICreation {
  path: string;
  directory: boolean;
  fileLength: number;
  checksumCRC32: number;
  checksum: string;
  checksumType: string;

  getPath(): string;

  isDirectory(): boolean;

  getFileLength(): number;

  setFileLength(arg0: number): void;

  getChecksumCRC32(): number;

  setChecksumCRC32(arg0: number): void;

  setChecksum(arg0: string): void;

  getChecksumType(): string;

  setChecksumType(arg0: string): void;

  setDirectory(arg0: boolean): void;

  setPath(arg0: string): void;

  getChecksum(): string;

  new (): DataSetFileCreation;
}

export interface DataSetFileDownload extends Serializable {
  dataSetFile: DataSetFile;
  inputStream: any;

  getInputStream(): $java$io$InputStream$;

  getDataSetFile(): DataSetFile;

  new (arg0: DataSetFile, arg1: $java$io$InputStream$): DataSetFileDownload;
}

export interface DataSetFileDownloadOptions extends Serializable {
  recursive: boolean;

  isRecursive(): boolean;

  setRecursive(arg0: boolean): void;

  new (): DataSetFileDownloadOptions;
}

export interface DataSetFileDownloadReader extends Serializable {
  read(): DataSetFileDownload;

  close(): void;

  new (arg0: $java$io$InputStream$): DataSetFileDownloadReader;
}

export interface FastDownloadSession extends Serializable {
  downloadUrl: string;
  fileTransferUserSessionId: string;
  files: IDataSetFileId[];
  options: FastDownloadSessionOptions;

  getDownloadUrl(): string;

  getFileTransferUserSessionId(): string;

  getFiles(): IDataSetFileId[];

  getOptions(): FastDownloadSessionOptions;

  new (
    arg0: string,
    arg1: string,
    arg2: IDataSetFileId[],
    arg3: FastDownloadSessionOptions,
  ): FastDownloadSession;

  new (): FastDownloadSession;
}

export interface FastDownloadSessionOptions extends Serializable {
  wishedNumberOfStreams: number;

  getWishedNumberOfStreams(): number;

  withWishedNumberOfStreams(arg0: number): FastDownloadSessionOptions;

  new (): FastDownloadSessionOptions;
}

export interface DataSetFileFetchOptions
  extends FetchOptions<DataSetFile>,
    Serializable {
  sort: DataSetFileSortOptions;

  getSortBy(): DataSetFileSortOptions;

  getSortBy(): SortOptions<any>;

  sortBy(): DataSetFileSortOptions;

  sortBy(): SortOptions<any>;

  count(arg0: number): FetchOptions<OBJECT>;

  from(arg0: number): FetchOptions<OBJECT>;

  getCount(): number;

  getFrom(): number;

  cacheMode(arg0: CacheMode): FetchOptions<OBJECT>;

  getCacheMode(): CacheMode;

  new (): DataSetFileFetchOptions;
}

export interface DataSetFileSortOptions extends SortOptions<DataSetFile> {
  getSortings(): Sorting[];

  new (): DataSetFileSortOptions;
}

export interface DataSetFilePermId extends IDataSetFileId {
  dataSetId: IDataSetId;
  filePath: string;

  getDataSetId(): IDataSetId;

  setDataSetId(arg0: IDataSetId): void;

  setFilePath(arg0: string): void;

  getFilePath(): string;

  new (arg0: IDataSetId): DataSetFilePermId;

  new (arg0: IDataSetId, arg1: string): DataSetFilePermId;

  new (): DataSetFilePermId;
}

export interface IDataSetFileId extends IObjectId {}

export interface DataSetFileSearchCriteria
  extends AbstractCompositeSearchCriteria {
  withOrOperator(): DataSetFileSearchCriteria;

  withAndOperator(): DataSetFileSearchCriteria;

  withDataSet(): DataSetSearchCriteria;

  withOperator(arg0: SearchOperator): AbstractCompositeSearchCriteria;

  setCriteria(arg0: ISearchCriteria[]): void;

  getCriteria(): ISearchCriteria[];

  getOperator(): SearchOperator;

  isNegated(): boolean;

  new (): DataSetFileSearchCriteria;
}

export interface Serializable {}

export interface KeyDeserializer {
  deserializeKey(
    arg0: string,
    arg1: $com$fasterxml$jackson$databind$DeserializationContext$,
  ): any;

  new (): KeyDeserializer;
}

export type CacheMode = "NO_CACHE" | "CACHE" | "RELOAD_AND_CACHE";

export type SortParameter =
  | "FULL_MATCH_CODE_BOOST"
  | "PARTIAL_MATCH_CODE_BOOST"
  | "FULL_MATCH_TYPE_BOOST"
  | "FULL_MATCH_PROPERTY_BOOST"
  | "PARTIAL_MATCH_PROPERTY_BOOST"
  | "MATCH_VALUE"
  | "PREFIX_MATCH_VALUE";

export type SearchFieldType =
  | "PROPERTY"
  | "ATTRIBUTE"
  | "ANY_PROPERTY"
  | "ANY_FIELD";

export type SearchOperator = "AND" | "OR";

export type ArchivingStatus =
  | "AVAILABLE"
  | "LOCKED"
  | "ARCHIVED"
  | "UNARCHIVE_PENDING"
  | "ARCHIVE_PENDING"
  | "BACKUP_PENDING";

export type Complete = "YES" | "NO" | "UNKNOWN";

export type DataSetKind = "PHYSICAL" | "CONTAINER" | "LINK";

export type DataSetRelationType =
  | "EXPERIMENT"
  | "SAMPLE"
  | "PARENT"
  | "CHILD"
  | "CONTAINER"
  | "COMPONENT";

export type DataSetSearchRelation =
  | "DATASET"
  | "PARENTS"
  | "CHILDREN"
  | "CONTAINER";

export type EntityKind = "MATERIAL" | "EXPERIMENT" | "SAMPLE" | "DATA_SET";

export type EntityType =
  | "ATTACHMENT"
  | "DATA_SET"
  | "EXPERIMENT"
  | "SPACE"
  | "MATERIAL"
  | "PROJECT"
  | "PROPERTY_TYPE"
  | "SAMPLE"
  | "VOCABULARY"
  | "AUTHORIZATION_GROUP"
  | "TAG";

export type EventType = "DELETION" | "MOVEMENT" | "FREEZING";

export type ExperimentRelationType = "PROJECT" | "SAMPLE" | "DATA_SET";

export type ExternalDmsAddressType = "OPENBIS" | "URL" | "FILE_SYSTEM";

export type GlobalSearchObjectKind =
  | "EXPERIMENT"
  | "SAMPLE"
  | "DATA_SET"
  | "MATERIAL";

export type ObjectKind =
  | "AUTHORIZATION_GROUP"
  | "SAMPLE"
  | "EXPERIMENT"
  | "MATERIAL"
  | "DATA_SET"
  | "SAMPLE_TYPE"
  | "EXPERIMENT_TYPE"
  | "MATERIAL_TYPE"
  | "DATASET_TYPE"
  | "FILE_FORMAT_TYPE"
  | "PROJECT"
  | "SPACE"
  | "PROPERTY_TYPE"
  | "PROPERTY_TYPE_ASSIGNMENT"
  | "VOCABULARY"
  | "VOCABULARY_TERM"
  | "ROLE_ASSIGNMENT"
  | "PERSON"
  | "GRID_CUSTOM_FILTER"
  | "GRID_CUSTOM_COLUMN"
  | "SCRIPT"
  | "DELETION"
  | "POSTREGISTRATION_QUEUE"
  | "QUERY"
  | "METAPROJECT"
  | "PERSONAL_ACCESS_TOKEN";

export type OperationKind = "CREATE_OR_DELETE" | "UPDATE";

export type OperationExecutionAvailability =
  | "AVAILABLE"
  | "DELETE_PENDING"
  | "DELETED"
  | "TIME_OUT_PENDING"
  | "TIMED_OUT";

export type OperationExecutionState =
  | "NEW"
  | "SCHEDULED"
  | "RUNNING"
  | "FINISHED"
  | "FAILED";

/**
 * Values:
 * - `JYTHON`
 * - `PREDEPLOYED` - @deprecated
 */
export type PluginKind = "JYTHON" | "PREDEPLOYED";

export type PluginType =
  | "DYNAMIC_PROPERTY"
  | "MANAGED_PROPERTY"
  | "ENTITY_VALIDATION";

export type ProjectRelationType = "SPACE" | "EXPERIMENT" | "SAMPLE";

export type DataType =
  | "INTEGER"
  | "VARCHAR"
  | "MULTILINE_VARCHAR"
  | "REAL"
  | "TIMESTAMP"
  | "BOOLEAN"
  | "CONTROLLEDVOCABULARY"
  | "MATERIAL"
  | "HYPERLINK"
  | "XML"
  | "SAMPLE"
  | "DATE"
  | "JSON"
  | "ARRAY_INTEGER"
  | "ARRAY_REAL"
  | "ARRAY_STRING"
  | "ARRAY_TIMESTAMP";

export type QueryType =
  | "GENERIC"
  | "EXPERIMENT"
  | "SAMPLE"
  | "DATA_SET"
  | "MATERIAL";

export type Right = "CREATE" | "UPDATE" | "DELETE";

export type Role =
  | "DISABLED"
  | "ADMIN"
  | "USER"
  | "POWER_USER"
  | "OBSERVER"
  | "ETL_SERVER";

export type RoleLevel = "INSTANCE" | "SPACE" | "PROJECT";

export type SampleRelationType =
  | "SPACE"
  | "PROJECT"
  | "EXPERIMENT"
  | "PARENT"
  | "CHILD"
  | "CONTAINER"
  | "COMPONENT"
  | "DATA_SET";

export type SampleSearchRelation =
  | "SAMPLE"
  | "PARENTS"
  | "CHILDREN"
  | "CONTAINER";

export type FastDownloadMethod =
  | "START_DOWNLOAD_SESSION_METHOD"
  | "QUEUE_METHOD"
  | "DOWNLOAD_METHOD"
  | "FINISH_DOWNLOAD_SESSION_METHOD";

export type FastDownloadParameter =
  | "METHOD_PARAMETER"
  | "RANGES_PARAMETER"
  | "DOWNLOAD_ITEM_IDS_PARAMETER"
  | "NUMBER_OF_CHUNKS_PARAMETER"
  | "WISHED_NUMBER_OF_STREAMS_PARAMETER"
  | "DOWNLOAD_STREAM_ID_PARAMETER"
  | "DOWNLOAD_SESSION_ID_PARAMETER"
  | "USER_SESSION_ID_PARAMETER";
