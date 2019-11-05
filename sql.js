const Sequelize = require("sequelize");

const sequelize = new Sequelize ("ngblog", "root", "12345", {
    host: "localhost",
    dialect: "mariadb",
    port: 3308
});

init = function(){
    sequelize
        .authenticate()
            .then(
                () => {
                    console.log("DATABASE connection established ");
                }
            )
            .catch(
                err => {
                    console.log("Unable to established connection" + err)
                }
            );
};