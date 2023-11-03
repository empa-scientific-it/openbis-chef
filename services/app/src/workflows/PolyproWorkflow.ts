import { Metagraph } from "../metagraph/metagraph";

export const polyproWorkflow = new Metagraph(
    [
      {
        id: "Select extruder",
        name: "Select extruder",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_1",
        type: "select",
        entityType: "EXTRUDER",
        dependencies: [],
        description: "Select the extruder",
      },
      {
        id: "Extruder Parameter",
        name: "Extruder Parameter",
        collection: "/POLPRO_RUDOLF.HUFENUS_AT_EMPA.CH/TEST/TEST_EXP_1",
        type: "entry",
        entityType: "PARAMETER_EXTRUDER",
        dependencies: ["Select extruder"],
        description: "Enter the parameters for the extruder",
      },
      {
        id: "Select spin pack",
        name: "Select spin pack",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUDER_EXP_8",
        type: "select",
        entityType: "SPIN_PACK",
        dependencies: [],
        description: "Select the spin pack",
      },
      // Add more nodes here
    ],
    "Polypro Workflow", // Add a name for the metagraph
    "This metagraph represents the workflow for the Polypro project." // Add a description for the metagraph
);