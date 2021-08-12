module.exports = function (ctx) {
    ctx.database({
        name: "fookie",
        pk: "name",
        url: "",
        types: {},
        connect: async function (config) {
            this.url = config.url
            console.log("Local store connected...");
        },
        modify: async function (model, ctx) {
            model.methods.set("request", async function (_payload, _ctx) {
                return await _ctx.axios.post(this.url, _payload)
            });
        },
        mixin: [],
    })
}