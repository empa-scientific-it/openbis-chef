import { useList } from "@src/metagraph/useList";
import { expect, it, describe, beforeAll } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";

describe("check list hook", () => {
  const { result } = renderHook(() => useList([1, 2, 3, 4]));
  it("should return the first element", () => {
    expect(result.current.elem).toBe(1);
  });
  it("index should be zero", () => {
    expect(result.current.idx).toBe(0);
  });
});

describe("check list index", () => {
  const { result } = renderHook(() => useList([1, 2, 3, 4]));
  act(() => {
    result.current.next();
  });

  it("should return the first element", () => {
    expect(result.current.elem).toBe(2);
  });
  it("index should be one after moving to the next element", () => {
    expect(result.current.idx).toBe(1);
  });
});

describe("check list stability", () => {
  const { result } = renderHook(() => useList([1, 2, 3, 4]));
  act(() => {
    result.current.next();
  });

  act(() => {
    result.current.previous();
  });

  it("should return the first element after moving back and forth", () => {
    expect(result.current.elem).toBe(1);
  });
  it("index should be zero after moving to the next element and then back", () => {
    expect(result.current.idx).toBe(0);
  });
});

describe("check list add", () => {
  const { result } = renderHook(() => useList([1, 2, 3, 4]));
  act(() => {
    result.current.add(6);
  });

  it("nothing should happen to the current element", () => {
    expect(result.current.elem).toBe(1);
  });
  it("index should not change", () => {
    expect(result.current.idx).toBe(0);
  });
});

describe("check list finished", () => {
  const { result } = renderHook(() => useList([1, 2, 3, 4]));

  beforeAll(() => {
    act(() => {
      result.current.next();
    });
    act(() => {
      result.current.next();
    });
    act(() => {
      result.current.next();
    });
    act(() => {
      result.current.next();
    });
  });

  it("it should return the last element", () => {
    expect(result.current.elem).toBe(4);
  });
  it("finished should be true", () => {
    expect(result.current.finished).toBe(true);
  });
});
