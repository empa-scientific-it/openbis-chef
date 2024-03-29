import React, { useState, useContext } from "react";
import { DataType } from "../dto";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import { OperationContext } from "../../metagraph/OperationContext";

type Props = {
  name: string;
  value: string;
  className?: string;
  editable?: boolean;
  onChange?: (name: string, value: string) => void;
  choices?: string[];
};

// Conditional type that adds the onChange property if editable is true
type PropertyComponentProps<T extends boolean> = T extends true
  ? Props & { onChange: (name: string, value: string) => void }
  : Props;

type EditorProps = PropertyComponentProps<true>;
type DisplayProps = PropertyComponentProps<false>;

type PropertyComponent<T extends boolean> = (
  props: PropertyComponentProps<T>
) => React.JSX.Element;

type PropertyEditor = (props: PropertyComponentProps<true>) => React.JSX.Element;
type PropertyDisplay = (props: PropertyComponentProps<false>) => React.JSX.Element;

function TextInput({ name, value, onChange, className }: EditorProps) {
  const operationContext = useContext(OperationContext);

  return (
    <input
      type="text"
      className={className}
      name={name}
      value={value}
      onChange={(e) => {
        onChange(name, e.target.value);
        operationContext.setProperties({ ...operationContext.getProperties(), [name]: e.target.value })
      }}
    />
  );
}

function TextDisplay({ name, value, className }: DisplayProps) {
  return <span className={className}>{value}</span>;
}

function DateInput({ name, value, onChange, className }: EditorProps) {
  const operationContext = useContext(OperationContext);

  return (
    <input
      className={className}
      type="date"
      name={name}
      value={value}
      onChange={(e) => {
        onChange(name, e.target.value);
        operationContext.setProperties({ ...operationContext.getProperties(), [name]: e.target.value })
      }}
    />
  );
}

function DateDisplay({ name, value, className }: DisplayProps) {
  return <span className={className}>{value}</span>;
}

function BooleanInput({ name, value, onChange, className }: EditorProps) {
  const operationContext = useContext(OperationContext);

  return (
    <input
      type="checkbox"
      className={className}
      name={name}
      checked={value === "true"}
      onChange={(e) => {
        const targetValue = e.target.checked ? "true" : "false"
        onChange(name, targetValue);
        operationContext.setProperties({ ...operationContext.getProperties(), [name]: targetValue })
      }}
    />
  );
}

function BooleanDisplay({ name, value, className }: DisplayProps) {
  return TextDisplay({ name, value, className });
}

function NumberInput({ name, value, onChange, className }: EditorProps) {
  const operationContext = useContext(OperationContext);

  return (
    <input
      className={className}
      type="number"
      name={name}
      value={value}
      onChange={(e) => {
        onChange(name, e.target.value);
        operationContext.setProperties({ ...operationContext.getProperties(), [name]: e.target.value })
      }}
    />
  );
}

function NumberDisplay({ name, value, className }: DisplayProps) {
  return TextDisplay({ name, value, className });
}

function SelectInput({
  name,
  value,
  className,
  onChange,
  choices,
}: EditorProps & { choices: string[] }) {
  const operationContext = useContext(OperationContext);

  return (
    <select
      className={className}
      name={name}
      value={value}
      onChange={(e) => {
        onChange(name, e.target.value);
        operationContext.setProperties({ ...operationContext.getProperties(), [name]: e.target.value })
      }}
    >
      {choices.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

function SelectDisplay({ name, value, className }: DisplayProps) {
  return TextDisplay({ name, value, className });
}

type SupportedLang = "json" | "xml" | "yaml";

function makeCodeInput(lang: SupportedLang): PropertyEditor {
  return ({ name, value, onChange, className }: EditorProps) => {
    const [open, setOpen] = useState(false);
    return (
      <div className={className} hidden={open} onClick={() => setOpen((open) => !open)}>
        <AceEditor
          mode={lang}
          theme="github"
          value={value}
          onChange={onChange}
          name="xml-property-editor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            useWorker: false,
          }}
        />
      </div>
    );
  };
}

function XMLDisplay({ name, value, className }: DisplayProps) {
  return TextDisplay({ name, value, className });
}

function MultiLineTextInput({ name, value, onChange, className }: EditorProps) {
  const operationContext = useContext(OperationContext);

  return (
    <textarea
      className={className}
      name={name}
      value={value}
      onChange={(e) => {
        onChange(name, e.target.value);
        operationContext.setProperties({ ...operationContext.getProperties(), [name]: e.target.value })
      }}
    />
  );
}

function MultiLineTextDisplay({ name, value }: DisplayProps) {
  return TextDisplay({ name, value });
}

function HyperlinkInput({ name, value, onChange, className }: EditorProps) {
  const operationContext = useContext(OperationContext);

  return (
    <input
      type="url"
      className={className}
      name={name}
      value={value}
      onChange={(e) => {
        onChange(name, e.target.value);
        operationContext.setProperties({ ...operationContext.getProperties(), [name]: e.target.value })
      }}
    />
  );
}

function HyperlinkDisplay({ name, value, className }: DisplayProps) {
  return (
    <a className={className} href={value}>
      {value}
    </a>
  );
}

function SampleInput({ name, value, onChange, className }: EditorProps) {
  const operationContext = useContext(OperationContext);

  return (
    <input
      type="text"
      className={className}
      name={name}
      value={value}
      onChange={(e) => {
        onChange(name, e.target.value);
        operationContext.setProperties({ ...operationContext.getProperties(), [name]: e.target.value })
      }}
    />
  );
}

function SampleDisplay({ name, value, className }: DisplayProps) {
  return TextDisplay({ name, value, className });
}

export function elementForType(
  type: typeof DataType,
  readOnly: boolean
): PropertyComponent<typeof readOnly> {
  switch (type) {
    case "BOOLEAN":
      return readOnly ? BooleanDisplay : BooleanInput;
    case "DATE":
      return readOnly ? DateDisplay : DateInput;
    case "TIMESTAMP":
      return readOnly ? DateDisplay : DateInput;
    case "REAL":
      return readOnly ? NumberDisplay : NumberInput;
    case "INTEGER":
      return readOnly ? NumberDisplay : NumberInput;
    case "VARCHAR":
      return readOnly ? TextDisplay : TextInput;
    case "MULTILINE_VARCHAR":
      return readOnly ? MultiLineTextDisplay : MultiLineTextInput;
    case "XML":
      return readOnly ? XMLDisplay : makeCodeInput("xml");
    case "HYPERLINK":
      return readOnly ? HyperlinkDisplay : HyperlinkInput;
    case "CONTROLLEDVOCABULARY":
      return readOnly ? SelectDisplay : SelectInput;
    case "MATERIAL":
    case "SAMPLE":
      return readOnly ? SampleDisplay : SampleInput;
    case "JSON":
      return readOnly ? makeCodeInput("json") : makeCodeInput("json");
    //TODO: Implement array types: probably we can just use a ul of the single type or a comma separated list
    case "ARRAY_INTEGER":
    case "ARRAY_REAL":
    case "ARRAY_STRING":
    case "ARRAY_TIMESTAMP":
    default:
      return readOnly ? TextDisplay : TextInput;
  }
}
