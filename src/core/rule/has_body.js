


module.exports = {
   name: "has_body",
   function: function (payload, ctx) {
      return ctx.lodash.has(payload, "body");
   }
}
