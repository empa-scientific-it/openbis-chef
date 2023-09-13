import { Metagraph, MetagraphNode } from "@src/metagraph/metagraph";
import { expect, it, describe, test } from "vitest";

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

describe("check metagraph validation", () => {
  test("should return an empty list for a valid metagraph", () => {
    const nodes = validGraph();
    const metagraph = new Metagraph(nodes, "", "");
    expect(metagraph.nodes).toEqual(nodes);
  });
  test("should return an error for missing nodes", () => {
    const nodes = [
        {
            id: "Select extruder",
            collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_1",
            type: "select",
            entityType: "EXTRUDER",
            dependencies: ["missing"],
            description: "Select the extruder",
        },
        ];
    const metagraph = new Metagraph(nodes, "", "");
    expect(metagraph.nodes).toThrowError();
  });
});


