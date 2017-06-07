module.exports = (app) => {
	app.use('/', require('./routes/main'))
	app.use('/category', require('./routes/category'))
	app.use('/product', require('./routes/product'))
	app.use('/user', require('./routes/user'))
	app.use('/auth', require('./routes/auth'))
}