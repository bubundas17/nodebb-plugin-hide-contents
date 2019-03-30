"use strict";

var plugin = {};

plugin.parse = function(data, callback) {
	if (!data || !data.postData || !data.postData.content) {
	    return callback(null, data);
	}

	plugin.parseRaw(data.postData.content, function (err, content) {
        console.log(data)
		data.postData.content = content;
		callback(err, data);
	});
};

plugin.parseRaw = function (content, callback) {
	callback(null, 
		content.replace(/\[hide\](.*?)\[\/hide\]/s, 'Hidden Content')
	);
};

module.exports = plugin;