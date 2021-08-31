

(async () => {
    const Fookie = require("../src/index");
    const lodash = require("lodash")
    const fookie = new Fookie()
    await fookie.core()

    let res = await fookie.run({
        system: true,
        model: "setting",
        method: "getAll",
        body: {
            name: "test3123",
            value: "asdasd"
        },
        attributes: ["name"]
    })
    console.log(res);
})()