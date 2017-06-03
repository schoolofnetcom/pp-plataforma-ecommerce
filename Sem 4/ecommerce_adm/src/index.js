module.exports = (app) => {
	app.use('/', require('./routes/main'))
	app.use('/category', require('./routes/category'))
}