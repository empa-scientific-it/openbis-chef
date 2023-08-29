// Auto-generated file
import * as V3API from 'v3api/V3API.esm';
import {SearchDomainService} from '@src/types/openbis';
import {SearchDomainServiceSearchOption} from '@src/types/openbis';
import {AggregationService} from '@src/types/openbis';
import {ProcessingService} from '@src/types/openbis';
import {ProcessingServiceSortOptions} from '@src/types/openbis';
import {AggregationServiceFetchOptions} from '@src/types/openbis';
import {ProcessingServiceFetchOptions} from '@src/types/openbis';
import {AggregationServiceSortOptions} from '@src/types/openbis';
import {ReportingServiceFetchOptions} from '@src/types/openbis';
import {SearchDomainServiceSortOptions} from '@src/types/openbis';
import {CustomASServiceFetchOptions} from '@src/types/openbis';
import {ReportingServiceSortOptions} from '@src/types/openbis';
import {SearchDomainServiceFetchOptions} from '@src/types/openbis';
import {CustomASServiceSortOptions} from '@src/types/openbis';
import {ICustomASServiceId} from '@src/types/openbis';
import {IDssServiceId} from '@src/types/openbis';
import {DssServicePermId} from '@src/types/openbis';
import {CustomASServiceCode} from '@src/types/openbis';
import {SearchAggregationServicesOperationResult} from '@src/types/openbis';
import {ReportingServiceSearchCriteria} from '@src/types/openbis';
import {SearchCustomASServicesOperation} from '@src/types/openbis';
import {SearchProcessingServicesOperationResult} from '@src/types/openbis';
import {ProcessingServiceSearchCriteria} from '@src/types/openbis';
import {CustomASServiceSearchCriteria} from '@src/types/openbis';
import {SearchReportingServicesOperation} from '@src/types/openbis';
import {SearchDomainServiceSearchCriteria} from '@src/types/openbis';
import {SearchSearchDomainServicesOperationResult} from '@src/types/openbis';
import {SearchProcessingServicesOperation} from '@src/types/openbis';
import {SearchAggregationServicesOperation} from '@src/types/openbis';
import {SearchSearchDomainServicesOperation} from '@src/types/openbis';
import {AggregationServiceSearchCriteria} from '@src/types/openbis';
import {SearchCustomASServicesOperationResult} from '@src/types/openbis';
import {SearchReportingServicesOperationResult} from '@src/types/openbis';
import {SearchDomainServiceExecutionResult} from '@src/types/openbis';
import {ReportingService} from '@src/types/openbis';
import {CustomASService} from '@src/types/openbis';
import {CustomASServiceExecutionOptions} from '@src/types/openbis';
import {ExecuteProcessingServiceOperation} from '@src/types/openbis';
import {ExecuteSearchDomainServiceOperation} from '@src/types/openbis';
import {ExecuteCustomASServiceOperationResult} from '@src/types/openbis';
import {ProcessingServiceExecutionOptions} from '@src/types/openbis';
import {ExecuteSearchDomainServiceOperationResult} from '@src/types/openbis';
import {AggregationServiceExecutionOptions} from '@src/types/openbis';
import {ExecuteCustomASServiceOperation} from '@src/types/openbis';
import {ExecuteAggregationServiceOperationResult} from '@src/types/openbis';
import {SearchDomainServiceExecutionOptions} from '@src/types/openbis';
import {ExecuteProcessingServiceOperationResult} from '@src/types/openbis';
import {ExecuteReportingServiceOperationResult} from '@src/types/openbis';
import {ReportingServiceExecutionOptions} from '@src/types/openbis';
import {ExecuteAggregationServiceOperation} from '@src/types/openbis';
import {ExecuteReportingServiceOperation} from '@src/types/openbis';
import {AbstractExecutionOptionsWithParameters} from '@src/types/openbis';
import {ServerInformation} from '@src/types/openbis';
import {GlobalSearchObjectFetchOptions} from '@src/types/openbis';
import {MatchFetchOptions} from '@src/types/openbis';
import {GlobalSearchObjectSortOptions} from '@src/types/openbis';
import {SearchGloballyOperationResult} from '@src/types/openbis';
import {GlobalSearchObjectKind} from '@src/types/openbis';
import {GlobalSearchObjectKindCriteria} from '@src/types/openbis';
import {GlobalSearchTextCriteria} from '@src/types/openbis';
import {GlobalSearchCriteria} from '@src/types/openbis';
import {GlobalSearchWildCardsCriteria} from '@src/types/openbis';
import {SearchGloballyOperation} from '@src/types/openbis';
import {GlobalSearchObject} from '@src/types/openbis';
import {DeleteExternalDmsOperationResult} from '@src/types/openbis';
import {ExternalDmsDeletionOptions} from '@src/types/openbis';
import {DeleteExternalDmsOperation} from '@src/types/openbis';
import {ExternalDmsFetchOptions} from '@src/types/openbis';
import {ExternalDmsSortOptions} from '@src/types/openbis';
import {UpdateExternalDmsOperationResult} from '@src/types/openbis';
import {ExternalDmsUpdate} from '@src/types/openbis';
import {UpdateExternalDmsOperation} from '@src/types/openbis';
import {ExternalDms} from '@src/types/openbis';
import {ExternalDmsPermId} from '@src/types/openbis';
import {IExternalDmsId} from '@src/types/openbis';
import {GetExternalDmsOperationResult} from '@src/types/openbis';
import {GetExternalDmsOperation} from '@src/types/openbis';
import {ExternalDmsTypeSearchCriteria} from '@src/types/openbis';
import {ExternalDmsSearchCriteria} from '@src/types/openbis';
import {LabelSearchCriteria} from '@src/types/openbis';
import {SearchExternalDmsOperationResult} from '@src/types/openbis';
import {SearchExternalDmsOperation} from '@src/types/openbis';
import {AddressSearchCriteria} from '@src/types/openbis';
import {ExternalDmsAddressType} from '@src/types/openbis';
import {CreateExternalDmsOperationResult} from '@src/types/openbis';
import {ExternalDmsCreation} from '@src/types/openbis';
import {CreateExternalDmsOperation} from '@src/types/openbis';
import {Tag} from '@src/types/openbis';
import {DeleteTagsOperation} from '@src/types/openbis';
import {TagDeletionOptions} from '@src/types/openbis';
import {DeleteTagsOperationResult} from '@src/types/openbis';
import {TagFetchOptions} from '@src/types/openbis';
import {TagSortOptions} from '@src/types/openbis';
import {UpdateTagsOperationResult} from '@src/types/openbis';
import {UpdateTagsOperation} from '@src/types/openbis';
import {TagUpdate} from '@src/types/openbis';
import {TagCode} from '@src/types/openbis';
import {ITagId} from '@src/types/openbis';
import {TagPermId} from '@src/types/openbis';
import {GetTagsOperation} from '@src/types/openbis';
import {GetTagsOperationResult} from '@src/types/openbis';
import {TagSearchCriteria} from '@src/types/openbis';
import {SearchTagsOperationResult} from '@src/types/openbis';
import {SearchTagsOperation} from '@src/types/openbis';
import {CreateTagsOperationResult} from '@src/types/openbis';
import {CreateTagsOperation} from '@src/types/openbis';
import {TagCreation} from '@src/types/openbis';
import {DeleteSpacesOperation} from '@src/types/openbis';
import {SpaceDeletionOptions} from '@src/types/openbis';
import {DeleteSpacesOperationResult} from '@src/types/openbis';
import {SpaceFetchOptions} from '@src/types/openbis';
import {SpaceSortOptions} from '@src/types/openbis';
import {UpdateSpacesOperationResult} from '@src/types/openbis';
import {UpdateSpacesOperation} from '@src/types/openbis';
import {SpaceUpdate} from '@src/types/openbis';
import {SpaceTechId} from '@src/types/openbis';
import {ISpaceId} from '@src/types/openbis';
import {SpacePermId} from '@src/types/openbis';
import {GetSpacesOperation} from '@src/types/openbis';
import {GetSpacesOperationResult} from '@src/types/openbis';
import {SearchSpacesOperationResult} from '@src/types/openbis';
import {SearchSpacesOperation} from '@src/types/openbis';
import {SpaceSearchCriteria} from '@src/types/openbis';
import {NoSpaceSearchCriteria} from '@src/types/openbis';
import {Space} from '@src/types/openbis';
import {CreateSpacesOperationResult} from '@src/types/openbis';
import {CreateSpacesOperation} from '@src/types/openbis';
import {SpaceCreation} from '@src/types/openbis';
import {AttachmentFetchOptions} from '@src/types/openbis';
import {AttachmentSortOptions} from '@src/types/openbis';
import {AttachmentListUpdateValue} from '@src/types/openbis';
import {AttachmentFileName} from '@src/types/openbis';
import {IAttachmentId} from '@src/types/openbis';
import {Attachment} from '@src/types/openbis';
import {AttachmentCreation} from '@src/types/openbis';
import {DeleteMaterialTypesOperation} from '@src/types/openbis';
import {DeleteMaterialTypesOperationResult} from '@src/types/openbis';
import {MaterialTypeDeletionOptions} from '@src/types/openbis';
import {MaterialDeletionOptions} from '@src/types/openbis';
import {DeleteMaterialsOperationResult} from '@src/types/openbis';
import {DeleteMaterialsOperation} from '@src/types/openbis';
import {MaterialType} from '@src/types/openbis';
import {MaterialTypeSortOptions} from '@src/types/openbis';
import {MaterialFetchOptions} from '@src/types/openbis';
import {MaterialSortOptions} from '@src/types/openbis';
import {MaterialTypeFetchOptions} from '@src/types/openbis';
import {UpdateMaterialTypesOperationResult} from '@src/types/openbis';
import {MaterialTypeUpdate} from '@src/types/openbis';
import {MaterialUpdate} from '@src/types/openbis';
import {UpdateMaterialsOperation} from '@src/types/openbis';
import {UpdateMaterialTypesOperation} from '@src/types/openbis';
import {UpdateMaterialsOperationResult} from '@src/types/openbis';
import {IMaterialId} from '@src/types/openbis';
import {MaterialPermId} from '@src/types/openbis';
import {GetMaterialTypesOperation} from '@src/types/openbis';
import {GetMaterialTypesOperationResult} from '@src/types/openbis';
import {GetMaterialsOperation} from '@src/types/openbis';
import {GetMaterialsOperationResult} from '@src/types/openbis';
import {SearchMaterialTypesOperation} from '@src/types/openbis';
import {SearchMaterialsOperation} from '@src/types/openbis';
import {MaterialSearchCriteria} from '@src/types/openbis';
import {SearchMaterialTypesOperationResult} from '@src/types/openbis';
import {SearchMaterialsOperationResult} from '@src/types/openbis';
import {MaterialTypeSearchCriteria} from '@src/types/openbis';
import {CreateMaterialsOperationResult} from '@src/types/openbis';
import {CreateMaterialTypesOperation} from '@src/types/openbis';
import {CreateMaterialsOperation} from '@src/types/openbis';
import {MaterialCreation} from '@src/types/openbis';
import {CreateMaterialTypesOperationResult} from '@src/types/openbis';
import {MaterialTypeCreation} from '@src/types/openbis';
import {Material} from '@src/types/openbis';
import {DeletePropertyTypesOperation} from '@src/types/openbis';
import {DeletePropertyTypesOperationResult} from '@src/types/openbis';
import {PropertyTypeDeletionOptions} from '@src/types/openbis';
import {PropertyTypeSortOptions} from '@src/types/openbis';
import {PropertyAssignmentFetchOptions} from '@src/types/openbis';
import {PropertyTypeFetchOptions} from '@src/types/openbis';
import {PropertyAssignmentSortOptions} from '@src/types/openbis';
import {PropertyFetchOptions} from '@src/types/openbis';
import {UpdatePropertyTypesOperationResult} from '@src/types/openbis';
import {PropertyTypeUpdate} from '@src/types/openbis';
import {UpdatePropertyTypesOperation} from '@src/types/openbis';
import {IPropertyTypeId} from '@src/types/openbis';
import {PropertyTypePermId} from '@src/types/openbis';
import {IPropertyAssignmentId} from '@src/types/openbis';
import {PropertyAssignmentPermId} from '@src/types/openbis';
import {GetPropertyTypesOperationResult} from '@src/types/openbis';
import {GetPropertyTypesOperation} from '@src/types/openbis';
import {PropertyType} from '@src/types/openbis';
import {SearchPropertyTypesOperation} from '@src/types/openbis';
import {SearchPropertyTypesOperationResult} from '@src/types/openbis';
import {PropertyAssignmentSearchCriteria} from '@src/types/openbis';
import {SearchPropertyAssignmentsOperation} from '@src/types/openbis';
import {SearchPropertyAssignmentsOperationResult} from '@src/types/openbis';
import {PropertyTypeSearchCriteria} from '@src/types/openbis';
import {DataType} from '@src/types/openbis';
import {PropertyAssignment} from '@src/types/openbis';
import {PropertyAssignmentCreation} from '@src/types/openbis';
import {CreatePropertyTypesOperationResult} from '@src/types/openbis';
import {CreatePropertyTypesOperation} from '@src/types/openbis';
import {PropertyTypeCreation} from '@src/types/openbis';
import {DeleteProjectsOperation} from '@src/types/openbis';
import {ProjectDeletionOptions} from '@src/types/openbis';
import {DeleteProjectsOperationResult} from '@src/types/openbis';
import {ProjectSortOptions} from '@src/types/openbis';
import {ProjectFetchOptions} from '@src/types/openbis';
import {UpdateProjectsOperation} from '@src/types/openbis';
import {ProjectUpdate} from '@src/types/openbis';
import {UpdateProjectsOperationResult} from '@src/types/openbis';
import {ProjectPermId} from '@src/types/openbis';
import {IProjectId} from '@src/types/openbis';
import {ProjectIdentifier} from '@src/types/openbis';
import {GetProjectsOperation} from '@src/types/openbis';
import {GetProjectsOperationResult} from '@src/types/openbis';
import {NoProjectSearchCriteria} from '@src/types/openbis';
import {SearchProjectsOperationResult} from '@src/types/openbis';
import {SearchProjectsOperation} from '@src/types/openbis';
import {ProjectSearchCriteria} from '@src/types/openbis';
import {Project} from '@src/types/openbis';
import {CreateProjectsOperationResult} from '@src/types/openbis';
import {CreateProjectsOperation} from '@src/types/openbis';
import {ProjectCreation} from '@src/types/openbis';
import {ProjectRelationType} from '@src/types/openbis';
import {ExperimentType} from '@src/types/openbis';
import {DeleteExperimentTypesOperationResult} from '@src/types/openbis';
import {ExperimentDeletionOptions} from '@src/types/openbis';
import {DeleteExperimentTypesOperation} from '@src/types/openbis';
import {DeleteExperimentsOperationResult} from '@src/types/openbis';
import {DeleteExperimentsOperation} from '@src/types/openbis';
import {ExperimentTypeDeletionOptions} from '@src/types/openbis';
import {ExperimentFetchOptions} from '@src/types/openbis';
import {ExperimentTypeSortOptions} from '@src/types/openbis';
import {ExperimentTypeFetchOptions} from '@src/types/openbis';
import {ExperimentSortOptions} from '@src/types/openbis';
import {UpdateExperimentsOperation} from '@src/types/openbis';
import {ExperimentUpdate} from '@src/types/openbis';
import {UpdateExperimentTypesOperation} from '@src/types/openbis';
import {UpdateExperimentTypesOperationResult} from '@src/types/openbis';
import {UpdateExperimentsOperationResult} from '@src/types/openbis';
import {ExperimentTypeUpdate} from '@src/types/openbis';
import {ExperimentPermId} from '@src/types/openbis';
import {ExperimentIdentifier} from '@src/types/openbis';
import {IExperimentId} from '@src/types/openbis';
import {GetExperimentsOperation} from '@src/types/openbis';
import {GetExperimentsOperationResult} from '@src/types/openbis';
import {GetExperimentTypesOperation} from '@src/types/openbis';
import {GetExperimentTypesOperationResult} from '@src/types/openbis';
import {ExperimentSearchCriteria} from '@src/types/openbis';
import {SearchExperimentTypesOperationResult} from '@src/types/openbis';
import {SearchExperimentsOperation} from '@src/types/openbis';
import {SearchExperimentsOperationResult} from '@src/types/openbis';
import {SearchExperimentTypesOperation} from '@src/types/openbis';
import {ExperimentTypeSearchCriteria} from '@src/types/openbis';
import {NoExperimentSearchCriteria} from '@src/types/openbis';
import {Experiment} from '@src/types/openbis';
import {CreateExperimentTypesOperation} from '@src/types/openbis';
import {CreateExperimentTypesOperationResult} from '@src/types/openbis';
import {ExperimentCreation} from '@src/types/openbis';
import {CreateExperimentsOperationResult} from '@src/types/openbis';
import {CreateExperimentsOperation} from '@src/types/openbis';
import {ExperimentTypeCreation} from '@src/types/openbis';
import {ExperimentRelationType} from '@src/types/openbis';
import {DeleteSampleTypesOperation} from '@src/types/openbis';
import {DeleteSamplesOperation} from '@src/types/openbis';
import {DeleteSampleTypesOperationResult} from '@src/types/openbis';
import {SampleTypeDeletionOptions} from '@src/types/openbis';
import {DeleteSamplesOperationResult} from '@src/types/openbis';
import {SampleDeletionOptions} from '@src/types/openbis';
import {SampleFetchOptions} from '@src/types/openbis';
import {SampleTypeFetchOptions} from '@src/types/openbis';
import {SampleTypeSortOptions} from '@src/types/openbis';
import {SampleSortOptions} from '@src/types/openbis';
import {UpdateSampleTypesOperation} from '@src/types/openbis';
import {UpdateSamplesOperationResult} from '@src/types/openbis';
import {UpdateSamplesOperation} from '@src/types/openbis';
import {SampleTypeUpdate} from '@src/types/openbis';
import {SampleUpdate} from '@src/types/openbis';
import {UpdateSampleTypesOperationResult} from '@src/types/openbis';
import {SampleIdentifier} from '@src/types/openbis';
import {ISampleId} from '@src/types/openbis';
import {SamplePermId} from '@src/types/openbis';
import {GetSampleTypesOperationResult} from '@src/types/openbis';
import {GetSamplesOperation} from '@src/types/openbis';
import {GetSamplesOperationResult} from '@src/types/openbis';
import {GetSampleTypesOperation} from '@src/types/openbis';
import {SearchSamplesOperation} from '@src/types/openbis';
import {ListableSampleTypeSearchCriteria} from '@src/types/openbis';
import {SampleSearchCriteria} from '@src/types/openbis';
import {NoSampleContainerSearchCriteria} from '@src/types/openbis';
import {SearchSamplesOperationResult} from '@src/types/openbis';
import {NoSampleSearchCriteria} from '@src/types/openbis';
import {SampleSearchRelation} from '@src/types/openbis';
import {SearchSampleTypesOperationResult} from '@src/types/openbis';
import {SearchSampleTypesOperation} from '@src/types/openbis';
import {SampleTypeSearchCriteria} from '@src/types/openbis';
import {SampleType} from '@src/types/openbis';
import {SampleTypeCreation} from '@src/types/openbis';
import {CreateSampleTypesOperation} from '@src/types/openbis';
import {CreateSamplesOperation} from '@src/types/openbis';
import {SampleCreation} from '@src/types/openbis';
import {CreateSampleTypesOperationResult} from '@src/types/openbis';
import {CreateSamplesOperationResult} from '@src/types/openbis';
import {SampleRelationType} from '@src/types/openbis';
import {Sample} from '@src/types/openbis';
import {PersonDeletionOptions} from '@src/types/openbis';
import {DeletePersonsOperationResult} from '@src/types/openbis';
import {DeletePersonsOperation} from '@src/types/openbis';
import {PersonSortOptions} from '@src/types/openbis';
import {PersonFetchOptions} from '@src/types/openbis';
import {UpdatePersonsOperation} from '@src/types/openbis';
import {PersonUpdate} from '@src/types/openbis';
import {UpdatePersonsOperationResult} from '@src/types/openbis';
import {Me} from '@src/types/openbis';
import {PersonPermId} from '@src/types/openbis';
import {IPersonId} from '@src/types/openbis';
import {GetPersonsOperation} from '@src/types/openbis';
import {GetPersonsOperationResult} from '@src/types/openbis';
import {SearchPersonsOperationResult} from '@src/types/openbis';
import {SearchPersonsOperation} from '@src/types/openbis';
import {RegistratorSearchCriteria} from '@src/types/openbis';
import {LastNameSearchCriteria} from '@src/types/openbis';
import {PersonSearchCriteria} from '@src/types/openbis';
import {EmailSearchCriteria} from '@src/types/openbis';
import {UserIdSearchCriteria} from '@src/types/openbis';
import {UserIdsSearchCriteria} from '@src/types/openbis';
import {FirstNameSearchCriteria} from '@src/types/openbis';
import {ModifierSearchCriteria} from '@src/types/openbis';
import {Person} from '@src/types/openbis';
import {PersonCreation} from '@src/types/openbis';
import {CreatePersonsOperation} from '@src/types/openbis';
import {CreatePersonsOperationResult} from '@src/types/openbis';
import {DeleteSemanticAnnotationsOperationResult} from '@src/types/openbis';
import {DeleteSemanticAnnotationsOperation} from '@src/types/openbis';
import {SemanticAnnotationDeletionOptions} from '@src/types/openbis';
import {SemanticAnnotation} from '@src/types/openbis';
import {SemanticAnnotationSortOptions} from '@src/types/openbis';
import {SemanticAnnotationFetchOptions} from '@src/types/openbis';
import {UpdateSemanticAnnotationsOperationResult} from '@src/types/openbis';
import {UpdateSemanticAnnotationsOperation} from '@src/types/openbis';
import {SemanticAnnotationUpdate} from '@src/types/openbis';
import {ISemanticAnnotationId} from '@src/types/openbis';
import {SemanticAnnotationPermId} from '@src/types/openbis';
import {GetSemanticAnnotationsOperation} from '@src/types/openbis';
import {GetSemanticAnnotationsOperationResult} from '@src/types/openbis';
import {DescriptorAccessionIdSearchCriteria} from '@src/types/openbis';
import {SearchSemanticAnnotationsOperationResult} from '@src/types/openbis';
import {SearchSemanticAnnotationsOperation} from '@src/types/openbis';
import {PredicateOntologyVersionSearchCriteria} from '@src/types/openbis';
import {DescriptorOntologyVersionSearchCriteria} from '@src/types/openbis';
import {SemanticAnnotationSearchCriteria} from '@src/types/openbis';
import {PredicateOntologyIdSearchCriteria} from '@src/types/openbis';
import {PredicateAccessionIdSearchCriteria} from '@src/types/openbis';
import {DescriptorOntologyIdSearchCriteria} from '@src/types/openbis';
import {CreateSemanticAnnotationsOperation} from '@src/types/openbis';
import {SemanticAnnotationCreation} from '@src/types/openbis';
import {CreateSemanticAnnotationsOperationResult} from '@src/types/openbis';
import {TableStringCell} from '@src/types/openbis';
import {DeleteObjectsWithoutTrashOperationResult} from '@src/types/openbis';
import {DeleteObjectsWithTrashOperationResult} from '@src/types/openbis';
import {DeleteObjectsOperation} from '@src/types/openbis';
import {DeleteObjectsOperationResult} from '@src/types/openbis';
import {FetchOptions} from '@src/types/openbis';
import {EntitySortOptions} from '@src/types/openbis';
import {SortParameter} from '@src/types/openbis';
import {Sorting} from '@src/types/openbis';
import {EntityWithPropertiesSortOptions} from '@src/types/openbis';
import {SortOptions} from '@src/types/openbis';
import {CacheMode} from '@src/types/openbis';
import {EmptyFetchOptions} from '@src/types/openbis';
import {SortOrder} from '@src/types/openbis';
import {TableColumn} from '@src/types/openbis';
import {IdListUpdateValue} from '@src/types/openbis';
import {ListUpdateMapValues} from '@src/types/openbis';
import {ListUpdateAction} from '@src/types/openbis';
import {RelationshipUpdate} from '@src/types/openbis';
import {ListUpdateActionAdd} from '@src/types/openbis';
import {IUpdate} from '@src/types/openbis';
import {IObjectUpdate} from '@src/types/openbis';
import {ListUpdateActionRemove} from '@src/types/openbis';
import {ListUpdateActionSet} from '@src/types/openbis';
import {UpdateObjectsOperationResult} from '@src/types/openbis';
import {ListUpdateValue} from '@src/types/openbis';
import {UpdateObjectsOperation} from '@src/types/openbis';
import {FieldUpdateValue} from '@src/types/openbis';
import {ObjectTechId} from '@src/types/openbis';
import {IObjectId} from '@src/types/openbis';
import {ObjectPermId} from '@src/types/openbis';
import {ObjectIdentifier} from '@src/types/openbis';
import {CreationId} from '@src/types/openbis';
import {TableModel} from '@src/types/openbis';
import {GetServerPublicInformationOperation} from '@src/types/openbis';
import {GetObjectsOperationResult} from '@src/types/openbis';
import {GetServerInformationOperationResult} from '@src/types/openbis';
import {GetObjectsOperation} from '@src/types/openbis';
import {GetServerPublicInformationOperationResult} from '@src/types/openbis';
import {GetServerInformationOperation} from '@src/types/openbis';
import {Relationship} from '@src/types/openbis';
import {ITableCell} from '@src/types/openbis';
import {ShortDateFormat} from '@src/types/openbis';
import {AnyBooleanPropertySearchCriteria} from '@src/types/openbis';
import {SearchFieldType} from '@src/types/openbis';
import {CodesSearchCriteria} from '@src/types/openbis';
import {BooleanPropertySearchCriteria} from '@src/types/openbis';
import {DateLaterThanValue} from '@src/types/openbis';
import {AnyDatePropertySearchCriteria} from '@src/types/openbis';
import {StringLessThanOrEqualToValue} from '@src/types/openbis';
import {DateObjectEarlierThanOrEqualToValue} from '@src/types/openbis';
import {NumberEqualToValue} from '@src/types/openbis';
import {ControlledVocabularyPropertySearchCriteria} from '@src/types/openbis';
import {AnyPropertySearchCriteria} from '@src/types/openbis';
import {StrictlyStringPropertySearchCriteria} from '@src/types/openbis';
import {IDate} from '@src/types/openbis';
import {ModificationDateSearchCriteria} from '@src/types/openbis';
import {DateObjectEarlierThanValue} from '@src/types/openbis';
import {AbstractNumberValue} from '@src/types/openbis';
import {DateObjectEqualToValue} from '@src/types/openbis';
import {DescriptionSearchCriteria} from '@src/types/openbis';
import {CollectionFieldSearchCriteria} from '@src/types/openbis';
import {AnyNumberPropertySearchCriteria} from '@src/types/openbis';
import {TextAttributeSearchCriteria} from '@src/types/openbis';
import {DateLaterThanOrEqualToValue} from '@src/types/openbis';
import {NumberLessThanValue} from '@src/types/openbis';
import {SamplePropertySearchCriteria} from '@src/types/openbis';
import {StringGreaterThanOrEqualToValue} from '@src/types/openbis';
import {AnyStringValue} from '@src/types/openbis';
import {AbstractObjectSearchCriteria} from '@src/types/openbis';
import {DateObjectLaterThanOrEqualToValue} from '@src/types/openbis';
import {RegistrationDateSearchCriteria} from '@src/types/openbis';
import {AbstractStringValue} from '@src/types/openbis';
import {StringMatchesValue} from '@src/types/openbis';
import {StringEqualToValue} from '@src/types/openbis';
import {IdentifierSearchCriteria} from '@src/types/openbis';
import {TechIdSearchCriteria} from '@src/types/openbis';
import {AbstractValue} from '@src/types/openbis';
import {SearchObjectsOperation} from '@src/types/openbis';
import {AnyFieldSearchCriteria} from '@src/types/openbis';
import {SearchOperator} from '@src/types/openbis';
import {TimeZone} from '@src/types/openbis';
import {NumberGreaterThanOrEqualToValue} from '@src/types/openbis';
import {ISearchCriteria} from '@src/types/openbis';
import {LongDateFormat} from '@src/types/openbis';
import {CodeSearchCriteria} from '@src/types/openbis';
import {AbstractDateValue} from '@src/types/openbis';
import {StringContainsExactlyValue} from '@src/types/openbis';
import {NumberLessThanOrEqualToValue} from '@src/types/openbis';
import {PermIdSearchCriteria} from '@src/types/openbis';
import {EnumFieldSearchCriteria} from '@src/types/openbis';
import {DatePropertySearchCriteria} from '@src/types/openbis';
import {ITimeZone} from '@src/types/openbis';
import {StringStartsWithValue} from '@src/types/openbis';
import {DateEarlierThanOrEqualToValue} from '@src/types/openbis';
import {SearchObjectsOperationResult} from '@src/types/openbis';
import {StringFieldSearchCriteria} from '@src/types/openbis';
import {StringPropertySearchCriteria} from '@src/types/openbis';
import {BooleanFieldSearchCriteria} from '@src/types/openbis';
import {IdSearchCriteria} from '@src/types/openbis';
import {AbstractEntitySearchCriteria} from '@src/types/openbis';
import {NumberGreaterThanValue} from '@src/types/openbis';
import {AnyStringPropertySearchCriteria} from '@src/types/openbis';
import {AbstractSearchCriteria} from '@src/types/openbis';
import {AbstractTimeZoneValue} from '@src/types/openbis';
import {StringEndsWithValue} from '@src/types/openbis';
import {DateObjectLaterThanValue} from '@src/types/openbis';
import {AbstractCompositeSearchCriteria} from '@src/types/openbis';
import {NameSearchCriteria} from '@src/types/openbis';
import {IdsSearchCriteria} from '@src/types/openbis';
import {SearchResult} from '@src/types/openbis';
import {DateEqualToValue} from '@src/types/openbis';
import {AbstractDateObjectValue} from '@src/types/openbis';
import {StringContainsValue} from '@src/types/openbis';
import {DateFieldSearchCriteria} from '@src/types/openbis';
import {IDateFormat} from '@src/types/openbis';
import {ServerTimeZone} from '@src/types/openbis';
import {StringLessThanValue} from '@src/types/openbis';
import {StringGreaterThanValue} from '@src/types/openbis';
import {DateEarlierThanValue} from '@src/types/openbis';
import {NumberFieldSearchCriteria} from '@src/types/openbis';
import {AbstractFieldSearchCriteria} from '@src/types/openbis';
import {NumberPropertySearchCriteria} from '@src/types/openbis';
import {NormalDateFormat} from '@src/types/openbis';
import {TableLongCell} from '@src/types/openbis';
import {Enum} from '@src/types/openbis';
import {TableDoubleCell} from '@src/types/openbis';
import {ISemanticAnnotationsHolder} from '@src/types/openbis';
import {SortIgnore} from '@src/types/openbis';
import {IMaterialPropertiesHolder} from '@src/types/openbis';
import {INameHolder} from '@src/types/openbis';
import {ISampleHolder} from '@src/types/openbis';
import {IMetaDataUpdateHolder} from '@src/types/openbis';
import {IValidationPluginHolder} from '@src/types/openbis';
import {IParentChildrenHolder} from '@src/types/openbis';
import {IRegistratorHolder} from '@src/types/openbis';
import {IModifierHolder} from '@src/types/openbis';
import {IDataSetsHolder} from '@src/types/openbis';
import {IIdentifierHolder} from '@src/types/openbis';
import {IProjectsHolder} from '@src/types/openbis';
import {ISamplesHolder} from '@src/types/openbis';
import {IAttachmentsHolder} from '@src/types/openbis';
import {ICodeHolder} from '@src/types/openbis';
import {IMaterialsHolder} from '@src/types/openbis';
import {IPropertyTypeHolder} from '@src/types/openbis';
import {IPropertiesHolder} from '@src/types/openbis';
import {IOwnerHolder} from '@src/types/openbis';
import {IExperimentsHolder} from '@src/types/openbis';
import {IDescriptionHolder} from '@src/types/openbis';
import {IDataSetCodesHolder} from '@src/types/openbis';
import {ITagsHolder} from '@src/types/openbis';
import {IRegistrationDateHolder} from '@src/types/openbis';
import {ILabelHolder} from '@src/types/openbis';
import {IPermIdHolder} from '@src/types/openbis';
import {ISpaceHolder} from '@src/types/openbis';
import {IPropertyAssignmentsHolder} from '@src/types/openbis';
import {IEntityTypeHolder} from '@src/types/openbis';
import {IProjectHolder} from '@src/types/openbis';
import {IExperimentHolder} from '@src/types/openbis';
import {IModificationDateHolder} from '@src/types/openbis';
import {IEntityType} from '@src/types/openbis';
import {ICreationIdHolder} from '@src/types/openbis';
import {ICreation} from '@src/types/openbis';
import {IObjectCreation} from '@src/types/openbis';
import {CreateObjectsOperation} from '@src/types/openbis';
import {CreateObjectsOperationResult} from '@src/types/openbis';
import {IOperation} from '@src/types/openbis';
import {IOperationResult} from '@src/types/openbis';
import {IOperationExecutionError} from '@src/types/openbis';
import {IOperationExecutionProgress} from '@src/types/openbis';
import {AbstractObjectDeletionOptions} from '@src/types/openbis';
import {DeletedObjectFetchOptions} from '@src/types/openbis';
import {DeletionFetchOptions} from '@src/types/openbis';
import {DeletionSortOptions} from '@src/types/openbis';
import {DeletionTechId} from '@src/types/openbis';
import {IDeletionId} from '@src/types/openbis';
import {SearchDeletionsOperationResult} from '@src/types/openbis';
import {DeletionSearchCriteria} from '@src/types/openbis';
import {SearchDeletionsOperation} from '@src/types/openbis';
import {Deletion} from '@src/types/openbis';
import {DeletedObject} from '@src/types/openbis';
import {ConfirmDeletionsOperation} from '@src/types/openbis';
import {ConfirmDeletionsOperationResult} from '@src/types/openbis';
import {RevertDeletionsOperationResult} from '@src/types/openbis';
import {RevertDeletionsOperation} from '@src/types/openbis';
import {QueryDatabase} from '@src/types/openbis';
import {QueryDeletionOptions} from '@src/types/openbis';
import {DeleteQueriesOperation} from '@src/types/openbis';
import {DeleteQueriesOperationResult} from '@src/types/openbis';
import {QuerySortOptions} from '@src/types/openbis';
import {QueryDatabaseSortOptions} from '@src/types/openbis';
import {QueryFetchOptions} from '@src/types/openbis';
import {QueryDatabaseFetchOptions} from '@src/types/openbis';
import {UpdateQueriesOperationResult} from '@src/types/openbis';
import {QueryUpdate} from '@src/types/openbis';
import {UpdateQueriesOperation} from '@src/types/openbis';
import {IQueryDatabaseId} from '@src/types/openbis';
import {QueryDatabaseName} from '@src/types/openbis';
import {QueryName} from '@src/types/openbis';
import {IQueryId} from '@src/types/openbis';
import {QueryTechId} from '@src/types/openbis';
import {GetQueryDatabasesOperationResult} from '@src/types/openbis';
import {GetQueriesOperationResult} from '@src/types/openbis';
import {GetQueryDatabasesOperation} from '@src/types/openbis';
import {GetQueriesOperation} from '@src/types/openbis';
import {QueryTypeSearchCriteria} from '@src/types/openbis';
import {SqlSearchCriteria} from '@src/types/openbis';
import {DatabaseIdSearchCriteria} from '@src/types/openbis';
import {EntityTypeCodePatternSearchCriteria} from '@src/types/openbis';
import {SearchQueryDatabasesOperationResult} from '@src/types/openbis';
import {SearchQueryDatabasesOperation} from '@src/types/openbis';
import {SearchQueriesOperation} from '@src/types/openbis';
import {QuerySearchCriteria} from '@src/types/openbis';
import {QueryDatabaseSearchCriteria} from '@src/types/openbis';
import {SearchQueriesOperationResult} from '@src/types/openbis';
import {Query} from '@src/types/openbis';
import {CreateQueriesOperationResult} from '@src/types/openbis';
import {QueryCreation} from '@src/types/openbis';
import {CreateQueriesOperation} from '@src/types/openbis';
import {SqlExecutionOptions} from '@src/types/openbis';
import {ExecuteSqlOperationResult} from '@src/types/openbis';
import {ExecuteQueryOperation} from '@src/types/openbis';
import {QueryExecutionOptions} from '@src/types/openbis';
import {ExecuteSqlOperation} from '@src/types/openbis';
import {ExecuteQueryOperationResult} from '@src/types/openbis';
import {QueryType} from '@src/types/openbis';
import {DeleteAuthorizationGroupsOperationResult} from '@src/types/openbis';
import {AuthorizationGroupDeletionOptions} from '@src/types/openbis';
import {DeleteAuthorizationGroupsOperation} from '@src/types/openbis';
import {AuthorizationGroupSortOptions} from '@src/types/openbis';
import {AuthorizationGroupFetchOptions} from '@src/types/openbis';
import {UpdateAuthorizationGroupsOperation} from '@src/types/openbis';
import {UpdateAuthorizationGroupsOperationResult} from '@src/types/openbis';
import {AuthorizationGroupUpdate} from '@src/types/openbis';
import {AuthorizationGroupPermId} from '@src/types/openbis';
import {IAuthorizationGroupId} from '@src/types/openbis';
import {GetAuthorizationGroupsOperationResult} from '@src/types/openbis';
import {GetAuthorizationGroupsOperation} from '@src/types/openbis';
import {AuthorizationGroupSearchCriteria} from '@src/types/openbis';
import {SearchAuthorizationGroupsOperation} from '@src/types/openbis';
import {SearchAuthorizationGroupsOperationResult} from '@src/types/openbis';
import {AuthorizationGroup} from '@src/types/openbis';
import {AuthorizationGroupCreation} from '@src/types/openbis';
import {CreateAuthorizationGroupsOperationResult} from '@src/types/openbis';
import {CreateAuthorizationGroupsOperation} from '@src/types/openbis';
import {EntityKind} from '@src/types/openbis';
import {EntityTypeSortOptions} from '@src/types/openbis';
import {EntityTypeFetchOptions} from '@src/types/openbis';
import {IEntityTypeUpdate} from '@src/types/openbis';
import {PropertyAssignmentListUpdateValue} from '@src/types/openbis';
import {EntityTypePermId} from '@src/types/openbis';
import {IEntityTypeId} from '@src/types/openbis';
import {EntityKindSearchCriteria} from '@src/types/openbis';
import {AbstractEntityTypeSearchCriteria} from '@src/types/openbis';
import {EntityTypeSearchCriteria} from '@src/types/openbis';
import {IEntityTypeCreation} from '@src/types/openbis';
import {PersonalAccessTokenDeletionOptions} from '@src/types/openbis';
import {DeletePersonalAccessTokensOperation} from '@src/types/openbis';
import {DeletePersonalAccessTokensOperationResult} from '@src/types/openbis';
import {PersonalAccessTokenFetchOptions} from '@src/types/openbis';
import {PersonalAccessTokenSortOptions} from '@src/types/openbis';
import {UpdatePersonalAccessTokensOperation} from '@src/types/openbis';
import {PersonalAccessTokenUpdate} from '@src/types/openbis';
import {UpdatePersonalAccessTokensOperationResult} from '@src/types/openbis';
import {IPersonalAccessTokenId} from '@src/types/openbis';
import {PersonalAccessTokenPermId} from '@src/types/openbis';
import {GetPersonalAccessTokensOperation} from '@src/types/openbis';
import {GetPersonalAccessTokensOperationResult} from '@src/types/openbis';
import {PersonalAccessTokenSearchCriteria} from '@src/types/openbis';
import {PersonalAccessTokenSessionNameSearchCriteria} from '@src/types/openbis';
import {PersonalAccessTokenOwnerSearchCriteria} from '@src/types/openbis';
import {SearchPersonalAccessTokensOperation} from '@src/types/openbis';
import {SearchPersonalAccessTokensOperationResult} from '@src/types/openbis';
import {PersonalAccessToken} from '@src/types/openbis';
import {CreatePersonalAccessTokensOperationResult} from '@src/types/openbis';
import {PersonalAccessTokenCreation} from '@src/types/openbis';
import {CreatePersonalAccessTokensOperation} from '@src/types/openbis';
import {Right} from '@src/types/openbis';
import {RightsFetchOptions} from '@src/types/openbis';
import {GetRightsOperation} from '@src/types/openbis';
import {GetRightsOperationResult} from '@src/types/openbis';
import {Rights} from '@src/types/openbis';
import {EventSortOptions} from '@src/types/openbis';
import {EventFetchOptions} from '@src/types/openbis';
import {EventTechId} from '@src/types/openbis';
import {IEventId} from '@src/types/openbis';
import {EventSearchCriteria} from '@src/types/openbis';
import {EventEntityRegistrationDateSearchCriteria} from '@src/types/openbis';
import {EventIdentifierSearchCriteria} from '@src/types/openbis';
import {SearchEventsOperation} from '@src/types/openbis';
import {EventReasonSearchCriteria} from '@src/types/openbis';
import {EventEntitySpaceIdSearchCriteria} from '@src/types/openbis';
import {EventEntitySpaceSearchCriteria} from '@src/types/openbis';
import {EventEntityProjectSearchCriteria} from '@src/types/openbis';
import {SearchEventsOperationResult} from '@src/types/openbis';
import {EventEntityTypeSearchCriteria} from '@src/types/openbis';
import {EventTypeSearchCriteria} from '@src/types/openbis';
import {EventDescriptionSearchCriteria} from '@src/types/openbis';
import {EventEntityRegistratorSearchCriteria} from '@src/types/openbis';
import {EventEntityProjectIdSearchCriteria} from '@src/types/openbis';
import {Event} from '@src/types/openbis';
import {EntityType} from '@src/types/openbis';
import {EventType} from '@src/types/openbis';
import {ObjectKind} from '@src/types/openbis';
import {OperationKind} from '@src/types/openbis';
import {ObjectKindModificationFetchOptions} from '@src/types/openbis';
import {ObjectKindModificationSortOptions} from '@src/types/openbis';
import {SearchObjectKindModificationsOperation} from '@src/types/openbis';
import {ObjectKindCriteria} from '@src/types/openbis';
import {SearchObjectKindModificationsOperationResult} from '@src/types/openbis';
import {OperationKindCriteria} from '@src/types/openbis';
import {ObjectKindModificationSearchCriteria} from '@src/types/openbis';
import {ObjectKindModification} from '@src/types/openbis';
import {HistoryEntry} from '@src/types/openbis';
import {HistoryEntrySortOptions} from '@src/types/openbis';
import {HistoryEntryFetchOptions} from '@src/types/openbis';
import {UnknownRelatedObjectId} from '@src/types/openbis';
import {IRelationType} from '@src/types/openbis';
import {RelationHistoryEntry} from '@src/types/openbis';
import {ContentCopyHistoryEntry} from '@src/types/openbis';
import {PropertyHistoryEntry} from '@src/types/openbis';
import {OperationExecutionProgress} from '@src/types/openbis';
import {SynchronousOperationExecutionOptions} from '@src/types/openbis';
import {OperationExecutionState} from '@src/types/openbis';
import {SynchronousOperationExecutionResults} from '@src/types/openbis';
import {DeleteOperationExecutionsOperationResult} from '@src/types/openbis';
import {DeleteOperationExecutionsOperation} from '@src/types/openbis';
import {OperationExecutionDeletionOptions} from '@src/types/openbis';
import {IOperationExecutionResults} from '@src/types/openbis';
import {OperationExecutionDetailsSortOptions} from '@src/types/openbis';
import {OperationExecutionNotificationFetchOptions} from '@src/types/openbis';
import {OperationExecutionSummaryFetchOptions} from '@src/types/openbis';
import {OperationExecutionSummarySortOptions} from '@src/types/openbis';
import {OperationExecutionSortOptions} from '@src/types/openbis';
import {OperationExecutionDetailsFetchOptions} from '@src/types/openbis';
import {OperationExecutionNotificationSortOptions} from '@src/types/openbis';
import {OperationExecutionFetchOptions} from '@src/types/openbis';
import {UpdateOperationExecutionsOperation} from '@src/types/openbis';
import {UpdateOperationExecutionsOperationResult} from '@src/types/openbis';
import {OperationExecutionUpdate} from '@src/types/openbis';
import {IOperationExecutionNotification} from '@src/types/openbis';
import {OperationExecutionPermId} from '@src/types/openbis';
import {IOperationExecutionId} from '@src/types/openbis';
import {GetOperationExecutionsOperation} from '@src/types/openbis';
import {GetOperationExecutionsOperationResult} from '@src/types/openbis';
import {SearchOperationExecutionsOperationResult} from '@src/types/openbis';
import {SearchOperationExecutionsOperation} from '@src/types/openbis';
import {OperationExecutionSearchCriteria} from '@src/types/openbis';
import {OperationExecutionError} from '@src/types/openbis';
import {OperationExecution} from '@src/types/openbis';
import {OperationExecutionDetails} from '@src/types/openbis';
import {AsynchronousOperationExecutionResults} from '@src/types/openbis';
import {IOperationExecutionOptions} from '@src/types/openbis';
import {OperationExecutionEmailNotification} from '@src/types/openbis';
import {AbstractOperationExecutionOptions} from '@src/types/openbis';
import {AsynchronousOperationExecutionOptions} from '@src/types/openbis';
import {OperationExecutionSummary} from '@src/types/openbis';
import {OperationExecutionAvailability} from '@src/types/openbis';
import {DeleteRoleAssignmentsOperation} from '@src/types/openbis';
import {DeleteRoleAssignmentsOperationResult} from '@src/types/openbis';
import {RoleAssignmentDeletionOptions} from '@src/types/openbis';
import {RoleLevel} from '@src/types/openbis';
import {RoleAssignmentSortOptions} from '@src/types/openbis';
import {RoleAssignmentFetchOptions} from '@src/types/openbis';
import {IRoleAssignmentId} from '@src/types/openbis';
import {RoleAssignmentTechId} from '@src/types/openbis';
import {GetRoleAssignmentsOperation} from '@src/types/openbis';
import {GetRoleAssignmentsOperationResult} from '@src/types/openbis';
import {RoleAssignment} from '@src/types/openbis';
import {SearchRoleAssignmentsOperation} from '@src/types/openbis';
import {RoleAssignmentSearchCriteria} from '@src/types/openbis';
import {SearchRoleAssignmentsOperationResult} from '@src/types/openbis';
import {CreateRoleAssignmentsOperationResult} from '@src/types/openbis';
import {CreateRoleAssignmentsOperation} from '@src/types/openbis';
import {RoleAssignmentCreation} from '@src/types/openbis';
import {Role} from '@src/types/openbis';
import {DataStoreFetchOptions} from '@src/types/openbis';
import {DataStoreSortOptions} from '@src/types/openbis';
import {DataStorePermId} from '@src/types/openbis';
import {IDataStoreId} from '@src/types/openbis';
import {SearchDataStoresOperation} from '@src/types/openbis';
import {SearchDataStoresOperationResult} from '@src/types/openbis';
import {DataStoreSearchCriteria} from '@src/types/openbis';
import {DataStore} from '@src/types/openbis';
import {SessionInformation} from '@src/types/openbis';
import {SessionInformationFetchOptions} from '@src/types/openbis';
import {SessionInformationSortOptions} from '@src/types/openbis';
import {ISessionInformationId} from '@src/types/openbis';
import {SessionInformationPermId} from '@src/types/openbis';
import {GetSessionInformationOperation} from '@src/types/openbis';
import {GetSessionInformationOperationResult} from '@src/types/openbis';
import {SearchSessionInformationOperationResult} from '@src/types/openbis';
import {UserNameSearchCriteria} from '@src/types/openbis';
import {SessionInformationSearchCriteria} from '@src/types/openbis';
import {PersonalAccessTokenSessionSearchCriteria} from '@src/types/openbis';
import {SearchSessionInformationOperation} from '@src/types/openbis';
import {StorageFormat} from '@src/types/openbis';
import {DeleteDataSetTypesOperation} from '@src/types/openbis';
import {DataSetDeletionOptions} from '@src/types/openbis';
import {DataSetTypeDeletionOptions} from '@src/types/openbis';
import {DeleteDataSetTypesOperationResult} from '@src/types/openbis';
import {DeleteDataSetsOperation} from '@src/types/openbis';
import {DeleteDataSetsOperationResult} from '@src/types/openbis';
import {DataSetKind} from '@src/types/openbis';
import {LocatorType} from '@src/types/openbis';
import {PhysicalDataSortOptions} from '@src/types/openbis';
import {LinkedDataFetchOptions} from '@src/types/openbis';
import {DataSetSortOptions} from '@src/types/openbis';
import {LinkedDataSortOptions} from '@src/types/openbis';
import {LocatorTypeSortOptions} from '@src/types/openbis';
import {DataSetFetchOptions} from '@src/types/openbis';
import {FileFormatTypeSortOptions} from '@src/types/openbis';
import {PhysicalDataFetchOptions} from '@src/types/openbis';
import {DataSetTypeFetchOptions} from '@src/types/openbis';
import {FileFormatTypeFetchOptions} from '@src/types/openbis';
import {LocatorTypeFetchOptions} from '@src/types/openbis';
import {StorageFormatFetchOptions} from '@src/types/openbis';
import {StorageFormatSortOptions} from '@src/types/openbis';
import {DataSetTypeSortOptions} from '@src/types/openbis';
import {UpdateDataSetsOperationResult} from '@src/types/openbis';
import {UpdateDataSetsOperation} from '@src/types/openbis';
import {PhysicalDataUpdate} from '@src/types/openbis';
import {LinkedDataUpdate} from '@src/types/openbis';
import {DataSetTypeUpdate} from '@src/types/openbis';
import {UpdateDataSetTypesOperationResult} from '@src/types/openbis';
import {UpdateDataSetTypesOperation} from '@src/types/openbis';
import {DataSetUpdate} from '@src/types/openbis';
import {ContentCopyListUpdateValue} from '@src/types/openbis';
import {DataSet} from '@src/types/openbis';
import {IContentCopyId} from '@src/types/openbis';
import {FileFormatTypePermId} from '@src/types/openbis';
import {IDataSetId} from '@src/types/openbis';
import {IStorageFormatId} from '@src/types/openbis';
import {IFileFormatTypeId} from '@src/types/openbis';
import {ContentCopyPermId} from '@src/types/openbis';
import {RelativeLocationLocatorTypePermId} from '@src/types/openbis';
import {DataSetPermId} from '@src/types/openbis';
import {StorageFormatPermId} from '@src/types/openbis';
import {ILocatorTypeId} from '@src/types/openbis';
import {ProprietaryStorageFormatPermId} from '@src/types/openbis';
import {BdsDirectoryStorageFormatPermId} from '@src/types/openbis';
import {LocatorTypePermId} from '@src/types/openbis';
import {ContentCopy} from '@src/types/openbis';
import {GetDataSetsOperationResult} from '@src/types/openbis';
import {GetDataSetTypesOperationResult} from '@src/types/openbis';
import {GetDataSetTypesOperation} from '@src/types/openbis';
import {GetDataSetsOperation} from '@src/types/openbis';
import {SearchDataSetTypesOperationResult} from '@src/types/openbis';
import {LocationSearchCriteria} from '@src/types/openbis';
import {ExternalCodeSearchCriteria} from '@src/types/openbis';
import {PresentInArchiveSearchCriteria} from '@src/types/openbis';
import {LinkedDataSearchCriteria} from '@src/types/openbis';
import {DataSetSearchCriteria} from '@src/types/openbis';
import {FileFormatTypeSearchCriteria} from '@src/types/openbis';
import {PhysicalDataSearchCriteria} from '@src/types/openbis';
import {StatusSearchCriteria} from '@src/types/openbis';
import {LocatorTypeSearchCriteria} from '@src/types/openbis';
import {SpeedHintSearchCriteria} from '@src/types/openbis';
import {GitRepositoryIdSearchCriteria} from '@src/types/openbis';
import {DataSetSearchRelation} from '@src/types/openbis';
import {GitCommitHashSearchCriteria} from '@src/types/openbis';
import {ArchivingRequestedSearchCriteria} from '@src/types/openbis';
import {StorageConfirmationSearchCriteria} from '@src/types/openbis';
import {ShareIdSearchCriteria} from '@src/types/openbis';
import {CompleteSearchCriteria} from '@src/types/openbis';
import {SearchDataSetTypesOperation} from '@src/types/openbis';
import {SizeSearchCriteria} from '@src/types/openbis';
import {PathSearchCriteria} from '@src/types/openbis';
import {DataSetTypeSearchCriteria} from '@src/types/openbis';
import {ContentCopySearchCriteria} from '@src/types/openbis';
import {StorageFormatSearchCriteria} from '@src/types/openbis';
import {SearchDataSetsOperation} from '@src/types/openbis';
import {SearchDataSetsOperationResult} from '@src/types/openbis';
import {UnlockDataSetsOperation} from '@src/types/openbis';
import {DataSetUnlockOptions} from '@src/types/openbis';
import {UnlockDataSetsOperationResult} from '@src/types/openbis';
import {LinkedData} from '@src/types/openbis';
import {LockDataSetsOperation} from '@src/types/openbis';
import {DataSetLockOptions} from '@src/types/openbis';
import {LockDataSetsOperationResult} from '@src/types/openbis';
import {ArchivingStatus} from '@src/types/openbis';
import {DataSetType} from '@src/types/openbis';
import {UnarchiveDataSetsOperation} from '@src/types/openbis';
import {UnarchiveDataSetsOperationResult} from '@src/types/openbis';
import {DataSetUnarchiveOptions} from '@src/types/openbis';
import {Complete} from '@src/types/openbis';
import {ArchiveDataSetsOperation} from '@src/types/openbis';
import {DataSetArchiveOptions} from '@src/types/openbis';
import {ArchiveDataSetsOperationResult} from '@src/types/openbis';
import {FileFormatType} from '@src/types/openbis';
import {LinkedDataCreation} from '@src/types/openbis';
import {CreateDataSetTypesOperationResult} from '@src/types/openbis';
import {DataSetCreation} from '@src/types/openbis';
import {CreateDataSetsOperation} from '@src/types/openbis';
import {CreateDataSetTypesOperation} from '@src/types/openbis';
import {ContentCopyCreation} from '@src/types/openbis';
import {DataSetTypeCreation} from '@src/types/openbis';
import {CreateDataSetsOperationResult} from '@src/types/openbis';
import {DataSetRelationType} from '@src/types/openbis';
import {PhysicalData} from '@src/types/openbis';
import {CreateCodesOperationResult} from '@src/types/openbis';
import {CreatePermIdsOperationResult} from '@src/types/openbis';
import {CreateCodesOperation} from '@src/types/openbis';
import {CreatePermIdsOperation} from '@src/types/openbis';
import {WebAppSettingsSortOptions} from '@src/types/openbis';
import {WebAppSettingsFetchOptions} from '@src/types/openbis';
import {WebAppSettingsUpdateValue} from '@src/types/openbis';
import {WebAppSetting} from '@src/types/openbis';
import {WebAppSettingCreation} from '@src/types/openbis';
import {WebAppSettings} from '@src/types/openbis';
import {DeletePluginsOperation} from '@src/types/openbis';
import {DeletePluginsOperationResult} from '@src/types/openbis';
import {PluginDeletionOptions} from '@src/types/openbis';
import {EvaluatePluginOperationResult} from '@src/types/openbis';
import {EntityValidationPluginEvaluationResult} from '@src/types/openbis';
import {EntityValidationPluginEvaluationOptions} from '@src/types/openbis';
import {DynamicPropertyPluginEvaluationResult} from '@src/types/openbis';
import {PluginEvaluationResult} from '@src/types/openbis';
import {EvaluatePluginOperation} from '@src/types/openbis';
import {PluginEvaluationOptions} from '@src/types/openbis';
import {DynamicPropertyPluginEvaluationOptions} from '@src/types/openbis';
import {PluginSortOptions} from '@src/types/openbis';
import {PluginFetchOptions} from '@src/types/openbis';
import {UpdatePluginsOperation} from '@src/types/openbis';
import {PluginUpdate} from '@src/types/openbis';
import {UpdatePluginsOperationResult} from '@src/types/openbis';
import {Plugin} from '@src/types/openbis';
import {IPluginId} from '@src/types/openbis';
import {PluginPermId} from '@src/types/openbis';
import {GetPluginsOperation} from '@src/types/openbis';
import {GetPluginsOperationResult} from '@src/types/openbis';
import {PluginKind} from '@src/types/openbis';
import {PluginTypeSearchCriteria} from '@src/types/openbis';
import {SearchPluginsOperation} from '@src/types/openbis';
import {SearchPluginsOperationResult} from '@src/types/openbis';
import {PluginKindSearchCriteria} from '@src/types/openbis';
import {PluginSearchCriteria} from '@src/types/openbis';
import {CreatePluginsOperation} from '@src/types/openbis';
import {CreatePluginsOperationResult} from '@src/types/openbis';
import {PluginCreation} from '@src/types/openbis';
import {PluginType} from '@src/types/openbis';
import {DeleteVocabulariesOperationResult} from '@src/types/openbis';
import {VocabularyDeletionOptions} from '@src/types/openbis';
import {DeleteVocabulariesOperation} from '@src/types/openbis';
import {VocabularyTermReplacement} from '@src/types/openbis';
import {DeleteVocabularyTermsOperationResult} from '@src/types/openbis';
import {DeleteVocabularyTermsOperation} from '@src/types/openbis';
import {VocabularyTermDeletionOptions} from '@src/types/openbis';
import {VocabularyTermSortOptions} from '@src/types/openbis';
import {VocabularyFetchOptions} from '@src/types/openbis';
import {VocabularySortOptions} from '@src/types/openbis';
import {VocabularyTermFetchOptions} from '@src/types/openbis';
import {UpdateVocabulariesOperation} from '@src/types/openbis';
import {VocabularyTermUpdate} from '@src/types/openbis';
import {VocabularyUpdate} from '@src/types/openbis';
import {UpdateVocabulariesOperationResult} from '@src/types/openbis';
import {UpdateVocabularyTermsOperation} from '@src/types/openbis';
import {UpdateVocabularyTermsOperationResult} from '@src/types/openbis';
import {Vocabulary} from '@src/types/openbis';
import {VocabularyPermId} from '@src/types/openbis';
import {IVocabularyId} from '@src/types/openbis';
import {IVocabularyTermId} from '@src/types/openbis';
import {VocabularyTermPermId} from '@src/types/openbis';
import {GetVocabulariesOperationResult} from '@src/types/openbis';
import {GetVocabulariesOperation} from '@src/types/openbis';
import {GetVocabularyTermsOperation} from '@src/types/openbis';
import {GetVocabularyTermsOperationResult} from '@src/types/openbis';
import {SearchVocabulariesOperationResult} from '@src/types/openbis';
import {SearchVocabulariesOperation} from '@src/types/openbis';
import {VocabularySearchCriteria} from '@src/types/openbis';
import {VocabularyTermSearchCriteria} from '@src/types/openbis';
import {SearchVocabularyTermsOperationResult} from '@src/types/openbis';
import {SearchVocabularyTermsOperation} from '@src/types/openbis';
import {VocabularyTerm} from '@src/types/openbis';
import {VocabularyCreation} from '@src/types/openbis';
import {CreateVocabulariesOperation} from '@src/types/openbis';
import {CreateVocabularyTermsOperationResult} from '@src/types/openbis';
import {CreateVocabulariesOperationResult} from '@src/types/openbis';
import {CreateVocabularyTermsOperation} from '@src/types/openbis';
import {VocabularyTermCreation} from '@src/types/openbis';
const SearchDomainServiceDto: SearchDomainService = V3API.SearchDomainService;
const SearchDomainServiceSearchOptionDto: SearchDomainServiceSearchOption = V3API.SearchDomainServiceSearchOption;
const AggregationServiceDto: AggregationService = V3API.AggregationService;
const ProcessingServiceDto: ProcessingService = V3API.ProcessingService;
const ProcessingServiceSortOptionsDto: ProcessingServiceSortOptions = V3API.ProcessingServiceSortOptions;
const AggregationServiceFetchOptionsDto: AggregationServiceFetchOptions = V3API.AggregationServiceFetchOptions;
const ProcessingServiceFetchOptionsDto: ProcessingServiceFetchOptions = V3API.ProcessingServiceFetchOptions;
const AggregationServiceSortOptionsDto: AggregationServiceSortOptions = V3API.AggregationServiceSortOptions;
const ReportingServiceFetchOptionsDto: ReportingServiceFetchOptions = V3API.ReportingServiceFetchOptions;
const SearchDomainServiceSortOptionsDto: SearchDomainServiceSortOptions = V3API.SearchDomainServiceSortOptions;
const CustomASServiceFetchOptionsDto: CustomASServiceFetchOptions = V3API.CustomASServiceFetchOptions;
const ReportingServiceSortOptionsDto: ReportingServiceSortOptions = V3API.ReportingServiceSortOptions;
const SearchDomainServiceFetchOptionsDto: SearchDomainServiceFetchOptions = V3API.SearchDomainServiceFetchOptions;
const CustomASServiceSortOptionsDto: CustomASServiceSortOptions = V3API.CustomASServiceSortOptions;
const ICustomASServiceIdDto: ICustomASServiceId = V3API.ICustomASServiceId;
const IDssServiceIdDto: IDssServiceId = V3API.IDssServiceId;
const DssServicePermIdDto: DssServicePermId = V3API.DssServicePermId;
const CustomASServiceCodeDto: CustomASServiceCode = V3API.CustomASServiceCode;
const SearchAggregationServicesOperationResultDto: SearchAggregationServicesOperationResult = V3API.SearchAggregationServicesOperationResult;
const ReportingServiceSearchCriteriaDto: ReportingServiceSearchCriteria = V3API.ReportingServiceSearchCriteria;
const SearchCustomASServicesOperationDto: SearchCustomASServicesOperation = V3API.SearchCustomASServicesOperation;
const SearchProcessingServicesOperationResultDto: SearchProcessingServicesOperationResult = V3API.SearchProcessingServicesOperationResult;
const ProcessingServiceSearchCriteriaDto: ProcessingServiceSearchCriteria = V3API.ProcessingServiceSearchCriteria;
const CustomASServiceSearchCriteriaDto: CustomASServiceSearchCriteria = V3API.CustomASServiceSearchCriteria;
const SearchReportingServicesOperationDto: SearchReportingServicesOperation = V3API.SearchReportingServicesOperation;
const SearchDomainServiceSearchCriteriaDto: SearchDomainServiceSearchCriteria = V3API.SearchDomainServiceSearchCriteria;
const SearchSearchDomainServicesOperationResultDto: SearchSearchDomainServicesOperationResult = V3API.SearchSearchDomainServicesOperationResult;
const SearchProcessingServicesOperationDto: SearchProcessingServicesOperation = V3API.SearchProcessingServicesOperation;
const SearchAggregationServicesOperationDto: SearchAggregationServicesOperation = V3API.SearchAggregationServicesOperation;
const SearchSearchDomainServicesOperationDto: SearchSearchDomainServicesOperation = V3API.SearchSearchDomainServicesOperation;
const AggregationServiceSearchCriteriaDto: AggregationServiceSearchCriteria = V3API.AggregationServiceSearchCriteria;
const SearchCustomASServicesOperationResultDto: SearchCustomASServicesOperationResult = V3API.SearchCustomASServicesOperationResult;
const SearchReportingServicesOperationResultDto: SearchReportingServicesOperationResult = V3API.SearchReportingServicesOperationResult;
const SearchDomainServiceExecutionResultDto: SearchDomainServiceExecutionResult = V3API.SearchDomainServiceExecutionResult;
const ReportingServiceDto: ReportingService = V3API.ReportingService;
const CustomASServiceDto: CustomASService = V3API.CustomASService;
const CustomASServiceExecutionOptionsDto: CustomASServiceExecutionOptions = V3API.CustomASServiceExecutionOptions;
const ExecuteProcessingServiceOperationDto: ExecuteProcessingServiceOperation = V3API.ExecuteProcessingServiceOperation;
const ExecuteSearchDomainServiceOperationDto: ExecuteSearchDomainServiceOperation = V3API.ExecuteSearchDomainServiceOperation;
const ExecuteCustomASServiceOperationResultDto: ExecuteCustomASServiceOperationResult = V3API.ExecuteCustomASServiceOperationResult;
const ProcessingServiceExecutionOptionsDto: ProcessingServiceExecutionOptions = V3API.ProcessingServiceExecutionOptions;
const ExecuteSearchDomainServiceOperationResultDto: ExecuteSearchDomainServiceOperationResult = V3API.ExecuteSearchDomainServiceOperationResult;
const AggregationServiceExecutionOptionsDto: AggregationServiceExecutionOptions = V3API.AggregationServiceExecutionOptions;
const ExecuteCustomASServiceOperationDto: ExecuteCustomASServiceOperation = V3API.ExecuteCustomASServiceOperation;
const ExecuteAggregationServiceOperationResultDto: ExecuteAggregationServiceOperationResult = V3API.ExecuteAggregationServiceOperationResult;
const SearchDomainServiceExecutionOptionsDto: SearchDomainServiceExecutionOptions = V3API.SearchDomainServiceExecutionOptions;
const ExecuteProcessingServiceOperationResultDto: ExecuteProcessingServiceOperationResult = V3API.ExecuteProcessingServiceOperationResult;
const ExecuteReportingServiceOperationResultDto: ExecuteReportingServiceOperationResult = V3API.ExecuteReportingServiceOperationResult;
const ReportingServiceExecutionOptionsDto: ReportingServiceExecutionOptions = V3API.ReportingServiceExecutionOptions;
const ExecuteAggregationServiceOperationDto: ExecuteAggregationServiceOperation = V3API.ExecuteAggregationServiceOperation;
const ExecuteReportingServiceOperationDto: ExecuteReportingServiceOperation = V3API.ExecuteReportingServiceOperation;
const AbstractExecutionOptionsWithParametersDto: AbstractExecutionOptionsWithParameters = V3API.AbstractExecutionOptionsWithParameters;
const ServerInformationDto: ServerInformation = V3API.ServerInformation;
const GlobalSearchObjectFetchOptionsDto: GlobalSearchObjectFetchOptions = V3API.GlobalSearchObjectFetchOptions;
const MatchFetchOptionsDto: MatchFetchOptions = V3API.MatchFetchOptions;
const GlobalSearchObjectSortOptionsDto: GlobalSearchObjectSortOptions = V3API.GlobalSearchObjectSortOptions;
const SearchGloballyOperationResultDto: SearchGloballyOperationResult = V3API.SearchGloballyOperationResult;
const GlobalSearchObjectKindDto: GlobalSearchObjectKind = V3API.GlobalSearchObjectKind;
const GlobalSearchObjectKindCriteriaDto: GlobalSearchObjectKindCriteria = V3API.GlobalSearchObjectKindCriteria;
const GlobalSearchTextCriteriaDto: GlobalSearchTextCriteria = V3API.GlobalSearchTextCriteria;
const GlobalSearchCriteriaDto: GlobalSearchCriteria = V3API.GlobalSearchCriteria;
const GlobalSearchWildCardsCriteriaDto: GlobalSearchWildCardsCriteria = V3API.GlobalSearchWildCardsCriteria;
const SearchGloballyOperationDto: SearchGloballyOperation = V3API.SearchGloballyOperation;
const GlobalSearchObjectDto: GlobalSearchObject = V3API.GlobalSearchObject;
const DeleteExternalDmsOperationResultDto: DeleteExternalDmsOperationResult = V3API.DeleteExternalDmsOperationResult;
const ExternalDmsDeletionOptionsDto: ExternalDmsDeletionOptions = V3API.ExternalDmsDeletionOptions;
const DeleteExternalDmsOperationDto: DeleteExternalDmsOperation = V3API.DeleteExternalDmsOperation;
const ExternalDmsFetchOptionsDto: ExternalDmsFetchOptions = V3API.ExternalDmsFetchOptions;
const ExternalDmsSortOptionsDto: ExternalDmsSortOptions = V3API.ExternalDmsSortOptions;
const UpdateExternalDmsOperationResultDto: UpdateExternalDmsOperationResult = V3API.UpdateExternalDmsOperationResult;
const ExternalDmsUpdateDto: ExternalDmsUpdate = V3API.ExternalDmsUpdate;
const UpdateExternalDmsOperationDto: UpdateExternalDmsOperation = V3API.UpdateExternalDmsOperation;
const ExternalDmsDto: ExternalDms = V3API.ExternalDms;
const ExternalDmsPermIdDto: ExternalDmsPermId = V3API.ExternalDmsPermId;
const IExternalDmsIdDto: IExternalDmsId = V3API.IExternalDmsId;
const GetExternalDmsOperationResultDto: GetExternalDmsOperationResult = V3API.GetExternalDmsOperationResult;
const GetExternalDmsOperationDto: GetExternalDmsOperation = V3API.GetExternalDmsOperation;
const ExternalDmsTypeSearchCriteriaDto: ExternalDmsTypeSearchCriteria = V3API.ExternalDmsTypeSearchCriteria;
const ExternalDmsSearchCriteriaDto: ExternalDmsSearchCriteria = V3API.ExternalDmsSearchCriteria;
const LabelSearchCriteriaDto: LabelSearchCriteria = V3API.LabelSearchCriteria;
const SearchExternalDmsOperationResultDto: SearchExternalDmsOperationResult = V3API.SearchExternalDmsOperationResult;
const SearchExternalDmsOperationDto: SearchExternalDmsOperation = V3API.SearchExternalDmsOperation;
const AddressSearchCriteriaDto: AddressSearchCriteria = V3API.AddressSearchCriteria;
const ExternalDmsAddressTypeDto: ExternalDmsAddressType = V3API.ExternalDmsAddressType;
const CreateExternalDmsOperationResultDto: CreateExternalDmsOperationResult = V3API.CreateExternalDmsOperationResult;
const ExternalDmsCreationDto: ExternalDmsCreation = V3API.ExternalDmsCreation;
const CreateExternalDmsOperationDto: CreateExternalDmsOperation = V3API.CreateExternalDmsOperation;
const TagDto: Tag = V3API.Tag;
const DeleteTagsOperationDto: DeleteTagsOperation = V3API.DeleteTagsOperation;
const TagDeletionOptionsDto: TagDeletionOptions = V3API.TagDeletionOptions;
const DeleteTagsOperationResultDto: DeleteTagsOperationResult = V3API.DeleteTagsOperationResult;
const TagFetchOptionsDto: TagFetchOptions = V3API.TagFetchOptions;
const TagSortOptionsDto: TagSortOptions = V3API.TagSortOptions;
const UpdateTagsOperationResultDto: UpdateTagsOperationResult = V3API.UpdateTagsOperationResult;
const UpdateTagsOperationDto: UpdateTagsOperation = V3API.UpdateTagsOperation;
const TagUpdateDto: TagUpdate = V3API.TagUpdate;
const TagCodeDto: TagCode = V3API.TagCode;
const ITagIdDto: ITagId = V3API.ITagId;
const TagPermIdDto: TagPermId = V3API.TagPermId;
const GetTagsOperationDto: GetTagsOperation = V3API.GetTagsOperation;
const GetTagsOperationResultDto: GetTagsOperationResult = V3API.GetTagsOperationResult;
const TagSearchCriteriaDto: TagSearchCriteria = V3API.TagSearchCriteria;
const SearchTagsOperationResultDto: SearchTagsOperationResult = V3API.SearchTagsOperationResult;
const SearchTagsOperationDto: SearchTagsOperation = V3API.SearchTagsOperation;
const CreateTagsOperationResultDto: CreateTagsOperationResult = V3API.CreateTagsOperationResult;
const CreateTagsOperationDto: CreateTagsOperation = V3API.CreateTagsOperation;
const TagCreationDto: TagCreation = V3API.TagCreation;
const DeleteSpacesOperationDto: DeleteSpacesOperation = V3API.DeleteSpacesOperation;
const SpaceDeletionOptionsDto: SpaceDeletionOptions = V3API.SpaceDeletionOptions;
const DeleteSpacesOperationResultDto: DeleteSpacesOperationResult = V3API.DeleteSpacesOperationResult;
const SpaceFetchOptionsDto: SpaceFetchOptions = V3API.SpaceFetchOptions;
const SpaceSortOptionsDto: SpaceSortOptions = V3API.SpaceSortOptions;
const UpdateSpacesOperationResultDto: UpdateSpacesOperationResult = V3API.UpdateSpacesOperationResult;
const UpdateSpacesOperationDto: UpdateSpacesOperation = V3API.UpdateSpacesOperation;
const SpaceUpdateDto: SpaceUpdate = V3API.SpaceUpdate;
const SpaceTechIdDto: SpaceTechId = V3API.SpaceTechId;
const ISpaceIdDto: ISpaceId = V3API.ISpaceId;
const SpacePermIdDto: SpacePermId = V3API.SpacePermId;
const GetSpacesOperationDto: GetSpacesOperation = V3API.GetSpacesOperation;
const GetSpacesOperationResultDto: GetSpacesOperationResult = V3API.GetSpacesOperationResult;
const SearchSpacesOperationResultDto: SearchSpacesOperationResult = V3API.SearchSpacesOperationResult;
const SearchSpacesOperationDto: SearchSpacesOperation = V3API.SearchSpacesOperation;
const SpaceSearchCriteriaDto: SpaceSearchCriteria = V3API.SpaceSearchCriteria;
const NoSpaceSearchCriteriaDto: NoSpaceSearchCriteria = V3API.NoSpaceSearchCriteria;
const SpaceDto: Space = V3API.Space;
const CreateSpacesOperationResultDto: CreateSpacesOperationResult = V3API.CreateSpacesOperationResult;
const CreateSpacesOperationDto: CreateSpacesOperation = V3API.CreateSpacesOperation;
const SpaceCreationDto: SpaceCreation = V3API.SpaceCreation;
const AttachmentFetchOptionsDto: AttachmentFetchOptions = V3API.AttachmentFetchOptions;
const AttachmentSortOptionsDto: AttachmentSortOptions = V3API.AttachmentSortOptions;
const AttachmentListUpdateValueDto: AttachmentListUpdateValue = V3API.AttachmentListUpdateValue;
const AttachmentFileNameDto: AttachmentFileName = V3API.AttachmentFileName;
const IAttachmentIdDto: IAttachmentId = V3API.IAttachmentId;
const AttachmentDto: Attachment = V3API.Attachment;
const AttachmentCreationDto: AttachmentCreation = V3API.AttachmentCreation;
const DeleteMaterialTypesOperationDto: DeleteMaterialTypesOperation = V3API.DeleteMaterialTypesOperation;
const DeleteMaterialTypesOperationResultDto: DeleteMaterialTypesOperationResult = V3API.DeleteMaterialTypesOperationResult;
const MaterialTypeDeletionOptionsDto: MaterialTypeDeletionOptions = V3API.MaterialTypeDeletionOptions;
const MaterialDeletionOptionsDto: MaterialDeletionOptions = V3API.MaterialDeletionOptions;
const DeleteMaterialsOperationResultDto: DeleteMaterialsOperationResult = V3API.DeleteMaterialsOperationResult;
const DeleteMaterialsOperationDto: DeleteMaterialsOperation = V3API.DeleteMaterialsOperation;
const MaterialTypeDto: MaterialType = V3API.MaterialType;
const MaterialTypeSortOptionsDto: MaterialTypeSortOptions = V3API.MaterialTypeSortOptions;
const MaterialFetchOptionsDto: MaterialFetchOptions = V3API.MaterialFetchOptions;
const MaterialSortOptionsDto: MaterialSortOptions = V3API.MaterialSortOptions;
const MaterialTypeFetchOptionsDto: MaterialTypeFetchOptions = V3API.MaterialTypeFetchOptions;
const UpdateMaterialTypesOperationResultDto: UpdateMaterialTypesOperationResult = V3API.UpdateMaterialTypesOperationResult;
const MaterialTypeUpdateDto: MaterialTypeUpdate = V3API.MaterialTypeUpdate;
const MaterialUpdateDto: MaterialUpdate = V3API.MaterialUpdate;
const UpdateMaterialsOperationDto: UpdateMaterialsOperation = V3API.UpdateMaterialsOperation;
const UpdateMaterialTypesOperationDto: UpdateMaterialTypesOperation = V3API.UpdateMaterialTypesOperation;
const UpdateMaterialsOperationResultDto: UpdateMaterialsOperationResult = V3API.UpdateMaterialsOperationResult;
const IMaterialIdDto: IMaterialId = V3API.IMaterialId;
const MaterialPermIdDto: MaterialPermId = V3API.MaterialPermId;
const GetMaterialTypesOperationDto: GetMaterialTypesOperation = V3API.GetMaterialTypesOperation;
const GetMaterialTypesOperationResultDto: GetMaterialTypesOperationResult = V3API.GetMaterialTypesOperationResult;
const GetMaterialsOperationDto: GetMaterialsOperation = V3API.GetMaterialsOperation;
const GetMaterialsOperationResultDto: GetMaterialsOperationResult = V3API.GetMaterialsOperationResult;
const SearchMaterialTypesOperationDto: SearchMaterialTypesOperation = V3API.SearchMaterialTypesOperation;
const SearchMaterialsOperationDto: SearchMaterialsOperation = V3API.SearchMaterialsOperation;
const MaterialSearchCriteriaDto: MaterialSearchCriteria = V3API.MaterialSearchCriteria;
const SearchMaterialTypesOperationResultDto: SearchMaterialTypesOperationResult = V3API.SearchMaterialTypesOperationResult;
const SearchMaterialsOperationResultDto: SearchMaterialsOperationResult = V3API.SearchMaterialsOperationResult;
const MaterialTypeSearchCriteriaDto: MaterialTypeSearchCriteria = V3API.MaterialTypeSearchCriteria;
const CreateMaterialsOperationResultDto: CreateMaterialsOperationResult = V3API.CreateMaterialsOperationResult;
const CreateMaterialTypesOperationDto: CreateMaterialTypesOperation = V3API.CreateMaterialTypesOperation;
const CreateMaterialsOperationDto: CreateMaterialsOperation = V3API.CreateMaterialsOperation;
const MaterialCreationDto: MaterialCreation = V3API.MaterialCreation;
const CreateMaterialTypesOperationResultDto: CreateMaterialTypesOperationResult = V3API.CreateMaterialTypesOperationResult;
const MaterialTypeCreationDto: MaterialTypeCreation = V3API.MaterialTypeCreation;
const MaterialDto: Material = V3API.Material;
const DeletePropertyTypesOperationDto: DeletePropertyTypesOperation = V3API.DeletePropertyTypesOperation;
const DeletePropertyTypesOperationResultDto: DeletePropertyTypesOperationResult = V3API.DeletePropertyTypesOperationResult;
const PropertyTypeDeletionOptionsDto: PropertyTypeDeletionOptions = V3API.PropertyTypeDeletionOptions;
const PropertyTypeSortOptionsDto: PropertyTypeSortOptions = V3API.PropertyTypeSortOptions;
const PropertyAssignmentFetchOptionsDto: PropertyAssignmentFetchOptions = V3API.PropertyAssignmentFetchOptions;
const PropertyTypeFetchOptionsDto: PropertyTypeFetchOptions = V3API.PropertyTypeFetchOptions;
const PropertyAssignmentSortOptionsDto: PropertyAssignmentSortOptions = V3API.PropertyAssignmentSortOptions;
const PropertyFetchOptionsDto: PropertyFetchOptions = V3API.PropertyFetchOptions;
const UpdatePropertyTypesOperationResultDto: UpdatePropertyTypesOperationResult = V3API.UpdatePropertyTypesOperationResult;
const PropertyTypeUpdateDto: PropertyTypeUpdate = V3API.PropertyTypeUpdate;
const UpdatePropertyTypesOperationDto: UpdatePropertyTypesOperation = V3API.UpdatePropertyTypesOperation;
const IPropertyTypeIdDto: IPropertyTypeId = V3API.IPropertyTypeId;
const PropertyTypePermIdDto: PropertyTypePermId = V3API.PropertyTypePermId;
const IPropertyAssignmentIdDto: IPropertyAssignmentId = V3API.IPropertyAssignmentId;
const PropertyAssignmentPermIdDto: PropertyAssignmentPermId = V3API.PropertyAssignmentPermId;
const GetPropertyTypesOperationResultDto: GetPropertyTypesOperationResult = V3API.GetPropertyTypesOperationResult;
const GetPropertyTypesOperationDto: GetPropertyTypesOperation = V3API.GetPropertyTypesOperation;
const PropertyTypeDto: PropertyType = V3API.PropertyType;
const SearchPropertyTypesOperationDto: SearchPropertyTypesOperation = V3API.SearchPropertyTypesOperation;
const SearchPropertyTypesOperationResultDto: SearchPropertyTypesOperationResult = V3API.SearchPropertyTypesOperationResult;
const PropertyAssignmentSearchCriteriaDto: PropertyAssignmentSearchCriteria = V3API.PropertyAssignmentSearchCriteria;
const SearchPropertyAssignmentsOperationDto: SearchPropertyAssignmentsOperation = V3API.SearchPropertyAssignmentsOperation;
const SearchPropertyAssignmentsOperationResultDto: SearchPropertyAssignmentsOperationResult = V3API.SearchPropertyAssignmentsOperationResult;
const PropertyTypeSearchCriteriaDto: PropertyTypeSearchCriteria = V3API.PropertyTypeSearchCriteria;
const DataTypeDto: DataType = V3API.DataType;
const PropertyAssignmentDto: PropertyAssignment = V3API.PropertyAssignment;
const PropertyAssignmentCreationDto: PropertyAssignmentCreation = V3API.PropertyAssignmentCreation;
const CreatePropertyTypesOperationResultDto: CreatePropertyTypesOperationResult = V3API.CreatePropertyTypesOperationResult;
const CreatePropertyTypesOperationDto: CreatePropertyTypesOperation = V3API.CreatePropertyTypesOperation;
const PropertyTypeCreationDto: PropertyTypeCreation = V3API.PropertyTypeCreation;
const DeleteProjectsOperationDto: DeleteProjectsOperation = V3API.DeleteProjectsOperation;
const ProjectDeletionOptionsDto: ProjectDeletionOptions = V3API.ProjectDeletionOptions;
const DeleteProjectsOperationResultDto: DeleteProjectsOperationResult = V3API.DeleteProjectsOperationResult;
const ProjectSortOptionsDto: ProjectSortOptions = V3API.ProjectSortOptions;
const ProjectFetchOptionsDto: ProjectFetchOptions = V3API.ProjectFetchOptions;
const UpdateProjectsOperationDto: UpdateProjectsOperation = V3API.UpdateProjectsOperation;
const ProjectUpdateDto: ProjectUpdate = V3API.ProjectUpdate;
const UpdateProjectsOperationResultDto: UpdateProjectsOperationResult = V3API.UpdateProjectsOperationResult;
const ProjectPermIdDto: ProjectPermId = V3API.ProjectPermId;
const IProjectIdDto: IProjectId = V3API.IProjectId;
const ProjectIdentifierDto: ProjectIdentifier = V3API.ProjectIdentifier;
const GetProjectsOperationDto: GetProjectsOperation = V3API.GetProjectsOperation;
const GetProjectsOperationResultDto: GetProjectsOperationResult = V3API.GetProjectsOperationResult;
const NoProjectSearchCriteriaDto: NoProjectSearchCriteria = V3API.NoProjectSearchCriteria;
const SearchProjectsOperationResultDto: SearchProjectsOperationResult = V3API.SearchProjectsOperationResult;
const SearchProjectsOperationDto: SearchProjectsOperation = V3API.SearchProjectsOperation;
const ProjectSearchCriteriaDto: ProjectSearchCriteria = V3API.ProjectSearchCriteria;
const ProjectDto: Project = V3API.Project;
const CreateProjectsOperationResultDto: CreateProjectsOperationResult = V3API.CreateProjectsOperationResult;
const CreateProjectsOperationDto: CreateProjectsOperation = V3API.CreateProjectsOperation;
const ProjectCreationDto: ProjectCreation = V3API.ProjectCreation;
const ProjectRelationTypeDto: ProjectRelationType = V3API.ProjectRelationType;
const ExperimentTypeDto: ExperimentType = V3API.ExperimentType;
const DeleteExperimentTypesOperationResultDto: DeleteExperimentTypesOperationResult = V3API.DeleteExperimentTypesOperationResult;
const ExperimentDeletionOptionsDto: ExperimentDeletionOptions = V3API.ExperimentDeletionOptions;
const DeleteExperimentTypesOperationDto: DeleteExperimentTypesOperation = V3API.DeleteExperimentTypesOperation;
const DeleteExperimentsOperationResultDto: DeleteExperimentsOperationResult = V3API.DeleteExperimentsOperationResult;
const DeleteExperimentsOperationDto: DeleteExperimentsOperation = V3API.DeleteExperimentsOperation;
const ExperimentTypeDeletionOptionsDto: ExperimentTypeDeletionOptions = V3API.ExperimentTypeDeletionOptions;
const ExperimentFetchOptionsDto: ExperimentFetchOptions = V3API.ExperimentFetchOptions;
const ExperimentTypeSortOptionsDto: ExperimentTypeSortOptions = V3API.ExperimentTypeSortOptions;
const ExperimentTypeFetchOptionsDto: ExperimentTypeFetchOptions = V3API.ExperimentTypeFetchOptions;
const ExperimentSortOptionsDto: ExperimentSortOptions = V3API.ExperimentSortOptions;
const UpdateExperimentsOperationDto: UpdateExperimentsOperation = V3API.UpdateExperimentsOperation;
const ExperimentUpdateDto: ExperimentUpdate = V3API.ExperimentUpdate;
const UpdateExperimentTypesOperationDto: UpdateExperimentTypesOperation = V3API.UpdateExperimentTypesOperation;
const UpdateExperimentTypesOperationResultDto: UpdateExperimentTypesOperationResult = V3API.UpdateExperimentTypesOperationResult;
const UpdateExperimentsOperationResultDto: UpdateExperimentsOperationResult = V3API.UpdateExperimentsOperationResult;
const ExperimentTypeUpdateDto: ExperimentTypeUpdate = V3API.ExperimentTypeUpdate;
const ExperimentPermIdDto: ExperimentPermId = V3API.ExperimentPermId;
const ExperimentIdentifierDto: ExperimentIdentifier = V3API.ExperimentIdentifier;
const IExperimentIdDto: IExperimentId = V3API.IExperimentId;
const GetExperimentsOperationDto: GetExperimentsOperation = V3API.GetExperimentsOperation;
const GetExperimentsOperationResultDto: GetExperimentsOperationResult = V3API.GetExperimentsOperationResult;
const GetExperimentTypesOperationDto: GetExperimentTypesOperation = V3API.GetExperimentTypesOperation;
const GetExperimentTypesOperationResultDto: GetExperimentTypesOperationResult = V3API.GetExperimentTypesOperationResult;
const ExperimentSearchCriteriaDto: ExperimentSearchCriteria = V3API.ExperimentSearchCriteria;
const SearchExperimentTypesOperationResultDto: SearchExperimentTypesOperationResult = V3API.SearchExperimentTypesOperationResult;
const SearchExperimentsOperationDto: SearchExperimentsOperation = V3API.SearchExperimentsOperation;
const SearchExperimentsOperationResultDto: SearchExperimentsOperationResult = V3API.SearchExperimentsOperationResult;
const SearchExperimentTypesOperationDto: SearchExperimentTypesOperation = V3API.SearchExperimentTypesOperation;
const ExperimentTypeSearchCriteriaDto: ExperimentTypeSearchCriteria = V3API.ExperimentTypeSearchCriteria;
const NoExperimentSearchCriteriaDto: NoExperimentSearchCriteria = V3API.NoExperimentSearchCriteria;
const ExperimentDto: Experiment = V3API.Experiment;
const CreateExperimentTypesOperationDto: CreateExperimentTypesOperation = V3API.CreateExperimentTypesOperation;
const CreateExperimentTypesOperationResultDto: CreateExperimentTypesOperationResult = V3API.CreateExperimentTypesOperationResult;
const ExperimentCreationDto: ExperimentCreation = V3API.ExperimentCreation;
const CreateExperimentsOperationResultDto: CreateExperimentsOperationResult = V3API.CreateExperimentsOperationResult;
const CreateExperimentsOperationDto: CreateExperimentsOperation = V3API.CreateExperimentsOperation;
const ExperimentTypeCreationDto: ExperimentTypeCreation = V3API.ExperimentTypeCreation;
const ExperimentRelationTypeDto: ExperimentRelationType = V3API.ExperimentRelationType;
const DeleteSampleTypesOperationDto: DeleteSampleTypesOperation = V3API.DeleteSampleTypesOperation;
const DeleteSamplesOperationDto: DeleteSamplesOperation = V3API.DeleteSamplesOperation;
const DeleteSampleTypesOperationResultDto: DeleteSampleTypesOperationResult = V3API.DeleteSampleTypesOperationResult;
const SampleTypeDeletionOptionsDto: SampleTypeDeletionOptions = V3API.SampleTypeDeletionOptions;
const DeleteSamplesOperationResultDto: DeleteSamplesOperationResult = V3API.DeleteSamplesOperationResult;
const SampleDeletionOptionsDto: SampleDeletionOptions = V3API.SampleDeletionOptions;
const SampleFetchOptionsDto: SampleFetchOptions = V3API.SampleFetchOptions;
const SampleTypeFetchOptionsDto: SampleTypeFetchOptions = V3API.SampleTypeFetchOptions;
const SampleTypeSortOptionsDto: SampleTypeSortOptions = V3API.SampleTypeSortOptions;
const SampleSortOptionsDto: SampleSortOptions = V3API.SampleSortOptions;
const UpdateSampleTypesOperationDto: UpdateSampleTypesOperation = V3API.UpdateSampleTypesOperation;
const UpdateSamplesOperationResultDto: UpdateSamplesOperationResult = V3API.UpdateSamplesOperationResult;
const UpdateSamplesOperationDto: UpdateSamplesOperation = V3API.UpdateSamplesOperation;
const SampleTypeUpdateDto: SampleTypeUpdate = V3API.SampleTypeUpdate;
const SampleUpdateDto: SampleUpdate = V3API.SampleUpdate;
const UpdateSampleTypesOperationResultDto: UpdateSampleTypesOperationResult = V3API.UpdateSampleTypesOperationResult;
const SampleIdentifierDto: SampleIdentifier = V3API.SampleIdentifier;
const ISampleIdDto: ISampleId = V3API.ISampleId;
const SamplePermIdDto: SamplePermId = V3API.SamplePermId;
const GetSampleTypesOperationResultDto: GetSampleTypesOperationResult = V3API.GetSampleTypesOperationResult;
const GetSamplesOperationDto: GetSamplesOperation = V3API.GetSamplesOperation;
const GetSamplesOperationResultDto: GetSamplesOperationResult = V3API.GetSamplesOperationResult;
const GetSampleTypesOperationDto: GetSampleTypesOperation = V3API.GetSampleTypesOperation;
const SearchSamplesOperationDto: SearchSamplesOperation = V3API.SearchSamplesOperation;
const ListableSampleTypeSearchCriteriaDto: ListableSampleTypeSearchCriteria = V3API.ListableSampleTypeSearchCriteria;
const SampleSearchCriteriaDto: SampleSearchCriteria = V3API.SampleSearchCriteria;
const NoSampleContainerSearchCriteriaDto: NoSampleContainerSearchCriteria = V3API.NoSampleContainerSearchCriteria;
const SearchSamplesOperationResultDto: SearchSamplesOperationResult = V3API.SearchSamplesOperationResult;
const NoSampleSearchCriteriaDto: NoSampleSearchCriteria = V3API.NoSampleSearchCriteria;
const SampleSearchRelationDto: SampleSearchRelation = V3API.SampleSearchRelation;
const SearchSampleTypesOperationResultDto: SearchSampleTypesOperationResult = V3API.SearchSampleTypesOperationResult;
const SearchSampleTypesOperationDto: SearchSampleTypesOperation = V3API.SearchSampleTypesOperation;
const SampleTypeSearchCriteriaDto: SampleTypeSearchCriteria = V3API.SampleTypeSearchCriteria;
const SampleTypeDto: SampleType = V3API.SampleType;
const SampleTypeCreationDto: SampleTypeCreation = V3API.SampleTypeCreation;
const CreateSampleTypesOperationDto: CreateSampleTypesOperation = V3API.CreateSampleTypesOperation;
const CreateSamplesOperationDto: CreateSamplesOperation = V3API.CreateSamplesOperation;
const SampleCreationDto: SampleCreation = V3API.SampleCreation;
const CreateSampleTypesOperationResultDto: CreateSampleTypesOperationResult = V3API.CreateSampleTypesOperationResult;
const CreateSamplesOperationResultDto: CreateSamplesOperationResult = V3API.CreateSamplesOperationResult;
const SampleRelationTypeDto: SampleRelationType = V3API.SampleRelationType;
const SampleDto: Sample = V3API.Sample;
const PersonDeletionOptionsDto: PersonDeletionOptions = V3API.PersonDeletionOptions;
const DeletePersonsOperationResultDto: DeletePersonsOperationResult = V3API.DeletePersonsOperationResult;
const DeletePersonsOperationDto: DeletePersonsOperation = V3API.DeletePersonsOperation;
const PersonSortOptionsDto: PersonSortOptions = V3API.PersonSortOptions;
const PersonFetchOptionsDto: PersonFetchOptions = V3API.PersonFetchOptions;
const UpdatePersonsOperationDto: UpdatePersonsOperation = V3API.UpdatePersonsOperation;
const PersonUpdateDto: PersonUpdate = V3API.PersonUpdate;
const UpdatePersonsOperationResultDto: UpdatePersonsOperationResult = V3API.UpdatePersonsOperationResult;
const MeDto: Me = V3API.Me;
const PersonPermIdDto: PersonPermId = V3API.PersonPermId;
const IPersonIdDto: IPersonId = V3API.IPersonId;
const GetPersonsOperationDto: GetPersonsOperation = V3API.GetPersonsOperation;
const GetPersonsOperationResultDto: GetPersonsOperationResult = V3API.GetPersonsOperationResult;
const SearchPersonsOperationResultDto: SearchPersonsOperationResult = V3API.SearchPersonsOperationResult;
const SearchPersonsOperationDto: SearchPersonsOperation = V3API.SearchPersonsOperation;
const RegistratorSearchCriteriaDto: RegistratorSearchCriteria = V3API.RegistratorSearchCriteria;
const LastNameSearchCriteriaDto: LastNameSearchCriteria = V3API.LastNameSearchCriteria;
const PersonSearchCriteriaDto: PersonSearchCriteria = V3API.PersonSearchCriteria;
const EmailSearchCriteriaDto: EmailSearchCriteria = V3API.EmailSearchCriteria;
const UserIdSearchCriteriaDto: UserIdSearchCriteria = V3API.UserIdSearchCriteria;
const UserIdsSearchCriteriaDto: UserIdsSearchCriteria = V3API.UserIdsSearchCriteria;
const FirstNameSearchCriteriaDto: FirstNameSearchCriteria = V3API.FirstNameSearchCriteria;
const ModifierSearchCriteriaDto: ModifierSearchCriteria = V3API.ModifierSearchCriteria;
const PersonDto: Person = V3API.Person;
const PersonCreationDto: PersonCreation = V3API.PersonCreation;
const CreatePersonsOperationDto: CreatePersonsOperation = V3API.CreatePersonsOperation;
const CreatePersonsOperationResultDto: CreatePersonsOperationResult = V3API.CreatePersonsOperationResult;
const DeleteSemanticAnnotationsOperationResultDto: DeleteSemanticAnnotationsOperationResult = V3API.DeleteSemanticAnnotationsOperationResult;
const DeleteSemanticAnnotationsOperationDto: DeleteSemanticAnnotationsOperation = V3API.DeleteSemanticAnnotationsOperation;
const SemanticAnnotationDeletionOptionsDto: SemanticAnnotationDeletionOptions = V3API.SemanticAnnotationDeletionOptions;
const SemanticAnnotationDto: SemanticAnnotation = V3API.SemanticAnnotation;
const SemanticAnnotationSortOptionsDto: SemanticAnnotationSortOptions = V3API.SemanticAnnotationSortOptions;
const SemanticAnnotationFetchOptionsDto: SemanticAnnotationFetchOptions = V3API.SemanticAnnotationFetchOptions;
const UpdateSemanticAnnotationsOperationResultDto: UpdateSemanticAnnotationsOperationResult = V3API.UpdateSemanticAnnotationsOperationResult;
const UpdateSemanticAnnotationsOperationDto: UpdateSemanticAnnotationsOperation = V3API.UpdateSemanticAnnotationsOperation;
const SemanticAnnotationUpdateDto: SemanticAnnotationUpdate = V3API.SemanticAnnotationUpdate;
const ISemanticAnnotationIdDto: ISemanticAnnotationId = V3API.ISemanticAnnotationId;
const SemanticAnnotationPermIdDto: SemanticAnnotationPermId = V3API.SemanticAnnotationPermId;
const GetSemanticAnnotationsOperationDto: GetSemanticAnnotationsOperation = V3API.GetSemanticAnnotationsOperation;
const GetSemanticAnnotationsOperationResultDto: GetSemanticAnnotationsOperationResult = V3API.GetSemanticAnnotationsOperationResult;
const DescriptorAccessionIdSearchCriteriaDto: DescriptorAccessionIdSearchCriteria = V3API.DescriptorAccessionIdSearchCriteria;
const SearchSemanticAnnotationsOperationResultDto: SearchSemanticAnnotationsOperationResult = V3API.SearchSemanticAnnotationsOperationResult;
const SearchSemanticAnnotationsOperationDto: SearchSemanticAnnotationsOperation = V3API.SearchSemanticAnnotationsOperation;
const PredicateOntologyVersionSearchCriteriaDto: PredicateOntologyVersionSearchCriteria = V3API.PredicateOntologyVersionSearchCriteria;
const DescriptorOntologyVersionSearchCriteriaDto: DescriptorOntologyVersionSearchCriteria = V3API.DescriptorOntologyVersionSearchCriteria;
const SemanticAnnotationSearchCriteriaDto: SemanticAnnotationSearchCriteria = V3API.SemanticAnnotationSearchCriteria;
const PredicateOntologyIdSearchCriteriaDto: PredicateOntologyIdSearchCriteria = V3API.PredicateOntologyIdSearchCriteria;
const PredicateAccessionIdSearchCriteriaDto: PredicateAccessionIdSearchCriteria = V3API.PredicateAccessionIdSearchCriteria;
const DescriptorOntologyIdSearchCriteriaDto: DescriptorOntologyIdSearchCriteria = V3API.DescriptorOntologyIdSearchCriteria;
const CreateSemanticAnnotationsOperationDto: CreateSemanticAnnotationsOperation = V3API.CreateSemanticAnnotationsOperation;
const SemanticAnnotationCreationDto: SemanticAnnotationCreation = V3API.SemanticAnnotationCreation;
const CreateSemanticAnnotationsOperationResultDto: CreateSemanticAnnotationsOperationResult = V3API.CreateSemanticAnnotationsOperationResult;
const TableStringCellDto: TableStringCell = V3API.TableStringCell;
const DeleteObjectsWithoutTrashOperationResultDto: DeleteObjectsWithoutTrashOperationResult = V3API.DeleteObjectsWithoutTrashOperationResult;
const DeleteObjectsWithTrashOperationResultDto: DeleteObjectsWithTrashOperationResult = V3API.DeleteObjectsWithTrashOperationResult;
const DeleteObjectsOperationDto: DeleteObjectsOperation = V3API.DeleteObjectsOperation;
const DeleteObjectsOperationResultDto: DeleteObjectsOperationResult = V3API.DeleteObjectsOperationResult;
const FetchOptionsDto: FetchOptions = V3API.FetchOptions;
const EntitySortOptionsDto: EntitySortOptions = V3API.EntitySortOptions;
const SortParameterDto: SortParameter = V3API.SortParameter;
const SortingDto: Sorting = V3API.Sorting;
const EntityWithPropertiesSortOptionsDto: EntityWithPropertiesSortOptions = V3API.EntityWithPropertiesSortOptions;
const SortOptionsDto: SortOptions = V3API.SortOptions;
const CacheModeDto: CacheMode = V3API.CacheMode;
const EmptyFetchOptionsDto: EmptyFetchOptions = V3API.EmptyFetchOptions;
const SortOrderDto: SortOrder = V3API.SortOrder;
const TableColumnDto: TableColumn = V3API.TableColumn;
const IdListUpdateValueDto: IdListUpdateValue = V3API.IdListUpdateValue;
const ListUpdateMapValuesDto: ListUpdateMapValues = V3API.ListUpdateMapValues;
const ListUpdateActionDto: ListUpdateAction = V3API.ListUpdateAction;
const RelationshipUpdateDto: RelationshipUpdate = V3API.RelationshipUpdate;
const ListUpdateActionAddDto: ListUpdateActionAdd = V3API.ListUpdateActionAdd;
const IUpdateDto: IUpdate = V3API.IUpdate;
const IObjectUpdateDto: IObjectUpdate = V3API.IObjectUpdate;
const ListUpdateActionRemoveDto: ListUpdateActionRemove = V3API.ListUpdateActionRemove;
const ListUpdateActionSetDto: ListUpdateActionSet = V3API.ListUpdateActionSet;
const UpdateObjectsOperationResultDto: UpdateObjectsOperationResult = V3API.UpdateObjectsOperationResult;
const ListUpdateValueDto: ListUpdateValue = V3API.ListUpdateValue;
const UpdateObjectsOperationDto: UpdateObjectsOperation = V3API.UpdateObjectsOperation;
const FieldUpdateValueDto: FieldUpdateValue = V3API.FieldUpdateValue;
const ObjectTechIdDto: ObjectTechId = V3API.ObjectTechId;
const IObjectIdDto: IObjectId = V3API.IObjectId;
const ObjectPermIdDto: ObjectPermId = V3API.ObjectPermId;
const ObjectIdentifierDto: ObjectIdentifier = V3API.ObjectIdentifier;
const CreationIdDto: CreationId = V3API.CreationId;
const TableModelDto: TableModel = V3API.TableModel;
const GetServerPublicInformationOperationDto: GetServerPublicInformationOperation = V3API.GetServerPublicInformationOperation;
const GetObjectsOperationResultDto: GetObjectsOperationResult = V3API.GetObjectsOperationResult;
const GetServerInformationOperationResultDto: GetServerInformationOperationResult = V3API.GetServerInformationOperationResult;
const GetObjectsOperationDto: GetObjectsOperation = V3API.GetObjectsOperation;
const GetServerPublicInformationOperationResultDto: GetServerPublicInformationOperationResult = V3API.GetServerPublicInformationOperationResult;
const GetServerInformationOperationDto: GetServerInformationOperation = V3API.GetServerInformationOperation;
const RelationshipDto: Relationship = V3API.Relationship;
const ITableCellDto: ITableCell = V3API.ITableCell;
const ShortDateFormatDto: ShortDateFormat = V3API.ShortDateFormat;
const AnyBooleanPropertySearchCriteriaDto: AnyBooleanPropertySearchCriteria = V3API.AnyBooleanPropertySearchCriteria;
const SearchFieldTypeDto: SearchFieldType = V3API.SearchFieldType;
const CodesSearchCriteriaDto: CodesSearchCriteria = V3API.CodesSearchCriteria;
const BooleanPropertySearchCriteriaDto: BooleanPropertySearchCriteria = V3API.BooleanPropertySearchCriteria;
const DateLaterThanValueDto: DateLaterThanValue = V3API.DateLaterThanValue;
const AnyDatePropertySearchCriteriaDto: AnyDatePropertySearchCriteria = V3API.AnyDatePropertySearchCriteria;
const StringLessThanOrEqualToValueDto: StringLessThanOrEqualToValue = V3API.StringLessThanOrEqualToValue;
const DateObjectEarlierThanOrEqualToValueDto: DateObjectEarlierThanOrEqualToValue = V3API.DateObjectEarlierThanOrEqualToValue;
const NumberEqualToValueDto: NumberEqualToValue = V3API.NumberEqualToValue;
const ControlledVocabularyPropertySearchCriteriaDto: ControlledVocabularyPropertySearchCriteria = V3API.ControlledVocabularyPropertySearchCriteria;
const AnyPropertySearchCriteriaDto: AnyPropertySearchCriteria = V3API.AnyPropertySearchCriteria;
const StrictlyStringPropertySearchCriteriaDto: StrictlyStringPropertySearchCriteria = V3API.StrictlyStringPropertySearchCriteria;
const IDateDto: IDate = V3API.IDate;
const ModificationDateSearchCriteriaDto: ModificationDateSearchCriteria = V3API.ModificationDateSearchCriteria;
const DateObjectEarlierThanValueDto: DateObjectEarlierThanValue = V3API.DateObjectEarlierThanValue;
const AbstractNumberValueDto: AbstractNumberValue = V3API.AbstractNumberValue;
const DateObjectEqualToValueDto: DateObjectEqualToValue = V3API.DateObjectEqualToValue;
const DescriptionSearchCriteriaDto: DescriptionSearchCriteria = V3API.DescriptionSearchCriteria;
const CollectionFieldSearchCriteriaDto: CollectionFieldSearchCriteria = V3API.CollectionFieldSearchCriteria;
const AnyNumberPropertySearchCriteriaDto: AnyNumberPropertySearchCriteria = V3API.AnyNumberPropertySearchCriteria;
const TextAttributeSearchCriteriaDto: TextAttributeSearchCriteria = V3API.TextAttributeSearchCriteria;
const DateLaterThanOrEqualToValueDto: DateLaterThanOrEqualToValue = V3API.DateLaterThanOrEqualToValue;
const NumberLessThanValueDto: NumberLessThanValue = V3API.NumberLessThanValue;
const SamplePropertySearchCriteriaDto: SamplePropertySearchCriteria = V3API.SamplePropertySearchCriteria;
const StringGreaterThanOrEqualToValueDto: StringGreaterThanOrEqualToValue = V3API.StringGreaterThanOrEqualToValue;
const AnyStringValueDto: AnyStringValue = V3API.AnyStringValue;
const AbstractObjectSearchCriteriaDto: AbstractObjectSearchCriteria = V3API.AbstractObjectSearchCriteria;
const DateObjectLaterThanOrEqualToValueDto: DateObjectLaterThanOrEqualToValue = V3API.DateObjectLaterThanOrEqualToValue;
const RegistrationDateSearchCriteriaDto: RegistrationDateSearchCriteria = V3API.RegistrationDateSearchCriteria;
const AbstractStringValueDto: AbstractStringValue = V3API.AbstractStringValue;
const StringMatchesValueDto: StringMatchesValue = V3API.StringMatchesValue;
const StringEqualToValueDto: StringEqualToValue = V3API.StringEqualToValue;
const IdentifierSearchCriteriaDto: IdentifierSearchCriteria = V3API.IdentifierSearchCriteria;
const TechIdSearchCriteriaDto: TechIdSearchCriteria = V3API.TechIdSearchCriteria;
const AbstractValueDto: AbstractValue = V3API.AbstractValue;
const SearchObjectsOperationDto: SearchObjectsOperation = V3API.SearchObjectsOperation;
const AnyFieldSearchCriteriaDto: AnyFieldSearchCriteria = V3API.AnyFieldSearchCriteria;
const SearchOperatorDto: SearchOperator = V3API.SearchOperator;
const TimeZoneDto: TimeZone = V3API.TimeZone;
const NumberGreaterThanOrEqualToValueDto: NumberGreaterThanOrEqualToValue = V3API.NumberGreaterThanOrEqualToValue;
const ISearchCriteriaDto: ISearchCriteria = V3API.ISearchCriteria;
const LongDateFormatDto: LongDateFormat = V3API.LongDateFormat;
const CodeSearchCriteriaDto: CodeSearchCriteria = V3API.CodeSearchCriteria;
const AbstractDateValueDto: AbstractDateValue = V3API.AbstractDateValue;
const StringContainsExactlyValueDto: StringContainsExactlyValue = V3API.StringContainsExactlyValue;
const NumberLessThanOrEqualToValueDto: NumberLessThanOrEqualToValue = V3API.NumberLessThanOrEqualToValue;
const PermIdSearchCriteriaDto: PermIdSearchCriteria = V3API.PermIdSearchCriteria;
const EnumFieldSearchCriteriaDto: EnumFieldSearchCriteria = V3API.EnumFieldSearchCriteria;
const DatePropertySearchCriteriaDto: DatePropertySearchCriteria = V3API.DatePropertySearchCriteria;
const ITimeZoneDto: ITimeZone = V3API.ITimeZone;
const StringStartsWithValueDto: StringStartsWithValue = V3API.StringStartsWithValue;
const DateEarlierThanOrEqualToValueDto: DateEarlierThanOrEqualToValue = V3API.DateEarlierThanOrEqualToValue;
const SearchObjectsOperationResultDto: SearchObjectsOperationResult = V3API.SearchObjectsOperationResult;
const StringFieldSearchCriteriaDto: StringFieldSearchCriteria = V3API.StringFieldSearchCriteria;
const StringPropertySearchCriteriaDto: StringPropertySearchCriteria = V3API.StringPropertySearchCriteria;
const BooleanFieldSearchCriteriaDto: BooleanFieldSearchCriteria = V3API.BooleanFieldSearchCriteria;
const IdSearchCriteriaDto: IdSearchCriteria = V3API.IdSearchCriteria;
const AbstractEntitySearchCriteriaDto: AbstractEntitySearchCriteria = V3API.AbstractEntitySearchCriteria;
const NumberGreaterThanValueDto: NumberGreaterThanValue = V3API.NumberGreaterThanValue;
const AnyStringPropertySearchCriteriaDto: AnyStringPropertySearchCriteria = V3API.AnyStringPropertySearchCriteria;
const AbstractSearchCriteriaDto: AbstractSearchCriteria = V3API.AbstractSearchCriteria;
const AbstractTimeZoneValueDto: AbstractTimeZoneValue = V3API.AbstractTimeZoneValue;
const StringEndsWithValueDto: StringEndsWithValue = V3API.StringEndsWithValue;
const DateObjectLaterThanValueDto: DateObjectLaterThanValue = V3API.DateObjectLaterThanValue;
const AbstractCompositeSearchCriteriaDto: AbstractCompositeSearchCriteria = V3API.AbstractCompositeSearchCriteria;
const NameSearchCriteriaDto: NameSearchCriteria = V3API.NameSearchCriteria;
const IdsSearchCriteriaDto: IdsSearchCriteria = V3API.IdsSearchCriteria;
const SearchResultDto: SearchResult = V3API.SearchResult;
const DateEqualToValueDto: DateEqualToValue = V3API.DateEqualToValue;
const AbstractDateObjectValueDto: AbstractDateObjectValue = V3API.AbstractDateObjectValue;
const StringContainsValueDto: StringContainsValue = V3API.StringContainsValue;
const DateFieldSearchCriteriaDto: DateFieldSearchCriteria = V3API.DateFieldSearchCriteria;
const IDateFormatDto: IDateFormat = V3API.IDateFormat;
const ServerTimeZoneDto: ServerTimeZone = V3API.ServerTimeZone;
const StringLessThanValueDto: StringLessThanValue = V3API.StringLessThanValue;
const StringGreaterThanValueDto: StringGreaterThanValue = V3API.StringGreaterThanValue;
const DateEarlierThanValueDto: DateEarlierThanValue = V3API.DateEarlierThanValue;
const NumberFieldSearchCriteriaDto: NumberFieldSearchCriteria = V3API.NumberFieldSearchCriteria;
const AbstractFieldSearchCriteriaDto: AbstractFieldSearchCriteria = V3API.AbstractFieldSearchCriteria;
const NumberPropertySearchCriteriaDto: NumberPropertySearchCriteria = V3API.NumberPropertySearchCriteria;
const NormalDateFormatDto: NormalDateFormat = V3API.NormalDateFormat;
const TableLongCellDto: TableLongCell = V3API.TableLongCell;
const EnumDto: Enum = V3API.Enum;
const TableDoubleCellDto: TableDoubleCell = V3API.TableDoubleCell;
const ISemanticAnnotationsHolderDto: ISemanticAnnotationsHolder = V3API.ISemanticAnnotationsHolder;
const SortIgnoreDto: SortIgnore = V3API.SortIgnore;
const IMaterialPropertiesHolderDto: IMaterialPropertiesHolder = V3API.IMaterialPropertiesHolder;
const INameHolderDto: INameHolder = V3API.INameHolder;
const ISampleHolderDto: ISampleHolder = V3API.ISampleHolder;
const IMetaDataUpdateHolderDto: IMetaDataUpdateHolder = V3API.IMetaDataUpdateHolder;
const IValidationPluginHolderDto: IValidationPluginHolder = V3API.IValidationPluginHolder;
const IParentChildrenHolderDto: IParentChildrenHolder = V3API.IParentChildrenHolder;
const IRegistratorHolderDto: IRegistratorHolder = V3API.IRegistratorHolder;
const IModifierHolderDto: IModifierHolder = V3API.IModifierHolder;
const IDataSetsHolderDto: IDataSetsHolder = V3API.IDataSetsHolder;
const IIdentifierHolderDto: IIdentifierHolder = V3API.IIdentifierHolder;
const IProjectsHolderDto: IProjectsHolder = V3API.IProjectsHolder;
const ISamplesHolderDto: ISamplesHolder = V3API.ISamplesHolder;
const IAttachmentsHolderDto: IAttachmentsHolder = V3API.IAttachmentsHolder;
const ICodeHolderDto: ICodeHolder = V3API.ICodeHolder;
const IMaterialsHolderDto: IMaterialsHolder = V3API.IMaterialsHolder;
const IPropertyTypeHolderDto: IPropertyTypeHolder = V3API.IPropertyTypeHolder;
const IPropertiesHolderDto: IPropertiesHolder = V3API.IPropertiesHolder;
const IOwnerHolderDto: IOwnerHolder = V3API.IOwnerHolder;
const IExperimentsHolderDto: IExperimentsHolder = V3API.IExperimentsHolder;
const IDescriptionHolderDto: IDescriptionHolder = V3API.IDescriptionHolder;
const IDataSetCodesHolderDto: IDataSetCodesHolder = V3API.IDataSetCodesHolder;
const ITagsHolderDto: ITagsHolder = V3API.ITagsHolder;
const IRegistrationDateHolderDto: IRegistrationDateHolder = V3API.IRegistrationDateHolder;
const ILabelHolderDto: ILabelHolder = V3API.ILabelHolder;
const IPermIdHolderDto: IPermIdHolder = V3API.IPermIdHolder;
const ISpaceHolderDto: ISpaceHolder = V3API.ISpaceHolder;
const IPropertyAssignmentsHolderDto: IPropertyAssignmentsHolder = V3API.IPropertyAssignmentsHolder;
const IEntityTypeHolderDto: IEntityTypeHolder = V3API.IEntityTypeHolder;
const IProjectHolderDto: IProjectHolder = V3API.IProjectHolder;
const IExperimentHolderDto: IExperimentHolder = V3API.IExperimentHolder;
const IModificationDateHolderDto: IModificationDateHolder = V3API.IModificationDateHolder;
const IEntityTypeDto: IEntityType = V3API.IEntityType;
const ICreationIdHolderDto: ICreationIdHolder = V3API.ICreationIdHolder;
const ICreationDto: ICreation = V3API.ICreation;
const IObjectCreationDto: IObjectCreation = V3API.IObjectCreation;
const CreateObjectsOperationDto: CreateObjectsOperation = V3API.CreateObjectsOperation;
const CreateObjectsOperationResultDto: CreateObjectsOperationResult = V3API.CreateObjectsOperationResult;
const IOperationDto: IOperation = V3API.IOperation;
const IOperationResultDto: IOperationResult = V3API.IOperationResult;
const IOperationExecutionErrorDto: IOperationExecutionError = V3API.IOperationExecutionError;
const IOperationExecutionProgressDto: IOperationExecutionProgress = V3API.IOperationExecutionProgress;
const AbstractObjectDeletionOptionsDto: AbstractObjectDeletionOptions = V3API.AbstractObjectDeletionOptions;
const DeletedObjectFetchOptionsDto: DeletedObjectFetchOptions = V3API.DeletedObjectFetchOptions;
const DeletionFetchOptionsDto: DeletionFetchOptions = V3API.DeletionFetchOptions;
const DeletionSortOptionsDto: DeletionSortOptions = V3API.DeletionSortOptions;
const DeletionTechIdDto: DeletionTechId = V3API.DeletionTechId;
const IDeletionIdDto: IDeletionId = V3API.IDeletionId;
const SearchDeletionsOperationResultDto: SearchDeletionsOperationResult = V3API.SearchDeletionsOperationResult;
const DeletionSearchCriteriaDto: DeletionSearchCriteria = V3API.DeletionSearchCriteria;
const SearchDeletionsOperationDto: SearchDeletionsOperation = V3API.SearchDeletionsOperation;
const DeletionDto: Deletion = V3API.Deletion;
const DeletedObjectDto: DeletedObject = V3API.DeletedObject;
const ConfirmDeletionsOperationDto: ConfirmDeletionsOperation = V3API.ConfirmDeletionsOperation;
const ConfirmDeletionsOperationResultDto: ConfirmDeletionsOperationResult = V3API.ConfirmDeletionsOperationResult;
const RevertDeletionsOperationResultDto: RevertDeletionsOperationResult = V3API.RevertDeletionsOperationResult;
const RevertDeletionsOperationDto: RevertDeletionsOperation = V3API.RevertDeletionsOperation;
const QueryDatabaseDto: QueryDatabase = V3API.QueryDatabase;
const QueryDeletionOptionsDto: QueryDeletionOptions = V3API.QueryDeletionOptions;
const DeleteQueriesOperationDto: DeleteQueriesOperation = V3API.DeleteQueriesOperation;
const DeleteQueriesOperationResultDto: DeleteQueriesOperationResult = V3API.DeleteQueriesOperationResult;
const QuerySortOptionsDto: QuerySortOptions = V3API.QuerySortOptions;
const QueryDatabaseSortOptionsDto: QueryDatabaseSortOptions = V3API.QueryDatabaseSortOptions;
const QueryFetchOptionsDto: QueryFetchOptions = V3API.QueryFetchOptions;
const QueryDatabaseFetchOptionsDto: QueryDatabaseFetchOptions = V3API.QueryDatabaseFetchOptions;
const UpdateQueriesOperationResultDto: UpdateQueriesOperationResult = V3API.UpdateQueriesOperationResult;
const QueryUpdateDto: QueryUpdate = V3API.QueryUpdate;
const UpdateQueriesOperationDto: UpdateQueriesOperation = V3API.UpdateQueriesOperation;
const IQueryDatabaseIdDto: IQueryDatabaseId = V3API.IQueryDatabaseId;
const QueryDatabaseNameDto: QueryDatabaseName = V3API.QueryDatabaseName;
const QueryNameDto: QueryName = V3API.QueryName;
const IQueryIdDto: IQueryId = V3API.IQueryId;
const QueryTechIdDto: QueryTechId = V3API.QueryTechId;
const GetQueryDatabasesOperationResultDto: GetQueryDatabasesOperationResult = V3API.GetQueryDatabasesOperationResult;
const GetQueriesOperationResultDto: GetQueriesOperationResult = V3API.GetQueriesOperationResult;
const GetQueryDatabasesOperationDto: GetQueryDatabasesOperation = V3API.GetQueryDatabasesOperation;
const GetQueriesOperationDto: GetQueriesOperation = V3API.GetQueriesOperation;
const QueryTypeSearchCriteriaDto: QueryTypeSearchCriteria = V3API.QueryTypeSearchCriteria;
const SqlSearchCriteriaDto: SqlSearchCriteria = V3API.SqlSearchCriteria;
const DatabaseIdSearchCriteriaDto: DatabaseIdSearchCriteria = V3API.DatabaseIdSearchCriteria;
const EntityTypeCodePatternSearchCriteriaDto: EntityTypeCodePatternSearchCriteria = V3API.EntityTypeCodePatternSearchCriteria;
const SearchQueryDatabasesOperationResultDto: SearchQueryDatabasesOperationResult = V3API.SearchQueryDatabasesOperationResult;
const SearchQueryDatabasesOperationDto: SearchQueryDatabasesOperation = V3API.SearchQueryDatabasesOperation;
const SearchQueriesOperationDto: SearchQueriesOperation = V3API.SearchQueriesOperation;
const QuerySearchCriteriaDto: QuerySearchCriteria = V3API.QuerySearchCriteria;
const QueryDatabaseSearchCriteriaDto: QueryDatabaseSearchCriteria = V3API.QueryDatabaseSearchCriteria;
const SearchQueriesOperationResultDto: SearchQueriesOperationResult = V3API.SearchQueriesOperationResult;
const QueryDto: Query = V3API.Query;
const CreateQueriesOperationResultDto: CreateQueriesOperationResult = V3API.CreateQueriesOperationResult;
const QueryCreationDto: QueryCreation = V3API.QueryCreation;
const CreateQueriesOperationDto: CreateQueriesOperation = V3API.CreateQueriesOperation;
const SqlExecutionOptionsDto: SqlExecutionOptions = V3API.SqlExecutionOptions;
const ExecuteSqlOperationResultDto: ExecuteSqlOperationResult = V3API.ExecuteSqlOperationResult;
const ExecuteQueryOperationDto: ExecuteQueryOperation = V3API.ExecuteQueryOperation;
const QueryExecutionOptionsDto: QueryExecutionOptions = V3API.QueryExecutionOptions;
const ExecuteSqlOperationDto: ExecuteSqlOperation = V3API.ExecuteSqlOperation;
const ExecuteQueryOperationResultDto: ExecuteQueryOperationResult = V3API.ExecuteQueryOperationResult;
const QueryTypeDto: QueryType = V3API.QueryType;
const DeleteAuthorizationGroupsOperationResultDto: DeleteAuthorizationGroupsOperationResult = V3API.DeleteAuthorizationGroupsOperationResult;
const AuthorizationGroupDeletionOptionsDto: AuthorizationGroupDeletionOptions = V3API.AuthorizationGroupDeletionOptions;
const DeleteAuthorizationGroupsOperationDto: DeleteAuthorizationGroupsOperation = V3API.DeleteAuthorizationGroupsOperation;
const AuthorizationGroupSortOptionsDto: AuthorizationGroupSortOptions = V3API.AuthorizationGroupSortOptions;
const AuthorizationGroupFetchOptionsDto: AuthorizationGroupFetchOptions = V3API.AuthorizationGroupFetchOptions;
const UpdateAuthorizationGroupsOperationDto: UpdateAuthorizationGroupsOperation = V3API.UpdateAuthorizationGroupsOperation;
const UpdateAuthorizationGroupsOperationResultDto: UpdateAuthorizationGroupsOperationResult = V3API.UpdateAuthorizationGroupsOperationResult;
const AuthorizationGroupUpdateDto: AuthorizationGroupUpdate = V3API.AuthorizationGroupUpdate;
const AuthorizationGroupPermIdDto: AuthorizationGroupPermId = V3API.AuthorizationGroupPermId;
const IAuthorizationGroupIdDto: IAuthorizationGroupId = V3API.IAuthorizationGroupId;
const GetAuthorizationGroupsOperationResultDto: GetAuthorizationGroupsOperationResult = V3API.GetAuthorizationGroupsOperationResult;
const GetAuthorizationGroupsOperationDto: GetAuthorizationGroupsOperation = V3API.GetAuthorizationGroupsOperation;
const AuthorizationGroupSearchCriteriaDto: AuthorizationGroupSearchCriteria = V3API.AuthorizationGroupSearchCriteria;
const SearchAuthorizationGroupsOperationDto: SearchAuthorizationGroupsOperation = V3API.SearchAuthorizationGroupsOperation;
const SearchAuthorizationGroupsOperationResultDto: SearchAuthorizationGroupsOperationResult = V3API.SearchAuthorizationGroupsOperationResult;
const AuthorizationGroupDto: AuthorizationGroup = V3API.AuthorizationGroup;
const AuthorizationGroupCreationDto: AuthorizationGroupCreation = V3API.AuthorizationGroupCreation;
const CreateAuthorizationGroupsOperationResultDto: CreateAuthorizationGroupsOperationResult = V3API.CreateAuthorizationGroupsOperationResult;
const CreateAuthorizationGroupsOperationDto: CreateAuthorizationGroupsOperation = V3API.CreateAuthorizationGroupsOperation;
const EntityKindDto: EntityKind = V3API.EntityKind;
const EntityTypeSortOptionsDto: EntityTypeSortOptions = V3API.EntityTypeSortOptions;
const EntityTypeFetchOptionsDto: EntityTypeFetchOptions = V3API.EntityTypeFetchOptions;
const IEntityTypeUpdateDto: IEntityTypeUpdate = V3API.IEntityTypeUpdate;
const PropertyAssignmentListUpdateValueDto: PropertyAssignmentListUpdateValue = V3API.PropertyAssignmentListUpdateValue;
const EntityTypePermIdDto: EntityTypePermId = V3API.EntityTypePermId;
const IEntityTypeIdDto: IEntityTypeId = V3API.IEntityTypeId;
const EntityKindSearchCriteriaDto: EntityKindSearchCriteria = V3API.EntityKindSearchCriteria;
const AbstractEntityTypeSearchCriteriaDto: AbstractEntityTypeSearchCriteria = V3API.AbstractEntityTypeSearchCriteria;
const EntityTypeSearchCriteriaDto: EntityTypeSearchCriteria = V3API.EntityTypeSearchCriteria;
const IEntityTypeCreationDto: IEntityTypeCreation = V3API.IEntityTypeCreation;
const PersonalAccessTokenDeletionOptionsDto: PersonalAccessTokenDeletionOptions = V3API.PersonalAccessTokenDeletionOptions;
const DeletePersonalAccessTokensOperationDto: DeletePersonalAccessTokensOperation = V3API.DeletePersonalAccessTokensOperation;
const DeletePersonalAccessTokensOperationResultDto: DeletePersonalAccessTokensOperationResult = V3API.DeletePersonalAccessTokensOperationResult;
const PersonalAccessTokenFetchOptionsDto: PersonalAccessTokenFetchOptions = V3API.PersonalAccessTokenFetchOptions;
const PersonalAccessTokenSortOptionsDto: PersonalAccessTokenSortOptions = V3API.PersonalAccessTokenSortOptions;
const UpdatePersonalAccessTokensOperationDto: UpdatePersonalAccessTokensOperation = V3API.UpdatePersonalAccessTokensOperation;
const PersonalAccessTokenUpdateDto: PersonalAccessTokenUpdate = V3API.PersonalAccessTokenUpdate;
const UpdatePersonalAccessTokensOperationResultDto: UpdatePersonalAccessTokensOperationResult = V3API.UpdatePersonalAccessTokensOperationResult;
const IPersonalAccessTokenIdDto: IPersonalAccessTokenId = V3API.IPersonalAccessTokenId;
const PersonalAccessTokenPermIdDto: PersonalAccessTokenPermId = V3API.PersonalAccessTokenPermId;
const GetPersonalAccessTokensOperationDto: GetPersonalAccessTokensOperation = V3API.GetPersonalAccessTokensOperation;
const GetPersonalAccessTokensOperationResultDto: GetPersonalAccessTokensOperationResult = V3API.GetPersonalAccessTokensOperationResult;
const PersonalAccessTokenSearchCriteriaDto: PersonalAccessTokenSearchCriteria = V3API.PersonalAccessTokenSearchCriteria;
const PersonalAccessTokenSessionNameSearchCriteriaDto: PersonalAccessTokenSessionNameSearchCriteria = V3API.PersonalAccessTokenSessionNameSearchCriteria;
const PersonalAccessTokenOwnerSearchCriteriaDto: PersonalAccessTokenOwnerSearchCriteria = V3API.PersonalAccessTokenOwnerSearchCriteria;
const SearchPersonalAccessTokensOperationDto: SearchPersonalAccessTokensOperation = V3API.SearchPersonalAccessTokensOperation;
const SearchPersonalAccessTokensOperationResultDto: SearchPersonalAccessTokensOperationResult = V3API.SearchPersonalAccessTokensOperationResult;
const PersonalAccessTokenDto: PersonalAccessToken = V3API.PersonalAccessToken;
const CreatePersonalAccessTokensOperationResultDto: CreatePersonalAccessTokensOperationResult = V3API.CreatePersonalAccessTokensOperationResult;
const PersonalAccessTokenCreationDto: PersonalAccessTokenCreation = V3API.PersonalAccessTokenCreation;
const CreatePersonalAccessTokensOperationDto: CreatePersonalAccessTokensOperation = V3API.CreatePersonalAccessTokensOperation;
const RightDto: Right = V3API.Right;
const RightsFetchOptionsDto: RightsFetchOptions = V3API.RightsFetchOptions;
const GetRightsOperationDto: GetRightsOperation = V3API.GetRightsOperation;
const GetRightsOperationResultDto: GetRightsOperationResult = V3API.GetRightsOperationResult;
const RightsDto: Rights = V3API.Rights;
const EventSortOptionsDto: EventSortOptions = V3API.EventSortOptions;
const EventFetchOptionsDto: EventFetchOptions = V3API.EventFetchOptions;
const EventTechIdDto: EventTechId = V3API.EventTechId;
const IEventIdDto: IEventId = V3API.IEventId;
const EventSearchCriteriaDto: EventSearchCriteria = V3API.EventSearchCriteria;
const EventEntityRegistrationDateSearchCriteriaDto: EventEntityRegistrationDateSearchCriteria = V3API.EventEntityRegistrationDateSearchCriteria;
const EventIdentifierSearchCriteriaDto: EventIdentifierSearchCriteria = V3API.EventIdentifierSearchCriteria;
const SearchEventsOperationDto: SearchEventsOperation = V3API.SearchEventsOperation;
const EventReasonSearchCriteriaDto: EventReasonSearchCriteria = V3API.EventReasonSearchCriteria;
const EventEntitySpaceIdSearchCriteriaDto: EventEntitySpaceIdSearchCriteria = V3API.EventEntitySpaceIdSearchCriteria;
const EventEntitySpaceSearchCriteriaDto: EventEntitySpaceSearchCriteria = V3API.EventEntitySpaceSearchCriteria;
const EventEntityProjectSearchCriteriaDto: EventEntityProjectSearchCriteria = V3API.EventEntityProjectSearchCriteria;
const SearchEventsOperationResultDto: SearchEventsOperationResult = V3API.SearchEventsOperationResult;
const EventEntityTypeSearchCriteriaDto: EventEntityTypeSearchCriteria = V3API.EventEntityTypeSearchCriteria;
const EventTypeSearchCriteriaDto: EventTypeSearchCriteria = V3API.EventTypeSearchCriteria;
const EventDescriptionSearchCriteriaDto: EventDescriptionSearchCriteria = V3API.EventDescriptionSearchCriteria;
const EventEntityRegistratorSearchCriteriaDto: EventEntityRegistratorSearchCriteria = V3API.EventEntityRegistratorSearchCriteria;
const EventEntityProjectIdSearchCriteriaDto: EventEntityProjectIdSearchCriteria = V3API.EventEntityProjectIdSearchCriteria;
const EventDto: Event = V3API.Event;
const EntityTypeDto: EntityType = V3API.EntityType;
const EventTypeDto: EventType = V3API.EventType;
const ObjectKindDto: ObjectKind = V3API.ObjectKind;
const OperationKindDto: OperationKind = V3API.OperationKind;
const ObjectKindModificationFetchOptionsDto: ObjectKindModificationFetchOptions = V3API.ObjectKindModificationFetchOptions;
const ObjectKindModificationSortOptionsDto: ObjectKindModificationSortOptions = V3API.ObjectKindModificationSortOptions;
const SearchObjectKindModificationsOperationDto: SearchObjectKindModificationsOperation = V3API.SearchObjectKindModificationsOperation;
const ObjectKindCriteriaDto: ObjectKindCriteria = V3API.ObjectKindCriteria;
const SearchObjectKindModificationsOperationResultDto: SearchObjectKindModificationsOperationResult = V3API.SearchObjectKindModificationsOperationResult;
const OperationKindCriteriaDto: OperationKindCriteria = V3API.OperationKindCriteria;
const ObjectKindModificationSearchCriteriaDto: ObjectKindModificationSearchCriteria = V3API.ObjectKindModificationSearchCriteria;
const ObjectKindModificationDto: ObjectKindModification = V3API.ObjectKindModification;
const HistoryEntryDto: HistoryEntry = V3API.HistoryEntry;
const HistoryEntrySortOptionsDto: HistoryEntrySortOptions = V3API.HistoryEntrySortOptions;
const HistoryEntryFetchOptionsDto: HistoryEntryFetchOptions = V3API.HistoryEntryFetchOptions;
const UnknownRelatedObjectIdDto: UnknownRelatedObjectId = V3API.UnknownRelatedObjectId;
const IRelationTypeDto: IRelationType = V3API.IRelationType;
const RelationHistoryEntryDto: RelationHistoryEntry = V3API.RelationHistoryEntry;
const ContentCopyHistoryEntryDto: ContentCopyHistoryEntry = V3API.ContentCopyHistoryEntry;
const PropertyHistoryEntryDto: PropertyHistoryEntry = V3API.PropertyHistoryEntry;
const OperationExecutionProgressDto: OperationExecutionProgress = V3API.OperationExecutionProgress;
const SynchronousOperationExecutionOptionsDto: SynchronousOperationExecutionOptions = V3API.SynchronousOperationExecutionOptions;
const OperationExecutionStateDto: OperationExecutionState = V3API.OperationExecutionState;
const SynchronousOperationExecutionResultsDto: SynchronousOperationExecutionResults = V3API.SynchronousOperationExecutionResults;
const DeleteOperationExecutionsOperationResultDto: DeleteOperationExecutionsOperationResult = V3API.DeleteOperationExecutionsOperationResult;
const DeleteOperationExecutionsOperationDto: DeleteOperationExecutionsOperation = V3API.DeleteOperationExecutionsOperation;
const OperationExecutionDeletionOptionsDto: OperationExecutionDeletionOptions = V3API.OperationExecutionDeletionOptions;
const IOperationExecutionResultsDto: IOperationExecutionResults = V3API.IOperationExecutionResults;
const OperationExecutionDetailsSortOptionsDto: OperationExecutionDetailsSortOptions = V3API.OperationExecutionDetailsSortOptions;
const OperationExecutionNotificationFetchOptionsDto: OperationExecutionNotificationFetchOptions = V3API.OperationExecutionNotificationFetchOptions;
const OperationExecutionSummaryFetchOptionsDto: OperationExecutionSummaryFetchOptions = V3API.OperationExecutionSummaryFetchOptions;
const OperationExecutionSummarySortOptionsDto: OperationExecutionSummarySortOptions = V3API.OperationExecutionSummarySortOptions;
const OperationExecutionSortOptionsDto: OperationExecutionSortOptions = V3API.OperationExecutionSortOptions;
const OperationExecutionDetailsFetchOptionsDto: OperationExecutionDetailsFetchOptions = V3API.OperationExecutionDetailsFetchOptions;
const OperationExecutionNotificationSortOptionsDto: OperationExecutionNotificationSortOptions = V3API.OperationExecutionNotificationSortOptions;
const OperationExecutionFetchOptionsDto: OperationExecutionFetchOptions = V3API.OperationExecutionFetchOptions;
const UpdateOperationExecutionsOperationDto: UpdateOperationExecutionsOperation = V3API.UpdateOperationExecutionsOperation;
const UpdateOperationExecutionsOperationResultDto: UpdateOperationExecutionsOperationResult = V3API.UpdateOperationExecutionsOperationResult;
const OperationExecutionUpdateDto: OperationExecutionUpdate = V3API.OperationExecutionUpdate;
const IOperationExecutionNotificationDto: IOperationExecutionNotification = V3API.IOperationExecutionNotification;
const OperationExecutionPermIdDto: OperationExecutionPermId = V3API.OperationExecutionPermId;
const IOperationExecutionIdDto: IOperationExecutionId = V3API.IOperationExecutionId;
const GetOperationExecutionsOperationDto: GetOperationExecutionsOperation = V3API.GetOperationExecutionsOperation;
const GetOperationExecutionsOperationResultDto: GetOperationExecutionsOperationResult = V3API.GetOperationExecutionsOperationResult;
const SearchOperationExecutionsOperationResultDto: SearchOperationExecutionsOperationResult = V3API.SearchOperationExecutionsOperationResult;
const SearchOperationExecutionsOperationDto: SearchOperationExecutionsOperation = V3API.SearchOperationExecutionsOperation;
const OperationExecutionSearchCriteriaDto: OperationExecutionSearchCriteria = V3API.OperationExecutionSearchCriteria;
const OperationExecutionErrorDto: OperationExecutionError = V3API.OperationExecutionError;
const OperationExecutionDto: OperationExecution = V3API.OperationExecution;
const OperationExecutionDetailsDto: OperationExecutionDetails = V3API.OperationExecutionDetails;
const AsynchronousOperationExecutionResultsDto: AsynchronousOperationExecutionResults = V3API.AsynchronousOperationExecutionResults;
const IOperationExecutionOptionsDto: IOperationExecutionOptions = V3API.IOperationExecutionOptions;
const OperationExecutionEmailNotificationDto: OperationExecutionEmailNotification = V3API.OperationExecutionEmailNotification;
const AbstractOperationExecutionOptionsDto: AbstractOperationExecutionOptions = V3API.AbstractOperationExecutionOptions;
const AsynchronousOperationExecutionOptionsDto: AsynchronousOperationExecutionOptions = V3API.AsynchronousOperationExecutionOptions;
const OperationExecutionSummaryDto: OperationExecutionSummary = V3API.OperationExecutionSummary;
const OperationExecutionAvailabilityDto: OperationExecutionAvailability = V3API.OperationExecutionAvailability;
const DeleteRoleAssignmentsOperationDto: DeleteRoleAssignmentsOperation = V3API.DeleteRoleAssignmentsOperation;
const DeleteRoleAssignmentsOperationResultDto: DeleteRoleAssignmentsOperationResult = V3API.DeleteRoleAssignmentsOperationResult;
const RoleAssignmentDeletionOptionsDto: RoleAssignmentDeletionOptions = V3API.RoleAssignmentDeletionOptions;
const RoleLevelDto: RoleLevel = V3API.RoleLevel;
const RoleAssignmentSortOptionsDto: RoleAssignmentSortOptions = V3API.RoleAssignmentSortOptions;
const RoleAssignmentFetchOptionsDto: RoleAssignmentFetchOptions = V3API.RoleAssignmentFetchOptions;
const IRoleAssignmentIdDto: IRoleAssignmentId = V3API.IRoleAssignmentId;
const RoleAssignmentTechIdDto: RoleAssignmentTechId = V3API.RoleAssignmentTechId;
const GetRoleAssignmentsOperationDto: GetRoleAssignmentsOperation = V3API.GetRoleAssignmentsOperation;
const GetRoleAssignmentsOperationResultDto: GetRoleAssignmentsOperationResult = V3API.GetRoleAssignmentsOperationResult;
const RoleAssignmentDto: RoleAssignment = V3API.RoleAssignment;
const SearchRoleAssignmentsOperationDto: SearchRoleAssignmentsOperation = V3API.SearchRoleAssignmentsOperation;
const RoleAssignmentSearchCriteriaDto: RoleAssignmentSearchCriteria = V3API.RoleAssignmentSearchCriteria;
const SearchRoleAssignmentsOperationResultDto: SearchRoleAssignmentsOperationResult = V3API.SearchRoleAssignmentsOperationResult;
const CreateRoleAssignmentsOperationResultDto: CreateRoleAssignmentsOperationResult = V3API.CreateRoleAssignmentsOperationResult;
const CreateRoleAssignmentsOperationDto: CreateRoleAssignmentsOperation = V3API.CreateRoleAssignmentsOperation;
const RoleAssignmentCreationDto: RoleAssignmentCreation = V3API.RoleAssignmentCreation;
const RoleDto: Role = V3API.Role;
const DataStoreFetchOptionsDto: DataStoreFetchOptions = V3API.DataStoreFetchOptions;
const DataStoreSortOptionsDto: DataStoreSortOptions = V3API.DataStoreSortOptions;
const DataStorePermIdDto: DataStorePermId = V3API.DataStorePermId;
const IDataStoreIdDto: IDataStoreId = V3API.IDataStoreId;
const SearchDataStoresOperationDto: SearchDataStoresOperation = V3API.SearchDataStoresOperation;
const SearchDataStoresOperationResultDto: SearchDataStoresOperationResult = V3API.SearchDataStoresOperationResult;
const DataStoreSearchCriteriaDto: DataStoreSearchCriteria = V3API.DataStoreSearchCriteria;
const DataStoreDto: DataStore = V3API.DataStore;
const SessionInformationDto: SessionInformation = V3API.SessionInformation;
const SessionInformationFetchOptionsDto: SessionInformationFetchOptions = V3API.SessionInformationFetchOptions;
const SessionInformationSortOptionsDto: SessionInformationSortOptions = V3API.SessionInformationSortOptions;
const ISessionInformationIdDto: ISessionInformationId = V3API.ISessionInformationId;
const SessionInformationPermIdDto: SessionInformationPermId = V3API.SessionInformationPermId;
const GetSessionInformationOperationDto: GetSessionInformationOperation = V3API.GetSessionInformationOperation;
const GetSessionInformationOperationResultDto: GetSessionInformationOperationResult = V3API.GetSessionInformationOperationResult;
const SearchSessionInformationOperationResultDto: SearchSessionInformationOperationResult = V3API.SearchSessionInformationOperationResult;
const UserNameSearchCriteriaDto: UserNameSearchCriteria = V3API.UserNameSearchCriteria;
const SessionInformationSearchCriteriaDto: SessionInformationSearchCriteria = V3API.SessionInformationSearchCriteria;
const PersonalAccessTokenSessionSearchCriteriaDto: PersonalAccessTokenSessionSearchCriteria = V3API.PersonalAccessTokenSessionSearchCriteria;
const SearchSessionInformationOperationDto: SearchSessionInformationOperation = V3API.SearchSessionInformationOperation;
const StorageFormatDto: StorageFormat = V3API.StorageFormat;
const DeleteDataSetTypesOperationDto: DeleteDataSetTypesOperation = V3API.DeleteDataSetTypesOperation;
const DataSetDeletionOptionsDto: DataSetDeletionOptions = V3API.DataSetDeletionOptions;
const DataSetTypeDeletionOptionsDto: DataSetTypeDeletionOptions = V3API.DataSetTypeDeletionOptions;
const DeleteDataSetTypesOperationResultDto: DeleteDataSetTypesOperationResult = V3API.DeleteDataSetTypesOperationResult;
const DeleteDataSetsOperationDto: DeleteDataSetsOperation = V3API.DeleteDataSetsOperation;
const DeleteDataSetsOperationResultDto: DeleteDataSetsOperationResult = V3API.DeleteDataSetsOperationResult;
const DataSetKindDto: DataSetKind = V3API.DataSetKind;
const LocatorTypeDto: LocatorType = V3API.LocatorType;
const PhysicalDataSortOptionsDto: PhysicalDataSortOptions = V3API.PhysicalDataSortOptions;
const LinkedDataFetchOptionsDto: LinkedDataFetchOptions = V3API.LinkedDataFetchOptions;
const DataSetSortOptionsDto: DataSetSortOptions = V3API.DataSetSortOptions;
const LinkedDataSortOptionsDto: LinkedDataSortOptions = V3API.LinkedDataSortOptions;
const LocatorTypeSortOptionsDto: LocatorTypeSortOptions = V3API.LocatorTypeSortOptions;
const DataSetFetchOptionsDto: DataSetFetchOptions = V3API.DataSetFetchOptions;
const FileFormatTypeSortOptionsDto: FileFormatTypeSortOptions = V3API.FileFormatTypeSortOptions;
const PhysicalDataFetchOptionsDto: PhysicalDataFetchOptions = V3API.PhysicalDataFetchOptions;
const DataSetTypeFetchOptionsDto: DataSetTypeFetchOptions = V3API.DataSetTypeFetchOptions;
const FileFormatTypeFetchOptionsDto: FileFormatTypeFetchOptions = V3API.FileFormatTypeFetchOptions;
const LocatorTypeFetchOptionsDto: LocatorTypeFetchOptions = V3API.LocatorTypeFetchOptions;
const StorageFormatFetchOptionsDto: StorageFormatFetchOptions = V3API.StorageFormatFetchOptions;
const StorageFormatSortOptionsDto: StorageFormatSortOptions = V3API.StorageFormatSortOptions;
const DataSetTypeSortOptionsDto: DataSetTypeSortOptions = V3API.DataSetTypeSortOptions;
const UpdateDataSetsOperationResultDto: UpdateDataSetsOperationResult = V3API.UpdateDataSetsOperationResult;
const UpdateDataSetsOperationDto: UpdateDataSetsOperation = V3API.UpdateDataSetsOperation;
const PhysicalDataUpdateDto: PhysicalDataUpdate = V3API.PhysicalDataUpdate;
const LinkedDataUpdateDto: LinkedDataUpdate = V3API.LinkedDataUpdate;
const DataSetTypeUpdateDto: DataSetTypeUpdate = V3API.DataSetTypeUpdate;
const UpdateDataSetTypesOperationResultDto: UpdateDataSetTypesOperationResult = V3API.UpdateDataSetTypesOperationResult;
const UpdateDataSetTypesOperationDto: UpdateDataSetTypesOperation = V3API.UpdateDataSetTypesOperation;
const DataSetUpdateDto: DataSetUpdate = V3API.DataSetUpdate;
const ContentCopyListUpdateValueDto: ContentCopyListUpdateValue = V3API.ContentCopyListUpdateValue;
const DataSetDto: DataSet = V3API.DataSet;
const IContentCopyIdDto: IContentCopyId = V3API.IContentCopyId;
const FileFormatTypePermIdDto: FileFormatTypePermId = V3API.FileFormatTypePermId;
const IDataSetIdDto: IDataSetId = V3API.IDataSetId;
const IStorageFormatIdDto: IStorageFormatId = V3API.IStorageFormatId;
const IFileFormatTypeIdDto: IFileFormatTypeId = V3API.IFileFormatTypeId;
const ContentCopyPermIdDto: ContentCopyPermId = V3API.ContentCopyPermId;
const RelativeLocationLocatorTypePermIdDto: RelativeLocationLocatorTypePermId = V3API.RelativeLocationLocatorTypePermId;
const DataSetPermIdDto: DataSetPermId = V3API.DataSetPermId;
const StorageFormatPermIdDto: StorageFormatPermId = V3API.StorageFormatPermId;
const ILocatorTypeIdDto: ILocatorTypeId = V3API.ILocatorTypeId;
const ProprietaryStorageFormatPermIdDto: ProprietaryStorageFormatPermId = V3API.ProprietaryStorageFormatPermId;
const BdsDirectoryStorageFormatPermIdDto: BdsDirectoryStorageFormatPermId = V3API.BdsDirectoryStorageFormatPermId;
const LocatorTypePermIdDto: LocatorTypePermId = V3API.LocatorTypePermId;
const ContentCopyDto: ContentCopy = V3API.ContentCopy;
const GetDataSetsOperationResultDto: GetDataSetsOperationResult = V3API.GetDataSetsOperationResult;
const GetDataSetTypesOperationResultDto: GetDataSetTypesOperationResult = V3API.GetDataSetTypesOperationResult;
const GetDataSetTypesOperationDto: GetDataSetTypesOperation = V3API.GetDataSetTypesOperation;
const GetDataSetsOperationDto: GetDataSetsOperation = V3API.GetDataSetsOperation;
const SearchDataSetTypesOperationResultDto: SearchDataSetTypesOperationResult = V3API.SearchDataSetTypesOperationResult;
const LocationSearchCriteriaDto: LocationSearchCriteria = V3API.LocationSearchCriteria;
const ExternalCodeSearchCriteriaDto: ExternalCodeSearchCriteria = V3API.ExternalCodeSearchCriteria;
const PresentInArchiveSearchCriteriaDto: PresentInArchiveSearchCriteria = V3API.PresentInArchiveSearchCriteria;
const LinkedDataSearchCriteriaDto: LinkedDataSearchCriteria = V3API.LinkedDataSearchCriteria;
const DataSetSearchCriteriaDto: DataSetSearchCriteria = V3API.DataSetSearchCriteria;
const FileFormatTypeSearchCriteriaDto: FileFormatTypeSearchCriteria = V3API.FileFormatTypeSearchCriteria;
const PhysicalDataSearchCriteriaDto: PhysicalDataSearchCriteria = V3API.PhysicalDataSearchCriteria;
const StatusSearchCriteriaDto: StatusSearchCriteria = V3API.StatusSearchCriteria;
const LocatorTypeSearchCriteriaDto: LocatorTypeSearchCriteria = V3API.LocatorTypeSearchCriteria;
const SpeedHintSearchCriteriaDto: SpeedHintSearchCriteria = V3API.SpeedHintSearchCriteria;
const GitRepositoryIdSearchCriteriaDto: GitRepositoryIdSearchCriteria = V3API.GitRepositoryIdSearchCriteria;
const DataSetSearchRelationDto: DataSetSearchRelation = V3API.DataSetSearchRelation;
const GitCommitHashSearchCriteriaDto: GitCommitHashSearchCriteria = V3API.GitCommitHashSearchCriteria;
const ArchivingRequestedSearchCriteriaDto: ArchivingRequestedSearchCriteria = V3API.ArchivingRequestedSearchCriteria;
const StorageConfirmationSearchCriteriaDto: StorageConfirmationSearchCriteria = V3API.StorageConfirmationSearchCriteria;
const ShareIdSearchCriteriaDto: ShareIdSearchCriteria = V3API.ShareIdSearchCriteria;
const CompleteSearchCriteriaDto: CompleteSearchCriteria = V3API.CompleteSearchCriteria;
const SearchDataSetTypesOperationDto: SearchDataSetTypesOperation = V3API.SearchDataSetTypesOperation;
const SizeSearchCriteriaDto: SizeSearchCriteria = V3API.SizeSearchCriteria;
const PathSearchCriteriaDto: PathSearchCriteria = V3API.PathSearchCriteria;
const DataSetTypeSearchCriteriaDto: DataSetTypeSearchCriteria = V3API.DataSetTypeSearchCriteria;
const ContentCopySearchCriteriaDto: ContentCopySearchCriteria = V3API.ContentCopySearchCriteria;
const StorageFormatSearchCriteriaDto: StorageFormatSearchCriteria = V3API.StorageFormatSearchCriteria;
const SearchDataSetsOperationDto: SearchDataSetsOperation = V3API.SearchDataSetsOperation;
const SearchDataSetsOperationResultDto: SearchDataSetsOperationResult = V3API.SearchDataSetsOperationResult;
const UnlockDataSetsOperationDto: UnlockDataSetsOperation = V3API.UnlockDataSetsOperation;
const DataSetUnlockOptionsDto: DataSetUnlockOptions = V3API.DataSetUnlockOptions;
const UnlockDataSetsOperationResultDto: UnlockDataSetsOperationResult = V3API.UnlockDataSetsOperationResult;
const LinkedDataDto: LinkedData = V3API.LinkedData;
const LockDataSetsOperationDto: LockDataSetsOperation = V3API.LockDataSetsOperation;
const DataSetLockOptionsDto: DataSetLockOptions = V3API.DataSetLockOptions;
const LockDataSetsOperationResultDto: LockDataSetsOperationResult = V3API.LockDataSetsOperationResult;
const ArchivingStatusDto: ArchivingStatus = V3API.ArchivingStatus;
const DataSetTypeDto: DataSetType = V3API.DataSetType;
const UnarchiveDataSetsOperationDto: UnarchiveDataSetsOperation = V3API.UnarchiveDataSetsOperation;
const UnarchiveDataSetsOperationResultDto: UnarchiveDataSetsOperationResult = V3API.UnarchiveDataSetsOperationResult;
const DataSetUnarchiveOptionsDto: DataSetUnarchiveOptions = V3API.DataSetUnarchiveOptions;
const CompleteDto: Complete = V3API.Complete;
const ArchiveDataSetsOperationDto: ArchiveDataSetsOperation = V3API.ArchiveDataSetsOperation;
const DataSetArchiveOptionsDto: DataSetArchiveOptions = V3API.DataSetArchiveOptions;
const ArchiveDataSetsOperationResultDto: ArchiveDataSetsOperationResult = V3API.ArchiveDataSetsOperationResult;
const FileFormatTypeDto: FileFormatType = V3API.FileFormatType;
const LinkedDataCreationDto: LinkedDataCreation = V3API.LinkedDataCreation;
const CreateDataSetTypesOperationResultDto: CreateDataSetTypesOperationResult = V3API.CreateDataSetTypesOperationResult;
const DataSetCreationDto: DataSetCreation = V3API.DataSetCreation;
const CreateDataSetsOperationDto: CreateDataSetsOperation = V3API.CreateDataSetsOperation;
const CreateDataSetTypesOperationDto: CreateDataSetTypesOperation = V3API.CreateDataSetTypesOperation;
const ContentCopyCreationDto: ContentCopyCreation = V3API.ContentCopyCreation;
const DataSetTypeCreationDto: DataSetTypeCreation = V3API.DataSetTypeCreation;
const CreateDataSetsOperationResultDto: CreateDataSetsOperationResult = V3API.CreateDataSetsOperationResult;
const DataSetRelationTypeDto: DataSetRelationType = V3API.DataSetRelationType;
const PhysicalDataDto: PhysicalData = V3API.PhysicalData;
const CreateCodesOperationResultDto: CreateCodesOperationResult = V3API.CreateCodesOperationResult;
const CreatePermIdsOperationResultDto: CreatePermIdsOperationResult = V3API.CreatePermIdsOperationResult;
const CreateCodesOperationDto: CreateCodesOperation = V3API.CreateCodesOperation;
const CreatePermIdsOperationDto: CreatePermIdsOperation = V3API.CreatePermIdsOperation;
const WebAppSettingsSortOptionsDto: WebAppSettingsSortOptions = V3API.WebAppSettingsSortOptions;
const WebAppSettingsFetchOptionsDto: WebAppSettingsFetchOptions = V3API.WebAppSettingsFetchOptions;
const WebAppSettingsUpdateValueDto: WebAppSettingsUpdateValue = V3API.WebAppSettingsUpdateValue;
const WebAppSettingDto: WebAppSetting = V3API.WebAppSetting;
const WebAppSettingCreationDto: WebAppSettingCreation = V3API.WebAppSettingCreation;
const WebAppSettingsDto: WebAppSettings = V3API.WebAppSettings;
const DeletePluginsOperationDto: DeletePluginsOperation = V3API.DeletePluginsOperation;
const DeletePluginsOperationResultDto: DeletePluginsOperationResult = V3API.DeletePluginsOperationResult;
const PluginDeletionOptionsDto: PluginDeletionOptions = V3API.PluginDeletionOptions;
const EvaluatePluginOperationResultDto: EvaluatePluginOperationResult = V3API.EvaluatePluginOperationResult;
const EntityValidationPluginEvaluationResultDto: EntityValidationPluginEvaluationResult = V3API.EntityValidationPluginEvaluationResult;
const EntityValidationPluginEvaluationOptionsDto: EntityValidationPluginEvaluationOptions = V3API.EntityValidationPluginEvaluationOptions;
const DynamicPropertyPluginEvaluationResultDto: DynamicPropertyPluginEvaluationResult = V3API.DynamicPropertyPluginEvaluationResult;
const PluginEvaluationResultDto: PluginEvaluationResult = V3API.PluginEvaluationResult;
const EvaluatePluginOperationDto: EvaluatePluginOperation = V3API.EvaluatePluginOperation;
const PluginEvaluationOptionsDto: PluginEvaluationOptions = V3API.PluginEvaluationOptions;
const DynamicPropertyPluginEvaluationOptionsDto: DynamicPropertyPluginEvaluationOptions = V3API.DynamicPropertyPluginEvaluationOptions;
const PluginSortOptionsDto: PluginSortOptions = V3API.PluginSortOptions;
const PluginFetchOptionsDto: PluginFetchOptions = V3API.PluginFetchOptions;
const UpdatePluginsOperationDto: UpdatePluginsOperation = V3API.UpdatePluginsOperation;
const PluginUpdateDto: PluginUpdate = V3API.PluginUpdate;
const UpdatePluginsOperationResultDto: UpdatePluginsOperationResult = V3API.UpdatePluginsOperationResult;
const PluginDto: Plugin = V3API.Plugin;
const IPluginIdDto: IPluginId = V3API.IPluginId;
const PluginPermIdDto: PluginPermId = V3API.PluginPermId;
const GetPluginsOperationDto: GetPluginsOperation = V3API.GetPluginsOperation;
const GetPluginsOperationResultDto: GetPluginsOperationResult = V3API.GetPluginsOperationResult;
const PluginKindDto: PluginKind = V3API.PluginKind;
const PluginTypeSearchCriteriaDto: PluginTypeSearchCriteria = V3API.PluginTypeSearchCriteria;
const SearchPluginsOperationDto: SearchPluginsOperation = V3API.SearchPluginsOperation;
const SearchPluginsOperationResultDto: SearchPluginsOperationResult = V3API.SearchPluginsOperationResult;
const PluginKindSearchCriteriaDto: PluginKindSearchCriteria = V3API.PluginKindSearchCriteria;
const PluginSearchCriteriaDto: PluginSearchCriteria = V3API.PluginSearchCriteria;
const CreatePluginsOperationDto: CreatePluginsOperation = V3API.CreatePluginsOperation;
const CreatePluginsOperationResultDto: CreatePluginsOperationResult = V3API.CreatePluginsOperationResult;
const PluginCreationDto: PluginCreation = V3API.PluginCreation;
const PluginTypeDto: PluginType = V3API.PluginType;
const DeleteVocabulariesOperationResultDto: DeleteVocabulariesOperationResult = V3API.DeleteVocabulariesOperationResult;
const VocabularyDeletionOptionsDto: VocabularyDeletionOptions = V3API.VocabularyDeletionOptions;
const DeleteVocabulariesOperationDto: DeleteVocabulariesOperation = V3API.DeleteVocabulariesOperation;
const VocabularyTermReplacementDto: VocabularyTermReplacement = V3API.VocabularyTermReplacement;
const DeleteVocabularyTermsOperationResultDto: DeleteVocabularyTermsOperationResult = V3API.DeleteVocabularyTermsOperationResult;
const DeleteVocabularyTermsOperationDto: DeleteVocabularyTermsOperation = V3API.DeleteVocabularyTermsOperation;
const VocabularyTermDeletionOptionsDto: VocabularyTermDeletionOptions = V3API.VocabularyTermDeletionOptions;
const VocabularyTermSortOptionsDto: VocabularyTermSortOptions = V3API.VocabularyTermSortOptions;
const VocabularyFetchOptionsDto: VocabularyFetchOptions = V3API.VocabularyFetchOptions;
const VocabularySortOptionsDto: VocabularySortOptions = V3API.VocabularySortOptions;
const VocabularyTermFetchOptionsDto: VocabularyTermFetchOptions = V3API.VocabularyTermFetchOptions;
const UpdateVocabulariesOperationDto: UpdateVocabulariesOperation = V3API.UpdateVocabulariesOperation;
const VocabularyTermUpdateDto: VocabularyTermUpdate = V3API.VocabularyTermUpdate;
const VocabularyUpdateDto: VocabularyUpdate = V3API.VocabularyUpdate;
const UpdateVocabulariesOperationResultDto: UpdateVocabulariesOperationResult = V3API.UpdateVocabulariesOperationResult;
const UpdateVocabularyTermsOperationDto: UpdateVocabularyTermsOperation = V3API.UpdateVocabularyTermsOperation;
const UpdateVocabularyTermsOperationResultDto: UpdateVocabularyTermsOperationResult = V3API.UpdateVocabularyTermsOperationResult;
const VocabularyDto: Vocabulary = V3API.Vocabulary;
const VocabularyPermIdDto: VocabularyPermId = V3API.VocabularyPermId;
const IVocabularyIdDto: IVocabularyId = V3API.IVocabularyId;
const IVocabularyTermIdDto: IVocabularyTermId = V3API.IVocabularyTermId;
const VocabularyTermPermIdDto: VocabularyTermPermId = V3API.VocabularyTermPermId;
const GetVocabulariesOperationResultDto: GetVocabulariesOperationResult = V3API.GetVocabulariesOperationResult;
const GetVocabulariesOperationDto: GetVocabulariesOperation = V3API.GetVocabulariesOperation;
const GetVocabularyTermsOperationDto: GetVocabularyTermsOperation = V3API.GetVocabularyTermsOperation;
const GetVocabularyTermsOperationResultDto: GetVocabularyTermsOperationResult = V3API.GetVocabularyTermsOperationResult;
const SearchVocabulariesOperationResultDto: SearchVocabulariesOperationResult = V3API.SearchVocabulariesOperationResult;
const SearchVocabulariesOperationDto: SearchVocabulariesOperation = V3API.SearchVocabulariesOperation;
const VocabularySearchCriteriaDto: VocabularySearchCriteria = V3API.VocabularySearchCriteria;
const VocabularyTermSearchCriteriaDto: VocabularyTermSearchCriteria = V3API.VocabularyTermSearchCriteria;
const SearchVocabularyTermsOperationResultDto: SearchVocabularyTermsOperationResult = V3API.SearchVocabularyTermsOperationResult;
const SearchVocabularyTermsOperationDto: SearchVocabularyTermsOperation = V3API.SearchVocabularyTermsOperation;
const VocabularyTermDto: VocabularyTerm = V3API.VocabularyTerm;
const VocabularyCreationDto: VocabularyCreation = V3API.VocabularyCreation;
const CreateVocabulariesOperationDto: CreateVocabulariesOperation = V3API.CreateVocabulariesOperation;
const CreateVocabularyTermsOperationResultDto: CreateVocabularyTermsOperationResult = V3API.CreateVocabularyTermsOperationResult;
const CreateVocabulariesOperationResultDto: CreateVocabulariesOperationResult = V3API.CreateVocabulariesOperationResult;
const CreateVocabularyTermsOperationDto: CreateVocabularyTermsOperation = V3API.CreateVocabularyTermsOperation;
const VocabularyTermCreationDto: VocabularyTermCreation = V3API.VocabularyTermCreation;

export {
SearchDomainServiceDto as SearchDomainService,
SearchDomainServiceSearchOptionDto as SearchDomainServiceSearchOption,
AggregationServiceDto as AggregationService,
ProcessingServiceDto as ProcessingService,
ProcessingServiceSortOptionsDto as ProcessingServiceSortOptions,
AggregationServiceFetchOptionsDto as AggregationServiceFetchOptions,
ProcessingServiceFetchOptionsDto as ProcessingServiceFetchOptions,
AggregationServiceSortOptionsDto as AggregationServiceSortOptions,
ReportingServiceFetchOptionsDto as ReportingServiceFetchOptions,
SearchDomainServiceSortOptionsDto as SearchDomainServiceSortOptions,
CustomASServiceFetchOptionsDto as CustomASServiceFetchOptions,
ReportingServiceSortOptionsDto as ReportingServiceSortOptions,
SearchDomainServiceFetchOptionsDto as SearchDomainServiceFetchOptions,
CustomASServiceSortOptionsDto as CustomASServiceSortOptions,
ICustomASServiceIdDto as ICustomASServiceId,
IDssServiceIdDto as IDssServiceId,
DssServicePermIdDto as DssServicePermId,
CustomASServiceCodeDto as CustomASServiceCode,
SearchAggregationServicesOperationResultDto as SearchAggregationServicesOperationResult,
ReportingServiceSearchCriteriaDto as ReportingServiceSearchCriteria,
SearchCustomASServicesOperationDto as SearchCustomASServicesOperation,
SearchProcessingServicesOperationResultDto as SearchProcessingServicesOperationResult,
ProcessingServiceSearchCriteriaDto as ProcessingServiceSearchCriteria,
CustomASServiceSearchCriteriaDto as CustomASServiceSearchCriteria,
SearchReportingServicesOperationDto as SearchReportingServicesOperation,
SearchDomainServiceSearchCriteriaDto as SearchDomainServiceSearchCriteria,
SearchSearchDomainServicesOperationResultDto as SearchSearchDomainServicesOperationResult,
SearchProcessingServicesOperationDto as SearchProcessingServicesOperation,
SearchAggregationServicesOperationDto as SearchAggregationServicesOperation,
SearchSearchDomainServicesOperationDto as SearchSearchDomainServicesOperation,
AggregationServiceSearchCriteriaDto as AggregationServiceSearchCriteria,
SearchCustomASServicesOperationResultDto as SearchCustomASServicesOperationResult,
SearchReportingServicesOperationResultDto as SearchReportingServicesOperationResult,
SearchDomainServiceExecutionResultDto as SearchDomainServiceExecutionResult,
ReportingServiceDto as ReportingService,
CustomASServiceDto as CustomASService,
CustomASServiceExecutionOptionsDto as CustomASServiceExecutionOptions,
ExecuteProcessingServiceOperationDto as ExecuteProcessingServiceOperation,
ExecuteSearchDomainServiceOperationDto as ExecuteSearchDomainServiceOperation,
ExecuteCustomASServiceOperationResultDto as ExecuteCustomASServiceOperationResult,
ProcessingServiceExecutionOptionsDto as ProcessingServiceExecutionOptions,
ExecuteSearchDomainServiceOperationResultDto as ExecuteSearchDomainServiceOperationResult,
AggregationServiceExecutionOptionsDto as AggregationServiceExecutionOptions,
ExecuteCustomASServiceOperationDto as ExecuteCustomASServiceOperation,
ExecuteAggregationServiceOperationResultDto as ExecuteAggregationServiceOperationResult,
SearchDomainServiceExecutionOptionsDto as SearchDomainServiceExecutionOptions,
ExecuteProcessingServiceOperationResultDto as ExecuteProcessingServiceOperationResult,
ExecuteReportingServiceOperationResultDto as ExecuteReportingServiceOperationResult,
ReportingServiceExecutionOptionsDto as ReportingServiceExecutionOptions,
ExecuteAggregationServiceOperationDto as ExecuteAggregationServiceOperation,
ExecuteReportingServiceOperationDto as ExecuteReportingServiceOperation,
AbstractExecutionOptionsWithParametersDto as AbstractExecutionOptionsWithParameters,
ServerInformationDto as ServerInformation,
GlobalSearchObjectFetchOptionsDto as GlobalSearchObjectFetchOptions,
MatchFetchOptionsDto as MatchFetchOptions,
GlobalSearchObjectSortOptionsDto as GlobalSearchObjectSortOptions,
SearchGloballyOperationResultDto as SearchGloballyOperationResult,
GlobalSearchObjectKindDto as GlobalSearchObjectKind,
GlobalSearchObjectKindCriteriaDto as GlobalSearchObjectKindCriteria,
GlobalSearchTextCriteriaDto as GlobalSearchTextCriteria,
GlobalSearchCriteriaDto as GlobalSearchCriteria,
GlobalSearchWildCardsCriteriaDto as GlobalSearchWildCardsCriteria,
SearchGloballyOperationDto as SearchGloballyOperation,
GlobalSearchObjectDto as GlobalSearchObject,
DeleteExternalDmsOperationResultDto as DeleteExternalDmsOperationResult,
ExternalDmsDeletionOptionsDto as ExternalDmsDeletionOptions,
DeleteExternalDmsOperationDto as DeleteExternalDmsOperation,
ExternalDmsFetchOptionsDto as ExternalDmsFetchOptions,
ExternalDmsSortOptionsDto as ExternalDmsSortOptions,
UpdateExternalDmsOperationResultDto as UpdateExternalDmsOperationResult,
ExternalDmsUpdateDto as ExternalDmsUpdate,
UpdateExternalDmsOperationDto as UpdateExternalDmsOperation,
ExternalDmsDto as ExternalDms,
ExternalDmsPermIdDto as ExternalDmsPermId,
IExternalDmsIdDto as IExternalDmsId,
GetExternalDmsOperationResultDto as GetExternalDmsOperationResult,
GetExternalDmsOperationDto as GetExternalDmsOperation,
ExternalDmsTypeSearchCriteriaDto as ExternalDmsTypeSearchCriteria,
ExternalDmsSearchCriteriaDto as ExternalDmsSearchCriteria,
LabelSearchCriteriaDto as LabelSearchCriteria,
SearchExternalDmsOperationResultDto as SearchExternalDmsOperationResult,
SearchExternalDmsOperationDto as SearchExternalDmsOperation,
AddressSearchCriteriaDto as AddressSearchCriteria,
ExternalDmsAddressTypeDto as ExternalDmsAddressType,
CreateExternalDmsOperationResultDto as CreateExternalDmsOperationResult,
ExternalDmsCreationDto as ExternalDmsCreation,
CreateExternalDmsOperationDto as CreateExternalDmsOperation,
TagDto as Tag,
DeleteTagsOperationDto as DeleteTagsOperation,
TagDeletionOptionsDto as TagDeletionOptions,
DeleteTagsOperationResultDto as DeleteTagsOperationResult,
TagFetchOptionsDto as TagFetchOptions,
TagSortOptionsDto as TagSortOptions,
UpdateTagsOperationResultDto as UpdateTagsOperationResult,
UpdateTagsOperationDto as UpdateTagsOperation,
TagUpdateDto as TagUpdate,
TagCodeDto as TagCode,
ITagIdDto as ITagId,
TagPermIdDto as TagPermId,
GetTagsOperationDto as GetTagsOperation,
GetTagsOperationResultDto as GetTagsOperationResult,
TagSearchCriteriaDto as TagSearchCriteria,
SearchTagsOperationResultDto as SearchTagsOperationResult,
SearchTagsOperationDto as SearchTagsOperation,
CreateTagsOperationResultDto as CreateTagsOperationResult,
CreateTagsOperationDto as CreateTagsOperation,
TagCreationDto as TagCreation,
DeleteSpacesOperationDto as DeleteSpacesOperation,
SpaceDeletionOptionsDto as SpaceDeletionOptions,
DeleteSpacesOperationResultDto as DeleteSpacesOperationResult,
SpaceFetchOptionsDto as SpaceFetchOptions,
SpaceSortOptionsDto as SpaceSortOptions,
UpdateSpacesOperationResultDto as UpdateSpacesOperationResult,
UpdateSpacesOperationDto as UpdateSpacesOperation,
SpaceUpdateDto as SpaceUpdate,
SpaceTechIdDto as SpaceTechId,
ISpaceIdDto as ISpaceId,
SpacePermIdDto as SpacePermId,
GetSpacesOperationDto as GetSpacesOperation,
GetSpacesOperationResultDto as GetSpacesOperationResult,
SearchSpacesOperationResultDto as SearchSpacesOperationResult,
SearchSpacesOperationDto as SearchSpacesOperation,
SpaceSearchCriteriaDto as SpaceSearchCriteria,
NoSpaceSearchCriteriaDto as NoSpaceSearchCriteria,
SpaceDto as Space,
CreateSpacesOperationResultDto as CreateSpacesOperationResult,
CreateSpacesOperationDto as CreateSpacesOperation,
SpaceCreationDto as SpaceCreation,
AttachmentFetchOptionsDto as AttachmentFetchOptions,
AttachmentSortOptionsDto as AttachmentSortOptions,
AttachmentListUpdateValueDto as AttachmentListUpdateValue,
AttachmentFileNameDto as AttachmentFileName,
IAttachmentIdDto as IAttachmentId,
AttachmentDto as Attachment,
AttachmentCreationDto as AttachmentCreation,
DeleteMaterialTypesOperationDto as DeleteMaterialTypesOperation,
DeleteMaterialTypesOperationResultDto as DeleteMaterialTypesOperationResult,
MaterialTypeDeletionOptionsDto as MaterialTypeDeletionOptions,
MaterialDeletionOptionsDto as MaterialDeletionOptions,
DeleteMaterialsOperationResultDto as DeleteMaterialsOperationResult,
DeleteMaterialsOperationDto as DeleteMaterialsOperation,
MaterialTypeDto as MaterialType,
MaterialTypeSortOptionsDto as MaterialTypeSortOptions,
MaterialFetchOptionsDto as MaterialFetchOptions,
MaterialSortOptionsDto as MaterialSortOptions,
MaterialTypeFetchOptionsDto as MaterialTypeFetchOptions,
UpdateMaterialTypesOperationResultDto as UpdateMaterialTypesOperationResult,
MaterialTypeUpdateDto as MaterialTypeUpdate,
MaterialUpdateDto as MaterialUpdate,
UpdateMaterialsOperationDto as UpdateMaterialsOperation,
UpdateMaterialTypesOperationDto as UpdateMaterialTypesOperation,
UpdateMaterialsOperationResultDto as UpdateMaterialsOperationResult,
IMaterialIdDto as IMaterialId,
MaterialPermIdDto as MaterialPermId,
GetMaterialTypesOperationDto as GetMaterialTypesOperation,
GetMaterialTypesOperationResultDto as GetMaterialTypesOperationResult,
GetMaterialsOperationDto as GetMaterialsOperation,
GetMaterialsOperationResultDto as GetMaterialsOperationResult,
SearchMaterialTypesOperationDto as SearchMaterialTypesOperation,
SearchMaterialsOperationDto as SearchMaterialsOperation,
MaterialSearchCriteriaDto as MaterialSearchCriteria,
SearchMaterialTypesOperationResultDto as SearchMaterialTypesOperationResult,
SearchMaterialsOperationResultDto as SearchMaterialsOperationResult,
MaterialTypeSearchCriteriaDto as MaterialTypeSearchCriteria,
CreateMaterialsOperationResultDto as CreateMaterialsOperationResult,
CreateMaterialTypesOperationDto as CreateMaterialTypesOperation,
CreateMaterialsOperationDto as CreateMaterialsOperation,
MaterialCreationDto as MaterialCreation,
CreateMaterialTypesOperationResultDto as CreateMaterialTypesOperationResult,
MaterialTypeCreationDto as MaterialTypeCreation,
MaterialDto as Material,
DeletePropertyTypesOperationDto as DeletePropertyTypesOperation,
DeletePropertyTypesOperationResultDto as DeletePropertyTypesOperationResult,
PropertyTypeDeletionOptionsDto as PropertyTypeDeletionOptions,
PropertyTypeSortOptionsDto as PropertyTypeSortOptions,
PropertyAssignmentFetchOptionsDto as PropertyAssignmentFetchOptions,
PropertyTypeFetchOptionsDto as PropertyTypeFetchOptions,
PropertyAssignmentSortOptionsDto as PropertyAssignmentSortOptions,
PropertyFetchOptionsDto as PropertyFetchOptions,
UpdatePropertyTypesOperationResultDto as UpdatePropertyTypesOperationResult,
PropertyTypeUpdateDto as PropertyTypeUpdate,
UpdatePropertyTypesOperationDto as UpdatePropertyTypesOperation,
IPropertyTypeIdDto as IPropertyTypeId,
PropertyTypePermIdDto as PropertyTypePermId,
IPropertyAssignmentIdDto as IPropertyAssignmentId,
PropertyAssignmentPermIdDto as PropertyAssignmentPermId,
GetPropertyTypesOperationResultDto as GetPropertyTypesOperationResult,
GetPropertyTypesOperationDto as GetPropertyTypesOperation,
PropertyTypeDto as PropertyType,
SearchPropertyTypesOperationDto as SearchPropertyTypesOperation,
SearchPropertyTypesOperationResultDto as SearchPropertyTypesOperationResult,
PropertyAssignmentSearchCriteriaDto as PropertyAssignmentSearchCriteria,
SearchPropertyAssignmentsOperationDto as SearchPropertyAssignmentsOperation,
SearchPropertyAssignmentsOperationResultDto as SearchPropertyAssignmentsOperationResult,
PropertyTypeSearchCriteriaDto as PropertyTypeSearchCriteria,
DataTypeDto as DataType,
PropertyAssignmentDto as PropertyAssignment,
PropertyAssignmentCreationDto as PropertyAssignmentCreation,
CreatePropertyTypesOperationResultDto as CreatePropertyTypesOperationResult,
CreatePropertyTypesOperationDto as CreatePropertyTypesOperation,
PropertyTypeCreationDto as PropertyTypeCreation,
DeleteProjectsOperationDto as DeleteProjectsOperation,
ProjectDeletionOptionsDto as ProjectDeletionOptions,
DeleteProjectsOperationResultDto as DeleteProjectsOperationResult,
ProjectSortOptionsDto as ProjectSortOptions,
ProjectFetchOptionsDto as ProjectFetchOptions,
UpdateProjectsOperationDto as UpdateProjectsOperation,
ProjectUpdateDto as ProjectUpdate,
UpdateProjectsOperationResultDto as UpdateProjectsOperationResult,
ProjectPermIdDto as ProjectPermId,
IProjectIdDto as IProjectId,
ProjectIdentifierDto as ProjectIdentifier,
GetProjectsOperationDto as GetProjectsOperation,
GetProjectsOperationResultDto as GetProjectsOperationResult,
NoProjectSearchCriteriaDto as NoProjectSearchCriteria,
SearchProjectsOperationResultDto as SearchProjectsOperationResult,
SearchProjectsOperationDto as SearchProjectsOperation,
ProjectSearchCriteriaDto as ProjectSearchCriteria,
ProjectDto as Project,
CreateProjectsOperationResultDto as CreateProjectsOperationResult,
CreateProjectsOperationDto as CreateProjectsOperation,
ProjectCreationDto as ProjectCreation,
ProjectRelationTypeDto as ProjectRelationType,
ExperimentTypeDto as ExperimentType,
DeleteExperimentTypesOperationResultDto as DeleteExperimentTypesOperationResult,
ExperimentDeletionOptionsDto as ExperimentDeletionOptions,
DeleteExperimentTypesOperationDto as DeleteExperimentTypesOperation,
DeleteExperimentsOperationResultDto as DeleteExperimentsOperationResult,
DeleteExperimentsOperationDto as DeleteExperimentsOperation,
ExperimentTypeDeletionOptionsDto as ExperimentTypeDeletionOptions,
ExperimentFetchOptionsDto as ExperimentFetchOptions,
ExperimentTypeSortOptionsDto as ExperimentTypeSortOptions,
ExperimentTypeFetchOptionsDto as ExperimentTypeFetchOptions,
ExperimentSortOptionsDto as ExperimentSortOptions,
UpdateExperimentsOperationDto as UpdateExperimentsOperation,
ExperimentUpdateDto as ExperimentUpdate,
UpdateExperimentTypesOperationDto as UpdateExperimentTypesOperation,
UpdateExperimentTypesOperationResultDto as UpdateExperimentTypesOperationResult,
UpdateExperimentsOperationResultDto as UpdateExperimentsOperationResult,
ExperimentTypeUpdateDto as ExperimentTypeUpdate,
ExperimentPermIdDto as ExperimentPermId,
ExperimentIdentifierDto as ExperimentIdentifier,
IExperimentIdDto as IExperimentId,
GetExperimentsOperationDto as GetExperimentsOperation,
GetExperimentsOperationResultDto as GetExperimentsOperationResult,
GetExperimentTypesOperationDto as GetExperimentTypesOperation,
GetExperimentTypesOperationResultDto as GetExperimentTypesOperationResult,
ExperimentSearchCriteriaDto as ExperimentSearchCriteria,
SearchExperimentTypesOperationResultDto as SearchExperimentTypesOperationResult,
SearchExperimentsOperationDto as SearchExperimentsOperation,
SearchExperimentsOperationResultDto as SearchExperimentsOperationResult,
SearchExperimentTypesOperationDto as SearchExperimentTypesOperation,
ExperimentTypeSearchCriteriaDto as ExperimentTypeSearchCriteria,
NoExperimentSearchCriteriaDto as NoExperimentSearchCriteria,
ExperimentDto as Experiment,
CreateExperimentTypesOperationDto as CreateExperimentTypesOperation,
CreateExperimentTypesOperationResultDto as CreateExperimentTypesOperationResult,
ExperimentCreationDto as ExperimentCreation,
CreateExperimentsOperationResultDto as CreateExperimentsOperationResult,
CreateExperimentsOperationDto as CreateExperimentsOperation,
ExperimentTypeCreationDto as ExperimentTypeCreation,
ExperimentRelationTypeDto as ExperimentRelationType,
DeleteSampleTypesOperationDto as DeleteSampleTypesOperation,
DeleteSamplesOperationDto as DeleteSamplesOperation,
DeleteSampleTypesOperationResultDto as DeleteSampleTypesOperationResult,
SampleTypeDeletionOptionsDto as SampleTypeDeletionOptions,
DeleteSamplesOperationResultDto as DeleteSamplesOperationResult,
SampleDeletionOptionsDto as SampleDeletionOptions,
SampleFetchOptionsDto as SampleFetchOptions,
SampleTypeFetchOptionsDto as SampleTypeFetchOptions,
SampleTypeSortOptionsDto as SampleTypeSortOptions,
SampleSortOptionsDto as SampleSortOptions,
UpdateSampleTypesOperationDto as UpdateSampleTypesOperation,
UpdateSamplesOperationResultDto as UpdateSamplesOperationResult,
UpdateSamplesOperationDto as UpdateSamplesOperation,
SampleTypeUpdateDto as SampleTypeUpdate,
SampleUpdateDto as SampleUpdate,
UpdateSampleTypesOperationResultDto as UpdateSampleTypesOperationResult,
SampleIdentifierDto as SampleIdentifier,
ISampleIdDto as ISampleId,
SamplePermIdDto as SamplePermId,
GetSampleTypesOperationResultDto as GetSampleTypesOperationResult,
GetSamplesOperationDto as GetSamplesOperation,
GetSamplesOperationResultDto as GetSamplesOperationResult,
GetSampleTypesOperationDto as GetSampleTypesOperation,
SearchSamplesOperationDto as SearchSamplesOperation,
ListableSampleTypeSearchCriteriaDto as ListableSampleTypeSearchCriteria,
SampleSearchCriteriaDto as SampleSearchCriteria,
NoSampleContainerSearchCriteriaDto as NoSampleContainerSearchCriteria,
SearchSamplesOperationResultDto as SearchSamplesOperationResult,
NoSampleSearchCriteriaDto as NoSampleSearchCriteria,
SampleSearchRelationDto as SampleSearchRelation,
SearchSampleTypesOperationResultDto as SearchSampleTypesOperationResult,
SearchSampleTypesOperationDto as SearchSampleTypesOperation,
SampleTypeSearchCriteriaDto as SampleTypeSearchCriteria,
SampleTypeDto as SampleType,
SampleTypeCreationDto as SampleTypeCreation,
CreateSampleTypesOperationDto as CreateSampleTypesOperation,
CreateSamplesOperationDto as CreateSamplesOperation,
SampleCreationDto as SampleCreation,
CreateSampleTypesOperationResultDto as CreateSampleTypesOperationResult,
CreateSamplesOperationResultDto as CreateSamplesOperationResult,
SampleRelationTypeDto as SampleRelationType,
SampleDto as Sample,
PersonDeletionOptionsDto as PersonDeletionOptions,
DeletePersonsOperationResultDto as DeletePersonsOperationResult,
DeletePersonsOperationDto as DeletePersonsOperation,
PersonSortOptionsDto as PersonSortOptions,
PersonFetchOptionsDto as PersonFetchOptions,
UpdatePersonsOperationDto as UpdatePersonsOperation,
PersonUpdateDto as PersonUpdate,
UpdatePersonsOperationResultDto as UpdatePersonsOperationResult,
MeDto as Me,
PersonPermIdDto as PersonPermId,
IPersonIdDto as IPersonId,
GetPersonsOperationDto as GetPersonsOperation,
GetPersonsOperationResultDto as GetPersonsOperationResult,
SearchPersonsOperationResultDto as SearchPersonsOperationResult,
SearchPersonsOperationDto as SearchPersonsOperation,
RegistratorSearchCriteriaDto as RegistratorSearchCriteria,
LastNameSearchCriteriaDto as LastNameSearchCriteria,
PersonSearchCriteriaDto as PersonSearchCriteria,
EmailSearchCriteriaDto as EmailSearchCriteria,
UserIdSearchCriteriaDto as UserIdSearchCriteria,
UserIdsSearchCriteriaDto as UserIdsSearchCriteria,
FirstNameSearchCriteriaDto as FirstNameSearchCriteria,
ModifierSearchCriteriaDto as ModifierSearchCriteria,
PersonDto as Person,
PersonCreationDto as PersonCreation,
CreatePersonsOperationDto as CreatePersonsOperation,
CreatePersonsOperationResultDto as CreatePersonsOperationResult,
DeleteSemanticAnnotationsOperationResultDto as DeleteSemanticAnnotationsOperationResult,
DeleteSemanticAnnotationsOperationDto as DeleteSemanticAnnotationsOperation,
SemanticAnnotationDeletionOptionsDto as SemanticAnnotationDeletionOptions,
SemanticAnnotationDto as SemanticAnnotation,
SemanticAnnotationSortOptionsDto as SemanticAnnotationSortOptions,
SemanticAnnotationFetchOptionsDto as SemanticAnnotationFetchOptions,
UpdateSemanticAnnotationsOperationResultDto as UpdateSemanticAnnotationsOperationResult,
UpdateSemanticAnnotationsOperationDto as UpdateSemanticAnnotationsOperation,
SemanticAnnotationUpdateDto as SemanticAnnotationUpdate,
ISemanticAnnotationIdDto as ISemanticAnnotationId,
SemanticAnnotationPermIdDto as SemanticAnnotationPermId,
GetSemanticAnnotationsOperationDto as GetSemanticAnnotationsOperation,
GetSemanticAnnotationsOperationResultDto as GetSemanticAnnotationsOperationResult,
DescriptorAccessionIdSearchCriteriaDto as DescriptorAccessionIdSearchCriteria,
SearchSemanticAnnotationsOperationResultDto as SearchSemanticAnnotationsOperationResult,
SearchSemanticAnnotationsOperationDto as SearchSemanticAnnotationsOperation,
PredicateOntologyVersionSearchCriteriaDto as PredicateOntologyVersionSearchCriteria,
DescriptorOntologyVersionSearchCriteriaDto as DescriptorOntologyVersionSearchCriteria,
SemanticAnnotationSearchCriteriaDto as SemanticAnnotationSearchCriteria,
PredicateOntologyIdSearchCriteriaDto as PredicateOntologyIdSearchCriteria,
PredicateAccessionIdSearchCriteriaDto as PredicateAccessionIdSearchCriteria,
DescriptorOntologyIdSearchCriteriaDto as DescriptorOntologyIdSearchCriteria,
CreateSemanticAnnotationsOperationDto as CreateSemanticAnnotationsOperation,
SemanticAnnotationCreationDto as SemanticAnnotationCreation,
CreateSemanticAnnotationsOperationResultDto as CreateSemanticAnnotationsOperationResult,
TableStringCellDto as TableStringCell,
DeleteObjectsWithoutTrashOperationResultDto as DeleteObjectsWithoutTrashOperationResult,
DeleteObjectsWithTrashOperationResultDto as DeleteObjectsWithTrashOperationResult,
DeleteObjectsOperationDto as DeleteObjectsOperation,
DeleteObjectsOperationResultDto as DeleteObjectsOperationResult,
FetchOptionsDto as FetchOptions,
EntitySortOptionsDto as EntitySortOptions,
SortParameterDto as SortParameter,
SortingDto as Sorting,
EntityWithPropertiesSortOptionsDto as EntityWithPropertiesSortOptions,
SortOptionsDto as SortOptions,
CacheModeDto as CacheMode,
EmptyFetchOptionsDto as EmptyFetchOptions,
SortOrderDto as SortOrder,
TableColumnDto as TableColumn,
IdListUpdateValueDto as IdListUpdateValue,
ListUpdateMapValuesDto as ListUpdateMapValues,
ListUpdateActionDto as ListUpdateAction,
RelationshipUpdateDto as RelationshipUpdate,
ListUpdateActionAddDto as ListUpdateActionAdd,
IUpdateDto as IUpdate,
IObjectUpdateDto as IObjectUpdate,
ListUpdateActionRemoveDto as ListUpdateActionRemove,
ListUpdateActionSetDto as ListUpdateActionSet,
UpdateObjectsOperationResultDto as UpdateObjectsOperationResult,
ListUpdateValueDto as ListUpdateValue,
UpdateObjectsOperationDto as UpdateObjectsOperation,
FieldUpdateValueDto as FieldUpdateValue,
ObjectTechIdDto as ObjectTechId,
IObjectIdDto as IObjectId,
ObjectPermIdDto as ObjectPermId,
ObjectIdentifierDto as ObjectIdentifier,
CreationIdDto as CreationId,
TableModelDto as TableModel,
GetServerPublicInformationOperationDto as GetServerPublicInformationOperation,
GetObjectsOperationResultDto as GetObjectsOperationResult,
GetServerInformationOperationResultDto as GetServerInformationOperationResult,
GetObjectsOperationDto as GetObjectsOperation,
GetServerPublicInformationOperationResultDto as GetServerPublicInformationOperationResult,
GetServerInformationOperationDto as GetServerInformationOperation,
RelationshipDto as Relationship,
ITableCellDto as ITableCell,
ShortDateFormatDto as ShortDateFormat,
AnyBooleanPropertySearchCriteriaDto as AnyBooleanPropertySearchCriteria,
SearchFieldTypeDto as SearchFieldType,
CodesSearchCriteriaDto as CodesSearchCriteria,
BooleanPropertySearchCriteriaDto as BooleanPropertySearchCriteria,
DateLaterThanValueDto as DateLaterThanValue,
AnyDatePropertySearchCriteriaDto as AnyDatePropertySearchCriteria,
StringLessThanOrEqualToValueDto as StringLessThanOrEqualToValue,
DateObjectEarlierThanOrEqualToValueDto as DateObjectEarlierThanOrEqualToValue,
NumberEqualToValueDto as NumberEqualToValue,
ControlledVocabularyPropertySearchCriteriaDto as ControlledVocabularyPropertySearchCriteria,
AnyPropertySearchCriteriaDto as AnyPropertySearchCriteria,
StrictlyStringPropertySearchCriteriaDto as StrictlyStringPropertySearchCriteria,
IDateDto as IDate,
ModificationDateSearchCriteriaDto as ModificationDateSearchCriteria,
DateObjectEarlierThanValueDto as DateObjectEarlierThanValue,
AbstractNumberValueDto as AbstractNumberValue,
DateObjectEqualToValueDto as DateObjectEqualToValue,
DescriptionSearchCriteriaDto as DescriptionSearchCriteria,
CollectionFieldSearchCriteriaDto as CollectionFieldSearchCriteria,
AnyNumberPropertySearchCriteriaDto as AnyNumberPropertySearchCriteria,
TextAttributeSearchCriteriaDto as TextAttributeSearchCriteria,
DateLaterThanOrEqualToValueDto as DateLaterThanOrEqualToValue,
NumberLessThanValueDto as NumberLessThanValue,
SamplePropertySearchCriteriaDto as SamplePropertySearchCriteria,
StringGreaterThanOrEqualToValueDto as StringGreaterThanOrEqualToValue,
AnyStringValueDto as AnyStringValue,
AbstractObjectSearchCriteriaDto as AbstractObjectSearchCriteria,
DateObjectLaterThanOrEqualToValueDto as DateObjectLaterThanOrEqualToValue,
RegistrationDateSearchCriteriaDto as RegistrationDateSearchCriteria,
AbstractStringValueDto as AbstractStringValue,
StringMatchesValueDto as StringMatchesValue,
StringEqualToValueDto as StringEqualToValue,
IdentifierSearchCriteriaDto as IdentifierSearchCriteria,
TechIdSearchCriteriaDto as TechIdSearchCriteria,
AbstractValueDto as AbstractValue,
SearchObjectsOperationDto as SearchObjectsOperation,
AnyFieldSearchCriteriaDto as AnyFieldSearchCriteria,
SearchOperatorDto as SearchOperator,
TimeZoneDto as TimeZone,
NumberGreaterThanOrEqualToValueDto as NumberGreaterThanOrEqualToValue,
ISearchCriteriaDto as ISearchCriteria,
LongDateFormatDto as LongDateFormat,
CodeSearchCriteriaDto as CodeSearchCriteria,
AbstractDateValueDto as AbstractDateValue,
StringContainsExactlyValueDto as StringContainsExactlyValue,
NumberLessThanOrEqualToValueDto as NumberLessThanOrEqualToValue,
PermIdSearchCriteriaDto as PermIdSearchCriteria,
EnumFieldSearchCriteriaDto as EnumFieldSearchCriteria,
DatePropertySearchCriteriaDto as DatePropertySearchCriteria,
ITimeZoneDto as ITimeZone,
StringStartsWithValueDto as StringStartsWithValue,
DateEarlierThanOrEqualToValueDto as DateEarlierThanOrEqualToValue,
SearchObjectsOperationResultDto as SearchObjectsOperationResult,
StringFieldSearchCriteriaDto as StringFieldSearchCriteria,
StringPropertySearchCriteriaDto as StringPropertySearchCriteria,
BooleanFieldSearchCriteriaDto as BooleanFieldSearchCriteria,
IdSearchCriteriaDto as IdSearchCriteria,
AbstractEntitySearchCriteriaDto as AbstractEntitySearchCriteria,
NumberGreaterThanValueDto as NumberGreaterThanValue,
AnyStringPropertySearchCriteriaDto as AnyStringPropertySearchCriteria,
AbstractSearchCriteriaDto as AbstractSearchCriteria,
AbstractTimeZoneValueDto as AbstractTimeZoneValue,
StringEndsWithValueDto as StringEndsWithValue,
DateObjectLaterThanValueDto as DateObjectLaterThanValue,
AbstractCompositeSearchCriteriaDto as AbstractCompositeSearchCriteria,
NameSearchCriteriaDto as NameSearchCriteria,
IdsSearchCriteriaDto as IdsSearchCriteria,
SearchResultDto as SearchResult,
DateEqualToValueDto as DateEqualToValue,
AbstractDateObjectValueDto as AbstractDateObjectValue,
StringContainsValueDto as StringContainsValue,
DateFieldSearchCriteriaDto as DateFieldSearchCriteria,
IDateFormatDto as IDateFormat,
ServerTimeZoneDto as ServerTimeZone,
StringLessThanValueDto as StringLessThanValue,
StringGreaterThanValueDto as StringGreaterThanValue,
DateEarlierThanValueDto as DateEarlierThanValue,
NumberFieldSearchCriteriaDto as NumberFieldSearchCriteria,
AbstractFieldSearchCriteriaDto as AbstractFieldSearchCriteria,
NumberPropertySearchCriteriaDto as NumberPropertySearchCriteria,
NormalDateFormatDto as NormalDateFormat,
TableLongCellDto as TableLongCell,
EnumDto as Enum,
TableDoubleCellDto as TableDoubleCell,
ISemanticAnnotationsHolderDto as ISemanticAnnotationsHolder,
SortIgnoreDto as SortIgnore,
IMaterialPropertiesHolderDto as IMaterialPropertiesHolder,
INameHolderDto as INameHolder,
ISampleHolderDto as ISampleHolder,
IMetaDataUpdateHolderDto as IMetaDataUpdateHolder,
IValidationPluginHolderDto as IValidationPluginHolder,
IParentChildrenHolderDto as IParentChildrenHolder,
IRegistratorHolderDto as IRegistratorHolder,
IModifierHolderDto as IModifierHolder,
IDataSetsHolderDto as IDataSetsHolder,
IIdentifierHolderDto as IIdentifierHolder,
IProjectsHolderDto as IProjectsHolder,
ISamplesHolderDto as ISamplesHolder,
IAttachmentsHolderDto as IAttachmentsHolder,
ICodeHolderDto as ICodeHolder,
IMaterialsHolderDto as IMaterialsHolder,
IPropertyTypeHolderDto as IPropertyTypeHolder,
IPropertiesHolderDto as IPropertiesHolder,
IOwnerHolderDto as IOwnerHolder,
IExperimentsHolderDto as IExperimentsHolder,
IDescriptionHolderDto as IDescriptionHolder,
IDataSetCodesHolderDto as IDataSetCodesHolder,
ITagsHolderDto as ITagsHolder,
IRegistrationDateHolderDto as IRegistrationDateHolder,
ILabelHolderDto as ILabelHolder,
IPermIdHolderDto as IPermIdHolder,
ISpaceHolderDto as ISpaceHolder,
IPropertyAssignmentsHolderDto as IPropertyAssignmentsHolder,
IEntityTypeHolderDto as IEntityTypeHolder,
IProjectHolderDto as IProjectHolder,
IExperimentHolderDto as IExperimentHolder,
IModificationDateHolderDto as IModificationDateHolder,
IEntityTypeDto as IEntityType,
ICreationIdHolderDto as ICreationIdHolder,
ICreationDto as ICreation,
IObjectCreationDto as IObjectCreation,
CreateObjectsOperationDto as CreateObjectsOperation,
CreateObjectsOperationResultDto as CreateObjectsOperationResult,
IOperationDto as IOperation,
IOperationResultDto as IOperationResult,
IOperationExecutionErrorDto as IOperationExecutionError,
IOperationExecutionProgressDto as IOperationExecutionProgress,
AbstractObjectDeletionOptionsDto as AbstractObjectDeletionOptions,
DeletedObjectFetchOptionsDto as DeletedObjectFetchOptions,
DeletionFetchOptionsDto as DeletionFetchOptions,
DeletionSortOptionsDto as DeletionSortOptions,
DeletionTechIdDto as DeletionTechId,
IDeletionIdDto as IDeletionId,
SearchDeletionsOperationResultDto as SearchDeletionsOperationResult,
DeletionSearchCriteriaDto as DeletionSearchCriteria,
SearchDeletionsOperationDto as SearchDeletionsOperation,
DeletionDto as Deletion,
DeletedObjectDto as DeletedObject,
ConfirmDeletionsOperationDto as ConfirmDeletionsOperation,
ConfirmDeletionsOperationResultDto as ConfirmDeletionsOperationResult,
RevertDeletionsOperationResultDto as RevertDeletionsOperationResult,
RevertDeletionsOperationDto as RevertDeletionsOperation,
QueryDatabaseDto as QueryDatabase,
QueryDeletionOptionsDto as QueryDeletionOptions,
DeleteQueriesOperationDto as DeleteQueriesOperation,
DeleteQueriesOperationResultDto as DeleteQueriesOperationResult,
QuerySortOptionsDto as QuerySortOptions,
QueryDatabaseSortOptionsDto as QueryDatabaseSortOptions,
QueryFetchOptionsDto as QueryFetchOptions,
QueryDatabaseFetchOptionsDto as QueryDatabaseFetchOptions,
UpdateQueriesOperationResultDto as UpdateQueriesOperationResult,
QueryUpdateDto as QueryUpdate,
UpdateQueriesOperationDto as UpdateQueriesOperation,
IQueryDatabaseIdDto as IQueryDatabaseId,
QueryDatabaseNameDto as QueryDatabaseName,
QueryNameDto as QueryName,
IQueryIdDto as IQueryId,
QueryTechIdDto as QueryTechId,
GetQueryDatabasesOperationResultDto as GetQueryDatabasesOperationResult,
GetQueriesOperationResultDto as GetQueriesOperationResult,
GetQueryDatabasesOperationDto as GetQueryDatabasesOperation,
GetQueriesOperationDto as GetQueriesOperation,
QueryTypeSearchCriteriaDto as QueryTypeSearchCriteria,
SqlSearchCriteriaDto as SqlSearchCriteria,
DatabaseIdSearchCriteriaDto as DatabaseIdSearchCriteria,
EntityTypeCodePatternSearchCriteriaDto as EntityTypeCodePatternSearchCriteria,
SearchQueryDatabasesOperationResultDto as SearchQueryDatabasesOperationResult,
SearchQueryDatabasesOperationDto as SearchQueryDatabasesOperation,
SearchQueriesOperationDto as SearchQueriesOperation,
QuerySearchCriteriaDto as QuerySearchCriteria,
QueryDatabaseSearchCriteriaDto as QueryDatabaseSearchCriteria,
SearchQueriesOperationResultDto as SearchQueriesOperationResult,
QueryDto as Query,
CreateQueriesOperationResultDto as CreateQueriesOperationResult,
QueryCreationDto as QueryCreation,
CreateQueriesOperationDto as CreateQueriesOperation,
SqlExecutionOptionsDto as SqlExecutionOptions,
ExecuteSqlOperationResultDto as ExecuteSqlOperationResult,
ExecuteQueryOperationDto as ExecuteQueryOperation,
QueryExecutionOptionsDto as QueryExecutionOptions,
ExecuteSqlOperationDto as ExecuteSqlOperation,
ExecuteQueryOperationResultDto as ExecuteQueryOperationResult,
QueryTypeDto as QueryType,
DeleteAuthorizationGroupsOperationResultDto as DeleteAuthorizationGroupsOperationResult,
AuthorizationGroupDeletionOptionsDto as AuthorizationGroupDeletionOptions,
DeleteAuthorizationGroupsOperationDto as DeleteAuthorizationGroupsOperation,
AuthorizationGroupSortOptionsDto as AuthorizationGroupSortOptions,
AuthorizationGroupFetchOptionsDto as AuthorizationGroupFetchOptions,
UpdateAuthorizationGroupsOperationDto as UpdateAuthorizationGroupsOperation,
UpdateAuthorizationGroupsOperationResultDto as UpdateAuthorizationGroupsOperationResult,
AuthorizationGroupUpdateDto as AuthorizationGroupUpdate,
AuthorizationGroupPermIdDto as AuthorizationGroupPermId,
IAuthorizationGroupIdDto as IAuthorizationGroupId,
GetAuthorizationGroupsOperationResultDto as GetAuthorizationGroupsOperationResult,
GetAuthorizationGroupsOperationDto as GetAuthorizationGroupsOperation,
AuthorizationGroupSearchCriteriaDto as AuthorizationGroupSearchCriteria,
SearchAuthorizationGroupsOperationDto as SearchAuthorizationGroupsOperation,
SearchAuthorizationGroupsOperationResultDto as SearchAuthorizationGroupsOperationResult,
AuthorizationGroupDto as AuthorizationGroup,
AuthorizationGroupCreationDto as AuthorizationGroupCreation,
CreateAuthorizationGroupsOperationResultDto as CreateAuthorizationGroupsOperationResult,
CreateAuthorizationGroupsOperationDto as CreateAuthorizationGroupsOperation,
EntityKindDto as EntityKind,
EntityTypeSortOptionsDto as EntityTypeSortOptions,
EntityTypeFetchOptionsDto as EntityTypeFetchOptions,
IEntityTypeUpdateDto as IEntityTypeUpdate,
PropertyAssignmentListUpdateValueDto as PropertyAssignmentListUpdateValue,
EntityTypePermIdDto as EntityTypePermId,
IEntityTypeIdDto as IEntityTypeId,
EntityKindSearchCriteriaDto as EntityKindSearchCriteria,
AbstractEntityTypeSearchCriteriaDto as AbstractEntityTypeSearchCriteria,
EntityTypeSearchCriteriaDto as EntityTypeSearchCriteria,
IEntityTypeCreationDto as IEntityTypeCreation,
PersonalAccessTokenDeletionOptionsDto as PersonalAccessTokenDeletionOptions,
DeletePersonalAccessTokensOperationDto as DeletePersonalAccessTokensOperation,
DeletePersonalAccessTokensOperationResultDto as DeletePersonalAccessTokensOperationResult,
PersonalAccessTokenFetchOptionsDto as PersonalAccessTokenFetchOptions,
PersonalAccessTokenSortOptionsDto as PersonalAccessTokenSortOptions,
UpdatePersonalAccessTokensOperationDto as UpdatePersonalAccessTokensOperation,
PersonalAccessTokenUpdateDto as PersonalAccessTokenUpdate,
UpdatePersonalAccessTokensOperationResultDto as UpdatePersonalAccessTokensOperationResult,
IPersonalAccessTokenIdDto as IPersonalAccessTokenId,
PersonalAccessTokenPermIdDto as PersonalAccessTokenPermId,
GetPersonalAccessTokensOperationDto as GetPersonalAccessTokensOperation,
GetPersonalAccessTokensOperationResultDto as GetPersonalAccessTokensOperationResult,
PersonalAccessTokenSearchCriteriaDto as PersonalAccessTokenSearchCriteria,
PersonalAccessTokenSessionNameSearchCriteriaDto as PersonalAccessTokenSessionNameSearchCriteria,
PersonalAccessTokenOwnerSearchCriteriaDto as PersonalAccessTokenOwnerSearchCriteria,
SearchPersonalAccessTokensOperationDto as SearchPersonalAccessTokensOperation,
SearchPersonalAccessTokensOperationResultDto as SearchPersonalAccessTokensOperationResult,
PersonalAccessTokenDto as PersonalAccessToken,
CreatePersonalAccessTokensOperationResultDto as CreatePersonalAccessTokensOperationResult,
PersonalAccessTokenCreationDto as PersonalAccessTokenCreation,
CreatePersonalAccessTokensOperationDto as CreatePersonalAccessTokensOperation,
RightDto as Right,
RightsFetchOptionsDto as RightsFetchOptions,
GetRightsOperationDto as GetRightsOperation,
GetRightsOperationResultDto as GetRightsOperationResult,
RightsDto as Rights,
EventSortOptionsDto as EventSortOptions,
EventFetchOptionsDto as EventFetchOptions,
EventTechIdDto as EventTechId,
IEventIdDto as IEventId,
EventSearchCriteriaDto as EventSearchCriteria,
EventEntityRegistrationDateSearchCriteriaDto as EventEntityRegistrationDateSearchCriteria,
EventIdentifierSearchCriteriaDto as EventIdentifierSearchCriteria,
SearchEventsOperationDto as SearchEventsOperation,
EventReasonSearchCriteriaDto as EventReasonSearchCriteria,
EventEntitySpaceIdSearchCriteriaDto as EventEntitySpaceIdSearchCriteria,
EventEntitySpaceSearchCriteriaDto as EventEntitySpaceSearchCriteria,
EventEntityProjectSearchCriteriaDto as EventEntityProjectSearchCriteria,
SearchEventsOperationResultDto as SearchEventsOperationResult,
EventEntityTypeSearchCriteriaDto as EventEntityTypeSearchCriteria,
EventTypeSearchCriteriaDto as EventTypeSearchCriteria,
EventDescriptionSearchCriteriaDto as EventDescriptionSearchCriteria,
EventEntityRegistratorSearchCriteriaDto as EventEntityRegistratorSearchCriteria,
EventEntityProjectIdSearchCriteriaDto as EventEntityProjectIdSearchCriteria,
EventDto as Event,
EntityTypeDto as EntityType,
EventTypeDto as EventType,
ObjectKindDto as ObjectKind,
OperationKindDto as OperationKind,
ObjectKindModificationFetchOptionsDto as ObjectKindModificationFetchOptions,
ObjectKindModificationSortOptionsDto as ObjectKindModificationSortOptions,
SearchObjectKindModificationsOperationDto as SearchObjectKindModificationsOperation,
ObjectKindCriteriaDto as ObjectKindCriteria,
SearchObjectKindModificationsOperationResultDto as SearchObjectKindModificationsOperationResult,
OperationKindCriteriaDto as OperationKindCriteria,
ObjectKindModificationSearchCriteriaDto as ObjectKindModificationSearchCriteria,
ObjectKindModificationDto as ObjectKindModification,
HistoryEntryDto as HistoryEntry,
HistoryEntrySortOptionsDto as HistoryEntrySortOptions,
HistoryEntryFetchOptionsDto as HistoryEntryFetchOptions,
UnknownRelatedObjectIdDto as UnknownRelatedObjectId,
IRelationTypeDto as IRelationType,
RelationHistoryEntryDto as RelationHistoryEntry,
ContentCopyHistoryEntryDto as ContentCopyHistoryEntry,
PropertyHistoryEntryDto as PropertyHistoryEntry,
OperationExecutionProgressDto as OperationExecutionProgress,
SynchronousOperationExecutionOptionsDto as SynchronousOperationExecutionOptions,
OperationExecutionStateDto as OperationExecutionState,
SynchronousOperationExecutionResultsDto as SynchronousOperationExecutionResults,
DeleteOperationExecutionsOperationResultDto as DeleteOperationExecutionsOperationResult,
DeleteOperationExecutionsOperationDto as DeleteOperationExecutionsOperation,
OperationExecutionDeletionOptionsDto as OperationExecutionDeletionOptions,
IOperationExecutionResultsDto as IOperationExecutionResults,
OperationExecutionDetailsSortOptionsDto as OperationExecutionDetailsSortOptions,
OperationExecutionNotificationFetchOptionsDto as OperationExecutionNotificationFetchOptions,
OperationExecutionSummaryFetchOptionsDto as OperationExecutionSummaryFetchOptions,
OperationExecutionSummarySortOptionsDto as OperationExecutionSummarySortOptions,
OperationExecutionSortOptionsDto as OperationExecutionSortOptions,
OperationExecutionDetailsFetchOptionsDto as OperationExecutionDetailsFetchOptions,
OperationExecutionNotificationSortOptionsDto as OperationExecutionNotificationSortOptions,
OperationExecutionFetchOptionsDto as OperationExecutionFetchOptions,
UpdateOperationExecutionsOperationDto as UpdateOperationExecutionsOperation,
UpdateOperationExecutionsOperationResultDto as UpdateOperationExecutionsOperationResult,
OperationExecutionUpdateDto as OperationExecutionUpdate,
IOperationExecutionNotificationDto as IOperationExecutionNotification,
OperationExecutionPermIdDto as OperationExecutionPermId,
IOperationExecutionIdDto as IOperationExecutionId,
GetOperationExecutionsOperationDto as GetOperationExecutionsOperation,
GetOperationExecutionsOperationResultDto as GetOperationExecutionsOperationResult,
SearchOperationExecutionsOperationResultDto as SearchOperationExecutionsOperationResult,
SearchOperationExecutionsOperationDto as SearchOperationExecutionsOperation,
OperationExecutionSearchCriteriaDto as OperationExecutionSearchCriteria,
OperationExecutionErrorDto as OperationExecutionError,
OperationExecutionDto as OperationExecution,
OperationExecutionDetailsDto as OperationExecutionDetails,
AsynchronousOperationExecutionResultsDto as AsynchronousOperationExecutionResults,
IOperationExecutionOptionsDto as IOperationExecutionOptions,
OperationExecutionEmailNotificationDto as OperationExecutionEmailNotification,
AbstractOperationExecutionOptionsDto as AbstractOperationExecutionOptions,
AsynchronousOperationExecutionOptionsDto as AsynchronousOperationExecutionOptions,
OperationExecutionSummaryDto as OperationExecutionSummary,
OperationExecutionAvailabilityDto as OperationExecutionAvailability,
DeleteRoleAssignmentsOperationDto as DeleteRoleAssignmentsOperation,
DeleteRoleAssignmentsOperationResultDto as DeleteRoleAssignmentsOperationResult,
RoleAssignmentDeletionOptionsDto as RoleAssignmentDeletionOptions,
RoleLevelDto as RoleLevel,
RoleAssignmentSortOptionsDto as RoleAssignmentSortOptions,
RoleAssignmentFetchOptionsDto as RoleAssignmentFetchOptions,
IRoleAssignmentIdDto as IRoleAssignmentId,
RoleAssignmentTechIdDto as RoleAssignmentTechId,
GetRoleAssignmentsOperationDto as GetRoleAssignmentsOperation,
GetRoleAssignmentsOperationResultDto as GetRoleAssignmentsOperationResult,
RoleAssignmentDto as RoleAssignment,
SearchRoleAssignmentsOperationDto as SearchRoleAssignmentsOperation,
RoleAssignmentSearchCriteriaDto as RoleAssignmentSearchCriteria,
SearchRoleAssignmentsOperationResultDto as SearchRoleAssignmentsOperationResult,
CreateRoleAssignmentsOperationResultDto as CreateRoleAssignmentsOperationResult,
CreateRoleAssignmentsOperationDto as CreateRoleAssignmentsOperation,
RoleAssignmentCreationDto as RoleAssignmentCreation,
RoleDto as Role,
DataStoreFetchOptionsDto as DataStoreFetchOptions,
DataStoreSortOptionsDto as DataStoreSortOptions,
DataStorePermIdDto as DataStorePermId,
IDataStoreIdDto as IDataStoreId,
SearchDataStoresOperationDto as SearchDataStoresOperation,
SearchDataStoresOperationResultDto as SearchDataStoresOperationResult,
DataStoreSearchCriteriaDto as DataStoreSearchCriteria,
DataStoreDto as DataStore,
SessionInformationDto as SessionInformation,
SessionInformationFetchOptionsDto as SessionInformationFetchOptions,
SessionInformationSortOptionsDto as SessionInformationSortOptions,
ISessionInformationIdDto as ISessionInformationId,
SessionInformationPermIdDto as SessionInformationPermId,
GetSessionInformationOperationDto as GetSessionInformationOperation,
GetSessionInformationOperationResultDto as GetSessionInformationOperationResult,
SearchSessionInformationOperationResultDto as SearchSessionInformationOperationResult,
UserNameSearchCriteriaDto as UserNameSearchCriteria,
SessionInformationSearchCriteriaDto as SessionInformationSearchCriteria,
PersonalAccessTokenSessionSearchCriteriaDto as PersonalAccessTokenSessionSearchCriteria,
SearchSessionInformationOperationDto as SearchSessionInformationOperation,
StorageFormatDto as StorageFormat,
DeleteDataSetTypesOperationDto as DeleteDataSetTypesOperation,
DataSetDeletionOptionsDto as DataSetDeletionOptions,
DataSetTypeDeletionOptionsDto as DataSetTypeDeletionOptions,
DeleteDataSetTypesOperationResultDto as DeleteDataSetTypesOperationResult,
DeleteDataSetsOperationDto as DeleteDataSetsOperation,
DeleteDataSetsOperationResultDto as DeleteDataSetsOperationResult,
DataSetKindDto as DataSetKind,
LocatorTypeDto as LocatorType,
PhysicalDataSortOptionsDto as PhysicalDataSortOptions,
LinkedDataFetchOptionsDto as LinkedDataFetchOptions,
DataSetSortOptionsDto as DataSetSortOptions,
LinkedDataSortOptionsDto as LinkedDataSortOptions,
LocatorTypeSortOptionsDto as LocatorTypeSortOptions,
DataSetFetchOptionsDto as DataSetFetchOptions,
FileFormatTypeSortOptionsDto as FileFormatTypeSortOptions,
PhysicalDataFetchOptionsDto as PhysicalDataFetchOptions,
DataSetTypeFetchOptionsDto as DataSetTypeFetchOptions,
FileFormatTypeFetchOptionsDto as FileFormatTypeFetchOptions,
LocatorTypeFetchOptionsDto as LocatorTypeFetchOptions,
StorageFormatFetchOptionsDto as StorageFormatFetchOptions,
StorageFormatSortOptionsDto as StorageFormatSortOptions,
DataSetTypeSortOptionsDto as DataSetTypeSortOptions,
UpdateDataSetsOperationResultDto as UpdateDataSetsOperationResult,
UpdateDataSetsOperationDto as UpdateDataSetsOperation,
PhysicalDataUpdateDto as PhysicalDataUpdate,
LinkedDataUpdateDto as LinkedDataUpdate,
DataSetTypeUpdateDto as DataSetTypeUpdate,
UpdateDataSetTypesOperationResultDto as UpdateDataSetTypesOperationResult,
UpdateDataSetTypesOperationDto as UpdateDataSetTypesOperation,
DataSetUpdateDto as DataSetUpdate,
ContentCopyListUpdateValueDto as ContentCopyListUpdateValue,
DataSetDto as DataSet,
IContentCopyIdDto as IContentCopyId,
FileFormatTypePermIdDto as FileFormatTypePermId,
IDataSetIdDto as IDataSetId,
IStorageFormatIdDto as IStorageFormatId,
IFileFormatTypeIdDto as IFileFormatTypeId,
ContentCopyPermIdDto as ContentCopyPermId,
RelativeLocationLocatorTypePermIdDto as RelativeLocationLocatorTypePermId,
DataSetPermIdDto as DataSetPermId,
StorageFormatPermIdDto as StorageFormatPermId,
ILocatorTypeIdDto as ILocatorTypeId,
ProprietaryStorageFormatPermIdDto as ProprietaryStorageFormatPermId,
BdsDirectoryStorageFormatPermIdDto as BdsDirectoryStorageFormatPermId,
LocatorTypePermIdDto as LocatorTypePermId,
ContentCopyDto as ContentCopy,
GetDataSetsOperationResultDto as GetDataSetsOperationResult,
GetDataSetTypesOperationResultDto as GetDataSetTypesOperationResult,
GetDataSetTypesOperationDto as GetDataSetTypesOperation,
GetDataSetsOperationDto as GetDataSetsOperation,
SearchDataSetTypesOperationResultDto as SearchDataSetTypesOperationResult,
LocationSearchCriteriaDto as LocationSearchCriteria,
ExternalCodeSearchCriteriaDto as ExternalCodeSearchCriteria,
PresentInArchiveSearchCriteriaDto as PresentInArchiveSearchCriteria,
LinkedDataSearchCriteriaDto as LinkedDataSearchCriteria,
DataSetSearchCriteriaDto as DataSetSearchCriteria,
FileFormatTypeSearchCriteriaDto as FileFormatTypeSearchCriteria,
PhysicalDataSearchCriteriaDto as PhysicalDataSearchCriteria,
StatusSearchCriteriaDto as StatusSearchCriteria,
LocatorTypeSearchCriteriaDto as LocatorTypeSearchCriteria,
SpeedHintSearchCriteriaDto as SpeedHintSearchCriteria,
GitRepositoryIdSearchCriteriaDto as GitRepositoryIdSearchCriteria,
DataSetSearchRelationDto as DataSetSearchRelation,
GitCommitHashSearchCriteriaDto as GitCommitHashSearchCriteria,
ArchivingRequestedSearchCriteriaDto as ArchivingRequestedSearchCriteria,
StorageConfirmationSearchCriteriaDto as StorageConfirmationSearchCriteria,
ShareIdSearchCriteriaDto as ShareIdSearchCriteria,
CompleteSearchCriteriaDto as CompleteSearchCriteria,
SearchDataSetTypesOperationDto as SearchDataSetTypesOperation,
SizeSearchCriteriaDto as SizeSearchCriteria,
PathSearchCriteriaDto as PathSearchCriteria,
DataSetTypeSearchCriteriaDto as DataSetTypeSearchCriteria,
ContentCopySearchCriteriaDto as ContentCopySearchCriteria,
StorageFormatSearchCriteriaDto as StorageFormatSearchCriteria,
SearchDataSetsOperationDto as SearchDataSetsOperation,
SearchDataSetsOperationResultDto as SearchDataSetsOperationResult,
UnlockDataSetsOperationDto as UnlockDataSetsOperation,
DataSetUnlockOptionsDto as DataSetUnlockOptions,
UnlockDataSetsOperationResultDto as UnlockDataSetsOperationResult,
LinkedDataDto as LinkedData,
LockDataSetsOperationDto as LockDataSetsOperation,
DataSetLockOptionsDto as DataSetLockOptions,
LockDataSetsOperationResultDto as LockDataSetsOperationResult,
ArchivingStatusDto as ArchivingStatus,
DataSetTypeDto as DataSetType,
UnarchiveDataSetsOperationDto as UnarchiveDataSetsOperation,
UnarchiveDataSetsOperationResultDto as UnarchiveDataSetsOperationResult,
DataSetUnarchiveOptionsDto as DataSetUnarchiveOptions,
CompleteDto as Complete,
ArchiveDataSetsOperationDto as ArchiveDataSetsOperation,
DataSetArchiveOptionsDto as DataSetArchiveOptions,
ArchiveDataSetsOperationResultDto as ArchiveDataSetsOperationResult,
FileFormatTypeDto as FileFormatType,
LinkedDataCreationDto as LinkedDataCreation,
CreateDataSetTypesOperationResultDto as CreateDataSetTypesOperationResult,
DataSetCreationDto as DataSetCreation,
CreateDataSetsOperationDto as CreateDataSetsOperation,
CreateDataSetTypesOperationDto as CreateDataSetTypesOperation,
ContentCopyCreationDto as ContentCopyCreation,
DataSetTypeCreationDto as DataSetTypeCreation,
CreateDataSetsOperationResultDto as CreateDataSetsOperationResult,
DataSetRelationTypeDto as DataSetRelationType,
PhysicalDataDto as PhysicalData,
CreateCodesOperationResultDto as CreateCodesOperationResult,
CreatePermIdsOperationResultDto as CreatePermIdsOperationResult,
CreateCodesOperationDto as CreateCodesOperation,
CreatePermIdsOperationDto as CreatePermIdsOperation,
WebAppSettingsSortOptionsDto as WebAppSettingsSortOptions,
WebAppSettingsFetchOptionsDto as WebAppSettingsFetchOptions,
WebAppSettingsUpdateValueDto as WebAppSettingsUpdateValue,
WebAppSettingDto as WebAppSetting,
WebAppSettingCreationDto as WebAppSettingCreation,
WebAppSettingsDto as WebAppSettings,
DeletePluginsOperationDto as DeletePluginsOperation,
DeletePluginsOperationResultDto as DeletePluginsOperationResult,
PluginDeletionOptionsDto as PluginDeletionOptions,
EvaluatePluginOperationResultDto as EvaluatePluginOperationResult,
EntityValidationPluginEvaluationResultDto as EntityValidationPluginEvaluationResult,
EntityValidationPluginEvaluationOptionsDto as EntityValidationPluginEvaluationOptions,
DynamicPropertyPluginEvaluationResultDto as DynamicPropertyPluginEvaluationResult,
PluginEvaluationResultDto as PluginEvaluationResult,
EvaluatePluginOperationDto as EvaluatePluginOperation,
PluginEvaluationOptionsDto as PluginEvaluationOptions,
DynamicPropertyPluginEvaluationOptionsDto as DynamicPropertyPluginEvaluationOptions,
PluginSortOptionsDto as PluginSortOptions,
PluginFetchOptionsDto as PluginFetchOptions,
UpdatePluginsOperationDto as UpdatePluginsOperation,
PluginUpdateDto as PluginUpdate,
UpdatePluginsOperationResultDto as UpdatePluginsOperationResult,
PluginDto as Plugin,
IPluginIdDto as IPluginId,
PluginPermIdDto as PluginPermId,
GetPluginsOperationDto as GetPluginsOperation,
GetPluginsOperationResultDto as GetPluginsOperationResult,
PluginKindDto as PluginKind,
PluginTypeSearchCriteriaDto as PluginTypeSearchCriteria,
SearchPluginsOperationDto as SearchPluginsOperation,
SearchPluginsOperationResultDto as SearchPluginsOperationResult,
PluginKindSearchCriteriaDto as PluginKindSearchCriteria,
PluginSearchCriteriaDto as PluginSearchCriteria,
CreatePluginsOperationDto as CreatePluginsOperation,
CreatePluginsOperationResultDto as CreatePluginsOperationResult,
PluginCreationDto as PluginCreation,
PluginTypeDto as PluginType,
DeleteVocabulariesOperationResultDto as DeleteVocabulariesOperationResult,
VocabularyDeletionOptionsDto as VocabularyDeletionOptions,
DeleteVocabulariesOperationDto as DeleteVocabulariesOperation,
VocabularyTermReplacementDto as VocabularyTermReplacement,
DeleteVocabularyTermsOperationResultDto as DeleteVocabularyTermsOperationResult,
DeleteVocabularyTermsOperationDto as DeleteVocabularyTermsOperation,
VocabularyTermDeletionOptionsDto as VocabularyTermDeletionOptions,
VocabularyTermSortOptionsDto as VocabularyTermSortOptions,
VocabularyFetchOptionsDto as VocabularyFetchOptions,
VocabularySortOptionsDto as VocabularySortOptions,
VocabularyTermFetchOptionsDto as VocabularyTermFetchOptions,
UpdateVocabulariesOperationDto as UpdateVocabulariesOperation,
VocabularyTermUpdateDto as VocabularyTermUpdate,
VocabularyUpdateDto as VocabularyUpdate,
UpdateVocabulariesOperationResultDto as UpdateVocabulariesOperationResult,
UpdateVocabularyTermsOperationDto as UpdateVocabularyTermsOperation,
UpdateVocabularyTermsOperationResultDto as UpdateVocabularyTermsOperationResult,
VocabularyDto as Vocabulary,
VocabularyPermIdDto as VocabularyPermId,
IVocabularyIdDto as IVocabularyId,
IVocabularyTermIdDto as IVocabularyTermId,
VocabularyTermPermIdDto as VocabularyTermPermId,
GetVocabulariesOperationResultDto as GetVocabulariesOperationResult,
GetVocabulariesOperationDto as GetVocabulariesOperation,
GetVocabularyTermsOperationDto as GetVocabularyTermsOperation,
GetVocabularyTermsOperationResultDto as GetVocabularyTermsOperationResult,
SearchVocabulariesOperationResultDto as SearchVocabulariesOperationResult,
SearchVocabulariesOperationDto as SearchVocabulariesOperation,
VocabularySearchCriteriaDto as VocabularySearchCriteria,
VocabularyTermSearchCriteriaDto as VocabularyTermSearchCriteria,
SearchVocabularyTermsOperationResultDto as SearchVocabularyTermsOperationResult,
SearchVocabularyTermsOperationDto as SearchVocabularyTermsOperation,
VocabularyTermDto as VocabularyTerm,
VocabularyCreationDto as VocabularyCreation,
CreateVocabulariesOperationDto as CreateVocabulariesOperation,
CreateVocabularyTermsOperationResultDto as CreateVocabularyTermsOperationResult,
CreateVocabulariesOperationResultDto as CreateVocabulariesOperationResult,
CreateVocabularyTermsOperationDto as CreateVocabularyTermsOperation,
VocabularyTermCreationDto as VocabularyTermCreation
}
