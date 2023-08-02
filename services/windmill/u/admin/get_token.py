import os
import wmill
import pybis
from pybis import Openbis
# You can import any package from PyPI, even if the assistant complains
# Ctrl+S to format the code. Autocompletion available.


def main(
    username: str,
    password: str,
    url: str = "https://openbis:443"
) -> str:

    ob = Openbis(url, verify_certificates=False)
    ob.login(username, password, save_token=False)
    wmill.set_variable("u/admin/openbis_token", ob.token)
    return ob.token
