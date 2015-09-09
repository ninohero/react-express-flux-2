var mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
	characterId: { type: String, unique: true, index: true },
	name: String,
	race: String,
	gender: String,
	bloodline: String,
	winds: { type: Number, default: 0 },
	losses: { type: Number, default: 0 },
	reports: { type: Number, default: 0 },
	random: { type: [Number], index: '20' },
	voted: {type: Boolean, default: false }
});

module.exports = mongoose.model('Character', characterSchema);
