import { useState, createContext } from "react";
import { Metagraph } from "./metagraph";
import { useList } from "./useList";

export const useWorkflows = (initialWorkflows: Metagraph[]) => {
  const [currentWorkflow, setCurrentWorkflow] = useState<Metagraph>(initialWorkflows[0]);
  const { find: findWorkflow, add: addWorkflow, list: workflows, set } = useList(initialWorkflows);

  const addOrReplaceWorkflow = (workflow: Metagraph) => {
    const existingWorkflow = findWorkflow((w) => w.name === workflow.name);
    if (existingWorkflow) {
      set(workflow, workflows.indexOf(existingWorkflow));
    } else {
      addWorkflow(workflow);
    }
  };

  const currentWorkflowContext = createContext(currentWorkflow);

  return { currentWorkflow, setCurrentWorkflow, addWorkflow, workflows, addOrReplaceWorkflow, currentWorkflowContext };
};
