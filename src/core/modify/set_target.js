module.exports = {
   name: "set_target",
   function:async function (payload, ctx) {
      // target yapıyorsun ama target array olabilir o zaman ne olacak? removed feature
      let res = await ctx.run({
         system: true,
         model: payload.model,
         method: "get",
         query: payload.query,
      });
      payload.target = res.data;
   }
}

