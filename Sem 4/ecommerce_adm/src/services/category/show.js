const Category = require('./../../schemas/category')

module.exports = (req, res) => {
	Category
		.findById(req.params.id)
		.then((category) => {
			if (!category) {
				return res.redirect('/category')
			}

			return res.render('category/show', {
				title: 'Category',
				layout: 'layouts/main',
				user: req.user || undefined	,
				category
			})

		})
}