import React, { useState, useContext, useEffect } from 'react';
import { EntryNode } from '@src/metagraph/metagraph';
import { AuthContext } from '@src/openbis/AuthContext';
import { SampleType, SearchResult } from '@src/types/openbis';
import OpenBisEntry from '@src/openbis/components/OpenBisEntry';
import  {SampleTypeSearchCriteria, SampleTypeFetchOptions, SampleCreation, EntityTypePermId} from '@src/openbis/dto';



type Props = {
    node: EntryNode
}

function Entry({ node }: Props) {
    const {  loggedIn, service } = useContext(AuthContext)
    const [inputValue, setInputValue] = useState('');
    const [entity, setEntity] = useState({} as SampleType);
    const [entityAvailable, setEntityAvailable] = useState(false);

    useEffect(() => {
        const ssc = new SampleTypeSearchCriteria()
        ssc.withCode().thatEquals(node.entityType)
        const sfo = new SampleTypeFetchOptions()
        sfo.withPropertyAssignments().withPropertyType()
        if (loggedIn) {
            service.searchSampleTypes(ssc, sfo).then((res:SearchResult<SampleType>) => {
                if (res.totalCount > 0) {
                    setEntity(() => res.objects[0])
                    setEntityAvailable(true)
                }
            }
            )
        }
    }, [node.entityType, loggedIn])

    const handleSave = (event) => {
        event.preventDefault()
        const sample = new SampleCreation()
        sample.setTypeId(new EntityTypePermId(node.entityType));
        console.log(sample)
    }
        

    // Render input fields and entity settings
    return (
        <div>
            <div>Create new entry of type {node.entityType}</div>
            {entityAvailable ? <OpenBisEntry objectType={entity} /> : null}
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default Entry;