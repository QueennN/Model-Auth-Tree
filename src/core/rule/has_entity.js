module.exports = async function (payload, ctx) {
   let model = ctx.models.get(payload.model);
   let keys = ctx.lodash.keys(payload.body);
   for (let key of keys) {
      if (model.schema[key].relation) {
         let res = await tx.run({
            system: true,
            model: model.schema[key].relation,
            query: {
               [model.database.pk]: payload.body[key]
            },
            key: payload.body[key]
         })
         if (!res) return false
      }
   }
   return true
};
