import { CreateOperation, LinkOperation, MetagraphOperations } from "../metagraph";

const OperationInfo = (op: MetagraphOperations) => {
  const CreationInfo = (op: CreateOperation) => {
    return (
      <ul>
        <li>
          <u>Operation type:</u> {op.type}
        </li>
        <li>
          <u>Collection:</u> {op.collectionIdentifier}
        </li>
        <li>
          <u>Object type:</u> {op.objectType}
        </li>
        <li>
          <u>Object properties:</u>
          <ul>
            {Object.keys(op.objectProperties).map((prop, index) => (
              <li key={index}>{Object.keys(op.objectProperties)[index]} = {op.objectProperties[prop]} </li>
            ))}
          </ul>
        </li>
      </ul>
    );
  };

  const LinkInfo = (op: LinkOperation) => {
    return (
      <ul>
        <li>
          <u>Operation type:</u> {op.type}
        </li>
        <li>
          <u>Collection:</u> {op.collectionIdentifier}
        </li>
        <li>
          <u>Selected entity:</u> {op.objectIdentifier}
        </li>
      </ul>
    );
  };

  return <>{op.type === "create" ? CreationInfo(op) : LinkInfo(op)}</>;
};

export default OperationInfo;
