module.exports = {
   name: "set_mixin",
   function: async function (payload, ctx) {
      for (let i of payload.body.mixin || []) {
         payload.body = ctx.deepMerge(payload.body, ctx.mixins.get(i))
      }
   }
}

