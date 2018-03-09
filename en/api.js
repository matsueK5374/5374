function dispMsg(str){
  document.write("<p>");
  document.write(str);
  document.write("</p>");
}

dispMsg("Hello");
document.write("<p>Good morning</p>");
dispMsg("bye");

dispCopyright();

function dispCopyright(){

  window.alert("①せんだい");

  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function()
  {
    window.alert("②ステータス：" + this.readyState + "◇" + this.status);

    if( this.readyState == 4 && this.status == 200 )
    {

        window.alert("③");

        if( this.response )
        {
            console.log(this.response);
            // 読み込んだ後処理したい内容をかく
            window.alert("きた" + this.response);
        }
    }
  }

  xmlHttpRequest.open( 'GET', 'https://aed.azure-mobile.net/api/aedinfo/%E5%AE%AE%E5%9F%8E%E7%9C%8C/%E4%BB%99%E5%8F%B0%E5%B8%82/', true );
  xmlHttpRequest.responseType = 'json';
  xmlHttpRequest.send( null );


 // document.write("<p>1" + data +"</p>");
}