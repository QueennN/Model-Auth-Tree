module.exports = {
    name: "metrics",
    function: async (payload, ctx) => {
        if (payload.method == "delete") {
            ctx.models.delete(payload.body.name)
        } else {
            ctx.models.set(payload.body.name, payload.body);
        }
    }
}

