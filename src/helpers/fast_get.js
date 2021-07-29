module.exports = function (model, query, ctx) {
    console.log(ctx.store, "MODEL");
    return ctx.lodash.find(ctx.store.get(model), o => o.name == query)
}