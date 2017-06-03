const Category = require('./../../schemas/category')

module.exports = (req, res) => {
	let category = new Category()

	return res.render('category/new', {
		title: 'Admin Ecommerce',
		layout: 'layouts/main',
		user: req.user || undefined,
		category
	})
}