module.exports = async function (payload, ctx) {
    ctx.store.get("model").set(payload.body.name,payload.body)
    ctx.store.get("model").get(payload.body.name).methods = new Map()
    await ctx.database.get(payload.body.database).modify(payload, ctx)
}