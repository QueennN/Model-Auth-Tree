module.exports = function (ctx) {
    ctx.database({
        name: "axios",
        pk: "name",
        types: {
            
        },
        connect: async function () {
            
        },
        modify: async function (model, ctx) {
            model.methods.set("get", async function (_payload, _ctx) {
           
            });

            model.methods.set("getAll", async function (_payload, _ctx) {
                
            });

            model.methods.set("create", async function (_payload, _ctx) {
         
            });

            model.methods.set("update", async function (_payload, _ctx) {
                
            });
            model.methods.set("delete", async function (_payload, _ctx) {
               
            });

            model.methods.set("count", async function (_payload, _ctx) {
               
            });
        },
        mixin: [],
    })
}