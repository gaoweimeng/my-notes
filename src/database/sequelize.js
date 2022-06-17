import { Sequelize } from 'sequelize'
import sqlite3 from 'sqlite3'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db',
    define: {
        timestamps: false,
        freezeTableName: true
    },
    dialectModule: sqlite3
})

sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.")
}).catch(() => {
    console.log('Unable to connect to the database:', err)
})

export default sequelize