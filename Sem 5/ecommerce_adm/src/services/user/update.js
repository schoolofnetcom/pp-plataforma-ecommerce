const User = require('./../../schemas/user')

module.exports = (req, res) => {
	User
		.findById(req.params.id)
		.then((user) => {
			user.password = req.body.password

			user.setPassword(user.password, (error, updated, passError) => {
				if (error || passError) {
					return 
				}

				updated.save()

				User
					.findByIdAndUpdate(req.params.id, req.body)
					.then((user) => {
						return res.redirect('/user')
					})						
			})
		})
		.catch((error) => {

		})
}