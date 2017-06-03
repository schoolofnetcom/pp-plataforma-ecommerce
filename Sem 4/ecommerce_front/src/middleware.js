const Category = require('./schemas/category')

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

}