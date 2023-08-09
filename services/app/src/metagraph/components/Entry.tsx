import React, { useState, useContext, useEffect } from 'react';
import { EntryNode } from '@src/metagraph/metagraph';
import { AuthContext } from '@src/openbis/AuthContext';
import { SampleType } from '@src/types/openbis';
import OpenBisEntry from '@src/openbis/components/OpenBisEntry';
import  V3API from 'v3api/V3API.esm';


type Props = {
    node: EntryNode
}

function Entry({ node }: Props) {
    const { token, setToken, loggedIn, setLoggedIn, login, service, loginAndThen, logout } = useContext(AuthContext)
    const [inputValue, setInputValue] = useState('');
    const [entity, setEntity] = useState({} as SampleType);
    const [entityAvailable, setEntityAvailable] = useState(false);

    useEffect(() => {
        const ssc = new V3API.SampleTypeSearchCriteria()
        ssc.withCode().thatEquals(node.entityType)
        const sfo = new V3API.SampleTypeFetchOptions()
        sfo.withPropertyAssignments().withPropertyType()
        if (loggedIn) {
            service.searchSampleTypes(ssc, sfo).then((res) => {
                if (res.totalCount > 0) {
                    setEntity(() => res.objects[0])
                    setEntityAvailable(true)
                }
            }
            )
        }
    }, [node.entityType, loggedIn])

    // Render input fields and entity settings
    return (
        <div>
            <div>Create new entry of type {node.entityType}</div>
            {entityAvailable ? <OpenBisEntry objectType={entity} /> : null}
        </div>
    );
}

export default Entry;