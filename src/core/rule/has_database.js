module.exports = function (payload, ctx) {
   return ctx.databases.has(payload.body.database)
};
