

import { SampleType, DataType, Sample } from "@src/types/openbis"
import "./EntryForm.css"
type Props = {
    sample: Sample
}

function SampleEntry({ sample }: Props) {



    return (
        <div>
            {/* Show properties of the sample */}
            <table>
                {Object.entries(sample.properties).map(([name, value], index) => { return <tr key={name}><td>{name}:</td><td>{value}</td></tr> })}
            </table>

        </div>

    )
}

export default SampleEntry