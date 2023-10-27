import { useOperations } from "@src/metagraph/useOperations";
import { expect, it, describe } from "vitest";
import { renderHook, act } from "@testing-library/react";

describe("check operations hook", () => {
  const { result } = renderHook(() => useOperations([]));
  it("should return an empty list", () => {
    expect(result.current.operations).toEqual([]);
  });
  it("index should be zero", () => {
    expect(result.current.operationIndex).toBe(0);
  });
});

describe("check operations hook : add", () => {
  const ops = [
    {
      name: "op1",
      originObject: { code: "sample1" },
      type: "link",
      operationId: "12",
      collection: "COLLECTION",
    },
    {
      name: "op2",
      originObject: { code: "sample2" },
      type: "create",
      operationId: "13",
      collection: "COLLECTION",
    },
  ];
  const { result } = renderHook(() => useOperations(ops));
  const newCode = "sample3";
  act(() => {
    result.current.updateOperationOriginObject({ code: newCode });
  });
  it("should return the first element", () => {
    expect(result.current.currentOperation.originObject.code).toBe(newCode);
  });
});
