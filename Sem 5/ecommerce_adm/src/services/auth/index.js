module.exports = (req, res) => {
	return res.render('auth/index', {
		title: 'Admin Ecommerce',
		layout: 'layouts/login'
	})
}