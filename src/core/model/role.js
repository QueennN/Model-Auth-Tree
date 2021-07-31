module.exports = {
    name: "role",
    database: "store",
    display: "name",
    schema: {
        name: {
            type:"string",
            required:true,
            unique:true,
        },
        value: {
            type:"function",
            required:true,
        },
    },
    lifecycle: {
        get: {
            role: ["admin"],
        },
        getAll: {
            role: ["admin"],
        },
        patch: {
            role: ["admin"],
            effect: [],
        },
        post: {
            role: ["admin"],
            effect: [],
        },
        delete: {
            role: ["admin"],
            effect: [],
        },
        model: {
            role: ["everybody"],
        },
    },
};
