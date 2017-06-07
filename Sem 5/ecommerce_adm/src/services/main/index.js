module.exports = (req, res) => {
	return res.render('main/index', {
		title: 'Admin Ecommerce',
		layout: 'layouts/main',
		user: req.user || undefined
	})
}