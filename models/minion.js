var mongoose = require('mongoose');

var MinionSchema = mongoose.Schema({
  name:  {type: String, required:true},
  hair: {type: String },
  eyes: {type: String},
  notes: {type: String},
  adopted:{type: Boolean}
});

module.exports = mongoose.model("Minion", MinionSchema)