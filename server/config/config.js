module.exports = {
	development: {
		db: 'mongodb://localhost/jamieholliday',
		port: process.env.PORT || 3000
	},
	production: {
		db: 'mongolab...',
		port: process.env.PORT || 80
	}
}