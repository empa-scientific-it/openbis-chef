import { DataType, Sample } from "@src/types/openbis";

export function mapDataTypeToInputType(type: DataType){

    switch(type){
        case "BOOLEAN":
            return "checkbox";
        case "DATE":
            return "date";
        case "TIMESTAMP":
            return "datetime-local";
        case "REAL":
            return "number";
        case "INTEGER":
            return "number";
        case "VARCHAR":
            return "string";
        case "MULTILINE_VARCHAR":
            return "string";
        case "XML":
            return "string";
        case "HYPERLINK":
            return "url";
        default:
            return "string";
    }

}

export interface SampleWithTypes{
    sample: Sample;
    properties: { [key: string]: {value: string, type: string} };
}

export function addTypesToSampleEntry(sampleEntry: Sample): SampleWithTypes{

Object.entries(sampleEntry.properties).map(([key, value]) => [key, {value, type: mapDataTypeToInputType(value.type)}])
}