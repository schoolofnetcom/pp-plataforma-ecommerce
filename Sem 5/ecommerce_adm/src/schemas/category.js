const mongoose = require('mongoose')

const Category = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		default: ''
	},
	slug: {
		type: String,
		required: true
	},
	enable: {
		type: Boolean,
		required: true,
		default: true
	},
	created: {
		type: Date,
		required: true,
		default: new Date()
	}
})

module.exports = mongoose.model('Category', Category)