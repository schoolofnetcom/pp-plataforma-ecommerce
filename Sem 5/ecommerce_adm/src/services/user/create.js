const User = require('./../../schemas/user')

module.exports = (req, res) => {
	let data = {
		email: req.body.email
	}
	
	User
		.register(data, req.body.password, (error, user) => {
			if (error) {
				return;
			}

			return res.redirect('/user')
		})
} 
