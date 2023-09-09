const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const forgotPasswordRequestsSchema = new Schema({
        uuid:{
        type:String,
      },
    isactive:{
      type:Boolean,
    },
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
    
    
  })
  
  module.exports = mongoose.model('forgotPasswordRequests', forgotPasswordRequestsSchema);
  
// const ForgotPasswordRequests = sequelize.define("forgotpasswordrequests", {
//     uuid:{
//         type:Sequelize.STRING,
//       },
//     userId:{
//         type:Sequelize.INTEGER,
//     },
//     isactive:{
//         type:Sequelize.BOOLEAN,
//     }
// });
