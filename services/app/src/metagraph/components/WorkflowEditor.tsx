import React, { useCallback, useEffect, useRef, useState } from "react";
import Toast from "react-bootstrap/Toast";
import schema from "@src/metagraph/metagraph.schema.json";
import "./Workflow.css";
import { Metagraph, formatFailure, ValidationFailure, SyntaxError } from "../metagraph";
import * as E from "fp-ts/Either";
import { match, left, right, Either } from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import Modal from "./Modal";



import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";

function ErrorDisplay(message: string) {
  return <div>{message}</div>;
}

function nodesFromJSON(json: string): Either<ValidationFailure, Metagraph> {
  try {
    const mg = JSON.parse(json) as Metagraph;
    if (mg.name == undefined) {
      return left({ type: "SyntaxError", message: "Missing workflow name" });
    } else if (mg.description == undefined) {
      return left({ type: "SyntaxError", message: "Missing workflow description" });
    } else if (mg.nodes == undefined) {
      return left({ type: "SyntaxError", message: "Missing workflow nodes" });
    } else {
      return right(mg);
    }
  } catch (e) {
    return left({ type: "SyntaxError", message: e.message });
  }
}

interface WorkflowEditorProps {
  handleNewMetagraph: (mg: Metagraph) => void;
  handleClose: () => void;
  isOpen: boolean;
  initialValue: Metagraph
}

function WorkflowEditor({
  handleNewMetagraph,
  isOpen,
  handleClose,
  initialValue
}: WorkflowEditorProps) {
  const [value, setValue] = useState("// some comment");
  const [toastComponent, setToastComponent] = useState<JSX.Element | null>();
  const [localIsOpen, setLocalIsOpen] = useState(isOpen);

  function handleSave(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    ev.preventDefault();
    console.log(value);
    const mg = nodesFromJSON(value);
    pipe(
      mg,
      E.flatMap((mg) => Metagraph.fromNodes(mg.nodes, mg.description, mg.name)),
      match(
        (failure) => {
          setToastComponent(ErrorDisplay(formatFailure(failure)));
        },
        (graph) => {
          handleNewMetagraph(graph);
        }
      )
    );
  }

    useEffect(() => {
        setValue(JSON.stringify(initialValue, null, 2));
    }, [initialValue])

  const handleChange = useCallback((value: string, update) => {
    console.log(value);
    setValue(value);
  }, []);

  const handleLocalClose = useCallback(
    (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      ev.preventDefault();
      setLocalIsOpen(false);
      handleClose();
    },
    []
  );

  return (
    <div>
      <Modal isOpen={isOpen}>
        <AceEditor
          mode="json"
          theme="github"
          value={value}
          onChange={handleChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            useWorker: false,
          }}
        />
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
