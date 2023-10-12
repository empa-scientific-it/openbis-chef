import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import Toast from "react-bootstrap/Toast";
import schema from "@src/metagraph/metagraph.schema.json";
import "./Workflow.css";
import "./WorkflowEditor.css";
import {
  Metagraph,
  formatFailure,
  ValidationFailure,
  SyntaxError,
  checkMetagraphData,
  validateMetagraph,
} from "../metagraph";
import * as E from "fp-ts/Either";
import { match, left, right, Either } from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import Modal from "./Modal";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import { AuthContext } from "@src/openbis/AuthContext";
import Summary from "./Summary";

function ErrorDisplay(messages: string[]) {
  return (
    <div>
      The following errors were found:
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

function SuccessDisplay() {
  return <div>Workflow is valid</div>;
}

function nodesFromJSON(json: string): Either<ValidationFailure[], Metagraph> {
  try {
    const mg = JSON.parse(json) as Metagraph;

    if (mg.name == undefined) {
      return left([{ type: "SyntaxError", message: "Missing workflow name" }]);
    } else if (mg.description == undefined) {
      return left([{ type: "SyntaxError", message: "Missing workflow description" }]);
    } else if (mg.nodes == undefined) {
      return left([{ type: "SyntaxError", message: "Missing workflow nodes" }]);
    } else {
      return right(mg);
    }
  } catch (e) {
    return left([{ type: "SyntaxError", message: e.message }]);
  }
}

interface WorkflowEditorProps {
  handleNewMetagraph: (mg: Metagraph) => void;
  handleClose: () => void;
  isOpen: boolean;
  initialValue: Metagraph;
}




function WorkflowEditor({
  handleNewMetagraph,
  isOpen,
  handleClose,
  initialValue,
}: WorkflowEditorProps) {
  const { service } = useContext(AuthContext);
  const [value, setValue] = useState("// some comment");
  const [toastComponent, setToastComponent] = useState<JSX.Element | null>();
  const [localMetagraph, setLocalMetagraph] = useState<Metagraph | null>(null);


  function handleEdit(newValue: string, update: string) {
    setValue(newValue);
    const mg = nodesFromJSON(newValue);
    console.log(mg)
    pipe(
      mg,
      E.flatMap((mg) => Metagraph.fromNodes(mg.nodes, mg.description, mg.name)),
      match(
        (failure) => {
          setToastComponent(ErrorDisplay(failure.map(formatFailure)));
        },
        (graph) => {
          checkMetagraphData(graph, service).then((result) => {
            if (result.valid) {
              setToastComponent(SuccessDisplay());
              setLocalMetagraph(graph);
            } else {
              setToastComponent(ErrorDisplay(result.failures.map(formatFailure)));
            }
          });
        }
      )
    );
  }

  function handleSave(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    ev.preventDefault();
    if (localMetagraph) {
      handleNewMetagraph(localMetagraph);
    }
  }


  useEffect(() => {
    setValue(JSON.stringify(initialValue, null, 2));
    handleEdit(JSON.stringify(initialValue, null, 2), "");
  }, [initialValue]);


  const handleLocalClose = useCallback(
    (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      ev.preventDefault();
      // setLocalIsOpen(() => false);
      handleClose();
    },
    []
  );

  return (
    <div>
      <Modal isOpen={isOpen}>
        <div className="workflow-editor-container">
          <div className="workflow-editor-text">
            <AceEditor
              mode="json"
              theme="github"
              value={value}
              onChange={handleEdit}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                useWorker: false,
              }}
            />
          </div>
          <div className="workflow-editor-graph">
            { localMetagraph ? <Summary metagraph={localMetagraph} /> : null}
          </div>

        </div>

        {toastComponent}
        <button className="clickable-button" onClick={handleSave}>
          Save
        </button>
        <button className="clickable-button" onClick={handleLocalClose}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default WorkflowEditor;
