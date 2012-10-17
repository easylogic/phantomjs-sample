
// get clean har file 

var fs = require('fs');
var url = require('url');
var exec = require('child_process').exec;
var target = process.argv[2];
var dir = target + ".dir";	
var data = fs.readFileSync(target).toString();

var obj = JSON.parse(data);

var len = obj.log.entries.length;

for(var i = 0; i < len; i++) { 
	var data = url.parse(obj.log.entries[i].request.url);
	var output = dir + "/" + i;
	var command = "wget --output-document=" + output + " --directory-prefix=" + dir + " " + obj.log.entries[i].request.url;
	
	console.log(command);
	
	exec(command, function(err, stdout, stderr)  {  });
}

for(var i = 0; i < len; i++)  {
	var output = dir + "/" + i;
	var buf = fs.readFileSync(output);

	obj.log.entries[i].response.content.text = buf.toString('base64');
	obj.log.entries[i].response.content.encoding = "base64";	
}

fs.writeFileSync(target + "2", JSON.stringify(obj));