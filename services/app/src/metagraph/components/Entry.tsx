import React, { useState, useContext, useEffect } from 'react';
import { EntryNode, MetagraphComponentProps, MetagraphOperations } from '@src/metagraph/metagraph';
import { AuthContext } from '@src/openbis/AuthContext';
import type { Sample, SampleType, SearchResult } from '@src/types/openbis';
import OpenBisEntry, { ObjectEntry } from '@src/openbis/components/OpenBisEntry';
import { SampleTypeSearchCriteria, SampleTypeFetchOptions, EntityTypePermId, ExperimentIdentifier, SampleCreation } from '@src/openbis/dto';



type EntryNodeProps = MetagraphComponentProps & {
    node: EntryNode
}




function Entry({ node, onFinished }: EntryNodeProps) {
    const { loggedIn, service } = useContext(AuthContext)
    const [inputValue, setInputValue] = useState('');
    const [entity, setEntity] = useState({} as SampleType);
    const [entityAvailable, setEntityAvailable] = useState(false);

    useEffect(() => {
        const ssc = new SampleTypeSearchCriteria()
        ssc.withCode().thatEquals(node.entityType)
        const sfo = new SampleTypeFetchOptions()
        sfo.withPropertyAssignments().withPropertyType()
        if (loggedIn) {
            service.searchSampleTypes(ssc, sfo).then((res: SearchResult<SampleType>) => {
                if (res.totalCount > 0) {
                    setEntity(() => res.objects[0])
                    setEntityAvailable(true)
                }
            }
            )
        }
    }, [node.entityType, loggedIn])


    const handleSampleChange = (newSample: ObjectEntry) => {
        const sample = new SampleCreation() as typeof SampleCreation
        sample.setTypeId(newSample.type.permId)
        sample.setExperimentId(new ExperimentIdentifier(node.collection))
        sample.setProperties(newSample.properties)
        const op = { operationId: node.id, creation: sample } as MetagraphOperations
        onFinished(op)
    }





    // Render input fields and entity settings
    return (
        <div>
            <div>This step will create a new sample of type {node.entityType} in collection {node.collection}</div>
            {entityAvailable ? <OpenBisEntry objectType={entity} onChange={handleSampleChange} /> : null}
        </div>
    );
}

export default Entry;