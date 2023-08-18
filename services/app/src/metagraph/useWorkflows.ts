import { useEffect, useState } from "react";
import { Metagraph } from "./metagraph";
import { useList } from "./useList";


export const useWorkflows = (initialWorkflows: Metagraph[]) => {

    const [currentWorkflow, setCurrentWorkflow] = useState<Metagraph>(initialWorkflows[0])
    const {find:findWorkflow, add:addWorkflow} = useList(initialWorkflows)

    const selectWorkflow = (id: string) => {
        const workflow = findWorkflow(w => w.name === id)
        console.log("Selected workflow", workflow)
        if (workflow) {
            setCurrentWorkflow(workflow)
        }
    }

    return {currentWorkflow, selectWorkflow, addWorkflow}
}