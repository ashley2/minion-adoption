var mongoose = require('mongoose');


var MinionSchema = mongoose.Schema({
  name:  {type: String, required:true},
  hair: {type: String },
  eyes: {type: Number},
  notes: {type: String},
  isAdopted:{type: Boolean, default:false},
  photo: {type: String}
});

module.exports = mongoose.model("Minion", MinionSchema)