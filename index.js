/*const http = require('https');
var iconv = require('iconv-lite');
const request = require('request');
const targetUrl = 'https://www.booktxt.net/5_5292/4562437.html';

request(targetUrl,function(err,data,body){
      var doc = new Buffer(body);
      console.log(doc);
});*/

const request = require('request');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');

var URL = 'https://www.booktxt.net/0_362/4536030.html';

var Options = {
    method: 'GET',
    encoding: null,
    url:URL,
    timeout:100000
};

request(Options,function(err,res,body){
    if(err){
        console.log('首页爬取失败');
        console.log(err);
        return ;
    }
    body = iconv.decode(body,'gbk');
    console.log(body);
})