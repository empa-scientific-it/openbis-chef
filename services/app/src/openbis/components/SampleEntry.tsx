

import { SampleType, DataType, Sample } from "@src/types/openbis"
import "./EntryForm.css"
import {mapDataTypeToInputType} from "@src/openbis/typeMappers"

type Props = {
    sample: Sample
}

function SampleEntry({ sample }: Props) {



    return (
        <div>
            {/* Show properties of the sample */}
            <form>
                {Object.entries(sample.properties).map(([name, value], index) => { return <input type=mapDataTypeToInputType={}>{value}</input>})}
            </form>

        </div>

    )
}

export default SampleEntry