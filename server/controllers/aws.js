'use strict';

var config = require('../config/config');
var aws = require('aws-sdk');


exports.getCreds = function(req, res) {
	aws.config.update({
		accessKeyId: config.aws.accessKey,
		secretAccessKey: config.aws.secretKey
	});
	var s3 = new aws.S3();
	var s3_params = {
		Bucket: config.aws.s3Bucket,
		Key: req.query.s3_object_name,
		Expires: 60,
		ContentType: req.query.s3_object_type,
		ACL: 'public-read'
	};

	s3.getSignedUrl('putObject', s3_params, function(err, data) {
		if(err) {
			console.log('putobjerr', err);
		} else {
			var return_data = {
				signed_request: data,
				url: 'https://' + config.aws.s3Bucket + '.s3.amazonaws.com/'+req.query.s3_object_name
			}
			res.write(JSON.stringify(return_data));
			res.end();
		}
	});
}

exports.putObject = function(req, res) {
	aws.config.update({
		accessKeyId: config.aws.accessKey,
		secretAccessKey: config.aws.secretKey
	});
	var base64Data = body.replace(/^data:image\/jpeg;base64,/,'');
	var fileData = parseDataURL(req.body.img);
	var s3 = new aws.S3();
	var s3_params = {
		Bucket: config.aws.s3Bucket,
		Key: req.query.s3_object_name,
		ACL: 'public-read',
		Body: fileData,
		ContentType: 'text/plain'
	};

	// s3.putObject(s3_params, function(err, data) {
	// 	if(err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log(data);
	// 		res.send({message: 'Success'})
	// 	}
	// });
}

function parseDataURL(body) {
	var base64Data = body.replace(/^data:image\/jpeg;base64,/,''),
  		binaryData = new Buffer(base64Data, 'base64').toString('binary');
	return binaryData;
}