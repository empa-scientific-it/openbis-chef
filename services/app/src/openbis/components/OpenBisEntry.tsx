

import React, { useContext, useState } from "react"
import { SampleType, DataType, Sample, PropertyType } from "@src/types/openbis"
import "./EntryForm.css"
import { mapDataTypeToInputType } from "@src/openbis/typeMappers"
import { OperationContext } from "@src/metagraph/OperationContext";

export interface ObjectEntry {
    type: SampleType;
    properties: { [key: string]: string };
}

type Props = {
    objectType: SampleType
}


function OpenBisEntry({ objectType }: Props) {

    const workflowOperations = useContext(OperationContext);
    // const [currentObject, setCurrentObject] = useState(workflowOperations.currentOperation.originObject);
    const [objectEntry, setObjectEntry] = useState(objectType)
    const [properties, setProperties] = useState<{ [key: string]: string }>({});

    function handleInput(propertyCode: string) {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value
            const property = objectType.propertyAssignments.find((el) => el.propertyType.code == propertyCode)
            if (property) {
                const newObjectEntry = { type: objectType, properties: { ...properties, [propertyCode]: value } } as ObjectEntry
                setProperties(newObjectEntry.properties)
            }
        }
    }

    function findPropertyValue(propertyCode: string) {
        const property = objectEntry.propertyAssignments.find((el) => el.propertyType.code == propertyCode)
        if (property) {
            return properties[propertyCode]
        }
    }


    return (
        <div>
            <form className="form-container">
                {
                    objectEntry.propertyAssignments.map((el) => {
                        return (
                            <label className="form-label" key={el.propertyType.label}>{el.propertyType.label}
                                <input className="form-input" type={mapDataTypeToInputType(el.propertyType.dataType)} onInput={handleInput(el.propertyType.code)} />    
                            </label>
                        )
                    })
                }
            </form>
        </div>

    )
}

export default OpenBisEntry