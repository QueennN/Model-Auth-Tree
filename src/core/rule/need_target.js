
module.exports = {
  name: "need_target",
  function: async function (payload, ctx) {
    return ctx.lodash.has(payload,'target')
  }
}
