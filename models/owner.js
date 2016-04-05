var mongoose = require('mongoose');


var OwnerSchema = mongoose.Schema({
  name:  {type: String, required:true},
  age: {type: Number, },
  notes: {type: String},
  minions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Minion' }],
  photo: {type: String}
});

module.exports = mongoose.model("Owner", OwnerSchema)