const Category = require('./../../schemas/category')

module.exports = (req, res) => {
	Category
		.find({
			enable: true
		})
		.then((categories) => {

			return res.render('main/index', {
				title: 'Admin Ecommerce',
				layout: 'layouts/base',
				user: req.user || undefined,
				categories
			})
		})
		.catch((error) => {

		})
}