from pydantic import BaseModel
from typing import (Literal, List, Dict)


class Transform(BaseModel):
    type: str


class StaticTransform(Transform):
    type: str
    value: int | float | str | bool | dict


class JavascriptTransform(Transform):
    type: str
    expr: str


class Flow(BaseModel):
    type: str

class Identity(Flow):
    pass


class RawScript(Flow):
    type: Literal["raw_script"]
    input_transforms: Dict[str, StaticTransform | JavascriptTransform]
    content: str
    language: Literal["deno"] | Literal["python3"]
    path: str | None = None


class PathScript(Flow):
    type: Literal["script"]
    input_transforms: Dict[str, StaticTransform | JavascriptTransform]
    path: str


class StoppingCondition(Flow):
    type: str
    expr: str
    skip_if_stopped: bool
    suspend: int | None = None


class ConstantRetry(BaseModel):
    type: str
    count: int
    seconds: int


class ExponentialRetry(BaseModel):
    type: str
    attempts: int
    multiplier: int
    seconds: int


class Retry(BaseModel):
    constant: ConstantRetry | None = None
    exponential: ExponentialRetry | None = None


class Suspend(BaseModel):
    required_events: int
    timeout: int

class Module(BaseModel):
    pass

class FlowModule(Module):
    id: str
    value: "Identity | RawScript | PathScript | ForLoopFlow | BranchOne | BranchAll"
    summary: str | None = None
    sleep: StaticTransform | JavascriptTransform | None = None
    stop_after_if: StoppingCondition | None = None
    suspend: Suspend | None = None
    retry: Retry | None = None


class ForLoopFlow(Module):
    type: str
    modules: Dict[str, FlowModule]
    iterator: StaticTransform | JavascriptTransform
    skip_failures: bool | None


class Branch(Module):
    type: str
    summary: str | None
    expr: str
    modules: List["FlowModule"]


class BranchOne(Module):
    type: str
    default: List["FlowModule"]
    branches: List[Branch]


class BranchAll(Module):
    type: str
    default: List["FlowModule"]
    branches: List[Branch]





class FlowValue(Module):
    modules: List[FlowModule]
    failure_module: FlowModule | None = None
    same_worker: bool | None = None


class OpenFlow(BaseModel):
    summary: str | None = None
    description: str | None = None
    value: FlowValue
    schema: 
