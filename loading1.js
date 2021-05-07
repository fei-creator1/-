var http = require('http'); //引入http模块
//js的定时器
var time = setInterval(function () {
    http.get("http://www.baidu.com", function (res) {

        console.log(res.statusCode);

        if (res.statusCode == 200) { //状态码返回为200，说明已经连接成功。
            clearInterval(time);

        } else {

            http.get('http://172.16.30.45/drcom/login?callback=dr1606913765916&DDDDD=1920170006&upass=10011217&0MKKey=123456&R1=0&R3=1&R6=0&para=00&v6ip=&_=1606913760744', function (res) {
                var rawData = '';
                res.on('data', function (chunk) {
                    rawData += chunk;
                });
                res.on('end', function () {
                    console.log(rawData);
                });



            });


        }


    }).on("error", function (err) {
        console.log(err);
    });

}, 1000);