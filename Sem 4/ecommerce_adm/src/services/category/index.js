const Category = require('./../../schemas/category')

module.exports = (req, res) => {
	Category
		.find({})
		.then((categories) => {
			if (!categories) {
				return res.redirect('/category')
			}

			return res.render('category/index', {
				title: 'Admin Ecommerce',
				layout: 'layouts/main',
				user: req.user || undefined,
				categories
			})
		})
		.catch((error) => {
			return res.redirect('/category')
		})
}