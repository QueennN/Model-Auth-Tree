module.exports = async function (ctx) {
    ctx.local = {
        get: function (model, name) {
            return ctx.lodash.find(ctx.store.get(model), { name })
        },
        has: function (model, name) {
            return ctx.lodash.has(ctx.store.get(model), { name })
        }
    }
}