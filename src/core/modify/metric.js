module.exports = {
   name: "metric",
   function: async function (payload, ctx) {
      ctx.metrics.request.inc()
      ctx.metrics.start = Date.now()
   }
}

