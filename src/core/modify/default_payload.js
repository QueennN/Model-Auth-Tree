module.exports = {
   name: "default_payload",
   function:async function (payload, ctx) {
      payload = ctx.lodash.merge(payload,{
         options: {
         
         },
         response: {
            data: undefined,
            warnings: [],
            status: 200,
         },
         body: {},
         query: {},
         projection:{}
      } );
   }
}

