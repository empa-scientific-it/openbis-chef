import pytest
from pytest import fixture
from pybis import Openbis

from metagraph.metagraph import Creation, Selection, Metagraph, MetaNode, object_type_to_dict
from metagraph.settings import Settings


@fixture
def openbis() -> Openbis:
    config = Settings()
    ob = Openbis(f"https://{config.openbis_url}:{config.openbis_port}", verify_certificates=False)
    ob.login(config.openbis_user, config.openbis_password)
    yield ob


def test_sample_type_to_dict(openbis: Openbis):
    ot = openbis.get_object_type("ENTRY")
    dt = object_type_to_dict(ot)
    assert "$NAME" in dt.keys() and dt['$NAME'] == str

