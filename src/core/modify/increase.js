module.exports = {
   name: "increase",
   function:async function (payload, ctx) {
      if (payload.options.hasOwnProperty("increase") && payload.options.increase) {
         for (let key in payload.body) {
            payload.body[key] = payload.body[k] + payload.target[key];
         }
      }
   }
}

