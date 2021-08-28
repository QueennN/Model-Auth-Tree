var assert = require('assert');

describe('Fookie model get flow', function () {
    it('get flow', async function () {
        const Fookie = require("../src/index")
        const fookie = new Fookie()
        await fookie.core()
        let res = await fookie.run({
            system: true,
            model: "model",
            method: "get",
            query: {
                name: "model"
            }
        })
        assert.equal(res.status, 200)
        assert.equal(res.data.name, "model")
    });
});