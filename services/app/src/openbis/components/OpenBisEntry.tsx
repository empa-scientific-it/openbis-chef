

import { SampleType, DataType } from "@src/types/openbis"
import "./EntryForm.css"
import {mapDataTypeToInputType} from "@src/openbis/typeMappers"
type Props = {
    objectType: SampleType
}


function OpenBisEntry({ objectType }: Props) {

    function mapTypeToInput(type: DataType) {
        console.log(type)
        switch (type) {
            case "INTEGER":
            case "REAL":
                return "number"
            case "BOOLEAN":
                return "checkbox"
            case "DATE":
                return "date"
            case "TIMESTAMP":
                return "datetime-local"
            default:
                return "text"
        }
    }

    return (
        <div>
            <form className="form-container">

                {objectType.propertyAssignments.map((el) => <label className="form-label" key={el.propertyType.code}>{el.propertyType.code}<input className="form-input" type={mapDataTypeToInputType(el.propertyType.dataType)} /></label>)}

            </form>
        </div>

    )
}

export default OpenBisEntry