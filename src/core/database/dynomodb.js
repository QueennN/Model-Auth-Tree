module.exports = async function(ctx){
    ctx.database({
        name:"dynomodb",
        pk:"id",
        types:{},
        connect:async function(){
            console.log("connection");
        },
        modify:async function (payload,model) {
            console.log("hi dynomo");            
        }
    })
}