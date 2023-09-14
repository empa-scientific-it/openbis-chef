import Editor, { DiffEditor, useMonaco, loader, Monaco } from "@monaco-editor/react";
import { on } from "process";
import React, { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import Toast from 'react-bootstrap/Toast';
import schema from "@src/metagraph/metagraph.schema.json";
import "./Workflow.css";
import { Metagraph } from "../metagraph";
import * as E from 'fp-ts/Either'
import { match, left, right, Either } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

function ErrorDisplay(message: string) {
  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

function nodesFromJSON(json: string): Either<Metagraph, SyntaxError> {
  try{
    const mg = JSON.parse(json) as Metagraph;
    return left(mg);
  } catch (e) {
    return right(e);
  }
}

function WorkflowEditor() {
  const localMonaco = useMonaco();
  const [value, setValue] = useState("// some comment");
  const [toastComponent, setToastComponent] = useState<JSX.Element | null>();
  function onMount(editor: { setModel: (arg0: any) => void }, monaco: Monaco) {
    console.log(editor);
    const modelUri = "foo://myapp/custom.json";
    const model = monaco.editor.createModel(value, "json");
    editor.setModel(model);
    console.log(schema);

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      ...monaco.languages.json.jsonDefaults.diagnosticsOptions,
      allowComments: true,
      schemas: [
        {
          uri: "",
          fileMatch: ["*"],
          schema: schema,
        },
      ],
      validate: true,
    });
  }

  function handleSave() {
    console.log(value);
    const mg = nodesFromJSON(value);
    pipe(mg, match(
      (mg) => console.log(mg),
      (err) => setToastComponent(ErrorDisplay(err.message))
    ),
    const res = Metagraph.fromNodes(mg.nodes,mg.description,mg.name);
    console.log(res);
    pipe(res, match( 
      (mg) => console.log(mg),
      (err) => setToastComponent(ErrorDisplay(err.type))))
    
  }

  return (
    <>
      <h2>Workflow Editor</h2>
      <Editor
        height="90vh"
        defaultLanguage="json"
        defaultValue={value}
        value={value}
        language="json"
        onMount={onMount}
        onChange={(ev, changedValue) => setValue(() => ev)}
      />
        
      <button onClick={handleSave}>Save</button>
    </>
  );
}

export default WorkflowEditor;
