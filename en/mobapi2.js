(function getJSON() {

    window.alert('①◆');


    var request = new XMLHttpRequest();

    window.alert('②◆');

    //request.open("GET", `http://mob.tpj.co.jp/mob/api/records/41`);
    request.open("GET", "http://mob.tpj.co.jp/mob/api/records/41", true);
    window.alert('③◆');
    //request.addEventListener("load", (event) => {

    request.onload = function (e) {

    window.alert('ステータス：' + request.statusText);
    window.alert('なかみ：' + request.responseText);

    };
    request.send(null);

})();
