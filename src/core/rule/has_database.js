module.exports = {
   name: "has_database",
   function: async function (payload, ctx) {
      return ctx.databases.has(payload.body.database)
   }
}
