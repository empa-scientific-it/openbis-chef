import { MetagraphNode, MetagraphOperations } from "../metagraph";

export interface StepComponentProps {
  operation: MetagraphOperations;
  onFinished: (event: MetagraphOperations) => void;
}
