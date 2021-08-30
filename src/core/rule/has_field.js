module.exports = {
   name: "has_field",
   function: async function (payload, ctx) {
      let body_keys = ctx.lodash.keys(payload.body)
      let schema_keys = ctx.lodash.keys(ctx.local.get("model", payload.model).schema)
      if (!body_keys.every((k) => schema_keys.includes(k)))
         console.log(body_keys, "-", schema_keys);
      return body_keys.every((k) => schema_keys.includes(k))
   }
}
