const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Customer = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String
	},
	birthday: {
		day: {
			type: Number,
			required: true,
			default: ''
		},
		month: {
			type: String,
			required: true,
			default: ''
		},
		year: {
			type: Number,
			required: true,
			default: ''
		}
	},
	id: {
		type: String,
		required: true
	},
	celphone: {
		type: String,
		default: ''
	},
	address: {
		street: {
			type: String,
			required: true
		},
		number: {
			type: Number,
			required: true
		},
		city: {
			type: String,
			required: true
		},
		neightborhood: {
			type: String,
			required: true
		}
	}
})

Customer.plugin(passportLocalMongoose, { usernameField: 'email'})

module.exports = mongoose.model('Customer', Customer)