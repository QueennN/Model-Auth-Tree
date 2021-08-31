module.exports = {
   name: "set_store_pool",
   function: async function (payload, ctx) {
      if (!ctx.store.has(payload.body.name)) {
         ctx.store.set(payload.body.name, [])
      }
   }
}