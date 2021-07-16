module.exports = async function (payload, ctx) {
   let arr = ctx.helpers.defaultArrayCalc(payload, "modify");
   if (
      arr.every(function (e) {
         return ctx.store.modify.has(e);
      })
   ) {
      for (let m of arr) {
         await ctx.store.modify.get(m)(payload, ctx);
      }
   } else {
      throw Error("Missing modify");
   }
};
