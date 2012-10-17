phantomjs netsniff.js http://www.pmang.com > temp/www.pmang.com.har 
node clean.js temp/www.pmang.com.har
wget -i temp/www.pmang.com.har.list -P temp/www.pmang.com.har.dir
node combine.js temp/www.pmang.com.har