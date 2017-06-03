module.exports = (app) => {
	app.locals.checked = function(value) {
		return value === true ? 'checked' : ''
	}
}