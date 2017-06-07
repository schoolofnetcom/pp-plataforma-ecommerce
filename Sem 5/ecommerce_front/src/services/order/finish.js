const Cart = require('./../../schemas/cart')
const Product = require('./../../schemas/product')
const pagseguro = require('pagseguro')
const parseString = require('xml2js').parseString
const info = require('./../../configs/info')
const url = require('./../../utils/url')

module.exports = (req, res) => {
	Cart
		.findById(req.body.cart_id)
		.populate('products.product')
		.populate('customer')
		.then((cart) => {
			if (!cart) {
				return ;
			}

			cart && cart.products && cart.products.forEach((item) => {
				return item.total_price = item.quantity * item.product.sales_price
			})
			cart && cart.products && cart.products.forEach((item) => {
				return cart.total = cart.total + item.total_price
			})

			cart.shipping = 0
			cart.total = cart.total + cart.shipping
			cart.finished = true

			let pag = new pagseguro({
				email: info.emailPag,
				token: info.tokenPag,
				mode: 'sandbox'
			})

			pag.currency('BRL')
				.reference(12345)

			let counter = 1

			cart && cart.products && cart.products.forEach((item) => {
				return pag.addItem({
					id: counter++,
					description: item && item.product.desc,
					amount: item && item.product && item.product.sales_price.toFixed(2).toLocaleString('en-US', {
						minimiumFractionDigits: 2
					}),
					quantity: item && item.quantity,
					weight: 1
				})
			})

			pag.buyer({
				name: cart && cart.customer && cart.customer.name,
				email: cart && cart.customer && cart.customer.email,
				phoneAreaCode: cart && cart.customer && cart.customer.celphone.slice(0, 2),
				phoneNumber: cart && cart.customer && cart.customer.celphone.slice(2, 11),
			})

			pag.shipping({
				type: 1,
				street: cart && cart.customer && cart.customer.address && cart && cart.customer && cart.customer.address.street,
				number: cart && cart.customer && cart.customer.address && cart && cart.customer && cart.customer.address.number,
				complement: 'nenhum',
				district: cart && cart.customer && cart.customer.address && cart && cart.customer && cart.customer.address.neightborhood,
				postalCode: '29902-150',
				city: cart && cart.customer && cart.customer.address && cart && cart.customer && cart.customer.address.city,
				state: 'SP',
				country: 'BRA'
			})

			pag.setRedirectURL(url(req, '/order/finished'))

			pag.send((error, result) => {
				if (error) {
					console.log(error)
				}
				
				parseString(result, (error, data) => {
					if (error) {
						console.log(error)
					}

					cart && cart.products && cart.products.forEach((item) => {
						return Product
								.findById(item.product)
								.then((product) => {
									product.quantity = product.quantity - item.quantity
									product.save()
								})
					})

					let checkout_code = data && data.checkout && data.checkout.code && data.checkout.code[0]
				
					return res.redirect('https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=' + checkout_code)
				})
			})
		})
}