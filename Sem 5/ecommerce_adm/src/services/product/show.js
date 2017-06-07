const Product = require('./../../schemas/product')
const Category = require('./../../schemas/category')

module.exports = (req, res) => {
	Category
		.find({
			enable: true
		})
		.then((categories) => {
			Product
				.findById(req.params.id)
				.populate('category')
				.then((product) => {
					if (!product) {
						return res.redirect('/product')
					}

					return res.render('product/show', {
						title: 'product',
						layout: 'layouts/main',
						user: req.user || undefined,
						categories,
						product
					})

				})
		})
		.catch((error) => {

		})

}