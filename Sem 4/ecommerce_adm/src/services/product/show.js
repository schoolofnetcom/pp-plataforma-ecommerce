module.exports = (req, res) => {
	return res.render('product/show', {
		title: 'Product',
		layout: 'layouts/main',
		user: req.user || undefined
	})
}