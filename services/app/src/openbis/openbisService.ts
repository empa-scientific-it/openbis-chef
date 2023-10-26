// import openbis from "@src/services/openbis";

import { Facade } from "./api";
import {
  SampleFetchOptions,
  SampleSearchCriteria,
  SampleTypeFetchOptions,
  SampleTypeSearchCriteria,
} from "./dto";

export function createSearchCriteria(
  collection: string,
  objectType: string,
  searchTerm: string
) {
  const ssc = new SampleSearchCriteria();
  ssc.withExperiment().withIdentifier().thatEquals(collection);
  ssc.withType().withCode().thatEquals(objectType);

  ssc.withAnyProperty().thatContains(searchTerm);

  console.log(ssc);
  return ssc;
}

export async function performSampleSearch(
  collection: string,
  objectType: string,
  searchTerm: string,
  sfo: typeof SampleFetchOptions,
  service: Facade
) {
  const ssc = createSearchCriteria(collection, objectType, searchTerm);
  const result = await service.searchSamples(ssc, sfo);
  return result;
}

export function sampleFetchOptionsComplete(count: number) {
  const sfo = new SampleFetchOptions();
  const sto: typeof SampleTypeFetchOptions = new SampleTypeFetchOptions();
  const sso: typeof SampleFetchOptions = new SampleFetchOptions();
  sto.withPropertyAssignments().withPropertyType().withVocabulary();
  sso.withProperties();
  sso.withTypeUsing(sto);
  sfo.withProperties();
  sfo.from(0);
  sfo.count(count);
  return sfo;
}

export async function performSampleTypeSearch(code: string, service: Facade) {
  const ssc = new SampleTypeSearchCriteria();
  ssc.withCode().thatEquals(code);
  const sfo = new SampleTypeFetchOptions();
  sfo.withPropertyAssignments().withPropertyType().withVocabulary().withTerms();
  const result = await service.searchSampleTypes(ssc, sfo);
  return result;
}
