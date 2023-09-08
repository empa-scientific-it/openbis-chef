import { useEffect } from "react";
import { MetagraphOperations } from "./metagraph";
import { useList } from "./useList";

export const useOperations = (init: MetagraphOperations[]) => {


  
  const operationList = useList(init);


  const addOperation = (operation: MetagraphOperations) => {
    operationList.add(operation);
  };

  const removeOperation = (operation: MetagraphOperations) => {
    operationList.remove(operation);
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

  const setCollection = (collection: string) => {
    const newOperation = operationList.elem;
    if (newOperation.type === "create") {
      newOperation.collectionIdentifier = collection;
      operationList.set(newOperation, operationList.idx);
    }
  };

  const setProperties = (properties: { [key: string]: string }) => {
    const newOperation = operationList.elem;
    if (newOperation.type === "create") {
      newOperation.objectProperties = properties;
      operationList.set(newOperation, operationList.idx);
    }
  };

  const setIdentifier = (identifier: string) => {
    const newOperation = operationList.elem;
    if (newOperation.type === "link") {
      newOperation.objectIdentifier = identifier;
      operationList.set(newOperation, operationList.idx);
    }
  };

  return {
    currentOperation: operationList.elem,
    operations: operationList.list,
    operationIndex: operationList.idx,
    addOperation,
    removeOperation,
    nextOperation: operationList.next,
    previousOperation: operationList.previous,
    updateOperation,
    clearOperations,
    setOperation,
    setOperations: operationList.setList,
    goToOperation,
    setCollection,
    setProperties,
    setIdentifier,
  };
};
