const Product = require('./../../schemas/product')

module.exports = (req, res) => {
	Product
		.find({})
		.populate('category')
		.then((products) => {
			if (!products) {
				return res.redirect('/product')
			}

			return res.render('product/index', {
				title: 'Admin Ecommerce',
				layout: 'layouts/main',
				user: req.user || undefined,
				products
			})
		})
		.catch((error) => {
			return res.redirect('/Product')
		})
}