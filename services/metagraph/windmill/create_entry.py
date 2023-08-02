import os
import wmill
import pybis
from pybis import Openbis
# You can import any package from PyPI, even if the assistant complains
# Ctrl+S to format the code. Autocompletion available.


def main(
    settings: dict,
    type: str,
    token: str,
    collection: str,
    url: str = "https://openbis:443"
) -> str:
    ob_type = "PARAMETER_DIES"
    # We create a connection 
    ob = Openbis(url, verify_certificates=False)
    ob.set_token(token)
    #We create a new object and store it
    s1 = ob.new_sample(type=type, props =settings, experiment=collection)
    return s1
