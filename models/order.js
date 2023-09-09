const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  id: {
    type: Number,
  },
  paymentid: String,
  orderid: String,
  status: String,
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
})
module.exports = mongoose.model('order', orderSchema);


// const Order = sequelize.define("order", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   paymentid: Sequelize.STRING,
//   orderid: Sequelize.STRING,
//   status: Sequelize.STRING,
// });

