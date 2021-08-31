module.exports = async function (payload, ctx) {
   let arr = ctx.helpers.defaultArrayCalc(payload, "preRule");
   if (arr.every((i) => ctx.local.has("rule", i))) {
      for (let i of arr) {
         let start = Date.now()
         let res = await ctx.local.get("rule", i).function(payload, ctx);
         payload.metrics.lifecycle_response_times.push({
            name: i,
            time: Date.now() - start
         })
         if (res == false) {
            payload.response.warnings.push(`false preRule: ${i}`);
            return false;
         }
      }
      return true;
   } else {
      payload.response.status = false
      payload.response.warnings.push(`Missing preRule: ` + ctx.lodash.remove(rules, r => !ctx.local.has("rule", r)));
      return false
   }
};
