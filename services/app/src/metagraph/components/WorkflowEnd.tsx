import React, { useContext, useEffect } from "react";
import { OperationContext } from "../OperationContext";
import { LoggerInterface } from "../useLog";
import Log from "./Log";
import { Sample } from "@src/openbis/dto";
import OperationInfo from "./OperationInfo";
import WorkflowResults from "./WorkflowResults";

const WorkflowEnd = (
  logger: LoggerInterface,
  entryFinished: Boolean,
  hierarchyRoot: typeof Sample,
  onSubmit: () => void
) => {
  const ops = useContext(OperationContext);
  const entries = logger.logEntries();
  return (
    <>
      <h1 className="container-title">Finished workflow </h1>
      <main>
        <h3>Here are the operations that will be performed:</h3>
        <div>
          {ops.operations.map((op) => (
            <div className="operations-list" key={op.operationId}>
              {OperationInfo(op)}
            </div>
          ))}
        </div>
        <div className="operations-log">
          <h3>OpenBIS log:</h3>
          <Log entries={entries} />
        </div>

        {entryFinished && hierarchyRoot ? (
          <WorkflowResults sample={hierarchyRoot} />
        ) : null}
        <button className="clickable-button" onClick={onSubmit}>Submit workflow</button>

      </main>
    </>
  );
};

export default WorkflowEnd;
