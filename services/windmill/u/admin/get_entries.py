import os
import wmill
import pybis
from pybis import Openbis
# You can import any package from PyPI, even if the assistant complains
# Ctrl+S to format the code. Autocompletion available.


def main(
    collection: str,
    token: str,
    url: str = "https://openbis:443"
) -> list[str]:
    # We create a connection 
    ob = Openbis(url, verify_certificates=False)
    ob.set_token(token)
    #We create a new object and store it
    s1 = ob.get_experiment(collection)
    samples = s1.get_samples()
    return samples.df.identifier.tolist()
