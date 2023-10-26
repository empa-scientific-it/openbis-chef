import { useState, useContext, useEffect, useMemo } from "react";
import { AuthContext } from "@src/openbis/AuthContext";
import OpenBisEntry from "@src/openbis/components/OpenBisEntry";
import {
  SampleTypeSearchCriteria,
  SampleTypeFetchOptions,
  SampleType
} from "@src/openbis/dto";
import { OperationContext } from "../OperationContext";
import "./Select.css";
import { performSampleTypeSearch } from "@src/openbis/openbisService";

function Entry() {
  const { loggedIn, service } = useContext(AuthContext);
  const [entity, setEntity] = useState({} as typeof SampleType);
  const [entityAvailable, setEntityAvailable] = useState(false);
  const operationContext = useContext(OperationContext);
  const [properties, setProperties] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (operationContext.currentOperation.type == "create") {
      setProperties(() => operationContext.currentOperation?.objectProperties);
    }
  }, []);

  useMemo(() => {
    const ssc = new SampleTypeSearchCriteria();
    ssc.withCode().thatEquals(operationContext?.currentOperation?.objectType);
    const sfo = new SampleTypeFetchOptions();
    sfo.withPropertyAssignments().withPropertyType().withVocabulary().withTerms();
    if (loggedIn) {
      console.log(service);
      performSampleTypeSearch(
        operationContext?.currentOperation?.objectType,
        service
      ).then((res) => {
        if (res.totalCount > 0) {
          setEntity(() => res.objects[0]);
          setEntityAvailable(true);
        }
      });
    }
  }, [operationContext?.currentOperation?.objectType]);

  // Render input fields and entity settings
  const ui = useMemo(() => {
    return (
      <div className="selection-form">
        <p>
          This step will create a new sample of type{" "}
          {operationContext?.currentOperation?.objectType} in collection{" "}
          {operationContext?.currentOperation?.collectionIdentifier}
        </p>
        {entityAvailable ? (
          <OpenBisEntry
            properties={properties}
            objectType={entity}
          />
        ) : null}
      </div>
    );
  }, [entity, properties]);
  return ui;
}

export default Entry;
