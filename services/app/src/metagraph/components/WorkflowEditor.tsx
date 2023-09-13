import Editor, { DiffEditor, useMonaco, loader, Monaco } from "@monaco-editor/react";
import { on } from "process";
import React, { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import schema from "@src/metagraph/metagraph.schema.json";
import "./Workflow.css";
import { Metagraph } from "../metagraph";

function WorkflowEditor() {
  const localMonaco = useMonaco();
  const [value, setValue] = useState("// some comment");

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
    const mg = JSON.parse(value) as Metagraph;
    new Metagraph(mg.nodes,mg.description,mg.name);
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
