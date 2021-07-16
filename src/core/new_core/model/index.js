const model = require("./model/model.js")

module.exports = async function (ctx) {
    ctx.model = async function(model){
        await ctx.run({
            system: true,
            model: "model",
            method: "post",
            body: model
        })
    }    
    await ctx.model(model)
    await ctx.modify("fix",require("./modify/fix.js"))
    await ctx.modify("set_methods",require("./modify/set_methods.js"))
    await ctx.modify("set_mixins",require("./modify/set_mixins.js"))
}