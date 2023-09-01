// Auto-generated file
import * as V3API from 'v3api/V3API.esm'
;import {AbstractCompositeSearchCriteria} from '@src/types/openbis';
import {AbstractDateObjectValue} from '@src/types/openbis';
import {AbstractDateValue} from '@src/types/openbis';
import {AbstractEntitySearchCriteria} from '@src/types/openbis';
import {AbstractEntityTypeSearchCriteria} from '@src/types/openbis';
import {AbstractExecutionOptionsWithParameters} from '@src/types/openbis';
import {AbstractFieldSearchCriteria} from '@src/types/openbis';
import {AbstractNumberValue} from '@src/types/openbis';
import {AbstractObjectDeletionOptions} from '@src/types/openbis';
import {AbstractObjectSearchCriteria} from '@src/types/openbis';
import {AbstractOperationExecutionOptions} from '@src/types/openbis';
import {AbstractSearchCriteria} from '@src/types/openbis';
import {AbstractStringValue} from '@src/types/openbis';
import {AbstractTimeZoneValue} from '@src/types/openbis';
import {AbstractValue} from '@src/types/openbis';
import {AddressSearchCriteria} from '@src/types/openbis';
import {AggregationService} from '@src/types/openbis';
import {AggregationServiceExecutionOptions} from '@src/types/openbis';
import {AggregationServiceFetchOptions} from '@src/types/openbis';
import {AggregationServiceSearchCriteria} from '@src/types/openbis';
import {AggregationServiceSortOptions} from '@src/types/openbis';
import {AnyBooleanPropertySearchCriteria} from '@src/types/openbis';
import {AnyDatePropertySearchCriteria} from '@src/types/openbis';
import {AnyFieldSearchCriteria} from '@src/types/openbis';
import {AnyNumberPropertySearchCriteria} from '@src/types/openbis';
import {AnyPropertySearchCriteria} from '@src/types/openbis';
import {AnyStringPropertySearchCriteria} from '@src/types/openbis';
import {AnyStringValue} from '@src/types/openbis';
import {ArchiveDataSetsOperation} from '@src/types/openbis';
import {ArchiveDataSetsOperationResult} from '@src/types/openbis';
import {ArchivingRequestedSearchCriteria} from '@src/types/openbis';
import {ArchivingStatus} from '@src/types/openbis';
import {AsynchronousOperationExecutionOptions} from '@src/types/openbis';
import {AsynchronousOperationExecutionResults} from '@src/types/openbis';
import {Attachment} from '@src/types/openbis';
import {AttachmentCreation} from '@src/types/openbis';
import {AttachmentFetchOptions} from '@src/types/openbis';
import {AttachmentFileName} from '@src/types/openbis';
import {AttachmentListUpdateValue} from '@src/types/openbis';
import {AttachmentSortOptions} from '@src/types/openbis';
import {AuthorizationGroup} from '@src/types/openbis';
import {AuthorizationGroupCreation} from '@src/types/openbis';
import {AuthorizationGroupDeletionOptions} from '@src/types/openbis';
import {AuthorizationGroupFetchOptions} from '@src/types/openbis';
import {AuthorizationGroupPermId} from '@src/types/openbis';
import {AuthorizationGroupSearchCriteria} from '@src/types/openbis';
import {AuthorizationGroupSortOptions} from '@src/types/openbis';
import {AuthorizationGroupUpdate} from '@src/types/openbis';
import {BdsDirectoryStorageFormatPermId} from '@src/types/openbis';
import {BooleanFieldSearchCriteria} from '@src/types/openbis';
import {BooleanPropertySearchCriteria} from '@src/types/openbis';
import {CacheMode} from '@src/types/openbis';
import {CodeSearchCriteria} from '@src/types/openbis';
import {CodesSearchCriteria} from '@src/types/openbis';
import {CollectionFieldSearchCriteria} from '@src/types/openbis';
import {Complete} from '@src/types/openbis';
import {CompleteSearchCriteria} from '@src/types/openbis';
import {ConfirmDeletionsOperation} from '@src/types/openbis';
import {ConfirmDeletionsOperationResult} from '@src/types/openbis';
import {ContentCopy} from '@src/types/openbis';
import {ContentCopyCreation} from '@src/types/openbis';
import {ContentCopyHistoryEntry} from '@src/types/openbis';
import {ContentCopyListUpdateValue} from '@src/types/openbis';
import {ContentCopyPermId} from '@src/types/openbis';
import {ContentCopySearchCriteria} from '@src/types/openbis';
import {ControlledVocabularyPropertySearchCriteria} from '@src/types/openbis';
import {CreateAuthorizationGroupsOperation} from '@src/types/openbis';
import {CreateAuthorizationGroupsOperationResult} from '@src/types/openbis';
import {CreateCodesOperation} from '@src/types/openbis';
import {CreateCodesOperationResult} from '@src/types/openbis';
import {CreateDataSetTypesOperation} from '@src/types/openbis';
import {CreateDataSetTypesOperationResult} from '@src/types/openbis';
import {CreateDataSetsOperation} from '@src/types/openbis';
import {CreateDataSetsOperationResult} from '@src/types/openbis';
import {CreateExperimentTypesOperation} from '@src/types/openbis';
import {CreateExperimentTypesOperationResult} from '@src/types/openbis';
import {CreateExperimentsOperation} from '@src/types/openbis';
import {CreateExperimentsOperationResult} from '@src/types/openbis';
import {CreateExternalDmsOperation} from '@src/types/openbis';
import {CreateExternalDmsOperationResult} from '@src/types/openbis';
import {CreateMaterialTypesOperation} from '@src/types/openbis';
import {CreateMaterialTypesOperationResult} from '@src/types/openbis';
import {CreateMaterialsOperation} from '@src/types/openbis';
import {CreateMaterialsOperationResult} from '@src/types/openbis';
import {CreateObjectsOperation} from '@src/types/openbis';
import {CreateObjectsOperationResult} from '@src/types/openbis';
import {CreatePermIdsOperation} from '@src/types/openbis';
import {CreatePermIdsOperationResult} from '@src/types/openbis';
import {CreatePersonalAccessTokensOperation} from '@src/types/openbis';
import {CreatePersonalAccessTokensOperationResult} from '@src/types/openbis';
import {CreatePersonsOperation} from '@src/types/openbis';
import {CreatePersonsOperationResult} from '@src/types/openbis';
import {CreatePluginsOperation} from '@src/types/openbis';
import {CreatePluginsOperationResult} from '@src/types/openbis';
import {CreateProjectsOperation} from '@src/types/openbis';
import {CreateProjectsOperationResult} from '@src/types/openbis';
import {CreatePropertyTypesOperation} from '@src/types/openbis';
import {CreatePropertyTypesOperationResult} from '@src/types/openbis';
import {CreateQueriesOperation} from '@src/types/openbis';
import {CreateQueriesOperationResult} from '@src/types/openbis';
import {CreateRoleAssignmentsOperation} from '@src/types/openbis';
import {CreateRoleAssignmentsOperationResult} from '@src/types/openbis';
import {CreateSampleTypesOperation} from '@src/types/openbis';
import {CreateSampleTypesOperationResult} from '@src/types/openbis';
import {CreateSamplesOperation} from '@src/types/openbis';
import {CreateSamplesOperationResult} from '@src/types/openbis';
import {CreateSemanticAnnotationsOperation} from '@src/types/openbis';
import {CreateSemanticAnnotationsOperationResult} from '@src/types/openbis';
import {CreateSpacesOperation} from '@src/types/openbis';
import {CreateSpacesOperationResult} from '@src/types/openbis';
import {CreateTagsOperation} from '@src/types/openbis';
import {CreateTagsOperationResult} from '@src/types/openbis';
import {CreateVocabulariesOperation} from '@src/types/openbis';
import {CreateVocabulariesOperationResult} from '@src/types/openbis';
import {CreateVocabularyTermsOperation} from '@src/types/openbis';
import {CreateVocabularyTermsOperationResult} from '@src/types/openbis';
import {CreationId} from '@src/types/openbis';
import {CustomASService} from '@src/types/openbis';
import {CustomASServiceCode} from '@src/types/openbis';
import {CustomASServiceExecutionOptions} from '@src/types/openbis';
import {CustomASServiceFetchOptions} from '@src/types/openbis';
import {CustomASServiceSearchCriteria} from '@src/types/openbis';
import {CustomASServiceSortOptions} from '@src/types/openbis';
import {DataSet} from '@src/types/openbis';
import {DataSetArchiveOptions} from '@src/types/openbis';
import {DataSetCreation} from '@src/types/openbis';
import {DataSetDeletionOptions} from '@src/types/openbis';
import {DataSetFetchOptions} from '@src/types/openbis';
import {DataSetFile} from '@src/types/openbis';
import {DataSetFileCreation} from '@src/types/openbis';
import {DataSetFileFetchOptions} from '@src/types/openbis';
import {DataSetFilePermId} from '@src/types/openbis';
import {DataSetFileSearchCriteria} from '@src/types/openbis';
import {DataSetFileSortOptions} from '@src/types/openbis';
import {DataSetKind} from '@src/types/openbis';
import {DataSetLockOptions} from '@src/types/openbis';
import {DataSetPermId} from '@src/types/openbis';
import {DataSetRelationType} from '@src/types/openbis';
import {DataSetSearchCriteria} from '@src/types/openbis';
import {DataSetSearchRelation} from '@src/types/openbis';
import {DataSetSortOptions} from '@src/types/openbis';
import {DataSetType} from '@src/types/openbis';
import {DataSetTypeCreation} from '@src/types/openbis';
import {DataSetTypeDeletionOptions} from '@src/types/openbis';
import {DataSetTypeFetchOptions} from '@src/types/openbis';
import {DataSetTypeSearchCriteria} from '@src/types/openbis';
import {DataSetTypeSortOptions} from '@src/types/openbis';
import {DataSetTypeUpdate} from '@src/types/openbis';
import {DataSetUnarchiveOptions} from '@src/types/openbis';
import {DataSetUnlockOptions} from '@src/types/openbis';
import {DataSetUpdate} from '@src/types/openbis';
import {DataStore} from '@src/types/openbis';
import {DataStoreFetchOptions} from '@src/types/openbis';
import {DataStorePermId} from '@src/types/openbis';
import {DataStoreSearchCriteria} from '@src/types/openbis';
import {DataStoreSortOptions} from '@src/types/openbis';
import {DataType} from '@src/types/openbis';
import {DatabaseIdSearchCriteria} from '@src/types/openbis';
import {DateEarlierThanOrEqualToValue} from '@src/types/openbis';
import {DateEarlierThanValue} from '@src/types/openbis';
import {DateEqualToValue} from '@src/types/openbis';
import {DateFieldSearchCriteria} from '@src/types/openbis';
import {DateLaterThanOrEqualToValue} from '@src/types/openbis';
import {DateLaterThanValue} from '@src/types/openbis';
import {DateObjectEarlierThanOrEqualToValue} from '@src/types/openbis';
import {DateObjectEarlierThanValue} from '@src/types/openbis';
import {DateObjectEqualToValue} from '@src/types/openbis';
import {DateObjectLaterThanOrEqualToValue} from '@src/types/openbis';
import {DateObjectLaterThanValue} from '@src/types/openbis';
import {DatePropertySearchCriteria} from '@src/types/openbis';
import {DeleteAuthorizationGroupsOperation} from '@src/types/openbis';
import {DeleteAuthorizationGroupsOperationResult} from '@src/types/openbis';
import {DeleteDataSetTypesOperation} from '@src/types/openbis';
import {DeleteDataSetTypesOperationResult} from '@src/types/openbis';
import {DeleteDataSetsOperation} from '@src/types/openbis';
import {DeleteDataSetsOperationResult} from '@src/types/openbis';
import {DeleteExperimentTypesOperation} from '@src/types/openbis';
import {DeleteExperimentTypesOperationResult} from '@src/types/openbis';
import {DeleteExperimentsOperation} from '@src/types/openbis';
import {DeleteExperimentsOperationResult} from '@src/types/openbis';
import {DeleteExternalDmsOperation} from '@src/types/openbis';
import {DeleteExternalDmsOperationResult} from '@src/types/openbis';
import {DeleteMaterialTypesOperation} from '@src/types/openbis';
import {DeleteMaterialTypesOperationResult} from '@src/types/openbis';
import {DeleteMaterialsOperation} from '@src/types/openbis';
import {DeleteMaterialsOperationResult} from '@src/types/openbis';
import {DeleteObjectsOperation} from '@src/types/openbis';
import {DeleteObjectsOperationResult} from '@src/types/openbis';
import {DeleteObjectsWithTrashOperationResult} from '@src/types/openbis';
import {DeleteObjectsWithoutTrashOperationResult} from '@src/types/openbis';
import {DeleteOperationExecutionsOperation} from '@src/types/openbis';
import {DeleteOperationExecutionsOperationResult} from '@src/types/openbis';
import {DeletePersonalAccessTokensOperation} from '@src/types/openbis';
import {DeletePersonalAccessTokensOperationResult} from '@src/types/openbis';
import {DeletePersonsOperation} from '@src/types/openbis';
import {DeletePersonsOperationResult} from '@src/types/openbis';
import {DeletePluginsOperation} from '@src/types/openbis';
import {DeletePluginsOperationResult} from '@src/types/openbis';
import {DeleteProjectsOperation} from '@src/types/openbis';
import {DeleteProjectsOperationResult} from '@src/types/openbis';
import {DeletePropertyTypesOperation} from '@src/types/openbis';
import {DeletePropertyTypesOperationResult} from '@src/types/openbis';
import {DeleteQueriesOperation} from '@src/types/openbis';
import {DeleteQueriesOperationResult} from '@src/types/openbis';
import {DeleteRoleAssignmentsOperation} from '@src/types/openbis';
import {DeleteRoleAssignmentsOperationResult} from '@src/types/openbis';
import {DeleteSampleTypesOperation} from '@src/types/openbis';
import {DeleteSampleTypesOperationResult} from '@src/types/openbis';
import {DeleteSamplesOperation} from '@src/types/openbis';
import {DeleteSamplesOperationResult} from '@src/types/openbis';
import {DeleteSemanticAnnotationsOperation} from '@src/types/openbis';
import {DeleteSemanticAnnotationsOperationResult} from '@src/types/openbis';
import {DeleteSpacesOperation} from '@src/types/openbis';
import {DeleteSpacesOperationResult} from '@src/types/openbis';
import {DeleteTagsOperation} from '@src/types/openbis';
import {DeleteTagsOperationResult} from '@src/types/openbis';
import {DeleteVocabulariesOperation} from '@src/types/openbis';
import {DeleteVocabulariesOperationResult} from '@src/types/openbis';
import {DeleteVocabularyTermsOperation} from '@src/types/openbis';
import {DeleteVocabularyTermsOperationResult} from '@src/types/openbis';
import {DeletedObject} from '@src/types/openbis';
import {DeletedObjectFetchOptions} from '@src/types/openbis';
import {Deletion} from '@src/types/openbis';
import {DeletionFetchOptions} from '@src/types/openbis';
import {DeletionSearchCriteria} from '@src/types/openbis';
import {DeletionSortOptions} from '@src/types/openbis';
import {DeletionTechId} from '@src/types/openbis';
import {DescriptionSearchCriteria} from '@src/types/openbis';
import {DescriptorAccessionIdSearchCriteria} from '@src/types/openbis';
import {DescriptorOntologyIdSearchCriteria} from '@src/types/openbis';
import {DescriptorOntologyVersionSearchCriteria} from '@src/types/openbis';
import {DssServicePermId} from '@src/types/openbis';
import {DynamicPropertyPluginEvaluationOptions} from '@src/types/openbis';
import {DynamicPropertyPluginEvaluationResult} from '@src/types/openbis';
import {EmailSearchCriteria} from '@src/types/openbis';
import {EmptyFetchOptions} from '@src/types/openbis';
import {EntityKind} from '@src/types/openbis';
import {EntityKindSearchCriteria} from '@src/types/openbis';
import {EntitySortOptions} from '@src/types/openbis';
import {EntityType} from '@src/types/openbis';
import {EntityTypeCodePatternSearchCriteria} from '@src/types/openbis';
import {EntityTypeFetchOptions} from '@src/types/openbis';
import {EntityTypePermId} from '@src/types/openbis';
import {EntityTypeSearchCriteria} from '@src/types/openbis';
import {EntityTypeSortOptions} from '@src/types/openbis';
import {EntityValidationPluginEvaluationOptions} from '@src/types/openbis';
import {EntityValidationPluginEvaluationResult} from '@src/types/openbis';
import {EntityWithPropertiesSortOptions} from '@src/types/openbis';
import {Enum} from '@src/types/openbis';
import {EnumFieldSearchCriteria} from '@src/types/openbis';
import {EvaluatePluginOperation} from '@src/types/openbis';
import {EvaluatePluginOperationResult} from '@src/types/openbis';
import {Event} from '@src/types/openbis';
import {EventDescriptionSearchCriteria} from '@src/types/openbis';
import {EventEntityProjectIdSearchCriteria} from '@src/types/openbis';
import {EventEntityProjectSearchCriteria} from '@src/types/openbis';
import {EventEntityRegistrationDateSearchCriteria} from '@src/types/openbis';
import {EventEntityRegistratorSearchCriteria} from '@src/types/openbis';
import {EventEntitySpaceIdSearchCriteria} from '@src/types/openbis';
import {EventEntitySpaceSearchCriteria} from '@src/types/openbis';
import {EventEntityTypeSearchCriteria} from '@src/types/openbis';
import {EventFetchOptions} from '@src/types/openbis';
import {EventIdentifierSearchCriteria} from '@src/types/openbis';
import {EventReasonSearchCriteria} from '@src/types/openbis';
import {EventSearchCriteria} from '@src/types/openbis';
import {EventSortOptions} from '@src/types/openbis';
import {EventTechId} from '@src/types/openbis';
import {EventType} from '@src/types/openbis';
import {EventTypeSearchCriteria} from '@src/types/openbis';
import {ExecuteAggregationServiceOperation} from '@src/types/openbis';
import {ExecuteAggregationServiceOperationResult} from '@src/types/openbis';
import {ExecuteCustomASServiceOperation} from '@src/types/openbis';
import {ExecuteCustomASServiceOperationResult} from '@src/types/openbis';
import {ExecuteProcessingServiceOperation} from '@src/types/openbis';
import {ExecuteProcessingServiceOperationResult} from '@src/types/openbis';
import {ExecuteQueryOperation} from '@src/types/openbis';
import {ExecuteQueryOperationResult} from '@src/types/openbis';
import {ExecuteReportingServiceOperation} from '@src/types/openbis';
import {ExecuteReportingServiceOperationResult} from '@src/types/openbis';
import {ExecuteSearchDomainServiceOperation} from '@src/types/openbis';
import {ExecuteSearchDomainServiceOperationResult} from '@src/types/openbis';
import {ExecuteSqlOperation} from '@src/types/openbis';
import {ExecuteSqlOperationResult} from '@src/types/openbis';
import {Experiment} from '@src/types/openbis';
import {ExperimentCreation} from '@src/types/openbis';
import {ExperimentDeletionOptions} from '@src/types/openbis';
import {ExperimentFetchOptions} from '@src/types/openbis';
import {ExperimentIdentifier} from '@src/types/openbis';
import {ExperimentPermId} from '@src/types/openbis';
import {ExperimentRelationType} from '@src/types/openbis';
import {ExperimentSearchCriteria} from '@src/types/openbis';
import {ExperimentSortOptions} from '@src/types/openbis';
import {ExperimentType} from '@src/types/openbis';
import {ExperimentTypeCreation} from '@src/types/openbis';
import {ExperimentTypeDeletionOptions} from '@src/types/openbis';
import {ExperimentTypeFetchOptions} from '@src/types/openbis';
import {ExperimentTypeSearchCriteria} from '@src/types/openbis';
import {ExperimentTypeSortOptions} from '@src/types/openbis';
import {ExperimentTypeUpdate} from '@src/types/openbis';
import {ExperimentUpdate} from '@src/types/openbis';
import {ExternalCodeSearchCriteria} from '@src/types/openbis';
import {ExternalDms} from '@src/types/openbis';
import {ExternalDmsAddressType} from '@src/types/openbis';
import {ExternalDmsCreation} from '@src/types/openbis';
import {ExternalDmsDeletionOptions} from '@src/types/openbis';
import {ExternalDmsFetchOptions} from '@src/types/openbis';
import {ExternalDmsPermId} from '@src/types/openbis';
import {ExternalDmsSearchCriteria} from '@src/types/openbis';
import {ExternalDmsSortOptions} from '@src/types/openbis';
import {ExternalDmsTypeSearchCriteria} from '@src/types/openbis';
import {ExternalDmsUpdate} from '@src/types/openbis';
import {FastDownloadSession} from '@src/types/openbis';
import {FastDownloadSessionOptions} from '@src/types/openbis';
import {FetchOptions} from '@src/types/openbis';
import {FieldUpdateValue} from '@src/types/openbis';
import {FileFormatType} from '@src/types/openbis';
import {FileFormatTypeFetchOptions} from '@src/types/openbis';
import {FileFormatTypePermId} from '@src/types/openbis';
import {FileFormatTypeSearchCriteria} from '@src/types/openbis';
import {FileFormatTypeSortOptions} from '@src/types/openbis';
import {FirstNameSearchCriteria} from '@src/types/openbis';
import {FullDataSetCreation} from '@src/types/openbis';
import {GetAuthorizationGroupsOperation} from '@src/types/openbis';
import {GetAuthorizationGroupsOperationResult} from '@src/types/openbis';
import {GetDataSetTypesOperation} from '@src/types/openbis';
import {GetDataSetTypesOperationResult} from '@src/types/openbis';
import {GetDataSetsOperation} from '@src/types/openbis';
import {GetDataSetsOperationResult} from '@src/types/openbis';
import {GetExperimentTypesOperation} from '@src/types/openbis';
import {GetExperimentTypesOperationResult} from '@src/types/openbis';
import {GetExperimentsOperation} from '@src/types/openbis';
import {GetExperimentsOperationResult} from '@src/types/openbis';
import {GetExternalDmsOperation} from '@src/types/openbis';
import {GetExternalDmsOperationResult} from '@src/types/openbis';
import {GetMaterialTypesOperation} from '@src/types/openbis';
import {GetMaterialTypesOperationResult} from '@src/types/openbis';
import {GetMaterialsOperation} from '@src/types/openbis';
import {GetMaterialsOperationResult} from '@src/types/openbis';
import {GetObjectsOperation} from '@src/types/openbis';
import {GetObjectsOperationResult} from '@src/types/openbis';
import {GetOperationExecutionsOperation} from '@src/types/openbis';
import {GetOperationExecutionsOperationResult} from '@src/types/openbis';
import {GetPersonalAccessTokensOperation} from '@src/types/openbis';
import {GetPersonalAccessTokensOperationResult} from '@src/types/openbis';
import {GetPersonsOperation} from '@src/types/openbis';
import {GetPersonsOperationResult} from '@src/types/openbis';
import {GetPluginsOperation} from '@src/types/openbis';
import {GetPluginsOperationResult} from '@src/types/openbis';
import {GetProjectsOperation} from '@src/types/openbis';
import {GetProjectsOperationResult} from '@src/types/openbis';
import {GetPropertyTypesOperation} from '@src/types/openbis';
import {GetPropertyTypesOperationResult} from '@src/types/openbis';
import {GetQueriesOperation} from '@src/types/openbis';
import {GetQueriesOperationResult} from '@src/types/openbis';
import {GetQueryDatabasesOperation} from '@src/types/openbis';
import {GetQueryDatabasesOperationResult} from '@src/types/openbis';
import {GetRightsOperation} from '@src/types/openbis';
import {GetRightsOperationResult} from '@src/types/openbis';
import {GetRoleAssignmentsOperation} from '@src/types/openbis';
import {GetRoleAssignmentsOperationResult} from '@src/types/openbis';
import {GetSampleTypesOperation} from '@src/types/openbis';
import {GetSampleTypesOperationResult} from '@src/types/openbis';
import {GetSamplesOperation} from '@src/types/openbis';
import {GetSamplesOperationResult} from '@src/types/openbis';
import {GetSemanticAnnotationsOperation} from '@src/types/openbis';
import {GetSemanticAnnotationsOperationResult} from '@src/types/openbis';
import {GetServerInformationOperation} from '@src/types/openbis';
import {GetServerInformationOperationResult} from '@src/types/openbis';
import {GetServerPublicInformationOperation} from '@src/types/openbis';
import {GetServerPublicInformationOperationResult} from '@src/types/openbis';
import {GetSessionInformationOperation} from '@src/types/openbis';
import {GetSessionInformationOperationResult} from '@src/types/openbis';
import {GetSpacesOperation} from '@src/types/openbis';
import {GetSpacesOperationResult} from '@src/types/openbis';
import {GetTagsOperation} from '@src/types/openbis';
import {GetTagsOperationResult} from '@src/types/openbis';
import {GetVocabulariesOperation} from '@src/types/openbis';
import {GetVocabulariesOperationResult} from '@src/types/openbis';
import {GetVocabularyTermsOperation} from '@src/types/openbis';
import {GetVocabularyTermsOperationResult} from '@src/types/openbis';
import {GitCommitHashSearchCriteria} from '@src/types/openbis';
import {GitRepositoryIdSearchCriteria} from '@src/types/openbis';
import {GlobalSearchCriteria} from '@src/types/openbis';
import {GlobalSearchObject} from '@src/types/openbis';
import {GlobalSearchObjectFetchOptions} from '@src/types/openbis';
import {GlobalSearchObjectKind} from '@src/types/openbis';
import {GlobalSearchObjectKindCriteria} from '@src/types/openbis';
import {GlobalSearchObjectSortOptions} from '@src/types/openbis';
import {GlobalSearchTextCriteria} from '@src/types/openbis';
import {GlobalSearchWildCardsCriteria} from '@src/types/openbis';
import {HistoryEntry} from '@src/types/openbis';
import {HistoryEntryFetchOptions} from '@src/types/openbis';
import {HistoryEntrySortOptions} from '@src/types/openbis';
import {IAttachmentId} from '@src/types/openbis';
import {IAttachmentsHolder} from '@src/types/openbis';
import {IAuthorizationGroupId} from '@src/types/openbis';
import {ICodeHolder} from '@src/types/openbis';
import {IContentCopyId} from '@src/types/openbis';
import {ICreation} from '@src/types/openbis';
import {ICreationIdHolder} from '@src/types/openbis';
import {ICustomASServiceId} from '@src/types/openbis';
import {IDataSetCodesHolder} from '@src/types/openbis';
import {IDataSetFileId} from '@src/types/openbis';
import {IDataSetId} from '@src/types/openbis';
import {IDataSetsHolder} from '@src/types/openbis';
import {IDataStoreId} from '@src/types/openbis';
import {IDate} from '@src/types/openbis';
import {IDateFormat} from '@src/types/openbis';
import {IDeletionId} from '@src/types/openbis';
import {IDescriptionHolder} from '@src/types/openbis';
import {IDssServiceId} from '@src/types/openbis';
import {IEntityType} from '@src/types/openbis';
import {IEntityTypeCreation} from '@src/types/openbis';
import {IEntityTypeHolder} from '@src/types/openbis';
import {IEntityTypeId} from '@src/types/openbis';
import {IEntityTypeUpdate} from '@src/types/openbis';
import {IEventId} from '@src/types/openbis';
import {IExperimentHolder} from '@src/types/openbis';
import {IExperimentId} from '@src/types/openbis';
import {IExperimentsHolder} from '@src/types/openbis';
import {IExternalDmsId} from '@src/types/openbis';
import {IFileFormatTypeId} from '@src/types/openbis';
import {IIdentifierHolder} from '@src/types/openbis';
import {ILabelHolder} from '@src/types/openbis';
import {ILocatorTypeId} from '@src/types/openbis';
import {IMaterialId} from '@src/types/openbis';
import {IMaterialPropertiesHolder} from '@src/types/openbis';
import {IMaterialsHolder} from '@src/types/openbis';
import {IMetaDataUpdateHolder} from '@src/types/openbis';
import {IModificationDateHolder} from '@src/types/openbis';
import {IModifierHolder} from '@src/types/openbis';
import {INameHolder} from '@src/types/openbis';
import {IObjectCreation} from '@src/types/openbis';
import {IObjectId} from '@src/types/openbis';
import {IObjectUpdate} from '@src/types/openbis';
import {IOperation} from '@src/types/openbis';
import {IOperationExecutionError} from '@src/types/openbis';
import {IOperationExecutionId} from '@src/types/openbis';
import {IOperationExecutionNotification} from '@src/types/openbis';
import {IOperationExecutionOptions} from '@src/types/openbis';
import {IOperationExecutionProgress} from '@src/types/openbis';
import {IOperationExecutionResults} from '@src/types/openbis';
import {IOperationResult} from '@src/types/openbis';
import {IOwnerHolder} from '@src/types/openbis';
import {IParentChildrenHolder} from '@src/types/openbis';
import {IPermIdHolder} from '@src/types/openbis';
import {IPersonId} from '@src/types/openbis';
import {IPersonalAccessTokenId} from '@src/types/openbis';
import {IPluginId} from '@src/types/openbis';
import {IProjectHolder} from '@src/types/openbis';
import {IProjectId} from '@src/types/openbis';
import {IProjectsHolder} from '@src/types/openbis';
import {IPropertiesHolder} from '@src/types/openbis';
import {IPropertyAssignmentId} from '@src/types/openbis';
import {IPropertyAssignmentsHolder} from '@src/types/openbis';
import {IPropertyTypeHolder} from '@src/types/openbis';
import {IPropertyTypeId} from '@src/types/openbis';
import {IQueryDatabaseId} from '@src/types/openbis';
import {IQueryId} from '@src/types/openbis';
import {IRegistrationDateHolder} from '@src/types/openbis';
import {IRegistratorHolder} from '@src/types/openbis';
import {IRelationType} from '@src/types/openbis';
import {IRoleAssignmentId} from '@src/types/openbis';
import {ISampleHolder} from '@src/types/openbis';
import {ISampleId} from '@src/types/openbis';
import {ISamplesHolder} from '@src/types/openbis';
import {ISearchCriteria} from '@src/types/openbis';
import {ISemanticAnnotationId} from '@src/types/openbis';
import {ISemanticAnnotationsHolder} from '@src/types/openbis';
import {ISessionInformationId} from '@src/types/openbis';
import {ISpaceHolder} from '@src/types/openbis';
import {ISpaceId} from '@src/types/openbis';
import {IStorageFormatId} from '@src/types/openbis';
import {ITableCell} from '@src/types/openbis';
import {ITagId} from '@src/types/openbis';
import {ITagsHolder} from '@src/types/openbis';
import {ITimeZone} from '@src/types/openbis';
import {IUpdate} from '@src/types/openbis';
import {IValidationPluginHolder} from '@src/types/openbis';
import {IVocabularyId} from '@src/types/openbis';
import {IVocabularyTermId} from '@src/types/openbis';
import {IdListUpdateValue} from '@src/types/openbis';
import {IdSearchCriteria} from '@src/types/openbis';
import {IdentifierSearchCriteria} from '@src/types/openbis';
import {IdsSearchCriteria} from '@src/types/openbis';
import {LabelSearchCriteria} from '@src/types/openbis';
import {LastNameSearchCriteria} from '@src/types/openbis';
import {LinkedData} from '@src/types/openbis';
import {LinkedDataCreation} from '@src/types/openbis';
import {LinkedDataFetchOptions} from '@src/types/openbis';
import {LinkedDataSearchCriteria} from '@src/types/openbis';
import {LinkedDataSortOptions} from '@src/types/openbis';
import {LinkedDataUpdate} from '@src/types/openbis';
import {ListUpdateAction} from '@src/types/openbis';
import {ListUpdateActionAdd} from '@src/types/openbis';
import {ListUpdateActionRemove} from '@src/types/openbis';
import {ListUpdateActionSet} from '@src/types/openbis';
import {ListUpdateMapValues} from '@src/types/openbis';
import {ListUpdateValue} from '@src/types/openbis';
import {ListableSampleTypeSearchCriteria} from '@src/types/openbis';
import {LocationSearchCriteria} from '@src/types/openbis';
import {LocatorType} from '@src/types/openbis';
import {LocatorTypeFetchOptions} from '@src/types/openbis';
import {LocatorTypePermId} from '@src/types/openbis';
import {LocatorTypeSearchCriteria} from '@src/types/openbis';
import {LocatorTypeSortOptions} from '@src/types/openbis';
import {LockDataSetsOperation} from '@src/types/openbis';
import {LockDataSetsOperationResult} from '@src/types/openbis';
import {LongDateFormat} from '@src/types/openbis';
import {MatchFetchOptions} from '@src/types/openbis';
import {Material} from '@src/types/openbis';
import {MaterialCreation} from '@src/types/openbis';
import {MaterialDeletionOptions} from '@src/types/openbis';
import {MaterialFetchOptions} from '@src/types/openbis';
import {MaterialPermId} from '@src/types/openbis';
import {MaterialSearchCriteria} from '@src/types/openbis';
import {MaterialSortOptions} from '@src/types/openbis';
import {MaterialType} from '@src/types/openbis';
import {MaterialTypeCreation} from '@src/types/openbis';
import {MaterialTypeDeletionOptions} from '@src/types/openbis';
import {MaterialTypeFetchOptions} from '@src/types/openbis';
import {MaterialTypeSearchCriteria} from '@src/types/openbis';
import {MaterialTypeSortOptions} from '@src/types/openbis';
import {MaterialTypeUpdate} from '@src/types/openbis';
import {MaterialUpdate} from '@src/types/openbis';
import {Me} from '@src/types/openbis';
import {ModificationDateSearchCriteria} from '@src/types/openbis';
import {ModifierSearchCriteria} from '@src/types/openbis';
import {NameSearchCriteria} from '@src/types/openbis';
import {NoExperimentSearchCriteria} from '@src/types/openbis';
import {NoProjectSearchCriteria} from '@src/types/openbis';
import {NoSampleContainerSearchCriteria} from '@src/types/openbis';
import {NoSampleSearchCriteria} from '@src/types/openbis';
import {NoSpaceSearchCriteria} from '@src/types/openbis';
import {NormalDateFormat} from '@src/types/openbis';
import {NumberEqualToValue} from '@src/types/openbis';
import {NumberFieldSearchCriteria} from '@src/types/openbis';
import {NumberGreaterThanOrEqualToValue} from '@src/types/openbis';
import {NumberGreaterThanValue} from '@src/types/openbis';
import {NumberLessThanOrEqualToValue} from '@src/types/openbis';
import {NumberLessThanValue} from '@src/types/openbis';
import {NumberPropertySearchCriteria} from '@src/types/openbis';
import {ObjectIdentifier} from '@src/types/openbis';
import {ObjectKind} from '@src/types/openbis';
import {ObjectKindCriteria} from '@src/types/openbis';
import {ObjectKindModification} from '@src/types/openbis';
import {ObjectKindModificationFetchOptions} from '@src/types/openbis';
import {ObjectKindModificationSearchCriteria} from '@src/types/openbis';
import {ObjectKindModificationSortOptions} from '@src/types/openbis';
import {ObjectPermId} from '@src/types/openbis';
import {ObjectTechId} from '@src/types/openbis';
import {OperationExecution} from '@src/types/openbis';
import {OperationExecutionAvailability} from '@src/types/openbis';
import {OperationExecutionDeletionOptions} from '@src/types/openbis';
import {OperationExecutionDetails} from '@src/types/openbis';
import {OperationExecutionDetailsFetchOptions} from '@src/types/openbis';
import {OperationExecutionDetailsSortOptions} from '@src/types/openbis';
import {OperationExecutionEmailNotification} from '@src/types/openbis';
import {OperationExecutionError} from '@src/types/openbis';
import {OperationExecutionFetchOptions} from '@src/types/openbis';
import {OperationExecutionNotificationFetchOptions} from '@src/types/openbis';
import {OperationExecutionNotificationSortOptions} from '@src/types/openbis';
import {OperationExecutionPermId} from '@src/types/openbis';
import {OperationExecutionProgress} from '@src/types/openbis';
import {OperationExecutionSearchCriteria} from '@src/types/openbis';
import {OperationExecutionSortOptions} from '@src/types/openbis';
import {OperationExecutionState} from '@src/types/openbis';
import {OperationExecutionSummary} from '@src/types/openbis';
import {OperationExecutionSummaryFetchOptions} from '@src/types/openbis';
import {OperationExecutionSummarySortOptions} from '@src/types/openbis';
import {OperationExecutionUpdate} from '@src/types/openbis';
import {OperationKind} from '@src/types/openbis';
import {OperationKindCriteria} from '@src/types/openbis';
import {PathSearchCriteria} from '@src/types/openbis';
import {PermIdSearchCriteria} from '@src/types/openbis';
import {Person} from '@src/types/openbis';
import {PersonCreation} from '@src/types/openbis';
import {PersonDeletionOptions} from '@src/types/openbis';
import {PersonFetchOptions} from '@src/types/openbis';
import {PersonPermId} from '@src/types/openbis';
import {PersonSearchCriteria} from '@src/types/openbis';
import {PersonSortOptions} from '@src/types/openbis';
import {PersonUpdate} from '@src/types/openbis';
import {PersonalAccessToken} from '@src/types/openbis';
import {PersonalAccessTokenCreation} from '@src/types/openbis';
import {PersonalAccessTokenDeletionOptions} from '@src/types/openbis';
import {PersonalAccessTokenFetchOptions} from '@src/types/openbis';
import {PersonalAccessTokenOwnerSearchCriteria} from '@src/types/openbis';
import {PersonalAccessTokenPermId} from '@src/types/openbis';
import {PersonalAccessTokenSearchCriteria} from '@src/types/openbis';
import {PersonalAccessTokenSessionNameSearchCriteria} from '@src/types/openbis';
import {PersonalAccessTokenSessionSearchCriteria} from '@src/types/openbis';
import {PersonalAccessTokenSortOptions} from '@src/types/openbis';
import {PersonalAccessTokenUpdate} from '@src/types/openbis';
import {PhysicalData} from '@src/types/openbis';
import {PhysicalDataFetchOptions} from '@src/types/openbis';
import {PhysicalDataSearchCriteria} from '@src/types/openbis';
import {PhysicalDataSortOptions} from '@src/types/openbis';
import {PhysicalDataUpdate} from '@src/types/openbis';
import {Plugin} from '@src/types/openbis';
import {PluginCreation} from '@src/types/openbis';
import {PluginDeletionOptions} from '@src/types/openbis';
import {PluginEvaluationOptions} from '@src/types/openbis';
import {PluginEvaluationResult} from '@src/types/openbis';
import {PluginFetchOptions} from '@src/types/openbis';
import {PluginKind} from '@src/types/openbis';
import {PluginKindSearchCriteria} from '@src/types/openbis';
import {PluginPermId} from '@src/types/openbis';
import {PluginSearchCriteria} from '@src/types/openbis';
import {PluginSortOptions} from '@src/types/openbis';
import {PluginType} from '@src/types/openbis';
import {PluginTypeSearchCriteria} from '@src/types/openbis';
import {PluginUpdate} from '@src/types/openbis';
import {PredicateAccessionIdSearchCriteria} from '@src/types/openbis';
import {PredicateOntologyIdSearchCriteria} from '@src/types/openbis';
import {PredicateOntologyVersionSearchCriteria} from '@src/types/openbis';
import {PresentInArchiveSearchCriteria} from '@src/types/openbis';
import {ProcessingService} from '@src/types/openbis';
import {ProcessingServiceExecutionOptions} from '@src/types/openbis';
import {ProcessingServiceFetchOptions} from '@src/types/openbis';
import {ProcessingServiceSearchCriteria} from '@src/types/openbis';
import {ProcessingServiceSortOptions} from '@src/types/openbis';
import {Project} from '@src/types/openbis';
import {ProjectCreation} from '@src/types/openbis';
import {ProjectDeletionOptions} from '@src/types/openbis';
import {ProjectFetchOptions} from '@src/types/openbis';
import {ProjectIdentifier} from '@src/types/openbis';
import {ProjectPermId} from '@src/types/openbis';
import {ProjectRelationType} from '@src/types/openbis';
import {ProjectSearchCriteria} from '@src/types/openbis';
import {ProjectSortOptions} from '@src/types/openbis';
import {ProjectUpdate} from '@src/types/openbis';
import {PropertyAssignment} from '@src/types/openbis';
import {PropertyAssignmentCreation} from '@src/types/openbis';
import {PropertyAssignmentFetchOptions} from '@src/types/openbis';
import {PropertyAssignmentListUpdateValue} from '@src/types/openbis';
import {PropertyAssignmentPermId} from '@src/types/openbis';
import {PropertyAssignmentSearchCriteria} from '@src/types/openbis';
import {PropertyAssignmentSortOptions} from '@src/types/openbis';
import {PropertyFetchOptions} from '@src/types/openbis';
import {PropertyHistoryEntry} from '@src/types/openbis';
import {PropertyType} from '@src/types/openbis';
import {PropertyTypeCreation} from '@src/types/openbis';
import {PropertyTypeDeletionOptions} from '@src/types/openbis';
import {PropertyTypeFetchOptions} from '@src/types/openbis';
import {PropertyTypePermId} from '@src/types/openbis';
import {PropertyTypeSearchCriteria} from '@src/types/openbis';
import {PropertyTypeSortOptions} from '@src/types/openbis';
import {PropertyTypeUpdate} from '@src/types/openbis';
import {ProprietaryStorageFormatPermId} from '@src/types/openbis';
import {Query} from '@src/types/openbis';
import {QueryCreation} from '@src/types/openbis';
import {QueryDatabase} from '@src/types/openbis';
import {QueryDatabaseFetchOptions} from '@src/types/openbis';
import {QueryDatabaseName} from '@src/types/openbis';
import {QueryDatabaseSearchCriteria} from '@src/types/openbis';
import {QueryDatabaseSortOptions} from '@src/types/openbis';
import {QueryDeletionOptions} from '@src/types/openbis';
import {QueryExecutionOptions} from '@src/types/openbis';
import {QueryFetchOptions} from '@src/types/openbis';
import {QueryName} from '@src/types/openbis';
import {QuerySearchCriteria} from '@src/types/openbis';
import {QuerySortOptions} from '@src/types/openbis';
import {QueryTechId} from '@src/types/openbis';
import {QueryType} from '@src/types/openbis';
import {QueryTypeSearchCriteria} from '@src/types/openbis';
import {QueryUpdate} from '@src/types/openbis';
import {RegistrationDateSearchCriteria} from '@src/types/openbis';
import {RegistratorSearchCriteria} from '@src/types/openbis';
import {RelationHistoryEntry} from '@src/types/openbis';
import {Relationship} from '@src/types/openbis';
import {RelationshipUpdate} from '@src/types/openbis';
import {RelativeLocationLocatorTypePermId} from '@src/types/openbis';
import {ReportingService} from '@src/types/openbis';
import {ReportingServiceExecutionOptions} from '@src/types/openbis';
import {ReportingServiceFetchOptions} from '@src/types/openbis';
import {ReportingServiceSearchCriteria} from '@src/types/openbis';
import {ReportingServiceSortOptions} from '@src/types/openbis';
import {RevertDeletionsOperation} from '@src/types/openbis';
import {RevertDeletionsOperationResult} from '@src/types/openbis';
import {Right} from '@src/types/openbis';
import {Rights} from '@src/types/openbis';
import {RightsFetchOptions} from '@src/types/openbis';
import {Role} from '@src/types/openbis';
import {RoleAssignment} from '@src/types/openbis';
import {RoleAssignmentCreation} from '@src/types/openbis';
import {RoleAssignmentDeletionOptions} from '@src/types/openbis';
import {RoleAssignmentFetchOptions} from '@src/types/openbis';
import {RoleAssignmentSearchCriteria} from '@src/types/openbis';
import {RoleAssignmentSortOptions} from '@src/types/openbis';
import {RoleAssignmentTechId} from '@src/types/openbis';
import {RoleLevel} from '@src/types/openbis';
import {Sample} from '@src/types/openbis';
import {SampleCreation} from '@src/types/openbis';
import {SampleDeletionOptions} from '@src/types/openbis';
import {SampleFetchOptions} from '@src/types/openbis';
import {SampleIdentifier} from '@src/types/openbis';
import {SamplePermId} from '@src/types/openbis';
import {SamplePropertySearchCriteria} from '@src/types/openbis';
import {SampleRelationType} from '@src/types/openbis';
import {SampleSearchCriteria} from '@src/types/openbis';
import {SampleSearchRelation} from '@src/types/openbis';
import {SampleSortOptions} from '@src/types/openbis';
import {SampleType} from '@src/types/openbis';
import {SampleTypeCreation} from '@src/types/openbis';
import {SampleTypeDeletionOptions} from '@src/types/openbis';
import {SampleTypeFetchOptions} from '@src/types/openbis';
import {SampleTypeSearchCriteria} from '@src/types/openbis';
import {SampleTypeSortOptions} from '@src/types/openbis';
import {SampleTypeUpdate} from '@src/types/openbis';
import {SampleUpdate} from '@src/types/openbis';
import {SearchAggregationServicesOperation} from '@src/types/openbis';
import {SearchAggregationServicesOperationResult} from '@src/types/openbis';
import {SearchAuthorizationGroupsOperation} from '@src/types/openbis';
import {SearchAuthorizationGroupsOperationResult} from '@src/types/openbis';
import {SearchCustomASServicesOperation} from '@src/types/openbis';
import {SearchCustomASServicesOperationResult} from '@src/types/openbis';
import {SearchDataSetTypesOperation} from '@src/types/openbis';
import {SearchDataSetTypesOperationResult} from '@src/types/openbis';
import {SearchDataSetsOperation} from '@src/types/openbis';
import {SearchDataSetsOperationResult} from '@src/types/openbis';
import {SearchDataStoresOperation} from '@src/types/openbis';
import {SearchDataStoresOperationResult} from '@src/types/openbis';
import {SearchDeletionsOperation} from '@src/types/openbis';
import {SearchDeletionsOperationResult} from '@src/types/openbis';
import {SearchDomainService} from '@src/types/openbis';
import {SearchDomainServiceExecutionOptions} from '@src/types/openbis';
import {SearchDomainServiceExecutionResult} from '@src/types/openbis';
import {SearchDomainServiceFetchOptions} from '@src/types/openbis';
import {SearchDomainServiceSearchCriteria} from '@src/types/openbis';
import {SearchDomainServiceSearchOption} from '@src/types/openbis';
import {SearchDomainServiceSortOptions} from '@src/types/openbis';
import {SearchEventsOperation} from '@src/types/openbis';
import {SearchEventsOperationResult} from '@src/types/openbis';
import {SearchExperimentTypesOperation} from '@src/types/openbis';
import {SearchExperimentTypesOperationResult} from '@src/types/openbis';
import {SearchExperimentsOperation} from '@src/types/openbis';
import {SearchExperimentsOperationResult} from '@src/types/openbis';
import {SearchExternalDmsOperation} from '@src/types/openbis';
import {SearchExternalDmsOperationResult} from '@src/types/openbis';
import {SearchFieldType} from '@src/types/openbis';
import {SearchGloballyOperation} from '@src/types/openbis';
import {SearchGloballyOperationResult} from '@src/types/openbis';
import {SearchMaterialTypesOperation} from '@src/types/openbis';
import {SearchMaterialTypesOperationResult} from '@src/types/openbis';
import {SearchMaterialsOperation} from '@src/types/openbis';
import {SearchMaterialsOperationResult} from '@src/types/openbis';
import {SearchObjectKindModificationsOperation} from '@src/types/openbis';
import {SearchObjectKindModificationsOperationResult} from '@src/types/openbis';
import {SearchObjectsOperation} from '@src/types/openbis';
import {SearchObjectsOperationResult} from '@src/types/openbis';
import {SearchOperationExecutionsOperation} from '@src/types/openbis';
import {SearchOperationExecutionsOperationResult} from '@src/types/openbis';
import {SearchOperator} from '@src/types/openbis';
import {SearchPersonalAccessTokensOperation} from '@src/types/openbis';
import {SearchPersonalAccessTokensOperationResult} from '@src/types/openbis';
import {SearchPersonsOperation} from '@src/types/openbis';
import {SearchPersonsOperationResult} from '@src/types/openbis';
import {SearchPluginsOperation} from '@src/types/openbis';
import {SearchPluginsOperationResult} from '@src/types/openbis';
import {SearchProcessingServicesOperation} from '@src/types/openbis';
import {SearchProcessingServicesOperationResult} from '@src/types/openbis';
import {SearchProjectsOperation} from '@src/types/openbis';
import {SearchProjectsOperationResult} from '@src/types/openbis';
import {SearchPropertyAssignmentsOperation} from '@src/types/openbis';
import {SearchPropertyAssignmentsOperationResult} from '@src/types/openbis';
import {SearchPropertyTypesOperation} from '@src/types/openbis';
import {SearchPropertyTypesOperationResult} from '@src/types/openbis';
import {SearchQueriesOperation} from '@src/types/openbis';
import {SearchQueriesOperationResult} from '@src/types/openbis';
import {SearchQueryDatabasesOperation} from '@src/types/openbis';
import {SearchQueryDatabasesOperationResult} from '@src/types/openbis';
import {SearchReportingServicesOperation} from '@src/types/openbis';
import {SearchReportingServicesOperationResult} from '@src/types/openbis';
import {SearchResult} from '@src/types/openbis';
import {SearchRoleAssignmentsOperation} from '@src/types/openbis';
import {SearchRoleAssignmentsOperationResult} from '@src/types/openbis';
import {SearchSampleTypesOperation} from '@src/types/openbis';
import {SearchSampleTypesOperationResult} from '@src/types/openbis';
import {SearchSamplesOperation} from '@src/types/openbis';
import {SearchSamplesOperationResult} from '@src/types/openbis';
import {SearchSearchDomainServicesOperation} from '@src/types/openbis';
import {SearchSearchDomainServicesOperationResult} from '@src/types/openbis';
import {SearchSemanticAnnotationsOperation} from '@src/types/openbis';
import {SearchSemanticAnnotationsOperationResult} from '@src/types/openbis';
import {SearchSessionInformationOperation} from '@src/types/openbis';
import {SearchSessionInformationOperationResult} from '@src/types/openbis';
import {SearchSpacesOperation} from '@src/types/openbis';
import {SearchSpacesOperationResult} from '@src/types/openbis';
import {SearchTagsOperation} from '@src/types/openbis';
import {SearchTagsOperationResult} from '@src/types/openbis';
import {SearchVocabulariesOperation} from '@src/types/openbis';
import {SearchVocabulariesOperationResult} from '@src/types/openbis';
import {SearchVocabularyTermsOperation} from '@src/types/openbis';
import {SearchVocabularyTermsOperationResult} from '@src/types/openbis';
import {SemanticAnnotation} from '@src/types/openbis';
import {SemanticAnnotationCreation} from '@src/types/openbis';
import {SemanticAnnotationDeletionOptions} from '@src/types/openbis';
import {SemanticAnnotationFetchOptions} from '@src/types/openbis';
import {SemanticAnnotationPermId} from '@src/types/openbis';
import {SemanticAnnotationSearchCriteria} from '@src/types/openbis';
import {SemanticAnnotationSortOptions} from '@src/types/openbis';
import {SemanticAnnotationUpdate} from '@src/types/openbis';
import {ServerInformation} from '@src/types/openbis';
import {ServerTimeZone} from '@src/types/openbis';
import {SessionInformation} from '@src/types/openbis';
import {SessionInformationFetchOptions} from '@src/types/openbis';
import {SessionInformationPermId} from '@src/types/openbis';
import {SessionInformationSearchCriteria} from '@src/types/openbis';
import {SessionInformationSortOptions} from '@src/types/openbis';
import {ShareIdSearchCriteria} from '@src/types/openbis';
import {ShortDateFormat} from '@src/types/openbis';
import {SizeSearchCriteria} from '@src/types/openbis';
import {SortIgnore} from '@src/types/openbis';
import {SortOptions} from '@src/types/openbis';
import {SortOrder} from '@src/types/openbis';
import {SortParameter} from '@src/types/openbis';
import {Sorting} from '@src/types/openbis';
import {Space} from '@src/types/openbis';
import {SpaceCreation} from '@src/types/openbis';
import {SpaceDeletionOptions} from '@src/types/openbis';
import {SpaceFetchOptions} from '@src/types/openbis';
import {SpacePermId} from '@src/types/openbis';
import {SpaceSearchCriteria} from '@src/types/openbis';
import {SpaceSortOptions} from '@src/types/openbis';
import {SpaceTechId} from '@src/types/openbis';
import {SpaceUpdate} from '@src/types/openbis';
import {SpeedHintSearchCriteria} from '@src/types/openbis';
import {SqlExecutionOptions} from '@src/types/openbis';
import {SqlSearchCriteria} from '@src/types/openbis';
import {StatusSearchCriteria} from '@src/types/openbis';
import {StorageConfirmationSearchCriteria} from '@src/types/openbis';
import {StorageFormat} from '@src/types/openbis';
import {StorageFormatFetchOptions} from '@src/types/openbis';
import {StorageFormatPermId} from '@src/types/openbis';
import {StorageFormatSearchCriteria} from '@src/types/openbis';
import {StorageFormatSortOptions} from '@src/types/openbis';
import {StrictlyStringPropertySearchCriteria} from '@src/types/openbis';
import {StringContainsExactlyValue} from '@src/types/openbis';
import {StringContainsValue} from '@src/types/openbis';
import {StringEndsWithValue} from '@src/types/openbis';
import {StringEqualToValue} from '@src/types/openbis';
import {StringFieldSearchCriteria} from '@src/types/openbis';
import {StringGreaterThanOrEqualToValue} from '@src/types/openbis';
import {StringGreaterThanValue} from '@src/types/openbis';
import {StringLessThanOrEqualToValue} from '@src/types/openbis';
import {StringLessThanValue} from '@src/types/openbis';
import {StringMatchesValue} from '@src/types/openbis';
import {StringPropertySearchCriteria} from '@src/types/openbis';
import {StringStartsWithValue} from '@src/types/openbis';
import {SynchronousOperationExecutionOptions} from '@src/types/openbis';
import {SynchronousOperationExecutionResults} from '@src/types/openbis';
import {TableColumn} from '@src/types/openbis';
import {TableDoubleCell} from '@src/types/openbis';
import {TableLongCell} from '@src/types/openbis';
import {TableModel} from '@src/types/openbis';
import {TableStringCell} from '@src/types/openbis';
import {Tag} from '@src/types/openbis';
import {TagCode} from '@src/types/openbis';
import {TagCreation} from '@src/types/openbis';
import {TagDeletionOptions} from '@src/types/openbis';
import {TagFetchOptions} from '@src/types/openbis';
import {TagPermId} from '@src/types/openbis';
import {TagSearchCriteria} from '@src/types/openbis';
import {TagSortOptions} from '@src/types/openbis';
import {TagUpdate} from '@src/types/openbis';
import {TechIdSearchCriteria} from '@src/types/openbis';
import {TextAttributeSearchCriteria} from '@src/types/openbis';
import {TimeZone} from '@src/types/openbis';
import {UnarchiveDataSetsOperation} from '@src/types/openbis';
import {UnarchiveDataSetsOperationResult} from '@src/types/openbis';
import {UnknownRelatedObjectId} from '@src/types/openbis';
import {UnlockDataSetsOperation} from '@src/types/openbis';
import {UnlockDataSetsOperationResult} from '@src/types/openbis';
import {UpdateAuthorizationGroupsOperation} from '@src/types/openbis';
import {UpdateAuthorizationGroupsOperationResult} from '@src/types/openbis';
import {UpdateDataSetTypesOperation} from '@src/types/openbis';
import {UpdateDataSetTypesOperationResult} from '@src/types/openbis';
import {UpdateDataSetsOperation} from '@src/types/openbis';
import {UpdateDataSetsOperationResult} from '@src/types/openbis';
import {UpdateExperimentTypesOperation} from '@src/types/openbis';
import {UpdateExperimentTypesOperationResult} from '@src/types/openbis';
import {UpdateExperimentsOperation} from '@src/types/openbis';
import {UpdateExperimentsOperationResult} from '@src/types/openbis';
import {UpdateExternalDmsOperation} from '@src/types/openbis';
import {UpdateExternalDmsOperationResult} from '@src/types/openbis';
import {UpdateMaterialTypesOperation} from '@src/types/openbis';
import {UpdateMaterialTypesOperationResult} from '@src/types/openbis';
import {UpdateMaterialsOperation} from '@src/types/openbis';
import {UpdateMaterialsOperationResult} from '@src/types/openbis';
import {UpdateObjectsOperation} from '@src/types/openbis';
import {UpdateObjectsOperationResult} from '@src/types/openbis';
import {UpdateOperationExecutionsOperation} from '@src/types/openbis';
import {UpdateOperationExecutionsOperationResult} from '@src/types/openbis';
import {UpdatePersonalAccessTokensOperation} from '@src/types/openbis';
import {UpdatePersonalAccessTokensOperationResult} from '@src/types/openbis';
import {UpdatePersonsOperation} from '@src/types/openbis';
import {UpdatePersonsOperationResult} from '@src/types/openbis';
import {UpdatePluginsOperation} from '@src/types/openbis';
import {UpdatePluginsOperationResult} from '@src/types/openbis';
import {UpdateProjectsOperation} from '@src/types/openbis';
import {UpdateProjectsOperationResult} from '@src/types/openbis';
import {UpdatePropertyTypesOperation} from '@src/types/openbis';
import {UpdatePropertyTypesOperationResult} from '@src/types/openbis';
import {UpdateQueriesOperation} from '@src/types/openbis';
import {UpdateQueriesOperationResult} from '@src/types/openbis';
import {UpdateSampleTypesOperation} from '@src/types/openbis';
import {UpdateSampleTypesOperationResult} from '@src/types/openbis';
import {UpdateSamplesOperation} from '@src/types/openbis';
import {UpdateSamplesOperationResult} from '@src/types/openbis';
import {UpdateSemanticAnnotationsOperation} from '@src/types/openbis';
import {UpdateSemanticAnnotationsOperationResult} from '@src/types/openbis';
import {UpdateSpacesOperation} from '@src/types/openbis';
import {UpdateSpacesOperationResult} from '@src/types/openbis';
import {UpdateTagsOperation} from '@src/types/openbis';
import {UpdateTagsOperationResult} from '@src/types/openbis';
import {UpdateVocabulariesOperation} from '@src/types/openbis';
import {UpdateVocabulariesOperationResult} from '@src/types/openbis';
import {UpdateVocabularyTermsOperation} from '@src/types/openbis';
import {UpdateVocabularyTermsOperationResult} from '@src/types/openbis';
import {UploadedDataSetCreation} from '@src/types/openbis';
import {UserIdSearchCriteria} from '@src/types/openbis';
import {UserIdsSearchCriteria} from '@src/types/openbis';
import {UserNameSearchCriteria} from '@src/types/openbis';
import {Vocabulary} from '@src/types/openbis';
import {VocabularyCreation} from '@src/types/openbis';
import {VocabularyDeletionOptions} from '@src/types/openbis';
import {VocabularyFetchOptions} from '@src/types/openbis';
import {VocabularyPermId} from '@src/types/openbis';
import {VocabularySearchCriteria} from '@src/types/openbis';
import {VocabularySortOptions} from '@src/types/openbis';
import {VocabularyTerm} from '@src/types/openbis';
import {VocabularyTermCreation} from '@src/types/openbis';
import {VocabularyTermDeletionOptions} from '@src/types/openbis';
import {VocabularyTermFetchOptions} from '@src/types/openbis';
import {VocabularyTermPermId} from '@src/types/openbis';
import {VocabularyTermReplacement} from '@src/types/openbis';
import {VocabularyTermSearchCriteria} from '@src/types/openbis';
import {VocabularyTermSortOptions} from '@src/types/openbis';
import {VocabularyTermUpdate} from '@src/types/openbis';
import {VocabularyUpdate} from '@src/types/openbis';
import {WebAppSetting} from '@src/types/openbis';
import {WebAppSettingCreation} from '@src/types/openbis';
import {WebAppSettings} from '@src/types/openbis';
import {WebAppSettingsFetchOptions} from '@src/types/openbis';
import {WebAppSettingsSortOptions} from '@src/types/openbis';
import {WebAppSettingsUpdateValue} from '@src/types/openbis';
import {OpenBIS} from '@src/types/openbis';
const AbstractCompositeSearchCriteriaDto: AbstractCompositeSearchCriteria = V3API.AbstractCompositeSearchCriteria;
const AbstractDateObjectValueDto: AbstractDateObjectValue = V3API.AbstractDateObjectValue;
const AbstractDateValueDto: AbstractDateValue = V3API.AbstractDateValue;
const AbstractEntitySearchCriteriaDto: AbstractEntitySearchCriteria = V3API.AbstractEntitySearchCriteria;
const AbstractEntityTypeSearchCriteriaDto: AbstractEntityTypeSearchCriteria = V3API.AbstractEntityTypeSearchCriteria;
const AbstractExecutionOptionsWithParametersDto: AbstractExecutionOptionsWithParameters = V3API.AbstractExecutionOptionsWithParameters;
const AbstractFieldSearchCriteriaDto: AbstractFieldSearchCriteria = V3API.AbstractFieldSearchCriteria;
const AbstractNumberValueDto: AbstractNumberValue = V3API.AbstractNumberValue;
const AbstractObjectDeletionOptionsDto: AbstractObjectDeletionOptions = V3API.AbstractObjectDeletionOptions;
const AbstractObjectSearchCriteriaDto: AbstractObjectSearchCriteria = V3API.AbstractObjectSearchCriteria;
const AbstractOperationExecutionOptionsDto: AbstractOperationExecutionOptions = V3API.AbstractOperationExecutionOptions;
const AbstractSearchCriteriaDto: AbstractSearchCriteria = V3API.AbstractSearchCriteria;
const AbstractStringValueDto: AbstractStringValue = V3API.AbstractStringValue;
const AbstractTimeZoneValueDto: AbstractTimeZoneValue = V3API.AbstractTimeZoneValue;
const AbstractValueDto: AbstractValue = V3API.AbstractValue;
const AddressSearchCriteriaDto: AddressSearchCriteria = V3API.AddressSearchCriteria;
const AggregationServiceDto: AggregationService = V3API.AggregationService;
const AggregationServiceExecutionOptionsDto: AggregationServiceExecutionOptions = V3API.AggregationServiceExecutionOptions;
const AggregationServiceFetchOptionsDto: AggregationServiceFetchOptions = V3API.AggregationServiceFetchOptions;
const AggregationServiceSearchCriteriaDto: AggregationServiceSearchCriteria = V3API.AggregationServiceSearchCriteria;
const AggregationServiceSortOptionsDto: AggregationServiceSortOptions = V3API.AggregationServiceSortOptions;
const AnyBooleanPropertySearchCriteriaDto: AnyBooleanPropertySearchCriteria = V3API.AnyBooleanPropertySearchCriteria;
const AnyDatePropertySearchCriteriaDto: AnyDatePropertySearchCriteria = V3API.AnyDatePropertySearchCriteria;
const AnyFieldSearchCriteriaDto: AnyFieldSearchCriteria = V3API.AnyFieldSearchCriteria;
const AnyNumberPropertySearchCriteriaDto: AnyNumberPropertySearchCriteria = V3API.AnyNumberPropertySearchCriteria;
const AnyPropertySearchCriteriaDto: AnyPropertySearchCriteria = V3API.AnyPropertySearchCriteria;
const AnyStringPropertySearchCriteriaDto: AnyStringPropertySearchCriteria = V3API.AnyStringPropertySearchCriteria;
const AnyStringValueDto: AnyStringValue = V3API.AnyStringValue;
const ArchiveDataSetsOperationDto: ArchiveDataSetsOperation = V3API.ArchiveDataSetsOperation;
const ArchiveDataSetsOperationResultDto: ArchiveDataSetsOperationResult = V3API.ArchiveDataSetsOperationResult;
const ArchivingRequestedSearchCriteriaDto: ArchivingRequestedSearchCriteria = V3API.ArchivingRequestedSearchCriteria;
const ArchivingStatusDto: ArchivingStatus = V3API.ArchivingStatus;
const AsynchronousOperationExecutionOptionsDto: AsynchronousOperationExecutionOptions = V3API.AsynchronousOperationExecutionOptions;
const AsynchronousOperationExecutionResultsDto: AsynchronousOperationExecutionResults = V3API.AsynchronousOperationExecutionResults;
const AttachmentDto: Attachment = V3API.Attachment;
const AttachmentCreationDto: AttachmentCreation = V3API.AttachmentCreation;
const AttachmentFetchOptionsDto: AttachmentFetchOptions = V3API.AttachmentFetchOptions;
const AttachmentFileNameDto: AttachmentFileName = V3API.AttachmentFileName;
const AttachmentListUpdateValueDto: AttachmentListUpdateValue = V3API.AttachmentListUpdateValue;
const AttachmentSortOptionsDto: AttachmentSortOptions = V3API.AttachmentSortOptions;
const AuthorizationGroupDto: AuthorizationGroup = V3API.AuthorizationGroup;
const AuthorizationGroupCreationDto: AuthorizationGroupCreation = V3API.AuthorizationGroupCreation;
const AuthorizationGroupDeletionOptionsDto: AuthorizationGroupDeletionOptions = V3API.AuthorizationGroupDeletionOptions;
const AuthorizationGroupFetchOptionsDto: AuthorizationGroupFetchOptions = V3API.AuthorizationGroupFetchOptions;
const AuthorizationGroupPermIdDto: AuthorizationGroupPermId = V3API.AuthorizationGroupPermId;
const AuthorizationGroupSearchCriteriaDto: AuthorizationGroupSearchCriteria = V3API.AuthorizationGroupSearchCriteria;
const AuthorizationGroupSortOptionsDto: AuthorizationGroupSortOptions = V3API.AuthorizationGroupSortOptions;
const AuthorizationGroupUpdateDto: AuthorizationGroupUpdate = V3API.AuthorizationGroupUpdate;
const BdsDirectoryStorageFormatPermIdDto: BdsDirectoryStorageFormatPermId = V3API.BdsDirectoryStorageFormatPermId;
const BooleanFieldSearchCriteriaDto: BooleanFieldSearchCriteria = V3API.BooleanFieldSearchCriteria;
const BooleanPropertySearchCriteriaDto: BooleanPropertySearchCriteria = V3API.BooleanPropertySearchCriteria;
const CacheModeDto: CacheMode = V3API.CacheMode;
const CodeSearchCriteriaDto: CodeSearchCriteria = V3API.CodeSearchCriteria;
const CodesSearchCriteriaDto: CodesSearchCriteria = V3API.CodesSearchCriteria;
const CollectionFieldSearchCriteriaDto: CollectionFieldSearchCriteria = V3API.CollectionFieldSearchCriteria;
const CompleteDto: Complete = V3API.Complete;
const CompleteSearchCriteriaDto: CompleteSearchCriteria = V3API.CompleteSearchCriteria;
const ConfirmDeletionsOperationDto: ConfirmDeletionsOperation = V3API.ConfirmDeletionsOperation;
const ConfirmDeletionsOperationResultDto: ConfirmDeletionsOperationResult = V3API.ConfirmDeletionsOperationResult;
const ContentCopyDto: ContentCopy = V3API.ContentCopy;
const ContentCopyCreationDto: ContentCopyCreation = V3API.ContentCopyCreation;
const ContentCopyHistoryEntryDto: ContentCopyHistoryEntry = V3API.ContentCopyHistoryEntry;
const ContentCopyListUpdateValueDto: ContentCopyListUpdateValue = V3API.ContentCopyListUpdateValue;
const ContentCopyPermIdDto: ContentCopyPermId = V3API.ContentCopyPermId;
const ContentCopySearchCriteriaDto: ContentCopySearchCriteria = V3API.ContentCopySearchCriteria;
const ControlledVocabularyPropertySearchCriteriaDto: ControlledVocabularyPropertySearchCriteria = V3API.ControlledVocabularyPropertySearchCriteria;
const CreateAuthorizationGroupsOperationDto: CreateAuthorizationGroupsOperation = V3API.CreateAuthorizationGroupsOperation;
const CreateAuthorizationGroupsOperationResultDto: CreateAuthorizationGroupsOperationResult = V3API.CreateAuthorizationGroupsOperationResult;
const CreateCodesOperationDto: CreateCodesOperation = V3API.CreateCodesOperation;
const CreateCodesOperationResultDto: CreateCodesOperationResult = V3API.CreateCodesOperationResult;
const CreateDataSetTypesOperationDto: CreateDataSetTypesOperation = V3API.CreateDataSetTypesOperation;
const CreateDataSetTypesOperationResultDto: CreateDataSetTypesOperationResult = V3API.CreateDataSetTypesOperationResult;
const CreateDataSetsOperationDto: CreateDataSetsOperation = V3API.CreateDataSetsOperation;
const CreateDataSetsOperationResultDto: CreateDataSetsOperationResult = V3API.CreateDataSetsOperationResult;
const CreateExperimentTypesOperationDto: CreateExperimentTypesOperation = V3API.CreateExperimentTypesOperation;
const CreateExperimentTypesOperationResultDto: CreateExperimentTypesOperationResult = V3API.CreateExperimentTypesOperationResult;
const CreateExperimentsOperationDto: CreateExperimentsOperation = V3API.CreateExperimentsOperation;
const CreateExperimentsOperationResultDto: CreateExperimentsOperationResult = V3API.CreateExperimentsOperationResult;
const CreateExternalDmsOperationDto: CreateExternalDmsOperation = V3API.CreateExternalDmsOperation;
const CreateExternalDmsOperationResultDto: CreateExternalDmsOperationResult = V3API.CreateExternalDmsOperationResult;
const CreateMaterialTypesOperationDto: CreateMaterialTypesOperation = V3API.CreateMaterialTypesOperation;
const CreateMaterialTypesOperationResultDto: CreateMaterialTypesOperationResult = V3API.CreateMaterialTypesOperationResult;
const CreateMaterialsOperationDto: CreateMaterialsOperation = V3API.CreateMaterialsOperation;
const CreateMaterialsOperationResultDto: CreateMaterialsOperationResult = V3API.CreateMaterialsOperationResult;
const CreateObjectsOperationDto: CreateObjectsOperation = V3API.CreateObjectsOperation;
const CreateObjectsOperationResultDto: CreateObjectsOperationResult = V3API.CreateObjectsOperationResult;
const CreatePermIdsOperationDto: CreatePermIdsOperation = V3API.CreatePermIdsOperation;
const CreatePermIdsOperationResultDto: CreatePermIdsOperationResult = V3API.CreatePermIdsOperationResult;
const CreatePersonalAccessTokensOperationDto: CreatePersonalAccessTokensOperation = V3API.CreatePersonalAccessTokensOperation;
const CreatePersonalAccessTokensOperationResultDto: CreatePersonalAccessTokensOperationResult = V3API.CreatePersonalAccessTokensOperationResult;
const CreatePersonsOperationDto: CreatePersonsOperation = V3API.CreatePersonsOperation;
const CreatePersonsOperationResultDto: CreatePersonsOperationResult = V3API.CreatePersonsOperationResult;
const CreatePluginsOperationDto: CreatePluginsOperation = V3API.CreatePluginsOperation;
const CreatePluginsOperationResultDto: CreatePluginsOperationResult = V3API.CreatePluginsOperationResult;
const CreateProjectsOperationDto: CreateProjectsOperation = V3API.CreateProjectsOperation;
const CreateProjectsOperationResultDto: CreateProjectsOperationResult = V3API.CreateProjectsOperationResult;
const CreatePropertyTypesOperationDto: CreatePropertyTypesOperation = V3API.CreatePropertyTypesOperation;
const CreatePropertyTypesOperationResultDto: CreatePropertyTypesOperationResult = V3API.CreatePropertyTypesOperationResult;
const CreateQueriesOperationDto: CreateQueriesOperation = V3API.CreateQueriesOperation;
const CreateQueriesOperationResultDto: CreateQueriesOperationResult = V3API.CreateQueriesOperationResult;
const CreateRoleAssignmentsOperationDto: CreateRoleAssignmentsOperation = V3API.CreateRoleAssignmentsOperation;
const CreateRoleAssignmentsOperationResultDto: CreateRoleAssignmentsOperationResult = V3API.CreateRoleAssignmentsOperationResult;
const CreateSampleTypesOperationDto: CreateSampleTypesOperation = V3API.CreateSampleTypesOperation;
const CreateSampleTypesOperationResultDto: CreateSampleTypesOperationResult = V3API.CreateSampleTypesOperationResult;
const CreateSamplesOperationDto: CreateSamplesOperation = V3API.CreateSamplesOperation;
const CreateSamplesOperationResultDto: CreateSamplesOperationResult = V3API.CreateSamplesOperationResult;
const CreateSemanticAnnotationsOperationDto: CreateSemanticAnnotationsOperation = V3API.CreateSemanticAnnotationsOperation;
const CreateSemanticAnnotationsOperationResultDto: CreateSemanticAnnotationsOperationResult = V3API.CreateSemanticAnnotationsOperationResult;
const CreateSpacesOperationDto: CreateSpacesOperation = V3API.CreateSpacesOperation;
const CreateSpacesOperationResultDto: CreateSpacesOperationResult = V3API.CreateSpacesOperationResult;
const CreateTagsOperationDto: CreateTagsOperation = V3API.CreateTagsOperation;
const CreateTagsOperationResultDto: CreateTagsOperationResult = V3API.CreateTagsOperationResult;
const CreateVocabulariesOperationDto: CreateVocabulariesOperation = V3API.CreateVocabulariesOperation;
const CreateVocabulariesOperationResultDto: CreateVocabulariesOperationResult = V3API.CreateVocabulariesOperationResult;
const CreateVocabularyTermsOperationDto: CreateVocabularyTermsOperation = V3API.CreateVocabularyTermsOperation;
const CreateVocabularyTermsOperationResultDto: CreateVocabularyTermsOperationResult = V3API.CreateVocabularyTermsOperationResult;
const CreationIdDto: CreationId = V3API.CreationId;
const CustomASServiceDto: CustomASService = V3API.CustomASService;
const CustomASServiceCodeDto: CustomASServiceCode = V3API.CustomASServiceCode;
const CustomASServiceExecutionOptionsDto: CustomASServiceExecutionOptions = V3API.CustomASServiceExecutionOptions;
const CustomASServiceFetchOptionsDto: CustomASServiceFetchOptions = V3API.CustomASServiceFetchOptions;
const CustomASServiceSearchCriteriaDto: CustomASServiceSearchCriteria = V3API.CustomASServiceSearchCriteria;
const CustomASServiceSortOptionsDto: CustomASServiceSortOptions = V3API.CustomASServiceSortOptions;
const DataSetDto: DataSet = V3API.DataSet;
const DataSetArchiveOptionsDto: DataSetArchiveOptions = V3API.DataSetArchiveOptions;
const DataSetCreationDto: DataSetCreation = V3API.DataSetCreation;
const DataSetDeletionOptionsDto: DataSetDeletionOptions = V3API.DataSetDeletionOptions;
const DataSetFetchOptionsDto: DataSetFetchOptions = V3API.DataSetFetchOptions;
const DataSetFileDto: DataSetFile = V3API.DataSetFile;
const DataSetFileCreationDto: DataSetFileCreation = V3API.DataSetFileCreation;
const DataSetFileFetchOptionsDto: DataSetFileFetchOptions = V3API.DataSetFileFetchOptions;
const DataSetFilePermIdDto: DataSetFilePermId = V3API.DataSetFilePermId;
const DataSetFileSearchCriteriaDto: DataSetFileSearchCriteria = V3API.DataSetFileSearchCriteria;
const DataSetFileSortOptionsDto: DataSetFileSortOptions = V3API.DataSetFileSortOptions;
const DataSetKindDto: DataSetKind = V3API.DataSetKind;
const DataSetLockOptionsDto: DataSetLockOptions = V3API.DataSetLockOptions;
const DataSetPermIdDto: DataSetPermId = V3API.DataSetPermId;
const DataSetRelationTypeDto: DataSetRelationType = V3API.DataSetRelationType;
const DataSetSearchCriteriaDto: DataSetSearchCriteria = V3API.DataSetSearchCriteria;
const DataSetSearchRelationDto: DataSetSearchRelation = V3API.DataSetSearchRelation;
const DataSetSortOptionsDto: DataSetSortOptions = V3API.DataSetSortOptions;
const DataSetTypeDto: DataSetType = V3API.DataSetType;
const DataSetTypeCreationDto: DataSetTypeCreation = V3API.DataSetTypeCreation;
const DataSetTypeDeletionOptionsDto: DataSetTypeDeletionOptions = V3API.DataSetTypeDeletionOptions;
const DataSetTypeFetchOptionsDto: DataSetTypeFetchOptions = V3API.DataSetTypeFetchOptions;
const DataSetTypeSearchCriteriaDto: DataSetTypeSearchCriteria = V3API.DataSetTypeSearchCriteria;
const DataSetTypeSortOptionsDto: DataSetTypeSortOptions = V3API.DataSetTypeSortOptions;
const DataSetTypeUpdateDto: DataSetTypeUpdate = V3API.DataSetTypeUpdate;
const DataSetUnarchiveOptionsDto: DataSetUnarchiveOptions = V3API.DataSetUnarchiveOptions;
const DataSetUnlockOptionsDto: DataSetUnlockOptions = V3API.DataSetUnlockOptions;
const DataSetUpdateDto: DataSetUpdate = V3API.DataSetUpdate;
const DataStoreDto: DataStore = V3API.DataStore;
const DataStoreFetchOptionsDto: DataStoreFetchOptions = V3API.DataStoreFetchOptions;
const DataStorePermIdDto: DataStorePermId = V3API.DataStorePermId;
const DataStoreSearchCriteriaDto: DataStoreSearchCriteria = V3API.DataStoreSearchCriteria;
const DataStoreSortOptionsDto: DataStoreSortOptions = V3API.DataStoreSortOptions;
const DataTypeDto: DataType = V3API.DataType;
const DatabaseIdSearchCriteriaDto: DatabaseIdSearchCriteria = V3API.DatabaseIdSearchCriteria;
const DateEarlierThanOrEqualToValueDto: DateEarlierThanOrEqualToValue = V3API.DateEarlierThanOrEqualToValue;
const DateEarlierThanValueDto: DateEarlierThanValue = V3API.DateEarlierThanValue;
const DateEqualToValueDto: DateEqualToValue = V3API.DateEqualToValue;
const DateFieldSearchCriteriaDto: DateFieldSearchCriteria = V3API.DateFieldSearchCriteria;
const DateLaterThanOrEqualToValueDto: DateLaterThanOrEqualToValue = V3API.DateLaterThanOrEqualToValue;
const DateLaterThanValueDto: DateLaterThanValue = V3API.DateLaterThanValue;
const DateObjectEarlierThanOrEqualToValueDto: DateObjectEarlierThanOrEqualToValue = V3API.DateObjectEarlierThanOrEqualToValue;
const DateObjectEarlierThanValueDto: DateObjectEarlierThanValue = V3API.DateObjectEarlierThanValue;
const DateObjectEqualToValueDto: DateObjectEqualToValue = V3API.DateObjectEqualToValue;
const DateObjectLaterThanOrEqualToValueDto: DateObjectLaterThanOrEqualToValue = V3API.DateObjectLaterThanOrEqualToValue;
const DateObjectLaterThanValueDto: DateObjectLaterThanValue = V3API.DateObjectLaterThanValue;
const DatePropertySearchCriteriaDto: DatePropertySearchCriteria = V3API.DatePropertySearchCriteria;
const DeleteAuthorizationGroupsOperationDto: DeleteAuthorizationGroupsOperation = V3API.DeleteAuthorizationGroupsOperation;
const DeleteAuthorizationGroupsOperationResultDto: DeleteAuthorizationGroupsOperationResult = V3API.DeleteAuthorizationGroupsOperationResult;
const DeleteDataSetTypesOperationDto: DeleteDataSetTypesOperation = V3API.DeleteDataSetTypesOperation;
const DeleteDataSetTypesOperationResultDto: DeleteDataSetTypesOperationResult = V3API.DeleteDataSetTypesOperationResult;
const DeleteDataSetsOperationDto: DeleteDataSetsOperation = V3API.DeleteDataSetsOperation;
const DeleteDataSetsOperationResultDto: DeleteDataSetsOperationResult = V3API.DeleteDataSetsOperationResult;
const DeleteExperimentTypesOperationDto: DeleteExperimentTypesOperation = V3API.DeleteExperimentTypesOperation;
const DeleteExperimentTypesOperationResultDto: DeleteExperimentTypesOperationResult = V3API.DeleteExperimentTypesOperationResult;
const DeleteExperimentsOperationDto: DeleteExperimentsOperation = V3API.DeleteExperimentsOperation;
const DeleteExperimentsOperationResultDto: DeleteExperimentsOperationResult = V3API.DeleteExperimentsOperationResult;
const DeleteExternalDmsOperationDto: DeleteExternalDmsOperation = V3API.DeleteExternalDmsOperation;
const DeleteExternalDmsOperationResultDto: DeleteExternalDmsOperationResult = V3API.DeleteExternalDmsOperationResult;
const DeleteMaterialTypesOperationDto: DeleteMaterialTypesOperation = V3API.DeleteMaterialTypesOperation;
const DeleteMaterialTypesOperationResultDto: DeleteMaterialTypesOperationResult = V3API.DeleteMaterialTypesOperationResult;
const DeleteMaterialsOperationDto: DeleteMaterialsOperation = V3API.DeleteMaterialsOperation;
const DeleteMaterialsOperationResultDto: DeleteMaterialsOperationResult = V3API.DeleteMaterialsOperationResult;
const DeleteObjectsOperationDto: DeleteObjectsOperation = V3API.DeleteObjectsOperation;
const DeleteObjectsOperationResultDto: DeleteObjectsOperationResult = V3API.DeleteObjectsOperationResult;
const DeleteObjectsWithTrashOperationResultDto: DeleteObjectsWithTrashOperationResult = V3API.DeleteObjectsWithTrashOperationResult;
const DeleteObjectsWithoutTrashOperationResultDto: DeleteObjectsWithoutTrashOperationResult = V3API.DeleteObjectsWithoutTrashOperationResult;
const DeleteOperationExecutionsOperationDto: DeleteOperationExecutionsOperation = V3API.DeleteOperationExecutionsOperation;
const DeleteOperationExecutionsOperationResultDto: DeleteOperationExecutionsOperationResult = V3API.DeleteOperationExecutionsOperationResult;
const DeletePersonalAccessTokensOperationDto: DeletePersonalAccessTokensOperation = V3API.DeletePersonalAccessTokensOperation;
const DeletePersonalAccessTokensOperationResultDto: DeletePersonalAccessTokensOperationResult = V3API.DeletePersonalAccessTokensOperationResult;
const DeletePersonsOperationDto: DeletePersonsOperation = V3API.DeletePersonsOperation;
const DeletePersonsOperationResultDto: DeletePersonsOperationResult = V3API.DeletePersonsOperationResult;
const DeletePluginsOperationDto: DeletePluginsOperation = V3API.DeletePluginsOperation;
const DeletePluginsOperationResultDto: DeletePluginsOperationResult = V3API.DeletePluginsOperationResult;
const DeleteProjectsOperationDto: DeleteProjectsOperation = V3API.DeleteProjectsOperation;
const DeleteProjectsOperationResultDto: DeleteProjectsOperationResult = V3API.DeleteProjectsOperationResult;
const DeletePropertyTypesOperationDto: DeletePropertyTypesOperation = V3API.DeletePropertyTypesOperation;
const DeletePropertyTypesOperationResultDto: DeletePropertyTypesOperationResult = V3API.DeletePropertyTypesOperationResult;
const DeleteQueriesOperationDto: DeleteQueriesOperation = V3API.DeleteQueriesOperation;
const DeleteQueriesOperationResultDto: DeleteQueriesOperationResult = V3API.DeleteQueriesOperationResult;
const DeleteRoleAssignmentsOperationDto: DeleteRoleAssignmentsOperation = V3API.DeleteRoleAssignmentsOperation;
const DeleteRoleAssignmentsOperationResultDto: DeleteRoleAssignmentsOperationResult = V3API.DeleteRoleAssignmentsOperationResult;
const DeleteSampleTypesOperationDto: DeleteSampleTypesOperation = V3API.DeleteSampleTypesOperation;
const DeleteSampleTypesOperationResultDto: DeleteSampleTypesOperationResult = V3API.DeleteSampleTypesOperationResult;
const DeleteSamplesOperationDto: DeleteSamplesOperation = V3API.DeleteSamplesOperation;
const DeleteSamplesOperationResultDto: DeleteSamplesOperationResult = V3API.DeleteSamplesOperationResult;
const DeleteSemanticAnnotationsOperationDto: DeleteSemanticAnnotationsOperation = V3API.DeleteSemanticAnnotationsOperation;
const DeleteSemanticAnnotationsOperationResultDto: DeleteSemanticAnnotationsOperationResult = V3API.DeleteSemanticAnnotationsOperationResult;
const DeleteSpacesOperationDto: DeleteSpacesOperation = V3API.DeleteSpacesOperation;
const DeleteSpacesOperationResultDto: DeleteSpacesOperationResult = V3API.DeleteSpacesOperationResult;
const DeleteTagsOperationDto: DeleteTagsOperation = V3API.DeleteTagsOperation;
const DeleteTagsOperationResultDto: DeleteTagsOperationResult = V3API.DeleteTagsOperationResult;
const DeleteVocabulariesOperationDto: DeleteVocabulariesOperation = V3API.DeleteVocabulariesOperation;
const DeleteVocabulariesOperationResultDto: DeleteVocabulariesOperationResult = V3API.DeleteVocabulariesOperationResult;
const DeleteVocabularyTermsOperationDto: DeleteVocabularyTermsOperation = V3API.DeleteVocabularyTermsOperation;
const DeleteVocabularyTermsOperationResultDto: DeleteVocabularyTermsOperationResult = V3API.DeleteVocabularyTermsOperationResult;
const DeletedObjectDto: DeletedObject = V3API.DeletedObject;
const DeletedObjectFetchOptionsDto: DeletedObjectFetchOptions = V3API.DeletedObjectFetchOptions;
const DeletionDto: Deletion = V3API.Deletion;
const DeletionFetchOptionsDto: DeletionFetchOptions = V3API.DeletionFetchOptions;
const DeletionSearchCriteriaDto: DeletionSearchCriteria = V3API.DeletionSearchCriteria;
const DeletionSortOptionsDto: DeletionSortOptions = V3API.DeletionSortOptions;
const DeletionTechIdDto: DeletionTechId = V3API.DeletionTechId;
const DescriptionSearchCriteriaDto: DescriptionSearchCriteria = V3API.DescriptionSearchCriteria;
const DescriptorAccessionIdSearchCriteriaDto: DescriptorAccessionIdSearchCriteria = V3API.DescriptorAccessionIdSearchCriteria;
const DescriptorOntologyIdSearchCriteriaDto: DescriptorOntologyIdSearchCriteria = V3API.DescriptorOntologyIdSearchCriteria;
const DescriptorOntologyVersionSearchCriteriaDto: DescriptorOntologyVersionSearchCriteria = V3API.DescriptorOntologyVersionSearchCriteria;
const DssServicePermIdDto: DssServicePermId = V3API.DssServicePermId;
const DynamicPropertyPluginEvaluationOptionsDto: DynamicPropertyPluginEvaluationOptions = V3API.DynamicPropertyPluginEvaluationOptions;
const DynamicPropertyPluginEvaluationResultDto: DynamicPropertyPluginEvaluationResult = V3API.DynamicPropertyPluginEvaluationResult;
const EmailSearchCriteriaDto: EmailSearchCriteria = V3API.EmailSearchCriteria;
const EmptyFetchOptionsDto: EmptyFetchOptions = V3API.EmptyFetchOptions;
const EntityKindDto: EntityKind = V3API.EntityKind;
const EntityKindSearchCriteriaDto: EntityKindSearchCriteria = V3API.EntityKindSearchCriteria;
const EntitySortOptionsDto: EntitySortOptions = V3API.EntitySortOptions;
const EntityTypeDto: EntityType = V3API.EntityType;
const EntityTypeCodePatternSearchCriteriaDto: EntityTypeCodePatternSearchCriteria = V3API.EntityTypeCodePatternSearchCriteria;
const EntityTypeFetchOptionsDto: EntityTypeFetchOptions = V3API.EntityTypeFetchOptions;
const EntityTypePermIdDto: EntityTypePermId = V3API.EntityTypePermId;
const EntityTypeSearchCriteriaDto: EntityTypeSearchCriteria = V3API.EntityTypeSearchCriteria;
const EntityTypeSortOptionsDto: EntityTypeSortOptions = V3API.EntityTypeSortOptions;
const EntityValidationPluginEvaluationOptionsDto: EntityValidationPluginEvaluationOptions = V3API.EntityValidationPluginEvaluationOptions;
const EntityValidationPluginEvaluationResultDto: EntityValidationPluginEvaluationResult = V3API.EntityValidationPluginEvaluationResult;
const EntityWithPropertiesSortOptionsDto: EntityWithPropertiesSortOptions = V3API.EntityWithPropertiesSortOptions;
const EnumDto: Enum = V3API.Enum;
const EnumFieldSearchCriteriaDto: EnumFieldSearchCriteria = V3API.EnumFieldSearchCriteria;
const EvaluatePluginOperationDto: EvaluatePluginOperation = V3API.EvaluatePluginOperation;
const EvaluatePluginOperationResultDto: EvaluatePluginOperationResult = V3API.EvaluatePluginOperationResult;
const EventDto: Event = V3API.Event;
const EventDescriptionSearchCriteriaDto: EventDescriptionSearchCriteria = V3API.EventDescriptionSearchCriteria;
const EventEntityProjectIdSearchCriteriaDto: EventEntityProjectIdSearchCriteria = V3API.EventEntityProjectIdSearchCriteria;
const EventEntityProjectSearchCriteriaDto: EventEntityProjectSearchCriteria = V3API.EventEntityProjectSearchCriteria;
const EventEntityRegistrationDateSearchCriteriaDto: EventEntityRegistrationDateSearchCriteria = V3API.EventEntityRegistrationDateSearchCriteria;
const EventEntityRegistratorSearchCriteriaDto: EventEntityRegistratorSearchCriteria = V3API.EventEntityRegistratorSearchCriteria;
const EventEntitySpaceIdSearchCriteriaDto: EventEntitySpaceIdSearchCriteria = V3API.EventEntitySpaceIdSearchCriteria;
const EventEntitySpaceSearchCriteriaDto: EventEntitySpaceSearchCriteria = V3API.EventEntitySpaceSearchCriteria;
const EventEntityTypeSearchCriteriaDto: EventEntityTypeSearchCriteria = V3API.EventEntityTypeSearchCriteria;
const EventFetchOptionsDto: EventFetchOptions = V3API.EventFetchOptions;
const EventIdentifierSearchCriteriaDto: EventIdentifierSearchCriteria = V3API.EventIdentifierSearchCriteria;
const EventReasonSearchCriteriaDto: EventReasonSearchCriteria = V3API.EventReasonSearchCriteria;
const EventSearchCriteriaDto: EventSearchCriteria = V3API.EventSearchCriteria;
const EventSortOptionsDto: EventSortOptions = V3API.EventSortOptions;
const EventTechIdDto: EventTechId = V3API.EventTechId;
const EventTypeDto: EventType = V3API.EventType;
const EventTypeSearchCriteriaDto: EventTypeSearchCriteria = V3API.EventTypeSearchCriteria;
const ExecuteAggregationServiceOperationDto: ExecuteAggregationServiceOperation = V3API.ExecuteAggregationServiceOperation;
const ExecuteAggregationServiceOperationResultDto: ExecuteAggregationServiceOperationResult = V3API.ExecuteAggregationServiceOperationResult;
const ExecuteCustomASServiceOperationDto: ExecuteCustomASServiceOperation = V3API.ExecuteCustomASServiceOperation;
const ExecuteCustomASServiceOperationResultDto: ExecuteCustomASServiceOperationResult = V3API.ExecuteCustomASServiceOperationResult;
const ExecuteProcessingServiceOperationDto: ExecuteProcessingServiceOperation = V3API.ExecuteProcessingServiceOperation;
const ExecuteProcessingServiceOperationResultDto: ExecuteProcessingServiceOperationResult = V3API.ExecuteProcessingServiceOperationResult;
const ExecuteQueryOperationDto: ExecuteQueryOperation = V3API.ExecuteQueryOperation;
const ExecuteQueryOperationResultDto: ExecuteQueryOperationResult = V3API.ExecuteQueryOperationResult;
const ExecuteReportingServiceOperationDto: ExecuteReportingServiceOperation = V3API.ExecuteReportingServiceOperation;
const ExecuteReportingServiceOperationResultDto: ExecuteReportingServiceOperationResult = V3API.ExecuteReportingServiceOperationResult;
const ExecuteSearchDomainServiceOperationDto: ExecuteSearchDomainServiceOperation = V3API.ExecuteSearchDomainServiceOperation;
const ExecuteSearchDomainServiceOperationResultDto: ExecuteSearchDomainServiceOperationResult = V3API.ExecuteSearchDomainServiceOperationResult;
const ExecuteSqlOperationDto: ExecuteSqlOperation = V3API.ExecuteSqlOperation;
const ExecuteSqlOperationResultDto: ExecuteSqlOperationResult = V3API.ExecuteSqlOperationResult;
const ExperimentDto: Experiment = V3API.Experiment;
const ExperimentCreationDto: ExperimentCreation = V3API.ExperimentCreation;
const ExperimentDeletionOptionsDto: ExperimentDeletionOptions = V3API.ExperimentDeletionOptions;
const ExperimentFetchOptionsDto: ExperimentFetchOptions = V3API.ExperimentFetchOptions;
const ExperimentIdentifierDto: ExperimentIdentifier = V3API.ExperimentIdentifier;
const ExperimentPermIdDto: ExperimentPermId = V3API.ExperimentPermId;
const ExperimentRelationTypeDto: ExperimentRelationType = V3API.ExperimentRelationType;
const ExperimentSearchCriteriaDto: ExperimentSearchCriteria = V3API.ExperimentSearchCriteria;
const ExperimentSortOptionsDto: ExperimentSortOptions = V3API.ExperimentSortOptions;
const ExperimentTypeDto: ExperimentType = V3API.ExperimentType;
const ExperimentTypeCreationDto: ExperimentTypeCreation = V3API.ExperimentTypeCreation;
const ExperimentTypeDeletionOptionsDto: ExperimentTypeDeletionOptions = V3API.ExperimentTypeDeletionOptions;
const ExperimentTypeFetchOptionsDto: ExperimentTypeFetchOptions = V3API.ExperimentTypeFetchOptions;
const ExperimentTypeSearchCriteriaDto: ExperimentTypeSearchCriteria = V3API.ExperimentTypeSearchCriteria;
const ExperimentTypeSortOptionsDto: ExperimentTypeSortOptions = V3API.ExperimentTypeSortOptions;
const ExperimentTypeUpdateDto: ExperimentTypeUpdate = V3API.ExperimentTypeUpdate;
const ExperimentUpdateDto: ExperimentUpdate = V3API.ExperimentUpdate;
const ExternalCodeSearchCriteriaDto: ExternalCodeSearchCriteria = V3API.ExternalCodeSearchCriteria;
const ExternalDmsDto: ExternalDms = V3API.ExternalDms;
const ExternalDmsAddressTypeDto: ExternalDmsAddressType = V3API.ExternalDmsAddressType;
const ExternalDmsCreationDto: ExternalDmsCreation = V3API.ExternalDmsCreation;
const ExternalDmsDeletionOptionsDto: ExternalDmsDeletionOptions = V3API.ExternalDmsDeletionOptions;
const ExternalDmsFetchOptionsDto: ExternalDmsFetchOptions = V3API.ExternalDmsFetchOptions;
const ExternalDmsPermIdDto: ExternalDmsPermId = V3API.ExternalDmsPermId;
const ExternalDmsSearchCriteriaDto: ExternalDmsSearchCriteria = V3API.ExternalDmsSearchCriteria;
const ExternalDmsSortOptionsDto: ExternalDmsSortOptions = V3API.ExternalDmsSortOptions;
const ExternalDmsTypeSearchCriteriaDto: ExternalDmsTypeSearchCriteria = V3API.ExternalDmsTypeSearchCriteria;
const ExternalDmsUpdateDto: ExternalDmsUpdate = V3API.ExternalDmsUpdate;
const FastDownloadSessionDto: FastDownloadSession = V3API.FastDownloadSession;
const FastDownloadSessionOptionsDto: FastDownloadSessionOptions = V3API.FastDownloadSessionOptions;
const FetchOptionsDto: FetchOptions = V3API.FetchOptions;
const FieldUpdateValueDto: FieldUpdateValue = V3API.FieldUpdateValue;
const FileFormatTypeDto: FileFormatType = V3API.FileFormatType;
const FileFormatTypeFetchOptionsDto: FileFormatTypeFetchOptions = V3API.FileFormatTypeFetchOptions;
const FileFormatTypePermIdDto: FileFormatTypePermId = V3API.FileFormatTypePermId;
const FileFormatTypeSearchCriteriaDto: FileFormatTypeSearchCriteria = V3API.FileFormatTypeSearchCriteria;
const FileFormatTypeSortOptionsDto: FileFormatTypeSortOptions = V3API.FileFormatTypeSortOptions;
const FirstNameSearchCriteriaDto: FirstNameSearchCriteria = V3API.FirstNameSearchCriteria;
const FullDataSetCreationDto: FullDataSetCreation = V3API.FullDataSetCreation;
const GetAuthorizationGroupsOperationDto: GetAuthorizationGroupsOperation = V3API.GetAuthorizationGroupsOperation;
const GetAuthorizationGroupsOperationResultDto: GetAuthorizationGroupsOperationResult = V3API.GetAuthorizationGroupsOperationResult;
const GetDataSetTypesOperationDto: GetDataSetTypesOperation = V3API.GetDataSetTypesOperation;
const GetDataSetTypesOperationResultDto: GetDataSetTypesOperationResult = V3API.GetDataSetTypesOperationResult;
const GetDataSetsOperationDto: GetDataSetsOperation = V3API.GetDataSetsOperation;
const GetDataSetsOperationResultDto: GetDataSetsOperationResult = V3API.GetDataSetsOperationResult;
const GetExperimentTypesOperationDto: GetExperimentTypesOperation = V3API.GetExperimentTypesOperation;
const GetExperimentTypesOperationResultDto: GetExperimentTypesOperationResult = V3API.GetExperimentTypesOperationResult;
const GetExperimentsOperationDto: GetExperimentsOperation = V3API.GetExperimentsOperation;
const GetExperimentsOperationResultDto: GetExperimentsOperationResult = V3API.GetExperimentsOperationResult;
const GetExternalDmsOperationDto: GetExternalDmsOperation = V3API.GetExternalDmsOperation;
const GetExternalDmsOperationResultDto: GetExternalDmsOperationResult = V3API.GetExternalDmsOperationResult;
const GetMaterialTypesOperationDto: GetMaterialTypesOperation = V3API.GetMaterialTypesOperation;
const GetMaterialTypesOperationResultDto: GetMaterialTypesOperationResult = V3API.GetMaterialTypesOperationResult;
const GetMaterialsOperationDto: GetMaterialsOperation = V3API.GetMaterialsOperation;
const GetMaterialsOperationResultDto: GetMaterialsOperationResult = V3API.GetMaterialsOperationResult;
const GetObjectsOperationDto: GetObjectsOperation = V3API.GetObjectsOperation;
const GetObjectsOperationResultDto: GetObjectsOperationResult = V3API.GetObjectsOperationResult;
const GetOperationExecutionsOperationDto: GetOperationExecutionsOperation = V3API.GetOperationExecutionsOperation;
const GetOperationExecutionsOperationResultDto: GetOperationExecutionsOperationResult = V3API.GetOperationExecutionsOperationResult;
const GetPersonalAccessTokensOperationDto: GetPersonalAccessTokensOperation = V3API.GetPersonalAccessTokensOperation;
const GetPersonalAccessTokensOperationResultDto: GetPersonalAccessTokensOperationResult = V3API.GetPersonalAccessTokensOperationResult;
const GetPersonsOperationDto: GetPersonsOperation = V3API.GetPersonsOperation;
const GetPersonsOperationResultDto: GetPersonsOperationResult = V3API.GetPersonsOperationResult;
const GetPluginsOperationDto: GetPluginsOperation = V3API.GetPluginsOperation;
const GetPluginsOperationResultDto: GetPluginsOperationResult = V3API.GetPluginsOperationResult;
const GetProjectsOperationDto: GetProjectsOperation = V3API.GetProjectsOperation;
const GetProjectsOperationResultDto: GetProjectsOperationResult = V3API.GetProjectsOperationResult;
const GetPropertyTypesOperationDto: GetPropertyTypesOperation = V3API.GetPropertyTypesOperation;
const GetPropertyTypesOperationResultDto: GetPropertyTypesOperationResult = V3API.GetPropertyTypesOperationResult;
const GetQueriesOperationDto: GetQueriesOperation = V3API.GetQueriesOperation;
const GetQueriesOperationResultDto: GetQueriesOperationResult = V3API.GetQueriesOperationResult;
const GetQueryDatabasesOperationDto: GetQueryDatabasesOperation = V3API.GetQueryDatabasesOperation;
const GetQueryDatabasesOperationResultDto: GetQueryDatabasesOperationResult = V3API.GetQueryDatabasesOperationResult;
const GetRightsOperationDto: GetRightsOperation = V3API.GetRightsOperation;
const GetRightsOperationResultDto: GetRightsOperationResult = V3API.GetRightsOperationResult;
const GetRoleAssignmentsOperationDto: GetRoleAssignmentsOperation = V3API.GetRoleAssignmentsOperation;
const GetRoleAssignmentsOperationResultDto: GetRoleAssignmentsOperationResult = V3API.GetRoleAssignmentsOperationResult;
const GetSampleTypesOperationDto: GetSampleTypesOperation = V3API.GetSampleTypesOperation;
const GetSampleTypesOperationResultDto: GetSampleTypesOperationResult = V3API.GetSampleTypesOperationResult;
const GetSamplesOperationDto: GetSamplesOperation = V3API.GetSamplesOperation;
const GetSamplesOperationResultDto: GetSamplesOperationResult = V3API.GetSamplesOperationResult;
const GetSemanticAnnotationsOperationDto: GetSemanticAnnotationsOperation = V3API.GetSemanticAnnotationsOperation;
const GetSemanticAnnotationsOperationResultDto: GetSemanticAnnotationsOperationResult = V3API.GetSemanticAnnotationsOperationResult;
const GetServerInformationOperationDto: GetServerInformationOperation = V3API.GetServerInformationOperation;
const GetServerInformationOperationResultDto: GetServerInformationOperationResult = V3API.GetServerInformationOperationResult;
const GetServerPublicInformationOperationDto: GetServerPublicInformationOperation = V3API.GetServerPublicInformationOperation;
const GetServerPublicInformationOperationResultDto: GetServerPublicInformationOperationResult = V3API.GetServerPublicInformationOperationResult;
const GetSessionInformationOperationDto: GetSessionInformationOperation = V3API.GetSessionInformationOperation;
const GetSessionInformationOperationResultDto: GetSessionInformationOperationResult = V3API.GetSessionInformationOperationResult;
const GetSpacesOperationDto: GetSpacesOperation = V3API.GetSpacesOperation;
const GetSpacesOperationResultDto: GetSpacesOperationResult = V3API.GetSpacesOperationResult;
const GetTagsOperationDto: GetTagsOperation = V3API.GetTagsOperation;
const GetTagsOperationResultDto: GetTagsOperationResult = V3API.GetTagsOperationResult;
const GetVocabulariesOperationDto: GetVocabulariesOperation = V3API.GetVocabulariesOperation;
const GetVocabulariesOperationResultDto: GetVocabulariesOperationResult = V3API.GetVocabulariesOperationResult;
const GetVocabularyTermsOperationDto: GetVocabularyTermsOperation = V3API.GetVocabularyTermsOperation;
const GetVocabularyTermsOperationResultDto: GetVocabularyTermsOperationResult = V3API.GetVocabularyTermsOperationResult;
const GitCommitHashSearchCriteriaDto: GitCommitHashSearchCriteria = V3API.GitCommitHashSearchCriteria;
const GitRepositoryIdSearchCriteriaDto: GitRepositoryIdSearchCriteria = V3API.GitRepositoryIdSearchCriteria;
const GlobalSearchCriteriaDto: GlobalSearchCriteria = V3API.GlobalSearchCriteria;
const GlobalSearchObjectDto: GlobalSearchObject = V3API.GlobalSearchObject;
const GlobalSearchObjectFetchOptionsDto: GlobalSearchObjectFetchOptions = V3API.GlobalSearchObjectFetchOptions;
const GlobalSearchObjectKindDto: GlobalSearchObjectKind = V3API.GlobalSearchObjectKind;
const GlobalSearchObjectKindCriteriaDto: GlobalSearchObjectKindCriteria = V3API.GlobalSearchObjectKindCriteria;
const GlobalSearchObjectSortOptionsDto: GlobalSearchObjectSortOptions = V3API.GlobalSearchObjectSortOptions;
const GlobalSearchTextCriteriaDto: GlobalSearchTextCriteria = V3API.GlobalSearchTextCriteria;
const GlobalSearchWildCardsCriteriaDto: GlobalSearchWildCardsCriteria = V3API.GlobalSearchWildCardsCriteria;
const HistoryEntryDto: HistoryEntry = V3API.HistoryEntry;
const HistoryEntryFetchOptionsDto: HistoryEntryFetchOptions = V3API.HistoryEntryFetchOptions;
const HistoryEntrySortOptionsDto: HistoryEntrySortOptions = V3API.HistoryEntrySortOptions;
const IAttachmentIdDto: IAttachmentId = V3API.IAttachmentId;
const IAttachmentsHolderDto: IAttachmentsHolder = V3API.IAttachmentsHolder;
const IAuthorizationGroupIdDto: IAuthorizationGroupId = V3API.IAuthorizationGroupId;
const ICodeHolderDto: ICodeHolder = V3API.ICodeHolder;
const IContentCopyIdDto: IContentCopyId = V3API.IContentCopyId;
const ICreationDto: ICreation = V3API.ICreation;
const ICreationIdHolderDto: ICreationIdHolder = V3API.ICreationIdHolder;
const ICustomASServiceIdDto: ICustomASServiceId = V3API.ICustomASServiceId;
const IDataSetCodesHolderDto: IDataSetCodesHolder = V3API.IDataSetCodesHolder;
const IDataSetFileIdDto: IDataSetFileId = V3API.IDataSetFileId;
const IDataSetIdDto: IDataSetId = V3API.IDataSetId;
const IDataSetsHolderDto: IDataSetsHolder = V3API.IDataSetsHolder;
const IDataStoreIdDto: IDataStoreId = V3API.IDataStoreId;
const IDateDto: IDate = V3API.IDate;
const IDateFormatDto: IDateFormat = V3API.IDateFormat;
const IDeletionIdDto: IDeletionId = V3API.IDeletionId;
const IDescriptionHolderDto: IDescriptionHolder = V3API.IDescriptionHolder;
const IDssServiceIdDto: IDssServiceId = V3API.IDssServiceId;
const IEntityTypeDto: IEntityType = V3API.IEntityType;
const IEntityTypeCreationDto: IEntityTypeCreation = V3API.IEntityTypeCreation;
const IEntityTypeHolderDto: IEntityTypeHolder = V3API.IEntityTypeHolder;
const IEntityTypeIdDto: IEntityTypeId = V3API.IEntityTypeId;
const IEntityTypeUpdateDto: IEntityTypeUpdate = V3API.IEntityTypeUpdate;
const IEventIdDto: IEventId = V3API.IEventId;
const IExperimentHolderDto: IExperimentHolder = V3API.IExperimentHolder;
const IExperimentIdDto: IExperimentId = V3API.IExperimentId;
const IExperimentsHolderDto: IExperimentsHolder = V3API.IExperimentsHolder;
const IExternalDmsIdDto: IExternalDmsId = V3API.IExternalDmsId;
const IFileFormatTypeIdDto: IFileFormatTypeId = V3API.IFileFormatTypeId;
const IIdentifierHolderDto: IIdentifierHolder = V3API.IIdentifierHolder;
const ILabelHolderDto: ILabelHolder = V3API.ILabelHolder;
const ILocatorTypeIdDto: ILocatorTypeId = V3API.ILocatorTypeId;
const IMaterialIdDto: IMaterialId = V3API.IMaterialId;
const IMaterialPropertiesHolderDto: IMaterialPropertiesHolder = V3API.IMaterialPropertiesHolder;
const IMaterialsHolderDto: IMaterialsHolder = V3API.IMaterialsHolder;
const IMetaDataUpdateHolderDto: IMetaDataUpdateHolder = V3API.IMetaDataUpdateHolder;
const IModificationDateHolderDto: IModificationDateHolder = V3API.IModificationDateHolder;
const IModifierHolderDto: IModifierHolder = V3API.IModifierHolder;
const INameHolderDto: INameHolder = V3API.INameHolder;
const IObjectCreationDto: IObjectCreation = V3API.IObjectCreation;
const IObjectIdDto: IObjectId = V3API.IObjectId;
const IObjectUpdateDto: IObjectUpdate = V3API.IObjectUpdate;
const IOperationDto: IOperation = V3API.IOperation;
const IOperationExecutionErrorDto: IOperationExecutionError = V3API.IOperationExecutionError;
const IOperationExecutionIdDto: IOperationExecutionId = V3API.IOperationExecutionId;
const IOperationExecutionNotificationDto: IOperationExecutionNotification = V3API.IOperationExecutionNotification;
const IOperationExecutionOptionsDto: IOperationExecutionOptions = V3API.IOperationExecutionOptions;
const IOperationExecutionProgressDto: IOperationExecutionProgress = V3API.IOperationExecutionProgress;
const IOperationExecutionResultsDto: IOperationExecutionResults = V3API.IOperationExecutionResults;
const IOperationResultDto: IOperationResult = V3API.IOperationResult;
const IOwnerHolderDto: IOwnerHolder = V3API.IOwnerHolder;
const IParentChildrenHolderDto: IParentChildrenHolder = V3API.IParentChildrenHolder;
const IPermIdHolderDto: IPermIdHolder = V3API.IPermIdHolder;
const IPersonIdDto: IPersonId = V3API.IPersonId;
const IPersonalAccessTokenIdDto: IPersonalAccessTokenId = V3API.IPersonalAccessTokenId;
const IPluginIdDto: IPluginId = V3API.IPluginId;
const IProjectHolderDto: IProjectHolder = V3API.IProjectHolder;
const IProjectIdDto: IProjectId = V3API.IProjectId;
const IProjectsHolderDto: IProjectsHolder = V3API.IProjectsHolder;
const IPropertiesHolderDto: IPropertiesHolder = V3API.IPropertiesHolder;
const IPropertyAssignmentIdDto: IPropertyAssignmentId = V3API.IPropertyAssignmentId;
const IPropertyAssignmentsHolderDto: IPropertyAssignmentsHolder = V3API.IPropertyAssignmentsHolder;
const IPropertyTypeHolderDto: IPropertyTypeHolder = V3API.IPropertyTypeHolder;
const IPropertyTypeIdDto: IPropertyTypeId = V3API.IPropertyTypeId;
const IQueryDatabaseIdDto: IQueryDatabaseId = V3API.IQueryDatabaseId;
const IQueryIdDto: IQueryId = V3API.IQueryId;
const IRegistrationDateHolderDto: IRegistrationDateHolder = V3API.IRegistrationDateHolder;
const IRegistratorHolderDto: IRegistratorHolder = V3API.IRegistratorHolder;
const IRelationTypeDto: IRelationType = V3API.IRelationType;
const IRoleAssignmentIdDto: IRoleAssignmentId = V3API.IRoleAssignmentId;
const ISampleHolderDto: ISampleHolder = V3API.ISampleHolder;
const ISampleIdDto: ISampleId = V3API.ISampleId;
const ISamplesHolderDto: ISamplesHolder = V3API.ISamplesHolder;
const ISearchCriteriaDto: ISearchCriteria = V3API.ISearchCriteria;
const ISemanticAnnotationIdDto: ISemanticAnnotationId = V3API.ISemanticAnnotationId;
const ISemanticAnnotationsHolderDto: ISemanticAnnotationsHolder = V3API.ISemanticAnnotationsHolder;
const ISessionInformationIdDto: ISessionInformationId = V3API.ISessionInformationId;
const ISpaceHolderDto: ISpaceHolder = V3API.ISpaceHolder;
const ISpaceIdDto: ISpaceId = V3API.ISpaceId;
const IStorageFormatIdDto: IStorageFormatId = V3API.IStorageFormatId;
const ITableCellDto: ITableCell = V3API.ITableCell;
const ITagIdDto: ITagId = V3API.ITagId;
const ITagsHolderDto: ITagsHolder = V3API.ITagsHolder;
const ITimeZoneDto: ITimeZone = V3API.ITimeZone;
const IUpdateDto: IUpdate = V3API.IUpdate;
const IValidationPluginHolderDto: IValidationPluginHolder = V3API.IValidationPluginHolder;
const IVocabularyIdDto: IVocabularyId = V3API.IVocabularyId;
const IVocabularyTermIdDto: IVocabularyTermId = V3API.IVocabularyTermId;
const IdListUpdateValueDto: IdListUpdateValue = V3API.IdListUpdateValue;
const IdSearchCriteriaDto: IdSearchCriteria = V3API.IdSearchCriteria;
const IdentifierSearchCriteriaDto: IdentifierSearchCriteria = V3API.IdentifierSearchCriteria;
const IdsSearchCriteriaDto: IdsSearchCriteria = V3API.IdsSearchCriteria;
const LabelSearchCriteriaDto: LabelSearchCriteria = V3API.LabelSearchCriteria;
const LastNameSearchCriteriaDto: LastNameSearchCriteria = V3API.LastNameSearchCriteria;
const LinkedDataDto: LinkedData = V3API.LinkedData;
const LinkedDataCreationDto: LinkedDataCreation = V3API.LinkedDataCreation;
const LinkedDataFetchOptionsDto: LinkedDataFetchOptions = V3API.LinkedDataFetchOptions;
const LinkedDataSearchCriteriaDto: LinkedDataSearchCriteria = V3API.LinkedDataSearchCriteria;
const LinkedDataSortOptionsDto: LinkedDataSortOptions = V3API.LinkedDataSortOptions;
const LinkedDataUpdateDto: LinkedDataUpdate = V3API.LinkedDataUpdate;
const ListUpdateActionDto: ListUpdateAction = V3API.ListUpdateAction;
const ListUpdateActionAddDto: ListUpdateActionAdd = V3API.ListUpdateActionAdd;
const ListUpdateActionRemoveDto: ListUpdateActionRemove = V3API.ListUpdateActionRemove;
const ListUpdateActionSetDto: ListUpdateActionSet = V3API.ListUpdateActionSet;
const ListUpdateMapValuesDto: ListUpdateMapValues = V3API.ListUpdateMapValues;
const ListUpdateValueDto: ListUpdateValue = V3API.ListUpdateValue;
const ListableSampleTypeSearchCriteriaDto: ListableSampleTypeSearchCriteria = V3API.ListableSampleTypeSearchCriteria;
const LocationSearchCriteriaDto: LocationSearchCriteria = V3API.LocationSearchCriteria;
const LocatorTypeDto: LocatorType = V3API.LocatorType;
const LocatorTypeFetchOptionsDto: LocatorTypeFetchOptions = V3API.LocatorTypeFetchOptions;
const LocatorTypePermIdDto: LocatorTypePermId = V3API.LocatorTypePermId;
const LocatorTypeSearchCriteriaDto: LocatorTypeSearchCriteria = V3API.LocatorTypeSearchCriteria;
const LocatorTypeSortOptionsDto: LocatorTypeSortOptions = V3API.LocatorTypeSortOptions;
const LockDataSetsOperationDto: LockDataSetsOperation = V3API.LockDataSetsOperation;
const LockDataSetsOperationResultDto: LockDataSetsOperationResult = V3API.LockDataSetsOperationResult;
const LongDateFormatDto: LongDateFormat = V3API.LongDateFormat;
const MatchFetchOptionsDto: MatchFetchOptions = V3API.MatchFetchOptions;
const MaterialDto: Material = V3API.Material;
const MaterialCreationDto: MaterialCreation = V3API.MaterialCreation;
const MaterialDeletionOptionsDto: MaterialDeletionOptions = V3API.MaterialDeletionOptions;
const MaterialFetchOptionsDto: MaterialFetchOptions = V3API.MaterialFetchOptions;
const MaterialPermIdDto: MaterialPermId = V3API.MaterialPermId;
const MaterialSearchCriteriaDto: MaterialSearchCriteria = V3API.MaterialSearchCriteria;
const MaterialSortOptionsDto: MaterialSortOptions = V3API.MaterialSortOptions;
const MaterialTypeDto: MaterialType = V3API.MaterialType;
const MaterialTypeCreationDto: MaterialTypeCreation = V3API.MaterialTypeCreation;
const MaterialTypeDeletionOptionsDto: MaterialTypeDeletionOptions = V3API.MaterialTypeDeletionOptions;
const MaterialTypeFetchOptionsDto: MaterialTypeFetchOptions = V3API.MaterialTypeFetchOptions;
const MaterialTypeSearchCriteriaDto: MaterialTypeSearchCriteria = V3API.MaterialTypeSearchCriteria;
const MaterialTypeSortOptionsDto: MaterialTypeSortOptions = V3API.MaterialTypeSortOptions;
const MaterialTypeUpdateDto: MaterialTypeUpdate = V3API.MaterialTypeUpdate;
const MaterialUpdateDto: MaterialUpdate = V3API.MaterialUpdate;
const MeDto: Me = V3API.Me;
const ModificationDateSearchCriteriaDto: ModificationDateSearchCriteria = V3API.ModificationDateSearchCriteria;
const ModifierSearchCriteriaDto: ModifierSearchCriteria = V3API.ModifierSearchCriteria;
const NameSearchCriteriaDto: NameSearchCriteria = V3API.NameSearchCriteria;
const NoExperimentSearchCriteriaDto: NoExperimentSearchCriteria = V3API.NoExperimentSearchCriteria;
const NoProjectSearchCriteriaDto: NoProjectSearchCriteria = V3API.NoProjectSearchCriteria;
const NoSampleContainerSearchCriteriaDto: NoSampleContainerSearchCriteria = V3API.NoSampleContainerSearchCriteria;
const NoSampleSearchCriteriaDto: NoSampleSearchCriteria = V3API.NoSampleSearchCriteria;
const NoSpaceSearchCriteriaDto: NoSpaceSearchCriteria = V3API.NoSpaceSearchCriteria;
const NormalDateFormatDto: NormalDateFormat = V3API.NormalDateFormat;
const NumberEqualToValueDto: NumberEqualToValue = V3API.NumberEqualToValue;
const NumberFieldSearchCriteriaDto: NumberFieldSearchCriteria = V3API.NumberFieldSearchCriteria;
const NumberGreaterThanOrEqualToValueDto: NumberGreaterThanOrEqualToValue = V3API.NumberGreaterThanOrEqualToValue;
const NumberGreaterThanValueDto: NumberGreaterThanValue = V3API.NumberGreaterThanValue;
const NumberLessThanOrEqualToValueDto: NumberLessThanOrEqualToValue = V3API.NumberLessThanOrEqualToValue;
const NumberLessThanValueDto: NumberLessThanValue = V3API.NumberLessThanValue;
const NumberPropertySearchCriteriaDto: NumberPropertySearchCriteria = V3API.NumberPropertySearchCriteria;
const ObjectIdentifierDto: ObjectIdentifier = V3API.ObjectIdentifier;
const ObjectKindDto: ObjectKind = V3API.ObjectKind;
const ObjectKindCriteriaDto: ObjectKindCriteria = V3API.ObjectKindCriteria;
const ObjectKindModificationDto: ObjectKindModification = V3API.ObjectKindModification;
const ObjectKindModificationFetchOptionsDto: ObjectKindModificationFetchOptions = V3API.ObjectKindModificationFetchOptions;
const ObjectKindModificationSearchCriteriaDto: ObjectKindModificationSearchCriteria = V3API.ObjectKindModificationSearchCriteria;
const ObjectKindModificationSortOptionsDto: ObjectKindModificationSortOptions = V3API.ObjectKindModificationSortOptions;
const ObjectPermIdDto: ObjectPermId = V3API.ObjectPermId;
const ObjectTechIdDto: ObjectTechId = V3API.ObjectTechId;
const OperationExecutionDto: OperationExecution = V3API.OperationExecution;
const OperationExecutionAvailabilityDto: OperationExecutionAvailability = V3API.OperationExecutionAvailability;
const OperationExecutionDeletionOptionsDto: OperationExecutionDeletionOptions = V3API.OperationExecutionDeletionOptions;
const OperationExecutionDetailsDto: OperationExecutionDetails = V3API.OperationExecutionDetails;
const OperationExecutionDetailsFetchOptionsDto: OperationExecutionDetailsFetchOptions = V3API.OperationExecutionDetailsFetchOptions;
const OperationExecutionDetailsSortOptionsDto: OperationExecutionDetailsSortOptions = V3API.OperationExecutionDetailsSortOptions;
const OperationExecutionEmailNotificationDto: OperationExecutionEmailNotification = V3API.OperationExecutionEmailNotification;
const OperationExecutionErrorDto: OperationExecutionError = V3API.OperationExecutionError;
const OperationExecutionFetchOptionsDto: OperationExecutionFetchOptions = V3API.OperationExecutionFetchOptions;
const OperationExecutionNotificationFetchOptionsDto: OperationExecutionNotificationFetchOptions = V3API.OperationExecutionNotificationFetchOptions;
const OperationExecutionNotificationSortOptionsDto: OperationExecutionNotificationSortOptions = V3API.OperationExecutionNotificationSortOptions;
const OperationExecutionPermIdDto: OperationExecutionPermId = V3API.OperationExecutionPermId;
const OperationExecutionProgressDto: OperationExecutionProgress = V3API.OperationExecutionProgress;
const OperationExecutionSearchCriteriaDto: OperationExecutionSearchCriteria = V3API.OperationExecutionSearchCriteria;
const OperationExecutionSortOptionsDto: OperationExecutionSortOptions = V3API.OperationExecutionSortOptions;
const OperationExecutionStateDto: OperationExecutionState = V3API.OperationExecutionState;
const OperationExecutionSummaryDto: OperationExecutionSummary = V3API.OperationExecutionSummary;
const OperationExecutionSummaryFetchOptionsDto: OperationExecutionSummaryFetchOptions = V3API.OperationExecutionSummaryFetchOptions;
const OperationExecutionSummarySortOptionsDto: OperationExecutionSummarySortOptions = V3API.OperationExecutionSummarySortOptions;
const OperationExecutionUpdateDto: OperationExecutionUpdate = V3API.OperationExecutionUpdate;
const OperationKindDto: OperationKind = V3API.OperationKind;
const OperationKindCriteriaDto: OperationKindCriteria = V3API.OperationKindCriteria;
const PathSearchCriteriaDto: PathSearchCriteria = V3API.PathSearchCriteria;
const PermIdSearchCriteriaDto: PermIdSearchCriteria = V3API.PermIdSearchCriteria;
const PersonDto: Person = V3API.Person;
const PersonCreationDto: PersonCreation = V3API.PersonCreation;
const PersonDeletionOptionsDto: PersonDeletionOptions = V3API.PersonDeletionOptions;
const PersonFetchOptionsDto: PersonFetchOptions = V3API.PersonFetchOptions;
const PersonPermIdDto: PersonPermId = V3API.PersonPermId;
const PersonSearchCriteriaDto: PersonSearchCriteria = V3API.PersonSearchCriteria;
const PersonSortOptionsDto: PersonSortOptions = V3API.PersonSortOptions;
const PersonUpdateDto: PersonUpdate = V3API.PersonUpdate;
const PersonalAccessTokenDto: PersonalAccessToken = V3API.PersonalAccessToken;
const PersonalAccessTokenCreationDto: PersonalAccessTokenCreation = V3API.PersonalAccessTokenCreation;
const PersonalAccessTokenDeletionOptionsDto: PersonalAccessTokenDeletionOptions = V3API.PersonalAccessTokenDeletionOptions;
const PersonalAccessTokenFetchOptionsDto: PersonalAccessTokenFetchOptions = V3API.PersonalAccessTokenFetchOptions;
const PersonalAccessTokenOwnerSearchCriteriaDto: PersonalAccessTokenOwnerSearchCriteria = V3API.PersonalAccessTokenOwnerSearchCriteria;
const PersonalAccessTokenPermIdDto: PersonalAccessTokenPermId = V3API.PersonalAccessTokenPermId;
const PersonalAccessTokenSearchCriteriaDto: PersonalAccessTokenSearchCriteria = V3API.PersonalAccessTokenSearchCriteria;
const PersonalAccessTokenSessionNameSearchCriteriaDto: PersonalAccessTokenSessionNameSearchCriteria = V3API.PersonalAccessTokenSessionNameSearchCriteria;
const PersonalAccessTokenSessionSearchCriteriaDto: PersonalAccessTokenSessionSearchCriteria = V3API.PersonalAccessTokenSessionSearchCriteria;
const PersonalAccessTokenSortOptionsDto: PersonalAccessTokenSortOptions = V3API.PersonalAccessTokenSortOptions;
const PersonalAccessTokenUpdateDto: PersonalAccessTokenUpdate = V3API.PersonalAccessTokenUpdate;
const PhysicalDataDto: PhysicalData = V3API.PhysicalData;
const PhysicalDataFetchOptionsDto: PhysicalDataFetchOptions = V3API.PhysicalDataFetchOptions;
const PhysicalDataSearchCriteriaDto: PhysicalDataSearchCriteria = V3API.PhysicalDataSearchCriteria;
const PhysicalDataSortOptionsDto: PhysicalDataSortOptions = V3API.PhysicalDataSortOptions;
const PhysicalDataUpdateDto: PhysicalDataUpdate = V3API.PhysicalDataUpdate;
const PluginDto: Plugin = V3API.Plugin;
const PluginCreationDto: PluginCreation = V3API.PluginCreation;
const PluginDeletionOptionsDto: PluginDeletionOptions = V3API.PluginDeletionOptions;
const PluginEvaluationOptionsDto: PluginEvaluationOptions = V3API.PluginEvaluationOptions;
const PluginEvaluationResultDto: PluginEvaluationResult = V3API.PluginEvaluationResult;
const PluginFetchOptionsDto: PluginFetchOptions = V3API.PluginFetchOptions;
const PluginKindDto: PluginKind = V3API.PluginKind;
const PluginKindSearchCriteriaDto: PluginKindSearchCriteria = V3API.PluginKindSearchCriteria;
const PluginPermIdDto: PluginPermId = V3API.PluginPermId;
const PluginSearchCriteriaDto: PluginSearchCriteria = V3API.PluginSearchCriteria;
const PluginSortOptionsDto: PluginSortOptions = V3API.PluginSortOptions;
const PluginTypeDto: PluginType = V3API.PluginType;
const PluginTypeSearchCriteriaDto: PluginTypeSearchCriteria = V3API.PluginTypeSearchCriteria;
const PluginUpdateDto: PluginUpdate = V3API.PluginUpdate;
const PredicateAccessionIdSearchCriteriaDto: PredicateAccessionIdSearchCriteria = V3API.PredicateAccessionIdSearchCriteria;
const PredicateOntologyIdSearchCriteriaDto: PredicateOntologyIdSearchCriteria = V3API.PredicateOntologyIdSearchCriteria;
const PredicateOntologyVersionSearchCriteriaDto: PredicateOntologyVersionSearchCriteria = V3API.PredicateOntologyVersionSearchCriteria;
const PresentInArchiveSearchCriteriaDto: PresentInArchiveSearchCriteria = V3API.PresentInArchiveSearchCriteria;
const ProcessingServiceDto: ProcessingService = V3API.ProcessingService;
const ProcessingServiceExecutionOptionsDto: ProcessingServiceExecutionOptions = V3API.ProcessingServiceExecutionOptions;
const ProcessingServiceFetchOptionsDto: ProcessingServiceFetchOptions = V3API.ProcessingServiceFetchOptions;
const ProcessingServiceSearchCriteriaDto: ProcessingServiceSearchCriteria = V3API.ProcessingServiceSearchCriteria;
const ProcessingServiceSortOptionsDto: ProcessingServiceSortOptions = V3API.ProcessingServiceSortOptions;
const ProjectDto: Project = V3API.Project;
const ProjectCreationDto: ProjectCreation = V3API.ProjectCreation;
const ProjectDeletionOptionsDto: ProjectDeletionOptions = V3API.ProjectDeletionOptions;
const ProjectFetchOptionsDto: ProjectFetchOptions = V3API.ProjectFetchOptions;
const ProjectIdentifierDto: ProjectIdentifier = V3API.ProjectIdentifier;
const ProjectPermIdDto: ProjectPermId = V3API.ProjectPermId;
const ProjectRelationTypeDto: ProjectRelationType = V3API.ProjectRelationType;
const ProjectSearchCriteriaDto: ProjectSearchCriteria = V3API.ProjectSearchCriteria;
const ProjectSortOptionsDto: ProjectSortOptions = V3API.ProjectSortOptions;
const ProjectUpdateDto: ProjectUpdate = V3API.ProjectUpdate;
const PropertyAssignmentDto: PropertyAssignment = V3API.PropertyAssignment;
const PropertyAssignmentCreationDto: PropertyAssignmentCreation = V3API.PropertyAssignmentCreation;
const PropertyAssignmentFetchOptionsDto: PropertyAssignmentFetchOptions = V3API.PropertyAssignmentFetchOptions;
const PropertyAssignmentListUpdateValueDto: PropertyAssignmentListUpdateValue = V3API.PropertyAssignmentListUpdateValue;
const PropertyAssignmentPermIdDto: PropertyAssignmentPermId = V3API.PropertyAssignmentPermId;
const PropertyAssignmentSearchCriteriaDto: PropertyAssignmentSearchCriteria = V3API.PropertyAssignmentSearchCriteria;
const PropertyAssignmentSortOptionsDto: PropertyAssignmentSortOptions = V3API.PropertyAssignmentSortOptions;
const PropertyFetchOptionsDto: PropertyFetchOptions = V3API.PropertyFetchOptions;
const PropertyHistoryEntryDto: PropertyHistoryEntry = V3API.PropertyHistoryEntry;
const PropertyTypeDto: PropertyType = V3API.PropertyType;
const PropertyTypeCreationDto: PropertyTypeCreation = V3API.PropertyTypeCreation;
const PropertyTypeDeletionOptionsDto: PropertyTypeDeletionOptions = V3API.PropertyTypeDeletionOptions;
const PropertyTypeFetchOptionsDto: PropertyTypeFetchOptions = V3API.PropertyTypeFetchOptions;
const PropertyTypePermIdDto: PropertyTypePermId = V3API.PropertyTypePermId;
const PropertyTypeSearchCriteriaDto: PropertyTypeSearchCriteria = V3API.PropertyTypeSearchCriteria;
const PropertyTypeSortOptionsDto: PropertyTypeSortOptions = V3API.PropertyTypeSortOptions;
const PropertyTypeUpdateDto: PropertyTypeUpdate = V3API.PropertyTypeUpdate;
const ProprietaryStorageFormatPermIdDto: ProprietaryStorageFormatPermId = V3API.ProprietaryStorageFormatPermId;
const QueryDto: Query = V3API.Query;
const QueryCreationDto: QueryCreation = V3API.QueryCreation;
const QueryDatabaseDto: QueryDatabase = V3API.QueryDatabase;
const QueryDatabaseFetchOptionsDto: QueryDatabaseFetchOptions = V3API.QueryDatabaseFetchOptions;
const QueryDatabaseNameDto: QueryDatabaseName = V3API.QueryDatabaseName;
const QueryDatabaseSearchCriteriaDto: QueryDatabaseSearchCriteria = V3API.QueryDatabaseSearchCriteria;
const QueryDatabaseSortOptionsDto: QueryDatabaseSortOptions = V3API.QueryDatabaseSortOptions;
const QueryDeletionOptionsDto: QueryDeletionOptions = V3API.QueryDeletionOptions;
const QueryExecutionOptionsDto: QueryExecutionOptions = V3API.QueryExecutionOptions;
const QueryFetchOptionsDto: QueryFetchOptions = V3API.QueryFetchOptions;
const QueryNameDto: QueryName = V3API.QueryName;
const QuerySearchCriteriaDto: QuerySearchCriteria = V3API.QuerySearchCriteria;
const QuerySortOptionsDto: QuerySortOptions = V3API.QuerySortOptions;
const QueryTechIdDto: QueryTechId = V3API.QueryTechId;
const QueryTypeDto: QueryType = V3API.QueryType;
const QueryTypeSearchCriteriaDto: QueryTypeSearchCriteria = V3API.QueryTypeSearchCriteria;
const QueryUpdateDto: QueryUpdate = V3API.QueryUpdate;
const RegistrationDateSearchCriteriaDto: RegistrationDateSearchCriteria = V3API.RegistrationDateSearchCriteria;
const RegistratorSearchCriteriaDto: RegistratorSearchCriteria = V3API.RegistratorSearchCriteria;
const RelationHistoryEntryDto: RelationHistoryEntry = V3API.RelationHistoryEntry;
const RelationshipDto: Relationship = V3API.Relationship;
const RelationshipUpdateDto: RelationshipUpdate = V3API.RelationshipUpdate;
const RelativeLocationLocatorTypePermIdDto: RelativeLocationLocatorTypePermId = V3API.RelativeLocationLocatorTypePermId;
const ReportingServiceDto: ReportingService = V3API.ReportingService;
const ReportingServiceExecutionOptionsDto: ReportingServiceExecutionOptions = V3API.ReportingServiceExecutionOptions;
const ReportingServiceFetchOptionsDto: ReportingServiceFetchOptions = V3API.ReportingServiceFetchOptions;
const ReportingServiceSearchCriteriaDto: ReportingServiceSearchCriteria = V3API.ReportingServiceSearchCriteria;
const ReportingServiceSortOptionsDto: ReportingServiceSortOptions = V3API.ReportingServiceSortOptions;
const RevertDeletionsOperationDto: RevertDeletionsOperation = V3API.RevertDeletionsOperation;
const RevertDeletionsOperationResultDto: RevertDeletionsOperationResult = V3API.RevertDeletionsOperationResult;
const RightDto: Right = V3API.Right;
const RightsDto: Rights = V3API.Rights;
const RightsFetchOptionsDto: RightsFetchOptions = V3API.RightsFetchOptions;
const RoleDto: Role = V3API.Role;
const RoleAssignmentDto: RoleAssignment = V3API.RoleAssignment;
const RoleAssignmentCreationDto: RoleAssignmentCreation = V3API.RoleAssignmentCreation;
const RoleAssignmentDeletionOptionsDto: RoleAssignmentDeletionOptions = V3API.RoleAssignmentDeletionOptions;
const RoleAssignmentFetchOptionsDto: RoleAssignmentFetchOptions = V3API.RoleAssignmentFetchOptions;
const RoleAssignmentSearchCriteriaDto: RoleAssignmentSearchCriteria = V3API.RoleAssignmentSearchCriteria;
const RoleAssignmentSortOptionsDto: RoleAssignmentSortOptions = V3API.RoleAssignmentSortOptions;
const RoleAssignmentTechIdDto: RoleAssignmentTechId = V3API.RoleAssignmentTechId;
const RoleLevelDto: RoleLevel = V3API.RoleLevel;
const SampleDto: Sample = V3API.Sample;
const SampleCreationDto: SampleCreation = V3API.SampleCreation;
const SampleDeletionOptionsDto: SampleDeletionOptions = V3API.SampleDeletionOptions;
const SampleFetchOptionsDto: SampleFetchOptions = V3API.SampleFetchOptions;
const SampleIdentifierDto: SampleIdentifier = V3API.SampleIdentifier;
const SamplePermIdDto: SamplePermId = V3API.SamplePermId;
const SamplePropertySearchCriteriaDto: SamplePropertySearchCriteria = V3API.SamplePropertySearchCriteria;
const SampleRelationTypeDto: SampleRelationType = V3API.SampleRelationType;
const SampleSearchCriteriaDto: SampleSearchCriteria = V3API.SampleSearchCriteria;
const SampleSearchRelationDto: SampleSearchRelation = V3API.SampleSearchRelation;
const SampleSortOptionsDto: SampleSortOptions = V3API.SampleSortOptions;
const SampleTypeDto: SampleType = V3API.SampleType;
const SampleTypeCreationDto: SampleTypeCreation = V3API.SampleTypeCreation;
const SampleTypeDeletionOptionsDto: SampleTypeDeletionOptions = V3API.SampleTypeDeletionOptions;
const SampleTypeFetchOptionsDto: SampleTypeFetchOptions = V3API.SampleTypeFetchOptions;
const SampleTypeSearchCriteriaDto: SampleTypeSearchCriteria = V3API.SampleTypeSearchCriteria;
const SampleTypeSortOptionsDto: SampleTypeSortOptions = V3API.SampleTypeSortOptions;
const SampleTypeUpdateDto: SampleTypeUpdate = V3API.SampleTypeUpdate;
const SampleUpdateDto: SampleUpdate = V3API.SampleUpdate;
const SearchAggregationServicesOperationDto: SearchAggregationServicesOperation = V3API.SearchAggregationServicesOperation;
const SearchAggregationServicesOperationResultDto: SearchAggregationServicesOperationResult = V3API.SearchAggregationServicesOperationResult;
const SearchAuthorizationGroupsOperationDto: SearchAuthorizationGroupsOperation = V3API.SearchAuthorizationGroupsOperation;
const SearchAuthorizationGroupsOperationResultDto: SearchAuthorizationGroupsOperationResult = V3API.SearchAuthorizationGroupsOperationResult;
const SearchCustomASServicesOperationDto: SearchCustomASServicesOperation = V3API.SearchCustomASServicesOperation;
const SearchCustomASServicesOperationResultDto: SearchCustomASServicesOperationResult = V3API.SearchCustomASServicesOperationResult;
const SearchDataSetTypesOperationDto: SearchDataSetTypesOperation = V3API.SearchDataSetTypesOperation;
const SearchDataSetTypesOperationResultDto: SearchDataSetTypesOperationResult = V3API.SearchDataSetTypesOperationResult;
const SearchDataSetsOperationDto: SearchDataSetsOperation = V3API.SearchDataSetsOperation;
const SearchDataSetsOperationResultDto: SearchDataSetsOperationResult = V3API.SearchDataSetsOperationResult;
const SearchDataStoresOperationDto: SearchDataStoresOperation = V3API.SearchDataStoresOperation;
const SearchDataStoresOperationResultDto: SearchDataStoresOperationResult = V3API.SearchDataStoresOperationResult;
const SearchDeletionsOperationDto: SearchDeletionsOperation = V3API.SearchDeletionsOperation;
const SearchDeletionsOperationResultDto: SearchDeletionsOperationResult = V3API.SearchDeletionsOperationResult;
const SearchDomainServiceDto: SearchDomainService = V3API.SearchDomainService;
const SearchDomainServiceExecutionOptionsDto: SearchDomainServiceExecutionOptions = V3API.SearchDomainServiceExecutionOptions;
const SearchDomainServiceExecutionResultDto: SearchDomainServiceExecutionResult = V3API.SearchDomainServiceExecutionResult;
const SearchDomainServiceFetchOptionsDto: SearchDomainServiceFetchOptions = V3API.SearchDomainServiceFetchOptions;
const SearchDomainServiceSearchCriteriaDto: SearchDomainServiceSearchCriteria = V3API.SearchDomainServiceSearchCriteria;
const SearchDomainServiceSearchOptionDto: SearchDomainServiceSearchOption = V3API.SearchDomainServiceSearchOption;
const SearchDomainServiceSortOptionsDto: SearchDomainServiceSortOptions = V3API.SearchDomainServiceSortOptions;
const SearchEventsOperationDto: SearchEventsOperation = V3API.SearchEventsOperation;
const SearchEventsOperationResultDto: SearchEventsOperationResult = V3API.SearchEventsOperationResult;
const SearchExperimentTypesOperationDto: SearchExperimentTypesOperation = V3API.SearchExperimentTypesOperation;
const SearchExperimentTypesOperationResultDto: SearchExperimentTypesOperationResult = V3API.SearchExperimentTypesOperationResult;
const SearchExperimentsOperationDto: SearchExperimentsOperation = V3API.SearchExperimentsOperation;
const SearchExperimentsOperationResultDto: SearchExperimentsOperationResult = V3API.SearchExperimentsOperationResult;
const SearchExternalDmsOperationDto: SearchExternalDmsOperation = V3API.SearchExternalDmsOperation;
const SearchExternalDmsOperationResultDto: SearchExternalDmsOperationResult = V3API.SearchExternalDmsOperationResult;
const SearchFieldTypeDto: SearchFieldType = V3API.SearchFieldType;
const SearchGloballyOperationDto: SearchGloballyOperation = V3API.SearchGloballyOperation;
const SearchGloballyOperationResultDto: SearchGloballyOperationResult = V3API.SearchGloballyOperationResult;
const SearchMaterialTypesOperationDto: SearchMaterialTypesOperation = V3API.SearchMaterialTypesOperation;
const SearchMaterialTypesOperationResultDto: SearchMaterialTypesOperationResult = V3API.SearchMaterialTypesOperationResult;
const SearchMaterialsOperationDto: SearchMaterialsOperation = V3API.SearchMaterialsOperation;
const SearchMaterialsOperationResultDto: SearchMaterialsOperationResult = V3API.SearchMaterialsOperationResult;
const SearchObjectKindModificationsOperationDto: SearchObjectKindModificationsOperation = V3API.SearchObjectKindModificationsOperation;
const SearchObjectKindModificationsOperationResultDto: SearchObjectKindModificationsOperationResult = V3API.SearchObjectKindModificationsOperationResult;
const SearchObjectsOperationDto: SearchObjectsOperation = V3API.SearchObjectsOperation;
const SearchObjectsOperationResultDto: SearchObjectsOperationResult = V3API.SearchObjectsOperationResult;
const SearchOperationExecutionsOperationDto: SearchOperationExecutionsOperation = V3API.SearchOperationExecutionsOperation;
const SearchOperationExecutionsOperationResultDto: SearchOperationExecutionsOperationResult = V3API.SearchOperationExecutionsOperationResult;
const SearchOperatorDto: SearchOperator = V3API.SearchOperator;
const SearchPersonalAccessTokensOperationDto: SearchPersonalAccessTokensOperation = V3API.SearchPersonalAccessTokensOperation;
const SearchPersonalAccessTokensOperationResultDto: SearchPersonalAccessTokensOperationResult = V3API.SearchPersonalAccessTokensOperationResult;
const SearchPersonsOperationDto: SearchPersonsOperation = V3API.SearchPersonsOperation;
const SearchPersonsOperationResultDto: SearchPersonsOperationResult = V3API.SearchPersonsOperationResult;
const SearchPluginsOperationDto: SearchPluginsOperation = V3API.SearchPluginsOperation;
const SearchPluginsOperationResultDto: SearchPluginsOperationResult = V3API.SearchPluginsOperationResult;
const SearchProcessingServicesOperationDto: SearchProcessingServicesOperation = V3API.SearchProcessingServicesOperation;
const SearchProcessingServicesOperationResultDto: SearchProcessingServicesOperationResult = V3API.SearchProcessingServicesOperationResult;
const SearchProjectsOperationDto: SearchProjectsOperation = V3API.SearchProjectsOperation;
const SearchProjectsOperationResultDto: SearchProjectsOperationResult = V3API.SearchProjectsOperationResult;
const SearchPropertyAssignmentsOperationDto: SearchPropertyAssignmentsOperation = V3API.SearchPropertyAssignmentsOperation;
const SearchPropertyAssignmentsOperationResultDto: SearchPropertyAssignmentsOperationResult = V3API.SearchPropertyAssignmentsOperationResult;
const SearchPropertyTypesOperationDto: SearchPropertyTypesOperation = V3API.SearchPropertyTypesOperation;
const SearchPropertyTypesOperationResultDto: SearchPropertyTypesOperationResult = V3API.SearchPropertyTypesOperationResult;
const SearchQueriesOperationDto: SearchQueriesOperation = V3API.SearchQueriesOperation;
const SearchQueriesOperationResultDto: SearchQueriesOperationResult = V3API.SearchQueriesOperationResult;
const SearchQueryDatabasesOperationDto: SearchQueryDatabasesOperation = V3API.SearchQueryDatabasesOperation;
const SearchQueryDatabasesOperationResultDto: SearchQueryDatabasesOperationResult = V3API.SearchQueryDatabasesOperationResult;
const SearchReportingServicesOperationDto: SearchReportingServicesOperation = V3API.SearchReportingServicesOperation;
const SearchReportingServicesOperationResultDto: SearchReportingServicesOperationResult = V3API.SearchReportingServicesOperationResult;
const SearchResultDto: SearchResult = V3API.SearchResult;
const SearchRoleAssignmentsOperationDto: SearchRoleAssignmentsOperation = V3API.SearchRoleAssignmentsOperation;
const SearchRoleAssignmentsOperationResultDto: SearchRoleAssignmentsOperationResult = V3API.SearchRoleAssignmentsOperationResult;
const SearchSampleTypesOperationDto: SearchSampleTypesOperation = V3API.SearchSampleTypesOperation;
const SearchSampleTypesOperationResultDto: SearchSampleTypesOperationResult = V3API.SearchSampleTypesOperationResult;
const SearchSamplesOperationDto: SearchSamplesOperation = V3API.SearchSamplesOperation;
const SearchSamplesOperationResultDto: SearchSamplesOperationResult = V3API.SearchSamplesOperationResult;
const SearchSearchDomainServicesOperationDto: SearchSearchDomainServicesOperation = V3API.SearchSearchDomainServicesOperation;
const SearchSearchDomainServicesOperationResultDto: SearchSearchDomainServicesOperationResult = V3API.SearchSearchDomainServicesOperationResult;
const SearchSemanticAnnotationsOperationDto: SearchSemanticAnnotationsOperation = V3API.SearchSemanticAnnotationsOperation;
const SearchSemanticAnnotationsOperationResultDto: SearchSemanticAnnotationsOperationResult = V3API.SearchSemanticAnnotationsOperationResult;
const SearchSessionInformationOperationDto: SearchSessionInformationOperation = V3API.SearchSessionInformationOperation;
const SearchSessionInformationOperationResultDto: SearchSessionInformationOperationResult = V3API.SearchSessionInformationOperationResult;
const SearchSpacesOperationDto: SearchSpacesOperation = V3API.SearchSpacesOperation;
const SearchSpacesOperationResultDto: SearchSpacesOperationResult = V3API.SearchSpacesOperationResult;
const SearchTagsOperationDto: SearchTagsOperation = V3API.SearchTagsOperation;
const SearchTagsOperationResultDto: SearchTagsOperationResult = V3API.SearchTagsOperationResult;
const SearchVocabulariesOperationDto: SearchVocabulariesOperation = V3API.SearchVocabulariesOperation;
const SearchVocabulariesOperationResultDto: SearchVocabulariesOperationResult = V3API.SearchVocabulariesOperationResult;
const SearchVocabularyTermsOperationDto: SearchVocabularyTermsOperation = V3API.SearchVocabularyTermsOperation;
const SearchVocabularyTermsOperationResultDto: SearchVocabularyTermsOperationResult = V3API.SearchVocabularyTermsOperationResult;
const SemanticAnnotationDto: SemanticAnnotation = V3API.SemanticAnnotation;
const SemanticAnnotationCreationDto: SemanticAnnotationCreation = V3API.SemanticAnnotationCreation;
const SemanticAnnotationDeletionOptionsDto: SemanticAnnotationDeletionOptions = V3API.SemanticAnnotationDeletionOptions;
const SemanticAnnotationFetchOptionsDto: SemanticAnnotationFetchOptions = V3API.SemanticAnnotationFetchOptions;
const SemanticAnnotationPermIdDto: SemanticAnnotationPermId = V3API.SemanticAnnotationPermId;
const SemanticAnnotationSearchCriteriaDto: SemanticAnnotationSearchCriteria = V3API.SemanticAnnotationSearchCriteria;
const SemanticAnnotationSortOptionsDto: SemanticAnnotationSortOptions = V3API.SemanticAnnotationSortOptions;
const SemanticAnnotationUpdateDto: SemanticAnnotationUpdate = V3API.SemanticAnnotationUpdate;
const ServerInformationDto: ServerInformation = V3API.ServerInformation;
const ServerTimeZoneDto: ServerTimeZone = V3API.ServerTimeZone;
const SessionInformationDto: SessionInformation = V3API.SessionInformation;
const SessionInformationFetchOptionsDto: SessionInformationFetchOptions = V3API.SessionInformationFetchOptions;
const SessionInformationPermIdDto: SessionInformationPermId = V3API.SessionInformationPermId;
const SessionInformationSearchCriteriaDto: SessionInformationSearchCriteria = V3API.SessionInformationSearchCriteria;
const SessionInformationSortOptionsDto: SessionInformationSortOptions = V3API.SessionInformationSortOptions;
const ShareIdSearchCriteriaDto: ShareIdSearchCriteria = V3API.ShareIdSearchCriteria;
const ShortDateFormatDto: ShortDateFormat = V3API.ShortDateFormat;
const SizeSearchCriteriaDto: SizeSearchCriteria = V3API.SizeSearchCriteria;
const SortIgnoreDto: SortIgnore = V3API.SortIgnore;
const SortOptionsDto: SortOptions = V3API.SortOptions;
const SortOrderDto: SortOrder = V3API.SortOrder;
const SortParameterDto: SortParameter = V3API.SortParameter;
const SortingDto: Sorting = V3API.Sorting;
const SpaceDto: Space = V3API.Space;
const SpaceCreationDto: SpaceCreation = V3API.SpaceCreation;
const SpaceDeletionOptionsDto: SpaceDeletionOptions = V3API.SpaceDeletionOptions;
const SpaceFetchOptionsDto: SpaceFetchOptions = V3API.SpaceFetchOptions;
const SpacePermIdDto: SpacePermId = V3API.SpacePermId;
const SpaceSearchCriteriaDto: SpaceSearchCriteria = V3API.SpaceSearchCriteria;
const SpaceSortOptionsDto: SpaceSortOptions = V3API.SpaceSortOptions;
const SpaceTechIdDto: SpaceTechId = V3API.SpaceTechId;
const SpaceUpdateDto: SpaceUpdate = V3API.SpaceUpdate;
const SpeedHintSearchCriteriaDto: SpeedHintSearchCriteria = V3API.SpeedHintSearchCriteria;
const SqlExecutionOptionsDto: SqlExecutionOptions = V3API.SqlExecutionOptions;
const SqlSearchCriteriaDto: SqlSearchCriteria = V3API.SqlSearchCriteria;
const StatusSearchCriteriaDto: StatusSearchCriteria = V3API.StatusSearchCriteria;
const StorageConfirmationSearchCriteriaDto: StorageConfirmationSearchCriteria = V3API.StorageConfirmationSearchCriteria;
const StorageFormatDto: StorageFormat = V3API.StorageFormat;
const StorageFormatFetchOptionsDto: StorageFormatFetchOptions = V3API.StorageFormatFetchOptions;
const StorageFormatPermIdDto: StorageFormatPermId = V3API.StorageFormatPermId;
const StorageFormatSearchCriteriaDto: StorageFormatSearchCriteria = V3API.StorageFormatSearchCriteria;
const StorageFormatSortOptionsDto: StorageFormatSortOptions = V3API.StorageFormatSortOptions;
const StrictlyStringPropertySearchCriteriaDto: StrictlyStringPropertySearchCriteria = V3API.StrictlyStringPropertySearchCriteria;
const StringContainsExactlyValueDto: StringContainsExactlyValue = V3API.StringContainsExactlyValue;
const StringContainsValueDto: StringContainsValue = V3API.StringContainsValue;
const StringEndsWithValueDto: StringEndsWithValue = V3API.StringEndsWithValue;
const StringEqualToValueDto: StringEqualToValue = V3API.StringEqualToValue;
const StringFieldSearchCriteriaDto: StringFieldSearchCriteria = V3API.StringFieldSearchCriteria;
const StringGreaterThanOrEqualToValueDto: StringGreaterThanOrEqualToValue = V3API.StringGreaterThanOrEqualToValue;
const StringGreaterThanValueDto: StringGreaterThanValue = V3API.StringGreaterThanValue;
const StringLessThanOrEqualToValueDto: StringLessThanOrEqualToValue = V3API.StringLessThanOrEqualToValue;
const StringLessThanValueDto: StringLessThanValue = V3API.StringLessThanValue;
const StringMatchesValueDto: StringMatchesValue = V3API.StringMatchesValue;
const StringPropertySearchCriteriaDto: StringPropertySearchCriteria = V3API.StringPropertySearchCriteria;
const StringStartsWithValueDto: StringStartsWithValue = V3API.StringStartsWithValue;
const SynchronousOperationExecutionOptionsDto: SynchronousOperationExecutionOptions = V3API.SynchronousOperationExecutionOptions;
const SynchronousOperationExecutionResultsDto: SynchronousOperationExecutionResults = V3API.SynchronousOperationExecutionResults;
const TableColumnDto: TableColumn = V3API.TableColumn;
const TableDoubleCellDto: TableDoubleCell = V3API.TableDoubleCell;
const TableLongCellDto: TableLongCell = V3API.TableLongCell;
const TableModelDto: TableModel = V3API.TableModel;
const TableStringCellDto: TableStringCell = V3API.TableStringCell;
const TagDto: Tag = V3API.Tag;
const TagCodeDto: TagCode = V3API.TagCode;
const TagCreationDto: TagCreation = V3API.TagCreation;
const TagDeletionOptionsDto: TagDeletionOptions = V3API.TagDeletionOptions;
const TagFetchOptionsDto: TagFetchOptions = V3API.TagFetchOptions;
const TagPermIdDto: TagPermId = V3API.TagPermId;
const TagSearchCriteriaDto: TagSearchCriteria = V3API.TagSearchCriteria;
const TagSortOptionsDto: TagSortOptions = V3API.TagSortOptions;
const TagUpdateDto: TagUpdate = V3API.TagUpdate;
const TechIdSearchCriteriaDto: TechIdSearchCriteria = V3API.TechIdSearchCriteria;
const TextAttributeSearchCriteriaDto: TextAttributeSearchCriteria = V3API.TextAttributeSearchCriteria;
const TimeZoneDto: TimeZone = V3API.TimeZone;
const UnarchiveDataSetsOperationDto: UnarchiveDataSetsOperation = V3API.UnarchiveDataSetsOperation;
const UnarchiveDataSetsOperationResultDto: UnarchiveDataSetsOperationResult = V3API.UnarchiveDataSetsOperationResult;
const UnknownRelatedObjectIdDto: UnknownRelatedObjectId = V3API.UnknownRelatedObjectId;
const UnlockDataSetsOperationDto: UnlockDataSetsOperation = V3API.UnlockDataSetsOperation;
const UnlockDataSetsOperationResultDto: UnlockDataSetsOperationResult = V3API.UnlockDataSetsOperationResult;
const UpdateAuthorizationGroupsOperationDto: UpdateAuthorizationGroupsOperation = V3API.UpdateAuthorizationGroupsOperation;
const UpdateAuthorizationGroupsOperationResultDto: UpdateAuthorizationGroupsOperationResult = V3API.UpdateAuthorizationGroupsOperationResult;
const UpdateDataSetTypesOperationDto: UpdateDataSetTypesOperation = V3API.UpdateDataSetTypesOperation;
const UpdateDataSetTypesOperationResultDto: UpdateDataSetTypesOperationResult = V3API.UpdateDataSetTypesOperationResult;
const UpdateDataSetsOperationDto: UpdateDataSetsOperation = V3API.UpdateDataSetsOperation;
const UpdateDataSetsOperationResultDto: UpdateDataSetsOperationResult = V3API.UpdateDataSetsOperationResult;
const UpdateExperimentTypesOperationDto: UpdateExperimentTypesOperation = V3API.UpdateExperimentTypesOperation;
const UpdateExperimentTypesOperationResultDto: UpdateExperimentTypesOperationResult = V3API.UpdateExperimentTypesOperationResult;
const UpdateExperimentsOperationDto: UpdateExperimentsOperation = V3API.UpdateExperimentsOperation;
const UpdateExperimentsOperationResultDto: UpdateExperimentsOperationResult = V3API.UpdateExperimentsOperationResult;
const UpdateExternalDmsOperationDto: UpdateExternalDmsOperation = V3API.UpdateExternalDmsOperation;
const UpdateExternalDmsOperationResultDto: UpdateExternalDmsOperationResult = V3API.UpdateExternalDmsOperationResult;
const UpdateMaterialTypesOperationDto: UpdateMaterialTypesOperation = V3API.UpdateMaterialTypesOperation;
const UpdateMaterialTypesOperationResultDto: UpdateMaterialTypesOperationResult = V3API.UpdateMaterialTypesOperationResult;
const UpdateMaterialsOperationDto: UpdateMaterialsOperation = V3API.UpdateMaterialsOperation;
const UpdateMaterialsOperationResultDto: UpdateMaterialsOperationResult = V3API.UpdateMaterialsOperationResult;
const UpdateObjectsOperationDto: UpdateObjectsOperation = V3API.UpdateObjectsOperation;
const UpdateObjectsOperationResultDto: UpdateObjectsOperationResult = V3API.UpdateObjectsOperationResult;
const UpdateOperationExecutionsOperationDto: UpdateOperationExecutionsOperation = V3API.UpdateOperationExecutionsOperation;
const UpdateOperationExecutionsOperationResultDto: UpdateOperationExecutionsOperationResult = V3API.UpdateOperationExecutionsOperationResult;
const UpdatePersonalAccessTokensOperationDto: UpdatePersonalAccessTokensOperation = V3API.UpdatePersonalAccessTokensOperation;
const UpdatePersonalAccessTokensOperationResultDto: UpdatePersonalAccessTokensOperationResult = V3API.UpdatePersonalAccessTokensOperationResult;
const UpdatePersonsOperationDto: UpdatePersonsOperation = V3API.UpdatePersonsOperation;
const UpdatePersonsOperationResultDto: UpdatePersonsOperationResult = V3API.UpdatePersonsOperationResult;
const UpdatePluginsOperationDto: UpdatePluginsOperation = V3API.UpdatePluginsOperation;
const UpdatePluginsOperationResultDto: UpdatePluginsOperationResult = V3API.UpdatePluginsOperationResult;
const UpdateProjectsOperationDto: UpdateProjectsOperation = V3API.UpdateProjectsOperation;
const UpdateProjectsOperationResultDto: UpdateProjectsOperationResult = V3API.UpdateProjectsOperationResult;
const UpdatePropertyTypesOperationDto: UpdatePropertyTypesOperation = V3API.UpdatePropertyTypesOperation;
const UpdatePropertyTypesOperationResultDto: UpdatePropertyTypesOperationResult = V3API.UpdatePropertyTypesOperationResult;
const UpdateQueriesOperationDto: UpdateQueriesOperation = V3API.UpdateQueriesOperation;
const UpdateQueriesOperationResultDto: UpdateQueriesOperationResult = V3API.UpdateQueriesOperationResult;
const UpdateSampleTypesOperationDto: UpdateSampleTypesOperation = V3API.UpdateSampleTypesOperation;
const UpdateSampleTypesOperationResultDto: UpdateSampleTypesOperationResult = V3API.UpdateSampleTypesOperationResult;
const UpdateSamplesOperationDto: UpdateSamplesOperation = V3API.UpdateSamplesOperation;
const UpdateSamplesOperationResultDto: UpdateSamplesOperationResult = V3API.UpdateSamplesOperationResult;
const UpdateSemanticAnnotationsOperationDto: UpdateSemanticAnnotationsOperation = V3API.UpdateSemanticAnnotationsOperation;
const UpdateSemanticAnnotationsOperationResultDto: UpdateSemanticAnnotationsOperationResult = V3API.UpdateSemanticAnnotationsOperationResult;
const UpdateSpacesOperationDto: UpdateSpacesOperation = V3API.UpdateSpacesOperation;
const UpdateSpacesOperationResultDto: UpdateSpacesOperationResult = V3API.UpdateSpacesOperationResult;
const UpdateTagsOperationDto: UpdateTagsOperation = V3API.UpdateTagsOperation;
const UpdateTagsOperationResultDto: UpdateTagsOperationResult = V3API.UpdateTagsOperationResult;
const UpdateVocabulariesOperationDto: UpdateVocabulariesOperation = V3API.UpdateVocabulariesOperation;
const UpdateVocabulariesOperationResultDto: UpdateVocabulariesOperationResult = V3API.UpdateVocabulariesOperationResult;
const UpdateVocabularyTermsOperationDto: UpdateVocabularyTermsOperation = V3API.UpdateVocabularyTermsOperation;
const UpdateVocabularyTermsOperationResultDto: UpdateVocabularyTermsOperationResult = V3API.UpdateVocabularyTermsOperationResult;
const UploadedDataSetCreationDto: UploadedDataSetCreation = V3API.UploadedDataSetCreation;
const UserIdSearchCriteriaDto: UserIdSearchCriteria = V3API.UserIdSearchCriteria;
const UserIdsSearchCriteriaDto: UserIdsSearchCriteria = V3API.UserIdsSearchCriteria;
const UserNameSearchCriteriaDto: UserNameSearchCriteria = V3API.UserNameSearchCriteria;
const VocabularyDto: Vocabulary = V3API.Vocabulary;
const VocabularyCreationDto: VocabularyCreation = V3API.VocabularyCreation;
const VocabularyDeletionOptionsDto: VocabularyDeletionOptions = V3API.VocabularyDeletionOptions;
const VocabularyFetchOptionsDto: VocabularyFetchOptions = V3API.VocabularyFetchOptions;
const VocabularyPermIdDto: VocabularyPermId = V3API.VocabularyPermId;
const VocabularySearchCriteriaDto: VocabularySearchCriteria = V3API.VocabularySearchCriteria;
const VocabularySortOptionsDto: VocabularySortOptions = V3API.VocabularySortOptions;
const VocabularyTermDto: VocabularyTerm = V3API.VocabularyTerm;
const VocabularyTermCreationDto: VocabularyTermCreation = V3API.VocabularyTermCreation;
const VocabularyTermDeletionOptionsDto: VocabularyTermDeletionOptions = V3API.VocabularyTermDeletionOptions;
const VocabularyTermFetchOptionsDto: VocabularyTermFetchOptions = V3API.VocabularyTermFetchOptions;
const VocabularyTermPermIdDto: VocabularyTermPermId = V3API.VocabularyTermPermId;
const VocabularyTermReplacementDto: VocabularyTermReplacement = V3API.VocabularyTermReplacement;
const VocabularyTermSearchCriteriaDto: VocabularyTermSearchCriteria = V3API.VocabularyTermSearchCriteria;
const VocabularyTermSortOptionsDto: VocabularyTermSortOptions = V3API.VocabularyTermSortOptions;
const VocabularyTermUpdateDto: VocabularyTermUpdate = V3API.VocabularyTermUpdate;
const VocabularyUpdateDto: VocabularyUpdate = V3API.VocabularyUpdate;
const WebAppSettingDto: WebAppSetting = V3API.WebAppSetting;
const WebAppSettingCreationDto: WebAppSettingCreation = V3API.WebAppSettingCreation;
const WebAppSettingsDto: WebAppSettings = V3API.WebAppSettings;
const WebAppSettingsFetchOptionsDto: WebAppSettingsFetchOptions = V3API.WebAppSettingsFetchOptions;
const WebAppSettingsSortOptionsDto: WebAppSettingsSortOptions = V3API.WebAppSettingsSortOptions;
const WebAppSettingsUpdateValueDto: WebAppSettingsUpdateValue = V3API.WebAppSettingsUpdateValue;
const openbisDto: OpenBIS = V3API.openbis;

export {
AbstractCompositeSearchCriteriaDto as AbstractCompositeSearchCriteria,
AbstractDateObjectValueDto as AbstractDateObjectValue,
AbstractDateValueDto as AbstractDateValue,
AbstractEntitySearchCriteriaDto as AbstractEntitySearchCriteria,
AbstractEntityTypeSearchCriteriaDto as AbstractEntityTypeSearchCriteria,
AbstractExecutionOptionsWithParametersDto as AbstractExecutionOptionsWithParameters,
AbstractFieldSearchCriteriaDto as AbstractFieldSearchCriteria,
AbstractNumberValueDto as AbstractNumberValue,
AbstractObjectDeletionOptionsDto as AbstractObjectDeletionOptions,
AbstractObjectSearchCriteriaDto as AbstractObjectSearchCriteria,
AbstractOperationExecutionOptionsDto as AbstractOperationExecutionOptions,
AbstractSearchCriteriaDto as AbstractSearchCriteria,
AbstractStringValueDto as AbstractStringValue,
AbstractTimeZoneValueDto as AbstractTimeZoneValue,
AbstractValueDto as AbstractValue,
AddressSearchCriteriaDto as AddressSearchCriteria,
AggregationServiceDto as AggregationService,
AggregationServiceExecutionOptionsDto as AggregationServiceExecutionOptions,
AggregationServiceFetchOptionsDto as AggregationServiceFetchOptions,
AggregationServiceSearchCriteriaDto as AggregationServiceSearchCriteria,
AggregationServiceSortOptionsDto as AggregationServiceSortOptions,
AnyBooleanPropertySearchCriteriaDto as AnyBooleanPropertySearchCriteria,
AnyDatePropertySearchCriteriaDto as AnyDatePropertySearchCriteria,
AnyFieldSearchCriteriaDto as AnyFieldSearchCriteria,
AnyNumberPropertySearchCriteriaDto as AnyNumberPropertySearchCriteria,
AnyPropertySearchCriteriaDto as AnyPropertySearchCriteria,
AnyStringPropertySearchCriteriaDto as AnyStringPropertySearchCriteria,
AnyStringValueDto as AnyStringValue,
ArchiveDataSetsOperationDto as ArchiveDataSetsOperation,
ArchiveDataSetsOperationResultDto as ArchiveDataSetsOperationResult,
ArchivingRequestedSearchCriteriaDto as ArchivingRequestedSearchCriteria,
ArchivingStatusDto as ArchivingStatus,
AsynchronousOperationExecutionOptionsDto as AsynchronousOperationExecutionOptions,
AsynchronousOperationExecutionResultsDto as AsynchronousOperationExecutionResults,
AttachmentDto as Attachment,
AttachmentCreationDto as AttachmentCreation,
AttachmentFetchOptionsDto as AttachmentFetchOptions,
AttachmentFileNameDto as AttachmentFileName,
AttachmentListUpdateValueDto as AttachmentListUpdateValue,
AttachmentSortOptionsDto as AttachmentSortOptions,
AuthorizationGroupDto as AuthorizationGroup,
AuthorizationGroupCreationDto as AuthorizationGroupCreation,
AuthorizationGroupDeletionOptionsDto as AuthorizationGroupDeletionOptions,
AuthorizationGroupFetchOptionsDto as AuthorizationGroupFetchOptions,
AuthorizationGroupPermIdDto as AuthorizationGroupPermId,
AuthorizationGroupSearchCriteriaDto as AuthorizationGroupSearchCriteria,
AuthorizationGroupSortOptionsDto as AuthorizationGroupSortOptions,
AuthorizationGroupUpdateDto as AuthorizationGroupUpdate,
BdsDirectoryStorageFormatPermIdDto as BdsDirectoryStorageFormatPermId,
BooleanFieldSearchCriteriaDto as BooleanFieldSearchCriteria,
BooleanPropertySearchCriteriaDto as BooleanPropertySearchCriteria,
CacheModeDto as CacheMode,
CodeSearchCriteriaDto as CodeSearchCriteria,
CodesSearchCriteriaDto as CodesSearchCriteria,
CollectionFieldSearchCriteriaDto as CollectionFieldSearchCriteria,
CompleteDto as Complete,
CompleteSearchCriteriaDto as CompleteSearchCriteria,
ConfirmDeletionsOperationDto as ConfirmDeletionsOperation,
ConfirmDeletionsOperationResultDto as ConfirmDeletionsOperationResult,
ContentCopyDto as ContentCopy,
ContentCopyCreationDto as ContentCopyCreation,
ContentCopyHistoryEntryDto as ContentCopyHistoryEntry,
ContentCopyListUpdateValueDto as ContentCopyListUpdateValue,
ContentCopyPermIdDto as ContentCopyPermId,
ContentCopySearchCriteriaDto as ContentCopySearchCriteria,
ControlledVocabularyPropertySearchCriteriaDto as ControlledVocabularyPropertySearchCriteria,
CreateAuthorizationGroupsOperationDto as CreateAuthorizationGroupsOperation,
CreateAuthorizationGroupsOperationResultDto as CreateAuthorizationGroupsOperationResult,
CreateCodesOperationDto as CreateCodesOperation,
CreateCodesOperationResultDto as CreateCodesOperationResult,
CreateDataSetTypesOperationDto as CreateDataSetTypesOperation,
CreateDataSetTypesOperationResultDto as CreateDataSetTypesOperationResult,
CreateDataSetsOperationDto as CreateDataSetsOperation,
CreateDataSetsOperationResultDto as CreateDataSetsOperationResult,
CreateExperimentTypesOperationDto as CreateExperimentTypesOperation,
CreateExperimentTypesOperationResultDto as CreateExperimentTypesOperationResult,
CreateExperimentsOperationDto as CreateExperimentsOperation,
CreateExperimentsOperationResultDto as CreateExperimentsOperationResult,
CreateExternalDmsOperationDto as CreateExternalDmsOperation,
CreateExternalDmsOperationResultDto as CreateExternalDmsOperationResult,
CreateMaterialTypesOperationDto as CreateMaterialTypesOperation,
CreateMaterialTypesOperationResultDto as CreateMaterialTypesOperationResult,
CreateMaterialsOperationDto as CreateMaterialsOperation,
CreateMaterialsOperationResultDto as CreateMaterialsOperationResult,
CreateObjectsOperationDto as CreateObjectsOperation,
CreateObjectsOperationResultDto as CreateObjectsOperationResult,
CreatePermIdsOperationDto as CreatePermIdsOperation,
CreatePermIdsOperationResultDto as CreatePermIdsOperationResult,
CreatePersonalAccessTokensOperationDto as CreatePersonalAccessTokensOperation,
CreatePersonalAccessTokensOperationResultDto as CreatePersonalAccessTokensOperationResult,
CreatePersonsOperationDto as CreatePersonsOperation,
CreatePersonsOperationResultDto as CreatePersonsOperationResult,
CreatePluginsOperationDto as CreatePluginsOperation,
CreatePluginsOperationResultDto as CreatePluginsOperationResult,
CreateProjectsOperationDto as CreateProjectsOperation,
CreateProjectsOperationResultDto as CreateProjectsOperationResult,
CreatePropertyTypesOperationDto as CreatePropertyTypesOperation,
CreatePropertyTypesOperationResultDto as CreatePropertyTypesOperationResult,
CreateQueriesOperationDto as CreateQueriesOperation,
CreateQueriesOperationResultDto as CreateQueriesOperationResult,
CreateRoleAssignmentsOperationDto as CreateRoleAssignmentsOperation,
CreateRoleAssignmentsOperationResultDto as CreateRoleAssignmentsOperationResult,
CreateSampleTypesOperationDto as CreateSampleTypesOperation,
CreateSampleTypesOperationResultDto as CreateSampleTypesOperationResult,
CreateSamplesOperationDto as CreateSamplesOperation,
CreateSamplesOperationResultDto as CreateSamplesOperationResult,
CreateSemanticAnnotationsOperationDto as CreateSemanticAnnotationsOperation,
CreateSemanticAnnotationsOperationResultDto as CreateSemanticAnnotationsOperationResult,
CreateSpacesOperationDto as CreateSpacesOperation,
CreateSpacesOperationResultDto as CreateSpacesOperationResult,
CreateTagsOperationDto as CreateTagsOperation,
CreateTagsOperationResultDto as CreateTagsOperationResult,
CreateVocabulariesOperationDto as CreateVocabulariesOperation,
CreateVocabulariesOperationResultDto as CreateVocabulariesOperationResult,
CreateVocabularyTermsOperationDto as CreateVocabularyTermsOperation,
CreateVocabularyTermsOperationResultDto as CreateVocabularyTermsOperationResult,
CreationIdDto as CreationId,
CustomASServiceDto as CustomASService,
CustomASServiceCodeDto as CustomASServiceCode,
CustomASServiceExecutionOptionsDto as CustomASServiceExecutionOptions,
CustomASServiceFetchOptionsDto as CustomASServiceFetchOptions,
CustomASServiceSearchCriteriaDto as CustomASServiceSearchCriteria,
CustomASServiceSortOptionsDto as CustomASServiceSortOptions,
DataSetDto as DataSet,
DataSetArchiveOptionsDto as DataSetArchiveOptions,
DataSetCreationDto as DataSetCreation,
DataSetDeletionOptionsDto as DataSetDeletionOptions,
DataSetFetchOptionsDto as DataSetFetchOptions,
DataSetFileDto as DataSetFile,
DataSetFileCreationDto as DataSetFileCreation,
DataSetFileFetchOptionsDto as DataSetFileFetchOptions,
DataSetFilePermIdDto as DataSetFilePermId,
DataSetFileSearchCriteriaDto as DataSetFileSearchCriteria,
DataSetFileSortOptionsDto as DataSetFileSortOptions,
DataSetKindDto as DataSetKind,
DataSetLockOptionsDto as DataSetLockOptions,
DataSetPermIdDto as DataSetPermId,
DataSetRelationTypeDto as DataSetRelationType,
DataSetSearchCriteriaDto as DataSetSearchCriteria,
DataSetSearchRelationDto as DataSetSearchRelation,
DataSetSortOptionsDto as DataSetSortOptions,
DataSetTypeDto as DataSetType,
DataSetTypeCreationDto as DataSetTypeCreation,
DataSetTypeDeletionOptionsDto as DataSetTypeDeletionOptions,
DataSetTypeFetchOptionsDto as DataSetTypeFetchOptions,
DataSetTypeSearchCriteriaDto as DataSetTypeSearchCriteria,
DataSetTypeSortOptionsDto as DataSetTypeSortOptions,
DataSetTypeUpdateDto as DataSetTypeUpdate,
DataSetUnarchiveOptionsDto as DataSetUnarchiveOptions,
DataSetUnlockOptionsDto as DataSetUnlockOptions,
DataSetUpdateDto as DataSetUpdate,
DataStoreDto as DataStore,
DataStoreFetchOptionsDto as DataStoreFetchOptions,
DataStorePermIdDto as DataStorePermId,
DataStoreSearchCriteriaDto as DataStoreSearchCriteria,
DataStoreSortOptionsDto as DataStoreSortOptions,
DataTypeDto as DataType,
DatabaseIdSearchCriteriaDto as DatabaseIdSearchCriteria,
DateEarlierThanOrEqualToValueDto as DateEarlierThanOrEqualToValue,
DateEarlierThanValueDto as DateEarlierThanValue,
DateEqualToValueDto as DateEqualToValue,
DateFieldSearchCriteriaDto as DateFieldSearchCriteria,
DateLaterThanOrEqualToValueDto as DateLaterThanOrEqualToValue,
DateLaterThanValueDto as DateLaterThanValue,
DateObjectEarlierThanOrEqualToValueDto as DateObjectEarlierThanOrEqualToValue,
DateObjectEarlierThanValueDto as DateObjectEarlierThanValue,
DateObjectEqualToValueDto as DateObjectEqualToValue,
DateObjectLaterThanOrEqualToValueDto as DateObjectLaterThanOrEqualToValue,
DateObjectLaterThanValueDto as DateObjectLaterThanValue,
DatePropertySearchCriteriaDto as DatePropertySearchCriteria,
DeleteAuthorizationGroupsOperationDto as DeleteAuthorizationGroupsOperation,
DeleteAuthorizationGroupsOperationResultDto as DeleteAuthorizationGroupsOperationResult,
DeleteDataSetTypesOperationDto as DeleteDataSetTypesOperation,
DeleteDataSetTypesOperationResultDto as DeleteDataSetTypesOperationResult,
DeleteDataSetsOperationDto as DeleteDataSetsOperation,
DeleteDataSetsOperationResultDto as DeleteDataSetsOperationResult,
DeleteExperimentTypesOperationDto as DeleteExperimentTypesOperation,
DeleteExperimentTypesOperationResultDto as DeleteExperimentTypesOperationResult,
DeleteExperimentsOperationDto as DeleteExperimentsOperation,
DeleteExperimentsOperationResultDto as DeleteExperimentsOperationResult,
DeleteExternalDmsOperationDto as DeleteExternalDmsOperation,
DeleteExternalDmsOperationResultDto as DeleteExternalDmsOperationResult,
DeleteMaterialTypesOperationDto as DeleteMaterialTypesOperation,
DeleteMaterialTypesOperationResultDto as DeleteMaterialTypesOperationResult,
DeleteMaterialsOperationDto as DeleteMaterialsOperation,
DeleteMaterialsOperationResultDto as DeleteMaterialsOperationResult,
DeleteObjectsOperationDto as DeleteObjectsOperation,
DeleteObjectsOperationResultDto as DeleteObjectsOperationResult,
DeleteObjectsWithTrashOperationResultDto as DeleteObjectsWithTrashOperationResult,
DeleteObjectsWithoutTrashOperationResultDto as DeleteObjectsWithoutTrashOperationResult,
DeleteOperationExecutionsOperationDto as DeleteOperationExecutionsOperation,
DeleteOperationExecutionsOperationResultDto as DeleteOperationExecutionsOperationResult,
DeletePersonalAccessTokensOperationDto as DeletePersonalAccessTokensOperation,
DeletePersonalAccessTokensOperationResultDto as DeletePersonalAccessTokensOperationResult,
DeletePersonsOperationDto as DeletePersonsOperation,
DeletePersonsOperationResultDto as DeletePersonsOperationResult,
DeletePluginsOperationDto as DeletePluginsOperation,
DeletePluginsOperationResultDto as DeletePluginsOperationResult,
DeleteProjectsOperationDto as DeleteProjectsOperation,
DeleteProjectsOperationResultDto as DeleteProjectsOperationResult,
DeletePropertyTypesOperationDto as DeletePropertyTypesOperation,
DeletePropertyTypesOperationResultDto as DeletePropertyTypesOperationResult,
DeleteQueriesOperationDto as DeleteQueriesOperation,
DeleteQueriesOperationResultDto as DeleteQueriesOperationResult,
DeleteRoleAssignmentsOperationDto as DeleteRoleAssignmentsOperation,
DeleteRoleAssignmentsOperationResultDto as DeleteRoleAssignmentsOperationResult,
DeleteSampleTypesOperationDto as DeleteSampleTypesOperation,
DeleteSampleTypesOperationResultDto as DeleteSampleTypesOperationResult,
DeleteSamplesOperationDto as DeleteSamplesOperation,
DeleteSamplesOperationResultDto as DeleteSamplesOperationResult,
DeleteSemanticAnnotationsOperationDto as DeleteSemanticAnnotationsOperation,
DeleteSemanticAnnotationsOperationResultDto as DeleteSemanticAnnotationsOperationResult,
DeleteSpacesOperationDto as DeleteSpacesOperation,
DeleteSpacesOperationResultDto as DeleteSpacesOperationResult,
DeleteTagsOperationDto as DeleteTagsOperation,
DeleteTagsOperationResultDto as DeleteTagsOperationResult,
DeleteVocabulariesOperationDto as DeleteVocabulariesOperation,
DeleteVocabulariesOperationResultDto as DeleteVocabulariesOperationResult,
DeleteVocabularyTermsOperationDto as DeleteVocabularyTermsOperation,
DeleteVocabularyTermsOperationResultDto as DeleteVocabularyTermsOperationResult,
DeletedObjectDto as DeletedObject,
DeletedObjectFetchOptionsDto as DeletedObjectFetchOptions,
DeletionDto as Deletion,
DeletionFetchOptionsDto as DeletionFetchOptions,
DeletionSearchCriteriaDto as DeletionSearchCriteria,
DeletionSortOptionsDto as DeletionSortOptions,
DeletionTechIdDto as DeletionTechId,
DescriptionSearchCriteriaDto as DescriptionSearchCriteria,
DescriptorAccessionIdSearchCriteriaDto as DescriptorAccessionIdSearchCriteria,
DescriptorOntologyIdSearchCriteriaDto as DescriptorOntologyIdSearchCriteria,
DescriptorOntologyVersionSearchCriteriaDto as DescriptorOntologyVersionSearchCriteria,
DssServicePermIdDto as DssServicePermId,
DynamicPropertyPluginEvaluationOptionsDto as DynamicPropertyPluginEvaluationOptions,
DynamicPropertyPluginEvaluationResultDto as DynamicPropertyPluginEvaluationResult,
EmailSearchCriteriaDto as EmailSearchCriteria,
EmptyFetchOptionsDto as EmptyFetchOptions,
EntityKindDto as EntityKind,
EntityKindSearchCriteriaDto as EntityKindSearchCriteria,
EntitySortOptionsDto as EntitySortOptions,
EntityTypeDto as EntityType,
EntityTypeCodePatternSearchCriteriaDto as EntityTypeCodePatternSearchCriteria,
EntityTypeFetchOptionsDto as EntityTypeFetchOptions,
EntityTypePermIdDto as EntityTypePermId,
EntityTypeSearchCriteriaDto as EntityTypeSearchCriteria,
EntityTypeSortOptionsDto as EntityTypeSortOptions,
EntityValidationPluginEvaluationOptionsDto as EntityValidationPluginEvaluationOptions,
EntityValidationPluginEvaluationResultDto as EntityValidationPluginEvaluationResult,
EntityWithPropertiesSortOptionsDto as EntityWithPropertiesSortOptions,
EnumDto as Enum,
EnumFieldSearchCriteriaDto as EnumFieldSearchCriteria,
EvaluatePluginOperationDto as EvaluatePluginOperation,
EvaluatePluginOperationResultDto as EvaluatePluginOperationResult,
EventDto as Event,
EventDescriptionSearchCriteriaDto as EventDescriptionSearchCriteria,
EventEntityProjectIdSearchCriteriaDto as EventEntityProjectIdSearchCriteria,
EventEntityProjectSearchCriteriaDto as EventEntityProjectSearchCriteria,
EventEntityRegistrationDateSearchCriteriaDto as EventEntityRegistrationDateSearchCriteria,
EventEntityRegistratorSearchCriteriaDto as EventEntityRegistratorSearchCriteria,
EventEntitySpaceIdSearchCriteriaDto as EventEntitySpaceIdSearchCriteria,
EventEntitySpaceSearchCriteriaDto as EventEntitySpaceSearchCriteria,
EventEntityTypeSearchCriteriaDto as EventEntityTypeSearchCriteria,
EventFetchOptionsDto as EventFetchOptions,
EventIdentifierSearchCriteriaDto as EventIdentifierSearchCriteria,
EventReasonSearchCriteriaDto as EventReasonSearchCriteria,
EventSearchCriteriaDto as EventSearchCriteria,
EventSortOptionsDto as EventSortOptions,
EventTechIdDto as EventTechId,
EventTypeDto as EventType,
EventTypeSearchCriteriaDto as EventTypeSearchCriteria,
ExecuteAggregationServiceOperationDto as ExecuteAggregationServiceOperation,
ExecuteAggregationServiceOperationResultDto as ExecuteAggregationServiceOperationResult,
ExecuteCustomASServiceOperationDto as ExecuteCustomASServiceOperation,
ExecuteCustomASServiceOperationResultDto as ExecuteCustomASServiceOperationResult,
ExecuteProcessingServiceOperationDto as ExecuteProcessingServiceOperation,
ExecuteProcessingServiceOperationResultDto as ExecuteProcessingServiceOperationResult,
ExecuteQueryOperationDto as ExecuteQueryOperation,
ExecuteQueryOperationResultDto as ExecuteQueryOperationResult,
ExecuteReportingServiceOperationDto as ExecuteReportingServiceOperation,
ExecuteReportingServiceOperationResultDto as ExecuteReportingServiceOperationResult,
ExecuteSearchDomainServiceOperationDto as ExecuteSearchDomainServiceOperation,
ExecuteSearchDomainServiceOperationResultDto as ExecuteSearchDomainServiceOperationResult,
ExecuteSqlOperationDto as ExecuteSqlOperation,
ExecuteSqlOperationResultDto as ExecuteSqlOperationResult,
ExperimentDto as Experiment,
ExperimentCreationDto as ExperimentCreation,
ExperimentDeletionOptionsDto as ExperimentDeletionOptions,
ExperimentFetchOptionsDto as ExperimentFetchOptions,
ExperimentIdentifierDto as ExperimentIdentifier,
ExperimentPermIdDto as ExperimentPermId,
ExperimentRelationTypeDto as ExperimentRelationType,
ExperimentSearchCriteriaDto as ExperimentSearchCriteria,
ExperimentSortOptionsDto as ExperimentSortOptions,
ExperimentTypeDto as ExperimentType,
ExperimentTypeCreationDto as ExperimentTypeCreation,
ExperimentTypeDeletionOptionsDto as ExperimentTypeDeletionOptions,
ExperimentTypeFetchOptionsDto as ExperimentTypeFetchOptions,
ExperimentTypeSearchCriteriaDto as ExperimentTypeSearchCriteria,
ExperimentTypeSortOptionsDto as ExperimentTypeSortOptions,
ExperimentTypeUpdateDto as ExperimentTypeUpdate,
ExperimentUpdateDto as ExperimentUpdate,
ExternalCodeSearchCriteriaDto as ExternalCodeSearchCriteria,
ExternalDmsDto as ExternalDms,
ExternalDmsAddressTypeDto as ExternalDmsAddressType,
ExternalDmsCreationDto as ExternalDmsCreation,
ExternalDmsDeletionOptionsDto as ExternalDmsDeletionOptions,
ExternalDmsFetchOptionsDto as ExternalDmsFetchOptions,
ExternalDmsPermIdDto as ExternalDmsPermId,
ExternalDmsSearchCriteriaDto as ExternalDmsSearchCriteria,
ExternalDmsSortOptionsDto as ExternalDmsSortOptions,
ExternalDmsTypeSearchCriteriaDto as ExternalDmsTypeSearchCriteria,
ExternalDmsUpdateDto as ExternalDmsUpdate,
FastDownloadSessionDto as FastDownloadSession,
FastDownloadSessionOptionsDto as FastDownloadSessionOptions,
FetchOptionsDto as FetchOptions,
FieldUpdateValueDto as FieldUpdateValue,
FileFormatTypeDto as FileFormatType,
FileFormatTypeFetchOptionsDto as FileFormatTypeFetchOptions,
FileFormatTypePermIdDto as FileFormatTypePermId,
FileFormatTypeSearchCriteriaDto as FileFormatTypeSearchCriteria,
FileFormatTypeSortOptionsDto as FileFormatTypeSortOptions,
FirstNameSearchCriteriaDto as FirstNameSearchCriteria,
FullDataSetCreationDto as FullDataSetCreation,
GetAuthorizationGroupsOperationDto as GetAuthorizationGroupsOperation,
GetAuthorizationGroupsOperationResultDto as GetAuthorizationGroupsOperationResult,
GetDataSetTypesOperationDto as GetDataSetTypesOperation,
GetDataSetTypesOperationResultDto as GetDataSetTypesOperationResult,
GetDataSetsOperationDto as GetDataSetsOperation,
GetDataSetsOperationResultDto as GetDataSetsOperationResult,
GetExperimentTypesOperationDto as GetExperimentTypesOperation,
GetExperimentTypesOperationResultDto as GetExperimentTypesOperationResult,
GetExperimentsOperationDto as GetExperimentsOperation,
GetExperimentsOperationResultDto as GetExperimentsOperationResult,
GetExternalDmsOperationDto as GetExternalDmsOperation,
GetExternalDmsOperationResultDto as GetExternalDmsOperationResult,
GetMaterialTypesOperationDto as GetMaterialTypesOperation,
GetMaterialTypesOperationResultDto as GetMaterialTypesOperationResult,
GetMaterialsOperationDto as GetMaterialsOperation,
GetMaterialsOperationResultDto as GetMaterialsOperationResult,
GetObjectsOperationDto as GetObjectsOperation,
GetObjectsOperationResultDto as GetObjectsOperationResult,
GetOperationExecutionsOperationDto as GetOperationExecutionsOperation,
GetOperationExecutionsOperationResultDto as GetOperationExecutionsOperationResult,
GetPersonalAccessTokensOperationDto as GetPersonalAccessTokensOperation,
GetPersonalAccessTokensOperationResultDto as GetPersonalAccessTokensOperationResult,
GetPersonsOperationDto as GetPersonsOperation,
GetPersonsOperationResultDto as GetPersonsOperationResult,
GetPluginsOperationDto as GetPluginsOperation,
GetPluginsOperationResultDto as GetPluginsOperationResult,
GetProjectsOperationDto as GetProjectsOperation,
GetProjectsOperationResultDto as GetProjectsOperationResult,
GetPropertyTypesOperationDto as GetPropertyTypesOperation,
GetPropertyTypesOperationResultDto as GetPropertyTypesOperationResult,
GetQueriesOperationDto as GetQueriesOperation,
GetQueriesOperationResultDto as GetQueriesOperationResult,
GetQueryDatabasesOperationDto as GetQueryDatabasesOperation,
GetQueryDatabasesOperationResultDto as GetQueryDatabasesOperationResult,
GetRightsOperationDto as GetRightsOperation,
GetRightsOperationResultDto as GetRightsOperationResult,
GetRoleAssignmentsOperationDto as GetRoleAssignmentsOperation,
GetRoleAssignmentsOperationResultDto as GetRoleAssignmentsOperationResult,
GetSampleTypesOperationDto as GetSampleTypesOperation,
GetSampleTypesOperationResultDto as GetSampleTypesOperationResult,
GetSamplesOperationDto as GetSamplesOperation,
GetSamplesOperationResultDto as GetSamplesOperationResult,
GetSemanticAnnotationsOperationDto as GetSemanticAnnotationsOperation,
GetSemanticAnnotationsOperationResultDto as GetSemanticAnnotationsOperationResult,
GetServerInformationOperationDto as GetServerInformationOperation,
GetServerInformationOperationResultDto as GetServerInformationOperationResult,
GetServerPublicInformationOperationDto as GetServerPublicInformationOperation,
GetServerPublicInformationOperationResultDto as GetServerPublicInformationOperationResult,
GetSessionInformationOperationDto as GetSessionInformationOperation,
GetSessionInformationOperationResultDto as GetSessionInformationOperationResult,
GetSpacesOperationDto as GetSpacesOperation,
GetSpacesOperationResultDto as GetSpacesOperationResult,
GetTagsOperationDto as GetTagsOperation,
GetTagsOperationResultDto as GetTagsOperationResult,
GetVocabulariesOperationDto as GetVocabulariesOperation,
GetVocabulariesOperationResultDto as GetVocabulariesOperationResult,
GetVocabularyTermsOperationDto as GetVocabularyTermsOperation,
GetVocabularyTermsOperationResultDto as GetVocabularyTermsOperationResult,
GitCommitHashSearchCriteriaDto as GitCommitHashSearchCriteria,
GitRepositoryIdSearchCriteriaDto as GitRepositoryIdSearchCriteria,
GlobalSearchCriteriaDto as GlobalSearchCriteria,
GlobalSearchObjectDto as GlobalSearchObject,
GlobalSearchObjectFetchOptionsDto as GlobalSearchObjectFetchOptions,
GlobalSearchObjectKindDto as GlobalSearchObjectKind,
GlobalSearchObjectKindCriteriaDto as GlobalSearchObjectKindCriteria,
GlobalSearchObjectSortOptionsDto as GlobalSearchObjectSortOptions,
GlobalSearchTextCriteriaDto as GlobalSearchTextCriteria,
GlobalSearchWildCardsCriteriaDto as GlobalSearchWildCardsCriteria,
HistoryEntryDto as HistoryEntry,
HistoryEntryFetchOptionsDto as HistoryEntryFetchOptions,
HistoryEntrySortOptionsDto as HistoryEntrySortOptions,
IAttachmentIdDto as IAttachmentId,
IAttachmentsHolderDto as IAttachmentsHolder,
IAuthorizationGroupIdDto as IAuthorizationGroupId,
ICodeHolderDto as ICodeHolder,
IContentCopyIdDto as IContentCopyId,
ICreationDto as ICreation,
ICreationIdHolderDto as ICreationIdHolder,
ICustomASServiceIdDto as ICustomASServiceId,
IDataSetCodesHolderDto as IDataSetCodesHolder,
IDataSetFileIdDto as IDataSetFileId,
IDataSetIdDto as IDataSetId,
IDataSetsHolderDto as IDataSetsHolder,
IDataStoreIdDto as IDataStoreId,
IDateDto as IDate,
IDateFormatDto as IDateFormat,
IDeletionIdDto as IDeletionId,
IDescriptionHolderDto as IDescriptionHolder,
IDssServiceIdDto as IDssServiceId,
IEntityTypeDto as IEntityType,
IEntityTypeCreationDto as IEntityTypeCreation,
IEntityTypeHolderDto as IEntityTypeHolder,
IEntityTypeIdDto as IEntityTypeId,
IEntityTypeUpdateDto as IEntityTypeUpdate,
IEventIdDto as IEventId,
IExperimentHolderDto as IExperimentHolder,
IExperimentIdDto as IExperimentId,
IExperimentsHolderDto as IExperimentsHolder,
IExternalDmsIdDto as IExternalDmsId,
IFileFormatTypeIdDto as IFileFormatTypeId,
IIdentifierHolderDto as IIdentifierHolder,
ILabelHolderDto as ILabelHolder,
ILocatorTypeIdDto as ILocatorTypeId,
IMaterialIdDto as IMaterialId,
IMaterialPropertiesHolderDto as IMaterialPropertiesHolder,
IMaterialsHolderDto as IMaterialsHolder,
IMetaDataUpdateHolderDto as IMetaDataUpdateHolder,
IModificationDateHolderDto as IModificationDateHolder,
IModifierHolderDto as IModifierHolder,
INameHolderDto as INameHolder,
IObjectCreationDto as IObjectCreation,
IObjectIdDto as IObjectId,
IObjectUpdateDto as IObjectUpdate,
IOperationDto as IOperation,
IOperationExecutionErrorDto as IOperationExecutionError,
IOperationExecutionIdDto as IOperationExecutionId,
IOperationExecutionNotificationDto as IOperationExecutionNotification,
IOperationExecutionOptionsDto as IOperationExecutionOptions,
IOperationExecutionProgressDto as IOperationExecutionProgress,
IOperationExecutionResultsDto as IOperationExecutionResults,
IOperationResultDto as IOperationResult,
IOwnerHolderDto as IOwnerHolder,
IParentChildrenHolderDto as IParentChildrenHolder,
IPermIdHolderDto as IPermIdHolder,
IPersonIdDto as IPersonId,
IPersonalAccessTokenIdDto as IPersonalAccessTokenId,
IPluginIdDto as IPluginId,
IProjectHolderDto as IProjectHolder,
IProjectIdDto as IProjectId,
IProjectsHolderDto as IProjectsHolder,
IPropertiesHolderDto as IPropertiesHolder,
IPropertyAssignmentIdDto as IPropertyAssignmentId,
IPropertyAssignmentsHolderDto as IPropertyAssignmentsHolder,
IPropertyTypeHolderDto as IPropertyTypeHolder,
IPropertyTypeIdDto as IPropertyTypeId,
IQueryDatabaseIdDto as IQueryDatabaseId,
IQueryIdDto as IQueryId,
IRegistrationDateHolderDto as IRegistrationDateHolder,
IRegistratorHolderDto as IRegistratorHolder,
IRelationTypeDto as IRelationType,
IRoleAssignmentIdDto as IRoleAssignmentId,
ISampleHolderDto as ISampleHolder,
ISampleIdDto as ISampleId,
ISamplesHolderDto as ISamplesHolder,
ISearchCriteriaDto as ISearchCriteria,
ISemanticAnnotationIdDto as ISemanticAnnotationId,
ISemanticAnnotationsHolderDto as ISemanticAnnotationsHolder,
ISessionInformationIdDto as ISessionInformationId,
ISpaceHolderDto as ISpaceHolder,
ISpaceIdDto as ISpaceId,
IStorageFormatIdDto as IStorageFormatId,
ITableCellDto as ITableCell,
ITagIdDto as ITagId,
ITagsHolderDto as ITagsHolder,
ITimeZoneDto as ITimeZone,
IUpdateDto as IUpdate,
IValidationPluginHolderDto as IValidationPluginHolder,
IVocabularyIdDto as IVocabularyId,
IVocabularyTermIdDto as IVocabularyTermId,
IdListUpdateValueDto as IdListUpdateValue,
IdSearchCriteriaDto as IdSearchCriteria,
IdentifierSearchCriteriaDto as IdentifierSearchCriteria,
IdsSearchCriteriaDto as IdsSearchCriteria,
LabelSearchCriteriaDto as LabelSearchCriteria,
LastNameSearchCriteriaDto as LastNameSearchCriteria,
LinkedDataDto as LinkedData,
LinkedDataCreationDto as LinkedDataCreation,
LinkedDataFetchOptionsDto as LinkedDataFetchOptions,
LinkedDataSearchCriteriaDto as LinkedDataSearchCriteria,
LinkedDataSortOptionsDto as LinkedDataSortOptions,
LinkedDataUpdateDto as LinkedDataUpdate,
ListUpdateActionDto as ListUpdateAction,
ListUpdateActionAddDto as ListUpdateActionAdd,
ListUpdateActionRemoveDto as ListUpdateActionRemove,
ListUpdateActionSetDto as ListUpdateActionSet,
ListUpdateMapValuesDto as ListUpdateMapValues,
ListUpdateValueDto as ListUpdateValue,
ListableSampleTypeSearchCriteriaDto as ListableSampleTypeSearchCriteria,
LocationSearchCriteriaDto as LocationSearchCriteria,
LocatorTypeDto as LocatorType,
LocatorTypeFetchOptionsDto as LocatorTypeFetchOptions,
LocatorTypePermIdDto as LocatorTypePermId,
LocatorTypeSearchCriteriaDto as LocatorTypeSearchCriteria,
LocatorTypeSortOptionsDto as LocatorTypeSortOptions,
LockDataSetsOperationDto as LockDataSetsOperation,
LockDataSetsOperationResultDto as LockDataSetsOperationResult,
LongDateFormatDto as LongDateFormat,
MatchFetchOptionsDto as MatchFetchOptions,
MaterialDto as Material,
MaterialCreationDto as MaterialCreation,
MaterialDeletionOptionsDto as MaterialDeletionOptions,
MaterialFetchOptionsDto as MaterialFetchOptions,
MaterialPermIdDto as MaterialPermId,
MaterialSearchCriteriaDto as MaterialSearchCriteria,
MaterialSortOptionsDto as MaterialSortOptions,
MaterialTypeDto as MaterialType,
MaterialTypeCreationDto as MaterialTypeCreation,
MaterialTypeDeletionOptionsDto as MaterialTypeDeletionOptions,
MaterialTypeFetchOptionsDto as MaterialTypeFetchOptions,
MaterialTypeSearchCriteriaDto as MaterialTypeSearchCriteria,
MaterialTypeSortOptionsDto as MaterialTypeSortOptions,
MaterialTypeUpdateDto as MaterialTypeUpdate,
MaterialUpdateDto as MaterialUpdate,
MeDto as Me,
ModificationDateSearchCriteriaDto as ModificationDateSearchCriteria,
ModifierSearchCriteriaDto as ModifierSearchCriteria,
NameSearchCriteriaDto as NameSearchCriteria,
NoExperimentSearchCriteriaDto as NoExperimentSearchCriteria,
NoProjectSearchCriteriaDto as NoProjectSearchCriteria,
NoSampleContainerSearchCriteriaDto as NoSampleContainerSearchCriteria,
NoSampleSearchCriteriaDto as NoSampleSearchCriteria,
NoSpaceSearchCriteriaDto as NoSpaceSearchCriteria,
NormalDateFormatDto as NormalDateFormat,
NumberEqualToValueDto as NumberEqualToValue,
NumberFieldSearchCriteriaDto as NumberFieldSearchCriteria,
NumberGreaterThanOrEqualToValueDto as NumberGreaterThanOrEqualToValue,
NumberGreaterThanValueDto as NumberGreaterThanValue,
NumberLessThanOrEqualToValueDto as NumberLessThanOrEqualToValue,
NumberLessThanValueDto as NumberLessThanValue,
NumberPropertySearchCriteriaDto as NumberPropertySearchCriteria,
ObjectIdentifierDto as ObjectIdentifier,
ObjectKindDto as ObjectKind,
ObjectKindCriteriaDto as ObjectKindCriteria,
ObjectKindModificationDto as ObjectKindModification,
ObjectKindModificationFetchOptionsDto as ObjectKindModificationFetchOptions,
ObjectKindModificationSearchCriteriaDto as ObjectKindModificationSearchCriteria,
ObjectKindModificationSortOptionsDto as ObjectKindModificationSortOptions,
ObjectPermIdDto as ObjectPermId,
ObjectTechIdDto as ObjectTechId,
OperationExecutionDto as OperationExecution,
OperationExecutionAvailabilityDto as OperationExecutionAvailability,
OperationExecutionDeletionOptionsDto as OperationExecutionDeletionOptions,
OperationExecutionDetailsDto as OperationExecutionDetails,
OperationExecutionDetailsFetchOptionsDto as OperationExecutionDetailsFetchOptions,
OperationExecutionDetailsSortOptionsDto as OperationExecutionDetailsSortOptions,
OperationExecutionEmailNotificationDto as OperationExecutionEmailNotification,
OperationExecutionErrorDto as OperationExecutionError,
OperationExecutionFetchOptionsDto as OperationExecutionFetchOptions,
OperationExecutionNotificationFetchOptionsDto as OperationExecutionNotificationFetchOptions,
OperationExecutionNotificationSortOptionsDto as OperationExecutionNotificationSortOptions,
OperationExecutionPermIdDto as OperationExecutionPermId,
OperationExecutionProgressDto as OperationExecutionProgress,
OperationExecutionSearchCriteriaDto as OperationExecutionSearchCriteria,
OperationExecutionSortOptionsDto as OperationExecutionSortOptions,
OperationExecutionStateDto as OperationExecutionState,
OperationExecutionSummaryDto as OperationExecutionSummary,
OperationExecutionSummaryFetchOptionsDto as OperationExecutionSummaryFetchOptions,
OperationExecutionSummarySortOptionsDto as OperationExecutionSummarySortOptions,
OperationExecutionUpdateDto as OperationExecutionUpdate,
OperationKindDto as OperationKind,
OperationKindCriteriaDto as OperationKindCriteria,
PathSearchCriteriaDto as PathSearchCriteria,
PermIdSearchCriteriaDto as PermIdSearchCriteria,
PersonDto as Person,
PersonCreationDto as PersonCreation,
PersonDeletionOptionsDto as PersonDeletionOptions,
PersonFetchOptionsDto as PersonFetchOptions,
PersonPermIdDto as PersonPermId,
PersonSearchCriteriaDto as PersonSearchCriteria,
PersonSortOptionsDto as PersonSortOptions,
PersonUpdateDto as PersonUpdate,
PersonalAccessTokenDto as PersonalAccessToken,
PersonalAccessTokenCreationDto as PersonalAccessTokenCreation,
PersonalAccessTokenDeletionOptionsDto as PersonalAccessTokenDeletionOptions,
PersonalAccessTokenFetchOptionsDto as PersonalAccessTokenFetchOptions,
PersonalAccessTokenOwnerSearchCriteriaDto as PersonalAccessTokenOwnerSearchCriteria,
PersonalAccessTokenPermIdDto as PersonalAccessTokenPermId,
PersonalAccessTokenSearchCriteriaDto as PersonalAccessTokenSearchCriteria,
PersonalAccessTokenSessionNameSearchCriteriaDto as PersonalAccessTokenSessionNameSearchCriteria,
PersonalAccessTokenSessionSearchCriteriaDto as PersonalAccessTokenSessionSearchCriteria,
PersonalAccessTokenSortOptionsDto as PersonalAccessTokenSortOptions,
PersonalAccessTokenUpdateDto as PersonalAccessTokenUpdate,
PhysicalDataDto as PhysicalData,
PhysicalDataFetchOptionsDto as PhysicalDataFetchOptions,
PhysicalDataSearchCriteriaDto as PhysicalDataSearchCriteria,
PhysicalDataSortOptionsDto as PhysicalDataSortOptions,
PhysicalDataUpdateDto as PhysicalDataUpdate,
PluginDto as Plugin,
PluginCreationDto as PluginCreation,
PluginDeletionOptionsDto as PluginDeletionOptions,
PluginEvaluationOptionsDto as PluginEvaluationOptions,
PluginEvaluationResultDto as PluginEvaluationResult,
PluginFetchOptionsDto as PluginFetchOptions,
PluginKindDto as PluginKind,
PluginKindSearchCriteriaDto as PluginKindSearchCriteria,
PluginPermIdDto as PluginPermId,
PluginSearchCriteriaDto as PluginSearchCriteria,
PluginSortOptionsDto as PluginSortOptions,
PluginTypeDto as PluginType,
PluginTypeSearchCriteriaDto as PluginTypeSearchCriteria,
PluginUpdateDto as PluginUpdate,
PredicateAccessionIdSearchCriteriaDto as PredicateAccessionIdSearchCriteria,
PredicateOntologyIdSearchCriteriaDto as PredicateOntologyIdSearchCriteria,
PredicateOntologyVersionSearchCriteriaDto as PredicateOntologyVersionSearchCriteria,
PresentInArchiveSearchCriteriaDto as PresentInArchiveSearchCriteria,
ProcessingServiceDto as ProcessingService,
ProcessingServiceExecutionOptionsDto as ProcessingServiceExecutionOptions,
ProcessingServiceFetchOptionsDto as ProcessingServiceFetchOptions,
ProcessingServiceSearchCriteriaDto as ProcessingServiceSearchCriteria,
ProcessingServiceSortOptionsDto as ProcessingServiceSortOptions,
ProjectDto as Project,
ProjectCreationDto as ProjectCreation,
ProjectDeletionOptionsDto as ProjectDeletionOptions,
ProjectFetchOptionsDto as ProjectFetchOptions,
ProjectIdentifierDto as ProjectIdentifier,
ProjectPermIdDto as ProjectPermId,
ProjectRelationTypeDto as ProjectRelationType,
ProjectSearchCriteriaDto as ProjectSearchCriteria,
ProjectSortOptionsDto as ProjectSortOptions,
ProjectUpdateDto as ProjectUpdate,
PropertyAssignmentDto as PropertyAssignment,
PropertyAssignmentCreationDto as PropertyAssignmentCreation,
PropertyAssignmentFetchOptionsDto as PropertyAssignmentFetchOptions,
PropertyAssignmentListUpdateValueDto as PropertyAssignmentListUpdateValue,
PropertyAssignmentPermIdDto as PropertyAssignmentPermId,
PropertyAssignmentSearchCriteriaDto as PropertyAssignmentSearchCriteria,
PropertyAssignmentSortOptionsDto as PropertyAssignmentSortOptions,
PropertyFetchOptionsDto as PropertyFetchOptions,
PropertyHistoryEntryDto as PropertyHistoryEntry,
PropertyTypeDto as PropertyType,
PropertyTypeCreationDto as PropertyTypeCreation,
PropertyTypeDeletionOptionsDto as PropertyTypeDeletionOptions,
PropertyTypeFetchOptionsDto as PropertyTypeFetchOptions,
PropertyTypePermIdDto as PropertyTypePermId,
PropertyTypeSearchCriteriaDto as PropertyTypeSearchCriteria,
PropertyTypeSortOptionsDto as PropertyTypeSortOptions,
PropertyTypeUpdateDto as PropertyTypeUpdate,
ProprietaryStorageFormatPermIdDto as ProprietaryStorageFormatPermId,
QueryDto as Query,
QueryCreationDto as QueryCreation,
QueryDatabaseDto as QueryDatabase,
QueryDatabaseFetchOptionsDto as QueryDatabaseFetchOptions,
QueryDatabaseNameDto as QueryDatabaseName,
QueryDatabaseSearchCriteriaDto as QueryDatabaseSearchCriteria,
QueryDatabaseSortOptionsDto as QueryDatabaseSortOptions,
QueryDeletionOptionsDto as QueryDeletionOptions,
QueryExecutionOptionsDto as QueryExecutionOptions,
QueryFetchOptionsDto as QueryFetchOptions,
QueryNameDto as QueryName,
QuerySearchCriteriaDto as QuerySearchCriteria,
QuerySortOptionsDto as QuerySortOptions,
QueryTechIdDto as QueryTechId,
QueryTypeDto as QueryType,
QueryTypeSearchCriteriaDto as QueryTypeSearchCriteria,
QueryUpdateDto as QueryUpdate,
RegistrationDateSearchCriteriaDto as RegistrationDateSearchCriteria,
RegistratorSearchCriteriaDto as RegistratorSearchCriteria,
RelationHistoryEntryDto as RelationHistoryEntry,
RelationshipDto as Relationship,
RelationshipUpdateDto as RelationshipUpdate,
RelativeLocationLocatorTypePermIdDto as RelativeLocationLocatorTypePermId,
ReportingServiceDto as ReportingService,
ReportingServiceExecutionOptionsDto as ReportingServiceExecutionOptions,
ReportingServiceFetchOptionsDto as ReportingServiceFetchOptions,
ReportingServiceSearchCriteriaDto as ReportingServiceSearchCriteria,
ReportingServiceSortOptionsDto as ReportingServiceSortOptions,
RevertDeletionsOperationDto as RevertDeletionsOperation,
RevertDeletionsOperationResultDto as RevertDeletionsOperationResult,
RightDto as Right,
RightsDto as Rights,
RightsFetchOptionsDto as RightsFetchOptions,
RoleDto as Role,
RoleAssignmentDto as RoleAssignment,
RoleAssignmentCreationDto as RoleAssignmentCreation,
RoleAssignmentDeletionOptionsDto as RoleAssignmentDeletionOptions,
RoleAssignmentFetchOptionsDto as RoleAssignmentFetchOptions,
RoleAssignmentSearchCriteriaDto as RoleAssignmentSearchCriteria,
RoleAssignmentSortOptionsDto as RoleAssignmentSortOptions,
RoleAssignmentTechIdDto as RoleAssignmentTechId,
RoleLevelDto as RoleLevel,
SampleDto as Sample,
SampleCreationDto as SampleCreation,
SampleDeletionOptionsDto as SampleDeletionOptions,
SampleFetchOptionsDto as SampleFetchOptions,
SampleIdentifierDto as SampleIdentifier,
SamplePermIdDto as SamplePermId,
SamplePropertySearchCriteriaDto as SamplePropertySearchCriteria,
SampleRelationTypeDto as SampleRelationType,
SampleSearchCriteriaDto as SampleSearchCriteria,
SampleSearchRelationDto as SampleSearchRelation,
SampleSortOptionsDto as SampleSortOptions,
SampleTypeDto as SampleType,
SampleTypeCreationDto as SampleTypeCreation,
SampleTypeDeletionOptionsDto as SampleTypeDeletionOptions,
SampleTypeFetchOptionsDto as SampleTypeFetchOptions,
SampleTypeSearchCriteriaDto as SampleTypeSearchCriteria,
SampleTypeSortOptionsDto as SampleTypeSortOptions,
SampleTypeUpdateDto as SampleTypeUpdate,
SampleUpdateDto as SampleUpdate,
SearchAggregationServicesOperationDto as SearchAggregationServicesOperation,
SearchAggregationServicesOperationResultDto as SearchAggregationServicesOperationResult,
SearchAuthorizationGroupsOperationDto as SearchAuthorizationGroupsOperation,
SearchAuthorizationGroupsOperationResultDto as SearchAuthorizationGroupsOperationResult,
SearchCustomASServicesOperationDto as SearchCustomASServicesOperation,
SearchCustomASServicesOperationResultDto as SearchCustomASServicesOperationResult,
SearchDataSetTypesOperationDto as SearchDataSetTypesOperation,
SearchDataSetTypesOperationResultDto as SearchDataSetTypesOperationResult,
SearchDataSetsOperationDto as SearchDataSetsOperation,
SearchDataSetsOperationResultDto as SearchDataSetsOperationResult,
SearchDataStoresOperationDto as SearchDataStoresOperation,
SearchDataStoresOperationResultDto as SearchDataStoresOperationResult,
SearchDeletionsOperationDto as SearchDeletionsOperation,
SearchDeletionsOperationResultDto as SearchDeletionsOperationResult,
SearchDomainServiceDto as SearchDomainService,
SearchDomainServiceExecutionOptionsDto as SearchDomainServiceExecutionOptions,
SearchDomainServiceExecutionResultDto as SearchDomainServiceExecutionResult,
SearchDomainServiceFetchOptionsDto as SearchDomainServiceFetchOptions,
SearchDomainServiceSearchCriteriaDto as SearchDomainServiceSearchCriteria,
SearchDomainServiceSearchOptionDto as SearchDomainServiceSearchOption,
SearchDomainServiceSortOptionsDto as SearchDomainServiceSortOptions,
SearchEventsOperationDto as SearchEventsOperation,
SearchEventsOperationResultDto as SearchEventsOperationResult,
SearchExperimentTypesOperationDto as SearchExperimentTypesOperation,
SearchExperimentTypesOperationResultDto as SearchExperimentTypesOperationResult,
SearchExperimentsOperationDto as SearchExperimentsOperation,
SearchExperimentsOperationResultDto as SearchExperimentsOperationResult,
SearchExternalDmsOperationDto as SearchExternalDmsOperation,
SearchExternalDmsOperationResultDto as SearchExternalDmsOperationResult,
SearchFieldTypeDto as SearchFieldType,
SearchGloballyOperationDto as SearchGloballyOperation,
SearchGloballyOperationResultDto as SearchGloballyOperationResult,
SearchMaterialTypesOperationDto as SearchMaterialTypesOperation,
SearchMaterialTypesOperationResultDto as SearchMaterialTypesOperationResult,
SearchMaterialsOperationDto as SearchMaterialsOperation,
SearchMaterialsOperationResultDto as SearchMaterialsOperationResult,
SearchObjectKindModificationsOperationDto as SearchObjectKindModificationsOperation,
SearchObjectKindModificationsOperationResultDto as SearchObjectKindModificationsOperationResult,
SearchObjectsOperationDto as SearchObjectsOperation,
SearchObjectsOperationResultDto as SearchObjectsOperationResult,
SearchOperationExecutionsOperationDto as SearchOperationExecutionsOperation,
SearchOperationExecutionsOperationResultDto as SearchOperationExecutionsOperationResult,
SearchOperatorDto as SearchOperator,
SearchPersonalAccessTokensOperationDto as SearchPersonalAccessTokensOperation,
SearchPersonalAccessTokensOperationResultDto as SearchPersonalAccessTokensOperationResult,
SearchPersonsOperationDto as SearchPersonsOperation,
SearchPersonsOperationResultDto as SearchPersonsOperationResult,
SearchPluginsOperationDto as SearchPluginsOperation,
SearchPluginsOperationResultDto as SearchPluginsOperationResult,
SearchProcessingServicesOperationDto as SearchProcessingServicesOperation,
SearchProcessingServicesOperationResultDto as SearchProcessingServicesOperationResult,
SearchProjectsOperationDto as SearchProjectsOperation,
SearchProjectsOperationResultDto as SearchProjectsOperationResult,
SearchPropertyAssignmentsOperationDto as SearchPropertyAssignmentsOperation,
SearchPropertyAssignmentsOperationResultDto as SearchPropertyAssignmentsOperationResult,
SearchPropertyTypesOperationDto as SearchPropertyTypesOperation,
SearchPropertyTypesOperationResultDto as SearchPropertyTypesOperationResult,
SearchQueriesOperationDto as SearchQueriesOperation,
SearchQueriesOperationResultDto as SearchQueriesOperationResult,
SearchQueryDatabasesOperationDto as SearchQueryDatabasesOperation,
SearchQueryDatabasesOperationResultDto as SearchQueryDatabasesOperationResult,
SearchReportingServicesOperationDto as SearchReportingServicesOperation,
SearchReportingServicesOperationResultDto as SearchReportingServicesOperationResult,
SearchResultDto as SearchResult,
SearchRoleAssignmentsOperationDto as SearchRoleAssignmentsOperation,
SearchRoleAssignmentsOperationResultDto as SearchRoleAssignmentsOperationResult,
SearchSampleTypesOperationDto as SearchSampleTypesOperation,
SearchSampleTypesOperationResultDto as SearchSampleTypesOperationResult,
SearchSamplesOperationDto as SearchSamplesOperation,
SearchSamplesOperationResultDto as SearchSamplesOperationResult,
SearchSearchDomainServicesOperationDto as SearchSearchDomainServicesOperation,
SearchSearchDomainServicesOperationResultDto as SearchSearchDomainServicesOperationResult,
SearchSemanticAnnotationsOperationDto as SearchSemanticAnnotationsOperation,
SearchSemanticAnnotationsOperationResultDto as SearchSemanticAnnotationsOperationResult,
SearchSessionInformationOperationDto as SearchSessionInformationOperation,
SearchSessionInformationOperationResultDto as SearchSessionInformationOperationResult,
SearchSpacesOperationDto as SearchSpacesOperation,
SearchSpacesOperationResultDto as SearchSpacesOperationResult,
SearchTagsOperationDto as SearchTagsOperation,
SearchTagsOperationResultDto as SearchTagsOperationResult,
SearchVocabulariesOperationDto as SearchVocabulariesOperation,
SearchVocabulariesOperationResultDto as SearchVocabulariesOperationResult,
SearchVocabularyTermsOperationDto as SearchVocabularyTermsOperation,
SearchVocabularyTermsOperationResultDto as SearchVocabularyTermsOperationResult,
SemanticAnnotationDto as SemanticAnnotation,
SemanticAnnotationCreationDto as SemanticAnnotationCreation,
SemanticAnnotationDeletionOptionsDto as SemanticAnnotationDeletionOptions,
SemanticAnnotationFetchOptionsDto as SemanticAnnotationFetchOptions,
SemanticAnnotationPermIdDto as SemanticAnnotationPermId,
SemanticAnnotationSearchCriteriaDto as SemanticAnnotationSearchCriteria,
SemanticAnnotationSortOptionsDto as SemanticAnnotationSortOptions,
SemanticAnnotationUpdateDto as SemanticAnnotationUpdate,
ServerInformationDto as ServerInformation,
ServerTimeZoneDto as ServerTimeZone,
SessionInformationDto as SessionInformation,
SessionInformationFetchOptionsDto as SessionInformationFetchOptions,
SessionInformationPermIdDto as SessionInformationPermId,
SessionInformationSearchCriteriaDto as SessionInformationSearchCriteria,
SessionInformationSortOptionsDto as SessionInformationSortOptions,
ShareIdSearchCriteriaDto as ShareIdSearchCriteria,
ShortDateFormatDto as ShortDateFormat,
SizeSearchCriteriaDto as SizeSearchCriteria,
SortIgnoreDto as SortIgnore,
SortOptionsDto as SortOptions,
SortOrderDto as SortOrder,
SortParameterDto as SortParameter,
SortingDto as Sorting,
SpaceDto as Space,
SpaceCreationDto as SpaceCreation,
SpaceDeletionOptionsDto as SpaceDeletionOptions,
SpaceFetchOptionsDto as SpaceFetchOptions,
SpacePermIdDto as SpacePermId,
SpaceSearchCriteriaDto as SpaceSearchCriteria,
SpaceSortOptionsDto as SpaceSortOptions,
SpaceTechIdDto as SpaceTechId,
SpaceUpdateDto as SpaceUpdate,
SpeedHintSearchCriteriaDto as SpeedHintSearchCriteria,
SqlExecutionOptionsDto as SqlExecutionOptions,
SqlSearchCriteriaDto as SqlSearchCriteria,
StatusSearchCriteriaDto as StatusSearchCriteria,
StorageConfirmationSearchCriteriaDto as StorageConfirmationSearchCriteria,
StorageFormatDto as StorageFormat,
StorageFormatFetchOptionsDto as StorageFormatFetchOptions,
StorageFormatPermIdDto as StorageFormatPermId,
StorageFormatSearchCriteriaDto as StorageFormatSearchCriteria,
StorageFormatSortOptionsDto as StorageFormatSortOptions,
StrictlyStringPropertySearchCriteriaDto as StrictlyStringPropertySearchCriteria,
StringContainsExactlyValueDto as StringContainsExactlyValue,
StringContainsValueDto as StringContainsValue,
StringEndsWithValueDto as StringEndsWithValue,
StringEqualToValueDto as StringEqualToValue,
StringFieldSearchCriteriaDto as StringFieldSearchCriteria,
StringGreaterThanOrEqualToValueDto as StringGreaterThanOrEqualToValue,
StringGreaterThanValueDto as StringGreaterThanValue,
StringLessThanOrEqualToValueDto as StringLessThanOrEqualToValue,
StringLessThanValueDto as StringLessThanValue,
StringMatchesValueDto as StringMatchesValue,
StringPropertySearchCriteriaDto as StringPropertySearchCriteria,
StringStartsWithValueDto as StringStartsWithValue,
SynchronousOperationExecutionOptionsDto as SynchronousOperationExecutionOptions,
SynchronousOperationExecutionResultsDto as SynchronousOperationExecutionResults,
TableColumnDto as TableColumn,
TableDoubleCellDto as TableDoubleCell,
TableLongCellDto as TableLongCell,
TableModelDto as TableModel,
TableStringCellDto as TableStringCell,
TagDto as Tag,
TagCodeDto as TagCode,
TagCreationDto as TagCreation,
TagDeletionOptionsDto as TagDeletionOptions,
TagFetchOptionsDto as TagFetchOptions,
TagPermIdDto as TagPermId,
TagSearchCriteriaDto as TagSearchCriteria,
TagSortOptionsDto as TagSortOptions,
TagUpdateDto as TagUpdate,
TechIdSearchCriteriaDto as TechIdSearchCriteria,
TextAttributeSearchCriteriaDto as TextAttributeSearchCriteria,
TimeZoneDto as TimeZone,
UnarchiveDataSetsOperationDto as UnarchiveDataSetsOperation,
UnarchiveDataSetsOperationResultDto as UnarchiveDataSetsOperationResult,
UnknownRelatedObjectIdDto as UnknownRelatedObjectId,
UnlockDataSetsOperationDto as UnlockDataSetsOperation,
UnlockDataSetsOperationResultDto as UnlockDataSetsOperationResult,
UpdateAuthorizationGroupsOperationDto as UpdateAuthorizationGroupsOperation,
UpdateAuthorizationGroupsOperationResultDto as UpdateAuthorizationGroupsOperationResult,
UpdateDataSetTypesOperationDto as UpdateDataSetTypesOperation,
UpdateDataSetTypesOperationResultDto as UpdateDataSetTypesOperationResult,
UpdateDataSetsOperationDto as UpdateDataSetsOperation,
UpdateDataSetsOperationResultDto as UpdateDataSetsOperationResult,
UpdateExperimentTypesOperationDto as UpdateExperimentTypesOperation,
UpdateExperimentTypesOperationResultDto as UpdateExperimentTypesOperationResult,
UpdateExperimentsOperationDto as UpdateExperimentsOperation,
UpdateExperimentsOperationResultDto as UpdateExperimentsOperationResult,
UpdateExternalDmsOperationDto as UpdateExternalDmsOperation,
UpdateExternalDmsOperationResultDto as UpdateExternalDmsOperationResult,
UpdateMaterialTypesOperationDto as UpdateMaterialTypesOperation,
UpdateMaterialTypesOperationResultDto as UpdateMaterialTypesOperationResult,
UpdateMaterialsOperationDto as UpdateMaterialsOperation,
UpdateMaterialsOperationResultDto as UpdateMaterialsOperationResult,
UpdateObjectsOperationDto as UpdateObjectsOperation,
UpdateObjectsOperationResultDto as UpdateObjectsOperationResult,
UpdateOperationExecutionsOperationDto as UpdateOperationExecutionsOperation,
UpdateOperationExecutionsOperationResultDto as UpdateOperationExecutionsOperationResult,
UpdatePersonalAccessTokensOperationDto as UpdatePersonalAccessTokensOperation,
UpdatePersonalAccessTokensOperationResultDto as UpdatePersonalAccessTokensOperationResult,
UpdatePersonsOperationDto as UpdatePersonsOperation,
UpdatePersonsOperationResultDto as UpdatePersonsOperationResult,
UpdatePluginsOperationDto as UpdatePluginsOperation,
UpdatePluginsOperationResultDto as UpdatePluginsOperationResult,
UpdateProjectsOperationDto as UpdateProjectsOperation,
UpdateProjectsOperationResultDto as UpdateProjectsOperationResult,
UpdatePropertyTypesOperationDto as UpdatePropertyTypesOperation,
UpdatePropertyTypesOperationResultDto as UpdatePropertyTypesOperationResult,
UpdateQueriesOperationDto as UpdateQueriesOperation,
UpdateQueriesOperationResultDto as UpdateQueriesOperationResult,
UpdateSampleTypesOperationDto as UpdateSampleTypesOperation,
UpdateSampleTypesOperationResultDto as UpdateSampleTypesOperationResult,
UpdateSamplesOperationDto as UpdateSamplesOperation,
UpdateSamplesOperationResultDto as UpdateSamplesOperationResult,
UpdateSemanticAnnotationsOperationDto as UpdateSemanticAnnotationsOperation,
UpdateSemanticAnnotationsOperationResultDto as UpdateSemanticAnnotationsOperationResult,
UpdateSpacesOperationDto as UpdateSpacesOperation,
UpdateSpacesOperationResultDto as UpdateSpacesOperationResult,
UpdateTagsOperationDto as UpdateTagsOperation,
UpdateTagsOperationResultDto as UpdateTagsOperationResult,
UpdateVocabulariesOperationDto as UpdateVocabulariesOperation,
UpdateVocabulariesOperationResultDto as UpdateVocabulariesOperationResult,
UpdateVocabularyTermsOperationDto as UpdateVocabularyTermsOperation,
UpdateVocabularyTermsOperationResultDto as UpdateVocabularyTermsOperationResult,
UploadedDataSetCreationDto as UploadedDataSetCreation,
UserIdSearchCriteriaDto as UserIdSearchCriteria,
UserIdsSearchCriteriaDto as UserIdsSearchCriteria,
UserNameSearchCriteriaDto as UserNameSearchCriteria,
VocabularyDto as Vocabulary,
VocabularyCreationDto as VocabularyCreation,
VocabularyDeletionOptionsDto as VocabularyDeletionOptions,
VocabularyFetchOptionsDto as VocabularyFetchOptions,
VocabularyPermIdDto as VocabularyPermId,
VocabularySearchCriteriaDto as VocabularySearchCriteria,
VocabularySortOptionsDto as VocabularySortOptions,
VocabularyTermDto as VocabularyTerm,
VocabularyTermCreationDto as VocabularyTermCreation,
VocabularyTermDeletionOptionsDto as VocabularyTermDeletionOptions,
VocabularyTermFetchOptionsDto as VocabularyTermFetchOptions,
VocabularyTermPermIdDto as VocabularyTermPermId,
VocabularyTermReplacementDto as VocabularyTermReplacement,
VocabularyTermSearchCriteriaDto as VocabularyTermSearchCriteria,
VocabularyTermSortOptionsDto as VocabularyTermSortOptions,
VocabularyTermUpdateDto as VocabularyTermUpdate,
VocabularyUpdateDto as VocabularyUpdate,
WebAppSettingDto as WebAppSetting,
WebAppSettingCreationDto as WebAppSettingCreation,
WebAppSettingsDto as WebAppSettings,
WebAppSettingsFetchOptionsDto as WebAppSettingsFetchOptions,
WebAppSettingsSortOptionsDto as WebAppSettingsSortOptions,
WebAppSettingsUpdateValueDto as WebAppSettingsUpdateValue,
openbisDto as OpenBIS
}
