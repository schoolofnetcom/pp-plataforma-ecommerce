const Customer = require('./../../schemas/customer')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {
	let birthday = req.body.birthday.toString().split('/')
	let slug = slugfy(req.body.name)

	let data = {
		name: req.body.name,
		email: req.body.email,
		slug: slug,
		birthday: {
			day: birthday[0],
			month: birthday[1],
			year: birthday[2]
		},
		id: req.body.cpf,
		celphone: req.body.celphone,
		address: {
			street: req.body.street,
			number: req.body.number_delivery,
			city: req.body.city,
			neightborhood: req.body.neightborhood
		}
	}

	Customer
		.findById(req.params.id)
		.then((customer) => {
			if (!customer) {
				return res.redirect('/')
			}

			customer.password = req.body.password

			customer.setPassword(customer.password, (error, updated, passErr) => {
				if (error || passErr) {
					return res.redirect('/')
				}

				updated.save()

				Customer
					.findByIdAndUpdate(req.params.id, data)
					.then((updated) => {
						return res.redirect('/account/' + req.user.slug)
					})
			})
		})
		.catch((error) => {
			return res.redirect('/account/' + req.user.slug)			
		})	
}