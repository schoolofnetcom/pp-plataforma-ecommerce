module.exports = (app) => {
	app.use('/', require('./routes/main'))
	app.use('/account', require('./routes/account'))
	app.use('/category', require('./routes/category'))
}