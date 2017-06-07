const Category = require('./../../schemas/category')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {

	let slug = slugfy(req.body.name)

	req.body.slug = slug

	Category
		.create(req.body)
		.then((category) => {
			return res.redirect('/category')
		})
		.catch((error) => {

		})
} 