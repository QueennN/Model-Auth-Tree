let database = require("./model/database.js")

module.exports = async function(ctx){
    ctx.database = async function(model){
        return await ctx.run({
            system:true,
            model:"database",
            method:"set",
            body:model
        })
    }    
    await ctx.database(database)
}