import os
import wmill
import pybis
from pybis import Openbis
# You can import any package from PyPI, even if the assistant complains
# Ctrl+S to format the code. Autocompletion available.


def main(
    dies_setting_temp: float,
    dies_mass_temp: float,
    dies_pressure: float ,
    collection: str,
    token: str,
    url: str = "https://openbis:443"
) -> str:
    ob_type = "PARAMETER_DIES"
    # We create a connection 
    ob = Openbis(url, verify_certificates=False)
    ob.set_token(token)
    #We create a new object and store it
    s1 = ob.new_sample(type=ob_type, props ={"dies_mass_temp":dies_mass_temp, "dies_setting_temp":dies_setting_temp, "dies_pressure":dies_pressure}, experiment=collection)
    s1.save()
    return s1
