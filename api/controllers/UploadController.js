/**
 * UploadController
 *
 * @description :: Server-side logic for managing uploads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res, next) {
		if(req.file('image')) {
			req.file('image').upload({
				dirname: process.cwd() + '/assets/upload'
			}, (err, uploadedFiles) => {
				if(err) res.serverError(err);
				
				var fileNames = [];
				console.log(req.get('host'));
				for( var key in uploadedFiles) {
					let upload = uploadedFiles[key].fd.replace(/\\/g,"/");
					fileNames.push(upload.split('/').reverse()[0]);
				}
				res.json({
					fileNames
				});
			});
		}
	}
};