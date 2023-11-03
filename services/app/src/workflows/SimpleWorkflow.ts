import { Metagraph } from "../metagraph/metagraph";

export const simpleWorkflow = new Metagraph(
    [
        {
            id: "First entry",
            name: "First entry",
            collection: "/DEFAULT/DEFAULT/DEFAULT",
            type: "entry",
            entityType: "PRODUCT",
            description: "First entry",
            dependencies: [],
        },
        {
            id: "Second entry",
            name: "Second entry",
            collection: "/DEFAULT/DEFAULT/DEFAULT",
            type: "entry",
            entityType: "PRODUCT",
            description: "Second entry",
            dependencies: [],
        },
        {
            id: "Third entry",
            name: "Third entry",
            collection: "/DEFAULT/DEFAULT/DEFAULT",
            type: "entry",
            entityType: "PRODUCT",
            description: "Third entry",
            dependencies: ['First entry', 'Second entry'],
        },
        // Add more nodes here
    ],
    "Simple Workflow", // Add a name for the metagraph
    "This metagraph represents a simple workflow." // Add a description for the metagraph
);