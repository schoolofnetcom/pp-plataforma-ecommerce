const Cart = require('./../../schemas/cart')

module.exports = (req, res) => {
	Cart
		.findById(req.params.id)
		.populate('products')
		.then((cart) => {
			cart.products.pull({ _id: req.query.product_id })
			cart.save()

			if (!cart.products.length) {
				return res.redirect('/')
			}

			return res.redirect('/cart/'.concat(req.params.id))
		})
}