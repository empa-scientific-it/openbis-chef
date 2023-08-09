/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2023-08-09 12:06:50.

export interface OpenBIS {
    sessionToken: string;
    sessionActive: boolean;
    sessionInformation: SessionInformation;
    serverInformation: { [index: string]: string };
    serverPublicInformation: { [index: string]: string };
}

export interface IApplicationServerApi extends IRpcService {
    serverPublicInformation: { [index: string]: string };
}

export interface ContentCopy extends Serializable {
    id: ContentCopyPermId;
    externalDms: ExternalDms;
    externalCode: string;
    path: string;
    gitCommitHash: string;
    gitRepositoryId: string;
}

export interface DataSet extends Serializable, ICodeHolder, IEntityTypeHolder, IExperimentHolder, IMaterialPropertiesHolder, IModificationDateHolder, IModifierHolder, IParentChildrenHolder<DataSet>, IPermIdHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ISampleHolder, ITagsHolder {
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
    fetchOptions: FileFormatTypeFetchOptions;
    description: string;
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
}

export interface LocatorType extends Serializable, ICodeHolder {
    fetchOptions: LocatorTypeFetchOptions;
    description: string;
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
}

export interface StorageFormat extends Serializable, ICodeHolder {
    fetchOptions: StorageFormatFetchOptions;
    description: string;
}

export interface ArchiveDataSetsOperation extends IOperation {
    dataSetIds: IDataSetId[];
    options: DataSetArchiveOptions;
}

export interface ArchiveDataSetsOperationResult extends IOperationResult {
}

export interface DataSetArchiveOptions extends Serializable {
    removeFromDataStore: boolean;
    options: { [index: string]: string };
}

export interface ContentCopyCreation extends ICreation {
    externalId: string;
    path: string;
    gitCommitHash: string;
    gitRepositoryId: string;
    externalDmsId: IExternalDmsId;
}

export interface CreateDataSetTypesOperation extends CreateObjectsOperation<DataSetTypeCreation> {
    creations: DataSetTypeCreation[];
}

export interface CreateDataSetTypesOperationResult extends CreateObjectsOperationResult<EntityTypePermId> {
    objectIds: EntityTypePermId[];
}

export interface CreateDataSetsOperation extends CreateObjectsOperation<DataSetCreation> {
    creations: DataSetCreation[];
}

export interface CreateDataSetsOperationResult extends CreateObjectsOperationResult<DataSetPermId> {
    objectIds: DataSetPermId[];
}

export interface DataSetCreation extends ICreation, ICreationIdHolder, IObjectCreation, IPropertiesHolder {
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
    mainDataSetPattern: string;
    mainDataSetPath: string;
    disallowDeletion: boolean;
    metaData: { [index: string]: string };
}

export interface LinkedDataCreation extends ICreation {
    externalCode: string;
    externalDmsId: IExternalDmsId;
    contentCopies: ContentCopyCreation[];
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
}

export interface DataSetDeletionOptions extends AbstractObjectDeletionOptions<DataSetDeletionOptions> {
}

export interface DataSetTypeDeletionOptions extends AbstractObjectDeletionOptions<DataSetTypeDeletionOptions> {
}

export interface DeleteDataSetTypesOperation extends DeleteObjectsOperation<IEntityTypeId, DataSetTypeDeletionOptions> {
    options: DataSetTypeDeletionOptions;
}

export interface DeleteDataSetTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
}

export interface DeleteDataSetsOperation extends DeleteObjectsOperation<IDataSetId, DataSetDeletionOptions> {
    options: DataSetDeletionOptions;
}

export interface DeleteDataSetsOperationResult extends DeleteObjectsWithTrashOperationResult {
}

export interface DataSetFetchOptions extends FetchOptions<DataSet>, Serializable {
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
}

export interface DataSetTypeFetchOptions extends FetchOptions<DataSetType>, Serializable {
    propertyAssignments: PropertyAssignmentFetchOptions;
    validationPlugin: PluginFetchOptions;
    sort: DataSetTypeSortOptions;
    sortBy: DataSetTypeSortOptions;
}

export interface DataSetTypeSortOptions extends SortOptions<DataSetType> {
}

/**
 * @deprecated
 */
export interface FileFormatTypeFetchOptions extends FetchOptions<FileFormatType>, Serializable {
    sort: FileFormatTypeSortOptions;
    sortBy: FileFormatTypeSortOptions;
}

/**
 * @deprecated
 */
export interface FileFormatTypeSortOptions extends SortOptions<FileFormatType> {
}

export interface LinkedDataFetchOptions extends FetchOptions<LinkedData>, Serializable {
    externalDms: ExternalDmsFetchOptions;
    sort: LinkedDataSortOptions;
    sortBy: LinkedDataSortOptions;
}

export interface LinkedDataSortOptions extends SortOptions<LinkedData> {
}

export interface LocatorTypeFetchOptions extends FetchOptions<LocatorType>, Serializable {
    sort: LocatorTypeSortOptions;
    sortBy: LocatorTypeSortOptions;
}

export interface LocatorTypeSortOptions extends SortOptions<LocatorType> {
}

export interface PhysicalDataFetchOptions extends FetchOptions<PhysicalData>, Serializable {
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
}

export interface StorageFormatFetchOptions extends FetchOptions<StorageFormat>, Serializable {
    sort: StorageFormatSortOptions;
    sortBy: StorageFormatSortOptions;
}

export interface StorageFormatSortOptions extends SortOptions<StorageFormat> {
}

export interface GetDataSetTypesOperation extends GetObjectsOperation<IEntityTypeId, DataSetTypeFetchOptions> {
    fetchOptions: DataSetTypeFetchOptions;
}

export interface GetDataSetTypesOperationResult extends GetObjectsOperationResult<IEntityTypeId, DataSetType> {
    ids: IEntityTypeId[];
    objects: DataSetType[];
}

export interface GetDataSetsOperation extends GetObjectsOperation<IDataSetId, DataSetFetchOptions> {
    fetchOptions: DataSetFetchOptions;
}

export interface GetDataSetsOperationResult extends GetObjectsOperationResult<IDataSetId, DataSet> {
    ids: IDataSetId[];
    objects: DataSet[];
}

export interface BdsDirectoryStorageFormatPermId extends StorageFormatPermId {
}

export interface ContentCopyPermId extends ObjectPermId, IContentCopyId {
}

export interface DataSetPermId extends ObjectPermId, IDataSetId {
}

/**
 * @deprecated
 */
export interface FileFormatTypePermId extends ObjectPermId, IFileFormatTypeId {
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
}

export interface ProprietaryStorageFormatPermId extends StorageFormatPermId {
}

export interface RelativeLocationLocatorTypePermId extends LocatorTypePermId {
}

export interface StorageFormatPermId extends ObjectPermId, IStorageFormatId {
}

export interface DataSetLockOptions extends Serializable {
}

export interface LockDataSetsOperation extends IOperation {
    dataSetIds: IDataSetId[];
    options: DataSetLockOptions;
}

export interface LockDataSetsOperationResult extends IOperationResult {
}

export interface AbstractDataSetSearchCriteria<T> extends AbstractEntitySearchCriteria<IDataSetId> {
    relation: DataSetSearchRelation;
}

export interface ArchivingRequestedSearchCriteria extends BooleanFieldSearchCriteria {
}

export interface CompleteSearchCriteria extends EnumFieldSearchCriteria<Complete> {
    fieldValue: Complete;
}

export interface ContentCopySearchCriteria extends AbstractObjectSearchCriteria<IExternalDmsId> {
}

export interface DataSetChildrenSearchCriteria extends AbstractDataSetSearchCriteria<DataSetChildrenSearchCriteria> {
}

export interface DataSetContainerSearchCriteria extends AbstractDataSetSearchCriteria<DataSetContainerSearchCriteria> {
}

export interface DataSetParentsSearchCriteria extends AbstractDataSetSearchCriteria<DataSetParentsSearchCriteria> {
}

export interface DataSetSearchCriteria extends AbstractDataSetSearchCriteria<DataSetSearchCriteria> {
}

export interface DataSetTypeSearchCriteria extends AbstractEntityTypeSearchCriteria {
}

export interface ExternalCodeSearchCriteria extends StringFieldSearchCriteria {
}

export interface ExternalDmsSearchCriteria extends AbstractObjectSearchCriteria<IExternalDmsId> {
}

/**
 * @deprecated
 */
export interface FileFormatTypeSearchCriteria extends AbstractCompositeSearchCriteria {
}

export interface GitCommitHashSearchCriteria extends StringFieldSearchCriteria {
}

export interface GitRepositoryIdSearchCriteria extends StringFieldSearchCriteria {
}

export interface LinkedDataSearchCriteria extends AbstractCompositeSearchCriteria {
}

export interface LocationSearchCriteria extends StringFieldSearchCriteria {
}

export interface LocatorTypeSearchCriteria extends AbstractCompositeSearchCriteria {
}

export interface PathSearchCriteria extends StringFieldSearchCriteria {
}

export interface PhysicalDataSearchCriteria extends AbstractCompositeSearchCriteria {
}

export interface PresentInArchiveSearchCriteria extends BooleanFieldSearchCriteria {
}

export interface SearchDataSetTypesOperation extends SearchObjectsOperation<DataSetTypeSearchCriteria, DataSetTypeFetchOptions> {
    criteria: DataSetTypeSearchCriteria;
    fetchOptions: DataSetTypeFetchOptions;
}

export interface SearchDataSetTypesOperationResult extends SearchObjectsOperationResult<DataSetType> {
    searchResult: SearchResult<DataSetType>;
}

export interface SearchDataSetsOperation extends SearchObjectsOperation<DataSetSearchCriteria, DataSetFetchOptions> {
    criteria: DataSetSearchCriteria;
    fetchOptions: DataSetFetchOptions;
}

export interface SearchDataSetsOperationResult extends SearchObjectsOperationResult<DataSet> {
    searchResult: SearchResult<DataSet>;
}

export interface ShareIdSearchCriteria extends StringFieldSearchCriteria {
}

export interface SizeSearchCriteria extends NumberFieldSearchCriteria {
}

export interface SpeedHintSearchCriteria extends NumberFieldSearchCriteria {
}

export interface StatusSearchCriteria extends EnumFieldSearchCriteria<ArchivingStatus> {
    fieldValue: ArchivingStatus;
}

export interface StorageConfirmationSearchCriteria extends BooleanFieldSearchCriteria {
}

export interface StorageFormatSearchCriteria extends AbstractCompositeSearchCriteria {
}

export interface DataSetUnarchiveOptions extends Serializable {
}

export interface UnarchiveDataSetsOperation extends IOperation {
    dataSetIds: IDataSetId[];
    options: DataSetUnarchiveOptions;
}

export interface UnarchiveDataSetsOperationResult extends IOperationResult {
}

export interface DataSetUnlockOptions extends Serializable {
}

export interface UnlockDataSetsOperation extends IOperation {
    dataSetIds: IDataSetId[];
    options: DataSetUnlockOptions;
}

export interface UnlockDataSetsOperationResult extends IOperationResult {
}

export interface ContentCopyListUpdateValue extends ListUpdateValue<ContentCopyCreation, IContentCopyId, ContentCopyCreation, any> {
    actions: ListUpdateAction<any>[];
}

export interface DataSetTypeUpdate extends IEntityTypeUpdate, IMetaDataUpdateHolder {
    mainDataSetPattern: FieldUpdateValue<string>;
    mainDataSetPath: FieldUpdateValue<string>;
    disallowDeletion: FieldUpdateValue<boolean>;
}

export interface DataSetUpdate extends IUpdate, IObjectUpdate<IDataSetId>, IPropertiesHolder, IMetaDataUpdateHolder {
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
    /**
     * @deprecated
     */
    fileFormatTypeId: FieldUpdateValue<IFileFormatTypeId>;
    archivingRequested: FieldUpdateValue<boolean>;
}

export interface UpdateDataSetTypesOperation extends UpdateObjectsOperation<DataSetTypeUpdate> {
    updates: DataSetTypeUpdate[];
}

export interface UpdateDataSetTypesOperationResult extends UpdateObjectsOperationResult<EntityTypePermId> {
    objectIds: EntityTypePermId[];
}

export interface UpdateDataSetsOperation extends UpdateObjectsOperation<DataSetUpdate> {
    updates: DataSetUpdate[];
}

export interface UpdateDataSetsOperationResult extends UpdateObjectsOperationResult<DataSetPermId> {
    objectIds: DataSetPermId[];
}

export interface DataStore extends Serializable, ICodeHolder, IModificationDateHolder, IRegistrationDateHolder {
    fetchOptions: DataStoreFetchOptions;
    downloadUrl: string;
    remoteUrl: string;
}

export interface DataStoreFetchOptions extends FetchOptions<DataStore>, Serializable {
    sort: DataStoreSortOptions;
    sortBy: DataStoreSortOptions;
}

export interface DataStoreSortOptions extends SortOptions<DataStore> {
}

export interface DataStorePermId extends ObjectPermId, IDataStoreId {
}

export interface IDataStoreId extends IObjectId {
}

export interface DataStoreSearchCriteria extends AbstractObjectSearchCriteria<IDataStoreId> {
}

export interface SearchDataStoresOperation extends SearchObjectsOperation<DataStoreSearchCriteria, DataStoreFetchOptions> {
    criteria: DataStoreSearchCriteria;
    fetchOptions: DataStoreFetchOptions;
}

export interface SearchDataStoresOperationResult extends SearchObjectsOperationResult<DataStore> {
    searchResult: SearchResult<DataStore>;
}

export interface Experiment extends Serializable, IAttachmentsHolder, ICodeHolder, IDataSetsHolder, IEntityTypeHolder, IIdentifierHolder, IMaterialPropertiesHolder, IModificationDateHolder, IModifierHolder, IPermIdHolder, IProjectHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ISamplesHolder, ITagsHolder {
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
    fetchOptions: ExperimentTypeFetchOptions;
    permId: EntityTypePermId;
    metaData: { [index: string]: string };
}

export interface CreateExperimentTypesOperation extends CreateObjectsOperation<ExperimentTypeCreation> {
    creations: ExperimentTypeCreation[];
}

export interface CreateExperimentTypesOperationResult extends CreateObjectsOperationResult<EntityTypePermId> {
    objectIds: EntityTypePermId[];
}

export interface CreateExperimentsOperation extends CreateObjectsOperation<ExperimentCreation> {
    creations: ExperimentCreation[];
}

export interface CreateExperimentsOperationResult extends CreateObjectsOperationResult<ExperimentPermId> {
    objectIds: ExperimentPermId[];
}

export interface ExperimentCreation extends ICreation, IObjectCreation, ICreationIdHolder, IPropertiesHolder {
    typeId: IEntityTypeId;
    projectId: IProjectId;
    code: string;
    tagIds: ITagId[];
    attachments: AttachmentCreation[];
    metaData: { [index: string]: string };
}

export interface ExperimentTypeCreation extends IEntityTypeCreation {
    metaData: { [index: string]: string };
}

export interface DeleteExperimentTypesOperation extends DeleteObjectsOperation<IEntityTypeId, ExperimentTypeDeletionOptions> {
    options: ExperimentTypeDeletionOptions;
}

export interface DeleteExperimentTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
}

export interface DeleteExperimentsOperation extends DeleteObjectsOperation<IExperimentId, ExperimentDeletionOptions> {
    options: ExperimentDeletionOptions;
}

export interface DeleteExperimentsOperationResult extends DeleteObjectsWithTrashOperationResult {
}

export interface ExperimentDeletionOptions extends AbstractObjectDeletionOptions<ExperimentDeletionOptions> {
}

export interface ExperimentTypeDeletionOptions extends AbstractObjectDeletionOptions<ExperimentTypeDeletionOptions> {
}

export interface ExperimentFetchOptions extends FetchOptions<Experiment>, Serializable {
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
    identifier: SortOrder;
}

export interface ExperimentTypeFetchOptions extends FetchOptions<ExperimentType>, Serializable {
    propertyAssignments: PropertyAssignmentFetchOptions;
    validationPlugin: PluginFetchOptions;
    sort: ExperimentTypeSortOptions;
    sortBy: ExperimentTypeSortOptions;
}

export interface ExperimentTypeSortOptions extends SortOptions<ExperimentType> {
}

export interface GetExperimentTypesOperation extends GetObjectsOperation<IEntityTypeId, ExperimentTypeFetchOptions> {
    fetchOptions: ExperimentTypeFetchOptions;
}

export interface GetExperimentTypesOperationResult extends GetObjectsOperationResult<IEntityTypeId, ExperimentType> {
    ids: IEntityTypeId[];
    objects: ExperimentType[];
}

export interface GetExperimentsOperation extends GetObjectsOperation<IExperimentId, ExperimentFetchOptions> {
    fetchOptions: ExperimentFetchOptions;
}

export interface GetExperimentsOperationResult extends GetObjectsOperationResult<IExperimentId, Experiment> {
    ids: IExperimentId[];
    objects: Experiment[];
}

export interface ExperimentIdentifier extends ObjectIdentifier, IExperimentId {
}

export interface ExperimentPermId extends ObjectPermId, IExperimentId {
}

export interface IExperimentId extends IObjectId {
}

export interface ExperimentSearchCriteria extends AbstractEntitySearchCriteria<IExperimentId> {
}

export interface ExperimentTypeSearchCriteria extends AbstractEntityTypeSearchCriteria {
}

export interface NoExperimentSearchCriteria extends ISearchCriteria {
}

export interface SearchExperimentTypesOperation extends SearchObjectsOperation<ExperimentTypeSearchCriteria, ExperimentTypeFetchOptions> {
    criteria: ExperimentTypeSearchCriteria;
    fetchOptions: ExperimentTypeFetchOptions;
}

export interface SearchExperimentTypesOperationResult extends SearchObjectsOperationResult<ExperimentType> {
    searchResult: SearchResult<ExperimentType>;
}

export interface SearchExperimentsOperation extends SearchObjectsOperation<ExperimentSearchCriteria, ExperimentFetchOptions> {
    criteria: ExperimentSearchCriteria;
    fetchOptions: ExperimentFetchOptions;
}

export interface SearchExperimentsOperationResult extends SearchObjectsOperationResult<Experiment> {
    searchResult: SearchResult<Experiment>;
}

export interface ExperimentTypeUpdate extends IEntityTypeUpdate, IMetaDataUpdateHolder {
}

export interface ExperimentUpdate extends IUpdate, IObjectUpdate<IExperimentId>, IPropertiesHolder, IMetaDataUpdateHolder {
    experimentId: IExperimentId;
    freeze: boolean;
    freezeForDataSets: boolean;
    freezeForSamples: boolean;
    projectId: FieldUpdateValue<IProjectId>;
    tagIds: IdListUpdateValue<ITagId>;
    attachments: AttachmentListUpdateValue;
}

export interface UpdateExperimentTypesOperation extends UpdateObjectsOperation<ExperimentTypeUpdate> {
    updates: ExperimentTypeUpdate[];
}

export interface UpdateExperimentTypesOperationResult extends UpdateObjectsOperationResult<EntityTypePermId> {
    objectIds: EntityTypePermId[];
}

export interface UpdateExperimentsOperation extends UpdateObjectsOperation<ExperimentUpdate> {
    updates: ExperimentUpdate[];
}

export interface UpdateExperimentsOperationResult extends UpdateObjectsOperationResult<ExperimentPermId> {
    objectIds: ExperimentPermId[];
}

export interface PropertyAssignment extends Serializable, IPermIdHolder, IPropertyTypeHolder, IRegistrationDateHolder, IRegistratorHolder, ISemanticAnnotationsHolder {
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
    creations: PropertyTypeCreation[];
}

export interface CreatePropertyTypesOperationResult extends CreateObjectsOperationResult<PropertyTypePermId> {
    objectIds: PropertyTypePermId[];
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
}

export interface DeletePropertyTypesOperation extends DeleteObjectsOperation<IPropertyTypeId, PropertyTypeDeletionOptions> {
    options: PropertyTypeDeletionOptions;
}

export interface DeletePropertyTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
}

export interface PropertyTypeDeletionOptions extends AbstractObjectDeletionOptions<PropertyTypeDeletionOptions> {
}

export interface PropertyAssignmentFetchOptions extends FetchOptions<PropertyAssignment>, Serializable {
    entityType: EntityTypeFetchOptions;
    propertyType: PropertyTypeFetchOptions;
    semanticAnnotations: SemanticAnnotationFetchOptions;
    registrator: PersonFetchOptions;
    sort: PropertyAssignmentSortOptions;
    plugin: PluginFetchOptions;
    sortBy: PropertyAssignmentSortOptions;
}

export interface PropertyAssignmentSortOptions extends SortOptions<PropertyAssignment> {
    ordinal: SortOrder;
    label: SortOrder;
    code: SortOrder;
}

export interface PropertyFetchOptions extends EmptyFetchOptions {
}

export interface PropertyTypeFetchOptions extends FetchOptions<PropertyType>, Serializable {
    vocabulary: VocabularyFetchOptions;
    materialType: MaterialTypeFetchOptions;
    sampleType: SampleTypeFetchOptions;
    semanticAnnotations: SemanticAnnotationFetchOptions;
    registrator: PersonFetchOptions;
    sort: PropertyTypeSortOptions;
    sortBy: PropertyTypeSortOptions;
}

export interface PropertyTypeSortOptions extends SortOptions<PropertyType> {
    code: SortOrder;
}

export interface GetPropertyTypesOperation extends GetObjectsOperation<IPropertyTypeId, PropertyTypeFetchOptions> {
    fetchOptions: PropertyTypeFetchOptions;
}

export interface GetPropertyTypesOperationResult extends GetObjectsOperationResult<IPropertyTypeId, PropertyType> {
    ids: IPropertyTypeId[];
    objects: PropertyType[];
}

export interface IPropertyAssignmentId extends IObjectId {
}

export interface IPropertyTypeId extends IObjectId {
}

export interface PropertyAssignmentPermId extends IPropertyAssignmentId {
    entityTypeId: IEntityTypeId;
    propertyTypeId: IPropertyTypeId;
}

export interface PropertyTypePermId extends ObjectPermId, IPropertyTypeId {
}

export interface PropertyAssignmentSearchCriteria extends AbstractObjectSearchCriteria<IPropertyAssignmentId> {
}

export interface PropertyTypeSearchCriteria extends AbstractObjectSearchCriteria<IPropertyTypeId> {
}

export interface SearchPropertyAssignmentsOperation extends SearchObjectsOperation<PropertyAssignmentSearchCriteria, PropertyAssignmentFetchOptions> {
    criteria: PropertyAssignmentSearchCriteria;
    fetchOptions: PropertyAssignmentFetchOptions;
}

export interface SearchPropertyAssignmentsOperationResult extends SearchObjectsOperationResult<PropertyAssignment> {
    searchResult: SearchResult<PropertyAssignment>;
}

export interface SearchPropertyTypesOperation extends SearchObjectsOperation<PropertyTypeSearchCriteria, PropertyTypeFetchOptions> {
    criteria: PropertyTypeSearchCriteria;
    fetchOptions: PropertyTypeFetchOptions;
}

export interface SearchPropertyTypesOperationResult extends SearchObjectsOperationResult<PropertyType> {
    searchResult: SearchResult<PropertyType>;
}

export interface PropertyTypeUpdate extends IUpdate, IObjectUpdate<IPropertyTypeId> {
    typeId: IPropertyTypeId;
    dataType: DataType;
    label: FieldUpdateValue<string>;
    description: FieldUpdateValue<string>;
    schema: FieldUpdateValue<string>;
    transformation: FieldUpdateValue<string>;
    metaData: ListUpdateMapValues;
}

export interface UpdatePropertyTypesOperation extends UpdateObjectsOperation<PropertyTypeUpdate> {
    updates: PropertyTypeUpdate[];
}

export interface UpdatePropertyTypesOperationResult extends UpdateObjectsOperationResult<PropertyTypePermId> {
    objectIds: PropertyTypePermId[];
}

export interface Sample extends Serializable, IAttachmentsHolder, ICodeHolder, IDataSetsHolder, IEntityTypeHolder, IExperimentHolder, IIdentifierHolder, IMaterialPropertiesHolder, IModificationDateHolder, IModifierHolder, IParentChildrenHolder<Sample>, IPermIdHolder, IProjectHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ISpaceHolder, ITagsHolder {
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
    creations: SampleTypeCreation[];
}

export interface CreateSampleTypesOperationResult extends CreateObjectsOperationResult<EntityTypePermId> {
    objectIds: EntityTypePermId[];
}

export interface CreateSamplesOperation extends CreateObjectsOperation<SampleCreation> {
    creations: SampleCreation[];
}

export interface CreateSamplesOperationResult extends CreateObjectsOperationResult<SamplePermId> {
    objectIds: SamplePermId[];
}

export interface SampleCreation extends ICreation, ICreationIdHolder, IPropertiesHolder, IObjectCreation {
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
    options: SampleTypeDeletionOptions;
}

export interface DeleteSampleTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
}

export interface DeleteSamplesOperation extends DeleteObjectsOperation<ISampleId, SampleDeletionOptions> {
    options: SampleDeletionOptions;
}

export interface DeleteSamplesOperationResult extends DeleteObjectsWithTrashOperationResult {
}

export interface SampleDeletionOptions extends AbstractObjectDeletionOptions<SampleDeletionOptions> {
}

export interface SampleTypeDeletionOptions extends AbstractObjectDeletionOptions<SampleTypeDeletionOptions> {
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
}

export interface SampleSortOptions extends EntityWithPropertiesSortOptions<Sample> {
    identifier: SortOrder;
}

export interface SampleTypeFetchOptions extends FetchOptions<SampleType>, Serializable {
    propertyAssignments: PropertyAssignmentFetchOptions;
    semanticAnnotations: SemanticAnnotationFetchOptions;
    validationPlugin: PluginFetchOptions;
    sort: SampleTypeSortOptions;
    sortBy: SampleTypeSortOptions;
}

export interface SampleTypeSortOptions extends SortOptions<SampleType> {
}

export interface GetSampleTypesOperation extends GetObjectsOperation<IEntityTypeId, SampleTypeFetchOptions> {
    fetchOptions: SampleTypeFetchOptions;
}

export interface GetSampleTypesOperationResult extends GetObjectsOperationResult<IEntityTypeId, SampleType> {
    ids: IEntityTypeId[];
    objects: SampleType[];
}

export interface GetSamplesOperation extends GetObjectsOperation<ISampleId, SampleFetchOptions> {
    fetchOptions: SampleFetchOptions;
}

export interface GetSamplesOperationResult extends GetObjectsOperationResult<ISampleId, Sample> {
    ids: ISampleId[];
    objects: Sample[];
}

export interface ISampleId extends IObjectId {
}

export interface SampleIdDeserializer extends KeyDeserializer {
}

export interface SampleIdentifier extends ObjectIdentifier, ISampleId {
}

export interface SamplePermId extends ObjectPermId, ISampleId {
}

export interface AbstractSampleSearchCriteria<T> extends AbstractEntitySearchCriteria<ISampleId> {
    relation: SampleSearchRelation;
}

export interface ListableSampleTypeSearchCriteria extends AbstractSearchCriteria {
    listable: boolean;
}

export interface NoSampleContainerSearchCriteria extends NoSampleSearchCriteria {
}

export interface NoSampleSearchCriteria extends ISearchCriteria {
}

export interface SampleChildrenSearchCriteria extends AbstractSampleSearchCriteria<SampleChildrenSearchCriteria> {
}

export interface SampleContainerSearchCriteria extends AbstractSampleSearchCriteria<SampleContainerSearchCriteria> {
}

export interface SampleParentsSearchCriteria extends AbstractSampleSearchCriteria<SampleParentsSearchCriteria> {
}

export interface SampleSearchCriteria extends AbstractSampleSearchCriteria<SampleSearchCriteria> {
}

export interface SampleTypeSearchCriteria extends AbstractEntityTypeSearchCriteria {
}

export interface SearchSampleTypesOperation extends SearchObjectsOperation<SampleTypeSearchCriteria, SampleTypeFetchOptions> {
    criteria: SampleTypeSearchCriteria;
    fetchOptions: SampleTypeFetchOptions;
}

export interface SearchSampleTypesOperationResult extends SearchObjectsOperationResult<SampleType> {
    searchResult: SearchResult<SampleType>;
}

export interface SearchSamplesOperation extends SearchObjectsOperation<SampleSearchCriteria, SampleFetchOptions> {
    criteria: SampleSearchCriteria;
    fetchOptions: SampleFetchOptions;
}

export interface SearchSamplesOperationResult extends SearchObjectsOperationResult<Sample> {
    searchResult: SearchResult<Sample>;
}

export interface SampleTypeUpdate extends IEntityTypeUpdate, IMetaDataUpdateHolder {
    autoGeneratedCode: FieldUpdateValue<boolean>;
    generatedCodePrefix: FieldUpdateValue<string>;
    subcodeUnique: FieldUpdateValue<boolean>;
    listable: FieldUpdateValue<boolean>;
    showContainer: FieldUpdateValue<boolean>;
    showParents: FieldUpdateValue<boolean>;
    showParentMetadata: FieldUpdateValue<boolean>;
}

export interface SampleUpdate extends IUpdate, IPropertiesHolder, IObjectUpdate<ISampleId>, IMetaDataUpdateHolder {
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
    updates: SampleTypeUpdate[];
}

export interface UpdateSampleTypesOperationResult extends UpdateObjectsOperationResult<EntityTypePermId> {
    objectIds: EntityTypePermId[];
}

export interface UpdateSamplesOperation extends UpdateObjectsOperation<SampleUpdate> {
    updates: SampleUpdate[];
}

export interface UpdateSamplesOperationResult extends UpdateObjectsOperationResult<SamplePermId> {
    objectIds: SamplePermId[];
}

export interface Vocabulary extends Serializable, ICodeHolder, IDescriptionHolder, IModificationDateHolder, IRegistrationDateHolder, IRegistratorHolder {
    fetchOptions: VocabularyFetchOptions;
    managedInternally: boolean;
    chosenFromList: boolean;
    urlTemplate: string;
    terms: VocabularyTerm[];
}

export interface VocabularyTerm extends Serializable, ICodeHolder, IDescriptionHolder, IModificationDateHolder, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder {
    fetchOptions: VocabularyTermFetchOptions;
    permId: VocabularyTermPermId;
    label: string;
    ordinal: number;
    official: boolean;
    vocabulary: Vocabulary;
}

export interface CreateVocabulariesOperation extends CreateObjectsOperation<VocabularyCreation> {
    creations: VocabularyCreation[];
}

export interface CreateVocabulariesOperationResult extends CreateObjectsOperationResult<VocabularyPermId> {
    objectIds: VocabularyPermId[];
}

export interface CreateVocabularyTermsOperation extends CreateObjectsOperation<VocabularyTermCreation> {
    creations: VocabularyTermCreation[];
}

export interface CreateVocabularyTermsOperationResult extends CreateObjectsOperationResult<VocabularyTermPermId> {
    objectIds: VocabularyTermPermId[];
}

export interface VocabularyCreation extends ICreation, IObjectCreation {
    code: string;
    description: string;
    managedInternally: boolean;
    chosenFromList: boolean;
    urlTemplate: string;
    terms: VocabularyTermCreation[];
}

export interface VocabularyTermCreation extends ICreation, IObjectCreation {
    vocabularyId: IVocabularyId;
    code: string;
    label: string;
    description: string;
    official: boolean;
    previousTermId: IVocabularyTermId;
}

export interface DeleteVocabulariesOperation extends DeleteObjectsOperation<IVocabularyId, VocabularyDeletionOptions> {
    options: VocabularyDeletionOptions;
}

export interface DeleteVocabulariesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
}

export interface DeleteVocabularyTermsOperation extends DeleteObjectsOperation<IVocabularyTermId, VocabularyTermDeletionOptions> {
    options: VocabularyTermDeletionOptions;
}

export interface DeleteVocabularyTermsOperationResult extends DeleteObjectsWithoutTrashOperationResult {
}

export interface VocabularyDeletionOptions extends AbstractObjectDeletionOptions<VocabularyDeletionOptions> {
}

export interface VocabularyTermDeletionOptions extends AbstractObjectDeletionOptions<VocabularyTermDeletionOptions> {
    replacements: VocabularyTermReplacement[];
}

export interface VocabularyTermReplacement extends Serializable {
    replacedId: IVocabularyTermId;
    replacementId: IVocabularyTermId;
}

export interface VocabularyFetchOptions extends FetchOptions<Vocabulary>, Serializable {
    registrator: PersonFetchOptions;
    terms: VocabularyTermFetchOptions;
    sort: VocabularySortOptions;
    sortBy: VocabularySortOptions;
}

export interface VocabularySortOptions extends SortOptions<Vocabulary> {
    code: SortOrder;
}

export interface VocabularyTermFetchOptions extends FetchOptions<VocabularyTerm>, Serializable {
    vocabulary: VocabularyFetchOptions;
    registrator: PersonFetchOptions;
    sort: VocabularyTermSortOptions;
    sortBy: VocabularyTermSortOptions;
}

export interface VocabularyTermSortOptions extends SortOptions<VocabularyTerm> {
    ordinal: SortOrder;
    code: SortOrder;
}

export interface GetVocabulariesOperation extends GetObjectsOperation<IVocabularyId, VocabularyFetchOptions> {
    fetchOptions: VocabularyFetchOptions;
}

export interface GetVocabulariesOperationResult extends GetObjectsOperationResult<IVocabularyId, Vocabulary> {
    ids: IVocabularyId[];
    objects: Vocabulary[];
}

export interface GetVocabularyTermsOperation extends GetObjectsOperation<IVocabularyTermId, VocabularyTermFetchOptions> {
    fetchOptions: VocabularyTermFetchOptions;
}

export interface GetVocabularyTermsOperationResult extends GetObjectsOperationResult<IVocabularyTermId, VocabularyTerm> {
    ids: IVocabularyTermId[];
    objects: VocabularyTerm[];
}

export interface IVocabularyId extends IObjectId {
}

export interface IVocabularyTermId extends IObjectId {
}

export interface VocabularyPermId extends ObjectPermId, IVocabularyId {
}

export interface VocabularyTermPermId extends IVocabularyTermId, Serializable {
    code: string;
    vocabularyCode: string;
}

export interface SearchVocabulariesOperation extends SearchObjectsOperation<VocabularySearchCriteria, VocabularyFetchOptions> {
    criteria: VocabularySearchCriteria;
    fetchOptions: VocabularyFetchOptions;
}

export interface SearchVocabulariesOperationResult extends SearchObjectsOperationResult<Vocabulary> {
    searchResult: SearchResult<Vocabulary>;
}

export interface SearchVocabularyTermsOperation extends SearchObjectsOperation<VocabularyTermSearchCriteria, VocabularyTermFetchOptions> {
    criteria: VocabularyTermSearchCriteria;
    fetchOptions: VocabularyTermFetchOptions;
}

export interface SearchVocabularyTermsOperationResult extends SearchObjectsOperationResult<VocabularyTerm> {
    searchResult: SearchResult<VocabularyTerm>;
}

export interface VocabularySearchCriteria extends AbstractObjectSearchCriteria<IVocabularyId> {
}

export interface VocabularyTermSearchCriteria extends AbstractObjectSearchCriteria<IVocabularyTermId> {
}

export interface UpdateVocabulariesOperation extends UpdateObjectsOperation<VocabularyUpdate> {
    updates: VocabularyUpdate[];
}

export interface UpdateVocabulariesOperationResult extends UpdateObjectsOperationResult<VocabularyPermId> {
    objectIds: VocabularyPermId[];
}

export interface UpdateVocabularyTermsOperation extends UpdateObjectsOperation<VocabularyTermUpdate> {
    updates: VocabularyTermUpdate[];
}

export interface UpdateVocabularyTermsOperationResult extends UpdateObjectsOperationResult<VocabularyTermPermId> {
    objectIds: VocabularyTermPermId[];
}

export interface VocabularyTermUpdate extends IUpdate, IObjectUpdate<IVocabularyTermId> {
    vocabularyTermId: IVocabularyTermId;
    label: FieldUpdateValue<string>;
    description: FieldUpdateValue<string>;
    previousTermId: FieldUpdateValue<IVocabularyTermId>;
    official: FieldUpdateValue<boolean>;
}

export interface VocabularyUpdate extends IUpdate, IObjectUpdate<IVocabularyId> {
    vocabularyId: IVocabularyId;
    description: FieldUpdateValue<string>;
    chosenFromList: FieldUpdateValue<boolean>;
    urlTemplate: FieldUpdateValue<string>;
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
}

export interface IRpcService {
    majorVersion: number;
    minorVersion: number;
}

export interface ExternalDms extends Serializable, ICodeHolder {
    fetchOptions: ExternalDmsFetchOptions;
    permId: ExternalDmsPermId;
    label: string;
    urlTemplate: string;
    address: string;
    openbis: boolean;
    addressType: ExternalDmsAddressType;
}

export interface Serializable {
}

export interface Material extends Serializable, ICodeHolder, IEntityTypeHolder, IMaterialPropertiesHolder, IModificationDateHolder, IPermIdHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ITagsHolder {
    fetchOptions: MaterialFetchOptions;
    permId: MaterialPermId;
    type: MaterialType;
    history: HistoryEntry[];
}

export interface Tag extends Serializable, ICodeHolder, IDataSetsHolder, IDescriptionHolder, IExperimentsHolder, IMaterialsHolder, IOwnerHolder, IPermIdHolder, IRegistrationDateHolder, ISamplesHolder {
    fetchOptions: TagFetchOptions;
    permId: TagPermId;
    private: boolean;
}

export interface HistoryEntry extends Serializable {
    fetchOptions: HistoryEntryFetchOptions;
    validFrom: Date;
    validTo: Date;
    author: Person;
}

export interface Person extends Serializable, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder, ISpaceHolder {
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

export interface ICodeHolder {
    code: string;
}

export interface IEntityTypeHolder {
    type: IEntityType;
}

export interface IExperimentHolder {
    experiment: Experiment;
}

export interface IMaterialPropertiesHolder {
    materialProperties: { [index: string]: Material };
}

export interface IModificationDateHolder {
    modificationDate: Date;
}

export interface IModifierHolder {
    modifier: Person;
}

export interface IPermIdHolder {
    permId: IObjectId;
}

export interface IPropertiesHolder {
    properties: { [index: string]: string };
}

export interface IRegistrationDateHolder {
    registrationDate: Date;
}

export interface IRegistratorHolder {
    registrator: Person;
}

export interface ISampleHolder {
    sample: Sample;
}

export interface ITagsHolder {
    tags: Tag[];
}

export interface EntityTypePermId extends ObjectPermId, IEntityTypeId {
    entityKind: EntityKind;
}

export interface Plugin extends Serializable, IDescriptionHolder, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder {
    fetchOptions: PluginFetchOptions;
    name: string;
    permId: PluginPermId;
    pluginKind: PluginKind;
    entityKinds: EntityKind[];
    pluginType: PluginType;
    script: string;
    available: boolean;
}

export interface IDescriptionHolder {
    description: string;
}

export interface IEntityType extends ICodeHolder, IDescriptionHolder, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder, IValidationPluginHolder {
}

export interface IPropertyAssignmentsHolder {
    propertyAssignments: PropertyAssignment[];
}

export interface IOperation extends Serializable {
    message: string;
}

export interface IOperationResult extends Serializable {
    message: string;
}

export interface IExternalDmsId extends IObjectId {
}

export interface ICreation extends Serializable {
}

export interface IEntityTypeId extends IObjectId {
}

export interface ITagId extends IObjectId {
}

export interface CreationId extends ISampleId, IDataSetId, IExperimentId, IProjectId, ISpaceId, IMaterialId {
    creationId: string;
}

export interface ICreationIdHolder {
    creationId: CreationId;
}

export interface IObjectCreation {
}

export interface IPluginId extends IObjectId {
}

export interface IEntityTypeCreation extends ICreation, IObjectCreation {
    propertyAssignments: PropertyAssignmentCreation[];
    validationPluginId: IPluginId;
    description: string;
    code: string;
}

export interface DeleteObjectsWithoutTrashOperationResult extends DeleteObjectsOperationResult {
}

export interface IDeletionId extends IObjectId {
}

export interface DeleteObjectsWithTrashOperationResult extends DeleteObjectsOperationResult {
    deletionId: IDeletionId;
}

export interface MaterialFetchOptions extends FetchOptions<Material>, Serializable {
    type: MaterialTypeFetchOptions;
    history: HistoryEntryFetchOptions;
    registrator: PersonFetchOptions;
    properties: PropertyFetchOptions;
    materialProperties: MaterialFetchOptions;
    tags: TagFetchOptions;
    sort: MaterialSortOptions;
    sortBy: MaterialSortOptions;
}

export interface TagFetchOptions extends FetchOptions<Tag>, Serializable {
    experiments: ExperimentFetchOptions;
    samples: SampleFetchOptions;
    dataSets: DataSetFetchOptions;
    materials: MaterialFetchOptions;
    owner: PersonFetchOptions;
    sort: TagSortOptions;
    sortBy: TagSortOptions;
}

export interface HistoryEntryFetchOptions extends FetchOptions<HistoryEntry>, Serializable {
    author: PersonFetchOptions;
    sort: HistoryEntrySortOptions;
    sortBy: HistoryEntrySortOptions;
}

export interface PersonFetchOptions extends FetchOptions<Person>, Serializable {
    space: SpaceFetchOptions;
    registrator: PersonFetchOptions;
    roleAssignments: RoleAssignmentFetchOptions;
    webAppSettings: { [index: string]: WebAppSettingsFetchOptions };
    allWebAppSettings: boolean;
    sort: PersonSortOptions;
}

export interface Sorting extends Serializable {
    field: string;
    order: SortOrder;
    parameters: { [P in SortParameter]?: string };
}

export interface SortOrder extends Serializable {
    asc: boolean;
}

export interface PluginFetchOptions extends FetchOptions<Plugin>, Serializable {
    registrator: PersonFetchOptions;
    sort: PluginSortOptions;
    script: EmptyFetchOptions;
    sortBy: PluginSortOptions;
}

export interface ExternalDmsFetchOptions extends FetchOptions<ExternalDms>, Serializable {
    sort: ExternalDmsSortOptions;
    sortBy: ExternalDmsSortOptions;
}

export interface ObjectPermId extends IObjectId {
    permId: string;
}

export interface IObjectId extends Serializable {
}

export interface ISearchCriteria extends Serializable {
    negated: boolean;
}

export interface BooleanFieldSearchCriteria extends AbstractFieldSearchCriteria<boolean> {
    fieldValue: boolean;
}

export interface AbstractEntityTypeSearchCriteria extends AbstractObjectSearchCriteria<IEntityTypeId> {
}

export interface AbstractStringValue extends AbstractValue<string> {
    value: string;
}

export interface StringFieldSearchCriteria extends AbstractFieldSearchCriteria<AbstractStringValue> {
    fieldValue: AbstractStringValue;
    useWildcards: boolean;
}

export interface AbstractCompositeSearchCriteria extends AbstractSearchCriteria {
    criteria: ISearchCriteria[];
    operator: SearchOperator;
}

export interface SearchResult<OBJECT> extends Serializable {
    objects: OBJECT[];
    totalCount: number;
}

export interface AbstractNumberValue extends AbstractValue<number> {
    value: number;
}

export interface NumberFieldSearchCriteria extends AbstractFieldSearchCriteria<AbstractNumberValue> {
    fieldValue: AbstractNumberValue;
}

export interface ListUpdateAction<T> extends Serializable {
    items: T[];
}

export interface FieldUpdateValue<T> extends Serializable {
    isModified: boolean;
    value: T;
}

export interface PropertyAssignmentListUpdateValue extends ListUpdateValue<PropertyAssignmentCreation, IPropertyAssignmentId, PropertyAssignmentCreation, any> {
    actions: ListUpdateAction<any>[];
    forceRemovingAssignments: boolean;
}

export interface ListUpdateMapValues extends ListUpdateValue<{ [index: string]: string }, string, { [index: string]: string }, any> {
    actions: ListUpdateAction<any>[];
}

export interface IEntityTypeUpdate extends IUpdate, IObjectUpdate<IEntityTypeId> {
    typeId: IEntityTypeId;
    propertyAssignments: PropertyAssignmentListUpdateValue;
    validationPluginId: FieldUpdateValue<IPluginId>;
    description: FieldUpdateValue<string>;
    objectId: IEntityTypeId;
}

export interface IMetaDataUpdateHolder extends IUpdate {
    metaData: ListUpdateMapValues;
}

export interface IdListUpdateValue<T> extends ListUpdateValue<T, T, T, T> {
    actions: ListUpdateAction<T>[];
}

export interface IUpdate extends Serializable {
}

export interface Project extends Serializable, IAttachmentsHolder, ICodeHolder, IDescriptionHolder, IExperimentsHolder, IIdentifierHolder, IModificationDateHolder, IModifierHolder, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder, ISpaceHolder {
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

export interface Attachment extends Serializable, IDescriptionHolder, IRegistrationDateHolder, IRegistratorHolder {
    fetchOptions: AttachmentFetchOptions;
    fileName: string;
    title: string;
    permlink: string;
    latestVersionPermlink: string;
    version: number;
    previousVersion: Attachment;
    content: any;
}

export interface IAttachmentsHolder {
    attachments: Attachment[];
}

export interface IDataSetsHolder {
    dataSets: DataSet[];
}

export interface IIdentifierHolder {
    identifier: ObjectIdentifier;
}

export interface IProjectHolder {
    project: Project;
}

export interface ISamplesHolder {
    samples: Sample[];
}

export interface IProjectId extends IObjectId {
}

export interface AttachmentCreation extends ICreation {
    fileName: string;
    title: string;
    description: string;
    content: any;
}

export interface ProjectFetchOptions extends FetchOptions<Project>, Serializable {
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

export interface AttachmentFetchOptions extends FetchOptions<Attachment>, Serializable {
    registrator: PersonFetchOptions;
    previousVersion: AttachmentFetchOptions;
    content: EmptyFetchOptions;
    sort: AttachmentSortOptions;
    sortBy: AttachmentSortOptions;
}

export interface ObjectIdentifier extends IObjectId {
    identifier: string;
}

export interface AttachmentListUpdateValue extends ListUpdateValue<AttachmentCreation, IAttachmentId, AttachmentCreation, any> {
    actions: ListUpdateAction<any>[];
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
}

export interface IPropertyTypeHolder {
    propertyType: PropertyType;
}

export interface ISemanticAnnotationsHolder {
    semanticAnnotations: SemanticAnnotation[];
}

export interface MaterialType extends Serializable, ICodeHolder, IDescriptionHolder, IEntityType, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder {
    fetchOptions: MaterialTypeFetchOptions;
    permId: EntityTypePermId;
}

export interface EntityTypeFetchOptions extends FetchOptions<IEntityType>, Serializable {
    propertyAssignments: PropertyAssignmentFetchOptions;
    sort: EntityTypeSortOptions;
    sortBy: EntityTypeSortOptions;
}

export interface SemanticAnnotationFetchOptions extends FetchOptions<SemanticAnnotation>, Serializable {
    entityType: EntityTypeFetchOptions;
    propertyType: PropertyTypeFetchOptions;
    propertyAssignment: PropertyAssignmentFetchOptions;
    sort: SemanticAnnotationSortOptions;
    sortBy: SemanticAnnotationSortOptions;
}

export interface SortOptions<OBJECT> extends Serializable {
    sortings: Sorting[];
}

export interface EmptyFetchOptions extends FetchOptions<void> {
    sortBy: SortOptions<void>;
}

export interface MaterialTypeFetchOptions extends FetchOptions<MaterialType>, Serializable {
    propertyAssignments: PropertyAssignmentFetchOptions;
    validationPlugin: PluginFetchOptions;
    sort: MaterialTypeSortOptions;
    sortBy: MaterialTypeSortOptions;
}

export interface Space extends Serializable, ICodeHolder, IDescriptionHolder, IModificationDateHolder, IPermIdHolder, IProjectsHolder, IRegistrationDateHolder, IRegistratorHolder, ISamplesHolder {
    fetchOptions: SpaceFetchOptions;
    id: SpaceTechId;
    permId: SpacePermId;
    frozen: boolean;
    frozenForProjects: boolean;
    frozenForSamples: boolean;
}

export interface Relationship extends Serializable {
    childAnnotations: { [index: string]: string };
    parentAnnotations: { [index: string]: string };
}

export interface ISpaceHolder {
    space: Space;
}

export interface IValidationPluginHolder {
    validationPlugin: Plugin;
}

export interface ISpaceId extends IObjectId {
}

export interface SpaceFetchOptions extends FetchOptions<Space>, Serializable {
    registrator: PersonFetchOptions;
    samples: SampleFetchOptions;
    projects: ProjectFetchOptions;
    sort: SpaceSortOptions;
    sortBy: SpaceSortOptions;
}

export interface KeyDeserializer {
}

export interface AbstractSearchCriteria extends ISearchCriteria {
}

export interface RelationshipUpdate extends Serializable {
    childAnnotations: ListUpdateMapValues;
    parentAnnotations: ListUpdateMapValues;
}

export interface SessionInformationFetchOptions extends FetchOptions<SessionInformation>, Serializable {
    person: PersonFetchOptions;
    creatorPerson: PersonFetchOptions;
    sort: SessionInformationSortOptions;
    sortBy: SessionInformationSortOptions;
}

export interface ExternalDmsPermId extends ObjectPermId, IExternalDmsId {
}

export interface MaterialPermId extends IMaterialId {
    code: string;
    typeCode: string;
}

export interface TagPermId extends ObjectPermId, ITagId {
}

export interface IExperimentsHolder {
    experiments: Experiment[];
}

export interface IMaterialsHolder {
    materials: Material[];
}

export interface IOwnerHolder {
    owner: Person;
}

export interface PersonPermId extends ObjectPermId, IPersonId {
}

export interface RoleAssignment extends Serializable, ISpaceHolder, IRegistrationDateHolder, IRegistratorHolder {
    fetchOptions: RoleAssignmentFetchOptions;
    id: IRoleAssignmentId;
    user: Person;
    authorizationGroup: AuthorizationGroup;
    role: Role;
    roleLevel: RoleLevel;
    project: Project;
}

export interface WebAppSettings extends Serializable {
    fetchOptions: WebAppSettingsFetchOptions;
    webAppId: string;
    settings: { [index: string]: WebAppSetting };
}

export interface IParentChildrenHolder<T> {
    children: T[];
    parents: T[];
}

export interface PluginPermId extends ObjectPermId, IPluginId {
}

export interface CreateObjectsOperation<C> extends IOperation {
    creations: C[];
}

export interface CreateObjectsOperationResult<ID> extends IOperationResult {
    objectIds: ID[];
}

export interface IMaterialId extends IObjectId {
}

export interface AbstractObjectDeletionOptions<T> extends Serializable {
    reason: string;
}

export interface DeleteObjectsOperation<ID, OPTIONS> extends IOperation {
    objectIds: ID[];
    options: OPTIONS;
}

export interface DeleteObjectsOperationResult extends IOperationResult {
}

export interface MaterialSortOptions extends EntityWithPropertiesSortOptions<Material> {
}

export interface TagSortOptions extends SortOptions<Tag> {
    registrationDate: SortOrder;
    code: SortOrder;
}

export interface HistoryEntrySortOptions extends SortOptions<HistoryEntry> {
}

export interface RoleAssignmentFetchOptions extends FetchOptions<RoleAssignment>, Serializable {
    registrator: PersonFetchOptions;
    user: PersonFetchOptions;
    authorizationGroup: AuthorizationGroupFetchOptions;
    space: SpaceFetchOptions;
    project: ProjectFetchOptions;
    sort: RoleAssignmentSortOptions;
    sortBy: RoleAssignmentSortOptions;
}

export interface WebAppSettingsFetchOptions extends FetchOptions<WebAppSettings>, Serializable {
    settings: string[];
    allSettings: boolean;
    sort: WebAppSettingsSortOptions;
}

export interface PersonSortOptions extends SortOptions<Person> {
}

export interface FetchOptions<OBJECT> extends Serializable {
    count: number;
    from: number;
    cacheMode: CacheMode;
    sortBy: SortOptions<OBJECT>;
}

export interface EntityWithPropertiesSortOptions<OBJECT> extends EntitySortOptions<OBJECT> {
    type: SortOrder;
    fetchedFieldsScore: SortOrder;
}

export interface PluginSortOptions extends SortOptions<Plugin> {
    name: SortOrder;
}

export interface ExternalDmsSortOptions extends SortOptions<ExternalDms> {
}

export interface GetObjectsOperation<ID, FETCH_OPTIONS> extends IOperation {
    objectIds: ID[];
    fetchOptions: FETCH_OPTIONS;
}

export interface GetObjectsOperationResult<ID, OBJECT> extends IOperationResult {
    ids: ID[];
    objects: OBJECT[];
}

export interface AbstractEntitySearchCriteria<ID> extends AbstractObjectSearchCriteria<ID> {
}

export interface EnumFieldSearchCriteria<T> extends AbstractFieldSearchCriteria<T> {
}

export interface AbstractObjectSearchCriteria<ID> extends AbstractCompositeSearchCriteria {
}

export interface SearchObjectsOperation<CRITERIA, FETCH_OPTIONS> extends IOperation {
    criteria: CRITERIA;
    fetchOptions: FETCH_OPTIONS;
}

export interface SearchObjectsOperationResult<OBJECT> extends IOperationResult {
    searchResult: SearchResult<OBJECT>;
}

export interface ListUpdateValue<ADD, REMOVE, SET, ACTION> extends Serializable {
    actions: ListUpdateAction<ACTION>[];
}

export interface IObjectUpdate<ID> {
    objectId: ID;
}

export interface UpdateObjectsOperation<U> extends IOperation {
    updates: U[];
}

export interface UpdateObjectsOperationResult<ID> extends IOperationResult {
    objectIds: ID[];
}

export interface ProjectPermId extends ObjectPermId, IProjectId {
}

export interface ProjectIdentifier extends ObjectIdentifier, IProjectId {
}

export interface ProjectSortOptions extends EntitySortOptions<Project> {
    identifier: SortOrder;
}

export interface AttachmentSortOptions extends SortOptions<Attachment> {
}

export interface SemanticAnnotationPermId extends ObjectPermId, ISemanticAnnotationId {
}

export interface EntityTypeSortOptions extends SortOptions<IEntityType> {
}

export interface SemanticAnnotationSortOptions extends SortOptions<SemanticAnnotation> {
}

export interface MaterialTypeSortOptions extends SortOptions<MaterialType> {
}

export interface SpaceTechId extends ObjectTechId, ISpaceId {
}

export interface SpacePermId extends ObjectPermId, ISpaceId {
}

export interface IProjectsHolder {
    projects: Project[];
}

export interface SpaceSortOptions extends EntitySortOptions<Space> {
}

export interface SessionInformationSortOptions extends SortOptions<SessionInformation> {
}

export interface IPersonId extends IObjectId {
}

export interface IRoleAssignmentId extends IObjectId {
}

export interface AuthorizationGroup extends Serializable, IPermIdHolder, ICodeHolder, IDescriptionHolder, IRegistrationDateHolder, IRegistratorHolder, IModificationDateHolder {
    fetchOptions: AuthorizationGroupFetchOptions;
    permId: AuthorizationGroupPermId;
    users: Person[];
    roleAssignments: RoleAssignment[];
}

export interface WebAppSetting extends Serializable {
    name: string;
    value: string;
}

export interface AuthorizationGroupFetchOptions extends FetchOptions<AuthorizationGroup>, Serializable {
    registrator: PersonFetchOptions;
    users: PersonFetchOptions;
    roleAssignments: RoleAssignmentFetchOptions;
    sort: AuthorizationGroupSortOptions;
    sortBy: AuthorizationGroupSortOptions;
}

export interface RoleAssignmentSortOptions extends SortOptions<RoleAssignment> {
}

export interface WebAppSettingsSortOptions extends SortOptions<WebAppSettings> {
}

export interface AbstractFieldSearchCriteria<T> extends AbstractSearchCriteria {
    fieldName: string;
    fieldType: SearchFieldType;
    fieldValue: T;
}

export interface AbstractValue<T> extends Serializable {
    value: T;
}

export interface IAttachmentId extends IObjectId {
}

export interface ISemanticAnnotationId extends IObjectId {
}

export interface ObjectTechId extends IObjectId {
    techId: number;
    id: string;
}

export interface AuthorizationGroupPermId extends ObjectPermId, IAuthorizationGroupId, Serializable {
}

export interface AuthorizationGroupSortOptions extends SortOptions<AuthorizationGroup> {
    code: SortOrder;
}

export interface EntitySortOptions<OBJECT> extends SortOptions<OBJECT> {
    permId: SortOrder;
    modificationDate: SortOrder;
    registrationDate: SortOrder;
    code: SortOrder;
}

export interface IAuthorizationGroupId extends IObjectId {
}

export type ArchivingStatus = "AVAILABLE" | "LOCKED" | "ARCHIVED" | "UNARCHIVE_PENDING" | "ARCHIVE_PENDING" | "BACKUP_PENDING";

export type Complete = "YES" | "NO" | "UNKNOWN";

export type DataSetKind = "PHYSICAL" | "CONTAINER" | "LINK";

export type DataSetRelationType = "EXPERIMENT" | "SAMPLE" | "PARENT" | "CHILD" | "CONTAINER" | "COMPONENT";

export type DataSetSearchRelation = "DATASET" | "PARENTS" | "CHILDREN" | "CONTAINER";

export type ExperimentRelationType = "PROJECT" | "SAMPLE" | "DATA_SET";

export type DataType = "INTEGER" | "VARCHAR" | "MULTILINE_VARCHAR" | "REAL" | "TIMESTAMP" | "BOOLEAN" | "CONTROLLEDVOCABULARY" | "MATERIAL" | "HYPERLINK" | "XML" | "SAMPLE" | "DATE" | "JSON" | "ARRAY_INTEGER" | "ARRAY_REAL" | "ARRAY_STRING" | "ARRAY_TIMESTAMP";

export type SampleRelationType = "SPACE" | "PROJECT" | "EXPERIMENT" | "PARENT" | "CHILD" | "CONTAINER" | "COMPONENT" | "DATA_SET";

export type SampleSearchRelation = "SAMPLE" | "PARENTS" | "CHILDREN" | "CONTAINER";

export type CacheMode = "NO_CACHE" | "CACHE" | "RELOAD_AND_CACHE";

export type SearchOperator = "AND" | "OR";

export type SearchFieldType = "PROPERTY" | "ATTRIBUTE" | "ANY_PROPERTY" | "ANY_FIELD";

export type ExternalDmsAddressType = "OPENBIS" | "URL" | "FILE_SYSTEM";

export type EntityKind = "MATERIAL" | "EXPERIMENT" | "SAMPLE" | "DATA_SET";

/**
 * Values:
 * - `JYTHON`
 * - `PREDEPLOYED` - @deprecated
 */
export type PluginKind = "JYTHON" | "PREDEPLOYED";

export type PluginType = "DYNAMIC_PROPERTY" | "MANAGED_PROPERTY" | "ENTITY_VALIDATION";

export type SortParameter = "FULL_MATCH_CODE_BOOST" | "PARTIAL_MATCH_CODE_BOOST" | "FULL_MATCH_TYPE_BOOST" | "FULL_MATCH_PROPERTY_BOOST" | "PARTIAL_MATCH_PROPERTY_BOOST" | "MATCH_VALUE" | "PREFIX_MATCH_VALUE";

export type Role = "DISABLED" | "ADMIN" | "USER" | "POWER_USER" | "OBSERVER" | "ETL_SERVER";

export type RoleLevel = "INSTANCE" | "SPACE" | "PROJECT";
