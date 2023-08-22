import { createContext } from "react";
import { MetagraphOperations } from "./metagraph";

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
});
