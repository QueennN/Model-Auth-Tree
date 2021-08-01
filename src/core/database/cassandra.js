module.exports = function(ctx){
    ctx.database({
        name:"cassandra",
        pk:"id",
        types:{},
        connect:async function(){
            console.log("connection");
        },
        modify:async function (payload,model) {
            console.log("hi cassandra");            
        }
    })
}