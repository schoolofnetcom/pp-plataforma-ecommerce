module.exports = (app) => {
	app.locals.checked = function(value) {
		return value === true ? 'checked' : ''
	},
	app.locals.selected = function(option, value) {
		return option.toString() == value.toString() ? 'selected' : ''
	}
	
}