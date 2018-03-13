/*
This is a Example program to retrieve and display the data. 
Press the Run button on the right of the screen (described the behavior of the Example program below). 
Please create a new application rewrite this program work. 
*/

var all_data;        
function initialize(){
	all_data = new Array();
	// データをLinkDataから取得 
	tmp_a_data = new Array();
	$.each(LinkData.getWorks(), function(workKey, workValue) {
		//$("#result").append("<h3>Work: " + workValue + "</h3>");
		$.each(LinkData.getFiles(workValue), function(fileKey, fileValue) {
			$.each(LinkData.getSubjects(workValue, fileValue), function(subjKey, subjValue) {
				var tmp_data = {}
				tmp_data["id"] = subjValue;
				$.each(LinkData.getProperties(workValue, fileValue), function(propKey, propValue) {
					$.each(LinkData.getObjects(workValue, fileValue, subjValue, propValue), function(objKey, objValue) {
						if(propValue == "http://linkdata.org/property/rdf1s3500i#address"){
							tmp_data["address"] = objValue;
						}else if(propValue == "http://www.w3.org/2003/01/geo/wgs84_pos#lat"){
							tmp_data["lat"] = objValue;
						}else if(propValue == "http://www.w3.org/2003/01/geo/wgs84_pos#long"){
							tmp_data["longitude"] = objValue;
						}else if(propValue == "http://purl.org/dc/terms/1.1/isPartOf"){
							tmp_data["shokan"] = objValue;
							//↓の要素は高槻市側のミスで","が入っている模様
						}else if(propValue == "http://www.w3.org/2000/01/rdf-schema#label,"){
							tmp_data["label"] = objValue;
						}
					});
				});
				tmp_a_data.push(tmp_data);
			});
		});
	});
	//全データ
	all_data = tmp_a_data;
	
	//全データを地図上に表示

    // 地図センター緯度経度の初期値は「JR」
    var latlng = new google.maps.LatLng(34.851641,135.617857);
    var myOptions = {
        zoom: 15,
    	center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
		
		
    };
	
	
	
	
    var map = new google.maps.Map(document.getElementById("result"), myOptions);
	// ウィンドウに表示するデータをつくる
    var data = new Array();
	for (var i in all_data){ 
        var value = all_data[i].label;  
        data.push({position: new google.maps.LatLng(all_data[i].lat, all_data[i].longitude), content: all_data[i].label + '<br><small>' + all_data[i].address + '</small>'});
	};     
    // 地図上にウィンドウで表示
    for (i = 0; i < data.length; i++) {
         var marker = new google.maps.Marker({
            position: data[i].position,
            map: map
        });
        attachMessage(marker, data[i].content);
    };

	var ctaLayer = new google.maps.KmlLayer({
    url: 'https://dl.dropboxusercontent.com/s/yaig0byozwjgfh6/Takatsuki_flood_map.kml?dl=0',
    map: map
  	});

};

// 地図のマーカーをクリックするとウィンドウを表示する処理
function attachMessage(marker, msg) {
	google.maps.event.addListener(marker, 'click', function(event) {
    	new google.maps.InfoWindow({
			content: msg
        }).open(marker.getMap(), marker);
    });

};

window.onload = function() {
    $(function(){
    	initialize();        
    });	
};
