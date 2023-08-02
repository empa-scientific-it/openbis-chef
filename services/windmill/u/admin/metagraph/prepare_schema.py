from pydantic import TypeAdapter
from metagraph import Creation, Selection, Metagraph, MetaNode
import argparse as ap
from pathlib import Path
import json

parser = ap.ArgumentParser()
parser.add_argument('out', type=Path)

args = parser.parse_args()


adapter = TypeAdapter(Metagraph)
with open(args.out, 'w') as out_file:
    schema = adapter.json_schema()
    out_file.write(json.dumps(schema, indent=2))