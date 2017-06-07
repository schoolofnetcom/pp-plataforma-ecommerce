const Product = require('./../../schemas/product')

module.exports = (req, res) => {

	Product
		.findById(req.params.id)
		.then((product) => {
			if (req.body.discount > 0 && req.body.discount != product.discount) {
				let discount = req.body.discount / 100
				let real_price = req.body.sales_price
				let sales_price = req.body.sales_price - (req.body.sales_price * discount)

				req.body.real_price = real_price
				req.body.sales_price = sales_price
			} else {
				req.body.real_price = product.real_price
				// req.body.sales_price = req.body.sales_price
			}

			if (!req.body.enable) {
				req.body.enable = false
			} else {
				req.body.enable = true
			}

			if (req.files && req.files.length) {
				req.body.image = req.files && req.files[0] && req.files[0].location
			}

			Product
				.findByIdAndUpdate(req.params.id, req.body)
				.then((product) => {
					return res.redirect('/product')
				})
		})
		.catch((error) => {

		})
}