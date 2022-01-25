const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

mongoDBconnection().catch(err => console.log(err));

async function mongoDBconnection() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('Connect to mongoDB database successfully!!')
}

module.exports = mongoDBconnection