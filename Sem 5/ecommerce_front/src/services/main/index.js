const Product = require('./../../schemas/product')

module.exports = (req, res) => {
	Product
		.find({
			enable: true
		})
		.then((products) => {

			return res.render('main/index', {
				title: 'Admin Ecommerce',
				layout: 'layouts/base',
				user: req.user || undefined,
				products
			})
		})
		.catch((error) => {

		})
}