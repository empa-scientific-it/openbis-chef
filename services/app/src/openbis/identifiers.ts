import { ExperimentIdentifier, ExperimentPermId } from "@src/types/openbis";
import { ProjectIdentifier, SpacePermId } from "./dto";

export function getProjectId(experimentId: ExperimentIdentifier): typeof ProjectIdentifier{
    const split = experimentId.identifier.split("/");
    return new ProjectIdentifier(split.slice(0, 3).join("/"));
}

export function getSpaceId(experimentId: ExperimentIdentifier): typeof SpacePermId{
    const split = experimentId.identifier.split("/");
    return new SpacePermId(split[1]);
}