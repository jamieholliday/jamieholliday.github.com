var fs = require('fs');

module.exports = function(config) {
	var models_path = config.rootPath + '/server/models'
	fs.readdirSync(models_path).forEach(function (file) {
	  if (~file.indexOf('.js')) { 
	  	require(models_path + '/' + file);
	  }
	});
}