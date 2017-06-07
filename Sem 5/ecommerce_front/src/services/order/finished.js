module.exports = (req, res) => {
	return res.render('order/finished', {
		title: 'Thanks',
		layout: 'layouts/main',
		user: req.user || undefined,
	})
}