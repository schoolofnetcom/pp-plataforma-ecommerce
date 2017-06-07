const Product = require('./../../schemas/product')

module.exports = (req, res) => {
	Product
		.findOne({
			slug: req.params.slug
		})
		.populate('category')
		.then((product) => {
			return res.render('product/show', {
				title: 'Product',
				layout: 'layouts/main',
				user: req.user || undefined,
				product
			})
		})
		.catch((error) => {
			
		})
} 