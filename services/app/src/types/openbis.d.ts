/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2023-08-16 13:00:31.

export interface OpenBIS {
    createRoleAssignments: (arg0: RoleAssignmentCreation[]) => Promise<RoleAssignmentTechId[]>;
    createPersons: (arg0: PersonCreation[]) => Promise<PersonPermId[]>;
    createExternalDataManagementSystems: (arg0: ExternalDmsCreation[]) => Promise<ExternalDmsPermId[]>;
    createQueries: (arg0: QueryCreation[]) => Promise<QueryTechId[]>;
    createSemanticAnnotations: (arg0: SemanticAnnotationCreation[]) => Promise<SemanticAnnotationPermId[]>;
    createPersonalAccessTokens: (arg0: PersonalAccessTokenCreation[]) => Promise<PersonalAccessTokenPermId[]>;
    updateSpaces: (arg0: SpaceUpdate[]) => Promise<void>;
    updateProjects: (arg0: ProjectUpdate[]) => Promise<void>;
    updateExperiments: (arg0: ExperimentUpdate[]) => Promise<void>;
    updateExperimentTypes: (arg0: ExperimentTypeUpdate[]) => Promise<void>;
    updateSamples: (arg0: SampleUpdate[]) => Promise<void>;
    updateSampleTypes: (arg0: SampleTypeUpdate[]) => Promise<void>;
    updateDataSets: (arg0: DataSetUpdate[]) => Promise<void>;
    updateDataSetTypes: (arg0: DataSetTypeUpdate[]) => Promise<void>;
    updateMaterials: (arg0: MaterialUpdate[]) => Promise<void>;
    updateMaterialTypes: (arg0: MaterialTypeUpdate[]) => Promise<void>;
    updateExternalDataManagementSystems: (arg0: ExternalDmsUpdate[]) => Promise<void>;
    updatePropertyTypes: (arg0: PropertyTypeUpdate[]) => Promise<void>;
    updatePlugins: (arg0: PluginUpdate[]) => Promise<void>;
    updateVocabularies: (arg0: VocabularyUpdate[]) => Promise<void>;
    updateVocabularyTerms: (arg0: VocabularyTermUpdate[]) => Promise<void>;
    updateTags: (arg0: TagUpdate[]) => Promise<void>;
    updateAuthorizationGroups: (arg0: AuthorizationGroupUpdate[]) => Promise<void>;
    updatePersons: (arg0: PersonUpdate[]) => Promise<void>;
    updateOperationExecutions: (arg0: OperationExecutionUpdate[]) => Promise<void>;
    updateSemanticAnnotations: (arg0: SemanticAnnotationUpdate[]) => Promise<void>;
    updateQueries: (arg0: QueryUpdate[]) => Promise<void>;
    updatePersonalAccessTokens: (arg0: PersonalAccessTokenUpdate[]) => Promise<void>;
    getRights: (arg0: IObjectId[], arg1: RightsFetchOptions) => Promise<Map<IObjectId, Rights>>;
    getSpaces: (arg0: ISpaceId[], arg1: SpaceFetchOptions) => Promise<Map<ISpaceId, Space>>;
    getExperiments: (arg0: IExperimentId[], arg1: ExperimentFetchOptions) => Promise<Map<IExperimentId, Experiment>>;
    getExperimentTypes: (arg0: IEntityTypeId[], arg1: ExperimentTypeFetchOptions) => Promise<Map<IEntityTypeId, ExperimentType>>;
    getSamples: (arg0: ISampleId[], arg1: SampleFetchOptions) => Promise<Map<ISampleId, Sample>>;
    getSampleTypes: (arg0: IEntityTypeId[], arg1: SampleTypeFetchOptions) => Promise<Map<IEntityTypeId, SampleType>>;
    getDataSets: (arg0: IDataSetId[], arg1: DataSetFetchOptions) => Promise<Map<IDataSetId, DataSet>>;
    getDataSetTypes: (arg0: IEntityTypeId[], arg1: DataSetTypeFetchOptions) => Promise<Map<IEntityTypeId, DataSetType>>;
    getMaterials: (arg0: IMaterialId[], arg1: MaterialFetchOptions) => Promise<Map<IMaterialId, Material>>;
    getMaterialTypes: (arg0: IEntityTypeId[], arg1: MaterialTypeFetchOptions) => Promise<Map<IEntityTypeId, MaterialType>>;
    getPropertyTypes: (arg0: IPropertyTypeId[], arg1: PropertyTypeFetchOptions) => Promise<Map<IPropertyTypeId, PropertyType>>;
    getVocabularies: (arg0: IVocabularyId[], arg1: VocabularyFetchOptions) => Promise<Map<IVocabularyId, Vocabulary>>;
    getVocabularyTerms: (arg0: IVocabularyTermId[], arg1: VocabularyTermFetchOptions) => Promise<Map<IVocabularyTermId, VocabularyTerm>>;
    login: (arg0: String, arg1: String) => Promise<String>;
    setSessionToken: (arg0: String) => Promise<void>;
    loginAs: (arg0: String, arg1: String, arg2: String) => Promise<String>;
    loginAsAnonymousUser: () => Promise<String>;
    logout: () => Promise<void>;
    getSessionInformation: () => Promise<SessionInformation>;
    isSessionActive: () => Promise<boolean>;
    createSpaces: (arg0: SpaceCreation[]) => Promise<SpacePermId[]>;
    createExperiments: (arg0: ExperimentCreation[]) => Promise<ExperimentPermId[]>;
    createExperimentTypes: (arg0: ExperimentTypeCreation[]) => Promise<EntityTypePermId[]>;
    createSamples: (arg0: SampleCreation[]) => Promise<SamplePermId[]>;
    createSampleTypes: (arg0: SampleTypeCreation[]) => Promise<EntityTypePermId[]>;
    createDataSetTypes: (arg0: DataSetTypeCreation[]) => Promise<EntityTypePermId[]>;
    createMaterials: (arg0: MaterialCreation[]) => Promise<MaterialPermId[]>;
    createMaterialTypes: (arg0: MaterialTypeCreation[]) => Promise<EntityTypePermId[]>;
    createPropertyTypes: (arg0: PropertyTypeCreation[]) => Promise<PropertyTypePermId[]>;
    createPlugins: (arg0: PluginCreation[]) => Promise<PluginPermId[]>;
    createVocabularies: (arg0: VocabularyCreation[]) => Promise<VocabularyPermId[]>;
    createVocabularyTerms: (arg0: VocabularyTermCreation[]) => Promise<VocabularyTermPermId[]>;
    createTags: (arg0: TagCreation[]) => Promise<TagPermId[]>;
    createAuthorizationGroups: (arg0: AuthorizationGroupCreation[]) => Promise<AuthorizationGroupPermId[]>;
    getAuthorizationGroups: (arg0: IAuthorizationGroupId[], arg1: AuthorizationGroupFetchOptions) => Promise<Map<IAuthorizationGroupId, AuthorizationGroup>>;
    getRoleAssignments: (arg0: IRoleAssignmentId[], arg1: RoleAssignmentFetchOptions) => Promise<Map<IRoleAssignmentId, RoleAssignment>>;
    getPersons: (arg0: IPersonId[], arg1: PersonFetchOptions) => Promise<Map<IPersonId, Person>>;
    getExternalDataManagementSystems: (arg0: IExternalDmsId[], arg1: ExternalDmsFetchOptions) => Promise<Map<IExternalDmsId, ExternalDms>>;
    getSemanticAnnotations: (arg0: ISemanticAnnotationId[], arg1: SemanticAnnotationFetchOptions) => Promise<Map<ISemanticAnnotationId, SemanticAnnotation>>;
    getOperationExecutions: (arg0: IOperationExecutionId[], arg1: OperationExecutionFetchOptions) => Promise<Map<IOperationExecutionId, OperationExecution>>;
    getQueries: (arg0: IQueryId[], arg1: QueryFetchOptions) => Promise<Map<IQueryId, Query>>;
    getQueryDatabases: (arg0: IQueryDatabaseId[], arg1: QueryDatabaseFetchOptions) => Promise<Map<IQueryDatabaseId, QueryDatabase>>;
    getPersonalAccessTokens: (arg0: IPersonalAccessTokenId[], arg1: PersonalAccessTokenFetchOptions) => Promise<Map<IPersonalAccessTokenId, PersonalAccessToken>>;
    searchSpaces: (arg0: SpaceSearchCriteria, arg1: SpaceFetchOptions) => Promise<SearchResult<Space>>;
    searchProjects: (arg0: ProjectSearchCriteria, arg1: ProjectFetchOptions) => Promise<SearchResult<Project>>;
    searchExperiments: (arg0: ExperimentSearchCriteria, arg1: ExperimentFetchOptions) => Promise<SearchResult<Experiment>>;
    searchExperimentTypes: (arg0: ExperimentTypeSearchCriteria, arg1: ExperimentTypeFetchOptions) => Promise<SearchResult<ExperimentType>>;
    searchSamples: (arg0: SampleSearchCriteria, arg1: SampleFetchOptions) => Promise<SearchResult<Sample>>;
    searchSampleTypes: (arg0: SampleTypeSearchCriteria, arg1: SampleTypeFetchOptions) => Promise<SearchResult<SampleType>>;
    searchDataSets: (arg0: DataSetSearchCriteria, arg1: DataSetFetchOptions) => Promise<SearchResult<DataSet>>;
    searchDataSetTypes: (arg0: DataSetTypeSearchCriteria, arg1: DataSetTypeFetchOptions) => Promise<SearchResult<DataSetType>>;
    searchMaterials: (arg0: MaterialSearchCriteria, arg1: MaterialFetchOptions) => Promise<SearchResult<Material>>;
    searchExternalDataManagementSystems: (arg0: ExternalDmsSearchCriteria, arg1: ExternalDmsFetchOptions) => Promise<SearchResult<ExternalDms>>;
    searchMaterialTypes: (arg0: MaterialTypeSearchCriteria, arg1: MaterialTypeFetchOptions) => Promise<SearchResult<MaterialType>>;
    searchPlugins: (arg0: PluginSearchCriteria, arg1: PluginFetchOptions) => Promise<SearchResult<Plugin>>;
    searchVocabularies: (arg0: VocabularySearchCriteria, arg1: VocabularyFetchOptions) => Promise<SearchResult<Vocabulary>>;
    searchVocabularyTerms: (arg0: VocabularyTermSearchCriteria, arg1: VocabularyTermFetchOptions) => Promise<SearchResult<VocabularyTerm>>;
    searchTags: (arg0: TagSearchCriteria, arg1: TagFetchOptions) => Promise<SearchResult<Tag>>;
    searchAuthorizationGroups: (arg0: AuthorizationGroupSearchCriteria, arg1: AuthorizationGroupFetchOptions) => Promise<SearchResult<AuthorizationGroup>>;
    searchRoleAssignments: (arg0: RoleAssignmentSearchCriteria, arg1: RoleAssignmentFetchOptions) => Promise<SearchResult<RoleAssignment>>;
    searchPersons: (arg0: PersonSearchCriteria, arg1: PersonFetchOptions) => Promise<SearchResult<Person>>;
    searchCustomASServices: (arg0: CustomASServiceSearchCriteria, arg1: CustomASServiceFetchOptions) => Promise<SearchResult<CustomASService>>;
    searchSearchDomainServices: (arg0: SearchDomainServiceSearchCriteria, arg1: SearchDomainServiceFetchOptions) => Promise<SearchResult<SearchDomainService>>;
    searchAggregationServices: (arg0: AggregationServiceSearchCriteria, arg1: AggregationServiceFetchOptions) => Promise<SearchResult<AggregationService>>;
    searchReportingServices: (arg0: ReportingServiceSearchCriteria, arg1: ReportingServiceFetchOptions) => Promise<SearchResult<ReportingService>>;
    searchProcessingServices: (arg0: ProcessingServiceSearchCriteria, arg1: ProcessingServiceFetchOptions) => Promise<SearchResult<ProcessingService>>;
    searchObjectKindModifications: (arg0: ObjectKindModificationSearchCriteria, arg1: ObjectKindModificationFetchOptions) => Promise<SearchResult<ObjectKindModification>>;
    searchGlobally: (arg0: GlobalSearchCriteria, arg1: GlobalSearchObjectFetchOptions) => Promise<SearchResult<GlobalSearchObject>>;
    searchOperationExecutions: (arg0: OperationExecutionSearchCriteria, arg1: OperationExecutionFetchOptions) => Promise<SearchResult<OperationExecution>>;
    searchDataStores: (arg0: DataStoreSearchCriteria, arg1: DataStoreFetchOptions) => Promise<SearchResult<DataStore>>;
    searchSemanticAnnotations: (arg0: SemanticAnnotationSearchCriteria, arg1: SemanticAnnotationFetchOptions) => Promise<SearchResult<SemanticAnnotation>>;
    searchPropertyTypes: (arg0: PropertyTypeSearchCriteria, arg1: PropertyTypeFetchOptions) => Promise<SearchResult<PropertyType>>;
    searchPropertyAssignments: (arg0: PropertyAssignmentSearchCriteria, arg1: PropertyAssignmentFetchOptions) => Promise<SearchResult<PropertyAssignment>>;
    searchQueries: (arg0: QuerySearchCriteria, arg1: QueryFetchOptions) => Promise<SearchResult<Query>>;
    searchQueryDatabases: (arg0: QueryDatabaseSearchCriteria, arg1: QueryDatabaseFetchOptions) => Promise<SearchResult<QueryDatabase>>;
    deleteProjects: (arg0: IProjectId[], arg1: ProjectDeletionOptions) => Promise<void>;
    deleteExperiments: (arg0: IExperimentId[], arg1: ExperimentDeletionOptions) => Promise<IDeletionId>;
    deleteSamples: (arg0: ISampleId[], arg1: SampleDeletionOptions) => Promise<IDeletionId>;
    deleteDataSets: (arg0: IDataSetId[], arg1: DataSetDeletionOptions) => Promise<IDeletionId>;
    deleteMaterials: (arg0: IMaterialId[], arg1: MaterialDeletionOptions) => Promise<void>;
    deletePlugins: (arg0: IPluginId[], arg1: PluginDeletionOptions) => Promise<void>;
    deletePropertyTypes: (arg0: IPropertyTypeId[], arg1: PropertyTypeDeletionOptions) => Promise<void>;
    deleteVocabularies: (arg0: IVocabularyId[], arg1: VocabularyDeletionOptions) => Promise<void>;
    deleteVocabularyTerms: (arg0: IVocabularyTermId[], arg1: VocabularyTermDeletionOptions) => Promise<void>;
    deleteExperimentTypes: (arg0: IEntityTypeId[], arg1: ExperimentTypeDeletionOptions) => Promise<void>;
    deleteSampleTypes: (arg0: IEntityTypeId[], arg1: SampleTypeDeletionOptions) => Promise<void>;
    deleteDataSetTypes: (arg0: IEntityTypeId[], arg1: DataSetTypeDeletionOptions) => Promise<void>;
    deleteMaterialTypes: (arg0: IEntityTypeId[], arg1: MaterialTypeDeletionOptions) => Promise<void>;
    deleteExternalDataManagementSystems: (arg0: IExternalDmsId[], arg1: ExternalDmsDeletionOptions) => Promise<void>;
    deleteTags: (arg0: ITagId[], arg1: TagDeletionOptions) => Promise<void>;
    deleteAuthorizationGroups: (arg0: IAuthorizationGroupId[], arg1: AuthorizationGroupDeletionOptions) => Promise<void>;
    deleteRoleAssignments: (arg0: IRoleAssignmentId[], arg1: RoleAssignmentDeletionOptions) => Promise<void>;
    deleteOperationExecutions: (arg0: IOperationExecutionId[], arg1: OperationExecutionDeletionOptions) => Promise<void>;
    deleteSemanticAnnotations: (arg0: ISemanticAnnotationId[], arg1: SemanticAnnotationDeletionOptions) => Promise<void>;
    deleteQueries: (arg0: IQueryId[], arg1: QueryDeletionOptions) => Promise<void>;
    deletePersons: (arg0: IPersonId[], arg1: PersonDeletionOptions) => Promise<void>;
    deletePersonalAccessTokens: (arg0: IPersonalAccessTokenId[], arg1: PersonalAccessTokenDeletionOptions) => Promise<void>;
    searchDeletions: (arg0: DeletionSearchCriteria, arg1: DeletionFetchOptions) => Promise<SearchResult<Deletion>>;
    searchEvents: (arg0: EventSearchCriteria, arg1: EventFetchOptions) => Promise<SearchResult<Event>>;
    searchPersonalAccessTokens: (arg0: PersonalAccessTokenSearchCriteria, arg1: PersonalAccessTokenFetchOptions) => Promise<SearchResult<PersonalAccessToken>>;
    searchSessionInformation: (arg0: SessionInformationSearchCriteria, arg1: SessionInformationFetchOptions) => Promise<SearchResult<SessionInformation>>;
    revertDeletions: (arg0: IDeletionId[]) => Promise<void>;
    confirmDeletions: (arg0: IDeletionId[]) => Promise<void>;
    executeCustomASService: (arg0: ICustomASServiceId, arg1: CustomASServiceExecutionOptions) => Promise<Object>;
    executeSearchDomainService: (arg0: SearchDomainServiceExecutionOptions) => Promise<SearchResult<SearchDomainServiceExecutionResult>>;
    executeAggregationService: (arg0: IDssServiceId, arg1: AggregationServiceExecutionOptions) => Promise<TableModel>;
    executeReportingService: (arg0: IDssServiceId, arg1: ReportingServiceExecutionOptions) => Promise<TableModel>;
    executeProcessingService: (arg0: IDssServiceId, arg1: ProcessingServiceExecutionOptions) => Promise<void>;
    executeSql: (arg0: String, arg1: SqlExecutionOptions) => Promise<TableModel>;
    evaluatePlugin: (arg0: PluginEvaluationOptions) => Promise<PluginEvaluationResult>;
    archiveDataSets: (arg0: IDataSetId[], arg1: DataSetArchiveOptions) => Promise<void>;
    unarchiveDataSets: (arg0: IDataSetId[], arg1: DataSetUnarchiveOptions) => Promise<void>;
    lockDataSets: (arg0: IDataSetId[], arg1: DataSetLockOptions) => Promise<void>;
    unlockDataSets: (arg0: IDataSetId[], arg1: DataSetUnlockOptions) => Promise<void>;
    executeOperations: (arg0: String, arg1: IOperation[], arg2: IOperationExecutionOptions) => Promise<IOperationExecutionResults>;
    getServerInformation: () => Promise<Map<String, String>>;
    getServerPublicInformation: () => Promise<Map<String, String>>;
    createPermIdStrings: (arg0: int) => Promise<String[]>;
    createCodes: (arg0: String, arg1: EntityKind, arg2: int) => Promise<String[]>;
    searchFiles: (arg0: DataSetFileSearchCriteria, arg1: DataSetFileFetchOptions) => Promise<SearchResult<DataSetFile>>;
    downloadFiles: (arg0: IDataSetFileId[], arg1: DataSetFileDownloadOptions) => Promise<InputStream>;
    createFastDownloadSession: (arg0: IDataSetFileId[], arg1: FastDownloadSessionOptions) => Promise<FastDownloadSession>;
    createUploadedDataSet: (arg0: UploadedDataSetCreation) => Promise<DataSetPermId>;
    uploadFileWorkspaceDSS: (arg0: Path) => Promise<String>;
    createDataSetsAS: (arg0: DataSetCreation[]) => Promise<DataSetPermId[]>;
    createDataSetsDSS: (arg0: FullDataSetCreation[]) => Promise<DataSetPermId[]>;
    getSessionToken: () => Promise<String>;
    getManagedPersonalAccessToken: (arg0: String) => Promise<PersonalAccessTokenPermId>;
    getSemanticSubjectCreation: (arg0: EntityKind, arg1: String, arg2: String, arg3: String, arg4: String) => Promise<SemanticAnnotationCreation>;
    getSemanticPredicateWithSubjectCreation: (arg0: EntityKind, arg1: String, arg2: String, arg3: String, arg4: String, arg5: String) => Promise<SemanticAnnotationCreation>;
    getSemanticPredicateCreation: (arg0: String, arg1: String, arg2: String, arg3: String) => Promise<SemanticAnnotationCreation>;
    getProjects: (arg0: IProjectId[], arg1: ProjectFetchOptions) => Promise<Map<IProjectId, Project>>;
    getPlugins: (arg0: IPluginId[], arg1: PluginFetchOptions) => Promise<Map<IPluginId, Plugin>>;
    deleteSpaces: (arg0: ISpaceId[], arg1: SpaceDeletionOptions) => Promise<void>;
    createProjects: (arg0: ProjectCreation[]) => Promise<ProjectPermId[]>;
    executeQuery: (arg0: IQueryId, arg1: QueryExecutionOptions) => Promise<TableModel>;
    getTags: (arg0: ITagId[], arg1: TagFetchOptions) => Promise<Map<ITagId, Tag>>;
    sessionToken: string;
    sessionInformation: SessionInformation;
    sessionActive: boolean;
    serverInformation: { [index: string]: string };
    serverPublicInformation: { [index: string]: string };
}

export interface ITableCell extends Serializable {
}

export interface ObjectToString extends Serializable {
    append: (arg0: String, arg1: Object) => ObjectToString;
}

export interface Relationship extends Serializable {
    getChildAnnotations: () => Map<String, String>;
    setChildAnnotations: (arg0: Map<String, String>) => void;
    getParentAnnotations: () => Map<String, String>;
    setParentAnnotations: (arg0: Map<String, String>) => void;
    addChildAnnotation: (arg0: String, arg1: String) => Relationship;
    addParentAnnotation: (arg0: String, arg1: String) => Relationship;
    childAnnotations: { [index: string]: string };
    parentAnnotations: { [index: string]: string };
}

export interface TableColumn extends Serializable {
    getTitle: () => String;
    title: string;
}

export interface TableDoubleCell extends ITableCell {
    getValue: () => double;
    value: number;
}

export interface TableLongCell extends ITableCell {
    getValue: () => long;
    value: number;
}

export interface TableModel extends Serializable {
    getColumns: () => TableColumn[];
    getRows: () => ITableCell[][];
    columns: TableColumn[];
    rows: ITableCell[][];
}

export interface TableStringCell extends ITableCell {
    getValue: () => String;
    value: string;
}

export interface CreateObjectsOperation<C> extends IOperation {
    getMessage: () => String;
    getCreations: () => any[];
    creations: C[];
}

export interface CreateObjectsOperationResult<ID> extends IOperationResult {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: ID[];
}

export interface ICreation extends Serializable {
}

export interface IObjectCreation {
}

export interface DeleteObjectsOperation<ID, OPTIONS> extends IOperation {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    objectIds: ID[];
    options: OPTIONS;
}

export interface DeleteObjectsOperationResult extends IOperationResult {
    getMessage: () => String;
}

export interface DeleteObjectsWithTrashOperationResult extends DeleteObjectsOperationResult {
    getMessage: () => String;
    getDeletionId: () => IDeletionId;
    deletionId: IDeletionId;
}

export interface DeleteObjectsWithoutTrashOperationResult extends DeleteObjectsOperationResult {
    getMessage: () => String;
}

export interface EmptyFetchOptions extends FetchOptions<void> {
    getSortBy: () => SortOptions<Void>;
    sortBy: () => SortOptions<Void>;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    sortBy: SortOptions<void>;
}

export interface EntitySortOptions<OBJECT> extends SortOptions<OBJECT> {
    code: () => SortOrder;
    getPermId: () => SortOrder;
    registrationDate: () => SortOrder;
    getRegistrationDate: () => SortOrder;
    permId: () => SortOrder;
    modificationDate: () => SortOrder;
    getModificationDate: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
    permId: SortOrder;
    registrationDate: SortOrder;
    modificationDate: SortOrder;
    code: SortOrder;
}

export interface EntityWithPropertiesSortOptions<OBJECT> extends EntitySortOptions<OBJECT> {
    type: () => SortOrder;
    getProperty: (arg0: String) => SortOrder;
    getType: () => SortOrder;
    property: (arg0: String) => SortOrder;
    fetchedFieldsScore: () => SortOrder;
    getFetchedFieldsScore: () => SortOrder;
    stringMatchPropertyScore: (arg0: String, arg1: String) => SortOrder;
    stringPrefixMatchPropertyScore: (arg0: String, arg1: String) => SortOrder;
    stringMatchAnyPropertyScore: (arg0: String) => SortOrder;
    stringPrefixMatchAnyPropertyScore: (arg0: String) => SortOrder;
    code: () => SortOrder;
    getPermId: () => SortOrder;
    registrationDate: () => SortOrder;
    getRegistrationDate: () => SortOrder;
    permId: () => SortOrder;
    modificationDate: () => SortOrder;
    getModificationDate: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
    type: SortOrder;
    fetchedFieldsScore: SortOrder;
}

export interface FetchOptions<OBJECT> extends Serializable {
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    getSortBy: () => SortOptions<any>;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    sortBy: () => SortOptions<any>;
    count: number;
    from: number;
    cacheMode: CacheMode;
    sortBy: SortOptions<OBJECT>;
}

export interface FetchOptionsToStringBuilder extends Serializable {
    addFetchOption: (arg0: String, arg1: FetchOptions<Object>) => FetchOptionsToStringBuilder;
}

export interface IFetchOptionsMatcher {
    areMatching: (arg0: Object, arg1: Object) => boolean;
}

export interface IFetchPropertyHandler extends Serializable {
    areMatching: (arg0: Object, arg1: Object, arg2: IFetchOptionsMatcher) => boolean;
}

export interface SortOptions<OBJECT> extends Serializable {
    getSortings: () => Sorting[];
    sortings: Sorting[];
}

export interface SortOrder extends Serializable {
    desc: () => void;
    isAsc: () => boolean;
    asc: () => void;
    asc: boolean;
}

export interface Sorting extends Serializable {
    getField: () => String;
    getParameters: () => Map<SortParameter, String>;
    getOrder: () => SortOrder;
    field: string;
    order: SortOrder;
    parameters: { [P in SortParameter]?: string };
}

export interface GetObjectsOperation<ID, FETCH_OPTIONS> extends IOperation {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    objectIds: ID[];
    fetchOptions: FETCH_OPTIONS;
}

export interface GetObjectsOperationResult<ID, OBJECT> extends IOperationResult {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: ID[];
    objects: OBJECT[];
}

export interface GetServerInformationOperation extends IOperation {
    getMessage: () => String;
}

export interface GetServerInformationOperationResult extends IOperationResult {
    getMessage: () => String;
    getServerInformation: () => Map<String, String>;
    serverInformation: { [index: string]: string };
}

export interface GetServerPublicInformationOperation extends IOperation {
    getMessage: () => String;
}

export interface GetServerPublicInformationOperationResult extends IOperationResult {
    getMessage: () => String;
    getServerInformation: () => Map<String, String>;
    serverInformation: { [index: string]: string };
}

export interface CreationId extends ISampleId, IDataSetId, IExperimentId, IProjectId, ISpaceId, IMaterialId {
    getCreationId: () => String;
    setCreationId: (arg0: String) => void;
    creationId: string;
}

export interface IObjectId extends Serializable {
}

export interface ObjectIdentifier extends IObjectId {
    getIdentifier: () => String;
    identifier: string;
}

export interface ObjectPermId extends IObjectId {
    getPermId: () => String;
    permId: string;
}

export interface ObjectTechId extends IObjectId {
    getTechId: () => Long;
    techId: number;
    id: string;
}

export interface IAttachmentsHolder {
    getAttachments: () => Attachment[];
    attachments: Attachment[];
}

export interface ICodeHolder {
    getCode: () => String;
    code: string;
}

export interface ICreationIdHolder {
    getCreationId: () => CreationId;
    creationId: CreationId;
}

export interface IDataSetCodesHolder {
    getDataSetCodes: () => String[];
    dataSetCodes: string[];
}

export interface IDataSetsHolder {
    getDataSets: () => DataSet[];
    dataSets: DataSet[];
}

export interface IDescriptionHolder {
    getDescription: () => String;
    description: string;
}

export interface IEntityType extends ICodeHolder, IDescriptionHolder, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder, IValidationPluginHolder {
    getCode: () => String;
    getDescription: () => String;
    getModificationDate: () => Date;
    getPermId: () => IObjectId;
    getPropertyAssignments: () => PropertyAssignment[];
    getValidationPlugin: () => Plugin;
}

export interface IEntityTypeHolder {
    getType: () => IEntityType;
    type: IEntityType;
}

export interface IExperimentHolder {
    getExperiment: () => Experiment;
    experiment: Experiment;
}

export interface IExperimentsHolder {
    getExperiments: () => Experiment[];
    experiments: Experiment[];
}

export interface IIdentifierHolder {
    getIdentifier: () => ObjectIdentifier;
    identifier: ObjectIdentifier;
}

export interface ILabelHolder {
    getLabel: () => String;
    label: string;
}

export interface IMaterialPropertiesHolder {
    getMaterialProperties: () => Map<String, Material>;
    setMaterialProperties: (arg0: Map<String, Material>) => void;
    getMaterialProperty: (arg0: String) => Material;
    setMaterialProperty: (arg0: String, arg1: Material) => void;
    materialProperties: { [index: string]: Material };
}

export interface IMaterialsHolder {
    getMaterials: () => Material[];
    materials: Material[];
}

export interface IMetaDataUpdateHolder extends IUpdate {
    getMetaData: () => ListUpdateMapValues;
    metaData: ListUpdateMapValues;
}

export interface IModificationDateHolder {
    getModificationDate: () => Date;
    modificationDate: Date;
}

export interface IModifierHolder {
    getModifier: () => Person;
    modifier: Person;
}

export interface INameHolder {
    getName: () => String;
    name: string;
}

export interface IOwnerHolder {
    getOwner: () => Person;
    owner: Person;
}

export interface IParentChildrenHolder<T> {
    getChildren: () => any[];
    getParents: () => any[];
    children: T[];
    parents: T[];
}

export interface IPermIdHolder {
    getPermId: () => IObjectId;
    permId: IObjectId;
}

export interface IProjectHolder {
    getProject: () => Project;
    project: Project;
}

export interface IProjectsHolder {
    getProjects: () => Project[];
    projects: Project[];
}

export interface IPropertiesHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    getBooleanProperty: (arg0: String) => Boolean;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    properties: { [index: string]: string };
}

export interface IPropertyAssignmentsHolder {
    getPropertyAssignments: () => PropertyAssignment[];
    propertyAssignments: PropertyAssignment[];
}

export interface IPropertyTypeHolder {
    getPropertyType: () => PropertyType;
    propertyType: PropertyType;
}

export interface IRegistrationDateHolder {
    getRegistrationDate: () => Date;
    registrationDate: Date;
}

export interface IRegistratorHolder {
    getRegistrator: () => Person;
    registrator: Person;
}

export interface ISampleHolder {
    getSample: () => Sample;
    sample: Sample;
}

export interface ISamplesHolder {
    getSamples: () => Sample[];
    samples: Sample[];
}

export interface ISemanticAnnotationsHolder {
    getSemanticAnnotations: () => SemanticAnnotation[];
    semanticAnnotations: SemanticAnnotation[];
}

export interface ISpaceHolder {
    getSpace: () => Space;
    space: Space;
}

export interface ITagsHolder {
    getTags: () => Set<Tag>;
    tags: Tag[];
}

export interface IValidationPluginHolder {
    getValidationPlugin: () => Plugin;
    validationPlugin: Plugin;
}

export interface IOperation extends Serializable {
    getMessage: () => String;
    message: string;
}

export interface IOperationExecutionError extends Serializable {
    getMessage: () => String;
    message: string;
}

export interface IOperationExecutionProgress extends Serializable {
    getMessage: () => String;
    getTotalItemsToProcess: () => Integer;
    getNumItemsProcessed: () => Integer;
    message: string;
    totalItemsToProcess: number;
    numItemsProcessed: number;
}

export interface IOperationResult extends Serializable {
    getMessage: () => String;
    message: string;
}

export interface AbstractCompositeSearchCriteria extends AbstractSearchCriteria {
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
    criteria: ISearchCriteria[];
    operator: SearchOperator;
}

export interface AbstractDateObjectValue extends AbstractValue<Date>, IDate {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
    value: Date;
}

export interface AbstractDateValue extends AbstractValue<string>, IDate {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
    value: string;
}

export interface AbstractEntitySearchCriteria<ID> extends AbstractObjectSearchCriteria<ID> {
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withOrOperator: () => AbstractEntitySearchCriteria<any>;
    withAndOperator: () => AbstractEntitySearchCriteria<any>;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
}

export interface AbstractFieldSearchCriteria<T> extends AbstractSearchCriteria {
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldName: string;
    fieldType: SearchFieldType;
    fieldValue: T;
}

export interface AbstractNumberValue extends AbstractValue<number> {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
    value: number;
}

export interface AbstractObjectSearchCriteria<ID> extends AbstractCompositeSearchCriteria {
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface AbstractSearchCriteria extends ISearchCriteria {
    isNegated: () => boolean;
}

export interface AbstractStringValue extends AbstractValue<string> {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
    value: string;
}

export interface AbstractValue<T> extends Serializable {
    getValue: () => any;
    setValue: (arg0: any) => void;
    value: T;
}

export interface AnyBooleanPropertySearchCriteria extends BooleanFieldSearchCriteria {
    thatEquals: (arg0: boolean) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface AnyDatePropertySearchCriteria extends DateFieldSearchCriteria {
    setTimeZone: (arg0: ITimeZone) => void;
    getTimeZone: () => ITimeZone;
    thatIsLaterThanOrEqualTo: (arg0: Date) => void;
    thatIsLaterThanOrEqualTo: (arg0: String) => void;
    thatIsLaterThan: (arg0: String) => void;
    thatIsLaterThan: (arg0: Date) => void;
    thatIsEarlierThanOrEqualTo: (arg0: Date) => void;
    thatIsEarlierThanOrEqualTo: (arg0: String) => void;
    thatIsEarlierThan: (arg0: String) => void;
    thatIsEarlierThan: (arg0: Date) => void;
    withServerTimeZone: () => DateFieldSearchCriteria;
    setFieldValue: (arg0: IDate) => void;
    setFieldValue: (arg0: Object) => void;
    thatEquals: (arg0: String) => void;
    thatEquals: (arg0: Date) => void;
    formatValue: (arg0: String, arg1: IDateFormat) => Date;
    withTimeZone: (arg0: int) => DateFieldSearchCriteria;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    isNegated: () => boolean;
}

export interface AnyFieldSearchCriteria extends StringFieldSearchCriteria {
    thatMatches: (arg0: String) => void;
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface AnyNumberPropertySearchCriteria extends NumberFieldSearchCriteria {
    thatIsLessThan: (arg0: Number) => void;
    thatIsLessThanOrEqualTo: (arg0: Number) => void;
    thatIsGreaterThan: (arg0: Number) => void;
    thatIsGreaterThanOrEqualTo: (arg0: Number) => void;
    thatEquals: (arg0: Number) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface AnyPropertySearchCriteria extends StringFieldSearchCriteria {
    thatMatches: (arg0: String) => void;
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface AnyStringPropertySearchCriteria extends StringFieldSearchCriteria {
    thatMatches: (arg0: String) => void;
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface AnyStringValue extends AbstractStringValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface BooleanFieldSearchCriteria extends AbstractFieldSearchCriteria<boolean> {
    thatEquals: (arg0: boolean) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldValue: boolean;
}

export interface BooleanPropertySearchCriteria extends BooleanFieldSearchCriteria {
    thatEquals: (arg0: boolean) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface CodeSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface CodesSearchCriteria extends CollectionFieldSearchCriteria<string> {
    thatIn: (arg0: Collection<any>) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldValue: string[];
}

export interface CollectionFieldSearchCriteria<T> extends AbstractFieldSearchCriteria<T[]> {
    thatIn: (arg0: Collection<any>) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldValue: T[];
}

export interface ControlledVocabularyPropertySearchCriteria extends AbstractFieldSearchCriteria<string> {
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldValue: string;
}

export interface DateEarlierThanOrEqualToValue extends AbstractDateValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface DateEarlierThanValue extends AbstractDateValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface DateEqualToValue extends AbstractDateValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface DateFieldSearchCriteria extends AbstractFieldSearchCriteria<IDate> {
    setTimeZone: (arg0: ITimeZone) => void;
    getTimeZone: () => ITimeZone;
    thatIsLaterThanOrEqualTo: (arg0: Date) => void;
    thatIsLaterThanOrEqualTo: (arg0: String) => void;
    thatIsLaterThan: (arg0: String) => void;
    thatIsLaterThan: (arg0: Date) => void;
    thatIsEarlierThanOrEqualTo: (arg0: Date) => void;
    thatIsEarlierThanOrEqualTo: (arg0: String) => void;
    thatIsEarlierThan: (arg0: String) => void;
    thatIsEarlierThan: (arg0: Date) => void;
    withServerTimeZone: () => DateFieldSearchCriteria;
    setFieldValue: (arg0: IDate) => void;
    setFieldValue: (arg0: Object) => void;
    thatEquals: (arg0: String) => void;
    thatEquals: (arg0: Date) => void;
    formatValue: (arg0: String, arg1: IDateFormat) => Date;
    withTimeZone: (arg0: int) => DateFieldSearchCriteria;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    isNegated: () => boolean;
    fieldValue: IDate;
    timeZone: ITimeZone;
}

export interface DateLaterThanOrEqualToValue extends AbstractDateValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface DateLaterThanValue extends AbstractDateValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface DateObjectEarlierThanOrEqualToValue extends AbstractDateObjectValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface DateObjectEarlierThanValue extends AbstractDateObjectValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface DateObjectEqualToValue extends AbstractDateObjectValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface DateObjectLaterThanOrEqualToValue extends AbstractDateObjectValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface DateObjectLaterThanValue extends AbstractDateObjectValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface DatePropertySearchCriteria extends DateFieldSearchCriteria {
    setTimeZone: (arg0: ITimeZone) => void;
    getTimeZone: () => ITimeZone;
    thatIsLaterThanOrEqualTo: (arg0: Date) => void;
    thatIsLaterThanOrEqualTo: (arg0: String) => void;
    thatIsLaterThan: (arg0: String) => void;
    thatIsLaterThan: (arg0: Date) => void;
    thatIsEarlierThanOrEqualTo: (arg0: Date) => void;
    thatIsEarlierThanOrEqualTo: (arg0: String) => void;
    thatIsEarlierThan: (arg0: String) => void;
    thatIsEarlierThan: (arg0: Date) => void;
    withServerTimeZone: () => DateFieldSearchCriteria;
    setFieldValue: (arg0: IDate) => void;
    setFieldValue: (arg0: Object) => void;
    thatEquals: (arg0: String) => void;
    thatEquals: (arg0: Date) => void;
    formatValue: (arg0: String, arg1: IDateFormat) => Date;
    withTimeZone: (arg0: int) => DateFieldSearchCriteria;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    isNegated: () => boolean;
}

export interface DescriptionSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface EnumFieldSearchCriteria<T> extends AbstractFieldSearchCriteria<T> {
    thatEquals: (arg0: any) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface IDate extends Serializable {
}

export interface IDateFormat extends Serializable {
    getFormat: () => String;
    format: string;
}

export interface ISearchCriteria extends Serializable {
    isNegated: () => boolean;
    negated: boolean;
}

export interface ITimeZone extends Serializable {
}

export interface IdSearchCriteria<T> extends AbstractSearchCriteria {
    getId: () => any;
    thatEquals: (arg0: any) => void;
    isNegated: () => boolean;
    id: T;
}

export interface IdentifierSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface IdsSearchCriteria<T> extends CollectionFieldSearchCriteria<T> {
    thatIn: (arg0: Collection<any>) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface LongDateFormat extends IDateFormat {
    getFormat: () => String;
}

export interface ModificationDateSearchCriteria extends DateFieldSearchCriteria {
    setTimeZone: (arg0: ITimeZone) => void;
    getTimeZone: () => ITimeZone;
    thatIsLaterThanOrEqualTo: (arg0: Date) => void;
    thatIsLaterThanOrEqualTo: (arg0: String) => void;
    thatIsLaterThan: (arg0: String) => void;
    thatIsLaterThan: (arg0: Date) => void;
    thatIsEarlierThanOrEqualTo: (arg0: Date) => void;
    thatIsEarlierThanOrEqualTo: (arg0: String) => void;
    thatIsEarlierThan: (arg0: String) => void;
    thatIsEarlierThan: (arg0: Date) => void;
    withServerTimeZone: () => DateFieldSearchCriteria;
    setFieldValue: (arg0: IDate) => void;
    setFieldValue: (arg0: Object) => void;
    thatEquals: (arg0: String) => void;
    thatEquals: (arg0: Date) => void;
    formatValue: (arg0: String, arg1: IDateFormat) => Date;
    withTimeZone: (arg0: int) => DateFieldSearchCriteria;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    isNegated: () => boolean;
}

export interface NameSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface NormalDateFormat extends IDateFormat {
    getFormat: () => String;
}

export interface NumberEqualToValue extends AbstractNumberValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface NumberFieldSearchCriteria extends AbstractFieldSearchCriteria<AbstractNumberValue> {
    thatIsLessThan: (arg0: Number) => void;
    thatIsLessThanOrEqualTo: (arg0: Number) => void;
    thatIsGreaterThan: (arg0: Number) => void;
    thatIsGreaterThanOrEqualTo: (arg0: Number) => void;
    thatEquals: (arg0: Number) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldValue: AbstractNumberValue;
}

export interface NumberGreaterThanOrEqualToValue extends AbstractNumberValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface NumberGreaterThanValue extends AbstractNumberValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface NumberLessThanOrEqualToValue extends AbstractNumberValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface NumberLessThanValue extends AbstractNumberValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface NumberPropertySearchCriteria extends NumberFieldSearchCriteria {
    thatIsLessThan: (arg0: Number) => void;
    thatIsLessThanOrEqualTo: (arg0: Number) => void;
    thatIsGreaterThan: (arg0: Number) => void;
    thatIsGreaterThanOrEqualTo: (arg0: Number) => void;
    thatEquals: (arg0: Number) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface PermIdSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface RegistrationDateSearchCriteria extends DateFieldSearchCriteria {
    setTimeZone: (arg0: ITimeZone) => void;
    getTimeZone: () => ITimeZone;
    thatIsLaterThanOrEqualTo: (arg0: Date) => void;
    thatIsLaterThanOrEqualTo: (arg0: String) => void;
    thatIsLaterThan: (arg0: String) => void;
    thatIsLaterThan: (arg0: Date) => void;
    thatIsEarlierThanOrEqualTo: (arg0: Date) => void;
    thatIsEarlierThanOrEqualTo: (arg0: String) => void;
    thatIsEarlierThan: (arg0: String) => void;
    thatIsEarlierThan: (arg0: Date) => void;
    withServerTimeZone: () => DateFieldSearchCriteria;
    setFieldValue: (arg0: IDate) => void;
    setFieldValue: (arg0: Object) => void;
    thatEquals: (arg0: String) => void;
    thatEquals: (arg0: Date) => void;
    formatValue: (arg0: String, arg1: IDateFormat) => Date;
    withTimeZone: (arg0: int) => DateFieldSearchCriteria;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    isNegated: () => boolean;
}

export interface SamplePropertySearchCriteria extends AbstractFieldSearchCriteria<string> {
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldValue: string;
}

export interface SearchCriteriaToStringBuilder extends Serializable {
    setName: (arg0: String) => SearchCriteriaToStringBuilder;
    setCriteria: (arg0: Collection<ISearchCriteria>) => SearchCriteriaToStringBuilder;
    setOperator: (arg0: SearchOperator) => SearchCriteriaToStringBuilder;
    setNegated: (arg0: boolean) => SearchCriteriaToStringBuilder;
    name: string;
    operator: SearchOperator;
    criteria: ISearchCriteria[];
    negated: boolean;
}

export interface SearchObjectsOperation<CRITERIA, FETCH_OPTIONS> extends IOperation {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: CRITERIA;
    fetchOptions: FETCH_OPTIONS;
}

export interface SearchObjectsOperationResult<OBJECT> extends IOperationResult {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<OBJECT>;
}

export interface SearchResult<OBJECT> extends Serializable {
    getTotalCount: () => int;
    getObjects: () => any[];
    objects: OBJECT[];
    totalCount: number;
}

export interface ServerTimeZone extends ITimeZone {
}

export interface ShortDateFormat extends IDateFormat {
    getFormat: () => String;
}

export interface StrictlyStringPropertySearchCriteria extends StringFieldSearchCriteria {
    thatMatches: (arg0: String) => void;
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface StringContainsExactlyValue extends AbstractStringValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface StringContainsValue extends AbstractStringValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface StringEndsWithValue extends AbstractStringValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface StringEqualToValue extends AbstractStringValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface StringFieldSearchCriteria extends AbstractFieldSearchCriteria<AbstractStringValue> {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldValue: AbstractStringValue;
    useWildcards: boolean;
}

export interface StringGreaterThanOrEqualToValue extends AbstractStringValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface StringGreaterThanValue extends AbstractStringValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface StringLessThanOrEqualToValue extends AbstractStringValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface StringLessThanValue extends AbstractStringValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface StringMatchesValue extends AbstractStringValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface StringPropertySearchCriteria extends StringFieldSearchCriteria {
    thatMatches: (arg0: String) => void;
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface StringStartsWithValue extends AbstractStringValue {
    getValue: () => Object;
    setValue: (arg0: Object) => void;
}

export interface TechIdSearchCriteria extends NumberFieldSearchCriteria {
    thatIsLessThan: (arg0: Number) => void;
    thatIsLessThanOrEqualTo: (arg0: Number) => void;
    thatIsGreaterThan: (arg0: Number) => void;
    thatIsGreaterThanOrEqualTo: (arg0: Number) => void;
    thatEquals: (arg0: Number) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface TextAttributeSearchCriteria extends AbstractSearchCriteria {
    thatMatches: (arg0: String) => void;
    getFieldValue: () => AbstractStringValue;
    isNegated: () => boolean;
    fieldValue: AbstractStringValue;
}

export interface TimeZone extends ITimeZone {
    getHourOffset: () => int;
    hourOffset: number;
}

export interface FieldUpdateValue<T> extends Serializable {
    getValue: () => any;
    setValue: (arg0: any) => void;
    isModified: () => boolean;
    isModified: boolean;
    value: T;
}

export interface IObjectUpdate<ID> {
    getObjectId: () => any;
    objectId: ID;
}

export interface IUpdate extends Serializable {
}

export interface IdListUpdateValue<T> extends ListUpdateValue<T, T, T, T> {
    add: (arg0: any[]) => void;
    remove: (arg0: any[]) => void;
    set: (arg0: any[]) => void;
    getActions: () => ListUpdateAction<any>[];
    getAdded: () => Collection<any>;
    getRemoved: () => Collection<any>;
    getSet: () => Collection<any>;
    hasActions: () => boolean;
    setActions: (arg0: ListUpdateAction<any>[]) => void;
    actions: ListUpdateAction<T>[];
}

export interface ListUpdateMapValues extends ListUpdateValue<{ [index: string]: string }, string, { [index: string]: string }, any> {
    put: (arg0: String, arg1: String) => ListUpdateMapValues;
    add: (arg0: any[]) => void;
    remove: (arg0: any[]) => void;
    set: (arg0: any[]) => void;
    getActions: () => ListUpdateAction<any>[];
    getAdded: () => Collection<any>;
    getRemoved: () => Collection<any>;
    getSet: () => Collection<any>;
    hasActions: () => boolean;
    setActions: (arg0: ListUpdateAction<any>[]) => void;
    actions: ListUpdateAction<any>[];
}

export interface ListUpdateValue<ADD, REMOVE, SET, ACTION> extends Serializable {
    add: (arg0: any[]) => void;
    remove: (arg0: any[]) => void;
    set: (arg0: any[]) => void;
    getActions: () => ListUpdateAction<any>[];
    getAdded: () => Collection<any>;
    getRemoved: () => Collection<any>;
    getSet: () => Collection<any>;
    hasActions: () => boolean;
    setActions: (arg0: ListUpdateAction<any>[]) => void;
    actions: ListUpdateAction<ACTION>[];
}

export interface ListUpdateAction<T> extends Serializable {
    setItems: (arg0: Collection<any>) => void;
    getItems: () => Collection<any>;
    items: T[];
}

export interface ListUpdateActionAdd<ADD> extends ListUpdateAction<ADD> {
    setItems: (arg0: Collection<any>) => void;
    getItems: () => Collection<any>;
}

export interface ListUpdateActionRemove<REMOVE> extends ListUpdateAction<REMOVE> {
    setItems: (arg0: Collection<any>) => void;
    getItems: () => Collection<any>;
}

export interface ListUpdateActionSet<SET> extends ListUpdateAction<SET> {
    setItems: (arg0: Collection<any>) => void;
    getItems: () => Collection<any>;
}

export interface RelationshipUpdate extends Serializable {
    removeChildAnnotations: (arg0: String[]) => RelationshipUpdate;
    removeParentAnnotations: (arg0: String[]) => RelationshipUpdate;
    setRelationship: (arg0: Relationship) => void;
    getChildAnnotations: () => ListUpdateMapValues;
    setChildAnnotations: (arg0: ListUpdateMapValues) => void;
    getParentAnnotations: () => ListUpdateMapValues;
    setParentAnnotations: (arg0: ListUpdateMapValues) => void;
    addChildAnnotation: (arg0: String, arg1: String) => RelationshipUpdate;
    addParentAnnotation: (arg0: String, arg1: String) => RelationshipUpdate;
    childAnnotations: ListUpdateMapValues;
    parentAnnotations: ListUpdateMapValues;
}

export interface UpdateObjectsOperation<U> extends IOperation {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: U[];
}

export interface UpdateObjectsOperationResult<ID> extends IOperationResult {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: ID[];
}

export interface ContentCopy extends Serializable {
    getId: () => ContentCopyPermId;
    getPath: () => String;
    getExternalCode: () => String;
    setExternalCode: (arg0: String) => void;
    getExternalDms: () => ExternalDms;
    setExternalDms: (arg0: ExternalDms) => void;
    getGitCommitHash: () => String;
    setGitCommitHash: (arg0: String) => void;
    getGitRepositoryId: () => String;
    setGitRepositoryId: (arg0: String) => void;
    setPath: (arg0: String) => void;
    setId: (arg0: ContentCopyPermId) => void;
    id: ContentCopyPermId;
    externalDms: ExternalDms;
    externalCode: string;
    path: string;
    gitCommitHash: string;
    gitRepositoryId: string;
}

export interface DataSet extends Serializable, ICodeHolder, IEntityTypeHolder, IExperimentHolder, IMaterialPropertiesHolder, IModificationDateHolder, IModifierHolder, IParentChildrenHolder<DataSet>, IPermIdHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ISampleHolder, ITagsHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    getType: () => DataSetType;
    getType: () => IEntityType;
    isFrozen: () => boolean;
    getBooleanProperty: (arg0: String) => Boolean;
    getChildren: () => DataSet[];
    getPermId: () => DataSetPermId;
    getPermId: () => IObjectId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => DataSetFetchOptions;
    setFetchOptions: (arg0: DataSetFetchOptions) => void;
    setPermId: (arg0: DataSetPermId) => void;
    setFrozen: (arg0: boolean) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    getMaterialProperties: () => Map<String, Material>;
    isFrozenForComponents: () => boolean;
    setFrozenForComponents: (arg0: boolean) => void;
    isFrozenForChildren: () => boolean;
    setFrozenForChildren: (arg0: boolean) => void;
    isFrozenForParents: () => boolean;
    setFrozenForParents: (arg0: boolean) => void;
    getExperiment: () => Experiment;
    setExperiment: (arg0: Experiment) => void;
    setMaterialProperties: (arg0: Map<String, Material>) => void;
    getSampleProperties: () => Map<String, Sample>;
    setSampleProperties: (arg0: Map<String, Sample>) => void;
    setParents: (arg0: DataSet[]) => void;
    setHistory: (arg0: HistoryEntry[]) => void;
    getPropertiesHistory: () => HistoryEntry[];
    setPropertiesHistory: (arg0: HistoryEntry[]) => void;
    getExperimentHistory: () => HistoryEntry[];
    setExperimentHistory: (arg0: HistoryEntry[]) => void;
    getParentsHistory: () => HistoryEntry[];
    setParentsHistory: (arg0: HistoryEntry[]) => void;
    getChildrenHistory: () => HistoryEntry[];
    setChildrenHistory: (arg0: HistoryEntry[]) => void;
    getComponentsHistory: () => HistoryEntry[];
    setComponentsHistory: (arg0: HistoryEntry[]) => void;
    getUnknownHistory: () => HistoryEntry[];
    setUnknownHistory: (arg0: HistoryEntry[]) => void;
    getModifier: () => Person;
    setModifier: (arg0: Person) => void;
    getMaterialProperty: (arg0: String) => Material;
    setMaterialProperty: (arg0: String, arg1: Material) => void;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    setMetaData: (arg0: Map<String, String>) => void;
    isFrozenForContainers: () => boolean;
    setFrozenForContainers: (arg0: boolean) => void;
    setKind: (arg0: DataSetKind) => void;
    getDataStore: () => DataStore;
    setDataStore: (arg0: DataStore) => void;
    isMeasured: () => Boolean;
    setMeasured: (arg0: Boolean) => void;
    isPostRegistered: () => Boolean;
    setPostRegistered: (arg0: Boolean) => void;
    getPhysicalData: () => PhysicalData;
    setPhysicalData: (arg0: PhysicalData) => void;
    getLinkedData: () => LinkedData;
    setLinkedData: (arg0: LinkedData) => void;
    setSample: (arg0: Sample) => void;
    getSampleHistory: () => HistoryEntry[];
    setSampleHistory: (arg0: HistoryEntry[]) => void;
    getContainersHistory: () => HistoryEntry[];
    setContainersHistory: (arg0: HistoryEntry[]) => void;
    getContentCopiesHistory: () => HistoryEntry[];
    setContentCopiesHistory: (arg0: HistoryEntry[]) => void;
    getDataProducer: () => String;
    setDataProducer: (arg0: String) => void;
    getDataProductionDate: () => Date;
    setDataProductionDate: (arg0: Date) => void;
    getAccessDate: () => Date;
    setAccessDate: (arg0: Date) => void;
    getParents: () => DataSet[];
    getComponents: () => DataSet[];
    getKind: () => DataSetKind;
    getMetaData: () => Map<String, String>;
    getHistory: () => HistoryEntry[];
    getCode: () => String;
    setCode: (arg0: String) => void;
    getContainers: () => DataSet[];
    getSample: () => Sample;
    setChildren: (arg0: DataSet[]) => void;
    setComponents: (arg0: DataSet[]) => void;
    setContainers: (arg0: DataSet[]) => void;
    getTags: () => Set<Tag>;
    setTags: (arg0: Set<Tag>) => void;
    setType: (arg0: DataSetType) => void;
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
}

export interface DataSetType extends Serializable, ICodeHolder, IDescriptionHolder, IEntityType, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder {
    getPermId: () => EntityTypePermId;
    getPermId: () => IObjectId;
    getFetchOptions: () => DataSetTypeFetchOptions;
    setFetchOptions: (arg0: DataSetTypeFetchOptions) => void;
    setPermId: (arg0: EntityTypePermId) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    getMainDataSetPattern: () => String;
    getPropertyAssignments: () => PropertyAssignment[];
    getValidationPlugin: () => Plugin;
    setMetaData: (arg0: Map<String, String>) => void;
    setPropertyAssignments: (arg0: PropertyAssignment[]) => void;
    setValidationPlugin: (arg0: Plugin) => void;
    setMainDataSetPattern: (arg0: String) => void;
    setDisallowDeletion: (arg0: Boolean) => void;
    getMainDataSetPath: () => String;
    setMainDataSetPath: (arg0: String) => void;
    isDisallowDeletion: () => Boolean;
    setDescription: (arg0: String) => void;
    getMetaData: () => Map<String, String>;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    fetchOptions: DataSetTypeFetchOptions;
    permId: EntityTypePermId;
    mainDataSetPattern: string;
    mainDataSetPath: string;
    disallowDeletion: boolean;
    metaData: { [index: string]: string };
}

/**
 * @deprecated
 */
export interface FileFormatType extends Serializable, ICodeHolder {
    getFetchOptions: () => FileFormatTypeFetchOptions;
    setFetchOptions: (arg0: FileFormatTypeFetchOptions) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    fetchOptions: FileFormatTypeFetchOptions;
    description: string;
}

export interface LinkedData extends Serializable {
    getFetchOptions: () => LinkedDataFetchOptions;
    setFetchOptions: (arg0: LinkedDataFetchOptions) => void;
    getExternalCode: () => String;
    setExternalCode: (arg0: String) => void;
    getExternalDms: () => ExternalDms;
    setExternalDms: (arg0: ExternalDms) => void;
    getContentCopies: () => ContentCopy[];
    setContentCopies: (arg0: ContentCopy[]) => void;
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
}

export interface LocatorType extends Serializable, ICodeHolder {
    getFetchOptions: () => LocatorTypeFetchOptions;
    setFetchOptions: (arg0: LocatorTypeFetchOptions) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    fetchOptions: LocatorTypeFetchOptions;
    description: string;
}

export interface PhysicalData extends Serializable {
    getLocation: () => String;
    getSize: () => Long;
    setSize: (arg0: Long) => void;
    getFetchOptions: () => PhysicalDataFetchOptions;
    setFetchOptions: (arg0: PhysicalDataFetchOptions) => void;
    setStorageConfirmation: (arg0: Boolean) => void;
    getSpeedHint: () => Integer;
    setSpeedHint: (arg0: Integer) => void;
    isArchivingRequested: () => Boolean;
    setArchivingRequested: (arg0: Boolean) => void;
    getShareId: () => String;
    setShareId: (arg0: String) => void;
    getStorageFormat: () => StorageFormat;
    setStorageFormat: (arg0: StorageFormat) => void;
    getFileFormatType: () => FileFormatType;
    setFileFormatType: (arg0: FileFormatType) => void;
    getLocatorType: () => LocatorType;
    setLocatorType: (arg0: LocatorType) => void;
    getComplete: () => Complete;
    setComplete: (arg0: Complete) => void;
    isPresentInArchive: () => Boolean;
    setPresentInArchive: (arg0: Boolean) => void;
    isStorageConfirmation: () => Boolean;
    setLocation: (arg0: String) => void;
    getStatus: () => ArchivingStatus;
    setStatus: (arg0: ArchivingStatus) => void;
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
}

export interface StorageFormat extends Serializable, ICodeHolder {
    getFetchOptions: () => StorageFormatFetchOptions;
    setFetchOptions: (arg0: StorageFormatFetchOptions) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    fetchOptions: StorageFormatFetchOptions;
    description: string;
}

export interface ArchiveDataSetsOperation extends IOperation {
    getMessage: () => String;
    getDataSetIds: () => IDataSetId[];
    getOptions: () => DataSetArchiveOptions;
    dataSetIds: IDataSetId[];
    options: DataSetArchiveOptions;
}

export interface ArchiveDataSetsOperationResult extends IOperationResult {
    getMessage: () => String;
}

export interface DataSetArchiveOptions extends Serializable {
    setRemoveFromDataStore: (arg0: boolean) => void;
    isRemoveFromDataStore: () => boolean;
    withOption: (arg0: String, arg1: String) => DataSetArchiveOptions;
    getOptions: () => Map<String, String>;
    removeFromDataStore: boolean;
    options: { [index: string]: string };
}

export interface ContentCopyCreation extends ICreation {
    getPath: () => String;
    getGitCommitHash: () => String;
    setGitCommitHash: (arg0: String) => void;
    getGitRepositoryId: () => String;
    setGitRepositoryId: (arg0: String) => void;
    getExternalDmsId: () => IExternalDmsId;
    setExternalDmsId: (arg0: IExternalDmsId) => void;
    getExternalId: () => String;
    setExternalId: (arg0: String) => void;
    setPath: (arg0: String) => void;
    externalId: string;
    path: string;
    gitCommitHash: string;
    gitRepositoryId: string;
    externalDmsId: IExternalDmsId;
}

export interface CreateDataSetTypesOperation extends CreateObjectsOperation<DataSetTypeCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: DataSetTypeCreation[];
}

export interface CreateDataSetTypesOperationResult extends CreateObjectsOperationResult<EntityTypePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: EntityTypePermId[];
}

export interface CreateDataSetsOperation extends CreateObjectsOperation<DataSetCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: DataSetCreation[];
}

export interface CreateDataSetsOperationResult extends CreateObjectsOperationResult<DataSetPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: DataSetPermId[];
}

export interface DataSetCreation extends ICreation, ICreationIdHolder, IObjectCreation, IPropertiesHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    getBooleanProperty: (arg0: String) => Boolean;
    getExperimentId: () => IExperimentId;
    setExperimentId: (arg0: IExperimentId) => void;
    getSampleId: () => ISampleId;
    setSampleId: (arg0: ISampleId) => void;
    getParentIds: () => IDataSetId[];
    setParentIds: (arg0: IDataSetId[]) => void;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    setMetaData: (arg0: Map<String, String>) => void;
    isAutoGeneratedCode: () => boolean;
    setAutoGeneratedCode: (arg0: boolean) => void;
    isMeasured: () => boolean;
    setMeasured: (arg0: boolean) => void;
    getPhysicalData: () => PhysicalDataCreation;
    setPhysicalData: (arg0: PhysicalDataCreation) => void;
    getLinkedData: () => LinkedDataCreation;
    setLinkedData: (arg0: LinkedDataCreation) => void;
    getDataProducer: () => String;
    setDataProducer: (arg0: String) => void;
    getDataProductionDate: () => Date;
    setDataProductionDate: (arg0: Date) => void;
    getCreationId: () => CreationId;
    setCreationId: (arg0: CreationId) => void;
    getComponentIds: () => IDataSetId[];
    getChildIds: () => IDataSetId[];
    getContainerIds: () => IDataSetId[];
    getTagIds: () => ITagId[];
    setComponentIds: (arg0: IDataSetId[]) => void;
    setChildIds: (arg0: IDataSetId[]) => void;
    setTagIds: (arg0: ITagId[]) => void;
    getDataStoreId: () => IDataStoreId;
    setDataStoreId: (arg0: IDataStoreId) => void;
    getDataSetKind: () => DataSetKind;
    setDataSetKind: (arg0: DataSetKind) => void;
    setContainerIds: (arg0: IDataSetId[]) => void;
    getMetaData: () => Map<String, String>;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getTypeId: () => IEntityTypeId;
    setTypeId: (arg0: IEntityTypeId) => void;
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
}

export interface DataSetTypeCreation extends IEntityTypeCreation {
    getMainDataSetPattern: () => String;
    getPropertyAssignments: () => PropertyAssignmentCreation[];
    setMetaData: (arg0: Map<String, String>) => void;
    setPropertyAssignments: (arg0: PropertyAssignmentCreation[]) => void;
    setMainDataSetPattern: (arg0: String) => void;
    setDisallowDeletion: (arg0: boolean) => void;
    getMainDataSetPath: () => String;
    setMainDataSetPath: (arg0: String) => void;
    isDisallowDeletion: () => boolean;
    getValidationPluginId: () => IPluginId;
    setValidationPluginId: (arg0: IPluginId) => void;
    setDescription: (arg0: String) => void;
    getMetaData: () => Map<String, String>;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    mainDataSetPattern: string;
    mainDataSetPath: string;
    disallowDeletion: boolean;
    metaData: { [index: string]: string };
}

export interface LinkedDataCreation extends ICreation {
    getExternalCode: () => String;
    setExternalCode: (arg0: String) => void;
    getContentCopies: () => ContentCopyCreation[];
    setContentCopies: (arg0: ContentCopyCreation[]) => void;
    getExternalDmsId: () => IExternalDmsId;
    setExternalDmsId: (arg0: IExternalDmsId) => void;
    externalCode: string;
    externalDmsId: IExternalDmsId;
    contentCopies: ContentCopyCreation[];
}

export interface PhysicalDataCreation extends ICreation {
    getLocation: () => String;
    getSize: () => Long;
    setSize: (arg0: Long) => void;
    getSpeedHint: () => Integer;
    setSpeedHint: (arg0: Integer) => void;
    isArchivingRequested: () => boolean;
    setArchivingRequested: (arg0: boolean) => void;
    getShareId: () => String;
    setShareId: (arg0: String) => void;
    getComplete: () => Complete;
    setComplete: (arg0: Complete) => void;
    getStorageFormatId: () => IStorageFormatId;
    setStorageFormatId: (arg0: IStorageFormatId) => void;
    getFileFormatTypeId: () => IFileFormatTypeId;
    setFileFormatTypeId: (arg0: IFileFormatTypeId) => void;
    getLocatorTypeId: () => ILocatorTypeId;
    setLocatorTypeId: (arg0: ILocatorTypeId) => void;
    isH5Folders: () => boolean;
    setH5Folders: (arg0: boolean) => void;
    isH5arFolders: () => boolean;
    setH5arFolders: (arg0: boolean) => void;
    setLocation: (arg0: String) => void;
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
}

export interface DataSetDeletionOptions extends AbstractObjectDeletionOptions<DataSetDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface DataSetTypeDeletionOptions extends AbstractObjectDeletionOptions<DataSetTypeDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface DeleteDataSetTypesOperation extends DeleteObjectsOperation<IEntityTypeId, DataSetTypeDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: DataSetTypeDeletionOptions;
}

export interface DeleteDataSetTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface DeleteDataSetsOperation extends DeleteObjectsOperation<IDataSetId, DataSetDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: DataSetDeletionOptions;
}

export interface DeleteDataSetsOperationResult extends DeleteObjectsWithTrashOperationResult {
    getMessage: () => String;
    getDeletionId: () => IDeletionId;
}

export interface DataSetFetchOptions extends FetchOptions<DataSet>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => DataSetSortOptions;
    getSortBy: () => SortOptions;
    withExperiment: () => ExperimentFetchOptions;
    withExperimentUsing: (arg0: ExperimentFetchOptions) => ExperimentFetchOptions;
    hasExperiment: () => boolean;
    withParents: () => DataSetFetchOptions;
    withParentsUsing: (arg0: DataSetFetchOptions) => DataSetFetchOptions;
    hasParents: () => boolean;
    withChildren: () => DataSetFetchOptions;
    withChildrenUsing: (arg0: DataSetFetchOptions) => DataSetFetchOptions;
    withComponents: () => DataSetFetchOptions;
    withComponentsUsing: (arg0: DataSetFetchOptions) => DataSetFetchOptions;
    hasComponents: () => boolean;
    withExperimentHistory: () => HistoryEntryFetchOptions;
    withExperimentHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasExperimentHistory: () => boolean;
    withParentsHistory: () => HistoryEntryFetchOptions;
    withParentsHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasParentsHistory: () => boolean;
    withChildrenHistory: () => HistoryEntryFetchOptions;
    withChildrenHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasChildrenHistory: () => boolean;
    withComponentsHistory: () => HistoryEntryFetchOptions;
    withComponentsHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasComponentsHistory: () => boolean;
    withDataStore: () => DataStoreFetchOptions;
    withTypeUsing: (arg0: DataSetTypeFetchOptions) => DataSetTypeFetchOptions;
    hasType: () => boolean;
    withHistory: () => HistoryEntryFetchOptions;
    withHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasHistory: () => boolean;
    withPropertiesHistory: () => HistoryEntryFetchOptions;
    withPropertiesHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasPropertiesHistory: () => boolean;
    withUnknownHistory: () => HistoryEntryFetchOptions;
    withUnknownHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasUnknownHistory: () => boolean;
    withPropertiesUsing: (arg0: PropertyFetchOptions) => PropertyFetchOptions;
    hasProperties: () => boolean;
    withMaterialProperties: () => MaterialFetchOptions;
    withMaterialPropertiesUsing: (arg0: MaterialFetchOptions) => MaterialFetchOptions;
    hasMaterialProperties: () => boolean;
    withSampleProperties: () => SampleFetchOptions;
    withSamplePropertiesUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    hasSampleProperties: () => boolean;
    withTags: () => TagFetchOptions;
    withTagsUsing: (arg0: TagFetchOptions) => TagFetchOptions;
    hasTags: () => boolean;
    withModifierUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasModifier: () => boolean;
    withDataStoreUsing: (arg0: DataStoreFetchOptions) => DataStoreFetchOptions;
    hasDataStore: () => boolean;
    withPhysicalData: () => PhysicalDataFetchOptions;
    withPhysicalDataUsing: (arg0: PhysicalDataFetchOptions) => PhysicalDataFetchOptions;
    hasPhysicalData: () => boolean;
    withLinkedData: () => LinkedDataFetchOptions;
    withLinkedDataUsing: (arg0: LinkedDataFetchOptions) => LinkedDataFetchOptions;
    hasLinkedData: () => boolean;
    withSample: () => SampleFetchOptions;
    withSampleUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    hasSample: () => boolean;
    withContainers: () => DataSetFetchOptions;
    withContainersUsing: (arg0: DataSetFetchOptions) => DataSetFetchOptions;
    hasContainers: () => boolean;
    withSampleHistory: () => HistoryEntryFetchOptions;
    withSampleHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasSampleHistory: () => boolean;
    withContainersHistory: () => HistoryEntryFetchOptions;
    withContainersHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasContainersHistory: () => boolean;
    withContentCopiesHistory: () => HistoryEntryFetchOptions;
    withContentCopiesHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasContentCopiesHistory: () => boolean;
    withProperties: () => PropertyFetchOptions;
    withType: () => DataSetTypeFetchOptions;
    sortBy: () => SortOptions;
    sortBy: () => DataSetSortOptions;
    withModifier: () => PersonFetchOptions;
    hasChildren: () => boolean;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
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
}

export interface DataSetSortOptions extends EntityWithPropertiesSortOptions<DataSet> {
    type: () => SortOrder;
    getProperty: (arg0: String) => SortOrder;
    getType: () => SortOrder;
    property: (arg0: String) => SortOrder;
    fetchedFieldsScore: () => SortOrder;
    getFetchedFieldsScore: () => SortOrder;
    stringMatchPropertyScore: (arg0: String, arg1: String) => SortOrder;
    stringPrefixMatchPropertyScore: (arg0: String, arg1: String) => SortOrder;
    stringMatchAnyPropertyScore: (arg0: String) => SortOrder;
    stringPrefixMatchAnyPropertyScore: (arg0: String) => SortOrder;
    code: () => SortOrder;
    getPermId: () => SortOrder;
    registrationDate: () => SortOrder;
    getRegistrationDate: () => SortOrder;
    permId: () => SortOrder;
    modificationDate: () => SortOrder;
    getModificationDate: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
}

export interface DataSetTypeFetchOptions extends FetchOptions<DataSetType>, Serializable {
    getSortBy: () => SortOptions;
    getSortBy: () => DataSetTypeSortOptions;
    withPropertyAssignments: () => PropertyAssignmentFetchOptions;
    withPropertyAssignmentsUsing: (arg0: PropertyAssignmentFetchOptions) => PropertyAssignmentFetchOptions;
    hasPropertyAssignments: () => boolean;
    withValidationPlugin: () => PluginFetchOptions;
    withValidationPluginUsing: (arg0: PluginFetchOptions) => PluginFetchOptions;
    hasValidationPlugin: () => boolean;
    sortBy: () => DataSetTypeSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    propertyAssignments: PropertyAssignmentFetchOptions;
    validationPlugin: PluginFetchOptions;
    sort: DataSetTypeSortOptions;
    sortBy: DataSetTypeSortOptions;
}

export interface DataSetTypeSortOptions extends SortOptions<DataSetType> {
    getSortings: () => Sorting[];
}

/**
 * @deprecated
 */
export interface FileFormatTypeFetchOptions extends FetchOptions<FileFormatType>, Serializable {
    getSortBy: () => FileFormatTypeSortOptions;
    getSortBy: () => SortOptions;
    sortBy: () => FileFormatTypeSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    sort: FileFormatTypeSortOptions;
    sortBy: FileFormatTypeSortOptions;
}

/**
 * @deprecated
 */
export interface FileFormatTypeSortOptions extends SortOptions<FileFormatType> {
    getSortings: () => Sorting[];
}

export interface LinkedDataFetchOptions extends FetchOptions<LinkedData>, Serializable {
    getSortBy: () => LinkedDataSortOptions;
    getSortBy: () => SortOptions;
    withExternalDms: () => ExternalDmsFetchOptions;
    withExternalDmsUsing: (arg0: ExternalDmsFetchOptions) => ExternalDmsFetchOptions;
    hasExternalDms: () => boolean;
    sortBy: () => SortOptions;
    sortBy: () => LinkedDataSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    externalDms: ExternalDmsFetchOptions;
    sort: LinkedDataSortOptions;
    sortBy: LinkedDataSortOptions;
}

export interface LinkedDataSortOptions extends SortOptions<LinkedData> {
    getSortings: () => Sorting[];
}

export interface LocatorTypeFetchOptions extends FetchOptions<LocatorType>, Serializable {
    getSortBy: () => LocatorTypeSortOptions;
    getSortBy: () => SortOptions;
    sortBy: () => LocatorTypeSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    sort: LocatorTypeSortOptions;
    sortBy: LocatorTypeSortOptions;
}

export interface LocatorTypeSortOptions extends SortOptions<LocatorType> {
    getSortings: () => Sorting[];
}

export interface PhysicalDataFetchOptions extends FetchOptions<PhysicalData>, Serializable {
    getSortBy: () => SortOptions;
    getSortBy: () => PhysicalDataSortOptions;
    hasStorageFormat: () => boolean;
    hasFileFormatType: () => boolean;
    hasLocatorType: () => boolean;
    withStorageFormat: () => StorageFormatFetchOptions;
    withStorageFormatUsing: (arg0: StorageFormatFetchOptions) => StorageFormatFetchOptions;
    withFileFormatType: () => FileFormatTypeFetchOptions;
    withFileFormatTypeUsing: (arg0: FileFormatTypeFetchOptions) => FileFormatTypeFetchOptions;
    withLocatorType: () => LocatorTypeFetchOptions;
    withLocatorTypeUsing: (arg0: LocatorTypeFetchOptions) => LocatorTypeFetchOptions;
    sortBy: () => SortOptions;
    sortBy: () => PhysicalDataSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    storageFormat: StorageFormatFetchOptions;
    /**
     * @deprecated
     */
    fileFormatType: FileFormatTypeFetchOptions;
    locatorType: LocatorTypeFetchOptions;
    sort: PhysicalDataSortOptions;
    sortBy: PhysicalDataSortOptions;
}

export interface PhysicalDataSortOptions extends SortOptions<PhysicalData> {
    getSortings: () => Sorting[];
}

export interface StorageFormatFetchOptions extends FetchOptions<StorageFormat>, Serializable {
    getSortBy: () => StorageFormatSortOptions;
    getSortBy: () => SortOptions;
    sortBy: () => StorageFormatSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    sort: StorageFormatSortOptions;
    sortBy: StorageFormatSortOptions;
}

export interface StorageFormatSortOptions extends SortOptions<StorageFormat> {
    getSortings: () => Sorting[];
}

export interface GetDataSetTypesOperation extends GetObjectsOperation<IEntityTypeId, DataSetTypeFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: DataSetTypeFetchOptions;
}

export interface GetDataSetTypesOperationResult extends GetObjectsOperationResult<IEntityTypeId, DataSetType> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IEntityTypeId[];
    objects: DataSetType[];
}

export interface GetDataSetsOperation extends GetObjectsOperation<IDataSetId, DataSetFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: DataSetFetchOptions;
}

export interface GetDataSetsOperationResult extends GetObjectsOperationResult<IDataSetId, DataSet> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IDataSetId[];
    objects: DataSet[];
}

export interface BdsDirectoryStorageFormatPermId extends StorageFormatPermId {
    getPermId: () => String;
}

export interface ContentCopyPermId extends ObjectPermId, IContentCopyId {
    getPermId: () => String;
}

export interface DataSetPermId extends ObjectPermId, IDataSetId {
    getPermId: () => String;
}

/**
 * @deprecated
 */
export interface FileFormatTypePermId extends ObjectPermId, IFileFormatTypeId {
    getPermId: () => String;
}

export interface IContentCopyId extends IObjectId {
}

export interface IDataSetId extends IObjectId {
}

/**
 * @deprecated
 */
export interface IFileFormatTypeId extends IObjectId {
}

export interface ILocatorTypeId extends IObjectId {
}

export interface IStorageFormatId extends IObjectId {
}

export interface LocatorTypePermId extends ObjectPermId, ILocatorTypeId {
    getPermId: () => String;
}

export interface ProprietaryStorageFormatPermId extends StorageFormatPermId {
    getPermId: () => String;
}

export interface RelativeLocationLocatorTypePermId extends LocatorTypePermId {
    getPermId: () => String;
}

export interface StorageFormatPermId extends ObjectPermId, IStorageFormatId {
    getPermId: () => String;
}

export interface DataSetLockOptions extends Serializable {
}

export interface LockDataSetsOperation extends IOperation {
    getMessage: () => String;
    getDataSetIds: () => IDataSetId[];
    getOptions: () => DataSetLockOptions;
    dataSetIds: IDataSetId[];
    options: DataSetLockOptions;
}

export interface LockDataSetsOperationResult extends IOperationResult {
    getMessage: () => String;
}

export interface AbstractDataSetSearchCriteria<T> extends AbstractEntitySearchCriteria<IDataSetId> {
    withExperiment: () => ExperimentSearchCriteria;
    withPhysicalData: () => PhysicalDataSearchCriteria;
    withLinkedData: () => LinkedDataSearchCriteria;
    withSample: () => SampleSearchCriteria;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withOrOperator: () => any;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => any;
    withoutExperiment: () => any;
    getRelation: () => DataSetSearchRelation;
    withoutSample: () => any;
    withType: () => DataSetTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    relation: DataSetSearchRelation;
}

export interface ArchivingRequestedSearchCriteria extends BooleanFieldSearchCriteria {
    thatEquals: (arg0: boolean) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface CompleteSearchCriteria extends EnumFieldSearchCriteria<Complete> {
    thatEquals: (arg0: any) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldValue: Complete;
}

export interface ContentCopySearchCriteria extends AbstractObjectSearchCriteria<IExternalDmsId> {
    withExternalDms: () => DSExternalDmsSearchCriteria;
    withExternalCode: () => ExternalCodeSearchCriteria;
    withGitCommitHash: () => GitCommitHashSearchCriteria;
    withGitRepositoryId: () => GitRepositoryIdSearchCriteria;
    withPath: () => PathSearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface DataSetChildrenSearchCriteria extends AbstractDataSetSearchCriteria<DataSetChildrenSearchCriteria> {
    withExperiment: () => ExperimentSearchCriteria;
    withPhysicalData: () => PhysicalDataSearchCriteria;
    withLinkedData: () => LinkedDataSearchCriteria;
    withSample: () => SampleSearchCriteria;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withOrOperator: () => any;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => any;
    withoutExperiment: () => any;
    getRelation: () => DataSetSearchRelation;
    withoutSample: () => any;
    withType: () => DataSetTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
}

export interface DataSetContainerSearchCriteria extends AbstractDataSetSearchCriteria<DataSetContainerSearchCriteria> {
    withExperiment: () => ExperimentSearchCriteria;
    withPhysicalData: () => PhysicalDataSearchCriteria;
    withLinkedData: () => LinkedDataSearchCriteria;
    withSample: () => SampleSearchCriteria;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withOrOperator: () => any;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => any;
    withoutExperiment: () => any;
    getRelation: () => DataSetSearchRelation;
    withoutSample: () => any;
    withType: () => DataSetTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
}

export interface DataSetParentsSearchCriteria extends AbstractDataSetSearchCriteria<DataSetParentsSearchCriteria> {
    withExperiment: () => ExperimentSearchCriteria;
    withPhysicalData: () => PhysicalDataSearchCriteria;
    withLinkedData: () => LinkedDataSearchCriteria;
    withSample: () => SampleSearchCriteria;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withOrOperator: () => any;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => any;
    withoutExperiment: () => any;
    getRelation: () => DataSetSearchRelation;
    withoutSample: () => any;
    withType: () => DataSetTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
}

export interface DataSetSearchCriteria extends AbstractDataSetSearchCriteria<DataSetSearchCriteria> {
    negate: () => DataSetSearchCriteria;
    negate: () => AbstractEntitySearchCriteria;
    withParents: () => DataSetParentsSearchCriteria;
    withChildren: () => DataSetChildrenSearchCriteria;
    withContainer: () => DataSetContainerSearchCriteria;
    withSubcriteria: () => DataSetSearchCriteria;
    withTextAttribute: () => TextAttributeSearchCriteria;
    withExperiment: () => ExperimentSearchCriteria;
    withPhysicalData: () => PhysicalDataSearchCriteria;
    withLinkedData: () => LinkedDataSearchCriteria;
    withSample: () => SampleSearchCriteria;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withOrOperator: () => any;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => any;
    withoutExperiment: () => any;
    getRelation: () => DataSetSearchRelation;
    withoutSample: () => any;
    withType: () => DataSetTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
}

export interface DataSetTypeSearchCriteria extends AbstractEntityTypeSearchCriteria {
    withOrOperator: () => DataSetTypeSearchCriteria;
    withAndOperator: () => DataSetTypeSearchCriteria;
    withPropertyAssignments: () => PropertyAssignmentSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withIds: () => IdsSearchCriteria<IEntityTypeId>;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface ExternalCodeSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

/**
 * @deprecated
 */
export interface FileFormatTypeSearchCriteria extends AbstractCompositeSearchCriteria {
    withCode: () => CodeSearchCriteria;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface GitCommitHashSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface GitRepositoryIdSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface LinkedDataSearchCriteria extends AbstractCompositeSearchCriteria {
    withExternalDms: () => DSExternalDmsSearchCriteria;
    withExternalCode: () => ExternalCodeSearchCriteria;
    withCopy: () => ContentCopySearchCriteria;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface LocationSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface LocatorTypeSearchCriteria extends AbstractCompositeSearchCriteria {
    withCode: () => CodeSearchCriteria;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface PathSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface PhysicalDataSearchCriteria extends AbstractCompositeSearchCriteria {
    withStorageFormat: () => StorageFormatSearchCriteria;
    withFileFormatType: () => FileFormatTypeSearchCriteria;
    withLocatorType: () => LocatorTypeSearchCriteria;
    withShareId: () => ShareIdSearchCriteria;
    withLocation: () => LocationSearchCriteria;
    withSize: () => SizeSearchCriteria;
    withComplete: () => CompleteSearchCriteria;
    withStatus: () => StatusSearchCriteria;
    withArchivingRequested: () => ArchivingRequestedSearchCriteria;
    withPresentInArchive: () => PresentInArchiveSearchCriteria;
    withStorageConfirmation: () => StorageConfirmationSearchCriteria;
    withSpeedHint: () => SpeedHintSearchCriteria;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface PresentInArchiveSearchCriteria extends BooleanFieldSearchCriteria {
    thatEquals: (arg0: boolean) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface SearchDataSetTypesOperation extends SearchObjectsOperation<DataSetTypeSearchCriteria, DataSetTypeFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: DataSetTypeSearchCriteria;
    fetchOptions: DataSetTypeFetchOptions;
}

export interface SearchDataSetTypesOperationResult extends SearchObjectsOperationResult<DataSetType> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<DataSetType>;
}

export interface SearchDataSetsOperation extends SearchObjectsOperation<DataSetSearchCriteria, DataSetFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: DataSetSearchCriteria;
    fetchOptions: DataSetFetchOptions;
}

export interface SearchDataSetsOperationResult extends SearchObjectsOperationResult<DataSet> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<DataSet>;
}

export interface ShareIdSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface SizeSearchCriteria extends NumberFieldSearchCriteria {
    thatIsLessThan: (arg0: Number) => void;
    thatIsLessThanOrEqualTo: (arg0: Number) => void;
    thatIsGreaterThan: (arg0: Number) => void;
    thatIsGreaterThanOrEqualTo: (arg0: Number) => void;
    thatEquals: (arg0: Number) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface SpeedHintSearchCriteria extends NumberFieldSearchCriteria {
    thatIsLessThan: (arg0: Number) => void;
    thatIsLessThanOrEqualTo: (arg0: Number) => void;
    thatIsGreaterThan: (arg0: Number) => void;
    thatIsGreaterThanOrEqualTo: (arg0: Number) => void;
    thatEquals: (arg0: Number) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface StatusSearchCriteria extends EnumFieldSearchCriteria<ArchivingStatus> {
    thatEquals: (arg0: any) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldValue: ArchivingStatus;
}

export interface StorageConfirmationSearchCriteria extends BooleanFieldSearchCriteria {
    thatEquals: (arg0: boolean) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface StorageFormatSearchCriteria extends AbstractCompositeSearchCriteria {
    withCode: () => CodeSearchCriteria;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface DataSetUnarchiveOptions extends Serializable {
}

export interface UnarchiveDataSetsOperation extends IOperation {
    getMessage: () => String;
    getDataSetIds: () => IDataSetId[];
    getOptions: () => DataSetUnarchiveOptions;
    dataSetIds: IDataSetId[];
    options: DataSetUnarchiveOptions;
}

export interface UnarchiveDataSetsOperationResult extends IOperationResult {
    getMessage: () => String;
}

export interface DataSetUnlockOptions extends Serializable {
}

export interface UnlockDataSetsOperation extends IOperation {
    getMessage: () => String;
    getDataSetIds: () => IDataSetId[];
    getOptions: () => DataSetUnlockOptions;
    dataSetIds: IDataSetId[];
    options: DataSetUnlockOptions;
}

export interface UnlockDataSetsOperationResult extends IOperationResult {
    getMessage: () => String;
}

export interface ContentCopyListUpdateValue extends ListUpdateValue<ContentCopyCreation, IContentCopyId, ContentCopyCreation, any> {
    add: (arg0: any[]) => void;
    remove: (arg0: any[]) => void;
    set: (arg0: any[]) => void;
    getActions: () => ListUpdateAction<any>[];
    getAdded: () => Collection<any>;
    getRemoved: () => Collection<any>;
    getSet: () => Collection<any>;
    hasActions: () => boolean;
    setActions: (arg0: ListUpdateAction<any>[]) => void;
    actions: ListUpdateAction<any>[];
}

export interface DataSetTypeUpdate extends IEntityTypeUpdate, IMetaDataUpdateHolder {
    getMainDataSetPattern: () => FieldUpdateValue<String>;
    getPropertyAssignments: () => PropertyAssignmentListUpdateValue;
    setMainDataSetPattern: (arg0: String) => void;
    setDisallowDeletion: (arg0: boolean) => void;
    getMainDataSetPath: () => FieldUpdateValue<String>;
    setMainDataSetPath: (arg0: String) => void;
    isDisallowDeletion: () => FieldUpdateValue<Boolean>;
    getValidationPluginId: () => FieldUpdateValue<IPluginId>;
    setValidationPluginId: (arg0: IPluginId) => void;
    setPropertyAssignmentActions: (arg0: ListUpdateAction<Object>[]) => void;
    setMetaDataActions: (arg0: ListUpdateAction<Object>[]) => void;
    setDescription: (arg0: String) => void;
    getMetaData: () => ListUpdateMapValues;
    getTypeId: () => IEntityTypeId;
    setTypeId: (arg0: IEntityTypeId) => void;
    getObjectId: () => IEntityTypeId;
    getObjectId: () => IObjectId;
    getDescription: () => FieldUpdateValue<String>;
    mainDataSetPattern: FieldUpdateValue<string>;
    mainDataSetPath: FieldUpdateValue<string>;
    disallowDeletion: FieldUpdateValue<boolean>;
}

export interface DataSetUpdate extends IUpdate, IObjectUpdate<IDataSetId>, IPropertiesHolder, IMetaDataUpdateHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    freeze: () => void;
    getBooleanProperty: (arg0: String) => Boolean;
    getExperimentId: () => FieldUpdateValue<IExperimentId>;
    setExperimentId: (arg0: IExperimentId) => void;
    getSampleId: () => FieldUpdateValue<ISampleId>;
    setSampleId: (arg0: ISampleId) => void;
    getParentIds: () => IdListUpdateValue<IDataSetId>;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    getPhysicalData: () => FieldUpdateValue<PhysicalDataUpdate>;
    setPhysicalData: (arg0: PhysicalDataUpdate) => void;
    getLinkedData: () => FieldUpdateValue<LinkedDataUpdate>;
    setLinkedData: (arg0: LinkedDataUpdate) => void;
    shouldBeFrozen: () => boolean;
    setTagActions: (arg0: ListUpdateAction<ITagId>[]) => void;
    getComponentIds: () => IdListUpdateValue<IDataSetId>;
    setComponentActions: (arg0: ListUpdateAction<IDataSetId>[]) => void;
    setParentActions: (arg0: ListUpdateAction<IDataSetId>[]) => void;
    getChildIds: () => IdListUpdateValue<IDataSetId>;
    setChildActions: (arg0: ListUpdateAction<IDataSetId>[]) => void;
    getDataSetId: () => IDataSetId;
    freezeForComponents: () => void;
    freezeForChildren: () => void;
    freezeForParents: () => void;
    shouldBeFrozenForComponents: () => boolean;
    shouldBeFrozenForChildren: () => boolean;
    shouldBeFrozenForParents: () => boolean;
    freezeForContainers: () => void;
    setDataSetId: (arg0: IDataSetId) => void;
    shouldBeFrozenForContainers: () => boolean;
    getContainerIds: () => IdListUpdateValue<IDataSetId>;
    setContainerActions: (arg0: ListUpdateAction<IDataSetId>[]) => void;
    getTagIds: () => IdListUpdateValue<ITagId>;
    setMetaDataActions: (arg0: ListUpdateAction<Object>[]) => void;
    getMetaData: () => ListUpdateMapValues;
    getObjectId: () => IObjectId;
    getObjectId: () => IDataSetId;
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
}

export interface LinkedDataUpdate extends IUpdate {
    getExternalCode: () => FieldUpdateValue<String>;
    setExternalCode: (arg0: String) => void;
    getContentCopies: () => ContentCopyListUpdateValue;
    getExternalDmsId: () => FieldUpdateValue<IExternalDmsId>;
    setExternalDmsId: (arg0: IExternalDmsId) => void;
    setContentCopyActions: (arg0: ListUpdateAction<Object>[]) => void;
    /**
     * @deprecated
     */
    externalCode: FieldUpdateValue<string>;
    /**
     * @deprecated
     */
    externalDmsId: FieldUpdateValue<IExternalDmsId>;
    contentCopies: ContentCopyListUpdateValue;
}

export interface PhysicalDataUpdate extends IUpdate {
    isArchivingRequested: () => FieldUpdateValue<Boolean>;
    setArchivingRequested: (arg0: boolean) => void;
    getFileFormatTypeId: () => FieldUpdateValue<IFileFormatTypeId>;
    setFileFormatTypeId: (arg0: IFileFormatTypeId) => void;
    /**
     * @deprecated
     */
    fileFormatTypeId: FieldUpdateValue<IFileFormatTypeId>;
    archivingRequested: FieldUpdateValue<boolean>;
}

export interface UpdateDataSetTypesOperation extends UpdateObjectsOperation<DataSetTypeUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: DataSetTypeUpdate[];
}

export interface UpdateDataSetTypesOperationResult extends UpdateObjectsOperationResult<EntityTypePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: EntityTypePermId[];
}

export interface UpdateDataSetsOperation extends UpdateObjectsOperation<DataSetUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: DataSetUpdate[];
}

export interface UpdateDataSetsOperationResult extends UpdateObjectsOperationResult<DataSetPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: DataSetPermId[];
}

export interface Experiment extends Serializable, IAttachmentsHolder, ICodeHolder, IDataSetsHolder, IEntityTypeHolder, IIdentifierHolder, IMaterialPropertiesHolder, IModificationDateHolder, IModifierHolder, IPermIdHolder, IProjectHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ISamplesHolder, ITagsHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    getType: () => IEntityType;
    getType: () => ExperimentType;
    isFrozen: () => boolean;
    getBooleanProperty: (arg0: String) => Boolean;
    getSamples: () => Sample[];
    getDataSets: () => DataSet[];
    getPermId: () => ExperimentPermId;
    getPermId: () => IObjectId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => ExperimentFetchOptions;
    setFetchOptions: (arg0: ExperimentFetchOptions) => void;
    setPermId: (arg0: ExperimentPermId) => void;
    setFrozen: (arg0: boolean) => void;
    isFrozenForSamples: () => boolean;
    setFrozenForSamples: (arg0: boolean) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    setSamples: (arg0: Sample[]) => void;
    getSamplesHistory: () => HistoryEntry[];
    setSamplesHistory: (arg0: HistoryEntry[]) => void;
    getMaterialProperties: () => Map<String, Material>;
    isFrozenForDataSets: () => boolean;
    setFrozenForDataSets: (arg0: boolean) => void;
    setMaterialProperties: (arg0: Map<String, Material>) => void;
    getSampleProperties: () => Map<String, Sample>;
    setSampleProperties: (arg0: Map<String, Sample>) => void;
    setDataSets: (arg0: DataSet[]) => void;
    setHistory: (arg0: HistoryEntry[]) => void;
    getPropertiesHistory: () => HistoryEntry[];
    setPropertiesHistory: (arg0: HistoryEntry[]) => void;
    getProjectHistory: () => HistoryEntry[];
    setProjectHistory: (arg0: HistoryEntry[]) => void;
    getDataSetsHistory: () => HistoryEntry[];
    setDataSetsHistory: (arg0: HistoryEntry[]) => void;
    getUnknownHistory: () => HistoryEntry[];
    setUnknownHistory: (arg0: HistoryEntry[]) => void;
    getModifier: () => Person;
    setModifier: (arg0: Person) => void;
    getAttachments: () => Attachment[];
    setAttachments: (arg0: Attachment[]) => void;
    getMaterialProperty: (arg0: String) => Material;
    setMaterialProperty: (arg0: String, arg1: Material) => void;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    setMetaData: (arg0: Map<String, String>) => void;
    getProject: () => Project;
    setProject: (arg0: Project) => void;
    getMetaData: () => Map<String, String>;
    getHistory: () => HistoryEntry[];
    getCode: () => String;
    setCode: (arg0: String) => void;
    getTags: () => Set<Tag>;
    setTags: (arg0: Set<Tag>) => void;
    setIdentifier: (arg0: ExperimentIdentifier) => void;
    setType: (arg0: ExperimentType) => void;
    getIdentifier: () => ObjectIdentifier;
    getIdentifier: () => ExperimentIdentifier;
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
}

export interface ExperimentType extends Serializable, ICodeHolder, IDescriptionHolder, IEntityType, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder {
    getPermId: () => EntityTypePermId;
    getPermId: () => IObjectId;
    getFetchOptions: () => ExperimentTypeFetchOptions;
    setFetchOptions: (arg0: ExperimentTypeFetchOptions) => void;
    setPermId: (arg0: EntityTypePermId) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    getPropertyAssignments: () => PropertyAssignment[];
    getValidationPlugin: () => Plugin;
    setMetaData: (arg0: Map<String, String>) => void;
    setPropertyAssignments: (arg0: PropertyAssignment[]) => void;
    setValidationPlugin: (arg0: Plugin) => void;
    setDescription: (arg0: String) => void;
    getMetaData: () => Map<String, String>;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    fetchOptions: ExperimentTypeFetchOptions;
    permId: EntityTypePermId;
    metaData: { [index: string]: string };
}

export interface CreateExperimentTypesOperation extends CreateObjectsOperation<ExperimentTypeCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: ExperimentTypeCreation[];
}

export interface CreateExperimentTypesOperationResult extends CreateObjectsOperationResult<EntityTypePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: EntityTypePermId[];
}

export interface CreateExperimentsOperation extends CreateObjectsOperation<ExperimentCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: ExperimentCreation[];
}

export interface CreateExperimentsOperationResult extends CreateObjectsOperationResult<ExperimentPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: ExperimentPermId[];
}

export interface ExperimentCreation extends ICreation, IObjectCreation, ICreationIdHolder, IPropertiesHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    getBooleanProperty: (arg0: String) => Boolean;
    getAttachments: () => AttachmentCreation[];
    setAttachments: (arg0: AttachmentCreation[]) => void;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    setMetaData: (arg0: Map<String, String>) => void;
    setProjectId: (arg0: IProjectId) => void;
    getCreationId: () => CreationId;
    setCreationId: (arg0: CreationId) => void;
    getTagIds: () => ITagId[];
    setTagIds: (arg0: ITagId[]) => void;
    getProjectId: () => IProjectId;
    getMetaData: () => Map<String, String>;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getTypeId: () => IEntityTypeId;
    setTypeId: (arg0: IEntityTypeId) => void;
    typeId: IEntityTypeId;
    projectId: IProjectId;
    code: string;
    tagIds: ITagId[];
    attachments: AttachmentCreation[];
    metaData: { [index: string]: string };
}

export interface ExperimentTypeCreation extends IEntityTypeCreation {
    getPropertyAssignments: () => PropertyAssignmentCreation[];
    setMetaData: (arg0: Map<String, String>) => void;
    setPropertyAssignments: (arg0: PropertyAssignmentCreation[]) => void;
    getValidationPluginId: () => IPluginId;
    setValidationPluginId: (arg0: IPluginId) => void;
    setDescription: (arg0: String) => void;
    getMetaData: () => Map<String, String>;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    metaData: { [index: string]: string };
}

export interface DeleteExperimentTypesOperation extends DeleteObjectsOperation<IEntityTypeId, ExperimentTypeDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: ExperimentTypeDeletionOptions;
}

export interface DeleteExperimentTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface DeleteExperimentsOperation extends DeleteObjectsOperation<IExperimentId, ExperimentDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: ExperimentDeletionOptions;
}

export interface DeleteExperimentsOperationResult extends DeleteObjectsWithTrashOperationResult {
    getMessage: () => String;
    getDeletionId: () => IDeletionId;
}

export interface ExperimentDeletionOptions extends AbstractObjectDeletionOptions<ExperimentDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface ExperimentTypeDeletionOptions extends AbstractObjectDeletionOptions<ExperimentTypeDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface ExperimentFetchOptions extends FetchOptions<Experiment>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    withSamples: () => SampleFetchOptions;
    withSamplesUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    getSortBy: () => ExperimentSortOptions;
    getSortBy: () => SortOptions;
    hasSamples: () => boolean;
    withTypeUsing: (arg0: ExperimentTypeFetchOptions) => ExperimentTypeFetchOptions;
    hasType: () => boolean;
    withProject: () => ProjectFetchOptions;
    withProjectUsing: (arg0: ProjectFetchOptions) => ProjectFetchOptions;
    hasProject: () => boolean;
    withDataSets: () => DataSetFetchOptions;
    withDataSetsUsing: (arg0: DataSetFetchOptions) => DataSetFetchOptions;
    hasDataSets: () => boolean;
    withHistory: () => HistoryEntryFetchOptions;
    withHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasHistory: () => boolean;
    withPropertiesHistory: () => HistoryEntryFetchOptions;
    withPropertiesHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasPropertiesHistory: () => boolean;
    withProjectHistory: () => HistoryEntryFetchOptions;
    withProjectHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasProjectHistory: () => boolean;
    withSamplesHistory: () => HistoryEntryFetchOptions;
    withSamplesHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasSamplesHistory: () => boolean;
    withDataSetsHistory: () => HistoryEntryFetchOptions;
    withDataSetsHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasDataSetsHistory: () => boolean;
    withUnknownHistory: () => HistoryEntryFetchOptions;
    withUnknownHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasUnknownHistory: () => boolean;
    withPropertiesUsing: (arg0: PropertyFetchOptions) => PropertyFetchOptions;
    hasProperties: () => boolean;
    withMaterialProperties: () => MaterialFetchOptions;
    withMaterialPropertiesUsing: (arg0: MaterialFetchOptions) => MaterialFetchOptions;
    hasMaterialProperties: () => boolean;
    withSampleProperties: () => SampleFetchOptions;
    withSamplePropertiesUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    hasSampleProperties: () => boolean;
    withTags: () => TagFetchOptions;
    withTagsUsing: (arg0: TagFetchOptions) => TagFetchOptions;
    hasTags: () => boolean;
    withModifierUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasModifier: () => boolean;
    withAttachments: () => AttachmentFetchOptions;
    withAttachmentsUsing: (arg0: AttachmentFetchOptions) => AttachmentFetchOptions;
    hasAttachments: () => boolean;
    withProperties: () => PropertyFetchOptions;
    withType: () => ExperimentTypeFetchOptions;
    sortBy: () => SortOptions;
    sortBy: () => ExperimentSortOptions;
    withModifier: () => PersonFetchOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
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
}

export interface ExperimentSortOptions extends EntityWithPropertiesSortOptions<Experiment> {
    getIdentifier: () => SortOrder;
    identifier: () => SortOrder;
    type: () => SortOrder;
    getProperty: (arg0: String) => SortOrder;
    getType: () => SortOrder;
    property: (arg0: String) => SortOrder;
    fetchedFieldsScore: () => SortOrder;
    getFetchedFieldsScore: () => SortOrder;
    stringMatchPropertyScore: (arg0: String, arg1: String) => SortOrder;
    stringPrefixMatchPropertyScore: (arg0: String, arg1: String) => SortOrder;
    stringMatchAnyPropertyScore: (arg0: String) => SortOrder;
    stringPrefixMatchAnyPropertyScore: (arg0: String) => SortOrder;
    code: () => SortOrder;
    getPermId: () => SortOrder;
    registrationDate: () => SortOrder;
    getRegistrationDate: () => SortOrder;
    permId: () => SortOrder;
    modificationDate: () => SortOrder;
    getModificationDate: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
    identifier: SortOrder;
}

export interface ExperimentTypeFetchOptions extends FetchOptions<ExperimentType>, Serializable {
    getSortBy: () => SortOptions;
    getSortBy: () => ExperimentTypeSortOptions;
    withPropertyAssignments: () => PropertyAssignmentFetchOptions;
    withPropertyAssignmentsUsing: (arg0: PropertyAssignmentFetchOptions) => PropertyAssignmentFetchOptions;
    hasPropertyAssignments: () => boolean;
    withValidationPlugin: () => PluginFetchOptions;
    withValidationPluginUsing: (arg0: PluginFetchOptions) => PluginFetchOptions;
    hasValidationPlugin: () => boolean;
    sortBy: () => ExperimentTypeSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    propertyAssignments: PropertyAssignmentFetchOptions;
    validationPlugin: PluginFetchOptions;
    sort: ExperimentTypeSortOptions;
    sortBy: ExperimentTypeSortOptions;
}

export interface ExperimentTypeSortOptions extends SortOptions<ExperimentType> {
    getSortings: () => Sorting[];
}

export interface GetExperimentTypesOperation extends GetObjectsOperation<IEntityTypeId, ExperimentTypeFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: ExperimentTypeFetchOptions;
}

export interface GetExperimentTypesOperationResult extends GetObjectsOperationResult<IEntityTypeId, ExperimentType> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IEntityTypeId[];
    objects: ExperimentType[];
}

export interface GetExperimentsOperation extends GetObjectsOperation<IExperimentId, ExperimentFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: ExperimentFetchOptions;
}

export interface GetExperimentsOperationResult extends GetObjectsOperationResult<IExperimentId, Experiment> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IExperimentId[];
    objects: Experiment[];
}

export interface ExperimentIdentifier extends ObjectIdentifier, IExperimentId {
    getIdentifier: () => String;
}

export interface ExperimentPermId extends ObjectPermId, IExperimentId {
    getPermId: () => String;
}

export interface IExperimentId extends IObjectId {
}

export interface ExperimentSearchCriteria extends AbstractEntitySearchCriteria<IExperimentId> {
    negate: () => AbstractEntitySearchCriteria;
    negate: () => ExperimentSearchCriteria;
    withProject: () => ProjectSearchCriteria;
    withIdentifier: () => IdentifierSearchCriteria;
    withSubcriteria: () => ExperimentSearchCriteria;
    withTextAttribute: () => TextAttributeSearchCriteria;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withOrOperator: () => ExperimentSearchCriteria;
    withAndOperator: () => ExperimentSearchCriteria;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withType: () => ExperimentTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
}

export interface ExperimentTypeSearchCriteria extends AbstractEntityTypeSearchCriteria {
    withOrOperator: () => ExperimentTypeSearchCriteria;
    withAndOperator: () => ExperimentTypeSearchCriteria;
    withPropertyAssignments: () => PropertyAssignmentSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withIds: () => IdsSearchCriteria<IEntityTypeId>;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface NoExperimentSearchCriteria extends ISearchCriteria {
    isNegated: () => boolean;
}

export interface SearchExperimentTypesOperation extends SearchObjectsOperation<ExperimentTypeSearchCriteria, ExperimentTypeFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: ExperimentTypeSearchCriteria;
    fetchOptions: ExperimentTypeFetchOptions;
}

export interface SearchExperimentTypesOperationResult extends SearchObjectsOperationResult<ExperimentType> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<ExperimentType>;
}

export interface SearchExperimentsOperation extends SearchObjectsOperation<ExperimentSearchCriteria, ExperimentFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: ExperimentSearchCriteria;
    fetchOptions: ExperimentFetchOptions;
}

export interface SearchExperimentsOperationResult extends SearchObjectsOperationResult<Experiment> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<Experiment>;
}

export interface ExperimentTypeUpdate extends IEntityTypeUpdate, IMetaDataUpdateHolder {
    getPropertyAssignments: () => PropertyAssignmentListUpdateValue;
    getValidationPluginId: () => FieldUpdateValue<IPluginId>;
    setValidationPluginId: (arg0: IPluginId) => void;
    setPropertyAssignmentActions: (arg0: ListUpdateAction<Object>[]) => void;
    setMetaDataActions: (arg0: ListUpdateAction<Object>[]) => void;
    setDescription: (arg0: String) => void;
    getMetaData: () => ListUpdateMapValues;
    getTypeId: () => IEntityTypeId;
    setTypeId: (arg0: IEntityTypeId) => void;
    getObjectId: () => IEntityTypeId;
    getObjectId: () => IObjectId;
    getDescription: () => FieldUpdateValue<String>;
}

export interface ExperimentUpdate extends IUpdate, IObjectUpdate<IExperimentId>, IPropertiesHolder, IMetaDataUpdateHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    freeze: () => void;
    getBooleanProperty: (arg0: String) => Boolean;
    getExperimentId: () => IExperimentId;
    setExperimentId: (arg0: IExperimentId) => void;
    getAttachments: () => AttachmentListUpdateValue;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    setProjectId: (arg0: IProjectId) => void;
    shouldBeFrozen: () => boolean;
    shouldBeFrozenForSamples: () => boolean;
    setAttachmentsActions: (arg0: ListUpdateAction<Object>[]) => void;
    freezeForDataSets: () => void;
    freezeForSamples: () => void;
    shouldBeFrozenForDataSets: () => boolean;
    getTagIds: () => IdListUpdateValue<ITagId>;
    setMetaDataActions: (arg0: ListUpdateAction<Object>[]) => void;
    getProjectId: () => FieldUpdateValue<IProjectId>;
    getMetaData: () => ListUpdateMapValues;
    getObjectId: () => IExperimentId;
    getObjectId: () => IObjectId;
    experimentId: IExperimentId;
    freeze: boolean;
    freezeForDataSets: boolean;
    freezeForSamples: boolean;
    projectId: FieldUpdateValue<IProjectId>;
    tagIds: IdListUpdateValue<ITagId>;
    attachments: AttachmentListUpdateValue;
}

export interface UpdateExperimentTypesOperation extends UpdateObjectsOperation<ExperimentTypeUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: ExperimentTypeUpdate[];
}

export interface UpdateExperimentTypesOperationResult extends UpdateObjectsOperationResult<EntityTypePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: EntityTypePermId[];
}

export interface UpdateExperimentsOperation extends UpdateObjectsOperation<ExperimentUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: ExperimentUpdate[];
}

export interface UpdateExperimentsOperationResult extends UpdateObjectsOperationResult<ExperimentPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: ExperimentPermId[];
}

export interface Material extends Serializable, ICodeHolder, IEntityTypeHolder, IMaterialPropertiesHolder, IModificationDateHolder, IPermIdHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ITagsHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    getType: () => IEntityType;
    getType: () => MaterialType;
    getBooleanProperty: (arg0: String) => Boolean;
    getPermId: () => MaterialPermId;
    getPermId: () => IObjectId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => MaterialFetchOptions;
    setFetchOptions: (arg0: MaterialFetchOptions) => void;
    setPermId: (arg0: MaterialPermId) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    getMaterialProperties: () => Map<String, Material>;
    setMaterialProperties: (arg0: Map<String, Material>) => void;
    setHistory: (arg0: HistoryEntry[]) => void;
    getMaterialProperty: (arg0: String) => Material;
    setMaterialProperty: (arg0: String, arg1: Material) => void;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    getHistory: () => HistoryEntry[];
    getCode: () => String;
    setCode: (arg0: String) => void;
    getTags: () => Set<Tag>;
    setTags: (arg0: Set<Tag>) => void;
    setType: (arg0: MaterialType) => void;
    fetchOptions: MaterialFetchOptions;
    permId: MaterialPermId;
    type: MaterialType;
    history: HistoryEntry[];
}

export interface MaterialType extends Serializable, ICodeHolder, IDescriptionHolder, IEntityType, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder {
    getPermId: () => EntityTypePermId;
    getPermId: () => IObjectId;
    getFetchOptions: () => MaterialTypeFetchOptions;
    setFetchOptions: (arg0: MaterialTypeFetchOptions) => void;
    setPermId: (arg0: EntityTypePermId) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    getPropertyAssignments: () => PropertyAssignment[];
    getValidationPlugin: () => Plugin;
    setPropertyAssignments: (arg0: PropertyAssignment[]) => void;
    setValidationPlugin: (arg0: Plugin) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    fetchOptions: MaterialTypeFetchOptions;
    permId: EntityTypePermId;
}

export interface CreateMaterialTypesOperation extends CreateObjectsOperation<MaterialTypeCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: MaterialTypeCreation[];
}

export interface CreateMaterialTypesOperationResult extends CreateObjectsOperationResult<EntityTypePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: EntityTypePermId[];
}

export interface CreateMaterialsOperation extends CreateObjectsOperation<MaterialCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: MaterialCreation[];
}

export interface CreateMaterialsOperationResult extends CreateObjectsOperationResult<MaterialPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: MaterialPermId[];
}

export interface MaterialCreation extends ICreation, IObjectCreation, ICreationIdHolder, IPropertiesHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    getBooleanProperty: (arg0: String) => Boolean;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    getCreationId: () => CreationId;
    setCreationId: (arg0: CreationId) => void;
    getTagIds: () => ITagId[];
    setTagIds: (arg0: ITagId[]) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getTypeId: () => IEntityTypeId;
    setTypeId: (arg0: IEntityTypeId) => void;
    getDescription: () => String;
    code: string;
    typeId: IEntityTypeId;
    description: string;
    tagIds: ITagId[];
}

export interface MaterialTypeCreation extends IEntityTypeCreation {
    getPropertyAssignments: () => PropertyAssignmentCreation[];
    setPropertyAssignments: (arg0: PropertyAssignmentCreation[]) => void;
    getValidationPluginId: () => IPluginId;
    setValidationPluginId: (arg0: IPluginId) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
}

export interface DeleteMaterialTypesOperation extends DeleteObjectsOperation<IEntityTypeId, MaterialTypeDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: MaterialTypeDeletionOptions;
}

export interface DeleteMaterialTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface DeleteMaterialsOperation extends DeleteObjectsOperation<IMaterialId, MaterialDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: MaterialDeletionOptions;
}

export interface DeleteMaterialsOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface MaterialDeletionOptions extends AbstractObjectDeletionOptions<MaterialDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface MaterialTypeDeletionOptions extends AbstractObjectDeletionOptions<MaterialTypeDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface MaterialFetchOptions extends FetchOptions<Material>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => MaterialSortOptions;
    getSortBy: () => SortOptions;
    withTypeUsing: (arg0: MaterialTypeFetchOptions) => MaterialTypeFetchOptions;
    hasType: () => boolean;
    withHistory: () => HistoryEntryFetchOptions;
    withHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasHistory: () => boolean;
    withPropertiesUsing: (arg0: PropertyFetchOptions) => PropertyFetchOptions;
    hasProperties: () => boolean;
    withMaterialProperties: () => MaterialFetchOptions;
    withMaterialPropertiesUsing: (arg0: MaterialFetchOptions) => MaterialFetchOptions;
    hasMaterialProperties: () => boolean;
    withTags: () => TagFetchOptions;
    withTagsUsing: (arg0: TagFetchOptions) => TagFetchOptions;
    hasTags: () => boolean;
    withProperties: () => PropertyFetchOptions;
    withType: () => MaterialTypeFetchOptions;
    sortBy: () => SortOptions;
    sortBy: () => MaterialSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    type: MaterialTypeFetchOptions;
    history: HistoryEntryFetchOptions;
    registrator: PersonFetchOptions;
    properties: PropertyFetchOptions;
    materialProperties: MaterialFetchOptions;
    tags: TagFetchOptions;
    sort: MaterialSortOptions;
    sortBy: MaterialSortOptions;
}

export interface MaterialSortOptions extends EntityWithPropertiesSortOptions<Material> {
    type: () => SortOrder;
    getProperty: (arg0: String) => SortOrder;
    getType: () => SortOrder;
    property: (arg0: String) => SortOrder;
    fetchedFieldsScore: () => SortOrder;
    getFetchedFieldsScore: () => SortOrder;
    stringMatchPropertyScore: (arg0: String, arg1: String) => SortOrder;
    stringPrefixMatchPropertyScore: (arg0: String, arg1: String) => SortOrder;
    stringMatchAnyPropertyScore: (arg0: String) => SortOrder;
    stringPrefixMatchAnyPropertyScore: (arg0: String) => SortOrder;
    code: () => SortOrder;
    getPermId: () => SortOrder;
    registrationDate: () => SortOrder;
    getRegistrationDate: () => SortOrder;
    permId: () => SortOrder;
    modificationDate: () => SortOrder;
    getModificationDate: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
}

export interface MaterialTypeFetchOptions extends FetchOptions<MaterialType>, Serializable {
    getSortBy: () => SortOptions;
    getSortBy: () => MaterialTypeSortOptions;
    withPropertyAssignments: () => PropertyAssignmentFetchOptions;
    withPropertyAssignmentsUsing: (arg0: PropertyAssignmentFetchOptions) => PropertyAssignmentFetchOptions;
    hasPropertyAssignments: () => boolean;
    withValidationPlugin: () => PluginFetchOptions;
    withValidationPluginUsing: (arg0: PluginFetchOptions) => PluginFetchOptions;
    hasValidationPlugin: () => boolean;
    sortBy: () => MaterialTypeSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    propertyAssignments: PropertyAssignmentFetchOptions;
    validationPlugin: PluginFetchOptions;
    sort: MaterialTypeSortOptions;
    sortBy: MaterialTypeSortOptions;
}

export interface MaterialTypeSortOptions extends SortOptions<MaterialType> {
    getSortings: () => Sorting[];
}

export interface GetMaterialTypesOperation extends GetObjectsOperation<IEntityTypeId, MaterialTypeFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: MaterialTypeFetchOptions;
}

export interface GetMaterialTypesOperationResult extends GetObjectsOperationResult<IEntityTypeId, MaterialType> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IEntityTypeId[];
    objects: MaterialType[];
}

export interface GetMaterialsOperation extends GetObjectsOperation<IMaterialId, MaterialFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: MaterialFetchOptions;
}

export interface GetMaterialsOperationResult extends GetObjectsOperationResult<IMaterialId, Material> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IMaterialId[];
    objects: Material[];
}

export interface IMaterialId extends IObjectId {
}

export interface MaterialPermId extends IMaterialId {
    getTypeCode: () => String;
    setTypeCode: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    code: string;
    typeCode: string;
}

export interface MaterialSearchCriteria extends AbstractEntitySearchCriteria<IMaterialId> {
    negate: () => MaterialSearchCriteria;
    negate: () => AbstractEntitySearchCriteria;
    withSubcriteria: () => MaterialSearchCriteria;
    withTextAttribute: () => TextAttributeSearchCriteria;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withOrOperator: () => MaterialSearchCriteria;
    withAndOperator: () => MaterialSearchCriteria;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withType: () => MaterialTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
}

export interface MaterialTypeSearchCriteria extends AbstractEntityTypeSearchCriteria {
    withOrOperator: () => MaterialTypeSearchCriteria;
    withAndOperator: () => MaterialTypeSearchCriteria;
    withPropertyAssignments: () => PropertyAssignmentSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withIds: () => IdsSearchCriteria<IEntityTypeId>;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface SearchMaterialTypesOperation extends SearchObjectsOperation<MaterialTypeSearchCriteria, MaterialTypeFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: MaterialTypeSearchCriteria;
    fetchOptions: MaterialTypeFetchOptions;
}

export interface SearchMaterialTypesOperationResult extends SearchObjectsOperationResult<MaterialType> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<MaterialType>;
}

export interface SearchMaterialsOperation extends SearchObjectsOperation<MaterialSearchCriteria, MaterialFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: MaterialSearchCriteria;
    fetchOptions: MaterialFetchOptions;
}

export interface SearchMaterialsOperationResult extends SearchObjectsOperationResult<Material> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<Material>;
}

export interface MaterialTypeUpdate extends IEntityTypeUpdate {
    getPropertyAssignments: () => PropertyAssignmentListUpdateValue;
    getValidationPluginId: () => FieldUpdateValue<IPluginId>;
    setValidationPluginId: (arg0: IPluginId) => void;
    setPropertyAssignmentActions: (arg0: ListUpdateAction<Object>[]) => void;
    setDescription: (arg0: String) => void;
    getTypeId: () => IEntityTypeId;
    setTypeId: (arg0: IEntityTypeId) => void;
    getObjectId: () => IEntityTypeId;
    getObjectId: () => IObjectId;
    getDescription: () => FieldUpdateValue<String>;
}

export interface MaterialUpdate extends IUpdate, IObjectUpdate<IMaterialId>, IPropertiesHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    getBooleanProperty: (arg0: String) => Boolean;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    setTagActions: (arg0: ListUpdateAction<ITagId>[]) => void;
    setMaterialId: (arg0: IMaterialId) => void;
    getTagIds: () => IdListUpdateValue<ITagId>;
    getMaterialId: () => IMaterialId;
    getObjectId: () => IMaterialId;
    getObjectId: () => IObjectId;
    materialId: IMaterialId;
    tagIds: IdListUpdateValue<ITagId>;
}

export interface UpdateMaterialTypesOperation extends UpdateObjectsOperation<MaterialTypeUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: MaterialTypeUpdate[];
}

export interface UpdateMaterialTypesOperationResult extends UpdateObjectsOperationResult<EntityTypePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: EntityTypePermId[];
}

export interface UpdateMaterialsOperation extends UpdateObjectsOperation<MaterialUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: MaterialUpdate[];
}

export interface UpdateMaterialsOperationResult extends UpdateObjectsOperationResult<MaterialPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: MaterialPermId[];
}

export interface AbstractOperationExecutionOptions extends IOperationExecutionOptions {
    getNotification: () => IOperationExecutionNotification;
    getAvailabilityTime: () => Integer;
    getSummaryAvailabilityTime: () => Integer;
    getDetailsAvailabilityTime: () => Integer;
    isExecuteInOrder: () => boolean;
    setNotification: (arg0: IOperationExecutionNotification) => void;
    setAvailabilityTime: (arg0: Integer) => void;
    setSummaryAvailabilityTime: (arg0: Integer) => void;
    setDetailsAvailabilityTime: (arg0: Integer) => void;
    setExecuteInOrder: (arg0: boolean) => void;
    setDescription: (arg0: String) => void;
    getDescription: () => String;
}

export interface AsynchronousOperationExecutionOptions extends AbstractOperationExecutionOptions {
    getNotification: () => IOperationExecutionNotification;
    getAvailabilityTime: () => Integer;
    getSummaryAvailabilityTime: () => Integer;
    getDetailsAvailabilityTime: () => Integer;
    isExecuteInOrder: () => boolean;
    setNotification: (arg0: IOperationExecutionNotification) => void;
    setAvailabilityTime: (arg0: Integer) => void;
    setSummaryAvailabilityTime: (arg0: Integer) => void;
    setDetailsAvailabilityTime: (arg0: Integer) => void;
    setExecuteInOrder: (arg0: boolean) => void;
    setDescription: (arg0: String) => void;
    getDescription: () => String;
}

export interface AsynchronousOperationExecutionResults extends IOperationExecutionResults {
    getExecutionId: () => OperationExecutionPermId;
    executionId: OperationExecutionPermId;
}

export interface IOperationExecutionNotification extends Serializable {
}

export interface IOperationExecutionOptions extends Serializable {
    getNotification: () => IOperationExecutionNotification;
    getAvailabilityTime: () => Integer;
    getSummaryAvailabilityTime: () => Integer;
    getDetailsAvailabilityTime: () => Integer;
    isExecuteInOrder: () => boolean;
    getDescription: () => String;
    notification: IOperationExecutionNotification;
    availabilityTime: number;
    summaryAvailabilityTime: number;
    detailsAvailabilityTime: number;
    executeInOrder: boolean;
    description: string;
}

export interface IOperationExecutionResults extends Serializable {
}

export interface OperationExecution extends Serializable, ICodeHolder, IDescriptionHolder, IPermIdHolder {
    getState: () => OperationExecutionState;
    getOwner: () => Person;
    setOwner: (arg0: Person) => void;
    setState: (arg0: OperationExecutionState) => void;
    getPermId: () => IObjectId;
    getPermId: () => OperationExecutionPermId;
    getFetchOptions: () => OperationExecutionFetchOptions;
    setFetchOptions: (arg0: OperationExecutionFetchOptions) => void;
    getNotification: () => IOperationExecutionNotification;
    getAvailabilityTime: () => Integer;
    getSummaryAvailabilityTime: () => Integer;
    getDetailsAvailabilityTime: () => Integer;
    setPermId: (arg0: OperationExecutionPermId) => void;
    getCreationDate: () => Date;
    setCreationDate: (arg0: Date) => void;
    setNotification: (arg0: IOperationExecutionNotification) => void;
    getAvailability: () => OperationExecutionAvailability;
    setAvailability: (arg0: OperationExecutionAvailability) => void;
    setAvailabilityTime: (arg0: Integer) => void;
    getSummaryAvailability: () => OperationExecutionAvailability;
    setSummaryAvailability: (arg0: OperationExecutionAvailability) => void;
    setSummaryAvailabilityTime: (arg0: Integer) => void;
    setDetails: (arg0: OperationExecutionDetails) => void;
    getDetailsAvailability: () => OperationExecutionAvailability;
    setDetailsAvailability: (arg0: OperationExecutionAvailability) => void;
    setDetailsAvailabilityTime: (arg0: Integer) => void;
    getStartDate: () => Date;
    setStartDate: (arg0: Date) => void;
    getFinishDate: () => Date;
    setFinishDate: (arg0: Date) => void;
    setSummary: (arg0: OperationExecutionSummary) => void;
    getSummary: () => OperationExecutionSummary;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    getDetails: () => OperationExecutionDetails;
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
}

export interface OperationExecutionDetails extends Serializable {
    setError: (arg0: IOperationExecutionError) => void;
    getFetchOptions: () => OperationExecutionDetailsFetchOptions;
    setFetchOptions: (arg0: OperationExecutionDetailsFetchOptions) => void;
    getOperations: () => IOperation[];
    setOperations: (arg0: IOperation[]) => void;
    setProgress: (arg0: IOperationExecutionProgress) => void;
    getResults: () => IOperationResult[];
    setResults: (arg0: IOperationResult[]) => void;
    getProgress: () => IOperationExecutionProgress;
    getError: () => IOperationExecutionError;
    fetchOptions: OperationExecutionDetailsFetchOptions;
    operations: IOperation[];
    progress: IOperationExecutionProgress;
    error: IOperationExecutionError;
    results: IOperationResult[];
}

export interface OperationExecutionEmailNotification extends IOperationExecutionNotification {
    getEmails: () => String[];
    emails: string[];
}

export interface OperationExecutionError extends IOperationExecutionError {
    getMessage: () => String;
}

export interface OperationExecutionProgress extends IOperationExecutionProgress {
    getMessage: () => String;
    getTotalItemsToProcess: () => Integer;
    getNumItemsProcessed: () => Integer;
}

export interface OperationExecutionSummary extends Serializable {
    setError: (arg0: String) => void;
    getFetchOptions: () => OperationExecutionSummaryFetchOptions;
    setFetchOptions: (arg0: OperationExecutionSummaryFetchOptions) => void;
    getOperations: () => String[];
    setOperations: (arg0: String[]) => void;
    setProgress: (arg0: String) => void;
    getResults: () => String[];
    setResults: (arg0: String[]) => void;
    getProgress: () => String;
    getError: () => String;
    fetchOptions: OperationExecutionSummaryFetchOptions;
    operations: string[];
    progress: string;
    error: string;
    results: string[];
}

export interface SynchronousOperationExecutionOptions extends AbstractOperationExecutionOptions {
    getExecutionId: () => OperationExecutionPermId;
    setExecutionId: (arg0: OperationExecutionPermId) => void;
    getNotification: () => IOperationExecutionNotification;
    getAvailabilityTime: () => Integer;
    getSummaryAvailabilityTime: () => Integer;
    getDetailsAvailabilityTime: () => Integer;
    isExecuteInOrder: () => boolean;
    setNotification: (arg0: IOperationExecutionNotification) => void;
    setAvailabilityTime: (arg0: Integer) => void;
    setSummaryAvailabilityTime: (arg0: Integer) => void;
    setDetailsAvailabilityTime: (arg0: Integer) => void;
    setExecuteInOrder: (arg0: boolean) => void;
    setDescription: (arg0: String) => void;
    getDescription: () => String;
    executionId: OperationExecutionPermId;
}

export interface SynchronousOperationExecutionResults extends IOperationExecutionResults {
    getResults: () => IOperationResult[];
    results: IOperationResult[];
}

export interface DeleteOperationExecutionsOperation extends DeleteObjectsOperation<IOperationExecutionId, OperationExecutionDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: OperationExecutionDeletionOptions;
}

export interface DeleteOperationExecutionsOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface OperationExecutionDeletionOptions extends AbstractObjectDeletionOptions<OperationExecutionDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface OperationExecutionDetailsFetchOptions extends FetchOptions<OperationExecutionDetails>, Serializable {
    getSortBy: () => SortOptions;
    getSortBy: () => OperationExecutionDetailsSortOptions;
    hasOperations: () => boolean;
    hasProgress: () => boolean;
    hasResults: () => boolean;
    withOperations: () => EmptyFetchOptions;
    withOperationsUsing: (arg0: EmptyFetchOptions) => EmptyFetchOptions;
    withProgress: () => EmptyFetchOptions;
    withProgressUsing: (arg0: EmptyFetchOptions) => EmptyFetchOptions;
    withError: () => EmptyFetchOptions;
    withErrorUsing: (arg0: EmptyFetchOptions) => EmptyFetchOptions;
    withResults: () => EmptyFetchOptions;
    withResultsUsing: (arg0: EmptyFetchOptions) => EmptyFetchOptions;
    hasError: () => boolean;
    sortBy: () => OperationExecutionDetailsSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    operations: EmptyFetchOptions;
    progress: EmptyFetchOptions;
    error: EmptyFetchOptions;
    results: EmptyFetchOptions;
    sort: OperationExecutionDetailsSortOptions;
    sortBy: OperationExecutionDetailsSortOptions;
}

export interface OperationExecutionDetailsSortOptions extends SortOptions<OperationExecutionDetails> {
    getSortings: () => Sorting[];
}

export interface OperationExecutionFetchOptions extends FetchOptions<OperationExecution>, Serializable {
    withOwner: () => PersonFetchOptions;
    getSortBy: () => OperationExecutionSortOptions;
    getSortBy: () => SortOptions;
    withOwnerUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasOwner: () => boolean;
    withNotification: () => OperationExecutionNotificationFetchOptions;
    withNotificationUsing: (arg0: OperationExecutionNotificationFetchOptions) => OperationExecutionNotificationFetchOptions;
    hasNotification: () => boolean;
    withSummaryUsing: (arg0: OperationExecutionSummaryFetchOptions) => OperationExecutionSummaryFetchOptions;
    hasSummary: () => boolean;
    withDetails: () => OperationExecutionDetailsFetchOptions;
    withDetailsUsing: (arg0: OperationExecutionDetailsFetchOptions) => OperationExecutionDetailsFetchOptions;
    hasDetails: () => boolean;
    withSummary: () => OperationExecutionSummaryFetchOptions;
    sortBy: () => SortOptions;
    sortBy: () => OperationExecutionSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    owner: PersonFetchOptions;
    notification: OperationExecutionNotificationFetchOptions;
    summary: OperationExecutionSummaryFetchOptions;
    details: OperationExecutionDetailsFetchOptions;
    sort: OperationExecutionSortOptions;
    sortBy: OperationExecutionSortOptions;
}

export interface OperationExecutionNotificationFetchOptions extends FetchOptions<IOperationExecutionNotification>, Serializable {
    getSortBy: () => SortOptions<IOperationExecutionNotification>;
    sortBy: () => SortOptions<IOperationExecutionNotification>;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    sort: OperationExecutionNotificationSortOptions;
    sortBy: SortOptions<IOperationExecutionNotification>;
}

export interface OperationExecutionNotificationSortOptions extends SortOptions<IOperationExecutionNotification> {
    getSortings: () => Sorting[];
}

export interface OperationExecutionSortOptions extends SortOptions<OperationExecution> {
    getSortings: () => Sorting[];
}

export interface OperationExecutionSummaryFetchOptions extends FetchOptions<OperationExecutionSummary>, Serializable {
    getSortBy: () => SortOptions;
    getSortBy: () => OperationExecutionSummarySortOptions;
    hasOperations: () => boolean;
    hasProgress: () => boolean;
    hasResults: () => boolean;
    withOperations: () => EmptyFetchOptions;
    withOperationsUsing: (arg0: EmptyFetchOptions) => EmptyFetchOptions;
    withProgress: () => EmptyFetchOptions;
    withProgressUsing: (arg0: EmptyFetchOptions) => EmptyFetchOptions;
    withError: () => EmptyFetchOptions;
    withErrorUsing: (arg0: EmptyFetchOptions) => EmptyFetchOptions;
    withResults: () => EmptyFetchOptions;
    withResultsUsing: (arg0: EmptyFetchOptions) => EmptyFetchOptions;
    hasError: () => boolean;
    sortBy: () => OperationExecutionSummarySortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    operations: EmptyFetchOptions;
    progress: EmptyFetchOptions;
    error: EmptyFetchOptions;
    results: EmptyFetchOptions;
    sort: OperationExecutionSummarySortOptions;
    sortBy: OperationExecutionSummarySortOptions;
}

export interface OperationExecutionSummarySortOptions extends SortOptions<OperationExecutionSummary> {
    getSortings: () => Sorting[];
}

export interface GetOperationExecutionsOperation extends GetObjectsOperation<IOperationExecutionId, OperationExecutionFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: OperationExecutionFetchOptions;
}

export interface GetOperationExecutionsOperationResult extends GetObjectsOperationResult<IOperationExecutionId, OperationExecution> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IOperationExecutionId[];
    objects: OperationExecution[];
}

export interface IOperationExecutionId extends IObjectId {
}

export interface OperationExecutionPermId extends ObjectPermId, IOperationExecutionId {
    getPermId: () => String;
}

export interface OperationExecutionSearchCriteria extends AbstractCompositeSearchCriteria {
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface SearchOperationExecutionsOperation extends SearchObjectsOperation<OperationExecutionSearchCriteria, OperationExecutionFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: OperationExecutionSearchCriteria;
    fetchOptions: OperationExecutionFetchOptions;
}

export interface SearchOperationExecutionsOperationResult extends SearchObjectsOperationResult<OperationExecution> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<OperationExecution>;
}

export interface OperationExecutionUpdate extends IUpdate, IObjectUpdate<IOperationExecutionId> {
    getExecutionId: () => IOperationExecutionId;
    setExecutionId: (arg0: IOperationExecutionId) => void;
    deleteSummary: () => void;
    isDeleteSummary: () => boolean;
    deleteDetails: () => void;
    isDeleteDetails: () => boolean;
    setDescription: (arg0: String) => void;
    getObjectId: () => IOperationExecutionId;
    getObjectId: () => IObjectId;
    getDescription: () => FieldUpdateValue<String>;
    executionId: IOperationExecutionId;
    description: FieldUpdateValue<string>;
    deleteSummaryRequested: boolean;
    deleteDetailsRequested: boolean;
}

export interface UpdateOperationExecutionsOperation extends UpdateObjectsOperation<OperationExecutionUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: OperationExecutionUpdate[];
}

export interface UpdateOperationExecutionsOperationResult extends UpdateObjectsOperationResult<OperationExecutionPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: OperationExecutionPermId[];
}

export interface Person extends Serializable, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder, ISpaceHolder {
    isActive: () => Boolean;
    getSpace: () => Space;
    getRoleAssignments: () => RoleAssignment[];
    getPermId: () => IObjectId;
    getPermId: () => PersonPermId;
    getFirstName: () => String;
    setFirstName: (arg0: String) => void;
    setLastName: (arg0: String) => void;
    getEmail: () => String;
    setEmail: (arg0: String) => void;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    setSpace: (arg0: Space) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    setRoleAssignments: (arg0: RoleAssignment[]) => void;
    setWebAppSettings: (arg0: Map<String, WebAppSettings>) => void;
    getFetchOptions: () => PersonFetchOptions;
    setFetchOptions: (arg0: PersonFetchOptions) => void;
    getWebAppSettings: (arg0: String) => WebAppSettings;
    getWebAppSettings: () => Map<String, WebAppSettings>;
    setPermId: (arg0: PersonPermId) => void;
    getUserId: () => String;
    getLastName: () => String;
    setUserId: (arg0: String) => void;
    setActive: (arg0: Boolean) => void;
    fetchOptions: PersonFetchOptions;
    permId: PersonPermId;
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    active: boolean;
    roleAssignments: RoleAssignment[];
    webAppSettings: { [index: string]: WebAppSettings };
}

export interface CreatePersonsOperation extends CreateObjectsOperation<PersonCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: PersonCreation[];
}

export interface CreatePersonsOperationResult extends CreateObjectsOperationResult<PersonPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: PersonPermId[];
}

export interface PersonCreation extends ICreation, IObjectCreation {
    getSpaceId: () => ISpaceId;
    setSpaceId: (arg0: ISpaceId) => void;
    getUserId: () => String;
    setUserId: (arg0: String) => void;
    userId: string;
    spaceId: ISpaceId;
}

export interface DeletePersonsOperation extends DeleteObjectsOperation<IPersonId, PersonDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: PersonDeletionOptions;
}

export interface DeletePersonsOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface PersonDeletionOptions extends AbstractObjectDeletionOptions<PersonDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface PersonFetchOptions extends FetchOptions<Person>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => SortOptions;
    getSortBy: () => PersonSortOptions;
    withSpace: () => SpaceFetchOptions;
    withSpaceUsing: (arg0: SpaceFetchOptions) => SpaceFetchOptions;
    hasSpace: () => boolean;
    withRoleAssignments: () => RoleAssignmentFetchOptions;
    withRoleAssignmentsUsing: (arg0: RoleAssignmentFetchOptions) => RoleAssignmentFetchOptions;
    hasRoleAssignments: () => boolean;
    withWebAppSettings: (arg0: String) => WebAppSettingsFetchOptions;
    hasWebAppSettings: (arg0: String) => boolean;
    withWebAppSettingsUsing: (arg0: Map<String, WebAppSettingsFetchOptions>) => Map<String, WebAppSettingsFetchOptions>;
    getWebAppSettings: () => Map<String, WebAppSettingsFetchOptions>;
    withAllWebAppSettings: () => void;
    hasAllWebAppSettings: () => boolean;
    withAllWebAppSettingsUsing: (arg0: boolean) => boolean;
    sortBy: () => SortOptions;
    sortBy: () => PersonSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    space: SpaceFetchOptions;
    registrator: PersonFetchOptions;
    roleAssignments: RoleAssignmentFetchOptions;
    webAppSettings: { [index: string]: WebAppSettingsFetchOptions };
    allWebAppSettings: boolean;
    sort: PersonSortOptions;
}

export interface PersonFetchOptionsAllWebAppSettingsHandler extends IFetchPropertyHandler {
    areMatching: (arg0: Object, arg1: Object, arg2: IFetchOptionsMatcher) => boolean;
}

export interface PersonFetchOptionsWebAppSettingsHandler extends IFetchPropertyHandler {
    areMatching: (arg0: Object, arg1: Object, arg2: IFetchOptionsMatcher) => boolean;
}

export interface PersonSortOptions extends SortOptions<Person> {
    getSortings: () => Sorting[];
}

export interface GetPersonsOperation extends GetObjectsOperation<IPersonId, PersonFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: PersonFetchOptions;
}

export interface GetPersonsOperationResult extends GetObjectsOperationResult<IPersonId, Person> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IPersonId[];
    objects: Person[];
}

export interface IPersonId extends IObjectId {
}

export interface Me extends ObjectPermId, IPersonId {
    getPermId: () => String;
}

export interface PersonPermId extends ObjectPermId, IPersonId {
    getPermId: () => String;
}

export interface EmailSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface FirstNameSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface LastNameSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface ModifierSearchCriteria extends PersonSearchCriteria {
    withUserId: () => UserIdSearchCriteria;
    withOrOperator: () => PersonSearchCriteria;
    withAndOperator: () => PersonSearchCriteria;
    withUserIds: () => UserIdsSearchCriteria;
    withFirstName: () => FirstNameSearchCriteria;
    withLastName: () => LastNameSearchCriteria;
    withEmail: () => EmailSearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface PersonSearchCriteria extends AbstractObjectSearchCriteria<IPersonId> {
    withUserId: () => UserIdSearchCriteria;
    withOrOperator: () => PersonSearchCriteria;
    withAndOperator: () => PersonSearchCriteria;
    withUserIds: () => UserIdsSearchCriteria;
    withFirstName: () => FirstNameSearchCriteria;
    withLastName: () => LastNameSearchCriteria;
    withEmail: () => EmailSearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface RegistratorSearchCriteria extends PersonSearchCriteria {
    withUserId: () => UserIdSearchCriteria;
    withOrOperator: () => PersonSearchCriteria;
    withAndOperator: () => PersonSearchCriteria;
    withUserIds: () => UserIdsSearchCriteria;
    withFirstName: () => FirstNameSearchCriteria;
    withLastName: () => LastNameSearchCriteria;
    withEmail: () => EmailSearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface SearchPersonsOperation extends SearchObjectsOperation<PersonSearchCriteria, PersonFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: PersonSearchCriteria;
    fetchOptions: PersonFetchOptions;
}

export interface SearchPersonsOperationResult extends SearchObjectsOperationResult<Person> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<Person>;
}

export interface UserIdSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface UserIdsSearchCriteria extends CollectionFieldSearchCriteria<string> {
    thatIn: (arg0: Collection<any>) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldValue: string[];
}

export interface PersonUpdate extends IUpdate, IObjectUpdate<IPersonId> {
    isActive: () => FieldUpdateValue<Boolean>;
    getWebAppSettings: () => Map<String, WebAppSettingsUpdateValue>;
    getWebAppSettings: (arg0: String) => WebAppSettingsUpdateValue;
    getSpaceId: () => FieldUpdateValue<ISpaceId>;
    setSpaceId: (arg0: ISpaceId) => void;
    deactivate: () => void;
    getUserId: () => IPersonId;
    setUserId: (arg0: IPersonId) => void;
    getObjectId: () => IObjectId;
    getObjectId: () => IPersonId;
    activate: () => void;
    userId: IPersonId;
    spaceId: FieldUpdateValue<ISpaceId>;
    active: FieldUpdateValue<boolean>;
    webAppSettings: { [index: string]: WebAppSettingsUpdateValue };
}

export interface UpdatePersonsOperation extends UpdateObjectsOperation<PersonUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: PersonUpdate[];
}

export interface UpdatePersonsOperationResult extends UpdateObjectsOperationResult<PersonPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: PersonPermId[];
}

export interface Project extends Serializable, IAttachmentsHolder, ICodeHolder, IDescriptionHolder, IExperimentsHolder, IIdentifierHolder, IModificationDateHolder, IModifierHolder, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder, ISpaceHolder {
    isFrozen: () => boolean;
    getSpace: () => Space;
    getExperiments: () => Experiment[];
    getSamples: () => Sample[];
    getPermId: () => IObjectId;
    getPermId: () => ProjectPermId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    setSpace: (arg0: Space) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => ProjectFetchOptions;
    setFetchOptions: (arg0: ProjectFetchOptions) => void;
    setPermId: (arg0: ProjectPermId) => void;
    setFrozen: (arg0: boolean) => void;
    isFrozenForSamples: () => boolean;
    setFrozenForSamples: (arg0: boolean) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    setSamples: (arg0: Sample[]) => void;
    isFrozenForExperiments: () => boolean;
    setFrozenForExperiments: (arg0: boolean) => void;
    setExperiments: (arg0: Experiment[]) => void;
    getExperimentsHistory: () => HistoryEntry[];
    setExperimentsHistory: (arg0: HistoryEntry[]) => void;
    getSamplesHistory: () => HistoryEntry[];
    setSamplesHistory: (arg0: HistoryEntry[]) => void;
    getLeader: () => Person;
    setLeader: (arg0: Person) => void;
    setHistory: (arg0: HistoryEntry[]) => void;
    getSpaceHistory: () => HistoryEntry[];
    setSpaceHistory: (arg0: HistoryEntry[]) => void;
    getUnknownHistory: () => HistoryEntry[];
    setUnknownHistory: (arg0: HistoryEntry[]) => void;
    getModifier: () => Person;
    setModifier: (arg0: Person) => void;
    getAttachments: () => Attachment[];
    setAttachments: (arg0: Attachment[]) => void;
    setDescription: (arg0: String) => void;
    getHistory: () => HistoryEntry[];
    getCode: () => String;
    setCode: (arg0: String) => void;
    setIdentifier: (arg0: ProjectIdentifier) => void;
    getDescription: () => String;
    getIdentifier: () => ObjectIdentifier;
    getIdentifier: () => ProjectIdentifier;
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
}

export interface CreateProjectsOperation extends CreateObjectsOperation<ProjectCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: ProjectCreation[];
}

export interface CreateProjectsOperationResult extends CreateObjectsOperationResult<ProjectPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: ProjectPermId[];
}

export interface ProjectCreation extends ICreation, IObjectCreation, ICreationIdHolder {
    getAttachments: () => AttachmentCreation[];
    setAttachments: (arg0: AttachmentCreation[]) => void;
    getSpaceId: () => ISpaceId;
    setSpaceId: (arg0: ISpaceId) => void;
    getCreationId: () => CreationId;
    setCreationId: (arg0: CreationId) => void;
    getLeaderId: () => IPersonId;
    setLeaderId: (arg0: IPersonId) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    spaceId: ISpaceId;
    code: string;
    description: string;
    leaderId: IPersonId;
    attachments: AttachmentCreation[];
}

export interface DeleteProjectsOperation extends DeleteObjectsOperation<IProjectId, ProjectDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: ProjectDeletionOptions;
}

export interface DeleteProjectsOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface ProjectDeletionOptions extends AbstractObjectDeletionOptions<ProjectDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface ProjectFetchOptions extends FetchOptions<Project>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    withSamples: () => SampleFetchOptions;
    withSamplesUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    getSortBy: () => SortOptions;
    getSortBy: () => ProjectSortOptions;
    hasSamples: () => boolean;
    withSpace: () => SpaceFetchOptions;
    withSpaceUsing: (arg0: SpaceFetchOptions) => SpaceFetchOptions;
    hasSpace: () => boolean;
    withSpaceHistory: () => HistoryEntryFetchOptions;
    withSpaceHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasSpaceHistory: () => boolean;
    withHistory: () => HistoryEntryFetchOptions;
    withHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasHistory: () => boolean;
    withSamplesHistory: () => HistoryEntryFetchOptions;
    withSamplesHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasSamplesHistory: () => boolean;
    withUnknownHistory: () => HistoryEntryFetchOptions;
    withUnknownHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasUnknownHistory: () => boolean;
    withModifierUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasModifier: () => boolean;
    withAttachments: () => AttachmentFetchOptions;
    withAttachmentsUsing: (arg0: AttachmentFetchOptions) => AttachmentFetchOptions;
    hasAttachments: () => boolean;
    withLeader: () => PersonFetchOptions;
    withLeaderUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasLeader: () => boolean;
    withExperiments: () => ExperimentFetchOptions;
    withExperimentsUsing: (arg0: ExperimentFetchOptions) => ExperimentFetchOptions;
    hasExperiments: () => boolean;
    withExperimentsHistory: () => HistoryEntryFetchOptions;
    withExperimentsHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasExperimentsHistory: () => boolean;
    sortBy: () => SortOptions;
    sortBy: () => ProjectSortOptions;
    withModifier: () => PersonFetchOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
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
}

export interface ProjectSortOptions extends EntitySortOptions<Project> {
    getIdentifier: () => SortOrder;
    identifier: () => SortOrder;
    code: () => SortOrder;
    getPermId: () => SortOrder;
    registrationDate: () => SortOrder;
    getRegistrationDate: () => SortOrder;
    permId: () => SortOrder;
    modificationDate: () => SortOrder;
    getModificationDate: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
    identifier: SortOrder;
}

export interface GetProjectsOperation extends GetObjectsOperation<IProjectId, ProjectFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: ProjectFetchOptions;
}

export interface GetProjectsOperationResult extends GetObjectsOperationResult<IProjectId, Project> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IProjectId[];
    objects: Project[];
}

export interface IProjectId extends IObjectId {
}

export interface ProjectIdentifier extends ObjectIdentifier, IProjectId {
    getIdentifier: () => String;
}

export interface ProjectPermId extends ObjectPermId, IProjectId {
    getPermId: () => String;
}

export interface NoProjectSearchCriteria extends ISearchCriteria {
    isNegated: () => boolean;
}

export interface ProjectSearchCriteria extends AbstractObjectSearchCriteria<IProjectId> {
    withSpace: () => SpaceSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withOrOperator: () => ProjectSearchCriteria;
    withAndOperator: () => ProjectSearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface SearchProjectsOperation extends SearchObjectsOperation<ProjectSearchCriteria, ProjectFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: ProjectSearchCriteria;
    fetchOptions: ProjectFetchOptions;
}

export interface SearchProjectsOperationResult extends SearchObjectsOperationResult<Project> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<Project>;
}

export interface ProjectUpdate extends IUpdate, IObjectUpdate<IProjectId> {
    freeze: () => void;
    getAttachments: () => AttachmentListUpdateValue;
    getSpaceId: () => FieldUpdateValue<ISpaceId>;
    setSpaceId: (arg0: ISpaceId) => void;
    setProjectId: (arg0: IProjectId) => void;
    shouldBeFrozen: () => boolean;
    shouldBeFrozenForSamples: () => boolean;
    freezeForExperiments: () => void;
    shouldBeFrozenForExperiments: () => boolean;
    setAttachmentsActions: (arg0: ListUpdateAction<Object>[]) => void;
    freezeForSamples: () => void;
    setDescription: (arg0: String) => void;
    getProjectId: () => IProjectId;
    getObjectId: () => IProjectId;
    getObjectId: () => IObjectId;
    getDescription: () => FieldUpdateValue<String>;
    projectId: IProjectId;
    freeze: boolean;
    freezeForExperiments: boolean;
    freezeForSamples: boolean;
    spaceId: FieldUpdateValue<ISpaceId>;
    description: FieldUpdateValue<string>;
    attachments: AttachmentListUpdateValue;
}

export interface UpdateProjectsOperation extends UpdateObjectsOperation<ProjectUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: ProjectUpdate[];
}

export interface UpdateProjectsOperationResult extends UpdateObjectsOperationResult<ProjectPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: ProjectPermId[];
}

export interface PropertyAssignment extends Serializable, IPermIdHolder, IPropertyTypeHolder, IRegistrationDateHolder, IRegistratorHolder, ISemanticAnnotationsHolder {
    getSemanticAnnotations: () => SemanticAnnotation[];
    getPermId: () => IObjectId;
    getPermId: () => PropertyAssignmentPermId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => PropertyAssignmentFetchOptions;
    setFetchOptions: (arg0: PropertyAssignmentFetchOptions) => void;
    setPermId: (arg0: PropertyAssignmentPermId) => void;
    setSemanticAnnotations: (arg0: SemanticAnnotation[]) => void;
    setSection: (arg0: String) => void;
    setOrdinal: (arg0: Integer) => void;
    getEntityType: () => IEntityType;
    setEntityType: (arg0: IEntityType) => void;
    setMandatory: (arg0: Boolean) => void;
    isShowInEditView: () => Boolean;
    setShowInEditView: (arg0: Boolean) => void;
    isShowRawValueInForms: () => Boolean;
    setShowRawValueInForms: (arg0: Boolean) => void;
    isSemanticAnnotationsInherited: () => Boolean;
    setSemanticAnnotationsInherited: (arg0: Boolean) => void;
    setPlugin: (arg0: Plugin) => void;
    getPlugin: () => Plugin;
    getOrdinal: () => Integer;
    getSection: () => String;
    getPropertyType: () => PropertyType;
    isMandatory: () => Boolean;
    setPropertyType: (arg0: PropertyType) => void;
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
}

export interface PropertyType extends Serializable, ICodeHolder, IDescriptionHolder, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder, ISemanticAnnotationsHolder {
    getSemanticAnnotations: () => SemanticAnnotation[];
    getPermId: () => IObjectId;
    getPermId: () => PropertyTypePermId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => PropertyTypeFetchOptions;
    setFetchOptions: (arg0: PropertyTypeFetchOptions) => void;
    setPermId: (arg0: PropertyTypePermId) => void;
    setMetaData: (arg0: Map<String, String>) => void;
    setSemanticAnnotations: (arg0: SemanticAnnotation[]) => void;
    isManagedInternally: () => Boolean;
    setManagedInternally: (arg0: Boolean) => void;
    isInternalNameSpace: () => Boolean;
    setInternalNameSpace: (arg0: Boolean) => void;
    getDataType: () => DataType;
    setDataType: (arg0: DataType) => void;
    getVocabulary: () => Vocabulary;
    setVocabulary: (arg0: Vocabulary) => void;
    getMaterialType: () => MaterialType;
    setMaterialType: (arg0: MaterialType) => void;
    getSampleType: () => SampleType;
    setSampleType: (arg0: SampleType) => void;
    setTransformation: (arg0: String) => void;
    setDescription: (arg0: String) => void;
    getTransformation: () => String;
    getMetaData: () => Map<String, String>;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getLabel: () => String;
    setLabel: (arg0: String) => void;
    setSchema: (arg0: String) => void;
    getDescription: () => String;
    getSchema: () => String;
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
}

export interface CreatePropertyTypesOperation extends CreateObjectsOperation<PropertyTypeCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: PropertyTypeCreation[];
}

export interface CreatePropertyTypesOperationResult extends CreateObjectsOperationResult<PropertyTypePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: PropertyTypePermId[];
}

export interface PropertyAssignmentCreation extends ICreation {
    getInitialValueForExistingEntities: () => String;
    setInitialValueForExistingEntities: (arg0: String) => void;
    setPropertyTypeId: (arg0: IPropertyTypeId) => void;
    setPluginId: (arg0: IPluginId) => void;
    getPropertyTypeId: () => IPropertyTypeId;
    setSection: (arg0: String) => void;
    setOrdinal: (arg0: Integer) => void;
    setMandatory: (arg0: boolean) => void;
    isShowInEditView: () => boolean;
    setShowInEditView: (arg0: boolean) => void;
    isShowRawValueInForms: () => boolean;
    setShowRawValueInForms: (arg0: boolean) => void;
    getPluginId: () => IPluginId;
    getOrdinal: () => Integer;
    getSection: () => String;
    isMandatory: () => boolean;
    section: string;
    ordinal: number;
    propertyTypeId: IPropertyTypeId;
    pluginId: IPluginId;
    mandatory: boolean;
    initialValueForExistingEntities: string;
    showInEditView: boolean;
    showRawValueInForms: boolean;
}

export interface PropertyTypeCreation extends ICreation, IObjectCreation {
    setMetaData: (arg0: Map<String, String>) => void;
    isManagedInternally: () => boolean;
    setManagedInternally: (arg0: boolean) => void;
    isInternalNameSpace: () => boolean;
    setInternalNameSpace: (arg0: boolean) => void;
    getDataType: () => DataType;
    setDataType: (arg0: DataType) => void;
    setTransformation: (arg0: String) => void;
    getVocabularyId: () => IVocabularyId;
    setVocabularyId: (arg0: IVocabularyId) => void;
    getMaterialTypeId: () => IEntityTypeId;
    setMaterialTypeId: (arg0: IEntityTypeId) => void;
    getSampleTypeId: () => IEntityTypeId;
    setSampleTypeId: (arg0: IEntityTypeId) => void;
    setDescription: (arg0: String) => void;
    getTransformation: () => String;
    getMetaData: () => Map<String, String>;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getLabel: () => String;
    setLabel: (arg0: String) => void;
    setSchema: (arg0: String) => void;
    getDescription: () => String;
    getSchema: () => String;
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
}

export interface DeletePropertyTypesOperation extends DeleteObjectsOperation<IPropertyTypeId, PropertyTypeDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: PropertyTypeDeletionOptions;
}

export interface DeletePropertyTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface PropertyTypeDeletionOptions extends AbstractObjectDeletionOptions<PropertyTypeDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface PropertyAssignmentFetchOptions extends FetchOptions<PropertyAssignment>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => PropertyAssignmentSortOptions;
    getSortBy: () => SortOptions;
    withSemanticAnnotations: () => SemanticAnnotationFetchOptions;
    withSemanticAnnotationsUsing: (arg0: SemanticAnnotationFetchOptions) => SemanticAnnotationFetchOptions;
    hasSemanticAnnotations: () => boolean;
    withEntityType: () => EntityTypeFetchOptions;
    withEntityTypeUsing: (arg0: EntityTypeFetchOptions) => EntityTypeFetchOptions;
    hasEntityType: () => boolean;
    withPropertyType: () => PropertyTypeFetchOptions;
    withPropertyTypeUsing: (arg0: PropertyTypeFetchOptions) => PropertyTypeFetchOptions;
    hasPropertyType: () => boolean;
    withPluginUsing: (arg0: PluginFetchOptions) => PluginFetchOptions;
    hasPlugin: () => boolean;
    withPlugin: () => PluginFetchOptions;
    sortBy: () => SortOptions;
    sortBy: () => PropertyAssignmentSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    entityType: EntityTypeFetchOptions;
    propertyType: PropertyTypeFetchOptions;
    semanticAnnotations: SemanticAnnotationFetchOptions;
    registrator: PersonFetchOptions;
    sort: PropertyAssignmentSortOptions;
    plugin: PluginFetchOptions;
    sortBy: PropertyAssignmentSortOptions;
}

export interface PropertyAssignmentSortOptions extends SortOptions<PropertyAssignment> {
    code: () => SortOrder;
    ordinal: () => SortOrder;
    label: () => SortOrder;
    getOrdinal: () => SortOrder;
    getCode: () => SortOrder;
    getLabel: () => SortOrder;
    getSortings: () => Sorting[];
    ordinal: SortOrder;
    code: SortOrder;
    label: SortOrder;
}

export interface PropertyFetchOptions extends EmptyFetchOptions {
    getSortBy: () => SortOptions<Void>;
    sortBy: () => SortOptions<Void>;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
}

export interface PropertyTypeFetchOptions extends FetchOptions<PropertyType>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => SortOptions;
    getSortBy: () => PropertyTypeSortOptions;
    withSemanticAnnotations: () => SemanticAnnotationFetchOptions;
    withSemanticAnnotationsUsing: (arg0: SemanticAnnotationFetchOptions) => SemanticAnnotationFetchOptions;
    hasSemanticAnnotations: () => boolean;
    withVocabulary: () => VocabularyFetchOptions;
    withVocabularyUsing: (arg0: VocabularyFetchOptions) => VocabularyFetchOptions;
    hasVocabulary: () => boolean;
    withMaterialType: () => MaterialTypeFetchOptions;
    withMaterialTypeUsing: (arg0: MaterialTypeFetchOptions) => MaterialTypeFetchOptions;
    hasMaterialType: () => boolean;
    withSampleType: () => SampleTypeFetchOptions;
    withSampleTypeUsing: (arg0: SampleTypeFetchOptions) => SampleTypeFetchOptions;
    hasSampleType: () => boolean;
    sortBy: () => SortOptions;
    sortBy: () => PropertyTypeSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    vocabulary: VocabularyFetchOptions;
    materialType: MaterialTypeFetchOptions;
    sampleType: SampleTypeFetchOptions;
    semanticAnnotations: SemanticAnnotationFetchOptions;
    registrator: PersonFetchOptions;
    sort: PropertyTypeSortOptions;
    sortBy: PropertyTypeSortOptions;
}

export interface PropertyTypeSortOptions extends SortOptions<PropertyType> {
    code: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
    code: SortOrder;
}

export interface GetPropertyTypesOperation extends GetObjectsOperation<IPropertyTypeId, PropertyTypeFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: PropertyTypeFetchOptions;
}

export interface GetPropertyTypesOperationResult extends GetObjectsOperationResult<IPropertyTypeId, PropertyType> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IPropertyTypeId[];
    objects: PropertyType[];
}

export interface IPropertyAssignmentId extends IObjectId {
}

export interface IPropertyTypeId extends IObjectId {
}

export interface PropertyAssignmentPermId extends IPropertyAssignmentId {
    getEntityTypeId: () => IEntityTypeId;
    getPropertyTypeId: () => IPropertyTypeId;
    entityTypeId: IEntityTypeId;
    propertyTypeId: IPropertyTypeId;
}

export interface PropertyTypePermId extends ObjectPermId, IPropertyTypeId {
    getPermId: () => String;
}

export interface PropertyAssignmentSearchCriteria extends AbstractObjectSearchCriteria<IPropertyAssignmentId> {
    withSemanticAnnotations: () => SemanticAnnotationSearchCriteria;
    withEntityType: () => EntityTypeSearchCriteria;
    withPropertyType: () => PropertyTypeSearchCriteria;
    withOrOperator: () => PropertyAssignmentSearchCriteria;
    withAndOperator: () => PropertyAssignmentSearchCriteria;
    withIds: () => IdsSearchCriteria<IPropertyAssignmentId>;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface PropertyTypeSearchCriteria extends AbstractObjectSearchCriteria<IPropertyTypeId> {
    withSemanticAnnotations: () => SemanticAnnotationSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withOrOperator: () => PropertyTypeSearchCriteria;
    withAndOperator: () => PropertyTypeSearchCriteria;
    withIds: () => IdsSearchCriteria<IPropertyTypeId>;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface SearchPropertyAssignmentsOperation extends SearchObjectsOperation<PropertyAssignmentSearchCriteria, PropertyAssignmentFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: PropertyAssignmentSearchCriteria;
    fetchOptions: PropertyAssignmentFetchOptions;
}

export interface SearchPropertyAssignmentsOperationResult extends SearchObjectsOperationResult<PropertyAssignment> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<PropertyAssignment>;
}

export interface SearchPropertyTypesOperation extends SearchObjectsOperation<PropertyTypeSearchCriteria, PropertyTypeFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: PropertyTypeSearchCriteria;
    fetchOptions: PropertyTypeFetchOptions;
}

export interface SearchPropertyTypesOperationResult extends SearchObjectsOperationResult<PropertyType> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<PropertyType>;
}

export interface PropertyTypeUpdate extends IUpdate, IObjectUpdate<IPropertyTypeId> {
    setTransformation: (arg0: String) => void;
    setMetaDataActions: (arg0: ListUpdateAction<Object>[]) => void;
    getDataTypeToBeConverted: () => DataType;
    convertToDataType: (arg0: DataType) => void;
    setDescription: (arg0: String) => void;
    getTransformation: () => FieldUpdateValue<String>;
    getMetaData: () => ListUpdateMapValues;
    getTypeId: () => IPropertyTypeId;
    setTypeId: (arg0: IPropertyTypeId) => void;
    getObjectId: () => IPropertyTypeId;
    getObjectId: () => IObjectId;
    getLabel: () => FieldUpdateValue<String>;
    setLabel: (arg0: String) => void;
    setSchema: (arg0: String) => void;
    getDescription: () => FieldUpdateValue<String>;
    getSchema: () => FieldUpdateValue<String>;
    typeId: IPropertyTypeId;
    dataType: DataType;
    label: FieldUpdateValue<string>;
    description: FieldUpdateValue<string>;
    schema: FieldUpdateValue<string>;
    transformation: FieldUpdateValue<string>;
    metaData: ListUpdateMapValues;
}

export interface UpdatePropertyTypesOperation extends UpdateObjectsOperation<PropertyTypeUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: PropertyTypeUpdate[];
}

export interface UpdatePropertyTypesOperationResult extends UpdateObjectsOperationResult<PropertyTypePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: PropertyTypePermId[];
}

export interface Query extends Serializable, IDescriptionHolder, IModificationDateHolder, IRegistrationDateHolder, IRegistratorHolder {
    getName: () => String;
    isPublic: () => boolean;
    setName: (arg0: String) => void;
    getPermId: () => IQueryId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => QueryFetchOptions;
    setFetchOptions: (arg0: QueryFetchOptions) => void;
    getDatabaseId: () => IQueryDatabaseId;
    setPermId: (arg0: IQueryId) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    setDatabaseId: (arg0: IQueryDatabaseId) => void;
    getQueryType: () => QueryType;
    setQueryType: (arg0: QueryType) => void;
    getEntityTypeCodePattern: () => String;
    setEntityTypeCodePattern: (arg0: String) => void;
    getSql: () => String;
    setSql: (arg0: String) => void;
    getDatabaseLabel: () => String;
    setDatabaseLabel: (arg0: String) => void;
    setDescription: (arg0: String) => void;
    setPublic: (arg0: boolean) => void;
    getDescription: () => String;
    fetchOptions: QueryFetchOptions;
    permId: IQueryId;
    name: string;
    databaseId: IQueryDatabaseId;
    databaseLabel: string;
    queryType: QueryType;
    entityTypeCodePattern: string;
    sql: string;
    publicFlag: boolean;
}

export interface QueryDatabase extends Serializable, IPermIdHolder, ISpaceHolder {
    getName: () => String;
    setName: (arg0: String) => void;
    getSpace: () => Space;
    getPermId: () => IObjectId;
    getPermId: () => QueryDatabaseName;
    setSpace: (arg0: Space) => void;
    getFetchOptions: () => QueryDatabaseFetchOptions;
    setFetchOptions: (arg0: QueryDatabaseFetchOptions) => void;
    setPermId: (arg0: QueryDatabaseName) => void;
    getCreatorMinimalRole: () => Role;
    setCreatorMinimalRole: (arg0: Role) => void;
    getCreatorMinimalRoleLevel: () => RoleLevel;
    setCreatorMinimalRoleLevel: (arg0: RoleLevel) => void;
    getLabel: () => String;
    setLabel: (arg0: String) => void;
    fetchOptions: QueryDatabaseFetchOptions;
    permId: QueryDatabaseName;
    name: string;
    label: string;
    creatorMinimalRole: Role;
    creatorMinimalRoleLevel: RoleLevel;
}

export interface CreateQueriesOperation extends CreateObjectsOperation<QueryCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: QueryCreation[];
}

export interface CreateQueriesOperationResult extends CreateObjectsOperationResult<QueryTechId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: QueryTechId[];
}

export interface QueryCreation extends ICreation, IObjectCreation {
    getName: () => String;
    isPublic: () => boolean;
    setName: (arg0: String) => void;
    getDatabaseId: () => IQueryDatabaseId;
    setDatabaseId: (arg0: IQueryDatabaseId) => void;
    getQueryType: () => QueryType;
    setQueryType: (arg0: QueryType) => void;
    getEntityTypeCodePattern: () => String;
    setEntityTypeCodePattern: (arg0: String) => void;
    getSql: () => String;
    setSql: (arg0: String) => void;
    setDescription: (arg0: String) => void;
    setPublic: (arg0: boolean) => void;
    getDescription: () => String;
    name: string;
    databaseId: IQueryDatabaseId;
    queryType: QueryType;
    entityTypeCodePattern: string;
    description: string;
    sql: string;
    publicFlag: boolean;
}

export interface DeleteQueriesOperation extends DeleteObjectsOperation<IQueryId, QueryDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: QueryDeletionOptions;
}

export interface DeleteQueriesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface QueryDeletionOptions extends AbstractObjectDeletionOptions<QueryDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface ExecuteQueryOperation extends IOperation {
    getMessage: () => String;
    getQueryId: () => IQueryId;
    getOptions: () => QueryExecutionOptions;
    queryId: IQueryId;
    options: QueryExecutionOptions;
}

export interface ExecuteQueryOperationResult extends IOperationResult {
    getMessage: () => String;
    getResult: () => TableModel;
    result: TableModel;
}

export interface ExecuteSqlOperation extends IOperation {
    getMessage: () => String;
    getSql: () => String;
    getOptions: () => SqlExecutionOptions;
    sql: string;
    options: SqlExecutionOptions;
}

export interface ExecuteSqlOperationResult extends IOperationResult {
    getMessage: () => String;
    getResult: () => TableModel;
    result: TableModel;
}

export interface QueryExecutionOptions extends Serializable {
    getParameters: () => Map<String, String>;
    withParameter: (arg0: String, arg1: String) => QueryExecutionOptions;
    withParameters: (arg0: Map<String, String>) => QueryExecutionOptions;
    parameters: { [index: string]: string };
}

export interface SqlExecutionOptions extends Serializable {
    getParameters: () => Map<String, String>;
    withDatabaseId: (arg0: IQueryDatabaseId) => SqlExecutionOptions;
    withParameter: (arg0: String, arg1: String) => SqlExecutionOptions;
    getDatabaseId: () => IQueryDatabaseId;
    withParameters: (arg0: Map<String, String>) => SqlExecutionOptions;
    databaseId: IQueryDatabaseId;
    parameters: { [index: string]: string };
}

export interface QueryDatabaseFetchOptions extends FetchOptions<QueryDatabase>, Serializable {
    getSortBy: () => QueryDatabaseSortOptions;
    getSortBy: () => SortOptions;
    withSpace: () => SpaceFetchOptions;
    withSpaceUsing: (arg0: SpaceFetchOptions) => SpaceFetchOptions;
    hasSpace: () => boolean;
    sortBy: () => SortOptions;
    sortBy: () => QueryDatabaseSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    space: SpaceFetchOptions;
    sort: QueryDatabaseSortOptions;
    sortBy: QueryDatabaseSortOptions;
}

export interface QueryDatabaseSortOptions extends SortOptions<QueryDatabase> {
    getName: () => SortOrder;
    name: () => SortOrder;
    getSortings: () => Sorting[];
    name: SortOrder;
}

export interface QueryFetchOptions extends FetchOptions<Query>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => QuerySortOptions;
    getSortBy: () => SortOptions;
    sortBy: () => SortOptions;
    sortBy: () => QuerySortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    registrator: PersonFetchOptions;
    sort: QuerySortOptions;
    sortBy: QuerySortOptions;
}

export interface QuerySortOptions extends SortOptions<Query> {
    getSortings: () => Sorting[];
}

export interface GetQueriesOperation extends GetObjectsOperation<IQueryId, QueryFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: QueryFetchOptions;
}

export interface GetQueriesOperationResult extends GetObjectsOperationResult<IQueryId, Query> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IQueryId[];
    objects: Query[];
}

export interface GetQueryDatabasesOperation extends GetObjectsOperation<IQueryDatabaseId, QueryDatabaseFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: QueryDatabaseFetchOptions;
}

export interface GetQueryDatabasesOperationResult extends GetObjectsOperationResult<IQueryDatabaseId, QueryDatabase> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IQueryDatabaseId[];
    objects: QueryDatabase[];
}

export interface IQueryDatabaseId extends IObjectId {
}

export interface IQueryId extends IObjectId {
}

export interface QueryDatabaseName extends IQueryDatabaseId, Serializable {
    getName: () => String;
    name: string;
}

export interface QueryName extends IQueryId, Serializable {
    getName: () => String;
    name: string;
}

export interface QueryTechId extends ObjectTechId, IQueryId {
    getTechId: () => Long;
}

export interface DatabaseIdSearchCriteria extends IdSearchCriteria<IQueryDatabaseId> {
    getId: () => any;
    thatEquals: (arg0: any) => void;
    isNegated: () => boolean;
    id: IQueryDatabaseId;
}

export interface EntityTypeCodePatternSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface QueryDatabaseSearchCriteria extends AbstractObjectSearchCriteria<IQueryDatabaseId> {
    withOrOperator: () => QueryDatabaseSearchCriteria;
    withAndOperator: () => QueryDatabaseSearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface QuerySearchCriteria extends AbstractObjectSearchCriteria<IQueryId> {
    withOrOperator: () => QuerySearchCriteria;
    withAndOperator: () => QuerySearchCriteria;
    withQueryType: () => QueryTypeSearchCriteria;
    withDatabaseId: () => DatabaseIdSearchCriteria;
    withEntityTypeCodePattern: () => EntityTypeCodePatternSearchCriteria;
    withSql: () => SqlSearchCriteria;
    withName: () => NameSearchCriteria;
    withDescription: () => DescriptionSearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface QueryTypeSearchCriteria extends EnumFieldSearchCriteria<QueryType> {
    thatEquals: (arg0: any) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
    fieldValue: QueryType;
}

export interface SearchQueriesOperation extends SearchObjectsOperation<QuerySearchCriteria, QueryFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: QuerySearchCriteria;
    fetchOptions: QueryFetchOptions;
}

export interface SearchQueriesOperationResult extends SearchObjectsOperationResult<Query> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<Query>;
}

export interface SearchQueryDatabasesOperation extends SearchObjectsOperation<QueryDatabaseSearchCriteria, QueryDatabaseFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: QueryDatabaseSearchCriteria;
    fetchOptions: QueryDatabaseFetchOptions;
}

export interface SearchQueryDatabasesOperationResult extends SearchObjectsOperationResult<QueryDatabase> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<QueryDatabase>;
}

export interface SqlSearchCriteria extends StringFieldSearchCriteria {
    thatStartsWith: (arg0: String) => void;
    thatEndsWith: (arg0: String) => void;
    thatContains: (arg0: String) => void;
    thatIsLessThan: (arg0: String) => void;
    thatIsLessThanOrEqualTo: (arg0: String) => void;
    thatIsGreaterThan: (arg0: String) => void;
    thatIsGreaterThanOrEqualTo: (arg0: String) => void;
    withWildcards: () => StringFieldSearchCriteria;
    withoutWildcards: () => StringFieldSearchCriteria;
    isUseWildcards: () => boolean;
    thatEquals: (arg0: String) => void;
    getFieldType: () => SearchFieldType;
    getFieldName: () => String;
    getFieldValue: () => any;
    setFieldValue: (arg0: any) => void;
    isNegated: () => boolean;
}

export interface QueryUpdate extends IUpdate, IObjectUpdate<IQueryId> {
    getName: () => FieldUpdateValue<String>;
    isPublic: () => FieldUpdateValue<Boolean>;
    setName: (arg0: String) => void;
    getDatabaseId: () => FieldUpdateValue<IQueryDatabaseId>;
    setDatabaseId: (arg0: IQueryDatabaseId) => void;
    getQueryType: () => FieldUpdateValue<QueryType>;
    setQueryType: (arg0: QueryType) => void;
    getEntityTypeCodePattern: () => FieldUpdateValue<String>;
    setEntityTypeCodePattern: (arg0: String) => void;
    getSql: () => FieldUpdateValue<String>;
    setSql: (arg0: String) => void;
    getQueryId: () => IQueryId;
    setQueryId: (arg0: IQueryId) => void;
    setDescription: (arg0: String) => void;
    setPublic: (arg0: boolean) => void;
    getObjectId: () => IQueryId;
    getObjectId: () => IObjectId;
    getDescription: () => FieldUpdateValue<String>;
    queryId: IQueryId;
    name: FieldUpdateValue<string>;
    description: FieldUpdateValue<string>;
    databaseId: FieldUpdateValue<IQueryDatabaseId>;
    queryType: FieldUpdateValue<QueryType>;
    entityTypeCodePattern: FieldUpdateValue<string>;
    sql: FieldUpdateValue<string>;
    publicFlag: FieldUpdateValue<boolean>;
}

export interface UpdateQueriesOperation extends UpdateObjectsOperation<QueryUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: QueryUpdate[];
}

export interface UpdateQueriesOperationResult extends UpdateObjectsOperationResult<QueryTechId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: QueryTechId[];
}

export interface Sample extends Serializable, IAttachmentsHolder, ICodeHolder, IDataSetsHolder, IEntityTypeHolder, IExperimentHolder, IIdentifierHolder, IMaterialPropertiesHolder, IModificationDateHolder, IModifierHolder, IParentChildrenHolder<Sample>, IPermIdHolder, IProjectHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ISpaceHolder, ITagsHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    getType: () => IEntityType;
    getType: () => SampleType;
    isFrozen: () => boolean;
    getSpace: () => Space;
    getBooleanProperty: (arg0: String) => Boolean;
    getChildren: () => Sample[];
    getDataSets: () => DataSet[];
    getPermId: () => IObjectId;
    getPermId: () => SamplePermId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    setSpace: (arg0: Space) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => SampleFetchOptions;
    setFetchOptions: (arg0: SampleFetchOptions) => void;
    setPermId: (arg0: SamplePermId) => void;
    setFrozen: (arg0: boolean) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    getMaterialProperties: () => Map<String, Material>;
    getParentsRelationships: () => Map<SamplePermId, Relationship>;
    getChildrenRelationships: () => Map<SamplePermId, Relationship>;
    isFrozenForComponents: () => boolean;
    setFrozenForComponents: (arg0: boolean) => void;
    isFrozenForChildren: () => boolean;
    setFrozenForChildren: (arg0: boolean) => void;
    isFrozenForParents: () => boolean;
    setFrozenForParents: (arg0: boolean) => void;
    isFrozenForDataSets: () => boolean;
    setFrozenForDataSets: (arg0: boolean) => void;
    getExperiment: () => Experiment;
    setExperiment: (arg0: Experiment) => void;
    setMaterialProperties: (arg0: Map<String, Material>) => void;
    getSampleProperties: () => Map<String, Sample>;
    setSampleProperties: (arg0: Map<String, Sample>) => void;
    setParents: (arg0: Sample[]) => void;
    setParentsRelationships: (arg0: Map<SamplePermId, Relationship>) => void;
    setChildrenRelationships: (arg0: Map<SamplePermId, Relationship>) => void;
    setContainer: (arg0: Sample) => void;
    setDataSets: (arg0: DataSet[]) => void;
    setHistory: (arg0: HistoryEntry[]) => void;
    getPropertiesHistory: () => HistoryEntry[];
    setPropertiesHistory: (arg0: HistoryEntry[]) => void;
    getSpaceHistory: () => HistoryEntry[];
    setSpaceHistory: (arg0: HistoryEntry[]) => void;
    getProjectHistory: () => HistoryEntry[];
    setProjectHistory: (arg0: HistoryEntry[]) => void;
    getExperimentHistory: () => HistoryEntry[];
    setExperimentHistory: (arg0: HistoryEntry[]) => void;
    getParentsHistory: () => HistoryEntry[];
    setParentsHistory: (arg0: HistoryEntry[]) => void;
    getChildrenHistory: () => HistoryEntry[];
    setChildrenHistory: (arg0: HistoryEntry[]) => void;
    getContainerHistory: () => HistoryEntry[];
    setContainerHistory: (arg0: HistoryEntry[]) => void;
    getComponentsHistory: () => HistoryEntry[];
    setComponentsHistory: (arg0: HistoryEntry[]) => void;
    getDataSetsHistory: () => HistoryEntry[];
    setDataSetsHistory: (arg0: HistoryEntry[]) => void;
    getUnknownHistory: () => HistoryEntry[];
    setUnknownHistory: (arg0: HistoryEntry[]) => void;
    getModifier: () => Person;
    setModifier: (arg0: Person) => void;
    getAttachments: () => Attachment[];
    setAttachments: (arg0: Attachment[]) => void;
    getMaterialProperty: (arg0: String) => Material;
    setMaterialProperty: (arg0: String, arg1: Material) => void;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    getParentRelationship: (arg0: ISampleId) => Relationship;
    getChildRelationship: (arg0: ISampleId) => Relationship;
    setMetaData: (arg0: Map<String, String>) => void;
    getProject: () => Project;
    setProject: (arg0: Project) => void;
    getParents: () => Sample[];
    getComponents: () => Sample[];
    getContainer: () => Sample;
    getMetaData: () => Map<String, String>;
    getHistory: () => HistoryEntry[];
    getCode: () => String;
    setCode: (arg0: String) => void;
    setChildren: (arg0: Sample[]) => void;
    setComponents: (arg0: Sample[]) => void;
    getTags: () => Set<Tag>;
    setTags: (arg0: Set<Tag>) => void;
    setIdentifier: (arg0: SampleIdentifier) => void;
    setType: (arg0: SampleType) => void;
    getIdentifier: () => ObjectIdentifier;
    getIdentifier: () => SampleIdentifier;
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
}

export interface SampleType extends Serializable, ICodeHolder, IDescriptionHolder, IEntityType, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder, ISemanticAnnotationsHolder, IValidationPluginHolder {
    getSemanticAnnotations: () => SemanticAnnotation[];
    getPermId: () => IObjectId;
    getPermId: () => EntityTypePermId;
    getFetchOptions: () => SampleTypeFetchOptions;
    setFetchOptions: (arg0: SampleTypeFetchOptions) => void;
    setPermId: (arg0: EntityTypePermId) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    getPropertyAssignments: () => PropertyAssignment[];
    getValidationPlugin: () => Plugin;
    setMetaData: (arg0: Map<String, String>) => void;
    isListable: () => Boolean;
    setListable: (arg0: Boolean) => void;
    isSubcodeUnique: () => Boolean;
    setSubcodeUnique: (arg0: Boolean) => void;
    isAutoGeneratedCode: () => Boolean;
    setAutoGeneratedCode: (arg0: Boolean) => void;
    isShowContainer: () => Boolean;
    setShowContainer: (arg0: Boolean) => void;
    isShowParents: () => Boolean;
    setShowParents: (arg0: Boolean) => void;
    isShowParentMetadata: () => Boolean;
    setShowParentMetadata: (arg0: Boolean) => void;
    getGeneratedCodePrefix: () => String;
    setGeneratedCodePrefix: (arg0: String) => void;
    setPropertyAssignments: (arg0: PropertyAssignment[]) => void;
    setSemanticAnnotations: (arg0: SemanticAnnotation[]) => void;
    setValidationPlugin: (arg0: Plugin) => void;
    setDescription: (arg0: String) => void;
    getMetaData: () => Map<String, String>;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
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
}

export interface CreateSampleTypesOperation extends CreateObjectsOperation<SampleTypeCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: SampleTypeCreation[];
}

export interface CreateSampleTypesOperationResult extends CreateObjectsOperationResult<EntityTypePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: EntityTypePermId[];
}

export interface CreateSamplesOperation extends CreateObjectsOperation<SampleCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: SampleCreation[];
}

export interface CreateSamplesOperationResult extends CreateObjectsOperationResult<SamplePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: SamplePermId[];
}

export interface SampleCreation extends ICreation, ICreationIdHolder, IPropertiesHolder, IObjectCreation {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    getBooleanProperty: (arg0: String) => Boolean;
    getExperimentId: () => IExperimentId;
    setExperimentId: (arg0: IExperimentId) => void;
    getParentIds: () => ISampleId[];
    setParentIds: (arg0: ISampleId[]) => void;
    getAttachments: () => AttachmentCreation[];
    setAttachments: (arg0: AttachmentCreation[]) => void;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    setMetaData: (arg0: Map<String, String>) => void;
    isAutoGeneratedCode: () => boolean;
    setAutoGeneratedCode: (arg0: boolean) => void;
    getSpaceId: () => ISpaceId;
    setSpaceId: (arg0: ISpaceId) => void;
    setProjectId: (arg0: IProjectId) => void;
    getCreationId: () => CreationId;
    setCreationId: (arg0: CreationId) => void;
    setContainerId: (arg0: ISampleId) => void;
    getComponentIds: () => ISampleId[];
    getRelationships: () => Map<ISampleId, Relationship>;
    setRelationships: (arg0: Map<ISampleId, Relationship>) => void;
    getChildIds: () => ISampleId[];
    getContainerId: () => ISampleId;
    getTagIds: () => ITagId[];
    setComponentIds: (arg0: ISampleId[]) => void;
    setChildIds: (arg0: ISampleId[]) => void;
    setTagIds: (arg0: ITagId[]) => void;
    relationship: (arg0: ISampleId) => Relationship;
    getProjectId: () => IProjectId;
    getMetaData: () => Map<String, String>;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getTypeId: () => IEntityTypeId;
    setTypeId: (arg0: IEntityTypeId) => void;
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
}

export interface SampleTypeCreation extends IEntityTypeCreation {
    getPropertyAssignments: () => PropertyAssignmentCreation[];
    setMetaData: (arg0: Map<String, String>) => void;
    isListable: () => boolean;
    setListable: (arg0: boolean) => void;
    isSubcodeUnique: () => boolean;
    setSubcodeUnique: (arg0: boolean) => void;
    isAutoGeneratedCode: () => boolean;
    setAutoGeneratedCode: (arg0: boolean) => void;
    isShowContainer: () => boolean;
    setShowContainer: (arg0: boolean) => void;
    isShowParents: () => boolean;
    setShowParents: (arg0: boolean) => void;
    isShowParentMetadata: () => boolean;
    setShowParentMetadata: (arg0: boolean) => void;
    getGeneratedCodePrefix: () => String;
    setGeneratedCodePrefix: (arg0: String) => void;
    setPropertyAssignments: (arg0: PropertyAssignmentCreation[]) => void;
    getValidationPluginId: () => IPluginId;
    setValidationPluginId: (arg0: IPluginId) => void;
    setDescription: (arg0: String) => void;
    getMetaData: () => Map<String, String>;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    autoGeneratedCode: boolean;
    generatedCodePrefix: string;
    subcodeUnique: boolean;
    listable: boolean;
    showContainer: boolean;
    showParents: boolean;
    showParentMetadata: boolean;
    metaData: { [index: string]: string };
}

export interface DeleteSampleTypesOperation extends DeleteObjectsOperation<IEntityTypeId, SampleTypeDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: SampleTypeDeletionOptions;
}

export interface DeleteSampleTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface DeleteSamplesOperation extends DeleteObjectsOperation<ISampleId, SampleDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: SampleDeletionOptions;
}

export interface DeleteSamplesOperationResult extends DeleteObjectsWithTrashOperationResult {
    getMessage: () => String;
    getDeletionId: () => IDeletionId;
}

export interface SampleDeletionOptions extends AbstractObjectDeletionOptions<SampleDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface SampleTypeDeletionOptions extends AbstractObjectDeletionOptions<SampleTypeDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface SampleFetchOptions extends FetchOptions<Sample>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => SampleSortOptions;
    getSortBy: () => SortOptions;
    withSpace: () => SpaceFetchOptions;
    withSpaceUsing: (arg0: SpaceFetchOptions) => SpaceFetchOptions;
    hasSpace: () => boolean;
    withExperiment: () => ExperimentFetchOptions;
    withExperimentUsing: (arg0: ExperimentFetchOptions) => ExperimentFetchOptions;
    hasExperiment: () => boolean;
    withParents: () => SampleFetchOptions;
    withParentsUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    hasParents: () => boolean;
    withChildren: () => SampleFetchOptions;
    withChildrenUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    withContainer: () => SampleFetchOptions;
    withContainerUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    hasContainer: () => boolean;
    withComponents: () => SampleFetchOptions;
    withComponentsUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    hasComponents: () => boolean;
    withSpaceHistory: () => HistoryEntryFetchOptions;
    withSpaceHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasSpaceHistory: () => boolean;
    withExperimentHistory: () => HistoryEntryFetchOptions;
    withExperimentHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasExperimentHistory: () => boolean;
    withParentsHistory: () => HistoryEntryFetchOptions;
    withParentsHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasParentsHistory: () => boolean;
    withChildrenHistory: () => HistoryEntryFetchOptions;
    withChildrenHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasChildrenHistory: () => boolean;
    withContainerHistory: () => HistoryEntryFetchOptions;
    withContainerHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasContainerHistory: () => boolean;
    withComponentsHistory: () => HistoryEntryFetchOptions;
    withComponentsHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasComponentsHistory: () => boolean;
    withTypeUsing: (arg0: SampleTypeFetchOptions) => SampleTypeFetchOptions;
    hasType: () => boolean;
    withProject: () => ProjectFetchOptions;
    withProjectUsing: (arg0: ProjectFetchOptions) => ProjectFetchOptions;
    hasProject: () => boolean;
    withDataSets: () => DataSetFetchOptions;
    withDataSetsUsing: (arg0: DataSetFetchOptions) => DataSetFetchOptions;
    hasDataSets: () => boolean;
    withHistory: () => HistoryEntryFetchOptions;
    withHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasHistory: () => boolean;
    withPropertiesHistory: () => HistoryEntryFetchOptions;
    withPropertiesHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasPropertiesHistory: () => boolean;
    withProjectHistory: () => HistoryEntryFetchOptions;
    withProjectHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasProjectHistory: () => boolean;
    withDataSetsHistory: () => HistoryEntryFetchOptions;
    withDataSetsHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasDataSetsHistory: () => boolean;
    withUnknownHistory: () => HistoryEntryFetchOptions;
    withUnknownHistoryUsing: (arg0: HistoryEntryFetchOptions) => HistoryEntryFetchOptions;
    hasUnknownHistory: () => boolean;
    withPropertiesUsing: (arg0: PropertyFetchOptions) => PropertyFetchOptions;
    hasProperties: () => boolean;
    withMaterialProperties: () => MaterialFetchOptions;
    withMaterialPropertiesUsing: (arg0: MaterialFetchOptions) => MaterialFetchOptions;
    hasMaterialProperties: () => boolean;
    withSampleProperties: () => SampleFetchOptions;
    withSamplePropertiesUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    hasSampleProperties: () => boolean;
    withTags: () => TagFetchOptions;
    withTagsUsing: (arg0: TagFetchOptions) => TagFetchOptions;
    hasTags: () => boolean;
    withModifierUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasModifier: () => boolean;
    withAttachments: () => AttachmentFetchOptions;
    withAttachmentsUsing: (arg0: AttachmentFetchOptions) => AttachmentFetchOptions;
    hasAttachments: () => boolean;
    withProperties: () => PropertyFetchOptions;
    withType: () => SampleTypeFetchOptions;
    sortBy: () => SortOptions;
    sortBy: () => SampleSortOptions;
    withModifier: () => PersonFetchOptions;
    hasChildren: () => boolean;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
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
}

export interface SampleSortOptions extends EntityWithPropertiesSortOptions<Sample> {
    getIdentifier: () => SortOrder;
    identifier: () => SortOrder;
    type: () => SortOrder;
    getProperty: (arg0: String) => SortOrder;
    getType: () => SortOrder;
    property: (arg0: String) => SortOrder;
    fetchedFieldsScore: () => SortOrder;
    getFetchedFieldsScore: () => SortOrder;
    stringMatchPropertyScore: (arg0: String, arg1: String) => SortOrder;
    stringPrefixMatchPropertyScore: (arg0: String, arg1: String) => SortOrder;
    stringMatchAnyPropertyScore: (arg0: String) => SortOrder;
    stringPrefixMatchAnyPropertyScore: (arg0: String) => SortOrder;
    code: () => SortOrder;
    getPermId: () => SortOrder;
    registrationDate: () => SortOrder;
    getRegistrationDate: () => SortOrder;
    permId: () => SortOrder;
    modificationDate: () => SortOrder;
    getModificationDate: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
    identifier: SortOrder;
}

export interface SampleTypeFetchOptions extends FetchOptions<SampleType>, Serializable {
    getSortBy: () => SampleTypeSortOptions;
    getSortBy: () => SortOptions;
    withPropertyAssignments: () => PropertyAssignmentFetchOptions;
    withPropertyAssignmentsUsing: (arg0: PropertyAssignmentFetchOptions) => PropertyAssignmentFetchOptions;
    hasPropertyAssignments: () => boolean;
    withValidationPlugin: () => PluginFetchOptions;
    withValidationPluginUsing: (arg0: PluginFetchOptions) => PluginFetchOptions;
    hasValidationPlugin: () => boolean;
    withSemanticAnnotations: () => SemanticAnnotationFetchOptions;
    withSemanticAnnotationsUsing: (arg0: SemanticAnnotationFetchOptions) => SemanticAnnotationFetchOptions;
    hasSemanticAnnotations: () => boolean;
    sortBy: () => SampleTypeSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    propertyAssignments: PropertyAssignmentFetchOptions;
    semanticAnnotations: SemanticAnnotationFetchOptions;
    validationPlugin: PluginFetchOptions;
    sort: SampleTypeSortOptions;
    sortBy: SampleTypeSortOptions;
}

export interface SampleTypeSortOptions extends SortOptions<SampleType> {
    getSortings: () => Sorting[];
}

export interface GetSampleTypesOperation extends GetObjectsOperation<IEntityTypeId, SampleTypeFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: SampleTypeFetchOptions;
}

export interface GetSampleTypesOperationResult extends GetObjectsOperationResult<IEntityTypeId, SampleType> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IEntityTypeId[];
    objects: SampleType[];
}

export interface GetSamplesOperation extends GetObjectsOperation<ISampleId, SampleFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: SampleFetchOptions;
}

export interface GetSamplesOperationResult extends GetObjectsOperationResult<ISampleId, Sample> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: ISampleId[];
    objects: Sample[];
}

export interface ISampleId extends IObjectId {
}

export interface SampleIdDeserializer extends KeyDeserializer {
    deserializeKey: (arg0: String, arg1: DeserializationContext) => ISampleId;
    deserializeKey: (arg0: String, arg1: DeserializationContext) => Object;
}

export interface SampleIdentifier extends ObjectIdentifier, ISampleId {
    getIdentifier: () => String;
}

export interface SamplePermId extends ObjectPermId, ISampleId {
    getPermId: () => String;
}

export interface AbstractSampleSearchCriteria<T> extends AbstractEntitySearchCriteria<ISampleId> {
    withSpace: () => SpaceSearchCriteria;
    withExperiment: () => ExperimentSearchCriteria;
    withProject: () => ProjectSearchCriteria;
    withIdentifier: () => IdentifierSearchCriteria;
    withOrOperator: () => any;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => any;
    withoutSpace: () => any;
    withoutProject: () => any;
    withoutExperiment: () => any;
    withoutContainer: () => any;
    getRelation: () => SampleSearchRelation;
    withType: () => SampleTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    relation: SampleSearchRelation;
}

export interface ListableSampleTypeSearchCriteria extends AbstractSearchCriteria {
    thatEquals: (arg0: boolean) => void;
    isListable: () => boolean;
    setListable: (arg0: boolean) => void;
    isNegated: () => boolean;
    listable: boolean;
}

export interface NoSampleContainerSearchCriteria extends NoSampleSearchCriteria {
    isNegated: () => boolean;
}

export interface NoSampleSearchCriteria extends ISearchCriteria {
    isNegated: () => boolean;
}

export interface SampleChildrenSearchCriteria extends AbstractSampleSearchCriteria<SampleChildrenSearchCriteria> {
    withSpace: () => SpaceSearchCriteria;
    withExperiment: () => ExperimentSearchCriteria;
    withProject: () => ProjectSearchCriteria;
    withIdentifier: () => IdentifierSearchCriteria;
    withOrOperator: () => any;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => any;
    withoutSpace: () => any;
    withoutProject: () => any;
    withoutExperiment: () => any;
    withoutContainer: () => any;
    getRelation: () => SampleSearchRelation;
    withType: () => SampleTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
}

export interface SampleContainerSearchCriteria extends AbstractSampleSearchCriteria<SampleContainerSearchCriteria> {
    withSpace: () => SpaceSearchCriteria;
    withExperiment: () => ExperimentSearchCriteria;
    withProject: () => ProjectSearchCriteria;
    withIdentifier: () => IdentifierSearchCriteria;
    withOrOperator: () => any;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => any;
    withoutSpace: () => any;
    withoutProject: () => any;
    withoutExperiment: () => any;
    withoutContainer: () => any;
    getRelation: () => SampleSearchRelation;
    withType: () => SampleTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
}

export interface SampleParentsSearchCriteria extends AbstractSampleSearchCriteria<SampleParentsSearchCriteria> {
    withSpace: () => SpaceSearchCriteria;
    withExperiment: () => ExperimentSearchCriteria;
    withProject: () => ProjectSearchCriteria;
    withIdentifier: () => IdentifierSearchCriteria;
    withOrOperator: () => any;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => any;
    withoutSpace: () => any;
    withoutProject: () => any;
    withoutExperiment: () => any;
    withoutContainer: () => any;
    getRelation: () => SampleSearchRelation;
    withType: () => SampleTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
}

export interface SampleSearchCriteria extends AbstractSampleSearchCriteria<SampleSearchCriteria> {
    negate: () => AbstractEntitySearchCriteria;
    negate: () => SampleSearchCriteria;
    withParents: () => SampleParentsSearchCriteria;
    withChildren: () => SampleChildrenSearchCriteria;
    withContainer: () => SampleContainerSearchCriteria;
    withSubcriteria: () => SampleSearchCriteria;
    withTextAttribute: () => TextAttributeSearchCriteria;
    withSpace: () => SpaceSearchCriteria;
    withExperiment: () => ExperimentSearchCriteria;
    withProject: () => ProjectSearchCriteria;
    withIdentifier: () => IdentifierSearchCriteria;
    withOrOperator: () => any;
    withOrOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => AbstractEntitySearchCriteria;
    withAndOperator: () => any;
    withoutSpace: () => any;
    withoutProject: () => any;
    withoutExperiment: () => any;
    withoutContainer: () => any;
    getRelation: () => SampleSearchRelation;
    withType: () => SampleTypeSearchCriteria;
    withRegistrator: () => RegistratorSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withRegistrationDate: () => RegistrationDateSearchCriteria;
    withModificationDate: () => ModificationDateSearchCriteria;
    withTag: () => TagSearchCriteria;
    withNumberProperty: (arg0: String) => NumberPropertySearchCriteria;
    withStringProperty: (arg0: String) => StrictlyStringPropertySearchCriteria;
    isNegated: () => boolean;
    withDateProperty: (arg0: String) => DatePropertySearchCriteria;
    withBooleanProperty: (arg0: String) => BooleanPropertySearchCriteria;
    withSampleProperty: (arg0: String) => SamplePropertySearchCriteria;
    withVocabularyProperty: (arg0: String) => ControlledVocabularyPropertySearchCriteria;
    withAnyProperty: () => AnyPropertySearchCriteria;
    withAnyStringProperty: () => AnyStringPropertySearchCriteria;
    withAnyNumberProperty: () => AnyNumberPropertySearchCriteria;
    withAnyDateProperty: () => AnyDatePropertySearchCriteria;
    withAnyBooleanProperty: () => AnyBooleanPropertySearchCriteria;
    withAnyField: () => AnyFieldSearchCriteria;
    withModifier: () => ModifierSearchCriteria;
    withProperty: (arg0: String) => StringPropertySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
}

export interface SampleTypeSearchCriteria extends AbstractEntityTypeSearchCriteria {
    withSemanticAnnotations: () => SemanticAnnotationSearchCriteria;
    withOrOperator: () => SampleTypeSearchCriteria;
    withAndOperator: () => SampleTypeSearchCriteria;
    withListable: () => ListableSampleTypeSearchCriteria;
    withPropertyAssignments: () => PropertyAssignmentSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withIds: () => IdsSearchCriteria<IEntityTypeId>;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface SearchSampleTypesOperation extends SearchObjectsOperation<SampleTypeSearchCriteria, SampleTypeFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: SampleTypeSearchCriteria;
    fetchOptions: SampleTypeFetchOptions;
}

export interface SearchSampleTypesOperationResult extends SearchObjectsOperationResult<SampleType> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<SampleType>;
}

export interface SearchSamplesOperation extends SearchObjectsOperation<SampleSearchCriteria, SampleFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: SampleSearchCriteria;
    fetchOptions: SampleFetchOptions;
}

export interface SearchSamplesOperationResult extends SearchObjectsOperationResult<Sample> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<Sample>;
}

export interface SampleTypeUpdate extends IEntityTypeUpdate, IMetaDataUpdateHolder {
    getPropertyAssignments: () => PropertyAssignmentListUpdateValue;
    isListable: () => FieldUpdateValue<Boolean>;
    setListable: (arg0: boolean) => void;
    isSubcodeUnique: () => FieldUpdateValue<Boolean>;
    setSubcodeUnique: (arg0: boolean) => void;
    isAutoGeneratedCode: () => FieldUpdateValue<Boolean>;
    setAutoGeneratedCode: (arg0: boolean) => void;
    isShowContainer: () => FieldUpdateValue<Boolean>;
    setShowContainer: (arg0: boolean) => void;
    isShowParents: () => FieldUpdateValue<Boolean>;
    setShowParents: (arg0: boolean) => void;
    isShowParentMetadata: () => FieldUpdateValue<Boolean>;
    setShowParentMetadata: (arg0: boolean) => void;
    getGeneratedCodePrefix: () => FieldUpdateValue<String>;
    setGeneratedCodePrefix: (arg0: String) => void;
    getValidationPluginId: () => FieldUpdateValue<IPluginId>;
    setValidationPluginId: (arg0: IPluginId) => void;
    setPropertyAssignmentActions: (arg0: ListUpdateAction<Object>[]) => void;
    setMetaDataActions: (arg0: ListUpdateAction<Object>[]) => void;
    setDescription: (arg0: String) => void;
    getMetaData: () => ListUpdateMapValues;
    getTypeId: () => IEntityTypeId;
    setTypeId: (arg0: IEntityTypeId) => void;
    getObjectId: () => IObjectId;
    getObjectId: () => IEntityTypeId;
    getDescription: () => FieldUpdateValue<String>;
    autoGeneratedCode: FieldUpdateValue<boolean>;
    generatedCodePrefix: FieldUpdateValue<string>;
    subcodeUnique: FieldUpdateValue<boolean>;
    listable: FieldUpdateValue<boolean>;
    showContainer: FieldUpdateValue<boolean>;
    showParents: FieldUpdateValue<boolean>;
    showParentMetadata: FieldUpdateValue<boolean>;
}

export interface SampleUpdate extends IUpdate, IPropertiesHolder, IObjectUpdate<ISampleId>, IMetaDataUpdateHolder {
    getProperty: (arg0: String) => String;
    setProperty: (arg0: String, arg1: String) => void;
    getProperties: () => Map<String, String>;
    setProperties: (arg0: Map<String, String>) => void;
    freeze: () => void;
    getBooleanProperty: (arg0: String) => Boolean;
    getExperimentId: () => FieldUpdateValue<IExperimentId>;
    setExperimentId: (arg0: IExperimentId) => void;
    getSampleId: () => ISampleId;
    setSampleId: (arg0: ISampleId) => void;
    getParentIds: () => IdListUpdateValue<ISampleId>;
    getAttachments: () => AttachmentListUpdateValue;
    getIntegerProperty: (arg0: String) => Long;
    setIntegerProperty: (arg0: String, arg1: Long) => void;
    getVarcharProperty: (arg0: String) => String;
    setVarcharProperty: (arg0: String, arg1: String) => void;
    getMultilineVarcharProperty: (arg0: String) => String;
    setMultilineVarcharProperty: (arg0: String, arg1: String) => void;
    getRealProperty: (arg0: String) => Double;
    setRealProperty: (arg0: String, arg1: Double) => void;
    getTimestampProperty: (arg0: String) => ZonedDateTime;
    setTimestampProperty: (arg0: String, arg1: ZonedDateTime) => void;
    setBooleanProperty: (arg0: String, arg1: Boolean) => void;
    getHyperlinkProperty: (arg0: String) => String;
    setHyperlinkProperty: (arg0: String, arg1: String) => void;
    getXmlProperty: (arg0: String) => String;
    setXmlProperty: (arg0: String, arg1: String) => void;
    getControlledVocabularyProperty: (arg0: String) => String;
    setControlledVocabularyProperty: (arg0: String, arg1: String) => void;
    getSampleProperty: (arg0: String) => SamplePermId;
    setSampleProperty: (arg0: String, arg1: SamplePermId) => void;
    getIntegerArrayProperty: (arg0: String) => Long[];
    setIntegerArrayProperty: (arg0: String, arg1: Long[]) => void;
    getRealArrayProperty: (arg0: String) => Double[];
    setRealArrayProperty: (arg0: String, arg1: Double[]) => void;
    getStringArrayProperty: (arg0: String) => String[];
    setStringArrayProperty: (arg0: String, arg1: String[]) => void;
    getTimestampArrayProperty: (arg0: String) => ZonedDateTime[];
    setTimestampArrayProperty: (arg0: String, arg1: ZonedDateTime[]) => void;
    getJsonProperty: (arg0: String) => String;
    setJsonProperty: (arg0: String, arg1: String) => void;
    getSpaceId: () => FieldUpdateValue<ISpaceId>;
    setSpaceId: (arg0: ISpaceId) => void;
    setProjectId: (arg0: IProjectId) => void;
    shouldBeFrozen: () => boolean;
    setAttachmentsActions: (arg0: ListUpdateAction<Object>[]) => void;
    freezeForDataSets: () => void;
    setContainerId: (arg0: ISampleId) => void;
    setTagActions: (arg0: ListUpdateAction<ITagId>[]) => void;
    getComponentIds: () => IdListUpdateValue<ISampleId>;
    setComponentActions: (arg0: ListUpdateAction<ISampleId>[]) => void;
    setParentActions: (arg0: ListUpdateAction<ISampleId>[]) => void;
    getRelationships: () => Map<ISampleId, RelationshipUpdate>;
    setRelationships: (arg0: Map<ISampleId, RelationshipUpdate>) => void;
    getChildIds: () => IdListUpdateValue<ISampleId>;
    setChildActions: (arg0: ListUpdateAction<ISampleId>[]) => void;
    freezeForComponents: () => void;
    freezeForChildren: () => void;
    freezeForParents: () => void;
    shouldBeFrozenForComponents: () => boolean;
    shouldBeFrozenForChildren: () => boolean;
    shouldBeFrozenForParents: () => boolean;
    getContainerId: () => FieldUpdateValue<ISampleId>;
    shouldBeFrozenForDataSets: () => boolean;
    getTagIds: () => IdListUpdateValue<ITagId>;
    setMetaDataActions: (arg0: ListUpdateAction<Object>[]) => void;
    relationship: (arg0: ISampleId) => RelationshipUpdate;
    getProjectId: () => FieldUpdateValue<IProjectId>;
    getMetaData: () => ListUpdateMapValues;
    getObjectId: () => ISampleId;
    getObjectId: () => IObjectId;
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
}

export interface UpdateSampleTypesOperation extends UpdateObjectsOperation<SampleTypeUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: SampleTypeUpdate[];
}

export interface UpdateSampleTypesOperationResult extends UpdateObjectsOperationResult<EntityTypePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: EntityTypePermId[];
}

export interface UpdateSamplesOperation extends UpdateObjectsOperation<SampleUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: SampleUpdate[];
}

export interface UpdateSamplesOperationResult extends UpdateObjectsOperationResult<SamplePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: SamplePermId[];
}

export interface Space extends Serializable, ICodeHolder, IDescriptionHolder, IModificationDateHolder, IPermIdHolder, IProjectsHolder, IRegistrationDateHolder, IRegistratorHolder, ISamplesHolder {
    getId: () => SpaceTechId;
    isFrozen: () => boolean;
    getSamples: () => Sample[];
    getPermId: () => IObjectId;
    getPermId: () => SpacePermId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => SpaceFetchOptions;
    setFetchOptions: (arg0: SpaceFetchOptions) => void;
    setPermId: (arg0: SpacePermId) => void;
    setFrozen: (arg0: boolean) => void;
    isFrozenForProjects: () => boolean;
    setFrozenForProjects: (arg0: boolean) => void;
    isFrozenForSamples: () => boolean;
    setFrozenForSamples: (arg0: boolean) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    setSamples: (arg0: Sample[]) => void;
    setDescription: (arg0: String) => void;
    getProjects: () => Project[];
    setId: (arg0: SpaceTechId) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    setProjects: (arg0: Project[]) => void;
    getDescription: () => String;
    fetchOptions: SpaceFetchOptions;
    id: SpaceTechId;
    permId: SpacePermId;
    frozen: boolean;
    frozenForProjects: boolean;
    frozenForSamples: boolean;
}

export interface CreateSpacesOperation extends CreateObjectsOperation<SpaceCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: SpaceCreation[];
}

export interface CreateSpacesOperationResult extends CreateObjectsOperationResult<SpacePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: SpacePermId[];
}

export interface SpaceCreation extends ICreation, IObjectCreation, ICreationIdHolder {
    getCreationId: () => CreationId;
    setCreationId: (arg0: CreationId) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    code: string;
    description: string;
}

export interface DeleteSpacesOperation extends DeleteObjectsOperation<ISpaceId, SpaceDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: SpaceDeletionOptions;
}

export interface DeleteSpacesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface SpaceDeletionOptions extends AbstractObjectDeletionOptions<SpaceDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface SpaceFetchOptions extends FetchOptions<Space>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    withSamples: () => SampleFetchOptions;
    withSamplesUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    getSortBy: () => SpaceSortOptions;
    getSortBy: () => SortOptions;
    hasSamples: () => boolean;
    withProjects: () => ProjectFetchOptions;
    withProjectsUsing: (arg0: ProjectFetchOptions) => ProjectFetchOptions;
    hasProjects: () => boolean;
    sortBy: () => SortOptions;
    sortBy: () => SpaceSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    registrator: PersonFetchOptions;
    samples: SampleFetchOptions;
    projects: ProjectFetchOptions;
    sort: SpaceSortOptions;
    sortBy: SpaceSortOptions;
}

export interface SpaceSortOptions extends EntitySortOptions<Space> {
    code: () => SortOrder;
    getPermId: () => SortOrder;
    registrationDate: () => SortOrder;
    getRegistrationDate: () => SortOrder;
    permId: () => SortOrder;
    modificationDate: () => SortOrder;
    getModificationDate: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
}

export interface GetSpacesOperation extends GetObjectsOperation<ISpaceId, SpaceFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: SpaceFetchOptions;
}

export interface GetSpacesOperationResult extends GetObjectsOperationResult<ISpaceId, Space> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: ISpaceId[];
    objects: Space[];
}

export interface ISpaceId extends IObjectId {
}

export interface SpacePermId extends ObjectPermId, ISpaceId {
    getPermId: () => String;
}

export interface SpaceTechId extends ObjectTechId, ISpaceId {
    getTechId: () => Long;
}

export interface NoSpaceSearchCriteria extends ISearchCriteria {
    isNegated: () => boolean;
}

export interface SearchSpacesOperation extends SearchObjectsOperation<SpaceSearchCriteria, SpaceFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: SpaceSearchCriteria;
    fetchOptions: SpaceFetchOptions;
}

export interface SearchSpacesOperationResult extends SearchObjectsOperationResult<Space> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<Space>;
}

export interface SpaceSearchCriteria extends AbstractObjectSearchCriteria<ISpaceId> {
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withOrOperator: () => SpaceSearchCriteria;
    withAndOperator: () => SpaceSearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface SpaceUpdate extends IUpdate, IObjectUpdate<ISpaceId> {
    freeze: () => void;
    getSpaceId: () => ISpaceId;
    setSpaceId: (arg0: ISpaceId) => void;
    shouldBeFrozen: () => boolean;
    shouldBeFrozenForSamples: () => boolean;
    freezeForProjects: () => void;
    freezeForSamples: () => void;
    shouldBeFrozenForProjects: () => boolean;
    setDescription: (arg0: String) => void;
    getObjectId: () => ISpaceId;
    getObjectId: () => IObjectId;
    getDescription: () => FieldUpdateValue<String>;
    spaceId: ISpaceId;
    description: FieldUpdateValue<string>;
    freeze: boolean;
    freezeForProjects: boolean;
    freezeForSamples: boolean;
}

export interface UpdateSpacesOperation extends UpdateObjectsOperation<SpaceUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: SpaceUpdate[];
}

export interface UpdateSpacesOperationResult extends UpdateObjectsOperationResult<SpacePermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: SpacePermId[];
}

export interface Vocabulary extends Serializable, ICodeHolder, IDescriptionHolder, IModificationDateHolder, IRegistrationDateHolder, IRegistratorHolder {
    getPermId: () => VocabularyPermId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => VocabularyFetchOptions;
    setFetchOptions: (arg0: VocabularyFetchOptions) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    isManagedInternally: () => boolean;
    setManagedInternally: (arg0: boolean) => void;
    isInternalNameSpace: () => boolean;
    setInternalNameSpace: (arg0: boolean) => void;
    getUrlTemplate: () => String;
    setUrlTemplate: (arg0: String) => void;
    isChosenFromList: () => boolean;
    setChosenFromList: (arg0: boolean) => void;
    getTerms: () => VocabularyTerm[];
    setTerms: (arg0: VocabularyTerm[]) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    fetchOptions: VocabularyFetchOptions;
    managedInternally: boolean;
    chosenFromList: boolean;
    urlTemplate: string;
    terms: VocabularyTerm[];
}

export interface VocabularyTerm extends Serializable, ICodeHolder, IDescriptionHolder, IModificationDateHolder, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder {
    getPermId: () => VocabularyTermPermId;
    getPermId: () => IObjectId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => VocabularyTermFetchOptions;
    setFetchOptions: (arg0: VocabularyTermFetchOptions) => void;
    setPermId: (arg0: VocabularyTermPermId) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    setOrdinal: (arg0: Long) => void;
    getVocabulary: () => Vocabulary;
    setVocabulary: (arg0: Vocabulary) => void;
    isOfficial: () => Boolean;
    setOfficial: (arg0: Boolean) => void;
    setDescription: (arg0: String) => void;
    getOrdinal: () => Long;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getLabel: () => String;
    setLabel: (arg0: String) => void;
    getDescription: () => String;
    fetchOptions: VocabularyTermFetchOptions;
    permId: VocabularyTermPermId;
    label: string;
    ordinal: number;
    official: boolean;
    vocabulary: Vocabulary;
}

export interface CreateVocabulariesOperation extends CreateObjectsOperation<VocabularyCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: VocabularyCreation[];
}

export interface CreateVocabulariesOperationResult extends CreateObjectsOperationResult<VocabularyPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: VocabularyPermId[];
}

export interface CreateVocabularyTermsOperation extends CreateObjectsOperation<VocabularyTermCreation> {
    getMessage: () => String;
    getCreations: () => any[];
    creations: VocabularyTermCreation[];
}

export interface CreateVocabularyTermsOperationResult extends CreateObjectsOperationResult<VocabularyTermPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: VocabularyTermPermId[];
}

export interface VocabularyCreation extends ICreation, IObjectCreation {
    isManagedInternally: () => boolean;
    setManagedInternally: (arg0: boolean) => void;
    isInternalNameSpace: () => boolean;
    setInternalNameSpace: (arg0: boolean) => void;
    getUrlTemplate: () => String;
    setUrlTemplate: (arg0: String) => void;
    isChosenFromList: () => boolean;
    setChosenFromList: (arg0: boolean) => void;
    getTerms: () => VocabularyTermCreation[];
    setTerms: (arg0: VocabularyTermCreation[]) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    code: string;
    description: string;
    managedInternally: boolean;
    chosenFromList: boolean;
    urlTemplate: string;
    terms: VocabularyTermCreation[];
}

export interface VocabularyTermCreation extends ICreation, IObjectCreation {
    isOfficial: () => Boolean;
    setOfficial: (arg0: Boolean) => void;
    getVocabularyId: () => IVocabularyId;
    setVocabularyId: (arg0: IVocabularyId) => void;
    setPreviousTermId: (arg0: IVocabularyTermId) => void;
    getPreviousTermId: () => IVocabularyTermId;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getLabel: () => String;
    setLabel: (arg0: String) => void;
    getDescription: () => String;
    vocabularyId: IVocabularyId;
    code: string;
    label: string;
    description: string;
    official: boolean;
    previousTermId: IVocabularyTermId;
}

export interface DeleteVocabulariesOperation extends DeleteObjectsOperation<IVocabularyId, VocabularyDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: VocabularyDeletionOptions;
}

export interface DeleteVocabulariesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface DeleteVocabularyTermsOperation extends DeleteObjectsOperation<IVocabularyTermId, VocabularyTermDeletionOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getOptions: () => any;
    options: VocabularyTermDeletionOptions;
}

export interface DeleteVocabularyTermsOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    getMessage: () => String;
}

export interface VocabularyDeletionOptions extends AbstractObjectDeletionOptions<VocabularyDeletionOptions> {
    setReason: (arg0: String) => any;
    getReason: () => String;
}

export interface VocabularyTermDeletionOptions extends AbstractObjectDeletionOptions<VocabularyTermDeletionOptions> {
    replace: (arg0: IVocabularyTermId, arg1: IVocabularyTermId) => void;
    getReplacements: () => VocabularyTermReplacement[];
    setReason: (arg0: String) => any;
    getReason: () => String;
    replacements: VocabularyTermReplacement[];
}

export interface VocabularyTermReplacement extends Serializable {
    getReplacedId: () => IVocabularyTermId;
    getReplacementId: () => IVocabularyTermId;
    replacedId: IVocabularyTermId;
    replacementId: IVocabularyTermId;
}

export interface VocabularyFetchOptions extends FetchOptions<Vocabulary>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => SortOptions;
    getSortBy: () => VocabularySortOptions;
    withTerms: () => VocabularyTermFetchOptions;
    withTermsUsing: (arg0: VocabularyTermFetchOptions) => VocabularyTermFetchOptions;
    hasTerms: () => boolean;
    sortBy: () => VocabularySortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    registrator: PersonFetchOptions;
    terms: VocabularyTermFetchOptions;
    sort: VocabularySortOptions;
    sortBy: VocabularySortOptions;
}

export interface VocabularySortOptions extends SortOptions<Vocabulary> {
    code: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
    code: SortOrder;
}

export interface VocabularyTermFetchOptions extends FetchOptions<VocabularyTerm>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => VocabularyTermSortOptions;
    getSortBy: () => SortOptions;
    withVocabulary: () => VocabularyFetchOptions;
    withVocabularyUsing: (arg0: VocabularyFetchOptions) => VocabularyFetchOptions;
    hasVocabulary: () => boolean;
    sortBy: () => VocabularyTermSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    vocabulary: VocabularyFetchOptions;
    registrator: PersonFetchOptions;
    sort: VocabularyTermSortOptions;
    sortBy: VocabularyTermSortOptions;
}

export interface VocabularyTermSortOptions extends SortOptions<VocabularyTerm> {
    code: () => SortOrder;
    ordinal: () => SortOrder;
    getOrdinal: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
    ordinal: SortOrder;
    code: SortOrder;
}

export interface GetVocabulariesOperation extends GetObjectsOperation<IVocabularyId, VocabularyFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: VocabularyFetchOptions;
}

export interface GetVocabulariesOperationResult extends GetObjectsOperationResult<IVocabularyId, Vocabulary> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IVocabularyId[];
    objects: Vocabulary[];
}

export interface GetVocabularyTermsOperation extends GetObjectsOperation<IVocabularyTermId, VocabularyTermFetchOptions> {
    getMessage: () => String;
    getObjectIds: () => any[];
    getFetchOptions: () => any;
    fetchOptions: VocabularyTermFetchOptions;
}

export interface GetVocabularyTermsOperationResult extends GetObjectsOperationResult<IVocabularyTermId, VocabularyTerm> {
    getMessage: () => String;
    getObjectMap: () => Map<any, any>;
    ids: IVocabularyTermId[];
    objects: VocabularyTerm[];
}

export interface IVocabularyId extends IObjectId {
}

export interface IVocabularyTermId extends IObjectId {
}

export interface VocabularyPermId extends ObjectPermId, IVocabularyId {
    getPermId: () => String;
}

export interface VocabularyTermPermId extends IVocabularyTermId, Serializable {
    getVocabularyCode: () => String;
    getCode: () => String;
    code: string;
    vocabularyCode: string;
}

export interface SearchVocabulariesOperation extends SearchObjectsOperation<VocabularySearchCriteria, VocabularyFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: VocabularySearchCriteria;
    fetchOptions: VocabularyFetchOptions;
}

export interface SearchVocabulariesOperationResult extends SearchObjectsOperationResult<Vocabulary> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<Vocabulary>;
}

export interface SearchVocabularyTermsOperation extends SearchObjectsOperation<VocabularyTermSearchCriteria, VocabularyTermFetchOptions> {
    getMessage: () => String;
    getFetchOptions: () => any;
    getCriteria: () => any;
    criteria: VocabularyTermSearchCriteria;
    fetchOptions: VocabularyTermFetchOptions;
}

export interface SearchVocabularyTermsOperationResult extends SearchObjectsOperationResult<VocabularyTerm> {
    getMessage: () => String;
    getSearchResult: () => SearchResult<any>;
    searchResult: SearchResult<VocabularyTerm>;
}

export interface VocabularySearchCriteria extends AbstractObjectSearchCriteria<IVocabularyId> {
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withOrOperator: () => VocabularySearchCriteria;
    withAndOperator: () => VocabularySearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface VocabularyTermSearchCriteria extends AbstractObjectSearchCriteria<IVocabularyTermId> {
    withVocabulary: () => VocabularySearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withOrOperator: () => VocabularyTermSearchCriteria;
    withAndOperator: () => VocabularyTermSearchCriteria;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface UpdateVocabulariesOperation extends UpdateObjectsOperation<VocabularyUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: VocabularyUpdate[];
}

export interface UpdateVocabulariesOperationResult extends UpdateObjectsOperationResult<VocabularyPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: VocabularyPermId[];
}

export interface UpdateVocabularyTermsOperation extends UpdateObjectsOperation<VocabularyTermUpdate> {
    getMessage: () => String;
    getUpdates: () => any[];
    updates: VocabularyTermUpdate[];
}

export interface UpdateVocabularyTermsOperationResult extends UpdateObjectsOperationResult<VocabularyTermPermId> {
    getMessage: () => String;
    getObjectIds: () => any[];
    objectIds: VocabularyTermPermId[];
}

export interface VocabularyTermUpdate extends IUpdate, IObjectUpdate<IVocabularyTermId> {
    isOfficial: () => FieldUpdateValue<Boolean>;
    setOfficial: (arg0: Boolean) => void;
    getVocabularyTermId: () => IVocabularyTermId;
    setVocabularyTermId: (arg0: IVocabularyTermId) => void;
    setPreviousTermId: (arg0: IVocabularyTermId) => void;
    getPreviousTermId: () => FieldUpdateValue<IVocabularyTermId>;
    setDescription: (arg0: String) => void;
    getObjectId: () => IObjectId;
    getObjectId: () => IVocabularyTermId;
    getLabel: () => FieldUpdateValue<String>;
    setLabel: (arg0: String) => void;
    getDescription: () => FieldUpdateValue<String>;
    vocabularyTermId: IVocabularyTermId;
    label: FieldUpdateValue<string>;
    description: FieldUpdateValue<string>;
    previousTermId: FieldUpdateValue<IVocabularyTermId>;
    official: FieldUpdateValue<boolean>;
}

export interface VocabularyUpdate extends IUpdate, IObjectUpdate<IVocabularyId> {
    getUrlTemplate: () => FieldUpdateValue<String>;
    setUrlTemplate: (arg0: String) => void;
    setChosenFromList: (arg0: Boolean) => void;
    getVocabularyId: () => IVocabularyId;
    setVocabularyId: (arg0: IVocabularyId) => void;
    getChosenFromList: () => FieldUpdateValue<Boolean>;
    setDescription: (arg0: String) => void;
    getObjectId: () => IVocabularyId;
    getObjectId: () => IObjectId;
    getDescription: () => FieldUpdateValue<String>;
    vocabularyId: IVocabularyId;
    description: FieldUpdateValue<string>;
    chosenFromList: FieldUpdateValue<boolean>;
    urlTemplate: FieldUpdateValue<string>;
}

export interface SessionInformation extends Serializable {
    setSessionToken: (arg0: String) => void;
    getPerson: () => Person;
    getSessionToken: () => String;
    getFetchOptions: () => SessionInformationFetchOptions;
    setFetchOptions: (arg0: SessionInformationFetchOptions) => void;
    setUserName: (arg0: String) => void;
    getHomeGroupCode: () => String;
    setHomeGroupCode: (arg0: String) => void;
    isPersonalAccessTokenSession: () => boolean;
    setPersonalAccessTokenSession: (arg0: boolean) => void;
    getPersonalAccessTokenSessionName: () => String;
    setPersonalAccessTokenSessionName: (arg0: String) => void;
    setPerson: (arg0: Person) => void;
    getCreatorPerson: () => Person;
    setCreatorPerson: (arg0: Person) => void;
    getUserName: () => String;
    fetchOptions: SessionInformationFetchOptions;
    sessionToken: string;
    userName: string;
    homeGroupCode: string;
    personalAccessTokenSession: boolean;
    personalAccessTokenSessionName: string;
    person: Person;
    creatorPerson: Person;
}

export interface Serializable {
}

export interface IDeletionId extends IObjectId {
}

export interface Attachment extends Serializable, IDescriptionHolder, IRegistrationDateHolder, IRegistratorHolder {
    getContent: () => byte[];
    getFileName: () => String;
    getVersion: () => Integer;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => AttachmentFetchOptions;
    setFetchOptions: (arg0: AttachmentFetchOptions) => void;
    setFileName: (arg0: String) => void;
    getPermlink: () => String;
    setPermlink: (arg0: String) => void;
    getLatestVersionPermlink: () => String;
    setLatestVersionPermlink: (arg0: String) => void;
    getPreviousVersion: () => Attachment;
    setPreviousVersion: (arg0: Attachment) => void;
    setContent: (arg0: byte[]) => void;
    setDescription: (arg0: String) => void;
    setVersion: (arg0: Integer) => void;
    getTitle: () => String;
    setTitle: (arg0: String) => void;
    getDescription: () => String;
    fetchOptions: AttachmentFetchOptions;
    fileName: string;
    title: string;
    permlink: string;
    latestVersionPermlink: string;
    version: number;
    previousVersion: Attachment;
    content: any;
}

export interface Plugin extends Serializable, IDescriptionHolder, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder {
    getName: () => String;
    setName: (arg0: String) => void;
    getScript: () => String;
    setScript: (arg0: String) => void;
    getPermId: () => IObjectId;
    getPermId: () => PluginPermId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => PluginFetchOptions;
    setFetchOptions: (arg0: PluginFetchOptions) => void;
    setPermId: (arg0: PluginPermId) => void;
    getPluginKind: () => PluginKind;
    setPluginKind: (arg0: PluginKind) => void;
    getEntityKinds: () => Set<EntityKind>;
    setEntityKinds: (arg0: Set<EntityKind>) => void;
    getPluginType: () => PluginType;
    setPluginType: (arg0: PluginType) => void;
    setDescription: (arg0: String) => void;
    setAvailable: (arg0: boolean) => void;
    isAvailable: () => boolean;
    getDescription: () => String;
    fetchOptions: PluginFetchOptions;
    name: string;
    permId: PluginPermId;
    pluginKind: PluginKind;
    entityKinds: EntityKind[];
    pluginType: PluginType;
    script: string;
    available: boolean;
}

export interface SemanticAnnotation extends Serializable, IPermIdHolder {
    getPermId: () => SemanticAnnotationPermId;
    getPermId: () => IObjectId;
    setPredicateOntologyId: (arg0: String) => void;
    setDescriptorOntologyId: (arg0: String) => void;
    setPredicateOntologyVersion: (arg0: String) => void;
    setDescriptorOntologyVersion: (arg0: String) => void;
    setPredicateAccessionId: (arg0: String) => void;
    setDescriptorAccessionId: (arg0: String) => void;
    getFetchOptions: () => SemanticAnnotationFetchOptions;
    setFetchOptions: (arg0: SemanticAnnotationFetchOptions) => void;
    setPermId: (arg0: SemanticAnnotationPermId) => void;
    getPredicateOntologyId: () => String;
    getPredicateOntologyVersion: () => String;
    getPredicateAccessionId: () => String;
    getDescriptorOntologyId: () => String;
    getDescriptorOntologyVersion: () => String;
    getDescriptorAccessionId: () => String;
    getEntityType: () => IEntityType;
    setEntityType: (arg0: IEntityType) => void;
    getPropertyAssignment: () => PropertyAssignment;
    setPropertyAssignment: (arg0: PropertyAssignment) => void;
    getCreationDate: () => Date;
    setCreationDate: (arg0: Date) => void;
    getPropertyType: () => PropertyType;
    setPropertyType: (arg0: PropertyType) => void;
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
}

export interface Tag extends Serializable, ICodeHolder, IDataSetsHolder, IDescriptionHolder, IExperimentsHolder, IMaterialsHolder, IOwnerHolder, IPermIdHolder, IRegistrationDateHolder, ISamplesHolder {
    isPrivate: () => Boolean;
    getOwner: () => Person;
    setOwner: (arg0: Person) => void;
    getExperiments: () => Experiment[];
    getSamples: () => Sample[];
    getDataSets: () => DataSet[];
    getMaterials: () => Material[];
    getPermId: () => IObjectId;
    getPermId: () => TagPermId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getFetchOptions: () => TagFetchOptions;
    setFetchOptions: (arg0: TagFetchOptions) => void;
    setPermId: (arg0: TagPermId) => void;
    setSamples: (arg0: Sample[]) => void;
    setExperiments: (arg0: Experiment[]) => void;
    setDataSets: (arg0: DataSet[]) => void;
    setPrivate: (arg0: Boolean) => void;
    setMaterials: (arg0: Material[]) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    fetchOptions: TagFetchOptions;
    permId: TagPermId;
    private: boolean;
}

export interface ExternalDms extends Serializable, ICodeHolder {
    getAddress: () => String;
    getPermId: () => ExternalDmsPermId;
    getFetchOptions: () => ExternalDmsFetchOptions;
    setFetchOptions: (arg0: ExternalDmsFetchOptions) => void;
    setPermId: (arg0: ExternalDmsPermId) => void;
    getUrlTemplate: () => String;
    setUrlTemplate: (arg0: String) => void;
    isOpenbis: () => Boolean;
    setOpenbis: (arg0: Boolean) => void;
    setAddressType: (arg0: ExternalDmsAddressType) => void;
    getAddressType: () => ExternalDmsAddressType;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getLabel: () => String;
    setLabel: (arg0: String) => void;
    setAddress: (arg0: String) => void;
    fetchOptions: ExternalDmsFetchOptions;
    permId: ExternalDmsPermId;
    label: string;
    urlTemplate: string;
    address: string;
    openbis: boolean;
    addressType: ExternalDmsAddressType;
}

export interface DataStore extends Serializable, ICodeHolder, IModificationDateHolder, IRegistrationDateHolder {
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getFetchOptions: () => DataStoreFetchOptions;
    setFetchOptions: (arg0: DataStoreFetchOptions) => void;
    getDownloadUrl: () => String;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    setDownloadUrl: (arg0: String) => void;
    getRemoteUrl: () => String;
    setRemoteUrl: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    fetchOptions: DataStoreFetchOptions;
    downloadUrl: string;
    remoteUrl: string;
}

export interface HistoryEntry extends Serializable {
    getFetchOptions: () => HistoryEntryFetchOptions;
    setFetchOptions: (arg0: HistoryEntryFetchOptions) => void;
    getValidFrom: () => Date;
    setValidFrom: (arg0: Date) => void;
    getValidTo: () => Date;
    setValidTo: (arg0: Date) => void;
    getAuthor: () => Person;
    setAuthor: (arg0: Person) => void;
    fetchOptions: HistoryEntryFetchOptions;
    validFrom: Date;
    validTo: Date;
    author: Person;
}

export interface EntityTypePermId extends ObjectPermId, IEntityTypeId {
    getEntityKind: () => EntityKind;
    getPermId: () => String;
    entityKind: EntityKind;
}

export interface IExternalDmsId extends IObjectId {
}

export interface IEntityTypeId extends IObjectId {
}

export interface IDataStoreId extends IObjectId {
}

export interface ITagId extends IObjectId {
}

export interface IPluginId extends IObjectId {
}

export interface IEntityTypeCreation extends ICreation, IObjectCreation {
    getPropertyAssignments: () => PropertyAssignmentCreation[];
    setPropertyAssignments: (arg0: PropertyAssignmentCreation[]) => void;
    getValidationPluginId: () => IPluginId;
    setValidationPluginId: (arg0: IPluginId) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    propertyAssignments: PropertyAssignmentCreation[];
    validationPluginId: IPluginId;
    description: string;
    code: string;
}

export interface DataStoreFetchOptions extends FetchOptions<DataStore>, Serializable {
    getSortBy: () => DataStoreSortOptions;
    getSortBy: () => SortOptions;
    sortBy: () => DataStoreSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    sort: DataStoreSortOptions;
    sortBy: DataStoreSortOptions;
}

export interface TagFetchOptions extends FetchOptions<Tag>, Serializable {
    withOwner: () => PersonFetchOptions;
    withSamples: () => SampleFetchOptions;
    withSamplesUsing: (arg0: SampleFetchOptions) => SampleFetchOptions;
    getSortBy: () => SortOptions;
    getSortBy: () => TagSortOptions;
    hasSamples: () => boolean;
    withDataSets: () => DataSetFetchOptions;
    withDataSetsUsing: (arg0: DataSetFetchOptions) => DataSetFetchOptions;
    hasDataSets: () => boolean;
    withOwnerUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasOwner: () => boolean;
    withExperiments: () => ExperimentFetchOptions;
    withExperimentsUsing: (arg0: ExperimentFetchOptions) => ExperimentFetchOptions;
    hasExperiments: () => boolean;
    withMaterials: () => MaterialFetchOptions;
    withMaterialsUsing: (arg0: MaterialFetchOptions) => MaterialFetchOptions;
    hasMaterials: () => boolean;
    sortBy: () => SortOptions;
    sortBy: () => TagSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    experiments: ExperimentFetchOptions;
    samples: SampleFetchOptions;
    dataSets: DataSetFetchOptions;
    materials: MaterialFetchOptions;
    owner: PersonFetchOptions;
    sort: TagSortOptions;
    sortBy: TagSortOptions;
}

export interface HistoryEntryFetchOptions extends FetchOptions<HistoryEntry>, Serializable {
    getSortBy: () => HistoryEntrySortOptions;
    getSortBy: () => SortOptions;
    hasAuthor: () => boolean;
    withAuthor: () => PersonFetchOptions;
    withAuthorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    sortBy: () => SortOptions;
    sortBy: () => HistoryEntrySortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    author: PersonFetchOptions;
    sort: HistoryEntrySortOptions;
    sortBy: HistoryEntrySortOptions;
}

export interface PluginFetchOptions extends FetchOptions<Plugin>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => SortOptions;
    getSortBy: () => PluginSortOptions;
    withScript: () => EmptyFetchOptions;
    withScriptUsing: (arg0: EmptyFetchOptions) => EmptyFetchOptions;
    hasScript: () => boolean;
    sortBy: () => PluginSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    registrator: PersonFetchOptions;
    sort: PluginSortOptions;
    script: EmptyFetchOptions;
    sortBy: PluginSortOptions;
}

export interface ExternalDmsFetchOptions extends FetchOptions<ExternalDms>, Serializable {
    getSortBy: () => ExternalDmsSortOptions;
    getSortBy: () => SortOptions;
    sortBy: () => ExternalDmsSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    sort: ExternalDmsSortOptions;
    sortBy: ExternalDmsSortOptions;
}

export interface AbstractEntityTypeSearchCriteria extends AbstractObjectSearchCriteria<IEntityTypeId> {
    withPropertyAssignments: () => PropertyAssignmentSearchCriteria;
    withCode: () => CodeSearchCriteria;
    withCodes: () => CodesSearchCriteria;
    withPermId: () => PermIdSearchCriteria;
    withIds: () => IdsSearchCriteria<IEntityTypeId>;
    withId: () => IdSearchCriteria<any>;
    withOperator: (arg0: SearchOperator) => AbstractCompositeSearchCriteria;
    setCriteria: (arg0: Collection<ISearchCriteria>) => void;
    getCriteria: () => Collection<ISearchCriteria>;
    getOperator: () => SearchOperator;
    isNegated: () => boolean;
}

export interface PropertyAssignmentListUpdateValue extends ListUpdateValue<PropertyAssignmentCreation, IPropertyAssignmentId, PropertyAssignmentCreation, any> {
    isForceRemovingAssignments: () => boolean;
    setForceRemovingAssignments: (arg0: boolean) => void;
    add: (arg0: any[]) => void;
    remove: (arg0: any[]) => void;
    set: (arg0: any[]) => void;
    getActions: () => ListUpdateAction<any>[];
    getAdded: () => Collection<any>;
    getRemoved: () => Collection<any>;
    getSet: () => Collection<any>;
    hasActions: () => boolean;
    setActions: (arg0: ListUpdateAction<any>[]) => void;
    actions: ListUpdateAction<any>[];
    forceRemovingAssignments: boolean;
}

export interface IEntityTypeUpdate extends IUpdate, IObjectUpdate<IEntityTypeId> {
    getPropertyAssignments: () => PropertyAssignmentListUpdateValue;
    getValidationPluginId: () => FieldUpdateValue<IPluginId>;
    setValidationPluginId: (arg0: IPluginId) => void;
    setPropertyAssignmentActions: (arg0: ListUpdateAction<Object>[]) => void;
    setDescription: (arg0: String) => void;
    getTypeId: () => IEntityTypeId;
    setTypeId: (arg0: IEntityTypeId) => void;
    getDescription: () => FieldUpdateValue<String>;
    getObjectId: () => any;
    propertyAssignments: PropertyAssignmentListUpdateValue;
    validationPluginId: FieldUpdateValue<IPluginId>;
    description: FieldUpdateValue<string>;
    typeId: IEntityTypeId;
    objectId: IEntityTypeId;
}

export interface AttachmentCreation extends ICreation {
    getContent: () => byte[];
    getFileName: () => String;
    setFileName: (arg0: String) => void;
    setContent: (arg0: byte[]) => void;
    setDescription: (arg0: String) => void;
    getTitle: () => String;
    setTitle: (arg0: String) => void;
    getDescription: () => String;
    fileName: string;
    title: string;
    description: string;
    content: any;
}

export interface AttachmentFetchOptions extends FetchOptions<Attachment>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => SortOptions;
    getSortBy: () => AttachmentSortOptions;
    hasPreviousVersion: () => boolean;
    withPreviousVersion: () => AttachmentFetchOptions;
    withPreviousVersionUsing: (arg0: AttachmentFetchOptions) => AttachmentFetchOptions;
    withContentUsing: (arg0: EmptyFetchOptions) => EmptyFetchOptions;
    withContent: () => EmptyFetchOptions;
    sortBy: () => SortOptions;
    sortBy: () => AttachmentSortOptions;
    hasContent: () => boolean;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    registrator: PersonFetchOptions;
    previousVersion: AttachmentFetchOptions;
    content: EmptyFetchOptions;
    sort: AttachmentSortOptions;
    sortBy: AttachmentSortOptions;
}

export interface AttachmentListUpdateValue extends ListUpdateValue<AttachmentCreation, IAttachmentId, AttachmentCreation, any> {
    add: (arg0: any[]) => void;
    remove: (arg0: any[]) => void;
    set: (arg0: any[]) => void;
    getActions: () => ListUpdateAction<any>[];
    getAdded: () => Collection<any>;
    getRemoved: () => Collection<any>;
    getSet: () => Collection<any>;
    hasActions: () => boolean;
    setActions: (arg0: ListUpdateAction<any>[]) => void;
    actions: ListUpdateAction<any>[];
}

export interface RoleAssignment extends Serializable, ISpaceHolder, IRegistrationDateHolder, IRegistratorHolder {
    getId: () => IRoleAssignmentId;
    getSpace: () => Space;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    setSpace: (arg0: Space) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    getFetchOptions: () => RoleAssignmentFetchOptions;
    setFetchOptions: (arg0: RoleAssignmentFetchOptions) => void;
    getAuthorizationGroup: () => AuthorizationGroup;
    setAuthorizationGroup: (arg0: AuthorizationGroup) => void;
    getRole: () => Role;
    setRole: (arg0: Role) => void;
    getRoleLevel: () => RoleLevel;
    setRoleLevel: (arg0: RoleLevel) => void;
    getProject: () => Project;
    getUser: () => Person;
    setProject: (arg0: Project) => void;
    setId: (arg0: IRoleAssignmentId) => void;
    setUser: (arg0: Person) => void;
    fetchOptions: RoleAssignmentFetchOptions;
    id: IRoleAssignmentId;
    user: Person;
    authorizationGroup: AuthorizationGroup;
    role: Role;
    roleLevel: RoleLevel;
    project: Project;
}

export interface WebAppSettings extends Serializable {
    getFetchOptions: () => WebAppSettingsFetchOptions;
    setFetchOptions: (arg0: WebAppSettingsFetchOptions) => void;
    getWebAppId: () => String;
    setWebAppId: (arg0: String) => void;
    getSetting: (arg0: String) => WebAppSetting;
    getSettings: () => Map<String, WebAppSetting>;
    setSettings: (arg0: Map<String, WebAppSetting>) => void;
    fetchOptions: WebAppSettingsFetchOptions;
    webAppId: string;
    settings: { [index: string]: WebAppSetting };
}

export interface RoleAssignmentFetchOptions extends FetchOptions<RoleAssignment>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => RoleAssignmentSortOptions;
    getSortBy: () => SortOptions;
    withSpace: () => SpaceFetchOptions;
    withSpaceUsing: (arg0: SpaceFetchOptions) => SpaceFetchOptions;
    hasSpace: () => boolean;
    withProject: () => ProjectFetchOptions;
    withProjectUsing: (arg0: ProjectFetchOptions) => ProjectFetchOptions;
    hasProject: () => boolean;
    withUser: () => PersonFetchOptions;
    withUserUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasUser: () => boolean;
    withAuthorizationGroup: () => AuthorizationGroupFetchOptions;
    withAuthorizationGroupUsing: (arg0: AuthorizationGroupFetchOptions) => AuthorizationGroupFetchOptions;
    hasAuthorizationGroup: () => boolean;
    sortBy: () => SortOptions;
    sortBy: () => RoleAssignmentSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    registrator: PersonFetchOptions;
    user: PersonFetchOptions;
    authorizationGroup: AuthorizationGroupFetchOptions;
    space: SpaceFetchOptions;
    project: ProjectFetchOptions;
    sort: RoleAssignmentSortOptions;
    sortBy: RoleAssignmentSortOptions;
}

export interface WebAppSettingsFetchOptions extends FetchOptions<WebAppSettings>, Serializable {
    getSortBy: () => SortOptions;
    getSortBy: () => WebAppSettingsSortOptions;
    hasAllSettings: () => boolean;
    hasSetting: (arg0: String) => boolean;
    withSetting: (arg0: String) => void;
    withSettingsUsing: (arg0: Collection<String>) => Collection<String>;
    withAllSettings: () => void;
    withAllSettingsUsing: (arg0: boolean) => boolean;
    getSettings: () => Collection<String>;
    sortBy: () => SortOptions;
    sortBy: () => WebAppSettingsSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    settings: string[];
    allSettings: boolean;
    sort: WebAppSettingsSortOptions;
}

export interface WebAppSettingsUpdateValue extends ListUpdateValue<WebAppSettingCreation, string, WebAppSettingCreation, any> {
    add: (arg0: any[]) => void;
    remove: (arg0: any[]) => void;
    set: (arg0: any[]) => void;
    getActions: () => ListUpdateAction<any>[];
    getAdded: () => Collection<any>;
    getRemoved: () => Collection<any>;
    getSet: () => Collection<any>;
    hasActions: () => boolean;
    setActions: (arg0: ListUpdateAction<any>[]) => void;
    actions: ListUpdateAction<any>[];
}

export interface EntityTypeFetchOptions extends FetchOptions<IEntityType>, Serializable {
    getSortBy: () => EntityTypeSortOptions;
    getSortBy: () => SortOptions;
    withPropertyAssignments: () => PropertyAssignmentFetchOptions;
    withPropertyAssignmentsUsing: (arg0: PropertyAssignmentFetchOptions) => PropertyAssignmentFetchOptions;
    hasPropertyAssignments: () => boolean;
    sortBy: () => SortOptions;
    sortBy: () => EntityTypeSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    propertyAssignments: PropertyAssignmentFetchOptions;
    sort: EntityTypeSortOptions;
    sortBy: EntityTypeSortOptions;
}

export interface SemanticAnnotationFetchOptions extends FetchOptions<SemanticAnnotation>, Serializable {
    getSortBy: () => SortOptions;
    getSortBy: () => SemanticAnnotationSortOptions;
    withEntityType: () => EntityTypeFetchOptions;
    withEntityTypeUsing: (arg0: EntityTypeFetchOptions) => EntityTypeFetchOptions;
    hasEntityType: () => boolean;
    withPropertyType: () => PropertyTypeFetchOptions;
    withPropertyTypeUsing: (arg0: PropertyTypeFetchOptions) => PropertyTypeFetchOptions;
    hasPropertyType: () => boolean;
    withPropertyAssignment: () => PropertyAssignmentFetchOptions;
    withPropertyAssignmentUsing: (arg0: PropertyAssignmentFetchOptions) => PropertyAssignmentFetchOptions;
    hasPropertyAssignment: () => boolean;
    sortBy: () => SortOptions;
    sortBy: () => SemanticAnnotationSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    entityType: EntityTypeFetchOptions;
    propertyType: PropertyTypeFetchOptions;
    propertyAssignment: PropertyAssignmentFetchOptions;
    sort: SemanticAnnotationSortOptions;
    sortBy: SemanticAnnotationSortOptions;
}

export interface KeyDeserializer {
    deserializeKey: (arg0: String, arg1: DeserializationContext) => Object;
}

export interface SessionInformationFetchOptions extends FetchOptions<SessionInformation>, Serializable {
    hasPerson: () => boolean;
    getSortBy: () => SessionInformationSortOptions;
    getSortBy: () => SortOptions;
    hasCreatorPerson: () => boolean;
    withPerson: () => PersonFetchOptions;
    withPersonUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    withCreatorPerson: () => PersonFetchOptions;
    withCreatorPersonUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    sortBy: () => SessionInformationSortOptions;
    sortBy: () => SortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    person: PersonFetchOptions;
    creatorPerson: PersonFetchOptions;
    sort: SessionInformationSortOptions;
    sortBy: SessionInformationSortOptions;
}

export interface PluginPermId extends ObjectPermId, IPluginId {
    getPermId: () => String;
}

export interface SemanticAnnotationPermId extends ObjectPermId, ISemanticAnnotationId {
    getPermId: () => String;
}

export interface TagPermId extends ObjectPermId, ITagId {
    getPermId: () => String;
}

export interface ExternalDmsPermId extends ObjectPermId, IExternalDmsId {
    getPermId: () => String;
}

export interface AbstractObjectDeletionOptions<T> extends Serializable {
    setReason: (arg0: String) => any;
    getReason: () => String;
    reason: string;
}

export interface DataStoreSortOptions extends SortOptions<DataStore> {
    getSortings: () => Sorting[];
}

export interface TagSortOptions extends SortOptions<Tag> {
    code: () => SortOrder;
    registrationDate: () => SortOrder;
    getRegistrationDate: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
    registrationDate: SortOrder;
    code: SortOrder;
}

export interface HistoryEntrySortOptions extends SortOptions<HistoryEntry> {
    getSortings: () => Sorting[];
}

export interface PluginSortOptions extends SortOptions<Plugin> {
    getName: () => SortOrder;
    name: () => SortOrder;
    getSortings: () => Sorting[];
    name: SortOrder;
}

export interface ExternalDmsSortOptions extends SortOptions<ExternalDms> {
    getSortings: () => Sorting[];
}

export interface AttachmentSortOptions extends SortOptions<Attachment> {
    getSortings: () => Sorting[];
}

export interface IRoleAssignmentId extends IObjectId {
}

export interface AuthorizationGroup extends Serializable, IPermIdHolder, ICodeHolder, IDescriptionHolder, IRegistrationDateHolder, IRegistratorHolder, IModificationDateHolder {
    getRoleAssignments: () => RoleAssignment[];
    getPermId: () => IObjectId;
    getPermId: () => AuthorizationGroupPermId;
    getRegistrationDate: () => Date;
    setRegistrationDate: (arg0: Date) => void;
    getRegistrator: () => Person;
    setRegistrator: (arg0: Person) => void;
    setRoleAssignments: (arg0: RoleAssignment[]) => void;
    getFetchOptions: () => AuthorizationGroupFetchOptions;
    setFetchOptions: (arg0: AuthorizationGroupFetchOptions) => void;
    setPermId: (arg0: AuthorizationGroupPermId) => void;
    getModificationDate: () => Date;
    setModificationDate: (arg0: Date) => void;
    getUsers: () => Person[];
    setUsers: (arg0: Person[]) => void;
    setDescription: (arg0: String) => void;
    getCode: () => String;
    setCode: (arg0: String) => void;
    getDescription: () => String;
    fetchOptions: AuthorizationGroupFetchOptions;
    permId: AuthorizationGroupPermId;
    users: Person[];
    roleAssignments: RoleAssignment[];
}

export interface WebAppSetting extends Serializable {
    getName: () => String;
    getValue: () => String;
    setName: (arg0: String) => void;
    setValue: (arg0: String) => void;
    name: string;
    value: string;
}

export interface AuthorizationGroupFetchOptions extends FetchOptions<AuthorizationGroup>, Serializable {
    withRegistrator: () => PersonFetchOptions;
    withRegistratorUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasRegistrator: () => boolean;
    getSortBy: () => SortOptions;
    getSortBy: () => AuthorizationGroupSortOptions;
    withUsers: () => PersonFetchOptions;
    withUsersUsing: (arg0: PersonFetchOptions) => PersonFetchOptions;
    hasUsers: () => boolean;
    withRoleAssignments: () => RoleAssignmentFetchOptions;
    withRoleAssignmentsUsing: (arg0: RoleAssignmentFetchOptions) => RoleAssignmentFetchOptions;
    hasRoleAssignments: () => boolean;
    sortBy: () => SortOptions;
    sortBy: () => AuthorizationGroupSortOptions;
    count: (arg0: Integer) => FetchOptions<any>;
    from: (arg0: Integer) => FetchOptions<any>;
    getCount: () => Integer;
    getFrom: () => Integer;
    cacheMode: (arg0: CacheMode) => FetchOptions<any>;
    getCacheMode: () => CacheMode;
    registrator: PersonFetchOptions;
    users: PersonFetchOptions;
    roleAssignments: RoleAssignmentFetchOptions;
    sort: AuthorizationGroupSortOptions;
    sortBy: AuthorizationGroupSortOptions;
}

export interface RoleAssignmentSortOptions extends SortOptions<RoleAssignment> {
    getSortings: () => Sorting[];
}

export interface WebAppSettingsSortOptions extends SortOptions<WebAppSettings> {
    getSortings: () => Sorting[];
}

export interface EntityTypeSortOptions extends SortOptions<IEntityType> {
    getSortings: () => Sorting[];
}

export interface SemanticAnnotationSortOptions extends SortOptions<SemanticAnnotation> {
    getSortings: () => Sorting[];
}

export interface SessionInformationSortOptions extends SortOptions<SessionInformation> {
    getSortings: () => Sorting[];
}

export interface ISemanticAnnotationId extends IObjectId {
}

export interface IAttachmentId extends IObjectId {
}

export interface AuthorizationGroupPermId extends ObjectPermId, IAuthorizationGroupId, Serializable {
    getPermId: () => String;
}

export interface AuthorizationGroupSortOptions extends SortOptions<AuthorizationGroup> {
    code: () => SortOrder;
    getCode: () => SortOrder;
    getSortings: () => Sorting[];
    code: SortOrder;
}

export interface WebAppSettingCreation extends ICreation, IObjectCreation {
    getName: () => String;
    getValue: () => String;
    setName: (arg0: String) => void;
    setValue: (arg0: String) => void;
    name: string;
    value: string;
}

export interface IAuthorizationGroupId extends IObjectId {
}

export type CacheMode = "NO_CACHE" | "CACHE" | "RELOAD_AND_CACHE";

export type SortParameter = "FULL_MATCH_CODE_BOOST" | "PARTIAL_MATCH_CODE_BOOST" | "FULL_MATCH_TYPE_BOOST" | "FULL_MATCH_PROPERTY_BOOST" | "PARTIAL_MATCH_PROPERTY_BOOST" | "MATCH_VALUE" | "PREFIX_MATCH_VALUE";

export type SearchFieldType = "PROPERTY" | "ATTRIBUTE" | "ANY_PROPERTY" | "ANY_FIELD";

export type SearchOperator = "AND" | "OR";

export type ArchivingStatus = "AVAILABLE" | "LOCKED" | "ARCHIVED" | "UNARCHIVE_PENDING" | "ARCHIVE_PENDING" | "BACKUP_PENDING";

export type Complete = "YES" | "NO" | "UNKNOWN";

export type DataSetKind = "PHYSICAL" | "CONTAINER" | "LINK";

export type DataSetRelationType = "EXPERIMENT" | "SAMPLE" | "PARENT" | "CHILD" | "CONTAINER" | "COMPONENT";

export type DataSetSearchRelation = "DATASET" | "PARENTS" | "CHILDREN" | "CONTAINER";

export type ExperimentRelationType = "PROJECT" | "SAMPLE" | "DATA_SET";

export type OperationExecutionAvailability = "AVAILABLE" | "DELETE_PENDING" | "DELETED" | "TIME_OUT_PENDING" | "TIMED_OUT";

export type OperationExecutionState = "NEW" | "SCHEDULED" | "RUNNING" | "FINISHED" | "FAILED";

export type ProjectRelationType = "SPACE" | "EXPERIMENT" | "SAMPLE";

export type DataType = "INTEGER" | "VARCHAR" | "MULTILINE_VARCHAR" | "REAL" | "TIMESTAMP" | "BOOLEAN" | "CONTROLLEDVOCABULARY" | "MATERIAL" | "HYPERLINK" | "XML" | "SAMPLE" | "DATE" | "JSON" | "ARRAY_INTEGER" | "ARRAY_REAL" | "ARRAY_STRING" | "ARRAY_TIMESTAMP";

export type QueryType = "GENERIC" | "EXPERIMENT" | "SAMPLE" | "DATA_SET" | "MATERIAL";

export type SampleRelationType = "SPACE" | "PROJECT" | "EXPERIMENT" | "PARENT" | "CHILD" | "CONTAINER" | "COMPONENT" | "DATA_SET";

export type SampleSearchRelation = "SAMPLE" | "PARENTS" | "CHILDREN" | "CONTAINER";

export type Role = "DISABLED" | "ADMIN" | "USER" | "POWER_USER" | "OBSERVER" | "ETL_SERVER";

export type RoleLevel = "INSTANCE" | "SPACE" | "PROJECT";

/**
 * Values:
 * - `JYTHON`
 * - `PREDEPLOYED` - @deprecated
 */
export type PluginKind = "JYTHON" | "PREDEPLOYED";

export type EntityKind = "MATERIAL" | "EXPERIMENT" | "SAMPLE" | "DATA_SET";

export type PluginType = "DYNAMIC_PROPERTY" | "MANAGED_PROPERTY" | "ENTITY_VALIDATION";

export type ExternalDmsAddressType = "OPENBIS" | "URL" | "FILE_SYSTEM";
