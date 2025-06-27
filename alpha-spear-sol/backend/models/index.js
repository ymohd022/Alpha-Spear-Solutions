const { Sequelize } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(
  process.env.DB_NAME || "alphaspear_db",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      timestamps: true,
      underscored: true,
      freezeTableName: true,
    },
  },
)

const db = {}

// Import models
db.Contact = require("./Contact")(sequelize, Sequelize.DataTypes)
db.Quote = require("./Quote")(sequelize, Sequelize.DataTypes)
db.Newsletter = require("./Newsletter")(sequelize, Sequelize.DataTypes)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
