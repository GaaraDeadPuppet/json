function onDeviceReady() {
	$.ajax({
		type: "POST",
		url: "http://www.ilazkitaldea.com/app/php/cargar_proxima_actividad.php",
		crossDomain: true,
		cache: false,
		data: { 
			name: "John", 
			location: "Boston" 
		},
		success: function(result){
			var result = $.parseJSON(result);
			$.each(result, function(i,field){
				$("#results").append(field);
			});
		}
	})
	.fail(function(jqXHR, textStatus) {
		$("#results").html( "Request failed: " + textStatus );
});