
module.exports = {
   name: "need_method_in_options",
   function: async function (payload, ctx) {
      return payload.options.hasOwnProperty("method") && typeof payload.options.method == "string";
   }
}
