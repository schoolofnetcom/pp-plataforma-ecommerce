const User = require('./../../schemas/user')

module.exports = (req, res) => {

	User
		.findByIdAndRemove(req.params.id)
		.then((user) => {
			return res.redirect('/user')
		})
		.catch((error) => {

		})
}