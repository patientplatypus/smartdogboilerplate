// models/race.js
var mongoose = require('mongoose');
// var FormatDate = mongoose.Schema.Types.FormatDate = require('mongoose-schema-formatdate');
// {type: FormatDate, format: 'MM-DD-YYYY', default: Date.now}

var schema = new mongoose.Schema({
  name: { type: String, required: false },
});

var dummySchema = mongoose.model('dummySchema', schema);

module.exports = dummySchema;
