const jwt = require("jsonwebtoken");
module.exports = async function (payload, ctx) {
   if (ctx.lodash.has(payload, "system")) return payload.system;
   let parsed = false;
   try {
      parsed = jwt.verify(payload.token, ctx.store.get("secret"));
      payload.user = parsed
   } catch (error) {
      payload.response.warnings.push("invalid token");
   }
};
