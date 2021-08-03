module.exports = function (ctx) {
    ctx.database({
        name: "store",
        pk: "name",
        types: {
            any: null,
            object: Object,
            string: String,
            number: Number,
            boolean: Boolean,
            function: Function,
            array: Array,
        },
        connect: async function () {
            console.log("Local store connected...");
        },
        modify: async function (model, ctx) {
            model.methods.set("get", async function (_payload, _ctx) {
                return _ctx.lodash.find(_ctx.store.get(_payload.model), _payload.query)
            });

            model.methods.set("getAll", async function (_payload, _ctx) {
                return _ctx.lodash.filter(_ctx.store.get(_payload.model), _payload.query)
            });

            model.methods.set("post", async function (_payload, _ctx) {
                _payload.body.id = "mdb_" + _ctx.uuid.v4()
                _ctx.store.get(_payload.model).push(_payload.body)
                return _payload.body
            });

            model.methods.set("patch", async function (_payload, _ctx) {
                let pool = _ctx.lodash.filter(_ctx.store.get(_payload.model), _payload.query)
                pool = pool.map(i => _ctx.lodash.merge(i, _payload.body))
                _ctx.store.set(_payload.model, pool)
            });

            model.methods.set("delete", async function (_payload, _ctx) {
                _ctx.store.set(_payload.model, _ctx.lodash.filter(_ctx.store.get(_payload.model), _payload.query))
            });

            model.methods.set("count", async function (_payload, _ctx) {
                return _ctx.lodash.filter(_ctx.store.get(_payload.model), _payload.query).length
            });
        },
        mixin: [],
    })
}