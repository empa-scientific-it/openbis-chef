import pybis as pb



def login_openbis(ob: pb.Openbis) -> pb.Openbis:
    """Login to openbis."""
    ob.set_token(wmill.get_variable("u/admin/openbis_token"))
    return ob

def get_all_objects(ob: pb.Openbis, identifier: str):
    """Get all objects from a collection."""
    return ob.get_objects(experiment=identifier)


