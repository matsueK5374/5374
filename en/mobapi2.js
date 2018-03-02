(function getJSON() {

    window.alert('①◇');

let http = require('http');

    window.alert('②');


const URL = 'http://qiita.com/kazuhikoyamashita/items/273692ccbdf8c0950a71.json';

    window.alert('③');


http.get(URL, (res) => {

    window.alert('④');

  let body = '';

    window.alert('⑤');

  res.setEncoding('utf8');

    window.alert('⑥');

  res.on('data', (chunk) => {
      body += chunk;
  });

    window.alert('⑦');

  res.on('end', (res) => {
      res = JSON.parse(body);

    window.alert('⑧' + res);

      console.log(res);
  });
}).on('error', (e) => {

    window.alert('⑨' + e.message);

  console.log(e.message); //エラー時
});
})();
