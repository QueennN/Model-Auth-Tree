module.exports = async function (ctx) {
    let funcs = ["modify", "effect", "filter", "rule", "role","mixin"]
    for (let f of funcs) {
        ctx[f] = async function (name,func) {
            ctx.store[f].set(name,func)
        }
    }
}