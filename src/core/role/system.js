module.exports = {
   name: "system",
   function: async function (payload, ctx) {
      return ctx.lodash.has(payload, 'system')
   }
}
