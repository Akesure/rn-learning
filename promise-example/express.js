var express = require('express');
var app = express();

app.get('/', function(req, res){
  var data = {
    error : null,    
    value : {
      list : [
        { name : "Ramroll", title : "珠峰讲师" },
        { name : "狂鼠", title : "狙击手" },
        { name : "Nevermore", title : "Nervermore" },
        { name : "张三丰", title : "武当掌教" }
      ]
    }
  }

  res.send(data);
  });

app.listen(3000);
