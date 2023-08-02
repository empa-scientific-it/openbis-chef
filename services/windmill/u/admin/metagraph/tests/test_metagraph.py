import pytest

from metagraph.metagraph import Creation, Selection, Metagraph, MetaNode


m = Metagraph(
    operations=[
        Creation(name="a", depends=[], type="type", properties={}),
        Creation(name="b", depends=["a"], type="type", properties={}),
        Selection(name="c", depends=["b"], type="type", code="code"),
    ]
)


print(m.make_graph())