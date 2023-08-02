import pybis as pb
import dataclasses
from typing import List


"""
This module contains utility functions necessary to interact with openbis.
"""







def login_openbis(ob: pb.Openbis) -> pb.Openbis:
    """Login to openbis."""
    ob.set_token(wmill.get_variable("u/admin/openbis_token"))
    return ob


def get_all_objects(ob: pb.Openbis, collection: str, type: str):
    """Get all objects from a collection with a given type."""
    return ob.get_objects(experiment=collection, type=type)


