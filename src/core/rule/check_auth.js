module.exports = async function (payload, ctx) {
   if (ctx.lodash.has(payload, "system")) {
      return payload.system;
   }
   let roles = ctx.helpers.defaultArrayCalc(payload, "role");

   if (roles.length == 0) return true;

   if (roles.every((e) => ctx.roles.has(e))) {
      for (let role of roles) {
         let res = await ctx.roles.get(role)(payload, ctx);
         let store.modify = [];
         if (res) {
            try {
               store.modify = ctx.models.get(payload.model).lifecycle[payload.method].resolve[role];
            } catch (error) {}
            await Promise.all(store.modify.map((m) => ctx.store.modify.get(m)(payload, ctx)));
            return true;
         }

         payload.response.warnings.push(`You are not: ${role}`);
         store.modify = [];
         try {
            store.modify = ctx.models.get(payload.model).lifecycle[payload.method].reject[role];
         } catch (error) {}
         if (store.modify.length == 0) return false;
         else {
            payload.response.warnings.push(`Rejected Role found. Payload manupilated.: ${role}`);
         }
         await Promise.all(store.modify.map((m) => ctx.store.modify.get(m)(payload, ctx)));
      }
      return true;
   } else {
      throw Error("Missing role");
   }
};
