module.exports = {
   name: "set_target",
   function:async function (payload, ctx) {
      //todo: target yapıyorsun ama target array olabilir o zaman ne olacak?
      console.log(31);
      let res = await ctx.run({
         system: true,
         model: payload.model,
         method: "get",
         query: payload.query,
      });
      payload.target = res.data;
   }
}

