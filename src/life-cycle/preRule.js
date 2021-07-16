module.exports = async function (payload, ctx) {
   for (let rule of ctx.store.get("first_of_all")) {
      let res = await ctx.store.rule.get(rule)(payload, ctx);
      if (res ==false) {
         payload.response.warnings.push(`false first of all: ${rule}`);
         return false;
      }
   }
   let preRules = ctx.helpers.defaultArrayCalc(payload, "preRule");
   if (store.rule.every((rule) => ctx.store.rule.has(rule))) {
      for (let rule of store.rule) {
         let res = await ctx.store.rule.get(rule)(payload, ctx);
         if (res == false) {
            payload.response.warnings.push(`false preRule: ${rule}`);
            return false;
         }
      }
      return true;
   } else {
      payload.response.warnings.push(`Missing preRule`,store.rule);
      return false     
   }
};
