const Category = require('./schemas/category')
const Cart = require('./schemas/cart')

module.exports = (app) => {
	app.use((req, res, next) => {
		Category
			.find({
				enable: true
			})
			.then((categories) => {
				res.locals.categories_menu = categories

				return next()
			})
			.catch((error) => {

			})
	})

	app.use((req, res, next) => {
		let cart_id = req.session.cart_id

		Cart
			.findById(cart_id)
			.then((cart) => {
				res.locals.cart_g = {
					_id: cart && cart._id || undefined,
					count: 0
				}

				cart && cart.products && cart.products.forEach((item) => {
					return res.locals.cart_g.count = res.locals.cart_g.count + item.quantity
				})
				
				return next()
			})
			.catch((error) => {
				console.log(error)
			})
	})

}