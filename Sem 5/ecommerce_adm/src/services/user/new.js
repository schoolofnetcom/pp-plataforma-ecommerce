const User = require('./../../schemas/user')

module.exports = (req, res) => {
	let user = new User()

	return res.render('user/new', {
		title: 'Admin Ecommerce',
		layout: 'layouts/main',
		user: req.user || undefined,
		data: user
	})
}