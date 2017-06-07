const User = require('./../../schemas/user')

module.exports = (req, res) => {
	User
		.find({})
		.then((users) => {
			if (!users) {
				return res.redirect('/user')
			}

			return res.render('user/index', {
				title: 'Admin Ecommerce',
				layout: 'layouts/main',
				user: req.user || undefined,
				users
			})
		})
		.catch((error) => {
			return res.redirect('/user')
		})
}