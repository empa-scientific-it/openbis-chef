import pybis as pb
import dataclasses
from typing import List, Dict, Callable
from pydantic import BaseModel, model_validator
from pydantic import TypeAdapter
"""
This module is used to define a `metagraph`. This is a graph of openBIS operations that, when run.
produce a concrete openbis object graph
"""


class MetaNode(BaseModel):
    """
    A node in the metagraph that
    describe the structure of the data to be created
    """
    name: str
    depends: List[str]

    def to_constructor(self) -> Callable[...,  Callable[..., pb.Openbis]]:
        """
        Return a constructor function for the node.
        The function takes all the arguments that should be passed by the user and
        returns a function that, when provided an openbis connection, performs the operation in
        openbis
        """
        raise NotImplementedError 
    


class Creation(MetaNode):
    """
    A node that describes a creation of a new object in openbis.
    `type` is the type code of the openbis object to be created.
    When the function is called, it should return a function that has
    as many inputs as the number of properties of the object to be created and the correct types.
    In order to do so, we need to do some reflection: we need to get the type definition from openbis
    """
    type: str

    def to_constructor(self) -> Callable[[...],  Callable]:
        return ob.create_object(....)


class Selection(MetaNode):
    """A node that describes a selection of an existing object in openbis."""
    type: str
    collection: str

    def to_constructor(self) -> Callable:
        return ob.get_objects(....)


class Metagraph(BaseModel):
    """
    A metagraph to represent a graph of openBIS 
    operations that depend on each other
    """
    operations: List[MetaNode]

    def make_graph(self) -> Dict[str, List[str]]:
        """Make a dependency graph of the metagraph."""
        return {op.name: [dep for dep in op.depends] for op in self.operations}

    @model_validator(mode='after')
    def check_dependencies(self):
        """Check that all dependencies are valid."""
        for operation in self.operations:
            for dependency in operation.depends:
                if dependency not in [op.name for op in self.operations]:
                    raise ValueError(f"Operation {operation.name} depends on {dependency}, but it does not exist")


    def check_cycles(self):
        """
        Check if there are cycles in the dependency graph
        """
        graph = self.make_graph()
        visited = set()
        path = set()
        for node in graph:
            if node not in visited:
                if self._check_cycles_util(node, visited, path, graph):
                    return True

