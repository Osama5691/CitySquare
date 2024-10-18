
const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  visits: { type: Number, default: 0 },
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
