module.exports = async function (ctx) {
   ctx.store.set("first_of_all", []); //TODO bURADAN has model ve methodu sildim.
   ctx.store.set("read_write", {
      get:"read",
      getAll:"read",
      post:"write",
      patch:"write",
      getAll:"write",
   });
};
