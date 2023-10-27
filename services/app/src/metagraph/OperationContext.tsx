import { createContext } from "react";
import { MetagraphOperations } from "./metagraph";

export interface OperationContextInterface {
  operations: MetagraphOperations[];
  operationIndex: number;
  currentOperation: MetagraphOperations;
  addOperation: (operation: MetagraphOperations) => void;
  removeOperation: (operation: MetagraphOperations) => void;
  updateOperation: (operation: MetagraphOperations) => void;
  clearOperations: () => void;
  goToOperation: (operation: number) => void;
  setOperation: (operation: MetagraphOperations, index: number) => void;
  setCollection: (collection: string) => void;
  setProperties: (properties: { [key: string]: string }) => void;
  getProperties: () =>  { [key: string]: string };
  setIdentifier:  (identifier: string) => void;
  nextOperation: () => void;
  previousOperation: () => void;
  setOperations: (operations: MetagraphOperations[]) => void;
}

export const OperationContext = createContext<OperationContextInterface>({
  operations: [],
  operationIndex: 0,
  currentOperation: {} as MetagraphOperations,
  addOperation: (operation: MetagraphOperations) => {},
  removeOperation: (operation: MetagraphOperations) => {},
  updateOperation: (operation: MetagraphOperations) => {},
  clearOperations: () => {},
  goToOperation: (operation: number) => {},
  setOperation: (operation: MetagraphOperations, index: number) => {},
  setCollection: (collection: string) => {},
  setProperties: (properties: { [key: string]: string }) => {},
  getProperties: () => Object({}),
  setIdentifier:  (identifier: string) => {},
  nextOperation: () => {},
  previousOperation: () => {},
  setOperations: (operations: MetagraphOperations[]) => {}
});
