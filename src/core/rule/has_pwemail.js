module.exports = {
    name: "has_pwemail",
    function: async function ({ body },ctx) {
        return (body.password != null && body.email != null)
    }
 }
 