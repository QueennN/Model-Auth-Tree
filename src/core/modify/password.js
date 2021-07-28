const { sha512 } = require("js-sha512");
module.exports = {
   name: "password",
   function: async function (payload, ctx) {
      payload.body.password = sha512(payload.body.password);
   }
}

