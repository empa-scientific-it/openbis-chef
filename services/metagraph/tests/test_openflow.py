import pytest
from pytest import fixture
import importlib.resources

from openflow.openflow import OpenFlow
import metagraph

import yaml

res = importlib.resources.files(metagraph) / "resources" / "tests" / "flow.yaml"

def test_openflow():
    with res.open() as f:
        data = yaml.safe_load(f)
    openflow = OpenFlow.model_validate(data)
    assert openflow.value.modules[0].value.type == "script"

