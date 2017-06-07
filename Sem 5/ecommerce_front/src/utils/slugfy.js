module.exports = (str) => {
	str = str.replace(/^\s+|\s+$/g, '')
	str = str.toLowerCase()

	let accent = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
	let to     = 'aaaaeeeeiiiioooouuuunc------'

	for (let i = 0, l = accent.length; i < l; i++) {
		str = str.replace(new RegExp(accent.charAt(i), 'g'), to.charAt(i))
	}

	str = str.replace(/[^a-z0-9 -]/g, '')
			 .replace(/\s+/g, '-')
			 .replace(/-+/g , '-')

	return str
}