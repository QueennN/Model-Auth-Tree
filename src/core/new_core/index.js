module.exports = async function(ctx){
    await ctx.use(require("./functions/index"))
    await ctx.use(require("./database/index"))
    await ctx.use(require("./model/index"))
    await ctx.use(require("./user/index"))
}