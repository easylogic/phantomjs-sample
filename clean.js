
// get clean har file 

var fs = require('fs');
var target = process.argv[2];

var data = fs.readFileSync(target).toString();

if (data.indexOf("{") > -1) { 
	data = data.substr(data.indexOf("{"));
}

var err = fs.writeFileSync(target, data);

var list = JSON.parse(data);
var files = [];

list.log.entries.forEach(function(obj){
	if (obj.request.url.indexOf("pmang") > -1) { 
		files.push(obj.request.url);
	}
});


fs.writeFileSync(target + ".list", files.join("\r\n"));