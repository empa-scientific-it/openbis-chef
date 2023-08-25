import { useEffect } from "react";
import { MetagraphOperations } from "./metagraph";
import { useList } from "./useList";

export const useOperations = (init: MetagraphOperations[]) => {
  //console.log("Operations", operations)
  const operationList = useList(init);

  // useEffect(() => {
  //     // After the state has been updated, move to the first element
  //     console.log("Operations", operationList)}
  // , [operationList])

  const addOperation = (operation: MetagraphOperations) => {
    operationList.add(operation);
  };

  const removeOperation = (operation: MetagraphOperations) => {
    operationList.remove(operation);
  };

  const nextOperation = () => {
    operationList.next();
  };

  const previousOperation = () => {
    operationList.previous();
  };

  const updateOperation = (operation: MetagraphOperations) => {
    operationList.set(operation, operationList.idx);
  };

  const clearOperations = () => {
    operationList.clear();
  };

  const goToOperation = (operation: number) => {
    operationList.move(operation);
  };

  const setOperation = (operation: MetagraphOperations, index: number) => {
    operationList.set(operation, index);
  };

  const updateOperationOriginObject = (originObject: Sample) => {
    const operation = operationList.elem;
    operation.originObject = originObject;
    operationList.setCurrent(operation);
  };

  return {
    currentOperation: operationList.elem,
    operations: operationList.list,
    operationIndex: operationList.idx,
    addOperation,
    removeOperation,
    nextOperation,
    previousOperation,
    updateOperation,
    clearOperations,
    setOperation,
    goToOperation,
    updateOperationOriginObject,
  };
};
