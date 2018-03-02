(function getJSON() {

    window.alert('①');

let http = require('http');
const URL = 'http://qiita.com/kazuhikoyamashita/items/273692ccbdf8c0950a71.json';

http.get(URL, (res) => {
  let body = '';
  res.setEncoding('utf8');

  res.on('data', (chunk) => {
      body += chunk;
  });

  res.on('end', (res) => {
      res = JSON.parse(body);

    window.alert('②' + res);

      console.log(res);
  });
}).on('error', (e) => {

    window.alert('③' + e.message);

  console.log(e.message); //エラー時
});
