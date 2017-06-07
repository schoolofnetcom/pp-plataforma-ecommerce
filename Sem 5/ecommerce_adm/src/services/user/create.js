const User = require('./../../schemas/user')

module.exports = (req, res) => {

	User
		.create(req.body)
		.then((user) => {
			return res.redirect('/user')
		})
		.catch((error) => {

		})
} 