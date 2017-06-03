const Category = require('./../../schemas/category')

module.exports = (req, res) => {

	Category
		.findByIdAndUpdate(req.params.id, req.body)
		.then((category) => {
			return res.redirect('/category')
		})
		.catch((error) => {

		})
}