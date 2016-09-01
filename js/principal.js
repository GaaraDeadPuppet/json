function darclick(){
	$(".opciones").click(descripcion);
}

function descripcion(){
	$.ajax({
		type: "POST",
		url: "http://www.ilazkitaldea.com/app/php/descripcion_actividades.php",
		crossDomain: true,
		cache: false,
		success: function(result){
			var result = $.parseJSON(result);
			$.each(result, function(i,field){
				$("#results").empty();
				$("#results").append(field);
			});
		}
	})
	.fail(function(jqXHR, textStatus) {
		$("#results").html( "Request failed: " + textStatus );
	});
}