module.exports = (req, res) => {
	if (!req.user) {
		return res.render('account/index', {
			title: 'Account',
			layout: 'layouts/main',
			user: req.user || undefined
		})
	}

	return res.redirect('/account/' + req.user.slug)
}