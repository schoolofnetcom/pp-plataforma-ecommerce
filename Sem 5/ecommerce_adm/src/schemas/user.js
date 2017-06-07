const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const User = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String
	}
})

User.plugin(passportLocalMongoose, { usernameField: 'email'})

module.exports = mongoose.model('User', User)