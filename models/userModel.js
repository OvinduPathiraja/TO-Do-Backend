const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true, //checks for email format
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, { timestamps: true },)
  return User
}

export const User = userModel;
