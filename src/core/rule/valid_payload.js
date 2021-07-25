module.exports = async function (payload, ctx) {
   //TODO: bence olmayacaklar yerine olacakları kontrol etmek lazım. 
   //eğer birisini payloada esktra alan eklerse client manüpüle debilir.
   return !ctx.lodash.has(payload, "user") && !ctx.lodash.has(payload, "response" && !ctx.lodash.has(payload, "target"));
};
