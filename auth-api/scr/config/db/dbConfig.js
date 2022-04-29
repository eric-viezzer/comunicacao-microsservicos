import { Sequelize } from "sequelize";

const sequelize = new Sequelize("auth-db", "admin", 123456, {
    host: "localhost",
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
        syncOnAssociation: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true
    }
});

sequelize.authenticate().then(() => {
    console.log("connection has ben stabilished!");
}).catch((err) => {
    console.error("Unable to connect to the database");
    console.log(err.message);
});

export default sequelize;