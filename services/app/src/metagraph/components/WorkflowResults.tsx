import { Sample } from "@src/openbis/dto";
import ObjectGraph from "./ObjectGraph";

function WorkflowResults({
    sample,
  }: {
    sample: typeof Sample;
  }) {
    return (
      <div className="workflow-graph-container">
        <h2>Workflow results:</h2>
        {sample ? (
          <ObjectGraph samples={[sample]} maxDepth={3} onNodeClick={() => {}} />
        ) : null}
      </div>
    );
  }

export default WorkflowResults;  