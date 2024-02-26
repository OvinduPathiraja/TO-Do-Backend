import { Sequelize, DataTypes } from "sequelize";
import { User } from "./userModel.js";

const sequelize = new Sequelize(`postgres://postgres:Pathi123@todo.czgukgycoq06.eu-north-1.rds.amazonaws.com/postgres?charset=utf8&parseTime=True&loc=Local`, { dialect: "postgres" })

//checking if connection is done
sequelize.authenticate().then(() => {
  console.log(`Database connected to discover`)
}).catch((err) => {
  console.log(err)
})

const Db = {}
Db.Sequelize = Sequelize
Db.sequelize = sequelize

//connecting to model
Db.users = User(sequelize, DataTypes)

//exporting the module
export default Db;
