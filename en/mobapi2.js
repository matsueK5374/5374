function getJSON() {

    window.alert('①◇');


    const request = new XMLHttpRequest();

    window.alert('②◇');

    //request.open("GET", `http://mob.tpj.co.jp/mob/api/records/41`);
    request.open("GET", "http://mob.tpj.co.jp/mob/api/records/41");
    window.alert('③◇');
    //request.addEventListener("load", (event) => {

    request.onload = function (e) {

    window.alert('ステータス：' + request.statusText);
    window.alert('なかみ：' + request.responseText); // => "{...}"

    });
    request.send();



  //var req = new XMLHttpRequest();		  // XMLHttpRequest オブジェクトを生成する
  //req.onreadystatechange = function() {		  // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
  //  if(req.readyState == 4 && req.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
  //    alert(req.responseText);		          // 取得した JSON ファイルの中身を表示
  //  }
  //};
  //req.open("GET", "http://mob.tpj.co.jp/mob/api/records/41", false); // HTTPメソッドとアクセスするサーバーの　URL　を指定
  //req.send(null);					    // 実際にサーバーへリクエストを送信
}
