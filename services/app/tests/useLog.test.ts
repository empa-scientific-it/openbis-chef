import { useLog } from "@src/metagraph/useLog";
import { expect, it, describe } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";

describe("check log hook", () => {
  const { result } = renderHook(() => useLog());
  act(() => {
    result.current.append("A")
  })
  it("if we add one element, we need one line of text", () => {
    expect(result.current.format().split("\n").length).toBe(2);
  });
});

