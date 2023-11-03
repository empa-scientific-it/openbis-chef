import { Metagraph } from "../metagraph/metagraph";

export const pizzaWorkflow = new Metagraph(
  [
    {
      id: "Select mixer",
      name: "Select mixer", // Add a name property
      collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_1",
      type: "select",
      entityType: "MIXER",
      dependencies: [],
      description: "Select the mixer",
    },
    {
      id: "Mixer parameter",
      name: "Mixer parameter", // Add a name property
      collection: "/POLPRO_RUDOLF.HUFENUS_AT_EMPA.CH/TEST/TEST_EXP_1",
      type: "entry",
      entityType: "PARAMETER_MIXER",
      dependencies: ["Select mixer"],
      description: "Enter the parameters for the mixer",
    },
    {
      id: "Select flour",
      name: "Select flour", // Add a name property
      collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUDER_EXP_8",
      type: "select",
      entityType: "FLOUR",
      dependencies: [],
      description: "Select the flour type",
    },
    // Add more nodes here
  ],
  "Create a pizza",
  "Create a pizza"
);