module.exports = {
    name: "modify",
    database: "store",
    display: "name",
    schema: {
        name: {
            type:"string",
            required:true,
            unique:true,
        },
        function: {
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
