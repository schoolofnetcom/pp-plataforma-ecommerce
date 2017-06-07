const Category = require('./../../schemas/category')

module.exports = (req, res) => {

	Category
		.findByIdAndRemove(req.params.id)
		.then((category) => {
			return res.redirect('/category')
		})
		.catch((error) => {

		})
}