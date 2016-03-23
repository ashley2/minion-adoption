var mongoose = require('mongoose');

var OwnerSchema = mongoose.Schema({
  name:  {type: String, required:true},
  age: {type: Number, },
  notes: {type: String},
  minion: [{type: mongoose.Schema.Types.ObjectId, ref: 'Minion' }],
});

module.exports = mongoose.model("Owner", OwnerSchema)