module.exports = (req, res) => {
	return res.render('category/show', {
		title: 'Category',
		layout: 'layouts/main',
		user: req.user || undefined	
	})
}