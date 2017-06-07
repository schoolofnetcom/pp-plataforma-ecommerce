module.exports = (app) => {
	app.use('/', require('./routes/main'))
	app.use('/account', require('./routes/account'))
	app.use('/category', require('./routes/category'))	
	app.use('/product', require('./routes/product'))	
	app.use('/cart', require('./routes/cart'))
	app.use('/order', require('./routes/order'))
}