const Product = require('./../../schemas/product')

module.exports = (req, res) => {

	Product
		.findByIdAndRemove(req.params.id)
		.populate('category')
		.then((product) => {
			return res.redirect('/product')
		})
		.catch((error) => {

		})
}