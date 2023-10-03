import { Metagraph, MetagraphNode, ValidationFailure } from "@src/metagraph/metagraph";
import { expect, describe, test } from "vitest";
import { match } from "fp-ts/Either";
import { pipe } from "fp-ts/function";

function validGraph(): MetagraphNode[] {
  return [
    {
      id: "Select extruder",
      collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_1",
      type: "select",
      entityType: "EXTRUDER",
      dependencies: [],
      description: "Select the extruder",
    },
    {
      id: "Extruder Parameter",
      collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_1",
      type: "entry",
      entityType: "EXTRUDER_PARAMETER",
      dependencies: ["Select extruder"],
      description: "Enter the parameters for the extruder",
    },
  ];
}

function missingNodeGraph(): MetagraphNode[] {
  return [
    {
      id: "Select extruder",
      collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_1",
      type: "select",
      entityType: "EXTRUDER",
      dependencies: ["missing"],
      description: "Select the extruder",
    },
  ];
}

function circularDependencyGraph(): MetagraphNode[] {
  return [
    {
      id: "Select extruder",
      collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_1",
      type: "select",
      entityType: "EXTRUDER",
      dependencies: [],
      description: "Select the extruder",
    },
    {
      id: "Extruder Parameter",
      collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_1",
      type: "entry",
      entityType: "EXTRUDER_PARAMETER",
      dependencies: ["Select extruder", "Extruder Parameter"],
      description: "Enter the parameters for the extruder",
    },
  ];
}

describe("check metagraph validation", () => {
  test("should return an empty list for a valid metagraph", () => {
    const nodes = validGraph();
    const metagraph = new Metagraph(nodes, "", "");
    expect(metagraph.nodes).toEqual(nodes);
  });

  test("should return an error for an invalid metagraph with missing nodes", () => {
    const nodes = missingNodeGraph();
    const metagraph = Metagraph.fromNodes(nodes, "", "");

    const res = pipe(metagraph, match(
      (e: ValidationFailure) => e.type,
      (a: Metagraph) => a.name
    ));
    expect(res).toMatch("invalidDependency");
  });

  test("should return an error for an invalid metagraph with circular dependencies", () => {
    const nodes = circularDependencyGraph();
    const metagraph = Metagraph.fromNodes(nodes, "", "");
    
    const res = pipe(metagraph, match(
      (e: ValidationFailure) => e.type,
      (a: Metagraph) => a.name
    ));
    expect(res).toMatch("circularDependency");
  });
});
