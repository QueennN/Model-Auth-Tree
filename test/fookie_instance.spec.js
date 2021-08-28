

describe("Fookie instance requirements", async function () {
  it('insrance of fookie have to include [run,fuzzer,rule,effect,filter,role,database,use,model,mixin]', async function () {
    
    const Fookie = require("../src/index")
    const fookie = new Fookie()
    if (!fookie.store) throw Error("")
    if (!fookie.run) throw Error("")
    if (!fookie.fuzzer) throw Error("")
    if (!fookie.rule) throw Error("")
    if (!fookie.effect) throw Error("")
    if (!fookie.filter) throw Error("")
    if (!fookie.role) throw Error("")
    if (!fookie.database) throw Error("")
    if (!fookie.use) throw Error("")
    if (!fookie.model) throw Error("")
    if (!fookie.mixin) throw Error("")
      
  });

});