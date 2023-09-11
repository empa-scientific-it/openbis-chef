import { Metagraph } from "../metagraph/metagraph";

export const simpleWorkflow = new Metagraph(
    [
        {
            id: "First entry",
            collection: "/DEFAULT/DEFAULT/DEFAULT",
            type: "entry",
            entityType: "PRODUCT",
            description: "First entry",
            dependencies: [],
        },
        {
            id: "Second entry",
            collection: "/DEFAULT/DEFAULT/DEFAULT",
            type: "entry",
            entityType: "PRODUCT",
            description: "Second entry",
            dependencies: [],
        },
        {
            id: "Third entry",
            collection: "/DEFAULT/DEFAULT/DEFAULT",
            type: "entry",
            entityType: "PRODUCT",
            description: "Third entry",
            dependencies: ['First entry', 'Second entry'],
        },


    ],
    "This is a testing workflow",
    "Simple workflow"
)