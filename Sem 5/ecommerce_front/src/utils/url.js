module.exports = (req, path) => {
	let url = req.protocol.concat('://')
						  .concat(req.get('host'))
						  .concat(path || req.originalUrl)

   return url
}