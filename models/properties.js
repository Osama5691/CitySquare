

const mongoose = require('mongoose');

const propertiesSchema = new mongoose.Schema({
  visits: { type: Number, default: 0 },
});

const Properties = mongoose.model('Properties', propertiesSchema);

module.exports = Properties;


//4MQYlRsSmGOjkzbx