module.exports = async function (ctx) {
    ctx.store.set("model",new Map())
    ctx.model = async function(model){
        await ctx.run({
            system: true,
            model: "model",
            method: "post",
            body: model
        })
    }  
}