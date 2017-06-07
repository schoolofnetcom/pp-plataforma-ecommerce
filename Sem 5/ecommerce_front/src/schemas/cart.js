const mongoose = require('mongoose')

const Cart = new mongoose.Schema({
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer'
	},
	shipping: {
		type: Number,
		default: 0
	},
	products: [{
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product'
		},
		quantity: {
			type: Number,
			required: true,
			default: 1
		}
	}],
	total: {
		type: Number,
		required: true,
		default: 0
	},
	finished: {
		type: Boolean,
		default: false
	},
	created: {
		type: Date,
		required: true,
		default: new Date()
	}
})

module.exports = mongoose.model('Cart', Cart)