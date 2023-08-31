import { createContext } from "react";
import { MetagraphOperations } from "./metagraph";
import { Sample } from "@src/types/openbis";

export interface OperationContextInterface {
  currentOperation: MetagraphOperations;
  operationIndex: number;
  operations: MetagraphOperations[];
  addOperation: (operation: MetagraphOperations) => void;
  removeOperation: (operation: MetagraphOperations) => void;
  clearOperations: () => void;
  nextOperation: () => void;
  previousOperation: () => void;
  setOperation: (operation: MetagraphOperations, index: number) => void;
  updateOperationOriginObject: (originObject: Sample) => void;
  setProperties: (properties: { [key: string]: string }) => void;
  setIdentifier:  (identifier: string) => void;
  setCollection: (collection: string) => void;
}

export const OperationContext = createContext<OperationContextInterface>({
  currentOperation: {} as MetagraphOperations,
  operationIndex: 0,
  operations: [],
  addOperation: (operation: MetagraphOperations) => {},
  removeOperation: (operation: MetagraphOperations) => {},
  clearOperations: () => {},
  nextOperation: () => {},
  previousOperation: () => {},
  setOperation: (operation: MetagraphOperations, index: number) => {},
  updateOperationOriginObject: (originObject: Sample) => {},
  setProperties: (properties: { [key: string]: string }) => {},
  setIdentifier:  (identifier: string) => {},
  setCollection: (collection: string) => {},
});
