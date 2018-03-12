$.ajax({
	url: 'https://aed.azure-mobile.net/api/aedinfo/%E5%AE%AE%E5%9F%8E%E7%9C%8C/%E4%BB%99%E5%8F%B0%E5%B8%82/',
	dataType: 'json',
	data: {name: 'chara'},
	success: function(data){
		var dataArray = data.charas;
		
		$.each(dataArray, function(i){
			$(".nameData").append("<p>id: " + dataArray[i].id + "Character: " + dataArray[i].chara + "(CV: " + dataArray[i].cv + ")</p>");
		});
	}
  window.alert("④");

});