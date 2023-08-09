/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2023-08-09 15:37:18.

declare module "dto" {

    interface OpenBIS {
        sessionToken: string;
        sessionInformation: SessionInformation;
        sessionActive: boolean;
        serverInformation: { [index: string]: string };
        serverPublicInformation: { [index: string]: string };
    }

    interface IApplicationServerApi extends IRpcService {
        serverPublicInformation: { [index: string]: string };
    }

    interface ContentCopy extends Serializable {
        id: ContentCopyPermId;
        externalDms: ExternalDms;
        externalCode: string;
        path: string;
        gitCommitHash: string;
        gitRepositoryId: string;
    }

    interface DataSet extends Serializable, ICodeHolder, IEntityTypeHolder, IExperimentHolder, IMaterialPropertiesHolder, IModificationDateHolder, IModifierHolder, IParentChildrenHolder<DataSet>, IPermIdHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ISampleHolder, ITagsHolder {
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

    interface DataSetType extends Serializable, ICodeHolder, IDescriptionHolder, IEntityType, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder {
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
    interface FileFormatType extends Serializable, ICodeHolder {
        fetchOptions: FileFormatTypeFetchOptions;
        description: string;
    }

    interface LinkedData extends Serializable {
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

    interface LocatorType extends Serializable, ICodeHolder {
        fetchOptions: LocatorTypeFetchOptions;
        description: string;
    }

    interface PhysicalData extends Serializable {
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

    interface StorageFormat extends Serializable, ICodeHolder {
        fetchOptions: StorageFormatFetchOptions;
        description: string;
    }

    interface ArchiveDataSetsOperation extends IOperation {
        dataSetIds: IDataSetId[];
        options: DataSetArchiveOptions;
    }

    interface ArchiveDataSetsOperationResult extends IOperationResult {
    }

    interface DataSetArchiveOptions extends Serializable {
        removeFromDataStore: boolean;
        options: { [index: string]: string };
    }

    interface ContentCopyCreation extends ICreation {
        externalId: string;
        path: string;
        gitCommitHash: string;
        gitRepositoryId: string;
        externalDmsId: IExternalDmsId;
    }

    interface CreateDataSetTypesOperation extends CreateObjectsOperation<DataSetTypeCreation> {
        creations: DataSetTypeCreation[];
    }

    interface CreateDataSetTypesOperationResult extends CreateObjectsOperationResult<EntityTypePermId> {
        objectIds: EntityTypePermId[];
    }

    interface CreateDataSetsOperation extends CreateObjectsOperation<DataSetCreation> {
        creations: DataSetCreation[];
    }

    interface CreateDataSetsOperationResult extends CreateObjectsOperationResult<DataSetPermId> {
        objectIds: DataSetPermId[];
    }

    interface DataSetCreation extends ICreation, ICreationIdHolder, IObjectCreation, IPropertiesHolder {
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

    interface DataSetTypeCreation extends IEntityTypeCreation {
        mainDataSetPattern: string;
        mainDataSetPath: string;
        disallowDeletion: boolean;
        metaData: { [index: string]: string };
    }

    interface LinkedDataCreation extends ICreation {
        externalCode: string;
        externalDmsId: IExternalDmsId;
        contentCopies: ContentCopyCreation[];
    }

    interface PhysicalDataCreation extends ICreation {
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

    interface DataSetDeletionOptions extends AbstractObjectDeletionOptions<DataSetDeletionOptions> {
    }

    interface DataSetTypeDeletionOptions extends AbstractObjectDeletionOptions<DataSetTypeDeletionOptions> {
    }

    interface DeleteDataSetTypesOperation extends DeleteObjectsOperation<IEntityTypeId, DataSetTypeDeletionOptions> {
        options: DataSetTypeDeletionOptions;
    }

    interface DeleteDataSetTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    }

    interface DeleteDataSetsOperation extends DeleteObjectsOperation<IDataSetId, DataSetDeletionOptions> {
        options: DataSetDeletionOptions;
    }

    interface DeleteDataSetsOperationResult extends DeleteObjectsWithTrashOperationResult {
    }

    interface DataSetFetchOptions extends FetchOptions<DataSet>, Serializable {
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

    interface DataSetSortOptions extends EntityWithPropertiesSortOptions<DataSet> {
    }

    interface DataSetTypeFetchOptions extends FetchOptions<DataSetType>, Serializable {
        propertyAssignments: PropertyAssignmentFetchOptions;
        validationPlugin: PluginFetchOptions;
        sort: DataSetTypeSortOptions;
        sortBy: DataSetTypeSortOptions;
    }

    interface DataSetTypeSortOptions extends SortOptions<DataSetType> {
    }

    /**
     * @deprecated
     */
    interface FileFormatTypeFetchOptions extends FetchOptions<FileFormatType>, Serializable {
        sort: FileFormatTypeSortOptions;
        sortBy: FileFormatTypeSortOptions;
    }

    /**
     * @deprecated
     */
    interface FileFormatTypeSortOptions extends SortOptions<FileFormatType> {
    }

    interface LinkedDataFetchOptions extends FetchOptions<LinkedData>, Serializable {
        externalDms: ExternalDmsFetchOptions;
        sort: LinkedDataSortOptions;
        sortBy: LinkedDataSortOptions;
    }

    interface LinkedDataSortOptions extends SortOptions<LinkedData> {
    }

    interface LocatorTypeFetchOptions extends FetchOptions<LocatorType>, Serializable {
        sort: LocatorTypeSortOptions;
        sortBy: LocatorTypeSortOptions;
    }

    interface LocatorTypeSortOptions extends SortOptions<LocatorType> {
    }

    interface PhysicalDataFetchOptions extends FetchOptions<PhysicalData>, Serializable {
        storageFormat: StorageFormatFetchOptions;
        /**
         * @deprecated
         */
        fileFormatType: FileFormatTypeFetchOptions;
        locatorType: LocatorTypeFetchOptions;
        sort: PhysicalDataSortOptions;
        sortBy: PhysicalDataSortOptions;
    }

    interface PhysicalDataSortOptions extends SortOptions<PhysicalData> {
    }

    interface StorageFormatFetchOptions extends FetchOptions<StorageFormat>, Serializable {
        sort: StorageFormatSortOptions;
        sortBy: StorageFormatSortOptions;
    }

    interface StorageFormatSortOptions extends SortOptions<StorageFormat> {
    }

    interface GetDataSetTypesOperation extends GetObjectsOperation<IEntityTypeId, DataSetTypeFetchOptions> {
        fetchOptions: DataSetTypeFetchOptions;
    }

    interface GetDataSetTypesOperationResult extends GetObjectsOperationResult<IEntityTypeId, DataSetType> {
        ids: IEntityTypeId[];
        objects: DataSetType[];
    }

    interface GetDataSetsOperation extends GetObjectsOperation<IDataSetId, DataSetFetchOptions> {
        fetchOptions: DataSetFetchOptions;
    }

    interface GetDataSetsOperationResult extends GetObjectsOperationResult<IDataSetId, DataSet> {
        ids: IDataSetId[];
        objects: DataSet[];
    }

    interface BdsDirectoryStorageFormatPermId extends StorageFormatPermId {
    }

    interface ContentCopyPermId extends ObjectPermId, IContentCopyId {
    }

    interface DataSetPermId extends ObjectPermId, IDataSetId {
    }

    /**
     * @deprecated
     */
    interface FileFormatTypePermId extends ObjectPermId, IFileFormatTypeId {
    }

    interface IContentCopyId extends IObjectId {
    }

    interface IDataSetId extends IObjectId {
    }

    /**
     * @deprecated
     */
    interface IFileFormatTypeId extends IObjectId {
    }

    interface ILocatorTypeId extends IObjectId {
    }

    interface IStorageFormatId extends IObjectId {
    }

    interface LocatorTypePermId extends ObjectPermId, ILocatorTypeId {
    }

    interface ProprietaryStorageFormatPermId extends StorageFormatPermId {
    }

    interface RelativeLocationLocatorTypePermId extends LocatorTypePermId {
    }

    interface StorageFormatPermId extends ObjectPermId, IStorageFormatId {
    }

    interface DataSetLockOptions extends Serializable {
    }

    interface LockDataSetsOperation extends IOperation {
        dataSetIds: IDataSetId[];
        options: DataSetLockOptions;
    }

    interface LockDataSetsOperationResult extends IOperationResult {
    }

    interface AbstractDataSetSearchCriteria<T> extends AbstractEntitySearchCriteria<IDataSetId> {
        relation: DataSetSearchRelation;
    }

    interface ArchivingRequestedSearchCriteria extends BooleanFieldSearchCriteria {
    }

    interface CompleteSearchCriteria extends EnumFieldSearchCriteria<Complete> {
        fieldValue: Complete;
    }

    interface ContentCopySearchCriteria extends AbstractObjectSearchCriteria<IExternalDmsId> {
    }

    interface DataSetChildrenSearchCriteria extends AbstractDataSetSearchCriteria<DataSetChildrenSearchCriteria> {
    }

    interface DataSetContainerSearchCriteria extends AbstractDataSetSearchCriteria<DataSetContainerSearchCriteria> {
    }

    interface DataSetParentsSearchCriteria extends AbstractDataSetSearchCriteria<DataSetParentsSearchCriteria> {
    }

    interface DataSetSearchCriteria extends AbstractDataSetSearchCriteria<DataSetSearchCriteria> {
    }

    interface DataSetTypeSearchCriteria extends AbstractEntityTypeSearchCriteria {
    }

    interface ExternalCodeSearchCriteria extends StringFieldSearchCriteria {
    }

    interface ExternalDmsSearchCriteria extends AbstractObjectSearchCriteria<IExternalDmsId> {
    }

    /**
     * @deprecated
     */
    interface FileFormatTypeSearchCriteria extends AbstractCompositeSearchCriteria {
    }

    interface GitCommitHashSearchCriteria extends StringFieldSearchCriteria {
    }

    interface GitRepositoryIdSearchCriteria extends StringFieldSearchCriteria {
    }

    interface LinkedDataSearchCriteria extends AbstractCompositeSearchCriteria {
    }

    interface LocationSearchCriteria extends StringFieldSearchCriteria {
    }

    interface LocatorTypeSearchCriteria extends AbstractCompositeSearchCriteria {
    }

    interface PathSearchCriteria extends StringFieldSearchCriteria {
    }

    interface PhysicalDataSearchCriteria extends AbstractCompositeSearchCriteria {
    }

    interface PresentInArchiveSearchCriteria extends BooleanFieldSearchCriteria {
    }

    interface SearchDataSetTypesOperation extends SearchObjectsOperation<DataSetTypeSearchCriteria, DataSetTypeFetchOptions> {
        criteria: DataSetTypeSearchCriteria;
        fetchOptions: DataSetTypeFetchOptions;
    }

    interface SearchDataSetTypesOperationResult extends SearchObjectsOperationResult<DataSetType> {
        searchResult: SearchResult<DataSetType>;
    }

    interface SearchDataSetsOperation extends SearchObjectsOperation<DataSetSearchCriteria, DataSetFetchOptions> {
        criteria: DataSetSearchCriteria;
        fetchOptions: DataSetFetchOptions;
    }

    interface SearchDataSetsOperationResult extends SearchObjectsOperationResult<DataSet> {
        searchResult: SearchResult<DataSet>;
    }

    interface ShareIdSearchCriteria extends StringFieldSearchCriteria {
    }

    interface SizeSearchCriteria extends NumberFieldSearchCriteria {
    }

    interface SpeedHintSearchCriteria extends NumberFieldSearchCriteria {
    }

    interface StatusSearchCriteria extends EnumFieldSearchCriteria<ArchivingStatus> {
        fieldValue: ArchivingStatus;
    }

    interface StorageConfirmationSearchCriteria extends BooleanFieldSearchCriteria {
    }

    interface StorageFormatSearchCriteria extends AbstractCompositeSearchCriteria {
    }

    interface DataSetUnarchiveOptions extends Serializable {
    }

    interface UnarchiveDataSetsOperation extends IOperation {
        dataSetIds: IDataSetId[];
        options: DataSetUnarchiveOptions;
    }

    interface UnarchiveDataSetsOperationResult extends IOperationResult {
    }

    interface DataSetUnlockOptions extends Serializable {
    }

    interface UnlockDataSetsOperation extends IOperation {
        dataSetIds: IDataSetId[];
        options: DataSetUnlockOptions;
    }

    interface UnlockDataSetsOperationResult extends IOperationResult {
    }

    interface ContentCopyListUpdateValue extends ListUpdateValue<ContentCopyCreation, IContentCopyId, ContentCopyCreation, any> {
        actions: ListUpdateAction<any>[];
    }

    interface DataSetTypeUpdate extends IEntityTypeUpdate, IMetaDataUpdateHolder {
        mainDataSetPattern: FieldUpdateValue<string>;
        mainDataSetPath: FieldUpdateValue<string>;
        disallowDeletion: FieldUpdateValue<boolean>;
    }

    interface DataSetUpdate extends IUpdate, IObjectUpdate<IDataSetId>, IPropertiesHolder, IMetaDataUpdateHolder {
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

    interface LinkedDataUpdate extends IUpdate {
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

    interface PhysicalDataUpdate extends IUpdate {
        /**
         * @deprecated
         */
        fileFormatTypeId: FieldUpdateValue<IFileFormatTypeId>;
        archivingRequested: FieldUpdateValue<boolean>;
    }

    interface UpdateDataSetTypesOperation extends UpdateObjectsOperation<DataSetTypeUpdate> {
        updates: DataSetTypeUpdate[];
    }

    interface UpdateDataSetTypesOperationResult extends UpdateObjectsOperationResult<EntityTypePermId> {
        objectIds: EntityTypePermId[];
    }

    interface UpdateDataSetsOperation extends UpdateObjectsOperation<DataSetUpdate> {
        updates: DataSetUpdate[];
    }

    interface UpdateDataSetsOperationResult extends UpdateObjectsOperationResult<DataSetPermId> {
        objectIds: DataSetPermId[];
    }

    interface DataStore extends Serializable, ICodeHolder, IModificationDateHolder, IRegistrationDateHolder {
        fetchOptions: DataStoreFetchOptions;
        downloadUrl: string;
        remoteUrl: string;
    }

    interface DataStoreFetchOptions extends FetchOptions<DataStore>, Serializable {
        sort: DataStoreSortOptions;
        sortBy: DataStoreSortOptions;
    }

    interface DataStoreSortOptions extends SortOptions<DataStore> {
    }

    interface DataStorePermId extends ObjectPermId, IDataStoreId {
    }

    interface IDataStoreId extends IObjectId {
    }

    interface DataStoreSearchCriteria extends AbstractObjectSearchCriteria<IDataStoreId> {
    }

    interface SearchDataStoresOperation extends SearchObjectsOperation<DataStoreSearchCriteria, DataStoreFetchOptions> {
        criteria: DataStoreSearchCriteria;
        fetchOptions: DataStoreFetchOptions;
    }

    interface SearchDataStoresOperationResult extends SearchObjectsOperationResult<DataStore> {
        searchResult: SearchResult<DataStore>;
    }

    interface Experiment extends Serializable, IAttachmentsHolder, ICodeHolder, IDataSetsHolder, IEntityTypeHolder, IIdentifierHolder, IMaterialPropertiesHolder, IModificationDateHolder, IModifierHolder, IPermIdHolder, IProjectHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ISamplesHolder, ITagsHolder {
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

    interface ExperimentType extends Serializable, ICodeHolder, IDescriptionHolder, IEntityType, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder {
        fetchOptions: ExperimentTypeFetchOptions;
        permId: EntityTypePermId;
        metaData: { [index: string]: string };
    }

    interface CreateExperimentTypesOperation extends CreateObjectsOperation<ExperimentTypeCreation> {
        creations: ExperimentTypeCreation[];
    }

    interface CreateExperimentTypesOperationResult extends CreateObjectsOperationResult<EntityTypePermId> {
        objectIds: EntityTypePermId[];
    }

    interface CreateExperimentsOperation extends CreateObjectsOperation<ExperimentCreation> {
        creations: ExperimentCreation[];
    }

    interface CreateExperimentsOperationResult extends CreateObjectsOperationResult<ExperimentPermId> {
        objectIds: ExperimentPermId[];
    }

    interface ExperimentCreation extends ICreation, IObjectCreation, ICreationIdHolder, IPropertiesHolder {
        typeId: IEntityTypeId;
        projectId: IProjectId;
        code: string;
        tagIds: ITagId[];
        attachments: AttachmentCreation[];
        metaData: { [index: string]: string };
    }

    interface ExperimentTypeCreation extends IEntityTypeCreation {
        metaData: { [index: string]: string };
    }

    interface DeleteExperimentTypesOperation extends DeleteObjectsOperation<IEntityTypeId, ExperimentTypeDeletionOptions> {
        options: ExperimentTypeDeletionOptions;
    }

    interface DeleteExperimentTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    }

    interface DeleteExperimentsOperation extends DeleteObjectsOperation<IExperimentId, ExperimentDeletionOptions> {
        options: ExperimentDeletionOptions;
    }

    interface DeleteExperimentsOperationResult extends DeleteObjectsWithTrashOperationResult {
    }

    interface ExperimentDeletionOptions extends AbstractObjectDeletionOptions<ExperimentDeletionOptions> {
    }

    interface ExperimentTypeDeletionOptions extends AbstractObjectDeletionOptions<ExperimentTypeDeletionOptions> {
    }

    interface ExperimentFetchOptions extends FetchOptions<Experiment>, Serializable {
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

    interface ExperimentSortOptions extends EntityWithPropertiesSortOptions<Experiment> {
        identifier: SortOrder;
    }

    interface ExperimentTypeFetchOptions extends FetchOptions<ExperimentType>, Serializable {
        propertyAssignments: PropertyAssignmentFetchOptions;
        validationPlugin: PluginFetchOptions;
        sort: ExperimentTypeSortOptions;
        sortBy: ExperimentTypeSortOptions;
    }

    interface ExperimentTypeSortOptions extends SortOptions<ExperimentType> {
    }

    interface GetExperimentTypesOperation extends GetObjectsOperation<IEntityTypeId, ExperimentTypeFetchOptions> {
        fetchOptions: ExperimentTypeFetchOptions;
    }

    interface GetExperimentTypesOperationResult extends GetObjectsOperationResult<IEntityTypeId, ExperimentType> {
        ids: IEntityTypeId[];
        objects: ExperimentType[];
    }

    interface GetExperimentsOperation extends GetObjectsOperation<IExperimentId, ExperimentFetchOptions> {
        fetchOptions: ExperimentFetchOptions;
    }

    interface GetExperimentsOperationResult extends GetObjectsOperationResult<IExperimentId, Experiment> {
        ids: IExperimentId[];
        objects: Experiment[];
    }

    interface ExperimentIdentifier extends ObjectIdentifier, IExperimentId {
    }

    interface ExperimentPermId extends ObjectPermId, IExperimentId {
    }

    interface IExperimentId extends IObjectId {
    }

    interface ExperimentSearchCriteria extends AbstractEntitySearchCriteria<IExperimentId> {
    }

    interface ExperimentTypeSearchCriteria extends AbstractEntityTypeSearchCriteria {
    }

    interface NoExperimentSearchCriteria extends ISearchCriteria {
    }

    interface SearchExperimentTypesOperation extends SearchObjectsOperation<ExperimentTypeSearchCriteria, ExperimentTypeFetchOptions> {
        criteria: ExperimentTypeSearchCriteria;
        fetchOptions: ExperimentTypeFetchOptions;
    }

    interface SearchExperimentTypesOperationResult extends SearchObjectsOperationResult<ExperimentType> {
        searchResult: SearchResult<ExperimentType>;
    }

    interface SearchExperimentsOperation extends SearchObjectsOperation<ExperimentSearchCriteria, ExperimentFetchOptions> {
        criteria: ExperimentSearchCriteria;
        fetchOptions: ExperimentFetchOptions;
    }

    interface SearchExperimentsOperationResult extends SearchObjectsOperationResult<Experiment> {
        searchResult: SearchResult<Experiment>;
    }

    interface ExperimentTypeUpdate extends IEntityTypeUpdate, IMetaDataUpdateHolder {
    }

    interface ExperimentUpdate extends IUpdate, IObjectUpdate<IExperimentId>, IPropertiesHolder, IMetaDataUpdateHolder {
        experimentId: IExperimentId;
        freeze: boolean;
        freezeForDataSets: boolean;
        freezeForSamples: boolean;
        projectId: FieldUpdateValue<IProjectId>;
        tagIds: IdListUpdateValue<ITagId>;
        attachments: AttachmentListUpdateValue;
    }

    interface UpdateExperimentTypesOperation extends UpdateObjectsOperation<ExperimentTypeUpdate> {
        updates: ExperimentTypeUpdate[];
    }

    interface UpdateExperimentTypesOperationResult extends UpdateObjectsOperationResult<EntityTypePermId> {
        objectIds: EntityTypePermId[];
    }

    interface UpdateExperimentsOperation extends UpdateObjectsOperation<ExperimentUpdate> {
        updates: ExperimentUpdate[];
    }

    interface UpdateExperimentsOperationResult extends UpdateObjectsOperationResult<ExperimentPermId> {
        objectIds: ExperimentPermId[];
    }

    interface PropertyAssignment extends Serializable, IPermIdHolder, IPropertyTypeHolder, IRegistrationDateHolder, IRegistratorHolder, ISemanticAnnotationsHolder {
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

    interface PropertyType extends Serializable, ICodeHolder, IDescriptionHolder, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder, ISemanticAnnotationsHolder {
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

    interface CreatePropertyTypesOperation extends CreateObjectsOperation<PropertyTypeCreation> {
        creations: PropertyTypeCreation[];
    }

    interface CreatePropertyTypesOperationResult extends CreateObjectsOperationResult<PropertyTypePermId> {
        objectIds: PropertyTypePermId[];
    }

    interface PropertyAssignmentCreation extends ICreation {
        section: string;
        ordinal: number;
        propertyTypeId: IPropertyTypeId;
        pluginId: IPluginId;
        mandatory: boolean;
        initialValueForExistingEntities: string;
        showInEditView: boolean;
        showRawValueInForms: boolean;
    }

    interface PropertyTypeCreation extends ICreation, IObjectCreation {
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

    interface DeletePropertyTypesOperation extends DeleteObjectsOperation<IPropertyTypeId, PropertyTypeDeletionOptions> {
        options: PropertyTypeDeletionOptions;
    }

    interface DeletePropertyTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    }

    interface PropertyTypeDeletionOptions extends AbstractObjectDeletionOptions<PropertyTypeDeletionOptions> {
    }

    interface PropertyAssignmentFetchOptions extends FetchOptions<PropertyAssignment>, Serializable {
        entityType: EntityTypeFetchOptions;
        propertyType: PropertyTypeFetchOptions;
        semanticAnnotations: SemanticAnnotationFetchOptions;
        registrator: PersonFetchOptions;
        sort: PropertyAssignmentSortOptions;
        plugin: PluginFetchOptions;
        sortBy: PropertyAssignmentSortOptions;
    }

    interface PropertyAssignmentSortOptions extends SortOptions<PropertyAssignment> {
        ordinal: SortOrder;
        label: SortOrder;
        code: SortOrder;
    }

    interface PropertyFetchOptions extends EmptyFetchOptions {
    }

    interface PropertyTypeFetchOptions extends FetchOptions<PropertyType>, Serializable {
        vocabulary: VocabularyFetchOptions;
        materialType: MaterialTypeFetchOptions;
        sampleType: SampleTypeFetchOptions;
        semanticAnnotations: SemanticAnnotationFetchOptions;
        registrator: PersonFetchOptions;
        sort: PropertyTypeSortOptions;
        sortBy: PropertyTypeSortOptions;
    }

    interface PropertyTypeSortOptions extends SortOptions<PropertyType> {
        code: SortOrder;
    }

    interface GetPropertyTypesOperation extends GetObjectsOperation<IPropertyTypeId, PropertyTypeFetchOptions> {
        fetchOptions: PropertyTypeFetchOptions;
    }

    interface GetPropertyTypesOperationResult extends GetObjectsOperationResult<IPropertyTypeId, PropertyType> {
        ids: IPropertyTypeId[];
        objects: PropertyType[];
    }

    interface IPropertyAssignmentId extends IObjectId {
    }

    interface IPropertyTypeId extends IObjectId {
    }

    interface PropertyAssignmentPermId extends IPropertyAssignmentId {
        entityTypeId: IEntityTypeId;
        propertyTypeId: IPropertyTypeId;
    }

    interface PropertyTypePermId extends ObjectPermId, IPropertyTypeId {
    }

    interface PropertyAssignmentSearchCriteria extends AbstractObjectSearchCriteria<IPropertyAssignmentId> {
    }

    interface PropertyTypeSearchCriteria extends AbstractObjectSearchCriteria<IPropertyTypeId> {
    }

    interface SearchPropertyAssignmentsOperation extends SearchObjectsOperation<PropertyAssignmentSearchCriteria, PropertyAssignmentFetchOptions> {
        criteria: PropertyAssignmentSearchCriteria;
        fetchOptions: PropertyAssignmentFetchOptions;
    }

    interface SearchPropertyAssignmentsOperationResult extends SearchObjectsOperationResult<PropertyAssignment> {
        searchResult: SearchResult<PropertyAssignment>;
    }

    interface SearchPropertyTypesOperation extends SearchObjectsOperation<PropertyTypeSearchCriteria, PropertyTypeFetchOptions> {
        criteria: PropertyTypeSearchCriteria;
        fetchOptions: PropertyTypeFetchOptions;
    }

    interface SearchPropertyTypesOperationResult extends SearchObjectsOperationResult<PropertyType> {
        searchResult: SearchResult<PropertyType>;
    }

    interface PropertyTypeUpdate extends IUpdate, IObjectUpdate<IPropertyTypeId> {
        typeId: IPropertyTypeId;
        dataType: DataType;
        label: FieldUpdateValue<string>;
        description: FieldUpdateValue<string>;
        schema: FieldUpdateValue<string>;
        transformation: FieldUpdateValue<string>;
        metaData: ListUpdateMapValues;
    }

    interface UpdatePropertyTypesOperation extends UpdateObjectsOperation<PropertyTypeUpdate> {
        updates: PropertyTypeUpdate[];
    }

    interface UpdatePropertyTypesOperationResult extends UpdateObjectsOperationResult<PropertyTypePermId> {
        objectIds: PropertyTypePermId[];
    }

    interface Sample extends Serializable, IAttachmentsHolder, ICodeHolder, IDataSetsHolder, IEntityTypeHolder, IExperimentHolder, IIdentifierHolder, IMaterialPropertiesHolder, IModificationDateHolder, IModifierHolder, IParentChildrenHolder<Sample>, IPermIdHolder, IProjectHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ISpaceHolder, ITagsHolder {
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

    interface SampleType extends Serializable, ICodeHolder, IDescriptionHolder, IEntityType, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder, ISemanticAnnotationsHolder, IValidationPluginHolder {
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

    interface CreateSampleTypesOperation extends CreateObjectsOperation<SampleTypeCreation> {
        creations: SampleTypeCreation[];
    }

    interface CreateSampleTypesOperationResult extends CreateObjectsOperationResult<EntityTypePermId> {
        objectIds: EntityTypePermId[];
    }

    interface CreateSamplesOperation extends CreateObjectsOperation<SampleCreation> {
        creations: SampleCreation[];
    }

    interface CreateSamplesOperationResult extends CreateObjectsOperationResult<SamplePermId> {
        objectIds: SamplePermId[];
    }

    interface SampleCreation extends ICreation, ICreationIdHolder, IPropertiesHolder, IObjectCreation {
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

    interface SampleTypeCreation extends IEntityTypeCreation {
        autoGeneratedCode: boolean;
        generatedCodePrefix: string;
        subcodeUnique: boolean;
        listable: boolean;
        showContainer: boolean;
        showParents: boolean;
        showParentMetadata: boolean;
        metaData: { [index: string]: string };
    }

    interface DeleteSampleTypesOperation extends DeleteObjectsOperation<IEntityTypeId, SampleTypeDeletionOptions> {
        options: SampleTypeDeletionOptions;
    }

    interface DeleteSampleTypesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    }

    interface DeleteSamplesOperation extends DeleteObjectsOperation<ISampleId, SampleDeletionOptions> {
        options: SampleDeletionOptions;
    }

    interface DeleteSamplesOperationResult extends DeleteObjectsWithTrashOperationResult {
    }

    interface SampleDeletionOptions extends AbstractObjectDeletionOptions<SampleDeletionOptions> {
    }

    interface SampleTypeDeletionOptions extends AbstractObjectDeletionOptions<SampleTypeDeletionOptions> {
    }

    interface SampleFetchOptions extends FetchOptions<Sample>, Serializable {
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

    interface SampleSortOptions extends EntityWithPropertiesSortOptions<Sample> {
        identifier: SortOrder;
    }

    interface SampleTypeFetchOptions extends FetchOptions<SampleType>, Serializable {
        propertyAssignments: PropertyAssignmentFetchOptions;
        semanticAnnotations: SemanticAnnotationFetchOptions;
        validationPlugin: PluginFetchOptions;
        sort: SampleTypeSortOptions;
        sortBy: SampleTypeSortOptions;
    }

    interface SampleTypeSortOptions extends SortOptions<SampleType> {
    }

    interface GetSampleTypesOperation extends GetObjectsOperation<IEntityTypeId, SampleTypeFetchOptions> {
        fetchOptions: SampleTypeFetchOptions;
    }

    interface GetSampleTypesOperationResult extends GetObjectsOperationResult<IEntityTypeId, SampleType> {
        ids: IEntityTypeId[];
        objects: SampleType[];
    }

    interface GetSamplesOperation extends GetObjectsOperation<ISampleId, SampleFetchOptions> {
        fetchOptions: SampleFetchOptions;
    }

    interface GetSamplesOperationResult extends GetObjectsOperationResult<ISampleId, Sample> {
        ids: ISampleId[];
        objects: Sample[];
    }

    interface ISampleId extends IObjectId {
    }

    interface SampleIdDeserializer extends KeyDeserializer {
    }

    interface SampleIdentifier extends ObjectIdentifier, ISampleId {
    }

    interface SamplePermId extends ObjectPermId, ISampleId {
    }

    interface AbstractSampleSearchCriteria<T> extends AbstractEntitySearchCriteria<ISampleId> {
        relation: SampleSearchRelation;
    }

    interface ListableSampleTypeSearchCriteria extends AbstractSearchCriteria {
        listable: boolean;
    }

    interface NoSampleContainerSearchCriteria extends NoSampleSearchCriteria {
    }

    interface NoSampleSearchCriteria extends ISearchCriteria {
    }

    interface SampleChildrenSearchCriteria extends AbstractSampleSearchCriteria<SampleChildrenSearchCriteria> {
    }

    interface SampleContainerSearchCriteria extends AbstractSampleSearchCriteria<SampleContainerSearchCriteria> {
    }

    interface SampleParentsSearchCriteria extends AbstractSampleSearchCriteria<SampleParentsSearchCriteria> {
    }

    interface SampleSearchCriteria extends AbstractSampleSearchCriteria<SampleSearchCriteria> {
    }

    interface SampleTypeSearchCriteria extends AbstractEntityTypeSearchCriteria {
    }

    interface SearchSampleTypesOperation extends SearchObjectsOperation<SampleTypeSearchCriteria, SampleTypeFetchOptions> {
        criteria: SampleTypeSearchCriteria;
        fetchOptions: SampleTypeFetchOptions;
    }

    interface SearchSampleTypesOperationResult extends SearchObjectsOperationResult<SampleType> {
        searchResult: SearchResult<SampleType>;
    }

    interface SearchSamplesOperation extends SearchObjectsOperation<SampleSearchCriteria, SampleFetchOptions> {
        criteria: SampleSearchCriteria;
        fetchOptions: SampleFetchOptions;
    }

    interface SearchSamplesOperationResult extends SearchObjectsOperationResult<Sample> {
        searchResult: SearchResult<Sample>;
    }

    interface SampleTypeUpdate extends IEntityTypeUpdate, IMetaDataUpdateHolder {
        autoGeneratedCode: FieldUpdateValue<boolean>;
        generatedCodePrefix: FieldUpdateValue<string>;
        subcodeUnique: FieldUpdateValue<boolean>;
        listable: FieldUpdateValue<boolean>;
        showContainer: FieldUpdateValue<boolean>;
        showParents: FieldUpdateValue<boolean>;
        showParentMetadata: FieldUpdateValue<boolean>;
    }

    interface SampleUpdate extends IUpdate, IPropertiesHolder, IObjectUpdate<ISampleId>, IMetaDataUpdateHolder {
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

    interface UpdateSampleTypesOperation extends UpdateObjectsOperation<SampleTypeUpdate> {
        updates: SampleTypeUpdate[];
    }

    interface UpdateSampleTypesOperationResult extends UpdateObjectsOperationResult<EntityTypePermId> {
        objectIds: EntityTypePermId[];
    }

    interface UpdateSamplesOperation extends UpdateObjectsOperation<SampleUpdate> {
        updates: SampleUpdate[];
    }

    interface UpdateSamplesOperationResult extends UpdateObjectsOperationResult<SamplePermId> {
        objectIds: SamplePermId[];
    }

    interface Vocabulary extends Serializable, ICodeHolder, IDescriptionHolder, IModificationDateHolder, IRegistrationDateHolder, IRegistratorHolder {
        fetchOptions: VocabularyFetchOptions;
        managedInternally: boolean;
        chosenFromList: boolean;
        urlTemplate: string;
        terms: VocabularyTerm[];
    }

    interface VocabularyTerm extends Serializable, ICodeHolder, IDescriptionHolder, IModificationDateHolder, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder {
        fetchOptions: VocabularyTermFetchOptions;
        permId: VocabularyTermPermId;
        label: string;
        ordinal: number;
        official: boolean;
        vocabulary: Vocabulary;
    }

    interface CreateVocabulariesOperation extends CreateObjectsOperation<VocabularyCreation> {
        creations: VocabularyCreation[];
    }

    interface CreateVocabulariesOperationResult extends CreateObjectsOperationResult<VocabularyPermId> {
        objectIds: VocabularyPermId[];
    }

    interface CreateVocabularyTermsOperation extends CreateObjectsOperation<VocabularyTermCreation> {
        creations: VocabularyTermCreation[];
    }

    interface CreateVocabularyTermsOperationResult extends CreateObjectsOperationResult<VocabularyTermPermId> {
        objectIds: VocabularyTermPermId[];
    }

    interface VocabularyCreation extends ICreation, IObjectCreation {
        code: string;
        description: string;
        managedInternally: boolean;
        chosenFromList: boolean;
        urlTemplate: string;
        terms: VocabularyTermCreation[];
    }

    interface VocabularyTermCreation extends ICreation, IObjectCreation {
        vocabularyId: IVocabularyId;
        code: string;
        label: string;
        description: string;
        official: boolean;
        previousTermId: IVocabularyTermId;
    }

    interface DeleteVocabulariesOperation extends DeleteObjectsOperation<IVocabularyId, VocabularyDeletionOptions> {
        options: VocabularyDeletionOptions;
    }

    interface DeleteVocabulariesOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    }

    interface DeleteVocabularyTermsOperation extends DeleteObjectsOperation<IVocabularyTermId, VocabularyTermDeletionOptions> {
        options: VocabularyTermDeletionOptions;
    }

    interface DeleteVocabularyTermsOperationResult extends DeleteObjectsWithoutTrashOperationResult {
    }

    interface VocabularyDeletionOptions extends AbstractObjectDeletionOptions<VocabularyDeletionOptions> {
    }

    interface VocabularyTermDeletionOptions extends AbstractObjectDeletionOptions<VocabularyTermDeletionOptions> {
        replacements: VocabularyTermReplacement[];
    }

    interface VocabularyTermReplacement extends Serializable {
        replacedId: IVocabularyTermId;
        replacementId: IVocabularyTermId;
    }

    interface VocabularyFetchOptions extends FetchOptions<Vocabulary>, Serializable {
        registrator: PersonFetchOptions;
        terms: VocabularyTermFetchOptions;
        sort: VocabularySortOptions;
        sortBy: VocabularySortOptions;
    }

    interface VocabularySortOptions extends SortOptions<Vocabulary> {
        code: SortOrder;
    }

    interface VocabularyTermFetchOptions extends FetchOptions<VocabularyTerm>, Serializable {
        vocabulary: VocabularyFetchOptions;
        registrator: PersonFetchOptions;
        sort: VocabularyTermSortOptions;
        sortBy: VocabularyTermSortOptions;
    }

    interface VocabularyTermSortOptions extends SortOptions<VocabularyTerm> {
        ordinal: SortOrder;
        code: SortOrder;
    }

    interface GetVocabulariesOperation extends GetObjectsOperation<IVocabularyId, VocabularyFetchOptions> {
        fetchOptions: VocabularyFetchOptions;
    }

    interface GetVocabulariesOperationResult extends GetObjectsOperationResult<IVocabularyId, Vocabulary> {
        ids: IVocabularyId[];
        objects: Vocabulary[];
    }

    interface GetVocabularyTermsOperation extends GetObjectsOperation<IVocabularyTermId, VocabularyTermFetchOptions> {
        fetchOptions: VocabularyTermFetchOptions;
    }

    interface GetVocabularyTermsOperationResult extends GetObjectsOperationResult<IVocabularyTermId, VocabularyTerm> {
        ids: IVocabularyTermId[];
        objects: VocabularyTerm[];
    }

    interface IVocabularyId extends IObjectId {
    }

    interface IVocabularyTermId extends IObjectId {
    }

    interface VocabularyPermId extends ObjectPermId, IVocabularyId {
    }

    interface VocabularyTermPermId extends IVocabularyTermId, Serializable {
        code: string;
        vocabularyCode: string;
    }

    interface SearchVocabulariesOperation extends SearchObjectsOperation<VocabularySearchCriteria, VocabularyFetchOptions> {
        criteria: VocabularySearchCriteria;
        fetchOptions: VocabularyFetchOptions;
    }

    interface SearchVocabulariesOperationResult extends SearchObjectsOperationResult<Vocabulary> {
        searchResult: SearchResult<Vocabulary>;
    }

    interface SearchVocabularyTermsOperation extends SearchObjectsOperation<VocabularyTermSearchCriteria, VocabularyTermFetchOptions> {
        criteria: VocabularyTermSearchCriteria;
        fetchOptions: VocabularyTermFetchOptions;
    }

    interface SearchVocabularyTermsOperationResult extends SearchObjectsOperationResult<VocabularyTerm> {
        searchResult: SearchResult<VocabularyTerm>;
    }

    interface VocabularySearchCriteria extends AbstractObjectSearchCriteria<IVocabularyId> {
    }

    interface VocabularyTermSearchCriteria extends AbstractObjectSearchCriteria<IVocabularyTermId> {
    }

    interface UpdateVocabulariesOperation extends UpdateObjectsOperation<VocabularyUpdate> {
        updates: VocabularyUpdate[];
    }

    interface UpdateVocabulariesOperationResult extends UpdateObjectsOperationResult<VocabularyPermId> {
        objectIds: VocabularyPermId[];
    }

    interface UpdateVocabularyTermsOperation extends UpdateObjectsOperation<VocabularyTermUpdate> {
        updates: VocabularyTermUpdate[];
    }

    interface UpdateVocabularyTermsOperationResult extends UpdateObjectsOperationResult<VocabularyTermPermId> {
        objectIds: VocabularyTermPermId[];
    }

    interface VocabularyTermUpdate extends IUpdate, IObjectUpdate<IVocabularyTermId> {
        vocabularyTermId: IVocabularyTermId;
        label: FieldUpdateValue<string>;
        description: FieldUpdateValue<string>;
        previousTermId: FieldUpdateValue<IVocabularyTermId>;
        official: FieldUpdateValue<boolean>;
    }

    interface VocabularyUpdate extends IUpdate, IObjectUpdate<IVocabularyId> {
        vocabularyId: IVocabularyId;
        description: FieldUpdateValue<string>;
        chosenFromList: FieldUpdateValue<boolean>;
        urlTemplate: FieldUpdateValue<string>;
    }

    interface SessionInformation extends Serializable {
        fetchOptions: SessionInformationFetchOptions;
        sessionToken: string;
        userName: string;
        homeGroupCode: string;
        personalAccessTokenSession: boolean;
        personalAccessTokenSessionName: string;
        person: Person;
        creatorPerson: Person;
    }

    interface IRpcService {
        majorVersion: number;
        minorVersion: number;
    }

    interface ExternalDms extends Serializable, ICodeHolder {
        fetchOptions: ExternalDmsFetchOptions;
        permId: ExternalDmsPermId;
        label: string;
        urlTemplate: string;
        address: string;
        openbis: boolean;
        addressType: ExternalDmsAddressType;
    }

    interface Serializable {
    }

    interface Material extends Serializable, ICodeHolder, IEntityTypeHolder, IMaterialPropertiesHolder, IModificationDateHolder, IPermIdHolder, IPropertiesHolder, IRegistrationDateHolder, IRegistratorHolder, ITagsHolder {
        fetchOptions: MaterialFetchOptions;
        permId: MaterialPermId;
        type: MaterialType;
        history: HistoryEntry[];
    }

    interface Tag extends Serializable, ICodeHolder, IDataSetsHolder, IDescriptionHolder, IExperimentsHolder, IMaterialsHolder, IOwnerHolder, IPermIdHolder, IRegistrationDateHolder, ISamplesHolder {
        fetchOptions: TagFetchOptions;
        permId: TagPermId;
        private: boolean;
    }

    interface HistoryEntry extends Serializable {
        fetchOptions: HistoryEntryFetchOptions;
        validFrom: Date;
        validTo: Date;
        author: Person;
    }

    interface Person extends Serializable, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder, ISpaceHolder {
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

    interface ICodeHolder {
        code: string;
    }

    interface IEntityTypeHolder {
        type: IEntityType;
    }

    interface IExperimentHolder {
        experiment: Experiment;
    }

    interface IMaterialPropertiesHolder {
        materialProperties: { [index: string]: Material };
    }

    interface IModificationDateHolder {
        modificationDate: Date;
    }

    interface IModifierHolder {
        modifier: Person;
    }

    interface IPermIdHolder {
        permId: IObjectId;
    }

    interface IPropertiesHolder {
        properties: { [index: string]: string };
    }

    interface IRegistrationDateHolder {
        registrationDate: Date;
    }

    interface IRegistratorHolder {
        registrator: Person;
    }

    interface ISampleHolder {
        sample: Sample;
    }

    interface ITagsHolder {
        tags: Tag[];
    }

    interface EntityTypePermId extends ObjectPermId, IEntityTypeId {
        entityKind: EntityKind;
    }

    interface Plugin extends Serializable, IDescriptionHolder, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder {
        fetchOptions: PluginFetchOptions;
        name: string;
        permId: PluginPermId;
        pluginKind: PluginKind;
        entityKinds: EntityKind[];
        pluginType: PluginType;
        script: string;
        available: boolean;
    }

    interface IDescriptionHolder {
        description: string;
    }

    interface IEntityType extends ICodeHolder, IDescriptionHolder, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder, IValidationPluginHolder {
    }

    interface IPropertyAssignmentsHolder {
        propertyAssignments: PropertyAssignment[];
    }

    interface IOperation extends Serializable {
        message: string;
    }

    interface IOperationResult extends Serializable {
        message: string;
    }

    interface IExternalDmsId extends IObjectId {
    }

    interface ICreation extends Serializable {
    }

    interface IEntityTypeId extends IObjectId {
    }

    interface ITagId extends IObjectId {
    }

    interface CreationId extends ISampleId, IDataSetId, IExperimentId, IProjectId, ISpaceId, IMaterialId {
        creationId: string;
    }

    interface ICreationIdHolder {
        creationId: CreationId;
    }

    interface IObjectCreation {
    }

    interface IPluginId extends IObjectId {
    }

    interface IEntityTypeCreation extends ICreation, IObjectCreation {
        description: string;
        code: string;
        propertyAssignments: PropertyAssignmentCreation[];
        validationPluginId: IPluginId;
    }

    interface DeleteObjectsWithoutTrashOperationResult extends DeleteObjectsOperationResult {
    }

    interface IDeletionId extends IObjectId {
    }

    interface DeleteObjectsWithTrashOperationResult extends DeleteObjectsOperationResult {
        deletionId: IDeletionId;
    }

    interface MaterialFetchOptions extends FetchOptions<Material>, Serializable {
        type: MaterialTypeFetchOptions;
        history: HistoryEntryFetchOptions;
        registrator: PersonFetchOptions;
        properties: PropertyFetchOptions;
        materialProperties: MaterialFetchOptions;
        tags: TagFetchOptions;
        sort: MaterialSortOptions;
        sortBy: MaterialSortOptions;
    }

    interface TagFetchOptions extends FetchOptions<Tag>, Serializable {
        experiments: ExperimentFetchOptions;
        samples: SampleFetchOptions;
        dataSets: DataSetFetchOptions;
        materials: MaterialFetchOptions;
        owner: PersonFetchOptions;
        sort: TagSortOptions;
        sortBy: TagSortOptions;
    }

    interface HistoryEntryFetchOptions extends FetchOptions<HistoryEntry>, Serializable {
        author: PersonFetchOptions;
        sort: HistoryEntrySortOptions;
        sortBy: HistoryEntrySortOptions;
    }

    interface PersonFetchOptions extends FetchOptions<Person>, Serializable {
        space: SpaceFetchOptions;
        registrator: PersonFetchOptions;
        roleAssignments: RoleAssignmentFetchOptions;
        webAppSettings: { [index: string]: WebAppSettingsFetchOptions };
        allWebAppSettings: boolean;
        sort: PersonSortOptions;
    }

    interface Sorting extends Serializable {
        field: string;
        order: SortOrder;
        parameters: { [P in SortParameter]?: string };
    }

    interface SortOrder extends Serializable {
        asc: boolean;
    }

    interface PluginFetchOptions extends FetchOptions<Plugin>, Serializable {
        registrator: PersonFetchOptions;
        sort: PluginSortOptions;
        script: EmptyFetchOptions;
        sortBy: PluginSortOptions;
    }

    interface ExternalDmsFetchOptions extends FetchOptions<ExternalDms>, Serializable {
        sort: ExternalDmsSortOptions;
        sortBy: ExternalDmsSortOptions;
    }

    interface ObjectPermId extends IObjectId {
        permId: string;
    }

    interface IObjectId extends Serializable {
    }

    interface ISearchCriteria extends Serializable {
        negated: boolean;
    }

    interface BooleanFieldSearchCriteria extends AbstractFieldSearchCriteria<boolean> {
        fieldValue: boolean;
    }

    interface AbstractEntityTypeSearchCriteria extends AbstractObjectSearchCriteria<IEntityTypeId> {
    }

    interface AbstractStringValue extends AbstractValue<string> {
        value: string;
    }

    interface StringFieldSearchCriteria extends AbstractFieldSearchCriteria<AbstractStringValue> {
        fieldValue: AbstractStringValue;
        useWildcards: boolean;
    }

    interface AbstractCompositeSearchCriteria extends AbstractSearchCriteria {
        criteria: ISearchCriteria[];
        operator: SearchOperator;
    }

    interface SearchResult<OBJECT> extends Serializable {
        objects: OBJECT[];
        totalCount: number;
    }

    interface AbstractNumberValue extends AbstractValue<number> {
        value: number;
    }

    interface NumberFieldSearchCriteria extends AbstractFieldSearchCriteria<AbstractNumberValue> {
        fieldValue: AbstractNumberValue;
    }

    interface ListUpdateAction<T> extends Serializable {
        items: T[];
    }

    interface FieldUpdateValue<T> extends Serializable {
        isModified: boolean;
        value: T;
    }

    interface PropertyAssignmentListUpdateValue extends ListUpdateValue<PropertyAssignmentCreation, IPropertyAssignmentId, PropertyAssignmentCreation, any> {
        actions: ListUpdateAction<any>[];
        forceRemovingAssignments: boolean;
    }

    interface ListUpdateMapValues extends ListUpdateValue<{ [index: string]: string }, string, { [index: string]: string }, any> {
        actions: ListUpdateAction<any>[];
    }

    interface IEntityTypeUpdate extends IUpdate, IObjectUpdate<IEntityTypeId> {
        typeId: IEntityTypeId;
        description: FieldUpdateValue<string>;
        propertyAssignments: PropertyAssignmentListUpdateValue;
        validationPluginId: FieldUpdateValue<IPluginId>;
        objectId: IEntityTypeId;
    }

    interface IMetaDataUpdateHolder extends IUpdate {
        metaData: ListUpdateMapValues;
    }

    interface IdListUpdateValue<T> extends ListUpdateValue<T, T, T, T> {
        actions: ListUpdateAction<T>[];
    }

    interface IUpdate extends Serializable {
    }

    interface Project extends Serializable, IAttachmentsHolder, ICodeHolder, IDescriptionHolder, IExperimentsHolder, IIdentifierHolder, IModificationDateHolder, IModifierHolder, IPermIdHolder, IRegistrationDateHolder, IRegistratorHolder, ISpaceHolder {
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

    interface Attachment extends Serializable, IDescriptionHolder, IRegistrationDateHolder, IRegistratorHolder {
        fetchOptions: AttachmentFetchOptions;
        fileName: string;
        title: string;
        permlink: string;
        latestVersionPermlink: string;
        version: number;
        previousVersion: Attachment;
        content: any;
    }

    interface IAttachmentsHolder {
        attachments: Attachment[];
    }

    interface IDataSetsHolder {
        dataSets: DataSet[];
    }

    interface IIdentifierHolder {
        identifier: ObjectIdentifier;
    }

    interface IProjectHolder {
        project: Project;
    }

    interface ISamplesHolder {
        samples: Sample[];
    }

    interface IProjectId extends IObjectId {
    }

    interface AttachmentCreation extends ICreation {
        fileName: string;
        title: string;
        description: string;
        content: any;
    }

    interface ProjectFetchOptions extends FetchOptions<Project>, Serializable {
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

    interface AttachmentFetchOptions extends FetchOptions<Attachment>, Serializable {
        registrator: PersonFetchOptions;
        previousVersion: AttachmentFetchOptions;
        content: EmptyFetchOptions;
        sort: AttachmentSortOptions;
        sortBy: AttachmentSortOptions;
    }

    interface ObjectIdentifier extends IObjectId {
        identifier: string;
    }

    interface AttachmentListUpdateValue extends ListUpdateValue<AttachmentCreation, IAttachmentId, AttachmentCreation, any> {
        actions: ListUpdateAction<any>[];
    }

    interface SemanticAnnotation extends Serializable, IPermIdHolder {
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

    interface IPropertyTypeHolder {
        propertyType: PropertyType;
    }

    interface ISemanticAnnotationsHolder {
        semanticAnnotations: SemanticAnnotation[];
    }

    interface MaterialType extends Serializable, ICodeHolder, IDescriptionHolder, IEntityType, IModificationDateHolder, IPermIdHolder, IPropertyAssignmentsHolder {
        fetchOptions: MaterialTypeFetchOptions;
        permId: EntityTypePermId;
    }

    interface EntityTypeFetchOptions extends FetchOptions<IEntityType>, Serializable {
        propertyAssignments: PropertyAssignmentFetchOptions;
        sort: EntityTypeSortOptions;
        sortBy: EntityTypeSortOptions;
    }

    interface SemanticAnnotationFetchOptions extends FetchOptions<SemanticAnnotation>, Serializable {
        entityType: EntityTypeFetchOptions;
        propertyType: PropertyTypeFetchOptions;
        propertyAssignment: PropertyAssignmentFetchOptions;
        sort: SemanticAnnotationSortOptions;
        sortBy: SemanticAnnotationSortOptions;
    }

    interface SortOptions<OBJECT> extends Serializable {
        sortings: Sorting[];
    }

    interface EmptyFetchOptions extends FetchOptions<void> {
        sortBy: SortOptions<void>;
    }

    interface MaterialTypeFetchOptions extends FetchOptions<MaterialType>, Serializable {
        propertyAssignments: PropertyAssignmentFetchOptions;
        validationPlugin: PluginFetchOptions;
        sort: MaterialTypeSortOptions;
        sortBy: MaterialTypeSortOptions;
    }

    interface Space extends Serializable, ICodeHolder, IDescriptionHolder, IModificationDateHolder, IPermIdHolder, IProjectsHolder, IRegistrationDateHolder, IRegistratorHolder, ISamplesHolder {
        fetchOptions: SpaceFetchOptions;
        id: SpaceTechId;
        permId: SpacePermId;
        frozen: boolean;
        frozenForProjects: boolean;
        frozenForSamples: boolean;
    }

    interface Relationship extends Serializable {
        childAnnotations: { [index: string]: string };
        parentAnnotations: { [index: string]: string };
    }

    interface ISpaceHolder {
        space: Space;
    }

    interface IValidationPluginHolder {
        validationPlugin: Plugin;
    }

    interface ISpaceId extends IObjectId {
    }

    interface SpaceFetchOptions extends FetchOptions<Space>, Serializable {
        registrator: PersonFetchOptions;
        samples: SampleFetchOptions;
        projects: ProjectFetchOptions;
        sort: SpaceSortOptions;
        sortBy: SpaceSortOptions;
    }

    interface KeyDeserializer {
    }

    interface AbstractSearchCriteria extends ISearchCriteria {
    }

    interface RelationshipUpdate extends Serializable {
        childAnnotations: ListUpdateMapValues;
        parentAnnotations: ListUpdateMapValues;
    }

    interface SessionInformationFetchOptions extends FetchOptions<SessionInformation>, Serializable {
        person: PersonFetchOptions;
        creatorPerson: PersonFetchOptions;
        sort: SessionInformationSortOptions;
        sortBy: SessionInformationSortOptions;
    }

    interface ExternalDmsPermId extends ObjectPermId, IExternalDmsId {
    }

    interface MaterialPermId extends IMaterialId {
        code: string;
        typeCode: string;
    }

    interface TagPermId extends ObjectPermId, ITagId {
    }

    interface IExperimentsHolder {
        experiments: Experiment[];
    }

    interface IMaterialsHolder {
        materials: Material[];
    }

    interface IOwnerHolder {
        owner: Person;
    }

    interface PersonPermId extends ObjectPermId, IPersonId {
    }

    interface RoleAssignment extends Serializable, ISpaceHolder, IRegistrationDateHolder, IRegistratorHolder {
        fetchOptions: RoleAssignmentFetchOptions;
        id: IRoleAssignmentId;
        user: Person;
        authorizationGroup: AuthorizationGroup;
        role: Role;
        roleLevel: RoleLevel;
        project: Project;
    }

    interface WebAppSettings extends Serializable {
        fetchOptions: WebAppSettingsFetchOptions;
        webAppId: string;
        settings: { [index: string]: WebAppSetting };
    }

    interface IParentChildrenHolder<T> {
        children: T[];
        parents: T[];
    }

    interface PluginPermId extends ObjectPermId, IPluginId {
    }

    interface CreateObjectsOperation<C> extends IOperation {
        creations: C[];
    }

    interface CreateObjectsOperationResult<ID> extends IOperationResult {
        objectIds: ID[];
    }

    interface IMaterialId extends IObjectId {
    }

    interface AbstractObjectDeletionOptions<T> extends Serializable {
        reason: string;
    }

    interface DeleteObjectsOperation<ID, OPTIONS> extends IOperation {
        objectIds: ID[];
        options: OPTIONS;
    }

    interface DeleteObjectsOperationResult extends IOperationResult {
    }

    interface MaterialSortOptions extends EntityWithPropertiesSortOptions<Material> {
    }

    interface TagSortOptions extends SortOptions<Tag> {
        code: SortOrder;
        registrationDate: SortOrder;
    }

    interface HistoryEntrySortOptions extends SortOptions<HistoryEntry> {
    }

    interface RoleAssignmentFetchOptions extends FetchOptions<RoleAssignment>, Serializable {
        registrator: PersonFetchOptions;
        user: PersonFetchOptions;
        authorizationGroup: AuthorizationGroupFetchOptions;
        space: SpaceFetchOptions;
        project: ProjectFetchOptions;
        sort: RoleAssignmentSortOptions;
        sortBy: RoleAssignmentSortOptions;
    }

    interface WebAppSettingsFetchOptions extends FetchOptions<WebAppSettings>, Serializable {
        settings: string[];
        allSettings: boolean;
        sort: WebAppSettingsSortOptions;
    }

    interface PersonSortOptions extends SortOptions<Person> {
    }

    interface FetchOptions<OBJECT> extends Serializable {
        count: number;
        from: number;
        cacheMode: CacheMode;
        sortBy: SortOptions<OBJECT>;
    }

    interface EntityWithPropertiesSortOptions<OBJECT> extends EntitySortOptions<OBJECT> {
        type: SortOrder;
        fetchedFieldsScore: SortOrder;
    }

    interface PluginSortOptions extends SortOptions<Plugin> {
        name: SortOrder;
    }

    interface ExternalDmsSortOptions extends SortOptions<ExternalDms> {
    }

    interface GetObjectsOperation<ID, FETCH_OPTIONS> extends IOperation {
        objectIds: ID[];
        fetchOptions: FETCH_OPTIONS;
    }

    interface GetObjectsOperationResult<ID, OBJECT> extends IOperationResult {
        ids: ID[];
        objects: OBJECT[];
    }

    interface AbstractEntitySearchCriteria<ID> extends AbstractObjectSearchCriteria<ID> {
    }

    interface EnumFieldSearchCriteria<T> extends AbstractFieldSearchCriteria<T> {
    }

    interface AbstractObjectSearchCriteria<ID> extends AbstractCompositeSearchCriteria {
    }

    interface SearchObjectsOperation<CRITERIA, FETCH_OPTIONS> extends IOperation {
        criteria: CRITERIA;
        fetchOptions: FETCH_OPTIONS;
    }

    interface SearchObjectsOperationResult<OBJECT> extends IOperationResult {
        searchResult: SearchResult<OBJECT>;
    }

    interface ListUpdateValue<ADD, REMOVE, SET, ACTION> extends Serializable {
        actions: ListUpdateAction<ACTION>[];
    }

    interface IObjectUpdate<ID> {
        objectId: ID;
    }

    interface UpdateObjectsOperation<U> extends IOperation {
        updates: U[];
    }

    interface UpdateObjectsOperationResult<ID> extends IOperationResult {
        objectIds: ID[];
    }

    interface ProjectPermId extends ObjectPermId, IProjectId {
    }

    interface ProjectIdentifier extends ObjectIdentifier, IProjectId {
    }

    interface ProjectSortOptions extends EntitySortOptions<Project> {
        identifier: SortOrder;
    }

    interface AttachmentSortOptions extends SortOptions<Attachment> {
    }

    interface SemanticAnnotationPermId extends ObjectPermId, ISemanticAnnotationId {
    }

    interface EntityTypeSortOptions extends SortOptions<IEntityType> {
    }

    interface SemanticAnnotationSortOptions extends SortOptions<SemanticAnnotation> {
    }

    interface MaterialTypeSortOptions extends SortOptions<MaterialType> {
    }

    interface SpaceTechId extends ObjectTechId, ISpaceId {
    }

    interface SpacePermId extends ObjectPermId, ISpaceId {
    }

    interface IProjectsHolder {
        projects: Project[];
    }

    interface SpaceSortOptions extends EntitySortOptions<Space> {
    }

    interface SessionInformationSortOptions extends SortOptions<SessionInformation> {
    }

    interface IPersonId extends IObjectId {
    }

    interface IRoleAssignmentId extends IObjectId {
    }

    interface AuthorizationGroup extends Serializable, IPermIdHolder, ICodeHolder, IDescriptionHolder, IRegistrationDateHolder, IRegistratorHolder, IModificationDateHolder {
        fetchOptions: AuthorizationGroupFetchOptions;
        permId: AuthorizationGroupPermId;
        users: Person[];
        roleAssignments: RoleAssignment[];
    }

    interface WebAppSetting extends Serializable {
        name: string;
        value: string;
    }

    interface AuthorizationGroupFetchOptions extends FetchOptions<AuthorizationGroup>, Serializable {
        registrator: PersonFetchOptions;
        users: PersonFetchOptions;
        roleAssignments: RoleAssignmentFetchOptions;
        sort: AuthorizationGroupSortOptions;
        sortBy: AuthorizationGroupSortOptions;
    }

    interface RoleAssignmentSortOptions extends SortOptions<RoleAssignment> {
    }

    interface WebAppSettingsSortOptions extends SortOptions<WebAppSettings> {
    }

    interface AbstractFieldSearchCriteria<T> extends AbstractSearchCriteria {
        fieldName: string;
        fieldType: SearchFieldType;
        fieldValue: T;
    }

    interface AbstractValue<T> extends Serializable {
        value: T;
    }

    interface IAttachmentId extends IObjectId {
    }

    interface ISemanticAnnotationId extends IObjectId {
    }

    interface ObjectTechId extends IObjectId {
        techId: number;
        id: string;
    }

    interface AuthorizationGroupPermId extends ObjectPermId, IAuthorizationGroupId, Serializable {
    }

    interface AuthorizationGroupSortOptions extends SortOptions<AuthorizationGroup> {
        code: SortOrder;
    }

    interface EntitySortOptions<OBJECT> extends SortOptions<OBJECT> {
        code: SortOrder;
        modificationDate: SortOrder;
        registrationDate: SortOrder;
        permId: SortOrder;
    }

    interface IAuthorizationGroupId extends IObjectId {
    }

    type ArchivingStatus = "AVAILABLE" | "LOCKED" | "ARCHIVED" | "UNARCHIVE_PENDING" | "ARCHIVE_PENDING" | "BACKUP_PENDING";

    type Complete = "YES" | "NO" | "UNKNOWN";

    type DataSetKind = "PHYSICAL" | "CONTAINER" | "LINK";

    type DataSetRelationType = "EXPERIMENT" | "SAMPLE" | "PARENT" | "CHILD" | "CONTAINER" | "COMPONENT";

    type DataSetSearchRelation = "DATASET" | "PARENTS" | "CHILDREN" | "CONTAINER";

    type ExperimentRelationType = "PROJECT" | "SAMPLE" | "DATA_SET";

    type DataType = "INTEGER" | "VARCHAR" | "MULTILINE_VARCHAR" | "REAL" | "TIMESTAMP" | "BOOLEAN" | "CONTROLLEDVOCABULARY" | "MATERIAL" | "HYPERLINK" | "XML" | "SAMPLE" | "DATE" | "JSON" | "ARRAY_INTEGER" | "ARRAY_REAL" | "ARRAY_STRING" | "ARRAY_TIMESTAMP";

    type SampleRelationType = "SPACE" | "PROJECT" | "EXPERIMENT" | "PARENT" | "CHILD" | "CONTAINER" | "COMPONENT" | "DATA_SET";

    type SampleSearchRelation = "SAMPLE" | "PARENTS" | "CHILDREN" | "CONTAINER";

    type CacheMode = "NO_CACHE" | "CACHE" | "RELOAD_AND_CACHE";

    type SearchOperator = "AND" | "OR";

    type SearchFieldType = "PROPERTY" | "ATTRIBUTE" | "ANY_PROPERTY" | "ANY_FIELD";

    type ExternalDmsAddressType = "OPENBIS" | "URL" | "FILE_SYSTEM";

    type EntityKind = "MATERIAL" | "EXPERIMENT" | "SAMPLE" | "DATA_SET";

    /**
     * Values:
     * - `JYTHON`
     * - `PREDEPLOYED` - @deprecated
     */
    type PluginKind = "JYTHON" | "PREDEPLOYED";

    type PluginType = "DYNAMIC_PROPERTY" | "MANAGED_PROPERTY" | "ENTITY_VALIDATION";

    type SortParameter = "FULL_MATCH_CODE_BOOST" | "PARTIAL_MATCH_CODE_BOOST" | "FULL_MATCH_TYPE_BOOST" | "FULL_MATCH_PROPERTY_BOOST" | "PARTIAL_MATCH_PROPERTY_BOOST" | "MATCH_VALUE" | "PREFIX_MATCH_VALUE";

    type Role = "DISABLED" | "ADMIN" | "USER" | "POWER_USER" | "OBSERVER" | "ETL_SERVER";

    type RoleLevel = "INSTANCE" | "SPACE" | "PROJECT";

}
