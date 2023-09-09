const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  ispremiumuser: Boolean,
  totalExpense: {
    type:Number,
    default: 0
  }
})

module.exports = mongoose.model('user', userSchema);

// const User = sequelize.define("user", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   name: {
//     type: Sequelize.STRING,
//   },
//   email: {
//     type: Sequelize.STRING,
//     unique: true,
//   },
//   password: {
//     type: Sequelize.STRING,
//   },
//   ispremiumuser: Sequelize.BOOLEAN,
//   totalExpense: {
//     type:Sequelize.INTEGER,
//     defaultValue: 0
//   }
// });

