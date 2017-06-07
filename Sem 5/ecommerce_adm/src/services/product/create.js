const Product = require('./../../schemas/product')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {
	let slug = slugfy(req.body.name)

	req.body.slug = slug

	if (req.body.discount > 0) {
		let discount = req.body.discount / 100
		let real_price = req.body.sales_price
		let sales_price = req.body.sales_price - (req.body.sales_price * discount)

		req.body.sales_price = sales_price
		req.body.real_price = real_price
	} else {
		req.body.sales_price = req.body.sales_price
		req.body.real_price = req.body.sales_price
	}

	req.body.image = ''
	
	if (req.files && req.files.length) {
		req.body.image = req.files && req.files[0] && req.files[0].location
	}

	Product
		.create(req.body)
		.then((product) => {
			return res.redirect('/product')
		})
		.catch((error) => {

		})
} 