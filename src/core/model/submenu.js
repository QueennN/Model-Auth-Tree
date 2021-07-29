module.exports = {
   name: "submenu",
   database:"mongodb",
   display: "_id",
   schema: {
      model: {
         relation: "model",
      },
      menu: {
         relation: "menu",
      },
      icon: {
         input: "text",
         type: "string",
      },
   },
   lifecycle: {
      get: {
         role: ["everybody"],
      },
      getAll: {
         filter: [],
         role: ["everybody"],
      },
      patch: {
         role: ["admin"],
         effect: [],
      },
      post: {
         role: ["admin"],
         effect: [],
      },
      delete: {
         role: ["admin"],
      },
      model: {
         role: ["everybody"],
      },
      count: {
         role: ["admin"],
      },
   },
};
