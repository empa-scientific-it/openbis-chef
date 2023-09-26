import { Metagraph } from "../metagraph/metagraph";

export const pizzaWorkflow = new Metagraph(
    [
      {
        id: "Select mixer",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_1",
        type: "select",
        entityType: "MIXER",
        dependencies: [],
        description: "Select the mixer",
      },
      {
        id: "Mixer parameter",
        collection: "/POLPRO_RUDOLF.HUFENUS_AT_EMPA.CH/TEST/TEST_EXP_1",
        type: "entry",
        entityType: "PARAMETER_MIXER",
        dependencies: ["Select mixer"],
        description: "Enter the parameters for the mixer",
      },
      {
        id: "Select flour",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUDER_EXP_8",
        type: "select",
        entityType: "FLOUR",
        dependencies: [],
        description: "Select the flour type",
      },
      {
        id: "Flour parameter",
        collection: "/POLPRO_RUDOLF.HUFENUS_AT_EMPA.CH/TEST/TEST_EXP_1",
        type: "entry",
        entityType: "PARAMETER_FLOUR",
        dependencies: ["Select flour"],
        description: "Enter the parameters for the flour",
      },

      {
        id: "Water quantity",
        collection: "/POLPRO_RUDOLF.HUFENUS_AT_EMPA.CH/TEST/TEST_EXP_1",
        type: "entry",
        entityType: "WATER",
        dependencies: [],
        description: "Enter the water quantity",
      },
      {
        id: "Dough",
        collection: "/POLPRO_RUDOLF.HUFENUS_AT_EMPA.CH/TEST/TEST_EXP_1",
        type: "entry",
        entityType: "DOUGH",
        dependencies: ["Flour parameter", "Mixer parameter", "Water quantity"],
        description: "Create the dough",
      },
    ],
    "This is a workflow for creating a pizza",
    "Pizza Workflow")