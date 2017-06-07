const Product = require('./../../schemas/product')
const Category = require('./../../schemas/category')

module.exports = (req, res) => {

	Category
		.find({
			enable: true
		})
		.then((categories) => {
			let product = new Product()
			
			return res.render('product/new', {
				title: 'Admin Ecommerce',
				layout: 'layouts/main',
				user: req.user || undefined,
				categories,
				product
			})
		})
		.catch((error) => {

		})
}