(function getJSON() {

    window.alert('①');

let http = require('http');
const URL = 'http://qiita.com/kazuhikoyamashita/items/273692ccbdf8c0950a71.json';

    window.alert('②');


http.get(URL, (res) => {

    window.alert('③');

  let body = '';

    window.alert('④');

  res.setEncoding('utf8');

    window.alert('⑤');

  res.on('data', (chunk) => {
      body += chunk;
  });

    window.alert('⑥');

  res.on('end', (res) => {
      res = JSON.parse(body);

    window.alert('⑦' + res);

      console.log(res);
  });
}).on('error', (e) => {

    window.alert('③' + e.message);

  console.log(e.message); //エラー時
});
})();
