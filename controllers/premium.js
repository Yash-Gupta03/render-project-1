const Expense = require("../models/expense");
const User = require("../models/user");
const sequelize = require("../utils/database");





exports.getAllExpenses = async (req, res, next) => {
  const leaderboardDetails = await User.find();
    
console.log(leaderboardDetails);
res.status(202).json({ expenseLeaderboard: leaderboardDetails});

  };

