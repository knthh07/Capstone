const mongoose = require('mongoose')
// gagawa ka ng account sa mongodb sa .env lahat ng mga ilalagay nyu na mga credentials nyu sa account para secured
const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log(`MongoDB is Connected`)
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
}

module.exports = connectDB
