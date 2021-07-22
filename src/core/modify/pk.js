module.exports = function (payload, ctx) {
    console.log("pk");
    let model = ctx.models.get(payload.model)
    let database = ctx.databases.get(model.database)
    if (ctx.lodash.has(payload.body, "pk")) {
        payload.body = ctx.lodash.assign(payload.body, { [database.pk]: payload.body.pk })
        payload.body = ctx.lodash.omit(payload.body, ["pk"])
    }

    if (ctx.lodash.has(payload.query, "pk")) {
        payload.query = ctx.lodash.assign(payload.query, { [database.pk]: payload.query.pk })
        payload.query = ctx.lodash.omit(payload.query, ["pk"])
    }
};
